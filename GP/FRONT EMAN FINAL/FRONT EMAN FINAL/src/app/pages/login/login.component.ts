import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {LoginserviceService} from 'src/app/services/loginservice.service';
import swal from 'sweetalert2'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginData = {
    username: '',
    password: ''


  };
  

  constructor(private loginservice: LoginserviceService, private router: Router) {
  }

  ngOnInit(): void {
  }

  formSubmit() {
    if (this.loginData.username.trim() == '' || this.loginData.username == null) {
      swal.fire('please Fill The Form!!', '', 'question');
      return;
    }

    if (this.loginData.password.trim() == '' || this.loginData.password == null) {
      swal.fire('please Fill The Form!!', '', 'question');
      return;
    }

    //request to server to generate token
    this.loginservice.generateToken(this.loginData).subscribe(
      (data: any) => {
        console.log("Success");
        console.log(data);


        

        
       
        





        //login
        this.loginservice.loginUser(data.token);
        this.loginservice.getCurrentUser().subscribe(
          (user: any) => {
            this.loginservice.setUser(user);
            console.log(user);

            if (this.loginservice.getUserRole() == "ROLE_ADMIN") {
              this.router.navigate(['admin'])
              this.loginservice.loginStatusSubject.next(true);
            } 
            
            else if (this.loginservice.getUserRole() == "ROLE_PATIENT") {
              this.router.navigate(['user-dashboard'])
              this.loginservice.loginStatusSubject.next(true);
            } 

            else if (this.loginservice.getUserRole() == "ROLE_DIAGNOSTIC_DOCTOR") {
              this.router.navigate(['doctorhome']);
              this.loginservice.loginStatusSubject.next(true)}


              else if (this.loginservice.getUserRole() == "ROLE_LAB_TECHNICAL") {
                this.router.navigate(['homelabtech']);
                this.loginservice.loginStatusSubject.next(true)}

                else if (this.loginservice.getUserRole() == "ROLE_PHARMACIST") {
                  this.router.navigate(['pharmcist']);
                  this.loginservice.loginStatusSubject.next(true)}
                  
            else {
              this.loginservice.logout();
            }
          }
        );
      },
      (error) => {
        console.log('Error !!');
        console.log(error);
        swal.fire('Invalid Details !! Try again ', '', 'warning')
      }
    );


  }
}

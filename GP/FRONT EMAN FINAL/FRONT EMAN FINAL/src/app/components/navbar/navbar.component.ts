import { Component, OnInit } from '@angular/core';
import { LoginserviceService } from 'src/app/services/loginservice.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

isLoggedIn=false;
user=null;


  constructor(public loginservice:LoginserviceService) { }

  ngOnInit(): void { this.isLoggedIn=this.loginservice.isLoggedIn();
  this.user=this.loginservice.getUser();
this.loginservice.loginStatusSubject.asObservable().subscribe(data=>{


  this.isLoggedIn=this.loginservice.isLoggedIn();
  this.user=this.loginservice.getUser();

})


}
  public logout(){
    this.loginservice.logout();
   
    //window.location.reload();
    this.loginservice.loginStatusSubject.next(false);
  }
  
}

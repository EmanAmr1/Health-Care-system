import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subject, tap } from 'rxjs';
import { Forgetpassclass } from 'src/app/classes/forgetpassclass';
import { ForgetpassserviceService } from 'src/app/services/forgetpassservice.service';
import swal from 'sweetalert2'
@Component({
  selector: 'app-forgetpass',
  templateUrl: './forgetpass.component.html',
  styleUrls: ['./forgetpass.component.css']
})
export class ForgetpassComponent implements OnInit {
  forgetc: Forgetpassclass= new Forgetpassclass();
  constructor(private forgetservice:ForgetpassserviceService, private http: HttpClient,private router: Router ) { }

  ngOnInit(): void {;
  }
 

  forget() {
    console.log(this.forgetc);
    this.forgetservice.forgetservicefunction(this.forgetc).subscribe(
      (data: any) => {
        swal.fire('please check your Email', '', 'success');
        console.log(data); // Log the response data
        localStorage.setItem('response', data); // Save the response data in local storage
      },
      (error: any) => {
        alert("Sorry, please enter the correct required data");
        console.log(error); // Log the error response
      }
    );
  }




}

  
  
  
  









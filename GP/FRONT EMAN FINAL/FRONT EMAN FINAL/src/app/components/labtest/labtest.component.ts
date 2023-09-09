import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Testtable } from 'src/app/classes/testtable';
import { LoginserviceService } from 'src/app/services/loginservice.service';
import { TesttableserviceService } from 'src/app/services/testtableservice.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-labtest',
  templateUrl: './labtest.component.html',
  styleUrls: ['./labtest.component.css']
})
export class LabtestComponent implements OnInit {

  constructor(private loginsrvice:LoginserviceService,private http: HttpClient,private labtestser:TesttableserviceService,private route:ActivatedRoute) { }
  userName= localStorage.getItem('username');

labtest:Testtable[]=[];

  ngOnInit(): void {this.loginsrvice.getCurrentUser().subscribe();


    this.labtestser.getlab(this.userName)
    .subscribe( (data:any)=>{
       this.labtest=data;

       console.log(data); 

       
     


       this.http.get<any>(`http://localhost:8080/api/scan/table/${this.userName}`).subscribe(response => {
        const testResult = response[0].testResult;
        console.log(testResult); 
        localStorage.setItem('testResult', testResult);
        // Use testResult value as per your requirement
      });
       
       // Log the response data
       

     },(error)=>{
       console.log(error);
     });





  }









  onDownload() {
    this.http.get(`http://localhost:8080/api/downloadTests/${this.userName}`, { responseType: 'blob' }).subscribe(
      (response) => {
        const blob = new Blob([response], { type: 'application/zip' });
        const url = window.URL.createObjectURL(blob);
        window.open(url);
        Swal.fire('Success', ' ' , 'success');
      },
      (error) => {
        console.error(error);
        // Handle the error 
        Swal.fire('Something went wrong', '', 'warning');
      }
    );
  }


  onDownload2() {

    
    let res= localStorage.getItem('testResult'); 
    console.log("tttttttttt"+res)

    this.http.get(`http://localhost:8080/api/test/download/${res}`, { responseType: 'blob' }).subscribe(
      (response) => {
        const blob = new Blob([response], { type: 'application/zip' });
        const url = window.URL.createObjectURL(blob);
        window.open(url);
        Swal.fire('Success', ' ' , 'success');
      },
      (error) => {
        console.error(error);
        // Handle the error 
        Swal.fire('Something went wrong', '', 'warning');
      }
    );
  }







}

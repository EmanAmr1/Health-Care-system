import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Labclass } from 'src/app/classes/labclass';
import { LabserviceService } from 'src/app/services/labservice.service';
import { LoginserviceService } from 'src/app/services/loginservice.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-labresults',
  templateUrl: './labresults.component.html',
  styleUrls: ['./labresults.component.css']
})
export class LabresultsComponent implements OnInit {

  constructor(private loginsrvice:LoginserviceService,private http: HttpClient,private labscanser:LabserviceService,private route:ActivatedRoute) { }
  userName= localStorage.getItem('username');
  
  labscan:Labclass[]=[];



  ngOnInit(): void {this.loginsrvice.getCurrentUser().subscribe();


    
    this.labscanser.getlab(this.userName)
    .subscribe( (data:any)=>{
       this.labscan=data;

       console.log(data);  

       
     


       this.http.get<any>(`http://localhost:8080/api/scan/table/${this.userName}`).subscribe(response => {
        const testResult = response[0].scanId;
        console.log(testResult); 
        localStorage.setItem('scanId', testResult);
        // Use testResult value as per your requirement
      });
       
       // Log the response data
       

     },(error)=>{
       console.log(error);
     });



     



  }
  onDownload() {
    
    this.http.get(`http://localhost:8080/api/download/${this.userName}`, { responseType: 'blob' }).subscribe(
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

    
    let res= localStorage.getItem('scanId'); 
    console.log("tttttttttt"+res)

    this.http.get(`http://localhost:8080/api/scan/download/${res}`, { responseType: 'blob' }).subscribe(
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

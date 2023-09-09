import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Labclass } from 'src/app/classes/labclass';
import { LabserviceService } from 'src/app/services/labservice.service';
import { LoginserviceService } from 'src/app/services/loginservice.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-drdownloadscans',
  templateUrl: './drdownloadscans.component.html',
  styleUrls: ['./drdownloadscans.component.css']
})
export class DrdownloadscansComponent implements OnInit {
  userName= localStorage.getItem('username');
  hw= localStorage.getItem('scan');  
  
  labscan:Labclass[]=[];

  constructor(private loginsrvice:LoginserviceService,private http: HttpClient,private labscanser:LabserviceService,private route:ActivatedRoute) { }

  ngOnInit(): void {this.loginsrvice.getCurrentUser().subscribe();


    
    this.labscanser.getlab(this.hw)
    .subscribe( (data:any)=>{
       this.labscan=data;

       console.log(data); 

       
       let hw= localStorage.getItem('scan');  
       console.log(hw);


       this.http.get<any>(`http://localhost:8080/api/scan/table/${hw}`).subscribe(response => {
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
    let hw= localStorage.getItem('scan');  
    console.log(hw);
    this.http.get(`http://localhost:8080/api/download/${hw}`, { responseType: 'blob' }).subscribe(
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

    
    let ress= localStorage.getItem('scanId'); 
    console.log("tttttttttt"+ress)

    this.http.get(`http://localhost:8080/api/scan/download/${ress}`, { responseType: 'blob' }).subscribe(
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



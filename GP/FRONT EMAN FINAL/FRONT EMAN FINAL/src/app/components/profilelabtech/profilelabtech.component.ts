import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Labtechprofileclass } from 'src/app/classes/labtechprofileclass';
import { LabtechprofileserviceService } from 'src/app/services/labtechprofileservice.service';
import { LoginserviceService } from 'src/app/services/loginservice.service';
import { PharmprofileserviceService } from 'src/app/services/pharmprofileservice.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-profilelabtech',
  templateUrl: './profilelabtech.component.html',
  styleUrls: ['./profilelabtech.component.css']
})
export class ProfilelabtechComponent implements OnInit {
  labp: Labtechprofileclass =new Labtechprofileclass();

  userName= localStorage.getItem('username');
  imageSrc: string | undefined;



  selectedFile!: File ;
  constructor(private pharmprservice:PharmprofileserviceService,private http: HttpClient, private loginsrvice:LoginserviceService,private labprservice:LabtechprofileserviceService) { }

  ngOnInit(): void {this.loginsrvice.getCurrentUser().subscribe();
    this.labprservice.getprdata(this.userName)
    .subscribe( (data:any)=>{
       this.labp=data;
     },(error)=>{
       console.log(error); 
     }); 



     this.pharmprservice.downloadImage(this.userName).subscribe(
      response => {
        const reader = new FileReader();
        reader.onloadend = () => {
          this.imageSrc = reader.result as string;
        };
        reader.readAsDataURL(response);
      },
      error => {
        console.error('Failed to download image');
      }
    );





   }

   onFileSelected(event:any) {
    this.selectedFile = event.target.files[0];
  }
   onSubmit() {
    const formData = new FormData();
    formData.append('file', this.selectedFile);
    if (this.userName) {
      formData.append('userName', this.userName);
    } else {
      // Handle the case when this.userName is null
      formData.append('userName', '');
    }
    // Call your backend API to upload the file using the formData
    // For example:
    const apiUrl =`http://localhost:8080/user/image/upload/${this.userName}`;  // Construct the API URL
  
    this.http.post(apiUrl, formData).subscribe(
      (response) => {
        console.log(response);
        // Handle the response from the server
        Swal.fire('Success', ' ' , 'success');
      },
      (error) => {
        console.error(error);
        // Handle the error
      }
    );
  
  



    }}

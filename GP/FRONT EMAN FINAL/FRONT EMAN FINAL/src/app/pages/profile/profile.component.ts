import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PatientProfile, PatientProfile2 } from 'src/app/classes/patientProfile';
import { LoginserviceService } from 'src/app/services/loginservice.service';
import { ProfileserviceService } from 'src/app/services/profileservice.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  info: PatientProfile = new PatientProfile();
info2:PatientProfile2=new PatientProfile2();

  userName= localStorage.getItem('username'); 
  imageSrc: string | undefined;



  selectedFile!: File ;
  constructor(private http: HttpClient,private loginsrvice:LoginserviceService,private infoservice:ProfileserviceService,private route:ActivatedRoute, private router:Router) { }

  ngOnInit(): void {  this.loginsrvice.getCurrentUser().subscribe();
    
   this.infoservice.getmedicine(this.userName) 
   .subscribe( (data:any)=>{
      this.info=data;
    },(error)=>{
      console.log(error); 
    }); 
    
    
    this.infoservice.getdata(this.userName) 
    .subscribe( (data:any)=>{
       this.info2=data;
     },(error)=>{
       console.log(error); 
     }); 







    this.infoservice.downloadImage(this.userName).subscribe(
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
  }




 
}

















  


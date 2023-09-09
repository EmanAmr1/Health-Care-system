import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Drprofileclass } from 'src/app/classes/drprofileclass';
import { DrprofileserviceService } from 'src/app/services/drprofileservice.service';
import { LoginserviceService } from 'src/app/services/loginservice.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-dr-profile',
  templateUrl: './dr-profile.component.html',
  styleUrls: ['./dr-profile.component.css']
})
export class DrProfileComponent implements OnInit {
drp: Drprofileclass =new Drprofileclass();


imageSrc: string | undefined;



  selectedFile!: File ;
  userName= localStorage.getItem('username');
  constructor(private http: HttpClient,private loginsrvice:LoginserviceService,private drprservice:DrprofileserviceService) { }

  ngOnInit(): void {this.loginsrvice.getCurrentUser().subscribe();
    this.drprservice.getmedicine(this.userName)
    .subscribe( (data:any)=>{
       this.drp=data;
     },(error)=>{
       console.log(error); 
     }); 




     this.drprservice.downloadImage(this.userName).subscribe(
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
 


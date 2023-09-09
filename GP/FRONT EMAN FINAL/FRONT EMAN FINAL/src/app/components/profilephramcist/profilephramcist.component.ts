import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Pharmprofileclass } from 'src/app/classes/pharmprofileclass';
import { LoginserviceService } from 'src/app/services/loginservice.service';
import { PharmprofileserviceService } from 'src/app/services/pharmprofileservice.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-profilephramcist',
  templateUrl: './profilephramcist.component.html',
  styleUrls: ['./profilephramcist.component.css']
})
export class ProfilephramcistComponent implements OnInit {
  pharmp: Pharmprofileclass =new Pharmprofileclass();
  userName= localStorage.getItem('username');
  imageSrc: string | undefined;



  selectedFile!: File ;

  constructor(private http: HttpClient,private loginsrvice:LoginserviceService,private pharmprservice:PharmprofileserviceService) { }

  ngOnInit(): void {

    this.loginsrvice.getCurrentUser().subscribe();
    this.pharmprservice.getprdata(this.userName)
    .subscribe( (data:any)=>{
       this.pharmp=data;
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















 }











  }



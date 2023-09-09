import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { LoginserviceService } from 'src/app/services/loginservice.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent implements OnInit {
  userName= localStorage.getItem('username');
  constructor(private loginsrvice:LoginserviceService,private http: HttpClient) { }
  selectedFile!: File ;
  hw= localStorage.getItem('scan');  
  
  ngOnInit(): void {
    this.loginsrvice.getCurrentUser().subscribe();
  }

  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0];
  }


  onUpload() { 
    const formData = new FormData();
    formData.append('file', this.selectedFile);
    if (this.userName) {
      formData.append('userName', this.userName);
    } else {
      // Handle the case when this.userName is null
      formData.append('userName', '');
    }
    
    const apiUrl =`http://localhost:8080/api/scanresults/${this.hw}/${this.userName}`;  // Construct the API URL

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


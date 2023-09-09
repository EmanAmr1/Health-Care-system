import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material';
import { Router } from '@angular/router';
import { UserserviceService } from 'src/app/services/userservice.service';

import { FormBuilder, FormGroup, FormArray, FormControl, Validators } from '@angular/forms';


import Swal from 'sweetalert2';
   
@Component({
  selector: 'app-signupdoctor',
  templateUrl: './signupdoctor.component.html',
  styleUrls: ['./signupdoctor.component.css']
})
export class SignupdoctorComponent implements OnInit {
  

  form: FormGroup | any;



  constructor(private userservice:UserserviceService , private snack:MatSnackBar, private _router: Router,private formBuilder: FormBuilder) { 

  }





 

  


  ngOnInit(): void {

    this.form = this.formBuilder.group({  
      
      firstName: ['', Validators.required],
    middleName: ['', Validators.required],
    lastName: ['', Validators.required],
    username: ['', Validators.required],
    password: ['', Validators.required],
    email: ['', Validators.required],
    phoneNumber: ['', Validators.required],
    dateOfBirth: ['', Validators.required],
    authorityName:['', Validators.required],
    specialization: ['', Validators.required],

    experience: ['', Validators.required],

   

    city: ['', Validators.required],

    street: ['', Validators.required],

    apartmentNo: ['', Validators.required],
    workPlaceInfos: this.formBuilder.array([this.createWorkPlaceInfo()])
    });
  }

  createWorkPlaceInfo(): FormGroup {
     return this.formBuilder.group({
  placeName: ['', Validators.required],
    cityOfTheWork: ['', Validators.required],
    streetOfTheWork: ['', Validators.required],
    workBlockNo: ['', Validators.required]
    });
  }
  get workPlaceInfos(): FormArray {
     return this.form.get('workPlaceInfos') as FormArray;
    }
    
    addWorkPlaceInfo(): void {
     this.workPlaceInfos.push(this.createWorkPlaceInfo());
   }
    
    removeWorkPlaceInfo(index: number): void {
    this.workPlaceInfos.removeAt(index);
     }

  

  onSubmit() {
    
    this.userservice.addDoctor(this.form.value).subscribe(
    (data: any) => {
   // Success
    console.log(data);
     Swal.fire('Success', ' ' , 'success');
     this._router.navigate(['login']);
    },
  (error) => {
     // Error
    console.log(error);
    Swal.fire('please enter valid data', '', 'warning');
    }
  );
    }
    }



import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, FormControl, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material';
import { Router } from '@angular/router';
import { UserserviceService } from 'src/app/services/userservice.service';

import Swal from 'sweetalert2';
@Component({
  selector: 'app-signuplabtech',
  templateUrl: './signuplabtech.component.html',
  styleUrls: ['./signuplabtech.component.css']
})
export class SignuplabtechComponent implements OnInit {
  form: FormGroup | any;
  constructor(private userservice:UserserviceService , private snack:MatSnackBar, private _router: Router,private formBuilder: FormBuilder) { }

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
    labName: ['', Validators.required],

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
   
   this.userservice.addLabTech(this.form.value).subscribe(
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



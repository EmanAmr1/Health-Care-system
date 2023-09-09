import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material';
import { Router } from '@angular/router';
import { LoginserviceService } from 'src/app/services/loginservice.service';
import { SpelizationserviceService } from 'src/app/services/spelizationservice.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-addpre',
  templateUrl: './addpre.component.html',
  styleUrls: ['./addpre.component.css']
})
export class AddpreComponent implements OnInit {
  form: FormGroup | any;
  

  constructor(private addpreservice:SpelizationserviceService , private snack:MatSnackBar, private _router: Router,private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    
    this.form = this.formBuilder.group({  
      
      date: ['', Validators.required],
      drFullName: ['', Validators.required],
      diagnosisName: ['', Validators.required],
      notes: ['', Validators.required],
     
      testName: this.formBuilder.array([this.createtestnameList()]),
      scanName:this.formBuilder.array([this.createscannameList()]),
      

      //scanName: this.formBuilder.array([''], Validators.required),
    apartmentNo: ['', Validators.required],
    medicineDtoList: this.formBuilder.array([this.createmedicineDtoList()])
    });









  }






 

  createtestnameList(): FormGroup {
    return this.formBuilder.group({
      testName: ['', Validators.required],
    });
  }
  createscannameList(): FormGroup {
    return this.formBuilder.group({
      scanName: ['', Validators.required],
    });
  }

  get testInfos(): FormArray {
    return this.form.get('testName') as FormArray;
   }

  
   addtestInfo(): void {
    this.testInfos.push(this.createtestnameList());
  }
  removetestInfo(index: number): void {
    this.testInfos.removeAt(index);
     }




     get scanInfos(): FormArray {
      return this.form.get('scanName') as FormArray;
     }
  
    
     addscanInfo(): void {
      this.scanInfos.push(this.createscannameList());
    }
    removescanInfo(index: number): void {
      this.scanInfos.removeAt(index);
       }












  createmedicineDtoList(): FormGroup {
    return this.formBuilder.group({
      medicineName: ['', Validators.required],
      medicineDoses: ['', Validators.required],
      period: ['', Validators.required],
      startDate: ['', Validators.required]
   });
 }
 get workPlaceInfos(): FormArray {
    return this.form.get('medicineDtoList') as FormArray;
   }

   

   
   addWorkPlaceInfo(): void {
    this.workPlaceInfos.push(this.createmedicineDtoList());
  }
  removeWorkPlaceInfo(index: number): void {
    this.workPlaceInfos.removeAt(index);
     }

 


    onSubmit() {
    
      this.addpreservice.addpre(this.form.value).subscribe(
      (data: any) => {
     // Success
      console.log(data);
       Swal.fire('Success', ' ' , 'success');
       
      },
    (error) => {
       // Error
      console.log(error);
      Swal.fire('please enter valid data', '', 'warning');
      }
    );
      }
}

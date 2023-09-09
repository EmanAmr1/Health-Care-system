import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Medicineclass } from 'src/app/classes/medicineclass';
import { LoginserviceService } from 'src/app/services/loginservice.service';
import { MedicineserverService } from 'src/app/services/medicineserver.service';

@Component({
  selector: 'app-medicines',
  templateUrl: './medicines.component.html',
  styleUrls: ['./medicines.component.css']
})
export class MedicinesComponent implements OnInit {
  userName= localStorage.getItem('username');
  medicinelist:Medicineclass[]=[];
  
  constructor(private loginsrvice:LoginserviceService,private medicineservice:MedicineserverService,private route:ActivatedRoute) { }

  ngOnInit(): void {
    
    
    this.loginsrvice.getCurrentUser().subscribe();
    this.medicineservice.getmedicine(this.userName)
    .subscribe( (data:any)=>{
       this.medicinelist=data;
     },(error)=>{
       console.log(error);
     });
    
  }

  
}

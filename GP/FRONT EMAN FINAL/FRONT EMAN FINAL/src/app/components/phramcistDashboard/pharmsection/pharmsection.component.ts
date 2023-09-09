import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Pharmsectionclass } from 'src/app/classes/pharmsectionclass';
import { LoginserviceService } from 'src/app/services/loginservice.service';
import { PharmsectionserviceService } from 'src/app/services/pharmsectionservice.service';
import { Medicineclass } from 'src/app/classes/medicineclass';
import { MedicineserverService } from 'src/app/services/medicineserver.service';

@Component({
  selector: 'app-pharmsection',
  templateUrl: './pharmsection.component.html',
  styleUrls: ['./pharmsection.component.css']
})
export class PharmsectionComponent implements OnInit {

  medicinelist:Medicineclass[]=[];

  userName= localStorage.getItem('username');

 hw= localStorage.getItem('scan');  
  
 hiddenRows: boolean[] = [];

  constructor(private loginsrvice:LoginserviceService,private medicineservice:MedicineserverService,private route:ActivatedRoute) { }

  ngOnInit(): void {

    this.loginsrvice.getCurrentUser().subscribe();
    this.medicineservice.getmedicine(this.hw)
    .subscribe( (data:any)=>{
       this.medicinelist=data;
     },(error)=>{
       console.log(error);
     });
    
  }
  hideRow(index: number) {
    this.hiddenRows[index] = !this.hiddenRows[index];
  }
}

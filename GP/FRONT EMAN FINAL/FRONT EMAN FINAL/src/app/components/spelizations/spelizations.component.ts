import { Component, OnInit } from '@angular/core';
import { Spelizationclass } from 'src/app/classes/spelizationclass';
import { LoginserviceService } from 'src/app/services/loginservice.service';
import { SpliServiceService } from 'src/app/services/spli-service.service';

@Component({
  selector: 'app-spelizations',
  templateUrl: './spelizations.component.html',
  styleUrls: ['./spelizations.component.css']
})
export class SpelizationsComponent implements OnInit {

  userName= localStorage.getItem('username'); 
 spli:Spelizationclass[]=[];
  constructor(private loginsrvice:LoginserviceService,private spliservice:SpliServiceService) { }

  ngOnInit(): void {
    this.loginsrvice.getCurrentUser().subscribe();
    this.spliservice.getspli(this.userName)
    .subscribe( (data:any)=>{
       this.spli=data;
     },(error)=>{
       console.log(error); 
     }); 

   

  }

}

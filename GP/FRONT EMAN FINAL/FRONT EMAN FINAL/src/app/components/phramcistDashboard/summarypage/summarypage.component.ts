import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PatientProfile } from 'src/app/classes/patientProfile';
import { Summaryclass } from 'src/app/classes/summaryclass';
import { Summaryclass2 } from 'src/app/classes/summaryclass2';
import { LoginserviceService } from 'src/app/services/loginservice.service';
import { ProfileserviceService } from 'src/app/services/profileservice.service';
import { SummarypageserviceService } from 'src/app/services/summarypageservice.service';

@Component({
  selector: 'app-summarypage',
  templateUrl: './summarypage.component.html',
  styleUrls: ['./summarypage.component.css']
})
export class SummarypageComponent implements OnInit {
  info: PatientProfile = new PatientProfile();

  userName= localStorage.getItem('username');

 hw= localStorage.getItem('scan');  
 



  summurylist:Summaryclass= new Summaryclass();

  summurylist2:Summaryclass2[]=[];
  
  constructor(private loginsrvice:LoginserviceService,private infoservice:ProfileserviceService,private route:ActivatedRoute, private router:Router,private summryservice:SummarypageserviceService) { }

  ngOnInit(): void {
    
    this.loginsrvice.getCurrentUser().subscribe();
    
    this.infoservice.getmedicine(this.hw)
    .subscribe( (data:any)=>{
       this.info=data;
     },(error)=>{
       console.log(error); 
     });

     this.summryservice.getmedicine(this.hw)
     .subscribe( (data:any)=>{
        this.summurylist=data;
      },(error)=>{
        console.log(error);
      });

      this.summryservice.getmedicine2(this.hw)
      .subscribe( (data:any)=>{
         this.summurylist2=data;
       },(error)=>{
         console.log(error);
       });
 
       

  }

}

import { Component, OnInit } from '@angular/core';
import { AllContactRequestsClass } from 'src/app/classes/all-contact-requests-class';
import { AllContactReqServiceService } from 'src/app/services/all-contact-req-service.service';
import { AllLostReqServiceService } from 'src/app/services/all-lost-req-service.service';

@Component({
  selector: 'app-allcontactrequests',
  templateUrl: './allcontactrequests.component.html',
  styleUrls: ['./allcontactrequests.component.css']
})
export class AllcontactrequestsComponent implements OnInit {
  req:AllContactRequestsClass[]=[];
  constructor(private allreqservice:AllContactReqServiceService) { }
  hiddenRows: boolean[] = [];
  ngOnInit(): void {

    this.allreqservice.getreq()
    .subscribe( (data:any)=>{
       this.req=data;
     },(error)=>{
       console.log(error); 
     });  

  }

  hideRow(index: number) {
    this.hiddenRows[index] = !this.hiddenRows[index];
  }


}

import { Component, OnInit } from '@angular/core';
import { AllLostRequestsClass } from 'src/app/classes/all-lost-requests-class';
import { AllLostReqServiceService } from 'src/app/services/all-lost-req-service.service';

@Component({
  selector: 'app-alllostrequests',
  templateUrl: './alllostrequests.component.html',
  styleUrls: ['./alllostrequests.component.css']
})
export class AlllostrequestsComponent implements OnInit {
  reqlost:AllLostRequestsClass[]=[]; 
  constructor(private allreqservice:AllLostReqServiceService) { }
  hiddenRows: boolean[] = [];
  ngOnInit(): void {


    this.allreqservice.getreqlost()
    .subscribe( (data:any)=>{
       this.reqlost=data;
     },(error)=>{
       console.log(error); 
     }); 

  }
  hideRow(index: number) {
    this.hiddenRows[index] = !this.hiddenRows[index];
  }

}

import { Component, OnInit } from '@angular/core';
import { TandSREQ } from 'src/app/classes/tand-sreq';
import { TandSReqServiceService } from 'src/app/services/tand-sreq-service.service';

@Component({
  selector: 'app-test-and-scan-required',
  templateUrl: './test-and-scan-required.component.html',
  styleUrls: ['./test-and-scan-required.component.css']
})
export class TestAndScanRequiredComponent implements OnInit {
  hw= localStorage.getItem('scan'); 
  datalist:TandSREQ[]=[];

  constructor(private TandSreqSER:TandSReqServiceService) { }

  ngOnInit(): void {


    this.TandSreqSER.getdata(this.hw)
    .subscribe( (data:any)=>{
       this.datalist=data;
     },(error)=>{
       console.log(error);
     });


  }

}

import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { PatientProfile } from 'src/app/classes/patientProfile';
import { LoginserviceService } from 'src/app/services/loginservice.service';
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  
  info: PatientProfile[]=[];

  constructor(public loginservice:LoginserviceService) { }

  ngOnInit(): void {
  }

}

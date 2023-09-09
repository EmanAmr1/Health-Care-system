import { Component, OnInit } from '@angular/core';
import { ScancardserviceService } from 'src/app/services/scancardservice.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-labscan',
  templateUrl: './labscan.component.html',
  styleUrls: ['./labscan.component.css']
})
export class LabscanComponent implements OnInit {

  constructor(private scanser:ScancardserviceService) { }

  ngOnInit(): void {
  }
  scan() {
    console.log();
    this.scanser.scanfunction().subscribe(
      (data: any) => {
        Swal.fire('Thank you your issue has been submitted', '', 'success');
        console.log("HW USERNAME"+data); // Log the response data
        localStorage.setItem('scan', data); // Save the response data in local storage
      },
      (error: any) => {
        alert("Sorry, please enter the correct required data");
        console.log(error); // Log the error response
      }
    );
  }
}

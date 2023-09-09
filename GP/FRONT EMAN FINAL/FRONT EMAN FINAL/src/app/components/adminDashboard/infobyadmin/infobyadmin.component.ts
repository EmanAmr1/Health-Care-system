import { Component, OnInit } from '@angular/core';
import { InfobyadminserviceService } from 'src/app/services/infobyadminservice.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-infobyadmin',
  templateUrl: './infobyadmin.component.html',
  styleUrls: ['./infobyadmin.component.css']
})
export class InfobyadminComponent implements OnInit {

  constructor(private infobyadminser:InfobyadminserviceService) { }
  public info = {
    bloodPressure:'',

    bloodType:'',

    Diabietes:'',

     heartDisease:'',

     Alcohol:'',

     treatment:'',

     tumors:'',
  };
  ngOnInit(): void {
  }

onsubmit(){
  this.infobyadminser.infobyadminfun(this.info).subscribe(
    (data:any)=>{
      //success
      console.log(data);

      Swal.fire('success', '','success')
      

    },
    (error)=>{
      //error
      console.log(error);
      Swal.fire('please enter valid data','','warning')
    }
    );




}



}

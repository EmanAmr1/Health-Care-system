import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Confirmpassclass } from 'src/app/classes/confirmpassclass';
import { ConfirmpassserviceService } from 'src/app/services/confirmpassservice.service';
import swal from 'sweetalert2'
@Component({
  selector: 'app-confirmpass',
  templateUrl: './confirmpass.component.html',
  styleUrls: ['./confirmpass.component.css']
})
export class ConfirmpassComponent implements OnInit {
  confirmc: Confirmpassclass= new Confirmpassclass();
  


  
  
  constructor(private confirmservice:ConfirmpassserviceService, private http: HttpClient,private router: Router) { }

  ngOnInit(): void { 
  }
  confirm(){
  
    console.log(this.confirmc); 
    this.confirmservice.confirmservicefunction(this.confirmc).subscribe(data=>{ swal.fire('your password has been changed successfully','','success')}
    ,error=>swal.fire('ERROR','')); 
    
  }
}


  
  
  


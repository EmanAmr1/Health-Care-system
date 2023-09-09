import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Confirmpassclass } from '../classes/confirmpassclass';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConfirmpassserviceService {
  constructor(private httpCLient:HttpClient) { }
  
  confirmservicefunction(confirmc: Confirmpassclass):Observable<string>
  {
    let res= localStorage.getItem('response');  
    console.log(res);
    console.log(confirmc)
    return this.httpCLient.post(`http://localhost:8080/api/auth/reset-password?token=${res}`,confirmc,{responseType: 'text'}); 
    
  }




}
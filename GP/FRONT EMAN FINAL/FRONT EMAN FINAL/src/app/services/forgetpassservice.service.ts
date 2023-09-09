import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Forgetpassclass } from '../classes/forgetpassclass';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ForgetpassserviceService {

  constructor(private httpCLient:HttpClient) { }

  forgetservicefunction(forgetc: Forgetpassclass):Observable<string>
  {console.log(typeof forgetc)
    return this.httpCLient.post("http://localhost:8080/api/auth/reset-password-request",forgetc,{responseType: 'text'}); 
    
  }
    

}

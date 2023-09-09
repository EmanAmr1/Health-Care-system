import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UploadserviceService {

  constructor(private httpCLient:HttpClient) { }

  url: string ="http://localhost:8080/api/scanresults/'"
  getmedicine(userName:any){

    return this.httpCLient.get(`${this.url}${userName}`); 
  }

}

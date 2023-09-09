import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Medicineclass } from '../classes/medicineclass';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MedicineserverService {

  constructor(private httpCLient:HttpClient) { }
  url: string ="http://localhost:8080/patients/current-medicine/" ;

  getmedicine(userName:any){

    return this.httpCLient.get(`${this.url}${userName}`); 
  }
}

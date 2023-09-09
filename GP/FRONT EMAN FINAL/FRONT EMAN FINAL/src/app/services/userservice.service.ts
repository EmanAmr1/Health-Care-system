import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class UserserviceService {

  constructor( private http:HttpClient) { }

  //add user

  public adduser(user: any)
  {
    return this.http.post("http://localhost:8080/api/auth/patient-signup",user);
  }

public addAdmin(user: any)
{
  return this.http.post("http://localhost:8080/api/auth/admin-signup",user);
}
public addDoctor(user: any)
{
  return this.http.post("http://localhost:8080/api/auth/specialist-doctor-signup",user);
}
public addLabTech(user: any)
{
  return this.http.post("http://localhost:8080/api/auth/lab-tec-signup",user);
}

public addPharm(user: any){
  return this.http.post("http://localhost:8080/api/auth/pharmacist-signup",user);
}
}

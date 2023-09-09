import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material';
import { Router } from '@angular/router';
import { UserserviceService } from 'src/app/services/userservice.service';
import swal from 'sweetalert2'
@Component({
  selector: 'app-signupadmin',
  templateUrl: './signupadmin.component.html',
  styleUrls: ['./signupadmin.component.css']
})
export class SignupadminComponent implements OnInit {

  constructor(private userservice:UserserviceService , private snack:MatSnackBar, private _router: Router) { }
  public user = {
    firstName: '',
    middleName: '',
    lastName: '',
    username: '',
    password: '',
    email: '',
    phoneNumber: '',
   
    dateOfBirth: '',
    authorityName: '',


    city: '',

    street: '',

    apartmentNo: ''

  };

  




  ngOnInit(): void {
  }
  formSubmit() {
    if ( this.user.firstName == ''  || this.user.firstName == null)
      {
        swal.fire('please Fill The Form!!','','question')
        //this.snack.open("user first name is required !!" , 'ok',{duration:3000, verticalPosition:'top'});
      //alert('Please fill the required data !');
      return;
    }
    else  if ( this.user.middleName == ''  || this.user.middleName == null)
    {
      swal.fire('please Fill The Form!!','','question')
      //this.snack.open("user middle name  is required !!" , 'ok',{duration:3000, verticalPosition:'top'});
    //alert('Please fill the required data !');
    return;
  }

  else  if ( this.user.lastName== ''  || this.user.lastName == null)
  {
    swal.fire('please Fill The Form!!','','question')
    //this.snack.open("user last name  is required !!" , 'ok',{duration:3000, verticalPosition:'top'});
  //alert('Please fill the required data !');
  return;
}


else  if ( this.user.username== ''  || this.user.username == null)
{
  swal.fire('please Fill The Form!!','','question')
  //this.snack.open("user username  is required !!" , 'ok',{duration:3000, verticalPosition:'top'});
//alert('Please fill the required data !');
return;
}
else  if ( this.user.password== ''  || this.user.password == null)
{
  swal.fire('please Fill The Form!!','','question')
  //this.snack.open("user password  is required !!" , 'ok',{duration:3000, verticalPosition:'top'});
//alert('Please fill the required data !');
return;
}
else  if ( this.user.email== ''  || this.user.email == null)
{
  swal.fire('please Fill The Form!!','','question')
  //this.snack.open("user email  is required !!" , 'ok',{duration:3000, verticalPosition:'top'});
//alert('Please fill the required data !');
return;
}
else  if ( this.user.phoneNumber== ''  || this.user.phoneNumber == null)
{
  swal.fire('please Fill The Form!!','','question')
  //this.snack.open("user phoneNumberis required !!" , 'ok',{duration:3000, verticalPosition:'top'});
//alert('Please fill the required data !');
return;
}
else  if ( this.user.dateOfBirth== ''  || this.user.dateOfBirth == null)
{
  swal.fire('please Fill The Form!!','','question')
  //this.snack.open("user dateOfBirth is required !!" , 'ok',{duration:3000, verticalPosition:'top'});
//alert('Please fill the required data !');
return;
}
else  if ( this.user.authorityName== ''  || this.user.authorityName == null)
{
  swal.fire('please Fill The Form!!','','question')
  //this.snack.open("user authorityName is required !!" , 'ok',{duration:3000, verticalPosition:'top'});
//alert('Please fill the required data !');
return;
}

else  if ( this.user.city== ''  || this.user.city == null)
{
  swal.fire('please Fill The Form!!','','question')
  //this.snack.open("user city is required !!" , 'ok',{duration:3000, verticalPosition:'top'});
//alert('Please fill the required data !');
return;
}
else  if ( this.user.city== ''  || this.user.city == null)
{
  swal.fire('please Fill The Form!!','','question')
  //this.snack.open("user city is required !!" , 'ok',{duration:3000, verticalPosition:'top'});
//alert('Please fill the required data !');
return;
}
else  if ( this.user.apartmentNo== ''  || this.user.apartmentNo == null)
{
  swal.fire('please Fill The Form!!','','question')
  //this.snack.open("user apartmentNo is required !!" , 'ok',{duration:3000, verticalPosition:'top'});
//alert('Please fill the required data !');
return;
}
else  if ( this.user.street== ''  || this.user.street == null)
{
  swal.fire('please Fill The Form!!','','question')
  //this.snack.open("user street is required !!" , 'ok',{duration:3000, verticalPosition:'top'});
//alert('Please fill the required data !');
return;
}


    //adduser: userservice
    this.userservice.addAdmin(this.user).subscribe(
      (data:any)=>{
        //success
        console.log(data);

        swal.fire('success', '','success')
        this._router.navigate(["login"]);

      },
      (error)=>{
        //error
        console.log(error);
        swal.fire('please enter valid data','','warning')
      }
      );
  }




}

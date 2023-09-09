import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignupComponent } from './pages/signup/signup.component';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { DashboardComponent } from './pages/admin/dashboard/dashboard.component';
import { UserDashboardComponent } from './pages/user/user-dashboard/user-dashboard.component';
import { AdminGuard } from './services/admin.guard';
import { NormalGuard } from './services/normal.guard';
import { ProfileComponent } from './pages/profile/profile.component';
import { BasicinfoComponent } from './pages/user/basicinfo/basicinfo.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { LostcardComponent } from './components/lostcard/lostcard.component';
import { MedicinesComponent } from './components/medicines/medicines.component';
import { AboutusComponent } from './components/aboutus/aboutus.component';
import { RemindersComponent } from './components/reminders/reminders.component';
import { SpelizationsComponent } from './components/spelizations/spelizations.component';
import { LabresultsComponent } from './components/labresults/labresults.component';
import { DrDashboardComponent } from './doctor/components/dr-dashboard/dr-dashboard.component';
import { DrProfileComponent } from './doctor/components/dr-profile/dr-profile.component';
import { SignupadminComponent } from './components/signupadmin/signupadmin.component';
import { SignupdoctorComponent } from './components/signupdoctor/signupdoctor.component';
import { SignuplabtechComponent } from './components/signuplabtech/signuplabtech.component';
import { SignuppharmacistComponent } from './components/signuppharmacist/signuppharmacist.component';
import { SummarypageComponent } from './components/phramcistDashboard/summarypage/summarypage.component';
import { UploadComponent } from './doctor/components/upload/upload.component';
import { PharmsectionComponent } from './components/phramcistDashboard/pharmsection/pharmsection.component';
import { PhramdashboardComponent } from './components/phramcistDashboard/phramdashboard/phramdashboard.component';
import { ForgetpassComponent } from './components/forgetpass/forgetpass.component';
import { ConfirmpassComponent } from './components/confirmpass/confirmpass.component';
import { AdminDashboardComponent } from './components/adminDashboard/admin-dashboard/admin-dashboard.component';
import { AllcontactrequestsComponent } from './components/adminDashboard/allcontactrequests/allcontactrequests.component';
import { AlllostrequestsComponent } from './components/adminDashboard/alllostrequests/alllostrequests.component';
import { BasichomeComponent } from './basichome/basichome.component';
import { LabtestComponent } from './components/labtest/labtest.component';
import { AddpreComponent } from './components/addpre/addpre.component';
import { UploadtestsComponent } from './components/uploadtests/uploadtests.component';
import { ProfilelabtechComponent } from './components/profilelabtech/profilelabtech.component';
import { ProfilephramcistComponent } from './components/profilephramcist/profilephramcist.component';
import { DrdownloadscansComponent } from './doctor/components/drdownloadscans/drdownloadscans.component';
import { DrdownloadtestsComponent } from './doctor/components/drdownloadtests/drdownloadtests.component';
import { ScanCardComponent } from './components/scan-card/scan-card.component';
import { DoctorhomeComponent } from './doctor/components/doctorhome/doctorhome.component';
import { PhrmscanComponent } from './components/phrmscan/phrmscan.component';
import { PhrmhomeComponent } from './components/phrmhome/phrmhome.component';
import { LabdashboardComponent } from './components/labdashboard/labdashboard.component';
import { LabhomeComponent } from './components/labhome/labhome.component';
import { LabscanComponent } from './components/labscan/labscan.component';
import { TestAndScanRequiredComponent } from './components/test-and-scan-required/test-and-scan-required.component';
import { InfobyadminComponent } from './components/adminDashboard/infobyadmin/infobyadmin.component';
import { ScanadminComponent } from './components/adminDashboard/scanadmin/scanadmin.component';

const routes: Routes = [

 
  {path:'doctorhome' ,
  component:DoctorhomeComponent,
 },
 
 
 
 
  {path:'home' ,
  component:HomeComponent,
  pathMatch: 'full'},


  {path:'' ,
  component:BasichomeComponent,
  pathMatch: 'full'},



  {path:'contactus' ,
  component:ContactUsComponent,
 },

 {path:'about' ,
  component:AboutusComponent,
 },

 {path:'scan' ,
  component:ScanCardComponent,
 },


  {path:'signup' ,
component:SignupComponent,
pathMatch: 'full'},

{path:'signupadmin' ,
component:SignupadminComponent,
pathMatch: 'full'},




{path:'signupdoctor' ,
component:SignupdoctorComponent,
pathMatch: 'full'},

{path:'signuplabtech' ,
component:SignuplabtechComponent,
pathMatch: 'full'},

{path:'signuppharm' ,
component:SignuppharmacistComponent,
pathMatch: 'full'},


{path:'login' ,
component:LoginComponent,
pathMatch: 'full'},


{
  path:'lost',
  component:LostcardComponent,
},


{
  path:'forgetpass',
  component:ForgetpassComponent,
},
{
  path:'confirmpass',
  component:ConfirmpassComponent,
},


{
  path:'allcontactRequests',
  component:AllcontactrequestsComponent,
},

{
  path:'alllostRequests',
  component:AlllostrequestsComponent,
},
{
  path:'adminscan',
  component:ScanadminComponent,
},
{
  path:'infobyadmin',
  component:InfobyadminComponent,
},

{
  path: 'admin',
  component:AdminDashboardComponent,
 
  

  children:[
   
    {
      path:'adminscan',
      component:ScanadminComponent,
    },


    {
      path:'infobyadmin',
      component:InfobyadminComponent,
    },
  
    {
      path:'allcontactRequests',
      component:AllcontactrequestsComponent,
    },
  
    {
      path:'alllostRequests',
      component:AlllostrequestsComponent,
    },
  
  ]


},



{
  path:'doctorprofile',
  component:DrProfileComponent,
},

{
  path:'doctorhome',
  component:DoctorhomeComponent,
},

{
  path:'phrmscan',
  component:PhrmscanComponent,
},


{
  path: 'doctor',
  


  component:DrDashboardComponent,
 
  children:[
    {
      path:'',
      component:CategoriesComponent,
    },
  
    {
      path:'doctorprofile',
      component:DrProfileComponent,
    },
    {
      path:'labscansresults',
      component:DrdownloadscansComponent,
    },

    {
      path:'labtestresults',
      component:DrdownloadtestsComponent,
    },
    {
      path:'addpre',
      component:AddpreComponent,
    },
    
    {
      path:'summary',
      component:SummarypageComponent,
    },



   

    
  ]
},




{
  path:'homelabtech',
  component:LabhomeComponent,
},

{
  path:'profilelabtech',
  component:ProfilelabtechComponent,
},
{
  path:'labscan',
  component:LabscanComponent,
},

{
  path: 'labtech',

  component:LabdashboardComponent,
  children:[
    {
      path:'',
      component:CategoriesComponent,
    },
    
    {
      path:'TestandScansRequired',
      component:TestAndScanRequiredComponent,
    },

    {
      path:'upload',
      component:UploadComponent,
    },
    {
      path:'uploadtest',
      component:UploadtestsComponent,
    },

    
    

  
  ]
},
{
  path: 'pharmcist',
  component:PhrmhomeComponent,
  
},

{
  path:'profilepharm',
  component:ProfilephramcistComponent,
},

{
  path:'Pharmsection',
  component:PharmsectionComponent,
},






{
  path:'user-dashboard',
  component:UserDashboardComponent,
  children:[
    {
      path:'',
      component:CategoriesComponent,
    },
    {
      path:'profile',
      component:ProfileComponent,
    },
    {
      path:'lost',
      component:LostcardComponent,
    },
    {
      path:'medicines',
      component:MedicinesComponent,
    },
    {
      path:'reminders',
      component:RemindersComponent,
    },
    {
      path:'labresults',
      component:LabresultsComponent,
    },

    {
      path:'labtest',
      component:LabtestComponent,
    },
    {
      path:'spelization',
      component:SpelizationsComponent,
    },





  ],

},



/*{
  path:'dr-dashboard',
  component:DrDashboardComponent,
  

  children:[
   
    
  
    {
      path:'',
      component:DrProfileComponent,
    },
  
  
  
  ]}*/












];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

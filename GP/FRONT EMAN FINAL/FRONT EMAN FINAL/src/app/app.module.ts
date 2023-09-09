import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatButtonModule } from '@angular/material/button';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatCardModule} from '@angular/material/card';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';


import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { SignupComponent } from './pages/signup/signup.component';
import { LoginComponent } from './pages/login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { HomeComponent } from './pages/home/home.component';
import { authIntercertorProviders } from './services/auth.interceptor';
import { DashboardComponent } from './pages/admin/dashboard/dashboard.component';
import { UserDashboardComponent } from './pages/user/user-dashboard/user-dashboard.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { SidebarComponent } from './pages/user/sidebar/sidebar.component';
import { BasicinfoComponent } from './pages/user/basicinfo/basicinfo.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { CategoriesComponent } from './components/pages/categories/categories.component';
import { LostcardComponent } from './components/lostcard/lostcard.component';
import { MedicinesComponent } from './components/medicines/medicines.component';
import { AboutusComponent } from './components/aboutus/aboutus.component';
import { RemindersComponent } from './components/reminders/reminders.component';
import { SpelizationsComponent } from './components/spelizations/spelizations.component';

import { MatSelectModule } from '@angular/material/select';
import { LabresultsComponent } from './components/labresults/labresults.component'
import {MatTableModule} from "@angular/material/table";
import { SideBarComponent } from './doctor/components/side-bar/side-bar.component';
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
import { PhrmsidebarComponent } from './components/phramcistDashboard/phrmsidebar/phrmsidebar.component';
import { ForgetpassComponent } from './components/forgetpass/forgetpass.component';
import { ConfirmpassComponent } from './components/confirmpass/confirmpass.component';
import { AllcontactrequestsComponent } from './components/adminDashboard/allcontactrequests/allcontactrequests.component';
import { AlllostrequestsComponent } from './components/adminDashboard/alllostrequests/alllostrequests.component';
import { AdminDashboardComponent } from './components/adminDashboard/admin-dashboard/admin-dashboard.component';
import { UploadtestsComponent } from './components/uploadtests/uploadtests.component';
import { BasichomeComponent } from './basichome/basichome.component';
import { LabtestComponent } from './components/labtest/labtest.component';
import { AddpreComponent } from './components/addpre/addpre.component';
import { ProfilelabtechComponent } from './components/profilelabtech/profilelabtech.component';
import { ProfilephramcistComponent } from './components/profilephramcist/profilephramcist.component';
import { DrdownloadscansComponent } from './doctor/components/drdownloadscans/drdownloadscans.component';
import { DrdownloadtestsComponent } from './doctor/components/drdownloadtests/drdownloadtests.component';
import { ScanCardComponent } from './components/scan-card/scan-card.component';
import { DoctorhomeComponent } from './doctor/components/doctorhome/doctorhome.component';
import { PhrmhomeComponent } from './components/phrmhome/phrmhome.component';
import { PhrmscanComponent } from './components/phrmscan/phrmscan.component';
import { LabhomeComponent } from './components/labhome/labhome.component';
import { LabscanComponent } from './components/labscan/labscan.component';
import { LabdashboardComponent } from './components/labdashboard/labdashboard.component';
import { LabsidebarComponent } from './components/labsidebar/labsidebar.component';
import { TestAndScanRequiredComponent } from './components/test-and-scan-required/test-and-scan-required.component';
import { InfobyadminComponent } from './components/adminDashboard/infobyadmin/infobyadmin.component';
import { ScanadminComponent } from './components/adminDashboard/scanadmin/scanadmin.component';



@NgModule({
  declarations: [
    AppComponent,

    NavbarComponent,
    FooterComponent,
    SignupComponent,
    LoginComponent,
    HomeComponent,
    DashboardComponent,
    UserDashboardComponent,
    ProfileComponent,
    SidebarComponent,
    BasicinfoComponent,
    ContactUsComponent,
    CategoriesComponent,
    LostcardComponent,
    MedicinesComponent,
    AboutusComponent,
    RemindersComponent,
    SpelizationsComponent,
    LabresultsComponent,
    SideBarComponent,
    DrDashboardComponent,
    DrProfileComponent,
    SignupadminComponent,
    SignupdoctorComponent,
    SignuplabtechComponent,
    SignuppharmacistComponent,
    SummarypageComponent,
    UploadComponent,
    PharmsectionComponent,
    PhramdashboardComponent,
    PhrmsidebarComponent,
    ForgetpassComponent,
    ConfirmpassComponent,
    AllcontactrequestsComponent,
    AlllostrequestsComponent,
    AdminDashboardComponent,
    UploadtestsComponent,
    BasichomeComponent,
    LabtestComponent,
    AddpreComponent,
    ProfilelabtechComponent,
    ProfilephramcistComponent,
    DrdownloadscansComponent,
    DrdownloadtestsComponent,
    ScanCardComponent,
    DoctorhomeComponent,
    PhrmhomeComponent,
    PhrmscanComponent,
    LabhomeComponent,
    LabscanComponent,
    LabdashboardComponent,
    LabsidebarComponent,
    TestAndScanRequiredComponent,
    InfobyadminComponent,
    ScanadminComponent,
   
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatButtonModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatFormFieldModule,
    FormsModule,
    HttpClientModule,
    MatSnackBarModule,
    MatCardModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule,
    MatSelectModule,
    MatTableModule,
    ReactiveFormsModule
  ],
  providers: [authIntercertorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }

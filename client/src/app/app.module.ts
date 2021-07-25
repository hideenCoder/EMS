import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShowDepComponent } from './admin/create/create-department/show-dep/show-dep.component';
import { AddEditDepComponent } from './admin/create/create-department/add-edit-dep/add-edit-dep.component';
import { EmployeeComponent } from './employee/employee.component';
import { ShowEmpComponent } from './employee/show-emp/show-emp.component';
import { AddEditEmpComponent } from './employee/add-edit-emp/add-edit-emp.component';
import{SharedService} from './shared.service';

import {HttpClientModule} from '@angular/common/http';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { UpdateEmpComponent } from './employee/update-emp/update-emp.component';
import { NavComponent } from './shared/nav/nav.component';
import { FooterComponent } from './shared/footer/footer.component';
import { AdminPanelComponent } from './admin/admin-panel/admin-panel.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { CreateDepartmentComponent } from './admin/create/create-department/create-department.component';
import { CreateEmployeeComponent } from './admin/create/create-employee/create-employee.component';
import { EditEmpAdminComponent } from './admin/dashboard/edit-emp-admin/edit-emp-admin.component';
import { HomeComponent } from './home/home.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { BranchComponent } from './branch/branch.component';
import { OurServicesComponent } from './our-services/our-services.component';
import { TermsComponent } from './terms/terms.component';
import { AboutAdminComponent } from './admin/about-admin/about-admin.component';
import { SendMailComponent } from './admin/mail/send-mail/send-mail.component';
import { RecievedMailComponent } from './admin/mail/recieved-mail/recieved-mail.component';

@NgModule({
  declarations: [
    AppComponent,
    ShowDepComponent,
    AddEditDepComponent,
    EmployeeComponent,
    ShowEmpComponent,
    AddEditEmpComponent,
    LoginComponent,
    UpdateEmpComponent,
    NavComponent,
    FooterComponent,
    AdminPanelComponent,
    DashboardComponent,
    CreateDepartmentComponent,
    CreateEmployeeComponent,
    EditEmpAdminComponent,
    HomeComponent,
    ContactUsComponent,
    AboutUsComponent,
    BranchComponent,
    OurServicesComponent,
    TermsComponent,
    AboutAdminComponent,
    SendMailComponent,
    RecievedMailComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [SharedService],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EmployeeComponent } from './employee/employee.component';
import { LoginComponent } from './login/login.component';
import { AdminPanelComponent } from './admin/admin-panel/admin-panel.component';
import { CreateDepartmentComponent } from './admin/create/create-department/create-department.component';
import { CreateEmployeeComponent } from './admin/create/create-employee/create-employee.component';
import { HomeComponent } from './home/home.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { BranchComponent } from './branch/branch.component';
import { OurServicesComponent } from './our-services/our-services.component';
import { TermsComponent } from './terms/terms.component';
import { AboutAdminComponent } from './admin/about-admin/about-admin.component';
import { SendMailComponent } from './admin/mail/send-mail/send-mail.component';
import { RecievedMailComponent } from './admin/mail/recieved-mail/recieved-mail.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'employee', component: EmployeeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'contactus', component: ContactUsComponent },
  { path: 'aboutus', component: AboutUsComponent },
  { path: 'branch', component: BranchComponent },
  { path: 'service', component: OurServicesComponent },
  { path: 'terms', component: TermsComponent },
  { path: 'admin', component: AdminPanelComponent },
  { path: 'createdepartment', component: CreateDepartmentComponent },
  { path: 'createemployee', component: CreateEmployeeComponent },
  { path: 'sentmail', component: SendMailComponent },
  { path: 'recievedmail', component: RecievedMailComponent },
  { path: 'updateabout', component: AboutAdminComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

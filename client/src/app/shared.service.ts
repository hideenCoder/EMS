import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  readonly APIUrl = "http://localhost:5000/api";
  readonly PhotoUrl = "http://localhost:5000/Photos/";

  currentUser:BehaviorSubject<{}> = new BehaviorSubject<{}>(null);

  constructor(private router: Router, private http: HttpClient) { }

  getCurrentUser : object = JSON.parse(localStorage.getItem("currentUser"));

  getDepList(): Observable<any[]> {
    return this.http.get<any>(this.APIUrl + '/department');
  }

  addDepartment(val: any) {
    return this.http.post(this.APIUrl + '/department', val);
  }

  updateDepartment(val: any) {
    return this.http.put(this.APIUrl + '/department', val);
  }

  deleteDepartment(val: any) {
    return this.http.delete(this.APIUrl + '/department/' + val);
  }


  getEmpList(): Observable<any[]> {
    return this.http.get<any>(this.APIUrl + '/employee');
  }

  addEmployee(val: any) {
    return this.http.post(this.APIUrl + '/employee', val);
  }

  updateEmployee(val: any) {
    return this.http.put(this.APIUrl + '/employee', val);
  }

  deleteEmployee(val: any) {
    return this.http.delete(this.APIUrl + '/employee/' + val);
  }


  UploadPhoto(val: any) {
    return this.http.post(this.APIUrl + '/employee/SaveFile', val);
  }

  getAllDepartmentNames(): Observable<any[]> {
    return this.http.get<any[]>(this.APIUrl + '/employee/GetAllDepartmentNames');
  }

  postLogin(val: any) {
    return this.http.post(this.APIUrl + '/login', val);
  }

  logout() {
    localStorage.removeItem("currentUser");
    this.currentUser.next(null);
    this.router.navigate(['/']);
  }

  postContact(val: any) {
    return this.http.post(this.APIUrl + '/contact', val);
  }

  postMail(val: any) {
    return this.http.post(this.APIUrl + '/mail', val);
  }

  getAbout(): Observable<any[]> {
    return this.http.get<any>(this.APIUrl + '/about');
  }
  
  updateAbout(val: any) {
    return this.http.put(this.APIUrl + '/about', val);
  }
  
  getContact(): Observable<any[]> {
    return this.http.get<any>(this.APIUrl + '/contact');
  }

  getMail(): Observable<any[]> {
    return this.http.get<any>(this.APIUrl + '/mail');
  }
}

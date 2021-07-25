import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {

  constructor(private router: Router, private service: SharedService) { }

  EmployeeId: string;
  UserName: string;
  Password: string;
  EmployeeName: string;
  Email: string;
  Contact: number;
  Department: string;
  DateOfJoining: string;
  PhotoFileName: string = "anonymus.png";
  PhotoFilePath: string;

  DepartmentsList: any = [];


  ngOnInit(): void {
    this.loadDepartmentList();
  }

  loadDepartmentList() {
    this.service.getDepList().subscribe((data: any) => {
      this.DepartmentsList = data;

      this.PhotoFilePath = this.service.PhotoUrl + this.PhotoFileName;
    });
  }

  addEmployee() {
    var val = {
      UserName: this.UserName,
      Password: this.Password,
      Name: this.EmployeeName,
      Email: this.Email,
      Contact: this.Contact,
      Department: this.Department,
      PhotoFileName: this.PhotoFileName,
      DateOfJoining: this.DateOfJoining
    };

    this.service.addEmployee(val).subscribe(res => {
      alert(res.toString());
      this.router.navigate(['/admin']);
    });
  }

  uploadPhoto(event) {
    var file = event.target.files[0];
    const formData: FormData = new FormData();
    formData.append('uploadedFile', file, file.name);

    this.service.UploadPhoto(formData).subscribe((data: any) => {
      this.PhotoFileName = data.toString();
      this.PhotoFilePath = this.service.PhotoUrl + this.PhotoFileName;
    })
  }

}

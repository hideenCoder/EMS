import { Component, OnInit, Input } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-edit-emp-admin',
  templateUrl: './edit-emp-admin.component.html',
  styleUrls: ['./edit-emp-admin.component.css']
})
export class EditEmpAdminComponent implements OnInit {

  constructor(private service: SharedService) { }

  @Input() emp: any;
  EmployeeId: string;
  UserName: string;
  Password: string;
  EmployeeName: string;
  Email: string;
  Contact: string;
  Department: string;
  Status: string;
  DateOfJoining: string;
  PhotoFileName: string;
  PhotoFilePath: string;

  DepartmentsList: any = [];

  currentUser: object = null;

  ngOnInit(): void {
    this.loadDepartmentList();
    this.currentUser = JSON.parse(localStorage.getItem("currentUser"));
  }

  loadDepartmentList() {
    this.service.getDepList().subscribe((data: any) => {
      this.DepartmentsList = data;

      this.EmployeeId = this.emp.Id;
      this.UserName = this.emp.UserName;
      this.Password = this.emp.Password;
      this.EmployeeName = this.emp.Name;
      this.Email = this.emp.Email;
      this.Contact = this.emp.Contact;
      this.Department = this.emp.Department;
      this.Status = this.emp.Status;
      this.DateOfJoining = this.emp.DateOfJoining;
      this.PhotoFileName = this.emp.PhotoFileName;
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
    });
  }

  updateEmployee() {
    var val = {
      Id: this.emp.Id,
      UserName: this.UserName,
      Password: this.emp.Password,
      Name: this.EmployeeName,
      Email: this.Email,
      Contact: this.Contact,
      Department: this.Department,
      Status: this.emp.Status,
      PhotoFileName: this.PhotoFileName,
      DateOfJoining: this.DateOfJoining
    };

    this.service.updateEmployee(val).subscribe(res => {
      alert(res.toString());
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

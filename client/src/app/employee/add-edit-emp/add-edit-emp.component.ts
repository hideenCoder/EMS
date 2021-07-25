import { Component, OnInit, Input } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-add-edit-emp',
  templateUrl: './add-edit-emp.component.html',
  styleUrls: ['./add-edit-emp.component.css']
})
export class AddEditEmpComponent implements OnInit {

  constructor(private service: SharedService) { }

  @Input() emp: any;
  EmployeeId: string;
  EmployeeName: string;
  Department: string;
  DateOfJoining: string;
  PhotoFileName: string;
  PhotoFilePath: string;

  DepartmentsList: any = [];


  ngOnInit(): void {
    this.loadDepartmentList();
  }

  loadDepartmentList() {
    this.service.getAllDepartmentNames().subscribe((data: any) => {
      this.DepartmentsList = data;

      this.EmployeeId = this.emp.Id;
      this.EmployeeName = this.emp.Name;
      this.Department = this.emp.Department;
      this.DateOfJoining = this.emp.DateOfJoining;
      this.PhotoFileName = this.emp.PhotoFileName;
      this.PhotoFilePath = this.service.PhotoUrl + this.PhotoFileName;
    });
  }

  addEmployee() {
    var val = {
      UserName: "Pizus",
      Password: "test",
      Name: this.EmployeeName,
      Email: "email@email.com",
      Contact: 8299834758,
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
      Id: this.EmployeeId,
      UserName: "Pizus Halder",
      Password: "test",
      Name: this.EmployeeName,
      Email: "gmail@email.com",
      Contact: 8299834750,
      Department: this.Department,
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


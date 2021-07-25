import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-show-emp',
  templateUrl: './show-emp.component.html',
  styleUrls: ['./show-emp.component.css']
})
export class ShowEmpComponent implements OnInit {

  constructor(private service: SharedService) { }

  EmployeeList: any = [];
  DepartmentList: any = [];

  ModalTitle: string;
  ActivateAddEditEmpComp: boolean = false;
  ActivateUpdateEmpComp: boolean = false;
  emp: any;

  EmployeeNameFilter: string = "";
  DepartmentNameFilter: string = "";
  EmployeeListWithoutFilter: any = [];

  currentUser: object = null;

  ngOnInit(): void {
    this.refreshEmpList();
    this.refreshDepList();
    this.currentUser = JSON.parse(localStorage.getItem("currentUser"));
  }

  addClick() {
    this.emp = {
      EmployeeId: 0,
      EmployeeName: "",
      Department: "",
      DateOfJoining: "",
      PhotoFileName: "anonymous.png"
    }
    this.ModalTitle = "Add Employee";
    this.ActivateAddEditEmpComp = true;

  }

  editClick(item) {
    this.emp = item;
    this.ModalTitle = item.Name + " Details";
    this.ActivateUpdateEmpComp = false;
    this.ActivateAddEditEmpComp = true;
  }

  updateClick(item) {
    this.emp = item;
    this.ModalTitle = item.Name + " Details";
    this.ActivateAddEditEmpComp = false;
    this.ActivateUpdateEmpComp = true;
  }

  deleteClick(item) {
    if (confirm('Are you sure??')) {
      this.service.deleteEmployee(item.Id).subscribe(data => {
        alert(data.toString());
        this.refreshEmpList();
      })
    }
  }

  closeClick() {
    this.ActivateAddEditEmpComp = false;
    this.refreshEmpList();
  }


  refreshEmpList() {
    this.service.getEmpList().subscribe(data => {
      this.EmployeeList = data;
      this.EmployeeListWithoutFilter = data;
    });
  }

  refreshDepList() {
    this.service.getDepList().subscribe(data => {
      this.DepartmentList = data;
    });
  }

  FilterFn() {
    var DepartmentNameFilter = (this.DepartmentNameFilter === "All Department" ? "" : this.DepartmentNameFilter);
    var EmployeeNameFilter = this.EmployeeNameFilter;

    this.EmployeeList = this.EmployeeListWithoutFilter.filter(function (el) {
      return el.Name.toString().toLowerCase().includes(
        EmployeeNameFilter.toString().trim().toLowerCase()
      ) &&
        el.Department.toString().toLowerCase().includes(
          DepartmentNameFilter.toString().trim().toLowerCase()
        )
    });
  }

  sortResult(prop, asc) {
    this.EmployeeList = this.EmployeeList.sort(function (a, b) {
      if (asc) {
        return (a[prop] > b[prop]) ? 1 : ((a[prop] < b[prop]) ? -1 : 0);
      } else {
        return (b[prop] > a[prop]) ? 1 : ((b[prop] < a[prop]) ? -1 : 0);
      }
    })
  }

}


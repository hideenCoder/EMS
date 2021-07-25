import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-about-admin',
  templateUrl: './about-admin.component.html',
  styleUrls: ['./about-admin.component.css']
})
export class AboutAdminComponent implements OnInit {

  constructor(private service: SharedService) { }

  AboutList: any = [
    {
      Overview: "",
      Spirit: ""
    }
  ];


  ngOnInit(): void {
    this.refreshAboutList()
  }

  refreshAboutList() {
    this.service.getAbout().subscribe(data => {
      this.AboutList = data;
    });
  }

  updateClick(){
    var val = {
      Overview: this.AboutList[0].Overview,
      Spirit: this.AboutList[0].Spirit
    }
    this.service.updateAbout(val).subscribe(res => {
      this.ngOnInit();
      window.alert(res.toString());
    })
  }

}

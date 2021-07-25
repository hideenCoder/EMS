import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css']
})
export class AboutUsComponent implements OnInit {

  constructor(private service: SharedService) { }

  Overview:string;
  Spirit:string;
  
  AboutList: any = [];


  ngOnInit(): void {
    this.refreshAboutList();
    this.Overview = this.AboutList[0].Overview;
    this.Overview = this.AboutList[0].Overview;
  }
  
  refreshAboutList() {
    this.service.getAbout().subscribe(data => {
      this.AboutList = data;
    });
  }

}

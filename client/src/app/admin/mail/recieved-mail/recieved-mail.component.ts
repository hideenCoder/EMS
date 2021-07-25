import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-recieved-mail',
  templateUrl: './recieved-mail.component.html',
  styleUrls: ['./recieved-mail.component.css']
})
export class RecievedMailComponent implements OnInit {

  constructor(private service: SharedService) { }

  MilList: any = [];


  ngOnInit(): void {
    this.refreshMailList();
  }

  refreshMailList() {
    this.service.getContact().subscribe(data => {
      this.MilList = data;
    });
  }

}

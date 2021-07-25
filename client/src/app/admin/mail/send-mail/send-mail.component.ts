import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-send-mail',
  templateUrl: './send-mail.component.html',
  styleUrls: ['./send-mail.component.css']
})
export class SendMailComponent implements OnInit {

  constructor(private service: SharedService) { }

  MilList: any = [];


  ngOnInit(): void {
    this.refreshMailList();
  }

  refreshMailList() {
    this.service.getMail().subscribe(data => {
      this.MilList = data;
    });
  }

}

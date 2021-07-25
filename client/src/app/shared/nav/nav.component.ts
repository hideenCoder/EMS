import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  currentUser: object = null;

  constructor(private service: SharedService) {
    this.service.currentUser.subscribe(currentUser => {
      this.currentUser = currentUser
    })
  }


  ngOnInit(): void {
    this.service.currentUser.next(this.service.getCurrentUser);
  }


  logoutClick() {
    this.service.logout();
  }

}

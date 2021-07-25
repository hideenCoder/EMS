import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {

  constructor(private service: SharedService) { }

  Name: string = '';
  Email: string = '';
  Message: string = '';

  ngOnInit(): void {
  }

  onSubmit() {
    var val = {
      Name: this.Name,
      Email: this.Email,
      Message: this.Message
    };
    this.service.postContact(val).subscribe(res => {
      window.alert(res.toString());
      this.Name = '';
      this.Email = '';
      this.Message = '';
    });
  }

}

import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-login',
  template: `
  <img src="../images/signup.png">
`,
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private router: Router, private service: SharedService) { }

  UserName: string;
  Password: string;

  onsubmit() {
    var val = {
      UserName: this.UserName,
      Password: this.Password
    };
    this.service.postLogin(val).subscribe(res => {
      if (res[0] === undefined) {
        window.alert("Invalid Credentials!")
        this.router.navigate(['/login']);
      }else{
        localStorage.setItem("currentUser", JSON.stringify(res[0]))
        if (res[0].Type === "admin") {
          this.service.currentUser.next(this.service.getCurrentUser)
          this.router.navigate(['/admin']);
          window.alert("Login Successfully to Admin Pannel.")
        } else {
          this.service.currentUser.next(this.service.getCurrentUser)
          this.router.navigate(['/employee']);
          window.alert("Login Successfully.")
        }
      }
    });
  }

}

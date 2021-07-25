import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  imageSrc1:string = "assets/images/back_img.jpg" ;
  imageSrc2:string = "assets/images/Emp5.jpg" ;
  imageSrc3:string = "assets/images/Emp2.jpg" ;
  imageSrc4:string = "assets/images/Emp3.jpg" ;
  imageSrc5:string = "assets/images/Emp6.jpg" ;
  imageSrc6:string = "assets/images/Emp5.jpg" ;

}

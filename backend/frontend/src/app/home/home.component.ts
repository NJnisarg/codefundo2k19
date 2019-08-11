import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public mobNo:any;
  constructor() { }

  ngOnInit() {
  }

  public onEnterMobNo(event){
    this.mobNo = event.target.value;
    console.log(this.mobNo);
  }

}

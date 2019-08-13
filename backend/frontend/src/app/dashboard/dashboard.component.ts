import { Component, OnInit } from '@angular/core';

var aadhar = {
  name:"manan",
  gender:"male",
  pincode:"484001",
  address:"NITK Surathkal",
  age:"20",
  aadhar_no:"873132120"
}

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})

export class DashboardComponent implements OnInit {
  public aadhar:any;
  constructor() { }

  ngOnInit() {
  this.aadhar=aadhar;
  }

}

// declare const require: any;
import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
// import * as materialize from 'materialize-css';


var RTIdata = [
  {
    title:" Education ",
    desc:" description of what all is under this tag",
    link:" link to rti tag"
  },
  {
    title:" Health ",
    desc:" description of what all is under this tag",
    link:" link to rti tag"
  },
  {
    title:" Roads ",
    desc:" description of what all is under this tag",
    link:" link to rti tag"
  },
  {
    title:" Criminal charges ",
    desc:" description of what all is under this tag",
    link:" link to rti tag"
  },
  {
    title:" Salary ",
    desc:" description of what all is under this tag",
    link:" link to rti tag"
  }
]

@Component({
  selector: 'app-decision-helper',
  templateUrl: './decision-helper.component.html',
  styleUrls: ['./decision-helper.component.css']
})
export class DecisionHelperComponent implements OnInit {
  public rtiData;
  constructor() { }

  ngOnInit() {
    this.rtiData = RTIdata;
  }

}

import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

var elections=[
  {
    name:"national",
    date:"24/26/2019",
    description:"hello everyone, this is national elections!"
  },
  {
    name:"state",
    date:"3/2/2019",
    description:"hello everyone, this is state elections!"
  }
];


@Component({
  selector: 'app-elections',
  templateUrl: './elections.component.html',
  styleUrls: ['./elections.component.css']
})

export class ElectionsComponent implements OnInit {
  public elections;
  constructor() { }


  public onSelectElectionId(ElectionId){
    console.log(ElectionId);
  }
  ngOnInit() {
    this.elections = elections;
  }

}

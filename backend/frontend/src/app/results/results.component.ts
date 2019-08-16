declare var require: any

import { Component, OnInit } from '@angular/core';
const Candidates = require('../../assets/images.json');
const c = Candidates.projects;
const candidates = Candidates.categories;
@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit {
  categories = candidates;
  constructor() { }

  ngOnInit() {
    console.log(this.categories);

  }

}

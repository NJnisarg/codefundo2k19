declare var require: any

import { Component, OnInit } from '@angular/core';
const Candidates = require('../../assets/images.json');
const c = Candidates.projects;
const candidates = Candidates.categories;
@Component({
  selector: 'app-vote',
  templateUrl: './vote.component.html',
  styleUrls: ['./vote.component.css']
})
export class VoteComponent implements OnInit {
  categories = candidates;
  constructor() { }

  ngOnInit() {
  }

}

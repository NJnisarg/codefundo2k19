declare var require: any

import { Component, OnInit } from '@angular/core';
import { VoteService } from '../_service/vote.service';
import { ActivatedRoute, Router } from '@angular/router';
import { environment } from '../../environments/environment'


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
  public userId;
  public electionId;
  public env = environment;
  public domain = this.env['apiUrl']
  constructor(public voteService:VoteService,public router:Router) { }

  public getPartyCandidates(){
    this.voteService.getPartyCandidates(this.userId,this.electionId).subscribe(
      res=>{
        console.log(res);
        this.categories=res;
      }
    )
  }

  ngOnInit() {
    this.userId = localStorage.getItem("userId");
    this.electionId = localStorage.getItem("electionId");
    this.getPartyCandidates(); 
  }

}

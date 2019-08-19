declare var require: any

import { Component, OnInit,Input } from '@angular/core';
import { VoteService } from '../_service/vote.service';
import { ActivatedRoute, Router } from '@angular/router';
import { environment } from '../../environments/environment'
import { vote } from '../../../../../blockchain/w3/vote';
// import { addVoter } from '../../../../../blockchain/w3/addEntities';
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
  public domain = this.env['apiUrl'];
  public candidateId;
  public voterId;
  @Input() decisionHelper = false;
  constructor(public voteService:VoteService,public router:Router) { }

  public getPartyCandidates(){
    this.voteService.getPartyCandidates(this.userId,this.electionId).subscribe(
      res=>{
        console.log(res);
        this.categories=res;
      }
    )
  }

  public vote(candidate){
    this.candidateId = candidate.aadhar_num;
    this.voterId = this.userId;
    // let added = addVoter(this.voterId);
    // console.log(added);
  }


  ngOnInit() {
    this.userId = localStorage.getItem("userId");
    this.electionId = localStorage.getItem("electionId");
    this.getPartyCandidates(); 
    console.log(this.decisionHelper);
  }

}

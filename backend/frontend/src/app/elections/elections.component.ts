import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ElectionsDetailService } from '../_service/elections-detail.service';
import { ActivatedRoute, Router } from '@angular/router';

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
  selector: 'app-elections',
  templateUrl: './elections.component.html',
  styleUrls: ['./elections.component.css']
})

export class ElectionsComponent implements OnInit {
  public elections;
  public userId;
  public upcomingOrpast;
  public rtiData;
  constructor(public electionsService:ElectionsDetailService,private route: ActivatedRoute,public router:Router) { }

  public getUpcomingElections(){
    this.electionsService.getUpComingElections(this.userId).subscribe(
      res=>{
        console.log(res);
        this.elections = res;
      }
    )
  }

  public getPastElections(){
    this.electionsService.getPastElections(this.userId).subscribe(
      res=>{
        console.log(res);
        this.elections = res;
      }
    )
  }

  public onSelectElectionId(ElectionId){
    localStorage.setItem("electionId",ElectionId);
    this.router.navigateByUrl("/vote");

  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.upcomingOrpast = params['str'];
    });

    this.userId = localStorage.getItem("userId");

    if(this.upcomingOrpast=='upcoming'){
      this.getUpcomingElections();
      console.log("upcoming");
    }
    else{
      this.getPastElections();
    }
    
    this.rtiData = RTIdata;
    
  }

}

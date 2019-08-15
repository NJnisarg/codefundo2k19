import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ElectionsDetailService } from '../_service/elections-detail.service';
import { ActivatedRoute, Router } from '@angular/router';



@Component({
  selector: 'app-elections',
  templateUrl: './elections.component.html',
  styleUrls: ['./elections.component.css']
})

export class ElectionsComponent implements OnInit {
  public elections;
  public userId;
  public upcomingOrpast;
  constructor(public electionsService:ElectionsDetailService,private route: ActivatedRoute) { }

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
    console.log(ElectionId);
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
    
    
  }

}

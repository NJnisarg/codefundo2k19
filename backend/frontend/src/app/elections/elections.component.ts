import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ElectionsDetailService } from '../_service/elections-detail.service';
import { ActivatedRoute, Router } from '@angular/router';
import { environment } from '../../environments/environment';
import { NgxUiLoaderService } from 'ngx-ui-loader';


@Component({
  selector: 'app-elections',
  templateUrl: './elections.component.html',
  styleUrls: ['./elections.component.css']
})

export class ElectionsComponent implements OnInit {
  public elections;
  public userId;
  public upcomingOrpast;
  public env = environment;
  public domain = this.env['apiUrl'];
  constructor(public electionsService:ElectionsDetailService,private route: ActivatedRoute,public router:Router,private ngxLoader: NgxUiLoaderService) { }

  public getUpcomingElections(){
    this.ngxLoader.start();
    this.electionsService.getUpComingElections(this.userId).subscribe(
      res=>{
        console.log(res);
        console.log("upcoming here");
        console.log(res.start_date);
        this.elections = res;
        this.ngxLoader.stop();
      }
    )
  }

  public getPastElections(){
    this.ngxLoader.start();
    this.electionsService.getPastElections(this.userId).subscribe(
      res=>{
        console.log(res);
        this.elections = res;
        this.ngxLoader.stop();
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

  }
}

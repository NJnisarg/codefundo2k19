import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AadharService  } from '../_service/aadhar.service';
import { stringify } from '@angular/compiler/src/util';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import {vote} from '../../../../../blockchain/w3/addEntities';
import { W3Service } from '../_service/w3.service';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})

export class DashboardComponent implements OnInit {
  public aadhar:any;
  public userId;
  public userKey;
  public userAadharNum;
  public randNum;
  constructor(private route: ActivatedRoute,public aadharService:AadharService,private ngxLoader: NgxUiLoaderService,public w3Service:W3Service) { }

  public addVoter(userKey){
      this.w3Service.addVoter(userKey).subscribe(
        res=>{
          console.log(res);
        }
      )
  }

  public getAadharDetails(){
    this.aadharService.getAadharDetails(this.userId).subscribe(
      res=>{
        this.aadhar = res;
        console.log(this.aadhar);
        this.userAadharNum = this.aadhar.aadhar_num;
        let rand = Math.floor(Math.random() * 10000000000000000);
        this.randNum = rand.toString();
        localStorage.setItem("randNum",this.randNum);
        this.userKey = this.userAadharNum.concat(rand);
        console.log("manan")
        console.log(this.userKey);
        this.addVoter(this.userKey);
      }
    )
  }

  ngOnInit() {
    this.userId = localStorage.getItem("userId");
    console.log(this.userId);
    this.ngxLoader.start();
    this.getAadharDetails();
    this.ngxLoader.stop();

  }

}

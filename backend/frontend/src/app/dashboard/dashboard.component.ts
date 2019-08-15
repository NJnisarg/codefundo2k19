import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AadharService  } from '../_service/aadhar.service'
import { stringify } from '@angular/compiler/src/util';
import { NgxUiLoaderService } from 'ngx-ui-loader';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})

export class DashboardComponent implements OnInit {
  public aadhar:any;
  public userId;
  constructor(private route: ActivatedRoute,public aadharService:AadharService,private ngxLoader: NgxUiLoaderService) { }

  public getAadharDetails(){
    this.aadharService.getAadharDetails(this.userId).subscribe(
      res=>{
        this.aadhar = res;
        console.log(this.aadhar);
      }
    )
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.userId = +params['id'];
      console.log(this.userId);
    });
    this.ngxLoader.start();
    this.getAadharDetails();
    this.ngxLoader.stop();
  }

}

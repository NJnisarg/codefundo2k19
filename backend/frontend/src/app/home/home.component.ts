import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { AuthService } from '../_service/auth.service';
import { stringify } from '@angular/compiler/src/util';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public mobNo:any;

  public userId;
  constructor(private ngxLoader: NgxUiLoaderService,public authService:AuthService,public router:Router) { }

  public onEnterMobNo(event){
    this.mobNo = event.target.value;
  };
  
  public getId(){
    this.authService.getAuthenticated(this.mobNo).subscribe(
      res=>{
        res = JSON.parse(stringify(res));
        this.userId = res["id"];
        this.router.navigateByUrl("/dashboard/" +this.userId);
      }
    )
  }

  ngOnInit() {
      
      
      setTimeout(()=>{   
        this.ngxLoader.stop();
      }, 3);

  }
  

 

}

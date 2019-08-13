import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { NgxUiLoaderService } from 'ngx-ui-loader';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public mobNo:any;


  constructor(private ngxLoader: NgxUiLoaderService) { }

  public onEnterMobNo(event){
    this.mobNo = event.target.value;
    console.log(this.mobNo);
  }

  ngOnInit() {
      this.ngxLoader.start();
    
    setTimeout(()=>{   
      this.ngxLoader.stop();
    }, 3000);

  }
  

 

}

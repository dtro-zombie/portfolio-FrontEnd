import { Component, OnInit } from '@angular/core';
import { Banner } from 'src/app/model/banner';
import { SBannerService } from 'src/app/service/s-banner.service';
import { TokenService } from 'src/app/service/token.service';
import { getStorage, ref, deleteObject } from "firebase/storage";
@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {
  banner:Banner[]=[];
  constructor(private sBanner:SBannerService,private tokenService:TokenService) { }
  isLogged=false;
 public isnull:boolean =false;
  ngOnInit(): void {
    this.cargarBanner(); 
      
      if(this.tokenService.getToken())
      {
        this.isLogged=true;
      }else{
        this.isLogged=false;
      }
  }
  cargarBanner():void{
    this.sBanner.lista().subscribe(data=>{this.banner=data;});
  }


}

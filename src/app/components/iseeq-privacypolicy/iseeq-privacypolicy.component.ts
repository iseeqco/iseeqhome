import { Component, OnInit } from '@angular/core';
import { ViewChild } from "@angular/core";

import { IseeqHttpService } from "src/app/services/iseeq-http.service";
import { ElementRef } from "@angular/core";


@Component({
  selector: 'app-iseeq-privacypolicy',
  templateUrl: './iseeq-privacypolicy.component.html',
  styleUrls: ['./iseeq-privacypolicy.component.css']
})
export class IseeqPrivacypolicyComponent implements OnInit {
    @ViewChild('projektor')
      private elRef : ElementRef;

              siteContent:string;
              language:string;
  
  constructor(private httpService:IseeqHttpService) {
      this.language='English';
   }

  ngOnInit() {
    this.getContetntByLanguage(this.language)
  }

  changLanguage(lang:string):void{
    this.getContetntByLanguage(lang);
  }
  
  getContetntByLanguage(lang:string){
    this.httpService.getPrivacyPolicy(lang).subscribe(data=>{
                this.siteContent=data;
                this.elRef.nativeElement.innerHTML=this.siteContent
            })
  }

}

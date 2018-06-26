import { Component, OnInit } from '@angular/core';


import { IseeqHttpService } from "src/app/services/iseeq-http.service";
import { Type } from "@angular/core";
import { IseeqFooterConfigData } from "src/app/datatypes/iseeq-footer-config.data";


@Component({
  selector: 'app-iseeq-footer',
  templateUrl: './iseeq-footer.component.html',
  styleUrls: ['./iseeq-footer.component.css']
})
export class IseeqFooterComponent implements OnInit {

        configData:IseeqFooterConfigData;

  constructor(
                private iseeqHttp:IseeqHttpService
              ) 
  { 

  }

  ngOnInit() {
     this.iseeqHttp.getFooterContent().subscribe((data: IseeqFooterConfigData)=>{this.configData=data});
  }
}

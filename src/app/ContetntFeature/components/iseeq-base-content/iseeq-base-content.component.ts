import { Component, OnInit, ViewChild, Type, HostListener} from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { IseeqNavigationService } from '../../../services/iseeq-navigation.service';
import { ElementRef } from "@angular/core";



@Component({
  selector: 'app-iseeq-base-content',
  templateUrl: './iseeq-base-content.component.html',
  styleUrls: ['./iseeq-base-content.component.css']
})
export class IseeqBaseContentComponent implements OnInit {
 
     routerParam:string;

  @HostListener('window:mousedown',['$event.target'])
    test(target){
      console.log(target.tagName)
     if(target.tagName=="HTML"){
       this.navService.openAllSite();
     }
    }
     

  constructor(
    private _route : ActivatedRoute,
    public navService :IseeqNavigationService,
    private thisElement:ElementRef
    
  ) 
  { 
    
  }

  ngOnInit() {
    this._route.paramMap.subscribe(data=>{
            
        console.log("parameter valtozik openonesite hivodik")                                            
        this.routerParam=data.get('site')  
        this.navService.openOneSite(this.routerParam)
      
    })
  }
   
}

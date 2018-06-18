import { Component, OnInit, ViewChild, Type, HostListener} from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { IseeqNavigationService } from '../../../services/iseeq-navigation.service';

import { IseeqServicesComponent } from "src/app/ContetntFeature/components/iseeq-services/iseeq-services.component";
import { IseeqTeamComponent } from "src/app/ContetntFeature/components/iseeq-team/iseeq-team.component";
import { IseeqAboutComponent } from "src/app/ContetntFeature/components/iseeq-about/iseeq-about.component";
import { IseeqClientsComponent } from "src/app/ContetntFeature/components/iseeq-clients/iseeq-clients.component";
import { IseeqNewsComponent } from "src/app/ContetntFeature/components/iseeq-news/iseeq-news.component";
import { IseeqContactComponent } from "src/app/ContetntFeature/components/iseeq-contact/iseeq-contact.component";

@Component({
  selector: 'app-iseeq-base-content',
  templateUrl: './iseeq-base-content.component.html',
  styleUrls: ['./iseeq-base-content.component.css']
})
export class IseeqBaseContentComponent implements OnInit {
 
         routerParam:string;

  constructor(
    private _route : ActivatedRoute,
    private navService :IseeqNavigationService,
    
  ) 
  { 
    
  }

  ngOnInit() {
    this._route.paramMap.subscribe(data=>{
      if(!this.navService.isScrollNavigation){       
                                                      
        this.routerParam=data.get('site')  
        this.navService.openOneSite(this.routerParam)
      }
    })
  }
   
}

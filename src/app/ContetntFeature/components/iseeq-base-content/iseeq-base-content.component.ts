import { Component, OnInit, ComponentFactoryResolver, ViewChild, ViewContainerRef, Type, ComponentRef, ViewRef } from '@angular/core';
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
   @ViewChild('template',{read:ViewContainerRef}) baseContentView: ViewContainerRef; 
    
    DINAMIC_COMPONENT_LIST =new Map().set('IseeqServicesComponent',IseeqServicesComponent)
                                                    .set('IseeqTeamComponent',IseeqTeamComponent)
                                                    .set('IseeqAboutComponent',IseeqAboutComponent)
                                                    .set('IseeqClientsComponent',IseeqClientsComponent)
                                                    .set('IseeqNewsComponent',IseeqNewsComponent)
                                                    .set('IseeqContactComponent',IseeqContactComponent)

   constructor(
    private _route : ActivatedRoute,
    private _iNavService :IseeqNavigationService,
    private componentFactoryResolver: ComponentFactoryResolver 
  ) 
  { 

  }

  ngOnInit() {
  this._route.paramMap.subscribe(data=>{  
              this.createSiteContent(this._iNavService.setOpenedContentBasedOnRouterParam(data.get('site')))
          }) 
  this._iNavService.nextSiteKeyByScrollObs.subscribe(data=>console.log(data))
console.log("base content init");  
}

      //meg kell oldani hogy meg legyen hivva   Pl hivas .:this.addNextSite('IseeqNewsComponent') //
  addNextSite(site:string){
      let contentComponent:Type<any>=this.DINAMIC_COMPONENT_LIST.get(site)
      let componentFactory = this.componentFactoryResolver.resolveComponentFactory(contentComponent)
      this.baseContentView.createComponent(componentFactory)
  }

  createSiteContent(components:string[]){
    this.baseContentView.clear();
      components.forEach((data)=>{
          let contentComponent:Type<any>=this.DINAMIC_COMPONENT_LIST.get(data)
          let componentFactory = this.componentFactoryResolver.resolveComponentFactory(contentComponent)
          this.baseContentView.createComponent(componentFactory)
     })
    }
}

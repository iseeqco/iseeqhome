import { Component, OnInit, ComponentFactoryResolver, ViewChild, ViewContainerRef, Type, ComponentRef, ViewRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { IseeqNavigationService } from '../../../services/iseeq-navigation.service';
import { IseeqTeamComponent } from '../iseeq-team/iseeq-team.component';
import { IseeqAboutComponent } from '../iseeq-about/iseeq-about.component';

@Component({
  selector: 'app-iseeq-base-content',
  templateUrl: './iseeq-base-content.component.html',
  styleUrls: ['./iseeq-base-content.component.css']
})
export class IseeqBaseContentComponent implements OnInit {
   @ViewChild('template',{read:ViewContainerRef}) baseContentView: ViewContainerRef; 
    //a:ViewRef=this.baseContentView.get(0)
   //componentRef:ComponentRef<any>;
  
   constructor(
    private _route : ActivatedRoute,
    private _iNavService :IseeqNavigationService,
    private componentFactoryResolver: ComponentFactoryResolver 
  ) 
  { 

  }

  ngOnInit() {
  this._route.paramMap.subscribe(data=>{  this.createSiteContent(this._iNavService.setOpenedContentBasedOnRouterParam(data.get('site')))
                                          //console.log(this._iNavService.setOpenedContentBasedOnRouterParam(data.get('site')));
                                          //console.log('param:'+data.get('site'))
                                          }) 
    /* // console.log("base content init")
   let componentFactory =this.componentFactoryResolver.resolveComponentFactory(IseeqServicesComponent)
   let componentFactory2 =this.componentFactoryResolver.resolveComponentFactory(IseeqTeamComponent)
   console.log(componentFactory)
   let componentRef = this.temp.createComponent(componentFactory)
   componentRef= this.temp.createComponent(componentFactory2)*/

  }

   createSiteContent(components){
      this.baseContentView.clear();
      components.forEach((data)=>{
          let componentFactory = this.componentFactoryResolver.resolveComponentFactory(data)
          this.baseContentView.createComponent(componentFactory)
     })
    }
}

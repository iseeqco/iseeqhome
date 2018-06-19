import { Directive, Input} from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { HostListener } from "@angular/core";
import { ElementRef } from "@angular/core";
import { Router, NavigationEnd } from '@angular/router';
import { Subscription } from 'rxjs';
import { IseeqNavigationService } from '../../services/iseeq-navigation.service';



@Directive({
    selector:'[iseeqContentSite]'
})
export class IseeqContentSiteDirective {
  @Input() isFirstSite : boolean;
  @Input() scrollNavigationParam :string;

  subscription:Subscription;

  @HostListener('touchmove',['$event'])
    onMove(event:any){
      let navBackToHome:boolean;
      if(this.isFirstSite){
        if(window.pageYOffset==0){
          this.router.navigate(['/home']);
          navBackToHome=true;
        }
      }
      
      if(!navBackToHome){
        this.scrollOnComponent();
        
        
       
      }
    }

  @HostListener('mousewheel',['$event'])
    onWheel(event:any){
      console.log("wheel")
      let navBackToHome:boolean;
     if(this.isFirstSite){
        console.log("is first")
        if( (event.deltaY<0) && (window.pageYOffset==0) ){
          this.router.navigate(['/home']);
          navBackToHome=true;
        }
      }
      
      if(!navBackToHome){
        console.log("scroll on Component hivodik")
        this.scrollOnComponent();
        
      }
  }

  @HostListener('DOMMouseScroll',['$event'])
    onWheelFirefox(event:any){
      let navBackToHome:boolean;
      if(this.isFirstSite){
        if( (event.detail < 0) && (window.pageYOffset==0) ){
          this.router.navigate(['/home']);
          navBackToHome=true;
        }
      }
      if(!navBackToHome){
        this.scrollOnComponent();
        
      
       
      }
  }

  constructor(
    private thisElement:ElementRef,
    private navServive:IseeqNavigationService,
    private router :Router

  ) 
  { }
  
  ngOnInit() {
    this.router.events.subscribe( (event)=>{
      if(event instanceof NavigationEnd){this.navServive.isFirstScrollSinceRouting=true}
    })
  }

  ngAfterViewInit() {
    console.log("contentLoad meghivva")
    this.navServive.contentLoadObserver();
  }

  ngOnDestroy(){
   if(this.subscription){this.subscription.unsubscribe();}
  }

  private scrollOnComponent(): void {
    if(this.navServive.isFirstScrollSinceRouting){
        console.log("is first scroll by ba be jon")
        
        this.navServive.openAllSite()
        this.subscription = this.navServive.$isContentLoaded.subscribe((data)=>{
                              if(data==true){
                                  this.thisElement.nativeElement.scrollIntoView({behawior:"auto",block:"start"});
                                  this.navServive.$isContentLoaded.next(false);
                                  this.navServive.isFirstScrollSinceRouting=false;
                              }  
                          })
        this.subscription.unsubscribe
    }
  }
 
}
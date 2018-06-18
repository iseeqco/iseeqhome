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
        this.navServive.isScrollNavigation=true;
        setTimeout(()=>this.navServive.isScrollNavigation=false,300);
        this.router.navigate([this.scrollNavigationParam]);
      }
    }

  @HostListener('mousewheel',['$event'])
    onWheel(event:any){
      console.log("wheel")
      let navBackToHome:boolean;
      if(this.isFirstSite){
        if( (event.deltaY<0) && (window.pageYOffset==0) ){
          this.router.navigate(['/home']);
          navBackToHome=true;
        }
      }
      
      if(!navBackToHome){
        this.scrollOnComponent();
        this.navServive.isScrollNavigation=true;
        setTimeout(()=>this.navServive.isScrollNavigation=false,300);
        this.router.navigate([this.scrollNavigationParam]);
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
        this.navServive.isScrollNavigation=true;
        setTimeout(()=>this.navServive.isScrollNavigation=false,300);
        this.router.navigate([this.scrollNavigationParam]);
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
      if((event instanceof NavigationEnd) && (!this.navServive.isScrollNavigation)){this.navServive.isFirstScrollSinceRouting=true}
    })
  }

  ngAfterViewInit() {
    this.navServive.contentLoadObserver();
  }

  ngOnDestroy(){
   if(this.subscription){this.subscription.unsubscribe();}
  }

  private scrollOnComponent(): void {
    if(this.navServive.isFirstScrollSinceRouting){
        this.navServive.isContentVisible=false;
        this.navServive.openAllSite()
        this.subscription = this.navServive.$isContentLoaded.subscribe((data)=>{
                              if(data==true){
                                  this.thisElement.nativeElement.scrollIntoView({behawior:"auto",block:"center"});
                                  this.navServive.isContentVisible=true;
                                  this.navServive.isFirstScrollSinceRouting=false;
                              }  
                          })
    }
  }
 
}
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

  subscription:Subscription;
  
  @HostListener('mousewheel',['$event'])
    onWheel(event:any){
      if(this.isFirstSite){
        if( (event.deltaY<0) && (window.pageYOffset==0) ){this.router.navigate(["/home"])}
      }
      
      this.scrollOnComponent();
/*  svrollra routolas meg nem biztos hogy itt marad KELL MEG EGY INPUT AMIBEN MEGKAPJA A ROUTER NEVET*/
      if(this.thisElement.nativeElement.offsetTop<100){
        this.navServive.isScrollNavigation=true;   //vissza kell állitani valahol. Tipp:router event subscribe
        this.router.navigate(['/home/contact'])}
  }

  @HostListener('DOMMouseScroll',['$event'])
    onWheelFirefox(event:any){
      if(this.isFirstSite){
        if( (event.detail < 0) && (window.pageYOffset==0) ){this.router.navigate(["/home"])}
      }
      this.scrollOnComponent();


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
                                  this.thisElement.nativeElement.scrollIntoView({behawior:'auto'});
                                  this.navServive.isContentVisible=true;
                                  this.navServive.isFirstScrollSinceRouting=false;
                              }  
                          })
    }
  }
 





}
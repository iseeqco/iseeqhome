import { Directive, Input} from '@angular/core';
import { Component} from '@angular/core';
import { HostListener } from "@angular/core";
import { ElementRef } from "@angular/core";
import { Router} from '@angular/router';
import { IseeqNavigationService } from '../../services/iseeq-navigation.service';



@Directive({
    selector:'[iseeqContentSite]'
})
export class IseeqContentSiteDirective {
 
  @Input()      isFirstSite : boolean;
  @Input()      scrollNavigationParam :string;

  @HostListener('mousewheel',['$event'])
    onWheel(event:any){
        this.router.navigate([this.scrollNavigationParam])
  }

  @HostListener('DOMMouseScroll',['$event'])
    onWheelFirefox(event:any){
      this.router.navigate([this.scrollNavigationParam])
    }
                
  constructor(
    private thisElement:ElementRef,
    private navServive:IseeqNavigationService,
    private router :Router
  ) 
  { 
   
  }
  
  ngAfterViewInit() {
    let position:number = this.thisElement.nativeElement.offsetTop
    if(this.isFirstSite){position = 30}
    this.navServive.contentLoadObserver(position,this.scrollNavigationParam);
  }

}
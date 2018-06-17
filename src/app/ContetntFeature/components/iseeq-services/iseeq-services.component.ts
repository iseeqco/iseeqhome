import { Component, OnInit } from '@angular/core';
import { HostListener } from "@angular/core";
import { ElementRef } from "@angular/core";
import { Router } from "@angular/router";
import { IseeqNavigationService } from '../../../services/iseeq-navigation.service';

@Component({
  selector: 'app-iseeq-services',
  templateUrl: './iseeq-services.component.html',
  styleUrls: ['./iseeq-services.component.css']
})
export class IseeqServicesComponent implements OnInit {
  
  @HostListener('mousewheel',['$event'])
      onWheel(event:any){
          if(event.deltaY>0){ this.scrollDown() }
          if(event.deltaY<0){ this.scrollUp()   } 
      }
  @HostListener('DOMMouseScroll',['$event'])
      onWheelFirefox(event:any){
        //console.log('fired scroll'+ event.deltaY)
        //console.log(event)
        if(event.detail<0){ this.scrollUp()   }
        if(event.detail>0){ this.scrollDown() }
      }

  constructor(
    private thisElement:ElementRef,
    private navServive:IseeqNavigationService
  ) { }

  ngOnInit() {
     console.log("Service init"+this.thisElement.nativeElement.offsetTop)
    //this.thisElement.nativeElement.scrollIntoView();
      
  }

  ngAfterViewInit() {
    this.navServive.contentLoadObserver();
  }

  public IseeqscrollToTop() : void {
    //this.thisElement.nativeElement.scrollIntoView();
  }

  private scrollUp(): void {
  // console.log('up')
  }

  private scrollDown(): void {
   // console.log('down')
    //this.navServive.getNextSite(1)
  }

}

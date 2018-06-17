import { Component, OnInit, HostListener, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { IseeqNavigationService } from '../../../services/iseeq-navigation.service';

@Component({
  selector: 'app-iseeq-contact',
  templateUrl: './iseeq-contact.component.html',
  styleUrls: ['./iseeq-contact.component.css']
})
export class IseeqContactComponent implements OnInit {
  
constructor(
  private thisElement:ElementRef,
  private navServive:IseeqNavigationService
) { }
  ngOnInit() {console.log("contact init"+this.thisElement.nativeElement.offsetTop)
  
  //this.thisElement.nativeElement.scrollIntoView();
  
  
  }
  ngAfterViewInit() {
    //if(this.navServive.scrollEnable){
      //console.log(" anyádat scrollol")
      //this.thisElement.nativeElement.scrollIntoView({block:"start"});
    //}
    this.navServive.contentLoadObserver();
  }
  public IseeqscrollToTop() : void {
    //this.thisElement.nativeElement.scrollIntoView();
  }
}

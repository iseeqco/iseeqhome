import { Component, OnInit, HostListener, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { IseeqNavigationService } from '../../../services/iseeq-navigation.service';

@Component({
  selector: 'app-iseeq-news',
  templateUrl: './iseeq-news.component.html',
  styleUrls: ['./iseeq-news.component.css']
})
export class IseeqNewsComponent implements OnInit {
  
constructor(
  private thisElement:ElementRef,
  private navServive:IseeqNavigationService
) { }

  ngOnInit() {console.log("News init"+this.thisElement.nativeElement.offsetTop)
  
   // this.thisElement.nativeElement.scrollIntoView();
  
  }

  ngAfterViewInit() {
    this.navServive.contentLoadObserver();
  }
  
  public IseeqscrollToTop() : void {
   // this.thisElement.nativeElement.scrollIntoView();
  }
}

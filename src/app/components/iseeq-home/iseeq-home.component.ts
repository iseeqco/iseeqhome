import { Component, OnInit, HostListener, ElementRef } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-iseeq-home',
  templateUrl: './iseeq-home.component.html',
  styleUrls: ['./iseeq-home.component.css']
})
export class IseeqHomeComponent implements OnInit {
        
        previousScrollPosition:number;

  @HostListener('mousewheel',['$event'])
    onWheel(event:any){
      if( (event.deltaY > 0) && (this.previousScrollPosition==window.pageYOffset)){
        this.router.navigate(['/home/services'])
      }
      this.previousScrollPosition=window.pageYOffset;
    }
  
  @HostListener('DOMMouseScroll',['$event']) 
    onWhellFirefox(event:any) {
      if( (event.detail > 0) && (this.previousScrollPosition==window.pageYOffset)){
        this.router.navigate(['/home/services'])
      }
      this.previousScrollPosition=window.pageYOffset;
    }
    
  constructor(
    private router:Router,
    private element:ElementRef
  ) {
    this.previousScrollPosition=99999;
   }

  ngOnInit() {
    
  }

}

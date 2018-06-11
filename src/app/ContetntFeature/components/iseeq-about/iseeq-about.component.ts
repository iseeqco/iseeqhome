import { Component, OnInit } from '@angular/core';
import { HostListener } from "@angular/core";
import { ElementRef } from "@angular/core";

@Component({
  selector: 'app-iseeq-about',
  templateUrl: './iseeq-about.component.html',
  styleUrls: ['./iseeq-about.component.css']
})
export class IseeqAboutComponent implements OnInit {
@HostListener('window:scroll')
    onScroll(){
      console.log("abaut"+this.thisElement.nativeElement.offsetTop)
      console.log("abaut"+window.pageYOffset)

    }
  constructor(private thisElement:ElementRef,) { }

  ngOnInit() {
  }

}

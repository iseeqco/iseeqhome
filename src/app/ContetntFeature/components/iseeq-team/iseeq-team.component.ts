import { Component, OnInit } from '@angular/core';
import { IseeqNavigationService } from "src/app/services/iseeq-navigation.service";
import { ElementRef } from "@angular/core";
import { HostListener } from "@angular/core";

@Component({
  selector: 'app-iseeq-team',
  templateUrl: './iseeq-team.component.html',
  styleUrls: ['./iseeq-team.component.css']
})
export class IseeqTeamComponent implements OnInit {
 @HostListener('window:scroll')
    onScroll(){
      console.log("team"+this.thisElement.nativeElement.offsetTop)
      console.log("team"+window.pageYOffset)
      
    }
  constructor(
    private thisElement:ElementRef,
    
  )
   { }

  ngOnInit() {
  
  }

}

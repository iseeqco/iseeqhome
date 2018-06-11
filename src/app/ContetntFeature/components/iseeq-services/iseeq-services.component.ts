import { Component, OnInit } from '@angular/core';
import { HostListener } from "@angular/core";
import { ElementRef } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: 'app-iseeq-services',
  templateUrl: './iseeq-services.component.html',
  styleUrls: ['./iseeq-services.component.css']
})
export class IseeqServicesComponent implements OnInit {
  @HostListener('window:scroll')
    onScroll(){
      console.log("service ofset"+this.thisElement.nativeElement.offsetTop)
      console.log("service page "+window.pageYOffset)
      if((this.thisElement.nativeElement.offsetTop-100)<window.pageYOffset){
        console.log("if********************************************************************************")
        //this._router.navigate(['/team'])
      }
    }
  
    constructor(
    private _router:Router,
    private thisElement:ElementRef,
    
  
  ) { }

  ngOnInit() {
    console.log("Service init")
  }

}

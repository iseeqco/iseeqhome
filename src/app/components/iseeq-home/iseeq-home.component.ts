import { Component, OnInit, HostListener, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { IseeqNavigationService } from '../../services/iseeq-navigation.service';

@Component({
  selector: 'app-iseeq-home',
  templateUrl: './iseeq-home.component.html',
  styleUrls: ['./iseeq-home.component.css']
})
export class IseeqHomeComponent{
        
 @HostListener('window:scroll',['$event'])
    onscroll(event:any){
     
     if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
         this.navService.sitePositionDatas=[];
         this.router.navigate(['/home/services'])
        
      }
   }  

  constructor(
    private router:Router,
    private element:ElementRef,
    private navService:IseeqNavigationService,
  ) 
  {
   
  }

}

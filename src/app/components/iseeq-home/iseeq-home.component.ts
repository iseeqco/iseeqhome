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
    onScroll(event:any){
    
     if ((window.innerHeight + window.scrollY) >= this.element.nativeElement.firstElementChild.offsetHeight) {
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
 ngOnInit(){
   for(let i=0;i<this.navService.componentRemote.length;i++){this.navService.componentRemote[i]=false}
   this.navService.areSitesOpen=false;
  
  }

}

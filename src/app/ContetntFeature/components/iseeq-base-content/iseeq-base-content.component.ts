import { Component, OnInit,HostListener} from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { Subscription } from 'rxjs';

import { IseeqNavigationService } from '../../../services/iseeq-navigation.service';

@Component({
  selector: 'app-iseeq-base-content',
  templateUrl: './iseeq-base-content.component.html',
  styleUrls: ['./iseeq-base-content.component.css']
})
export class IseeqBaseContentComponent implements OnInit {
 
     routerParam:string;
     subscription:Subscription;

  @HostListener('window:scroll',['$event'])
    onWindowScroll(event:any){
      if (this.navService.areSitesOpen==false){  
        this.navService.openAllSite();
      }
      if( (this.navService.areSitesOpen==true) && (window.pageYOffset==0) ){
        this.router.navigate(['/home']);
      }
    } 
  
  constructor(
    private router :Router,
    private _route : ActivatedRoute,
    public navService :IseeqNavigationService
  ) 
  { 
    
  }

  ngOnInit() {
   this._route.paramMap.subscribe(data=>{ 
            this.routerParam=data.get('site')
            if(this.navService.areSitesOpen == false){     
              this.navService.openOneSite(this.routerParam)
            }
      })
    
    this.subscription = this.navService.$isContentLoaded.subscribe(data=>{
            if(data==true){
              let scrollPosition:number =this.navService.getComponentPosition('/home/'+this.routerParam)
              this.scrollToTheRouterParam(scrollPosition);
            }
      })
    }
  
    ngOnDestroy(){
      this.subscription.unsubscribe;
    }

    scrollToTheRouterParam(position:number){
      window.scrollTo({top:position,behavior:"instant"})
    }

    

}











/*  
@HostListener('touchmove',['$event'])
onMove(event:any){
 

}

    
@HostListener('window:mousedown',['$event.target'])
mouseDown(target){
  if(target.tagName=="HTML"){
  // this.navService.openAllSite();
 }
}
*/
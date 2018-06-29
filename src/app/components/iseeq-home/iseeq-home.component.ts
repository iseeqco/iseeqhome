import { Component, OnInit, HostListener, ElementRef, ViewChild } from '@angular/core';
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
         this.navService.stopAnimation=true;
        }
    }

@ViewChild('cat')
  private catElement:ElementRef;
@ViewChild('dog')
  private dogElement:ElementRef;
@ViewChild('coin')
  private coinElement:ElementRef;
@ViewChild('coin2')
  private coin2Element:ElementRef;
@ViewChild('coin3')
  private coin3Element:ElementRef;

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
  ngAfterContentInit(){
    this.startAnimation()
    this.navService.stopAnimation=false;
  }

  spriteAnimation(picture:ElementRef,unit,limit:number,intervall:number,repeat ? :number):void{
      let counter:number = 0;
      let aktuelPosition = unit;
      let InterV = setInterval(()=>{
      picture.nativeElement.style.backgroundPosition=`-${aktuelPosition}px 0px`
      if (aktuelPosition < limit){aktuelPosition=aktuelPosition+unit} else {aktuelPosition=0}
      counter ++
      if(this.navService.stopAnimation){clearInterval(InterV)}
      },intervall)
  }  
  startAnimation():void{
    this.spriteAnimation(this.catElement,45,45,500)
    this.spriteAnimation(this.dogElement,45,45,500)
    this.spriteAnimation(this.coinElement,20,40,180)
    this.spriteAnimation(this.coin2Element,20,40,160)
    this.spriteAnimation(this.coin3Element,20,40,200)
  }
}
 /*Háttérkép KB méret optimalizálás ;   0/1 feliratok; start game or scroll felirat; mobil nézet;*/
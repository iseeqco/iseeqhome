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

 
//A nav servise be felvenni egy valtozot ami a kikapcsolast intezi. OnInit bekapcsolja az animaciot derstroy ki de ezt a setInjtervall-ba kell a 
//service valtozo alapjan megvalositani.

spriteAnimation(picture:ElementRef,unit,limit:number,intervall:number,repeat ? :number):void{
  let counter:number = 0;
  let aktuelPosition = unit;

  let InterV = setInterval(()=>{
   
  picture.nativeElement.style.backgroundPosition=`-${aktuelPosition}px 0px`

  if (aktuelPosition < limit){aktuelPosition=aktuelPosition+unit} else {aktuelPosition=0}
  counter ++
  console.log(counter)
  if(counter==repeat){clearInterval(InterV);console.log("clear")}

},intervall)
  
}  
animateCat():void{
  this.spriteAnimation(this.catElement,45,45,500,60)
  this.spriteAnimation(this.dogElement,45,45,500,60)
  this.spriteAnimation(this.coinElement,20,40,230,120)
  this.spriteAnimation(this.coin2Element,20,40,210,120)
  this.spriteAnimation(this.coin3Element,20,40,250,120)

  //this.catElement.nativeElement.style.backgroundPosition="-45px 0px"
  
  
}
animateCatBack(){
  //this.spriteAnimation(this.catElement,45,45)
 // this.spriteAnimation(this.dogElement,45,45)
  //console.log("back")
  //this.catElement.nativeElement.style.backgroundPosition="0px 0px"
}

}

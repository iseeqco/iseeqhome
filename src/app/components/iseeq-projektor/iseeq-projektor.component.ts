//input: projektor window.width ; 

import { Component, OnInit, HostListener, ViewChild, ElementRef, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-iseeq-projektor',
  templateUrl: './iseeq-projektor.component.html',
  styleUrls: ['./iseeq-projektor.component.css']
})
export class IseeqProjektorComponent implements OnInit {

  @HostListener('touchstart')
    onToucheStart(){
      this.renderer2.setStyle(this.aboutScrollable.nativeElement,'overflow-x','scroll');
    }
  @HostListener('mousedown',['$event'])
    onMouseDown(event){
      this.previouseScreenx=event.screenX;
      this.aktuellScreenx=event.screenX;
      this.renderer2.setStyle(this.aboutScrollable.nativeElement,'overflow-x','visible');
      this.mouseMoveListener=this.renderer2.listen(this.aboutScrollable.nativeElement,'mousemove',(event)=>{this.onMouseMove(event)});
    }
  
  @HostListener('mouseup',['$event'])
    onMouseUp(event){
      this.removeMouseMoveListener();
      this.sideScrollControll();
    }

  @HostListener('mouseleave',['$event'])
    onMouseLeave(event){
      this.removeMouseMoveListener();
      this.sideScrollControll();
    }
  
  @ViewChild('aboutScrollable') aboutScrollable : ElementRef;
  @ViewChild('projektorWindow') projektorWindow : ElementRef;
                                mouseMoveListener: () => void;
                                relativeNavValue:number;
                                previouseScreenx:number;
                                aktuellScreenx:number;

  constructor(private renderer2 :Renderer2) {
    this.relativeNavValue=0;
   }

  ngOnInit() {

  }

  ngAfterViewInit(){
    /*console.log(this.aboutScrollable.nativeElement.scrollWidth+" scroll width")
    console.log(this.aboutScrollable.nativeElement.offsetLeft+"offsetLeft")*/
   /*console.log(this.projektorWindow.nativeElement.clientWidth)*/
  }

  private onMouseMove(event:any) : void {
    this.aktuellScreenx=event.screenX;
    this.relativeNavValue=this.relativeNavValue+(this.previouseScreenx-this.aktuellScreenx);
    this.previouseScreenx=this.aktuellScreenx;
    this.renderer2.setStyle(this.aboutScrollable.nativeElement,'left',-this.relativeNavValue+'px');
  }

  private removeMouseMoveListener() :void {
    if (this.mouseMoveListener){this.mouseMoveListener()}
  }

  sideScrollControll(){
    let maxWidth = this.aboutScrollable.nativeElement.scrollWidth;
    let redirectValue =Math.round(this.projektorWindow.nativeElement.clientWidth);

    if (this.relativeNavValue > maxWidth-redirectValue){
      this.renderer2.setStyle(this.aboutScrollable.nativeElement,'left',-(maxWidth-redirectValue)+'px');
      this.relativeNavValue= maxWidth-redirectValue;
    }

    if (this.relativeNavValue < 0 ){
      this.renderer2.setStyle(this.aboutScrollable.nativeElement,'left',0+'px');
      this.relativeNavValue=0;
    }

   /* console.log(redirectValue+" red.value")
    console.log(maxWidth+" max width")
    console.log(this.relativeNavValue)*/



  }


}

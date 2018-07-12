//https://stackoverflow.com/questions/35080387/dynamically-add-event-listener-in-angular-2

//fekete athuzas a navi-nal  function megszüntetést if - be


import { Component, OnInit, HostListener, ViewChild, ElementRef, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-iseeq-projektor',
  templateUrl: './iseeq-projektor.component.html',
  styleUrls: ['./iseeq-projektor.component.css']
})
export class IseeqProjektorComponent implements OnInit {

  @HostListener('mousedown',['$event'])
    onMouseDown(event){
      this.previouseScreenx=event.screenX;
      this.aktuellScreenx=event.screenX;
      this.mouseMoveListener=this.renderer2.listen(this.aboutScrollable.nativeElement,'mousemove',(event)=>{this.onMouseMove(event)});
    }
  
  @HostListener('mouseup',['$event'])
    onMouseUp(event){
     this.mouseMoveListener();
    }

  @HostListener('mouseleave',['$event'])
    onMouseLeave(event){
      console.log("leave")
     this.mouseMoveListener();
    }
  
  @ViewChild('aboutScrollable') aboutScrollable : ElementRef;

                                mouseMoveListener: () => void
                                relativeNavValue:number;
                                previouseScreenx:number;
                                aktuellScreenx:number;

  constructor(private renderer2 :Renderer2) {
    this.relativeNavValue=0;
   }

  ngOnInit() {}

  ngAfterViewInit(){}

  onMouseMove(event:any){
    
    this.aktuellScreenx=event.screenX;
    this.relativeNavValue=this.relativeNavValue+(this.previouseScreenx-this.aktuellScreenx);
    this.previouseScreenx=this.aktuellScreenx;
    console.log(this.relativeNavValue);
    this.renderer2.setStyle(this.aboutScrollable.nativeElement,'left',-this.relativeNavValue+'px');
  }




}

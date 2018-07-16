import { Component, OnInit, HostListener, ViewChild, ElementRef, Renderer2, ContentChildren, QueryList,Input} from '@angular/core';

import { IseeqProjektorDirective } from '../../ContetntFeature/direktives/iseeq-projektor.direktive';


@Component({
  selector: 'app-iseeq-projektor',
  templateUrl: './iseeq-projektor.component.html',
  styleUrls: ['./iseeq-projektor.component.css']
})
export class IseeqProjektorComponent implements OnInit {

 @HostListener('mouseleave',['$event'])
    onMouseLeave(event){
      console.log("mouseleave")
      this.removeMouseMoveListener();
      this.sideScrollControll();
    }
  
  @HostListener('touchstart')
    onToucheStart(){
      console.log("touche start")
      if(this.isFirstTouche){
        console.log("first touche")
        this.renderer2.setStyle(this.projektorWindow.nativeElement,'overflow-x','scroll');
        this.scrollElementToCenter(1);
        if(this.startPosition > 1) {
          this.projektorWindow.nativeElement.scrollLeft+this.membersXPositions[this.startPosition-1];
          this.currentStepNavPos=this.startPosition;
        }
        this.isFirstTouche=false;
      }
    }
  
  @ViewChild('aboutScrollable')                aboutScrollable : ElementRef;
  @ViewChild('projektorWindow')                projektorWindow : ElementRef;
  @ContentChildren(IseeqProjektorDirective)    members : QueryList<IseeqProjektorDirective> 
  @Input('membersCentered')                    areMembersCentered:boolean;
  @Input('projektorWidth')                     projektorWidth:string;
  @Input('startPosition')                      startPosition:number;
  @Input('statusBar')                          statusBar:boolean;
                                               mouseMoveListener: () => void;
                                               isFirstTouche:boolean;
                                               relativeNavValue:number;
                                               previouseScreenx:number;
                                               aktuellScreenx:number;
                                  //----------------------------------------------------------------------------------
                                               membersXPositions:number[];
                                               membersWidth:number[];
                                               currentStepNavPos:number;  //léptetéses navigációhoz tárolja az elem sorszámát(tömb) amin éppen áll a navigáció             
                                  //------------------------------------------------------------------------------------
                                               isMemberActive: boolean [];
  
   constructor(private renderer2 :Renderer2) {
    this.relativeNavValue=0;
    this.membersXPositions=[];
    this.membersWidth=[];
    this.isMemberActive=[];
    this.currentStepNavPos=0;
    this.isFirstTouche=true;
   }

  ngOnInit() {
    this.renderer2.setStyle(this.projektorWindow.nativeElement,'width',this.projektorWidth)
  }

  ngAfterViewInit(){
    this.setMembersPostitons(this.members)
    if(this.startPosition){this.scrollElementToCenter(this.startPosition)}
    this.members.forEach( () => this.isMemberActive.push(false) );
  }

  onMouseDown(event){
    console.log("mouseDOWN")
    this.previouseScreenx=event.screenX;
    this.aktuellScreenx=event.screenX;
    this.mouseMoveListener=this.renderer2.listen(this.aboutScrollable.nativeElement,'mousemove',(event)=>{this.onMouseMove(event)});
  }

  private onMouseMove(event:any) : void {
    console.log("mouseMOVE")
    this.aktuellScreenx=event.screenX;
    this.relativeNavValue=this.relativeNavValue+(this.previouseScreenx-this.aktuellScreenx);
    this.previouseScreenx=this.aktuellScreenx;
    this.renderer2.setStyle(this.aboutScrollable.nativeElement,'left',-this.relativeNavValue+'px');
  }

  onMouseUp(){
    console.log("mouseUP")
    this.removeMouseMoveListener();
    this.selectElementForScroll()
    this.sideScrollControll();
  }

  onToucheEnd(){
    console.log("touche END")
    this.selectElementForScroll()
  }

  private removeMouseMoveListener() :void {
    if (this.mouseMoveListener){this.mouseMoveListener()}
  }
        //@ Nem engedi "tulscrollozni" tárolo div-te.
  private sideScrollControll() : void{
    if(this.isFirstTouche){
      let maxWidth = this.aboutScrollable.nativeElement.scrollWidth;
      let redirectValue = this.projektorWindow.nativeElement.clientWidth;
      if (this.relativeNavValue > maxWidth-redirectValue){
        this.renderer2.setStyle(this.aboutScrollable.nativeElement,'left',-(maxWidth-redirectValue)+'px');
        this.relativeNavValue= maxWidth-redirectValue;
      }
      if (this.relativeNavValue < 0 ){
        this.renderer2.setStyle(this.aboutScrollable.nativeElement,'left',0+'px');
        this.relativeNavValue=0;
      }
    }
  }
        
  private setMembersPostitons(members:QueryList<IseeqProjektorDirective>):void {
    members.forEach(element => {
      this.membersXPositions.push(element.getXPosition())                   
      this.membersWidth.push(element.getWidth());
    });
  }
                         //@kiválasztja azt az elemet ami legközelebb van a projektor ablak közepéhez és meghivja az elem sorszámával a középre igazító metódust
  private selectElementForScroll() : void {
    console.log("select element")
    let counter : number = 0;
    let minposition : number = 0;
    let aktuellValue :number;
    let value :number=99999;
    this.membersXPositions.forEach((memberPosition)=>{
      if(this.isFirstTouche){aktuellValue=Math.abs((memberPosition-this.relativeNavValue)-(Math.round(this.projektorWindow.nativeElement.clientWidth/2)))}
      if(!this.isFirstTouche){aktuellValue=Math.abs((memberPosition-this.projektorWindow.nativeElement.scrollLeft)-(Math.round(this.projektorWindow.nativeElement.clientWidth/2)))}
      if(aktuellValue < value ) {
        minposition=counter;
        value=aktuellValue;
      }
      counter++;
    })
    this.sendIAmInCenterEvent(minposition)
    this.currentStepNavPos=minposition;
    this.setStatusBar()
    if(this.areMembersCentered==true){this.scrollElementToCenter(minposition)}
  }

  stepNavigationScroll(x:number):void{
    console.log("stepp navigation")
    let pos :number = this.currentStepNavPos+x;
    if(pos <= 1){pos=1}
    if(pos >= this.membersXPositions.length-2){pos=this.membersXPositions.length-2}
    this.scrollElementToCenter(pos)
    this.sideScrollControll()
    this.setStatusBar()
  }

  private scrollElementToCenter(i:number){
    console.log("scroll element")
    let pos = this.membersXPositions[i]
    pos = pos - Math.round(this.projektorWindow.nativeElement.clientWidth/2);
    pos = pos + Math.round(this.membersWidth[i]/2);
    if(this.isFirstTouche){this.renderer2.setStyle(this.aboutScrollable.nativeElement,'left',-pos+'px')};
    if(!this.isFirstTouche){ this.projektorWindow.nativeElement.scrollLeft=pos};
    this.relativeNavValue=pos;
    this.currentStepNavPos=i;
    this.sendIAmInCenterEvent(i)
  }

  private sendIAmInCenterEvent(position:number) : void {
      let member =this.members.toArray()[position]
      member.sendCenteredSignal();
  }
  private setStatusBar(): void{
      for( let i=0 ;i<this.isMemberActive.length;i++){this.isMemberActive[i]=false}
      this.isMemberActive[this.currentStepNavPos]=true;
  }
}





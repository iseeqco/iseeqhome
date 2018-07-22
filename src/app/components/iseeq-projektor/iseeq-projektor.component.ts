import { Component, OnInit, ViewChild, ElementRef, Renderer2, ContentChildren, QueryList,Input} from '@angular/core';

import { IseeqProjectableComponent } from './iseeq-projectable.component';

@Component({
  selector: 'app-iseeq-projektor',
  templateUrl: './iseeq-projektor.component.html',
  styleUrls: ['./iseeq-projektor.component.css']
})
export class IseeqProjektorComponent implements OnInit{

   
  
  @ViewChild('aboutScrollable')                aboutScrollable : ElementRef;
  @ViewChild('projektorWindow')                projektorWindow : ElementRef;
  @ViewChild('frontWhiteSpace')                frontWhiteSpace : ElementRef;
  @ViewChild('endWhiteSpace')                  endWhiteSpace : ElementRef;
  @ContentChildren(IseeqProjectableComponent)  members : QueryList<IseeqProjectableComponent> 
  @Input('membersCentered')                    areMembersCentered:boolean;
  @Input('projektorWidth')                     projektorWidth:string;
  @Input('startPosition')                      startPosition:number;
  @Input('statusBar')                          statusBar:boolean;
  @Input('startInCenter')                      startInCenter:boolean;
  @Input('buttonSource')                       buttonSource:string;
                                               mouseMoveListener: () => void;
                                               isFirstTouche:boolean;
                                               firstAction:boolean;
                                               relativeNavValue:number;
                                               previouseScreenx:number;
                                               aktuellScreenx:number;
                                  //----------------------------------------------------------------------------------
                                               membersXPositions:number[];
                                               membersWidth:number[];
                                               membersCeterPosition:number[];
                                               currentStepNavPos:number;  //léptetéses navigációhoz tárolja az elem sorszámát amin éppen áll a navigáció             
                                  //------------------------------------------------------------------------------------
                                               isMemberActive: boolean [];
  
  constructor(private renderer2 :Renderer2) {
    this.relativeNavValue=0;
    this.membersXPositions=[];
    this.membersWidth=[];
    this.membersCeterPosition=[];
    this.isMemberActive=[];
    this.currentStepNavPos=0;
    this.isFirstTouche=true;
    this.firstAction=true;
   }

  ngOnInit() {
    this.renderer2.setStyle(this.projektorWindow.nativeElement,'width',this.projektorWidth)
  }

  ngAfterViewInit(){
  
  }

  onMouseOver(){
    this.initView();
  }

  onMouseLeave(){
    this.removeMouseMoveListener();
    this.selectElementForScroll();
    this.sideScrollControll();
  }
  
  onTouchStart(event){
    this.initView();
    this.aktuellScreenx=event.changedTouches[0].clientX;
    this.previouseScreenx=this.aktuellScreenx;
  }

  onTouchMove(event){
    this.aktuellScreenx=event.changedTouches[0].clientX;
    this.relativeNavValue=this.relativeNavValue+this.previouseScreenx-this.aktuellScreenx;
    this.previouseScreenx=this.aktuellScreenx;
    this.renderer2.setStyle(this.aboutScrollable.nativeElement,'left',-this.relativeNavValue+'px');
  }

  onToucheEnd(event){
    this.selectElementForScroll()
    this.sideScrollControll();
  }

  onMouseDown(event){
    this.previouseScreenx=event.screenX;
    this.aktuellScreenx=event.screenX;
    this.mouseMoveListener=this.renderer2.listen(this.aboutScrollable.nativeElement,'mousemove',(event)=>{this.onMouseMove(event)});
  }

  onMouseMove(event:any) : void {
    console.log("mouse moove")
    this.aktuellScreenx=event.screenX;
    this.relativeNavValue=this.relativeNavValue+(this.previouseScreenx-this.aktuellScreenx);
    this.previouseScreenx=this.aktuellScreenx;
    this.renderer2.setStyle(this.aboutScrollable.nativeElement,'left',-this.relativeNavValue+'px');
  }

  onMouseUp(){
    this.removeMouseMoveListener();
    this.selectElementForScroll();
    this.sideScrollControll();
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
      this.setStatusBar()
    }
  }
        
  private setMembersPostitons(members:QueryList<IseeqProjectableComponent>):void {
    members.forEach(element => {
      this.membersXPositions.push(element.getXPosition()-this.projektorWindow.nativeElement.getBoundingClientRect().x)                   
      this.membersWidth.push(element.getWidth());
      this.membersCeterPosition.push( (Math.round(element.getXPosition()+(element.getWidth()/2) ))-this.projektorWindow.nativeElement.getBoundingClientRect().x );
    })
    console.log(this.membersCeterPosition)
    console.log(this.projektorWindow.nativeElement.getBoundingClientRect().x)
  }
                         //@kiválasztja azt az elemet aminek a kezdő pontja legközelebb van a projektor ablak közepéhez és meghivja az elem sorszámával a középre igazító metódust
  private selectElementForScroll() : void {
    let counter : number = 0;
    let minposition : number = 0;
    let aktuellValue :number;
    let value :number=99999;
    this.membersCeterPosition.forEach((memberPosition)=>{                                                     
                            //az az elem aminek a közepe a képernyő bal szelehez van legközelebb    //korrigálja az erteket a vetito ablak széllességének a felével
      if(this.isFirstTouche){aktuellValue=Math.abs((memberPosition-this.relativeNavValue)-(Math.round(this.aboutScrollable.nativeElement.clientWidth/2)))}
      if(!this.isFirstTouche){aktuellValue=Math.abs((memberPosition-this.projektorWindow.nativeElement.scrollLeft)-(Math.round(this.projektorWindow.nativeElement.clientWidth/2)))} //ez a kodresz lehet hogy nem fut le sehol

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
    let pos :number = this.currentStepNavPos+x;
    if(pos <= 0){pos=0}
    if(pos >= this.membersXPositions.length-1){pos=this.membersXPositions.length-1} 
    this.scrollElementToCenter(pos)
    this.sideScrollControll()
    this.setStatusBar()
  }

  private scrollElementToCenter(i:number){
    let pos = this.membersXPositions[i]
    pos = pos - Math.round(this.projektorWindow.nativeElement.clientWidth/2);
    pos = pos + Math.round(this.membersWidth[i]/2);
    this.renderer2.setStyle(this.aboutScrollable.nativeElement,'left',-pos+'px')
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

  private setPlaceholders() : void{
      let firstElementWidth : number = this.members.first.getWidth();
      let lastElementWidth  : number = this.members.last.getWidth();
      let projektorWindowWidth: number = this.projektorWindow.nativeElement.clientWidth;
      
      let frontPlaceHolderWidth : number = Math.round((projektorWindowWidth/2) - (firstElementWidth/2))
      if(frontPlaceHolderWidth<1){frontPlaceHolderWidth=1}
      this.renderer2.setStyle(this.frontWhiteSpace.nativeElement,'min-width',frontPlaceHolderWidth+'px');

      let endPlaceHolderWidth : number = Math.round((projektorWindowWidth/2) - (lastElementWidth/2));
      if(endPlaceHolderWidth<1){endPlaceHolderWidth=1}
      this.renderer2.setStyle(this.endWhiteSpace.nativeElement,'min-width',endPlaceHolderWidth+'px');
  }

  private initView():void {
    if(this.firstAction){
      if(this.startInCenter){this.setPlaceholders()}
      this.setMembersPostitons(this.members)
      if(this.startPosition){this.scrollElementToCenter(this.startPosition)}
      this.members.forEach( () => this.isMemberActive.push(false) );
      this.firstAction=false;
    }
  }
}





import { Directive, Input, ElementRef, Renderer2, Output, EventEmitter} from '@angular/core';


@Directive({
    selector:'[iseeqProjektor]'
})
export class IseeqProjektorDirective {

@Input('proWidth') elementWidth:number;
@Output() iamincenter = new EventEmitter<boolean>();

constructor(private elRef:ElementRef,
            private renderer2:Renderer2)
{

}

ngAfterViewInit(){
    this.renderer2.addClass(this.elRef.nativeElement,'projectable')
    this.renderer2.setAttribute(this.elRef.nativeElement,'draggable','false')
    this.renderer2.setAttribute(this.elRef.nativeElement,'ondragstart','return false;')
    this.renderer2.setStyle(this.elRef.nativeElement,'min-width',this.elementWidth+'px')
    
}

getWidth():number {return this.elRef.nativeElement.clientWidth}

getXPosition():number{return this.elRef.nativeElement.getBoundingClientRect().x}

sendCenteredSignal(){
    this.iamincenter.emit(true);
    console.log("event emiter emited an event")
}

}
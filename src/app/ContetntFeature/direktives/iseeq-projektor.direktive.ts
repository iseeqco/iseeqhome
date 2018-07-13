import { Directive, Input, ElementRef, Renderer2} from '@angular/core';

@Directive({
    selector:'[iseeqProjektor]'
})
export class IseeqProjektorDirective {




constructor(private elRef:ElementRef,
            private renderer2:Renderer2){

}

ngAfterViewInit(){
    this.renderer2.addClass(this.elRef.nativeElement,'projectable')
    this.renderer2.setAttribute(this.elRef.nativeElement,'draggable','false')
    this.renderer2.setAttribute(this.elRef.nativeElement,'ondragstart','return false;')
}

}
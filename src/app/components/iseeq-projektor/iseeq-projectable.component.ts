import { Component, ViewChild, ElementRef, EventEmitter, Output } from "../../../../node_modules/@angular/core";
import { IseqProjektorItem } from "./iseeq-Iprojektor";

@Component({
    selector: 'app-iseeq-projectable',
    template: `
      <div #projectable>
        <ng-content></ng-content>
      </div>
    `,
    styles: ['']
  })
  export class IseeqProjectableComponent implements IseqProjektorItem{
  
    @ViewChild('projectable') projectable : ElementRef;
    @Output() iamincenter = new EventEmitter<boolean>();
    
    getWidth():number {return this.projectable.nativeElement.clientWidth}

    getXPosition():number{return this.projectable.nativeElement.getBoundingClientRect().x}
    
    sendCenteredSignal(){
        this.iamincenter.emit(true);
    }


  }
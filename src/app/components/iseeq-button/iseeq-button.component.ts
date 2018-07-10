import { Component, OnInit, Input, ElementRef, ViewChild, Renderer2, HostListener } from '@angular/core';

@Component({
  selector: 'app-iseeq-button',
  templateUrl: './iseeq-button.component.html',
  styleUrls: ['./iseeq-button.component.css']
})
export class IseeqButtonComponent implements OnInit {

  @Input('text') text : string;
  @Input('textcolor') textcolor : string;
  @Input('background') background : string;
  @Input('size') size : string;
  @Input('shadow') shadow:string;

  @ViewChild('button') el : ElementRef;
  
  @HostListener('mouseenter')
    onMouseEnter(){
      this.renderer.addClass(this.el.nativeElement,'button_hower');
      this.renderer.setStyle(this.el.nativeElement,'box-shadow','3px 3px '+this.shadow)
    }

  @HostListener('mouseleave')
    onMouseLeave(){
      this.renderer.removeClass(this.el.nativeElement,'button_hower');
      this.renderer.removeStyle(this.el.nativeElement,'box-shadow')
    }

  constructor(private renderer :Renderer2) { }

  
  ngOnInit() {
    console.log(this.textcolor)
    this.renderer.setStyle(this.el.nativeElement,'color',this.textcolor);
    this.renderer.setStyle(this.el.nativeElement,'background-color',this.background);
    this.renderer.addClass(this.el.nativeElement,this.size);
  }

}

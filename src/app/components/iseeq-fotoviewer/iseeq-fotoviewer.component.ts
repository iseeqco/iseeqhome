import { Component, OnInit, Renderer2, ViewChild, ElementRef, ChangeDetectorRef, Input } from '@angular/core';

@Component({
  selector: 'app-iseeq-fotoviewer',
  templateUrl: './iseeq-fotoviewer.component.html',
  styleUrls: ['./iseeq-fotoviewer.component.css']
})
export class IseeqFotoviewerComponent implements OnInit {
  
  @ViewChild('fotoViewerBase') fotoViewerBase : ElementRef;
  
  @Input('fotos') fotos : string[];

      isViewOpen : boolean;
      counter    : number;
      fotosLenght: number;
     
  
  constructor(private renderer:Renderer2,
              private detector: ChangeDetectorRef) 
  { 
    this.isViewOpen=false;
    this.counter=0;
  }

  ngOnInit() {
    this.fotosLenght=this.fotos.length;
  }

  private setFotoViewerHeight(){
    let windowHeight = window.innerHeight;
    this.renderer.setStyle(this.fotoViewerBase.nativeElement,'height',windowHeight+'px')
  }

  openViewer(){
    this.isViewOpen=true;
    this.detector.detectChanges();
    this.setFotoViewerHeight();
  }

  closeViewer(){
    this.isViewOpen=false;
    this.counter=0;
  }

  stepBack(){
    if(this.counter > 0){
      this.counter--;
    }
  }

  stepFor(){
    if(this.counter < this.fotos.length-1){
      this.counter++;
    }
  }
  

}




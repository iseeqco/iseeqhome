import { Component, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-iseeq-flag',
  templateUrl: './iseeq-flag.component.html',
  styleUrls: ['./iseeq-flag.component.css']
})
export class IseeqFlagComponent implements OnInit {
    
    active:boolean;         //configurationen
    activePicture:string;
    passivePicture:string;

    visiblePicture:string;  //activated values
    visibleClass:string;
  
  constructor(private renderer2:Renderer2) {
    this.active=false;
    this.activePicture="./assets/pictures/about/flag-active.png"
    this.passivePicture="./assets/pictures/about/flag.png"

    
  }

  ngOnInit() {
    this.configureView(this.active);
  }

  private configureView(active:boolean){
    if(this.active){
      this.visiblePicture=this.activePicture;
      this.visibleClass="active-flag flag"      
    } else if (!this.active){
        this.visiblePicture=this.passivePicture;
        this.visibleClass="passive-flag flag"
    }
  
  }

  public setState(newState:boolean) :void {
    this.active=newState;
    this.configureView(this.active);
  }

  public changState() :void {
    this.active=!this.active;
    this.configureView(this.active);
  }

  public getState() :boolean {
    return this.active
  }

}


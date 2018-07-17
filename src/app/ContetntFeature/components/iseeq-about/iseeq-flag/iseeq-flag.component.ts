import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-iseeq-flag',
  templateUrl: './iseeq-flag.component.html',
  styleUrls: ['./iseeq-flag.component.css']
})
export class IseeqFlagComponent implements OnInit {
    
@Input('active')  active:boolean;         //configurationen
@Input('texts')   texts:string[];
                  activePicture:string;
                  passivePicture:string;

                  visiblePicture:string;  //activated values
    
  
  constructor() {
    this.activePicture="./assets/pictures/about/flag-active.png"
    this.passivePicture="./assets/pictures/about/flag.png"
  }

  ngOnInit() {
    this.configureView(this.active);
    console.log(this.active)
    console.log(this.texts)
  }

  private configureView(active:boolean){
    if(this.active){
      this.visiblePicture=this.activePicture;
        
    } else if (!this.active){
        this.visiblePicture=this.passivePicture;
       
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


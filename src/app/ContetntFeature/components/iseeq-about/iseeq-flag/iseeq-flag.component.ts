import { Component,Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-iseeq-flag',
  templateUrl: './iseeq-flag.component.html',
  styleUrls: ['./iseeq-flag.component.css']
})
export class IseeqFlagComponent{
    
@Input('active')  active:boolean;         //configurationen
@Input('texts')   texts:string[];
@Input('year')    flagYear:string[];

                  activePicture:string;
                  passivePicture:string;
                  visiblePicture:string;  //activated values
    
@Output() iamincenter = new EventEmitter<boolean>();

  constructor() {
    this.activePicture="./assets/pictures/about/flag-active.png"
    this.passivePicture="./assets/pictures/about/flag.png"
  }

  ngOnInit() {
    this.configureView(this.active);
  }
  ngOnChanges(){
    this.configureView(this.active);
  }

  private configureView(active:boolean){
    if(active){
      this.visiblePicture=this.activePicture;
        
    } else if (!active){
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


import { Component, HostListener} from '@angular/core';


@Component({
  selector: 'app-iseeq-clients',
  templateUrl: './iseeq-clients.component.html',
  styleUrls: ['./iseeq-clients.component.css']
})
export class IseeqClientsComponent {
 
  projectorWidth:string;


  constructor(){

  }

 ngOnInit(){
  this.setProjectorWidth();
 }

setProjectorWidth(){
  if(window.outerWidth <= 600) {this.projectorWidth="300px";}
  if(window.outerWidth > 600) {this.projectorWidth="550px";} 
}



}

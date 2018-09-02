import { Component, HostListener} from '@angular/core';
import { IseeqHttpService } from '../../../services/iseeq-http.service';
import { ClientDatas } from '../../../datatypes/iseeq-clients.data';


@Component({
  selector: 'app-iseeq-clients',
  templateUrl: './iseeq-clients.component.html',
  styleUrls: ['./iseeq-clients.component.css']
})
export class IseeqClientsComponent {
 
  projectorWidth:string;

  clientDatas:ClientData [];

  constructor(
    private _http:IseeqHttpService
  )
  {

  }

 ngOnInit(){
  this.setProjectorWidth();
  this._http.getClientContent().subscribe((data)=>{
    this.clientDatas=data.clientDatas;    
  })
 }

setProjectorWidth(){
  if(window.outerWidth <= 600) {this.projectorWidth="300px";}
  if(window.outerWidth > 600) {this.projectorWidth="550px";} 
}



}

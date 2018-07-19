import { Component} from '@angular/core';
import { IseeqHttpService } from '../../../services/iseeq-http.service';
import { AboutDatas, AboutData } from '../../../datatypes/iseeq-about.data';

@Component({
  selector: 'app-iseeq-about',
  templateUrl: './iseeq-about.component.html',
  styleUrls: ['./iseeq-about.component.css']
})
export class IseeqAboutComponent{

      flagDatas:AboutData[]

constructor(
  private httpServ : IseeqHttpService
)
{
  
}

ngOnInit(){
  this.initialiseSiteContent();
}

initialiseSiteContent(){
  this.httpServ.getAboutContent().subscribe((data : AboutDatas)=>{
    this.flagDatas=data.aboutDatas;
  })
}

elementInCenter(element:number){
  console.log("event catched")
  console.log(element)
}
  }


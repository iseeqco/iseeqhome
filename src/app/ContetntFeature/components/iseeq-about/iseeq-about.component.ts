import { Component} from '@angular/core';

@Component({
  selector: 'app-iseeq-about',
  templateUrl: './iseeq-about.component.html',
  styleUrls: ['./iseeq-about.component.css']
})
export class IseeqAboutComponent{
  flagTexts : string[] =["kutya","macska","eger"];
  activeFlag: boolean = true;

elementInCenter(event:any){
  console.log("event catched")
  console.log(event)
}
  }


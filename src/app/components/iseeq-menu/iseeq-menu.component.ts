import { Component, OnInit } from '@angular/core';
import {trigger,state,style,animate,transition} from '@angular/animations';

import { IseeqHttpService } from '../../services/iseeq-http.service';

@Component({
  selector: 'app-iseeq-menu',
  templateUrl: './iseeq-menu.component.html',
  styleUrls: ['./iseeq-menu.component.css'],
  animations:[
    trigger('isOpen',[state('false',style({height:'0px'})),state('true',style({height:'200px'})),
            transition('false => true',animate('300ms ease-in')),
            transition('true => false',animate('300ms ease-in'))
          ])
  ]
})
export class IseeqMenuComponent implements OnInit {
    
    menuItems:string[]
    isSMenuOpen:string;
  
  constructor(private iseeqHttp : IseeqHttpService){
    this.isSMenuOpen='false';

  }

  ngOnInit(){
   this.iseeqHttp.getMenuItems().subscribe(data=>this.menuItems=data['menuitems']);
  }

  openCloseSMenu(){
    
    if (this.isSMenuOpen=="false")
      {this.isSMenuOpen='true';}
    else
      {this.isSMenuOpen="false";}
  }

}

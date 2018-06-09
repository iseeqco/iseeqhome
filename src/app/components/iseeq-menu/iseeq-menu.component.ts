import { Component, OnInit, HostListener } from '@angular/core';
import {trigger,state,style,animate,transition} from '@angular/animations';
import { Router} from '@angular/router';

import { IseeqNavigationService } from '../../services/iseeq-navigation.service';

@Component({
  selector: 'app-iseeq-menu',
  templateUrl: './iseeq-menu.component.html',
  styleUrls: ['./iseeq-menu.component.css'],
  animations:[
    trigger('isOpen',[state('false',style({height:'0px'})),state('true',style({height:'*'})),
            transition('false => true',animate('300ms ease-in')),
            transition('true => false',animate('300ms ease-in'))
          ]),
    trigger('menuIn',[
              transition(':enter',[style({transform:'translateY(-100%)'}),animate(400)])
            ])
  ]
})
export class IseeqMenuComponent implements OnInit {
   
    menuItems:string[]
    isMenuVisible:boolean;
    isMobileView:boolean;
    isSMenuOpen:string;
    sMenuIcon:string;

  @HostListener('window:resize')
    onResize(){
      if(window.innerWidth < 700){this.isMobileView=true} else {this.isMobileView=false};
    }

  @HostListener('window:scroll')
    onScroll(){
      if(window.pageYOffset>10){
        this.isMenuVisible=true;
        this._router.navigate(['/services']);
      } 
      else {
        this.isMenuVisible=false;
        this._router.navigate(['']);
      }

      
      
    }

  constructor(
    private _iseeqNavigationService: IseeqNavigationService,
    private _router : Router
  )
  {
    this.isSMenuOpen='false';
    this.sMenuIcon='menu'
    this.isMenuVisible=false;
  }

  ngOnInit(){
    this._iseeqNavigationService.getMenuItem().subscribe(data=>this.menuItems=data['menuitems']);
    if(window.innerWidth < 700){this.isMobileView=true}
  }

  openCloseSMenu(){
    if (this.isSMenuOpen=="false")
      {this.isSMenuOpen='true';
       this.sMenuIcon="close"}
    else
      {this.isSMenuOpen="false";
       this.sMenuIcon="menu"}
  }

}

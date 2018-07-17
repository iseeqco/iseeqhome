import { Component, OnInit, HostListener } from '@angular/core';
import {trigger,state,style,animate,transition} from '@angular/animations';
import { Router, ActivatedRoute} from '@angular/router';

import { IseeqNavigationService } from '../../services/iseeq-navigation.service';
import { NavigationData } from '../../datatypes/iseeq-navigation.data';

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
    
    menuItems:NavigationData[]
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
      } 
      else {
        this.isMenuVisible=false;
      }
  }

  constructor(
    private  navService: IseeqNavigationService,
    private _router : Router,           //out
    private _route : ActivatedRoute    //out
  )
  {
    this.isSMenuOpen='false';
    this.sMenuIcon='./assets/pictures/ikon/baseline-menu-24px.svg'
    this.isMenuVisible=false;
  }

  ngOnInit(){
    this.navService.getMenuItem().subscribe(data=>this.menuItems=data['menuitems']);
    if(window.innerWidth < 700){this.isMobileView=true}
    
  }

  openCloseSMenu(){
    if (this.isSMenuOpen=="false")
      {this.isSMenuOpen='true';
       this.sMenuIcon="./assets/pictures/ikon/baseline-close-24px.svg"}
    else
      {this.isSMenuOpen="false";
       this.sMenuIcon="./assets/pictures/ikon/baseline-menu-24px.svg"}
  }
 
  private scrollToComponent(component:string) : void {
    let position = this.navService.getComponentPosition('/home/'+component)
    window.scrollTo({top:position,behavior: "smooth"})
  }
}

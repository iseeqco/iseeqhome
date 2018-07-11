import { Component, OnInit, HostListener } from '@angular/core';
import {trigger,state,style,animate,transition, keyframes} from '@angular/animations';
import { IseeqNavigationService } from '../../../services/iseeq-navigation.service';

@Component({
  selector: 'app-iseeq-services',
  templateUrl: './iseeq-services.component.html',
  styleUrls: ['./iseeq-services.component.css'],
  animations:[
    trigger('cstate',[state('close',style({height:'200px'})),
                     state('open',style({height:'*'})),
                     transition('close => open',animate('500ms ease-in',keyframes([ style({height:'180px',offset:0.3}),
                                                                                    style({height:'*',offset:1})
                                                                                   ]
                                                                                  )
                                                        )
                                ),
                     transition('open=>close',animate('300ms ease-in'))
                    ]
            )
  ]
})
export class IseeqServicesComponent implements OnInit {
  @HostListener('mouseleave')
    onMouseLeav(){
      this.collumState=['close','close','close'];
      this.animOpen=[false,false,false];
      this.buttonText=['Show more ...','Show more ...','Show more ...']
    }

  collumState:string[];
  animOpen:boolean [];
  buttonText:string[];

  constructor(
    private navServive:IseeqNavigationService
  ) 
  {
    this.collumState=['close','close','close'];
    this.animOpen=[false,false,false];
    this.buttonText=['Show more ...','Show more ...','Show more ...']
  } 

  ngOnInit() {
     
  }

  animateCollum(x:number){
    this.collumState[x]= this.collumState[x] === 'close' ? 'open' : 'close';
    setTimeout(()=>this.animOpen[x]=! this.animOpen[x],300)
    
    if (this.animOpen[x]==false){this.buttonText[x]="Show less"} else {this.buttonText[x]="Show more ..."}
  }

}

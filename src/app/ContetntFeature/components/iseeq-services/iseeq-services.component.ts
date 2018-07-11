import { Component, OnInit } from '@angular/core';
import {trigger,state,style,animate,transition} from '@angular/animations';
import { IseeqNavigationService } from '../../../services/iseeq-navigation.service';

@Component({
  selector: 'app-iseeq-services',
  templateUrl: './iseeq-services.component.html',
  styleUrls: ['./iseeq-services.component.css'],
  animations:[
    trigger('cstate',[state('close',style({height:'200px'})),
                     state('open',style({height:'*'})),
                     transition('close => open',animate('500ms ease-in')),
                     transition('open=>close',animate('500ms ease-in'))
                    ]
            )
  ]
})
export class IseeqServicesComponent implements OnInit {
  
  collumState:string;

  constructor(
    private navServive:IseeqNavigationService
  ) 
  {
    this.collumState='close'
  } 

  ngOnInit() {
     
  }

}

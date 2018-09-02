import { Component, OnInit } from '@angular/core';

import { IseeqNavigationService } from './services/iseeq-navigation.service';
import { IseeqWpContentService } from './services/iseeq-wp-content-service';




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

      animate:boolean;

  constructor(
    public appNavService :IseeqNavigationService,
    public wpService :IseeqWpContentService
  )
  {
    this.animate=false;
  }
  
  ngOnInit(): void {
    this.appNavService.$animationTirgger.subscribe(data=>this.animate=data);
  }

  ngAfterViewInit() {}
  
  
  
}

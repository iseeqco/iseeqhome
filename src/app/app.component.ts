import { Component, OnInit } from '@angular/core';

import { IseeqNavigationService } from './services/iseeq-navigation.service';




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(
    public appNavService :IseeqNavigationService
  )
  {

  }
  
  
  
  ngOnInit(): void {
    
  }

  ngAfterViewInit() {}
  
  
  
}

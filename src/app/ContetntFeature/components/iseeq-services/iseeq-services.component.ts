import { Component, OnInit } from '@angular/core';
import { HostListener } from "@angular/core";
import { ElementRef } from "@angular/core";
import { Router } from "@angular/router";
import { IseeqNavigationService } from '../../../services/iseeq-navigation.service';

@Component({
  selector: 'app-iseeq-services',
  templateUrl: './iseeq-services.component.html',
  styleUrls: ['./iseeq-services.component.css']
})
export class IseeqServicesComponent implements OnInit {
  
  constructor(
    private thisElement:ElementRef,
    private navServive:IseeqNavigationService
  ) 
  {

  } 

  ngOnInit() {
     
  }

}

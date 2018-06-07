import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { IseeqHttpService } from './iseeq-http.service';



@Injectable()
export class IseeqNavigationService{
        
        menuItemsObs:Observable<string[]>;
        menuItemsArr:string[];

    constructor(private iseeqHttp : IseeqHttpService){
        this.menuItemsObs=this.iseeqHttp.getMenuItems()
        this.menuItemsObs.subscribe(data=>{this.menuItemsArr=data['menuitems']})
    }

    getMenuItem():Observable<string[]>{
       return  this.menuItemsObs;
    }



}
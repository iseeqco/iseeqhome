import { Injectable } from '@angular/core';

import {HttpClient} from '@angular/common/http';


import {NavigationData } from '../datatypes/iseeq-navigation.data';

@Injectable()
export class IseeqHttpService{

    constructor(private http:HttpClient){

    }

getMenuItems(){
    let url:string="./assets/config/";
    let file:string="menuconfig.json";
    let response=this.http.get<NavigationData>(url+file);
    return response;
}

}
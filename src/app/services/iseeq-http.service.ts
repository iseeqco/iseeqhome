import { Injectable } from '@angular/core';

import {HttpClient} from '@angular/common/http';


import {NavigationData } from '../datatypes/iseeq-navigation.data';
import { IseeqFooterConfigData } from "src/app/datatypes/iseeq-footer-config.data";

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

getFooterContent(){
    let url:string="./assets/content/";
    let file:string="footer_content.json";
    let response=this.http.get<IseeqFooterConfigData>(url+file);
    return response;
}

getPrivacyPolicy(language:string){
    let url:string="./assets/content/privacypolicy/";
    let file:string
    if(language=='Magyar'){file='hu.html'} else {file='eng.html'}
    let response=this.http.get(url+file,{ responseType: 'text' });
    return response;
}

}
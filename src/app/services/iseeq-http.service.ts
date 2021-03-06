import { Injectable } from '@angular/core';

import {HttpClient} from '@angular/common/http';


import {NavigationData } from '../datatypes/iseeq-navigation.data';
import { IseeqFooterConfigData } from "src/app/datatypes/iseeq-footer-config.data";
import { TeamMembers } from '../datatypes/iseeq-team-member';
import { AboutDatas } from '../datatypes/iseeq-about.data';
import { ClientDatas } from '../datatypes/iseeq-clients.data';
import { ContactDatas } from '../datatypes/iseeq-contact.data';

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

getTeamMemberes(){
    let url:string="./assets/content/";
    let file:string="team_content.json";
    let response=this.http.get<TeamMembers>(url+file);
    return response;
}
getAboutContent(){
    let url:string="./assets/content/";
    let file:string="about_content.json";
    let response=this.http.get<AboutDatas>(url+file);
    return response;
}
getClientContent(){
    let url:string="./assets/content/";
    let file:string="clients_content.json";
    let response=this.http.get<ClientDatas>(url+file);
    return response;
}
getContactContent(){
    let url:string="./assets/content/";
    let file:string="contact_content.json";
    let response=this.http.get<ContactDatas>(url+file);
    return response; 
}
}
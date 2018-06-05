import { Injectable } from '@angular/core';

import {HttpClient} from '@angular/common/http';

@Injectable()
export class IseeqHttpService{

    constructor(private http:HttpClient){

    }

getMenuItems(){
    let url:string="./assets/config/";
    let file:string="menuconfig.json";
    let response=this.http.get<string[]>(url+file);
    return response;
}

}
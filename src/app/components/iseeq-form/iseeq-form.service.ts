import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '../../../../node_modules/@angular/common/http';
import { IseeqFormData } from './iseeq-formdata';


@Injectable()
export class IseeqFormService {

  constructor(private _http :HttpClient) { 

  }

  public sendData(data : IseeqFormData){
     let fd = new FormData();
     let url="https://142.93.111.159/blogtest/wp-json/contact-form-7/v1/contact-forms/162/feedback"
     let headers = new HttpHeaders();
         headers.append('Content-Type', 'application/form-data');
     let keys = Object.keys(data);
         keys.forEach((key)=>{
            if (data[key]){
              fd.append('your-'+key,data[key])
            }
         })
      return this._http.post(url,fd,{headers:headers});
  }
}

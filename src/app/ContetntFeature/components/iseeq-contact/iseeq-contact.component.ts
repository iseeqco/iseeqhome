import { Component, OnInit, HostListener, ElementRef } from '@angular/core';


import { IseeqHttpService } from '../../../services/iseeq-http.service';
import { ContactDatas, ProjectorData, GaleryPictures } from '../../../datatypes/iseeq-contact.data';

export const formMirrors = 
    {
      lookingforjobb:
        {name:true,email:true,phone:true,linkedin:true,file:true,carrier:true},
      workingwithus:
        {company:true,name:true,email:true,phone:true,carrier:true,message:true},
      joinus:
        {company:true,phone:true,linkedin:true,file:true,message:true,email:true},
      default:
        {company:false,phone:false,linkedin:false,file:false,message:false,email:false}
    }


@Component({
  selector: 'app-iseeq-contact',
  templateUrl: './iseeq-contact.component.html',
  styleUrls: ['./iseeq-contact.component.css']
})
export class IseeqContactComponent implements OnInit {
  
      projectorDatas :ProjectorData[];
      galeryPictures :GaleryPictures[];
      fotos          :string[] = ['/assets/pictures/contact/MG_0572.jpg','/assets/pictures/contact/MG_0570.jpg','/assets/pictures/contact/MG_0567.jpg'];
      projektorWidth :string;
      formMirror     :any;
      textArea       :string;
      selectLabel    :string;

  constructor(
    private _http :IseeqHttpService
  ) 
{ 
    this.projektorWidth=450+"px";
}

  ngOnInit() {
    this._http.getContactContent().subscribe(data=>{
                      this.projectorDatas=data.projectorDatas;
                      this.galeryPictures=data.galeryPictures;  
                    })
    if(window.innerWidth < 500){this.projektorWidth=300+"px"}

     this.formMirror=formMirrors.default;
     this.textArea=" ";
     this.selectLabel=" ";
  }

  setFormMirror(type :string){
    
    switch (type){
      case 'looking':{
        this.formMirror=formMirrors.lookingforjobb;
        this.selectLabel="WHICH CAREER FIELD ARE YOU INTRESTED IN?"
        break
      }
      case 'working':{
        this.formMirror=formMirrors.workingwithus;
        this.textArea="SHORT MESSAGE ON THE PROJECT"
        this.selectLabel="ON WHICH FILED ARE YOU LOOKING FOR CANDIDATES?"
        break
      }
      case 'join' : {
        this.formMirror=formMirrors.joinus;
        this.textArea="WHY DO YOU WANNA WORK @ ISEEQ ?"
        break
      }
      default:{break}
    }

  }


}

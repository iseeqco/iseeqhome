import { Component, OnInit, Input } from '@angular/core';
import { IseeqFormService } from './iseeq-form.service';


import {IseeqFormData} from './iseeq-formdata';
import {Validators, FormGroup, FormControl } from '../../../../node_modules/@angular/forms';



@Component({
  selector: 'app-iseeq-form',
  templateUrl: './iseeq-form.component.html',
  styleUrls: ['./iseeq-form.component.css']
})

export class IseeqFormComponent implements OnInit {
  
  @Input('formMirror')   formMirror : any;
  @Input('textArea')     textArea : string;
  @Input('selectLabel')  selectLabel :string;
                       iseeqFormData : IseeqFormData;
                       iseeqFormGroup: FormGroup;
                       fileToUpload: File;
                       isDiasbled : boolean;
                       fileInputText : string;
                      
  constructor(private formService : IseeqFormService) {
    this.fileToUpload = null;
    this.isDiasbled = true;
    this.iseeqFormData= new IseeqFormData;
    this.fileInputText="+ Add your cv"
  }

  ngOnInit() {
    this.buildForm(this.formMirror)
  }

  ngOnChanges(){
    this.buildForm(this.formMirror);
  }
  
  private buildForm(obj:Object) : void {
    this.iseeqFormGroup = new FormGroup({});
    this.iseeqFormGroup.statusChanges.subscribe((status)=>{
      if(status=="VALID"){this.isDiasbled=false}else{this.isDiasbled=true}
    })
    let keys : string []= Object.keys(obj);
    keys.forEach((key)=>{
      let controll = new FormControl('',Validators.required);
      this.iseeqFormGroup.addControl(key,controll);
    }) 
  }
            // Amint befejezodik a file feltoltodes meghivodik ez a metodus
            //fuggetlenül a form data kuldestol
  prepeareFile(event){
    let files : FileList = event.target.files;
    this.fileToUpload=files.item(0);
    this.fileInputText=this.fileToUpload.name;
  }

  sendForm(){ 
    this.prepearData(this.iseeqFormGroup,this.fileToUpload)
    this.formService.sendData(this.iseeqFormData).subscribe((data)=>{alert('Thank you! We have received your message.')},
                                                            (err)=>{alert('Your message fails to send. Please try again later.')}  
                                                           );
    this.iseeqFormGroup.reset();
    this.fileInputText="+ Add your cv"
  }

  private prepearData(formGroup:FormGroup,file:File){
    let iseeqFormDataKeys = Object.keys(this.iseeqFormData);
    iseeqFormDataKeys.forEach((key)=>{
      let formValue  =formGroup.get(key);
      if(formValue){this.iseeqFormData[key]=formValue.value;} 
    })
    if(file){this.iseeqFormData.file=file;}
  }
}



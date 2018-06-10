import { Injectable, ViewRef, Type } from '@angular/core';
import { Observable, of } from 'rxjs';

import { IseeqHttpService } from './iseeq-http.service';
import { NavigationData} from '../datatypes/iseeq-navigation.data';
import { IseeqServicesComponent } from '../ContetntFeature/components/iseeq-services/iseeq-services.component';
import { IseeqTeamComponent } from '../ContetntFeature/components/iseeq-team/iseeq-team.component';
import { IseeqAboutComponent } from '../ContetntFeature/components/iseeq-about/iseeq-about.component';
import { DINAMIC_COMPONENT_LIST } from '../../assets/config/dinamic-component-list';

export class test {
   constructor(
    public testname:Type<any>){}
}

@Injectable()
export class IseeqNavigationService{
        
        menuItemsObs:Observable<NavigationData>;
        menuItemsArr:NavigationData[]

        test:any=DINAMIC_COMPONENT_LIST

    constructor(private iseeqHttp : IseeqHttpService){
        this.menuItemsObs=this.iseeqHttp.getMenuItems()
        this.menuItemsObs.subscribe(data=>{
                                            this.menuItemsArr=data['menuitems'];
                                                
                                        })
        console.log(test)
        console.log(DINAMIC_COMPONENT_LIST.get("IseeqServicesComponent"))
    }

    public getMenuItem():Observable<NavigationData>{
       return  this.menuItemsObs;
    }

    
    public setOpenedContentBasedOnRouterParam(param:string) {
        let t :Type<any>=DINAMIC_COMPONENT_LIST.get("IseeqServicesComponent")
        let contentComponents2=[t]
        let contentComponents:any[]=[]
        /*for(let menuItem of this.menuItemsArr){
            contentComponents.push(menuItem.componentName)
            if(menuItem.menuItem.toLowerCase() == param){break}
        
        
            console.log(contentComponents)
        }*/
        
        return   contentComponents2
    } 

}
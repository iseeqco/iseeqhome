import { Injectable, ViewRef, Type } from '@angular/core';
import { Observable, of,Subject } from 'rxjs';

import { IseeqHttpService } from './iseeq-http.service';

<<<<<<< HEAD
=======
import { NavigationData} from '../datatypes/iseeq-navigation.data';

>>>>>>> 065c804dbca32c2b7f3356bb9787948daf3ed706
@Injectable()
export class IseeqNavigationService{

        menuItemsObs:Observable<NavigationData>;
        menuItemsArr:NavigationData[];

        nextSiteKeyByScrollSubj= new Subject<string>()
        nextSiteKeyByScrollObs=this.nextSiteKeyByScrollSubj.asObservable();

    constructor(private iseeqHttp : IseeqHttpService){
        this.menuItemsObs=this.iseeqHttp.getMenuItems()
        this.menuItemsObs.subscribe(data=>{
                                            this.menuItemsArr=data['menuitems'];
                                        })
        this.addNextSiteKeyByScroll();                                
        }

    public getMenuItem():Observable<NavigationData>{
       return  this.menuItemsObs;
    }

    public setOpenedContentBasedOnRouterParam(param:string) {
        let contentComponents:string[]=[]
        for(let menuitem of this.menuItemsArr){
            contentComponents.push(menuitem.componentName)
            if(menuitem.menuItem.toLowerCase() == param){break}
        }
        return   contentComponents
    } 

    public addNextSiteKeyByScroll(){
        console.log("add next site key lefut")
       // this.nextSiteKeyByScrollSubj.next('IseeqNewsComponent')
        this.nextSiteKeyByScrollSubj.subscribe(data=>console.log("data2"+data))
        this.nextSiteKeyByScrollObs.subscribe(data=>console.log("data3"+data))
    }
}
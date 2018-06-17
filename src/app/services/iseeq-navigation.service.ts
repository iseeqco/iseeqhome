import { Injectable} from '@angular/core';
import { Observable, BehaviorSubject} from 'rxjs';

import { IseeqHttpService } from './iseeq-http.service';

import { NavigationData} from '../datatypes/iseeq-navigation.data'


@Injectable()
export class IseeqNavigationService{
        
        menuItemsObs:Observable<NavigationData>;
        menuItemsArr:NavigationData[];
        componentRemote:boolean[];
        isFirstScrollSinceRouting:boolean;
        isContentVisible:boolean;
        loadedContentCounter:number;
        $isContentLoaded :BehaviorSubject<boolean>;
        isScrollNavigation:boolean;                 

    constructor(private iseeqHttp : IseeqHttpService){
        this.menuItemsObs=this.iseeqHttp.getMenuItems();
        this.menuItemsObs.subscribe(data=>{
                                            this.menuItemsArr=data['menuitems'];
                                            this.createComponentRemote();
                                        });
        this.componentRemote=[];
        this.isFirstScrollSinceRouting=true;
        this.isContentVisible=true;
        this.loadedContentCounter=0;
        this.$isContentLoaded=new BehaviorSubject(false)
        
    }

    public createComponentRemote(){
        this.menuItemsArr.forEach(item=>{
        this.componentRemote.push(false)
            })
    }
    
    public getMenuItem():Observable<NavigationData>{
       return  this.menuItemsObs;
    }

    public openOneSite(siteName:string){
        for(let i=0;i<this.componentRemote.length;i++){this.componentRemote[i]=false}
        for(let i=0;i<this.menuItemsArr.length;i++){
            if (this.menuItemsArr[i].menuItem.toLowerCase()==siteName){
                this.componentRemote[i]=true;
                break
            }
        }
    } 

    public openAllSite() :void {
        this.loadedContentCounter=0;
        for(let i=0;i<this.componentRemote.length;i++){this.componentRemote[i]=true}
    }

    public contentLoadObserver(){
        this.loadedContentCounter++;
        if(this.loadedContentCounter == (this.menuItemsArr.length-1)){
            this.loadedContentCounter=0;
            this.$isContentLoaded.next(true);
        }
    }
    
}
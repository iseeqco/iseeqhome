import { Injectable} from '@angular/core';
import { Observable, BehaviorSubject} from 'rxjs';

import { IseeqHttpService } from './iseeq-http.service';

import { NavigationData} from '../datatypes/iseeq-navigation.data'
import { SitePositionData } from '../datatypes/isseq-siteposition.data';


@Injectable()
export class IseeqNavigationService{
        
        menuItemsObs:Observable<NavigationData>;
        menuItemsArr:NavigationData[];
        componentRemote:boolean[];
        loadedContentCounter:number;
        $isContentLoaded :BehaviorSubject<boolean>;
        $animationTirgger:BehaviorSubject<boolean>
        sitePositionDatas:SitePositionData[];        
        areSitesOpen:boolean;
        stopAnimation:boolean;

    constructor(private iseeqHttp : IseeqHttpService){
        this.menuItemsObs=this.iseeqHttp.getMenuItems();
        this.menuItemsObs.subscribe(data=>{
                                            this.menuItemsArr=data['menuitems'];
                                            this.createComponentRemote();
                                        });
        this.componentRemote=[];
        this.loadedContentCounter=0;
        this.$isContentLoaded= new BehaviorSubject(false);
        this.$animationTirgger= new BehaviorSubject(false);                                    
        this.sitePositionDatas=[];
        this.areSitesOpen=false;
        this.stopAnimation=false;
        
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
       this.setAnimationTrigger(false)  
       for(let i=0;i<this.menuItemsArr.length;i++){
            if (this.menuItemsArr[i].menuItem.toLowerCase()==siteName){
                this.componentRemote[i]=true;
                break
            }
        }
    } 

    public openAllSite() :void {
        this.setAnimationTrigger(true);
        this.sitePositionDatas=[];                        
        this.loadedContentCounter=0;
        for(let i=0;i<this.componentRemote.length;i++){ 
            this.componentRemote[i]=false
        }
        this.componentRemote[0]=false
        setTimeout(()=>{ for(let i=0;i<this.componentRemote.length;i++){this.componentRemote[i]=true};   },200)
    }

    public contentLoadObserver(position:number,siteName:string){
        this.loadedContentCounter++;
        let sitePosData:SitePositionData = {siteName:siteName,componentPosition:position}
        this.sitePositionDatas.push(sitePosData)
        if(this.loadedContentCounter == (this.menuItemsArr.length)){
            this.loadedContentCounter=1;
            this.$isContentLoaded.next(true);
            this.areSitesOpen=true;
        }
    }
 
    public getComponentPosition(component:string) : number{
        for(let siteData of this.sitePositionDatas){
            if(siteData.siteName==component){
                return siteData.componentPosition;
            }    
        }
    }
    
    setAnimationTrigger(value:boolean): void {
        this.$animationTirgger.next(value);
    }
}

import { Injectable } from "../../../node_modules/@angular/core";
import { HttpClient } from "../../../node_modules/@angular/common/http";




@Injectable()
export class IseeqWpContentService{

   constructor(private _http:HttpClient){}

    public getPostDatas(){
        let wpUrl :string ="https://142.93.111.159/blogtest/wp-json/wp/v2/posts/?_embed"
    return this._http.get(wpUrl)
            
        
    
    }
}

/*
 private setPostDatas() : void {
        let wpUrl :string ="http://142.93.111.159/blogtest/wp-json/wp/v2/posts/?_embed"
        this._http.get(wpUrl).subscribe((response)=>{
            let wpPostDatas : any [];
            if (response instanceof Array){
                wpPostDatas=response
            }else{
                wpPostDatas[0]=response
            };
            wpPostDatas.forEach((pData)=>{this.prepearPostDatas(pData)})
        })
    }

    private prepearPostDatas(pData:any) : void{
        let postData : PostData = new PostData();
        postData.id = pData.id;
        let date :String = pData.modified;
        postData.date = date.slice(0,10);
        postData.siteLink = pData.link;
        postData.title = pData.title.rendered;
        postData.pictureLink =pData._embedded['wp:featuredmedia'][0].source_url;
        this.postDatas.push(postData);
    }


*/ 
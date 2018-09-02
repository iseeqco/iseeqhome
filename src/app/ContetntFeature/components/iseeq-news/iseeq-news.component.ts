import { Component, OnInit} from '@angular/core';
import { IseeqWpContentService} from '../../../services/iseeq-wp-content-service';

export class PostData {
  id:string;
  date:string;
  siteLink:string;
  title:string;
  pictureLink:string;

  constructor(){
      this.id="";
      this.date="";
      this.siteLink="";
      this.title="";
      this.pictureLink="";
  }

}

@Component({
  selector: 'app-iseeq-news',
  templateUrl: './iseeq-news.component.html',
  styleUrls: ['./iseeq-news.component.css']
})
export class IseeqNewsComponent implements OnInit {

  private allPostDatas        : PostData [];
  public  displayedPostDatas  : PostData [];
  private displayedPostCount  : number;
  public  moreNews            : boolean;
  
  constructor(
    private wpService :IseeqWpContentService
  ) 
  {
    this.allPostDatas = new Array<PostData>();
    this.displayedPostCount=this.initDisplayedPostCount();
  }

  onMouseLeave(event:any){
    if(event.relatedTarget){
      let tag = event.relatedTarget.tagName
      if( tag != "HTML" ){
        this.displayedPostCount=this.initDisplayedPostCount(); 
        this.displayedPostDatas=this.initDisplayedPostDatas(this.allPostDatas.length,this.displayedPostCount);
        this.setMoreNews();
      } 
    } 
  }

  ngOnInit() {
    this.wpService.getPostDatas().subscribe((data)=>{
        let wpPostDatas : any [];
        if (data instanceof Array){
            wpPostDatas=data
        }else{
            wpPostDatas[0]=data
        };
        wpPostDatas.forEach((pData)=>{this.prepearPostDatas(pData);})  
        this.displayedPostDatas = 
          this.initDisplayedPostDatas(this.allPostDatas.length,this.displayedPostCount);
        this.setMoreNews();
    })
  }

  private setMoreNews() : void {
    if(this.allPostDatas.length <= this.displayedPostCount){
        this.moreNews=false;
    }else{
      this.moreNews=true;
    }
  }

  private prepearPostDatas(pData:any) : void{
    let postData : PostData = new PostData();
    postData.id = pData.id;
    let date :String = pData.modified;
    postData.date = date.slice(0,10);
    postData.siteLink = pData.link;
    postData.title = pData.title.rendered;
    postData.pictureLink =pData._embedded['wp:featuredmedia'][0].source_url;
    this.allPostDatas.push(postData);
}

  private initDisplayedPostDatas(allPostDatasLenght:number,displayedPostNumber:number) : PostData[] {
    let postDatas :PostData[] = new Array<PostData>();
    if (allPostDatasLenght < displayedPostNumber){displayedPostNumber=allPostDatasLenght}
    for(let i=0;i<displayedPostNumber;i++){
      postDatas.push(this.allPostDatas[i])
    }
    this.setDisplayedPostCount(postDatas.length);
    return postDatas
  }

  private initDisplayedPostCount(): number {
    let windowWidth = window.innerWidth;
    let pice : number;
    if (windowWidth >= 1200){pice=8}
    if (windowWidth <  1200){pice=4}
    if (windowWidth <= 600){pice=2}
  return pice
  }

  setDisplayedPostCount(x:number){
    this.displayedPostCount=x;
  }

  public showMoreNews() :void{
    let pice : number = this.initDisplayedPostCount();
    let origCount : number = this.displayedPostCount;
    for(let i=1;i<pice;i++){
      if(this.allPostDatas.length > this.displayedPostCount){
        this.displayedPostDatas.push(this.allPostDatas[origCount+i-1])
        this.displayedPostCount++;
      }
    }
    this.setMoreNews();
  }

}

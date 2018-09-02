import { Component, OnInit } from '@angular/core';


export class oneSite {
  name : string;
  route: string;

  constructor(name:string,route:string){
    this.name=name;
    this.route=route;
  }
}

@Component({
  selector: 'app-iseeq-sitemap',
  templateUrl: './iseeq-sitemap.component.html',
  styleUrls: ['./iseeq-sitemap.component.css']
})
export class IseeqSitemapComponent implements OnInit {

      siteBaseHref : string;
      sites :        oneSite [];

  constructor() {
     this.sites=[
                 new oneSite("Home","/home"), 
                 new oneSite("Services","/home/services"),
                 new oneSite("Team","/home/team"),
                 new oneSite("About","/home/about"),
                 new oneSite("Clients","/home/clients"),
                 new oneSite("News","/home/news"),
                 new oneSite("Contact","/home/contact"),
                 new oneSite("Game","/game"),
                 new oneSite("SiteMap","/SiteMap"),
                ]
   }

  ngOnInit() {
      this.siteBaseHref=window.location.origin;

  }

}

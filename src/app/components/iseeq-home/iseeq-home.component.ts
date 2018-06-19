import { Component, OnInit, HostListener, ElementRef } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-iseeq-home',
  templateUrl: './iseeq-home.component.html',
  styleUrls: ['./iseeq-home.component.css']
})
export class IseeqHomeComponent implements OnInit {
        
 @HostListener('window:scroll',['$event'])
    onscroll(event:any){
     if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
         this.router.navigate(['/home/services'])
      }
   }  

  constructor(
    private router:Router,
    private element:ElementRef
  ) {
   
   }

  ngOnInit() {
    
  }

}

import { Component, ViewChild, ElementRef} from '@angular/core';
import { IseeqHttpService } from '../../../services/iseeq-http.service';
import { TeamMembers,TeamMember } from '../../../datatypes/iseeq-team-member';
import { IseeqNavigationService } from '../../../services/iseeq-navigation.service';

@Component({
  selector: 'app-iseeq-team',
  templateUrl: './iseeq-team.component.html',
  styleUrls: ['./iseeq-team.component.css']
})

export class IseeqTeamComponent {
  @ViewChild('siteBase') siteBase : ElementRef;
    
    teamMembers:TeamMember[];
    displayedTeamMembers:TeamMember[];
    displayedMembersCount:number;
    previousDisplayedMembersCount:number;
    maxDisplayedTeamMember:number;
    existMoreMember:boolean;
 
  
  constructor(
    private http : IseeqHttpService
    )
  {
    this.displayedMembersCount=this.setDisplayedMembersCount();
    this.previousDisplayedMembersCount=this.displayedMembersCount;
  }

  ngOnInit(){
    this.http.getTeamMemberes().subscribe((data:TeamMembers)=>{
            this.teamMembers=data.teamMembers;
            this.displayedTeamMembers=this.setDisplayedTeamMembers(this.teamMembers.length,this.displayedMembersCount)
            this.maxDisplayedTeamMember=this.teamMembers.length;
            if(this.maxDisplayedTeamMember > this.displayedTeamMembers.length){this.existMoreMember=true}
          })
  }

  onMouseLeave(event){
    if(event.relatedTarget){
      let tag = event.relatedTarget.tagName
      if( tag != "HTML" ){ 
          this.displayedTeamMembers=this.setDisplayedTeamMembers(this.teamMembers.length,this.displayedMembersCount);
          this.previousDisplayedMembersCount=this.displayedMembersCount;
          if(this.maxDisplayedTeamMember > this.displayedTeamMembers.length){this.existMoreMember=true}
      }
    }
  }

  setDisplayedMembersCount(): number {
    let windowWidth = window.innerWidth;
    let pice : number;
    if (windowWidth >= 1200){pice=7}
    if (windowWidth <  1200){pice=4}
    if (windowWidth <= 600){pice=1}
    return pice
  }

  setDisplayedTeamMembers(teamMembersLength:number,count:number) : TeamMember[]{
    let displayedTeamMembers: TeamMember[];
    displayedTeamMembers=this.teamMembers.slice(0,count);
    return displayedTeamMembers;
  }

  showMore(){
    this.previousDisplayedMembersCount=this.previousDisplayedMembersCount+this.displayedMembersCount;
    if(this.previousDisplayedMembersCount > this.maxDisplayedTeamMember){ this.previousDisplayedMembersCount=this.maxDisplayedTeamMember};
    this.displayedTeamMembers=this.setDisplayedTeamMembers(0,this.previousDisplayedMembersCount);
    if(this.maxDisplayedTeamMember == this.displayedTeamMembers.length){
      this.existMoreMember=false;
    }
  }

}

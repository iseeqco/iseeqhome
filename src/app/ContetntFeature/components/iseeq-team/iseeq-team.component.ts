import { Component, ViewChild, ElementRef} from '@angular/core';
import { IseeqHttpService } from '../../../services/iseeq-http.service';
import { TeamMembers,TeamMember } from '../../../datatypes/iseeq-team-member';

@Component({
  selector: 'app-iseeq-team',
  templateUrl: './iseeq-team.component.html',
  styleUrls: ['./iseeq-team.component.css']
})

export class IseeqTeamComponent {
  @ViewChild('siteBase') siteBase : ElementRef;
    
    teamMembers:TeamMember[];
  
  constructor(
    private http : IseeqHttpService
  )
  {}

  ngOnInit(){
    this.http.getTeamMemberes().subscribe((data:TeamMembers)=>{this.teamMembers=data.teamMembers})
  }

  onmouseenter(){
    this.siteBase.nativeElement.style.height="initial"
  }

  onMouseLeave(){
    this.siteBase.nativeElement.style.height="1000px"
  }

}

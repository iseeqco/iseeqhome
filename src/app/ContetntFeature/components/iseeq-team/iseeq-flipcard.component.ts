import {Input,Component} from '@angular/core';
import {TeamMember } from '../../../datatypes/iseeq-team-member';


@Component({
    selector:'flip-card-component',
    templateUrl:'iseeq-flip-card.component.html',
    styleUrls:['iseeq-flip-card.component.css','iseeq-team.component.css']
})
export class IseeqFlipCardComponent {
    @Input() teamMember : TeamMember
             animTrigger:string;
             frontContentVisibility:string;
             backContentVisibility:string;
   
    constructor()
    {
        this.animTrigger='card'
        this.frontContentVisibility='visible';
        this.backContentVisibility='hidden'
    }
    
    ngOnInit(){
   
    }

    onmouseenter(){
        this.animTrigger='card_on'
        setTimeout(()=>{this.frontContentVisibility='hidden'},250);
        setTimeout(()=>{this.backContentVisibility='visible'},250);
    }

    onMouseLeave(){
        this.animTrigger='card_off'
        setTimeout(()=>{this.frontContentVisibility='visible'},250);
        setTimeout(()=>{this.backContentVisibility='hidden'},250);
    }
}
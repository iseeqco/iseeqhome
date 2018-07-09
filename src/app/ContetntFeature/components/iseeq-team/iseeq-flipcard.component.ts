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
             svgString:string='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" height="25" width="25" fill="#45d48b"><path d="M32.79 8.334h5.3V0h-7.945s-4.994-.123-8.178 4.014c0 0-2.17 2.046-2.204 8.032v6.25H11.91v8.847h7.853V50h9.055V27.145h7.79l1.088-8.848h-8.878v-6.25h-.002c.022-.698.335-3.776 3.973-3.713z"/></svg>'  
   

    constructor()
    {
        this.animTrigger='card'
        this.frontContentVisibility='visible';
        this.backContentVisibility='hidden'
    }
    
    ngAfterViewInit(){
    
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
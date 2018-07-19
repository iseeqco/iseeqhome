import { SocialMediaLink } from "./iseeq-footer-config.data";


export class TeamMember {
    profilePicture:string;
    pictureAlt:string;
    name:string;
    position:string;
    contacts:SocialMediaLink[];


}

export class TeamMembers{
    teamMembers : TeamMember[];
}

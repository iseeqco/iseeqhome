import { SocialMediaLink } from "./iseeq-footer-config.data";


export class TeamMember {
    profilePicture:string;
    name:string;
    position:string;
    contacts:SocialMediaLink[];


}

export class TeamMembers{
    teamMembers : TeamMember[];
}

/*
export class SocialMediaLink{
    link:string;
    ikon:string;
    alt: string;
}
*/ 
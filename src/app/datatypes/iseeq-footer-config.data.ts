export class SocialMediaLink{
    link:string;
    ikon:string;
    alt: string;
}

export class LeftLink{
    link : String;
    label: String;
}

export class IseeqFooterConfigData {
    adress: String;
    email:  String;
    leftLinks:  LeftLink[];
    rightLinks: SocialMediaLink[];            
}
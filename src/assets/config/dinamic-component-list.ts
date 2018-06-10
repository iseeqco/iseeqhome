import { IseeqServicesComponent } from "../../app/ContetntFeature/components/iseeq-services/iseeq-services.component";
import { IseeqTeamComponent } from "../../app/ContetntFeature/components/iseeq-team/iseeq-team.component";
import { IseeqAboutComponent } from "../../app/ContetntFeature/components/iseeq-about/iseeq-about.component";
import { IseeqClientsComponent } from "../../app/ContetntFeature/components/iseeq-clients/iseeq-clients.component";
import { IseeqNewsComponent } from "../../app/ContetntFeature/components/iseeq-news/iseeq-news.component";
import { IseeqContactComponent } from "../../app/ContetntFeature/components/iseeq-contact/iseeq-contact.component";


export const DINAMIC_COMPONENT_LIST =new Map().set('IseeqServicesComponent',IseeqServicesComponent)
                                                .set('IseeqTeamComponent',IseeqTeamComponent)
                                                .set('IseeqAboutComponent',IseeqAboutComponent)
                                                .set('IseeqClientsComponent',IseeqClientsComponent)
                                                .set('IseeqNewsComponent',IseeqNewsComponent)
                                                .set('IseeqContactComponent',IseeqContactComponent)
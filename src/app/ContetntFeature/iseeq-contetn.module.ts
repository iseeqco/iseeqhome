import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { IseeqContentMaterialModule } from './moduls/iseeq-content-material/iseeq-content-material.module';

import { IseeqBaseContentComponent } from './components/iseeq-base-content/iseeq-base-content.component';

import { IseeqServicesComponent } from './components/iseeq-services/iseeq-services.component';
import { IseeqTeamComponent } from './components/iseeq-team/iseeq-team.component';
import { IseeqAboutComponent } from './components/iseeq-about/iseeq-about.component';
import { IseeqClientsComponent } from './components/iseeq-clients/iseeq-clients.component';
import { IseeqNewsComponent } from './components/iseeq-news/iseeq-news.component';
import { IseeqContactComponent } from './components/iseeq-contact/iseeq-contact.component';

import { IseeqFlipCardComponent } from './components/iseeq-team/iseeq-flipcard.component';

import { IseeqContentSiteDirective } from './direktives/iseeq-content-site.direktive';







export const contentRoutes : Routes=[
  {path: '', component:IseeqBaseContentComponent}
]
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(contentRoutes),
    IseeqContentMaterialModule
  ],
  declarations: [
    IseeqServicesComponent,
    IseeqBaseContentComponent,
    IseeqTeamComponent,
    IseeqAboutComponent,
    IseeqClientsComponent,
    IseeqNewsComponent,
    IseeqContactComponent,
    IseeqContentSiteDirective,
    IseeqFlipCardComponent
  ],
  entryComponents:[
    
  ],
  providers: [
   
  ],
  })
export class IseeqContetnModule { }

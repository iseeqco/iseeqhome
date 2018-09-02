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
import { IseeqButtonComponent } from '../components/iseeq-button/iseeq-button.component';
import { IseeqProjektorComponent } from '../components/iseeq-projektor/iseeq-projektor.component';

import { IseeqContentSiteDirective } from './direktives/iseeq-content-site.direktive';
import { IseeqFlagComponent } from './components/iseeq-about/iseeq-flag/iseeq-flag.component';
import { IseeqProjectableComponent } from '../components/iseeq-projektor/iseeq-projectable.component';
import { IseeqFotoviewerComponent } from '../components/iseeq-fotoviewer/iseeq-fotoviewer.component';
import { IseeqFormComponent } from 'src/app/components/iseeq-form/iseeq-form.component';

import { IseeqFormService } from '../components/iseeq-form/iseeq-form.service';
import { ReactiveFormsModule, FormsModule } from '../../../node_modules/@angular/forms';


export const contentRoutes : Routes=[
  {path: '', component:IseeqBaseContentComponent}
]
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(contentRoutes),
    IseeqContentMaterialModule,
    FormsModule,
    ReactiveFormsModule
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
    IseeqFlipCardComponent,
    IseeqButtonComponent,
    IseeqProjektorComponent,
    IseeqProjectableComponent,
    IseeqFlagComponent,
    IseeqFotoviewerComponent,
    IseeqFormComponent
  ],
  exports:[
    IseeqButtonComponent
  ]
  ,
  entryComponents:[
    
  ],
  providers: [
    IseeqFormService
  ],
  })
export class IseeqContetnModule { }

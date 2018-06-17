import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { IseeqMaterialModule } from './moduls/iseeq-material.module';

import { IseeqHttpService } from './services/iseeq-http.service';
import { IseeqNavigationService } from './services/iseeq-navigation.service';

import { AppComponent } from './app.component';
import { IseeqMenuComponent } from './components/iseeq-menu/iseeq-menu.component';
import { IseeqHomeComponent } from './components/iseeq-home/iseeq-home.component';
import { IseeqFooterComponent } from './components/iseeq-footer/iseeq-footer.component';
import { IseeqSitemapComponent } from './components/iseeq-sitemap/iseeq-sitemap.component';
import { IseeqPrivacypolicyComponent } from './components/iseeq-privacypolicy/iseeq-privacypolicy.component';
import { IseeqPagenotfoundComponent } from './components/iseeq-pagenotfound/iseeq-pagenotfound.component';


export const routes: Routes =[
  {path: 'home',component:IseeqHomeComponent},
  {path: 'home/:site', loadChildren: './ContetntFeature/iseeq-contetn.module#IseeqContetnModule'},
  {path: '', redirectTo:'home',pathMatch:'full'},
  {path: '**', component:IseeqHomeComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    IseeqMenuComponent,
    IseeqHomeComponent,
    IseeqFooterComponent,
    IseeqSitemapComponent,
    IseeqPrivacypolicyComponent,
    IseeqPagenotfoundComponent,
   
  ],

  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    IseeqMaterialModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ], 

  providers: [
    IseeqHttpService,
    IseeqNavigationService
  ],

  bootstrap: [AppComponent]
})
export class AppModule { }

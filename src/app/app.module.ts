import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { IseeqMenuComponent } from './components/iseeq-menu/iseeq-menu.component';
import { IseeqHttpService } from './services/iseeq-http.service';

@NgModule({
  declarations: [
    AppComponent,
    IseeqMenuComponent
  ],

  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule
  ],

  providers: [
    IseeqHttpService
  ],

  bootstrap: [AppComponent]
})
export class AppModule { }

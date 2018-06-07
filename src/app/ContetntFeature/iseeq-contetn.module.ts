import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { IseeqServicesComponent } from './components/iseeq-services/iseeq-services.component';

export const contentRoutes : Routes=[
  {path: '', component:IseeqServicesComponent}
]
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(contentRoutes)
  ],
  declarations: [
    IseeqServicesComponent,
  ]
})
export class IseeqContetnModule { }

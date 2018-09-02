import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes } from "@angular/router";
import { RouterModule } from "@angular/router";

import { GameBaseComponent } from './game-base/game-base.component';


export const gameRoutes : Routes=[
  {path: '', component:GameBaseComponent}
]
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(gameRoutes)
  ],
  declarations: [GameBaseComponent]
 
})
export class GameModule { }

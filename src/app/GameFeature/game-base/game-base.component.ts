import { Component} from '@angular/core';

import * as Phaser from 'phaser-ce';

import AssetsService from '../gameservices/game.service';
import PlayState from '../states/play';
import EndState from '../states/end';

@Component({
  selector: 'app-game-base',
  templateUrl: './game-base.component.html',
  styleUrls: ['./game-base.component.css']
})
export class GameBaseComponent {

  game:Phaser.Game;
  asettsService:AssetsService;
  
  constructor() {
    this.game= this.game = new Phaser.Game(
      window.innerWidth,
      window.innerHeight,
      Phaser.AUTO,
      'iseq-game',
      {preload: this.preload,
       create: this.create
       });
   
    this.game.state.add('PlayState',PlayState,false)
    this.game.state.add('EndState',EndState,false)
  }

  preload(){
    this.asettsService= new AssetsService();
    this.asettsService.prepearBackground(this.game);
    this.asettsService.prepearAnimations(this.game);
    this.asettsService.prepearText(this.game);
  }
  create(){
    this.asettsService.loadBackground(this.game);
    this.asettsService.loadAnimations(this.game);
    this.asettsService.loadText(this.game);
    this.asettsService.setWordPhisic(this.game);
    this.game.state.start("PlayState",false,false);
  }
  
  ngOnInit(){
    document.getElementById("b1").style.fontFamily="pressstart2p"
  }

  ngOnDestroy(){
   document.getElementById("b1").style.fontFamily="opensans"
  }

 
 
 
}



import * as Phaser from 'phaser-ce';
import PlayerService from '../gameservices/player.service';
import Player from '../objects/player';

export default class PlayState extends Phaser.State {
    
    height:number;
    width:number;
    playerService:PlayerService;
    flore:Phaser.Sprite;
    box:Phaser.Sprite;
    jumpTimer:number;
    scoreboard:Phaser.Image;
    
    score:Phaser.BitmapText;
    controller:Phaser.Text;
    bulb:Phaser.Text;
    pig:Phaser.Text;
    
    player:Player;
    players: Player [];
    round: number;
    moveSpeed:number;
    canRunKey:Phaser.Key;
    canRun:boolean;

    rame:Phaser.Image;
    welcomeText:Phaser.Text;
    jobb:Phaser.Text;
    playerLogo:Phaser.Image;
    logoSocre:Phaser.Text;

    constructor(){
        super()
        this.height=window.innerHeight;
        this.width=window.innerWidth;
        this.jumpTimer=0;
        this.playerService=new PlayerService();
        this.players= new Array <Player> (2);
        this.round=0;
        this.moveSpeed=15;
        this.canRun=true;
       
    }

    preload(){
        this.playerService.preLoadPlayers(this.game);
        this.game.load.image('scoreboard','assets/game/img/scoreboard-process-bg.png');
        this.game.load.image('scoreboardfill','assets/game/img/scoreboard-process-fill.png')
    }
    
    create(){
        this.game.add.image(230,this.height-40,'scoreboard');
        this.scoreboard=this.game.add.image(234,this.height-40,'scoreboardfill');
        this.scoreboard.width=0;

        this.score = this.game.add.bitmapText(400,this.height-40,'gem','0000000',22);
        this.controller = this.game.add.text(80,27,'0/1',{"fill":"white","stroke":"black","strokeThickness":1,"fontSize":20});
        this.bulb= this.game.add.text(80,77,'0/1',{"fill":"white","stroke":"black","strokeThickness":1,"fontSize":20});
        this.pig = this.game.add.text(80,137,'0/1',{"fill":"white","stroke":"black","strokeThickness":1,"fontSize":20});

            let flore=this.game.add.sprite(0,this.height-70,'platform');
            this.game.physics.arcade.enable(flore);
            flore.width=this.width;
            flore.body.immovable=true;
            flore.body.collideWorldBounds = true;
            flore.body.allowGravity=false;
            flore.visible=false;
        this.flore=flore;

            let box=this.game.add.sprite(this.width-380,this.height-120,'box');
            this.game.physics.arcade.enable(box);
            box.width=50;
            box.body.immovable=true;
            box.body.collideWorldBounds = true;
            box.body.allowGravity=false;
            box.visible=false;
        this.box=box;
        
        for (let i=0;i <=2;i++){
            this.players[i]=this.playerService.getRandomPlayer(this.game);
        }
        this.player=this.players[this.round]
        this.game.add.existing(this.player);

        this.canRunKey = this.game.input.keyboard.addKey(Phaser.Keyboard.RIGHT)
    }

    update(){
        if (this.canRun){
            
            this.game.physics.arcade.collide(this.player,this.flore);
            this.game.physics.arcade.collide(this.player,this.box);

            this.game.physics.arcade.overlap(this.player,this.box,()=>this.playerHitTheBox());
                
            if (this.game.input.keyboard.isDown(Phaser.Keyboard.LEFT)){
                this.player.x -=this.moveSpeed;
                this.player.animations.play('move')
                this.player.scale.x=-0.7

            
            }else if(this.game.input.keyboard.isDown(Phaser.Keyboard.RIGHT)){
                this.player.x +=this.moveSpeed;
                this.player.animations.play('move')
                this.player.scale.x=0.7
            
                
            }else
            {this.player.animations.stop('move')}

            if (this.game.input.keyboard.isDown(Phaser.Keyboard.UP)){
                this.jumpTimer++;
                if (this.jumpTimer < 5){  
                this.player.y -= this.moveSpeed;
                }
            }
            if (! this.game.input.keyboard.isDown(Phaser.Keyboard.UP)){
                    this.jumpTimer=0;
                } 
            }      
    }

    playerHitTheBox(){
        this.canRun=false;
        this.canRunKey.reset();
        this.player.animations.play('shine');
        this.moveSpeed=0;
        this.player.body.enable=false;
        this.round++;
        
        this.changeTextstandScoreBoard();
        this.hitTheBoxWindow();
        setTimeout(()=>{
            if(this.round<3){
                this.player.setEndPosition();
                this.player.animations.play('sit');
                this.player=this.players[this.round]
                this.game.add.existing(this.player);
            }
            if(this.round==3){
                this.player.setEndPosition();
                this.player.animations.play('sit');
                this.game.state.start("EndState",false,false)
            }
            
            
            this.destroyWindow()
            this.moveSpeed=15;
            this.canRun=true;
        },2000)
    }

    private changeTextstandScoreBoard() : void {
        switch (this.round){
            case 1 :{
                this.score.text='0000250';
                this.controller.text='1/1';
                this.scoreboard.width=41*this.round;
                break;
            }
            case 2 :{
                this.score.text='0000500';
                this.bulb.text='1/1';
                this.scoreboard.width=41*this.round;
                break
            }
            case 3 :{
                this.score.text='0000750';
                this.pig.text='1/1';
                this.scoreboard.width=41*this.round;
                break
            }
        }
    }
    private hitTheBoxWindow():void {
      this.rame = this.game.add.image(this.width/2-190,this.height/2-140,'rame');
      this.welcomeText = this.game.add.text(this.width/2-150,this.height/2-70,'Welcomme on board,',
            {font:"17px pressstart2p",fill:"#51aff7",wordWrapWidth:330,align:"center",wordWrap:true});
      this.jobb = this.game.add.text(this.width/2,this.height/2,this.player.playerProfesion+'!',
            {font:"15px pressstart2p",fill:"#ff6123"});
      this.jobb.x -= this.jobb.width/2;
      this.playerLogo = this.game.add.image(this.width/2-40,this.height/2+50,this.player.professionLogo);
      this.logoSocre = this.game.add.text(this.width/2+10,this.height/2+65,'1/1',{font:"13px pressstart2p",fill:"white"})
    }

    private destroyWindow() : void {
        this.rame.destroy();
        this.welcomeText.destroy();
        this.jobb.destroy();
        this.playerLogo.destroy();
        this.logoSocre.destroy();
    }
}
import * as Phaser from 'phaser-ce';

export default class AssetsService {
    
    constructor(){

    }
       
    public setWordPhisic(game:Phaser.Game) : void {
        game.physics.startSystem(Phaser.Physics.ARCADE);
        game.time.desiredFps =30;
        game.physics.setBoundsToWorld();
        game.physics.arcade.gravity.y = 350;
    }

    public prepearBackground(game:Phaser.Game) : void {
        game.load.image('background','assets/game/img/bg.jpg');
        game.load.image('floor','assets/game/img/floor.png');
        game.load.image('building_left', 'assets/game/img/building-left.png');
        game.load.image('building_right', 'assets/game/img/building-right.png');
        game.load.image('car', 'assets/game/img/car.png');
        game.load.image('cloud', 'assets/game/img/cloud-1.png');
        game.load.image('controller', 'assets/game/img/controller.png');
        game.load.image('bulb', 'assets/game/img/bulb.png');
        game.load.image('pig', 'assets/game/img/pig.png');
        game.load.image('platform','assets/game/img/building-right-level.jpg');
        game.load.image('box','assets/game/img/modal-overlay.png');
        game.load.image('rame','assets/game/img/modal-bg.png');
    }

    public prepearAnimations(game:Phaser.Game) : void {
        game.load.spritesheet('dog', 'assets/game/img/dog.png', 45, 40);
        game.load.spritesheet('cat', 'assets/game/img/cat.png', 45, 40);
        game.load.spritesheet('coin', 'assets/game/img/coin.png', 20, 20);
    }

    public prepearText(game:Phaser.Game): void {
        game.load.bitmapFont('gem','assets/game/font/gem.png','assets/game/font/gem.xml');
    }

    public loadBackground(game:Phaser.Game) : void {
        let width = window.innerWidth;
        let height= window.innerHeight;

        let bgImg = game.add.image(0,-100,'background');
        bgImg.height=height+30;
        bgImg.width=width;

        let flore = game.add.sprite(0,height-70,'floor');
        flore.height=70;
        flore.width=width;
       
        let buildingLeftImage = game.add.image(0,height-390,'building_left')
        buildingLeftImage.height=320;
        buildingLeftImage.width=380;
    
        let buildingRightImage = game.add.image(width-380,height-500,'building_right')
        buildingRightImage.height=430;
        buildingRightImage.width=380;

        let car = game.add.image(width/2-175,height-250,'car')
        car.height=180;
        car.width=380;

        game.add.image(30,20,'controller');
        game.add.image(30,70,'bulb');
        game.add.image(30,130,'pig');
    }

    public loadAnimations(game:Phaser.Game) : void {
        let width = window.innerWidth;
        let height= window.innerHeight;

        let clouds = game.add.group();
        clouds.enableBody = true;
        for(let i = 0;i<5;i++){
          setTimeout(()=>{  
          let cloud = clouds.create(20,i*(Math.random()*20),'cloud');
          cloud.width=100;
          cloud.height=60;
          cloud.name='cloud'+i.toString();
          cloud.checkWorldBounds = true;
          cloud.events.onOutOfBounds.add((cloude)=>{cloude.reset(cloude.y,0);cloude.body.velocity.x=(Math.round(Math.random()*80))+10},this);
          cloud.body.velocity.x = (Math.round(Math.random()*80))+10;
          cloud.body.allowGravity=false;
        },1500*i)
          
        }
    

        let dog = game.add.sprite(width/2-50,height-110,'dog');
        dog.animations.add('dogmove',[0, 1, 2],5,true);
        dog.animations.play('dogmove');
    
        let cat = game.add.sprite(230,height-420,'cat');
        cat.animations.add('catmove',[0, 1, 2],5,true);
        cat.animations.play('catmove');
    
        let coin1 = game.add.sprite(100, height-40,'coin');
        coin1.animations.add('coinmove',[0, 1, 2, 3],7,true);
        coin1.animations.play('coinmove');
    
        let coin2 = game.add.sprite(130, height-40,'coin');
        coin2.animations.add('coinmove',[0, 1, 2, 3],5,true);
        coin2.animations.play('coinmove');
    
        let coin3 = game.add.sprite(160, height-40,'coin');
        coin3.animations.add('coinmove',[0, 1, 2, 3],10,true);
        coin3.animations.play('coinmove');

    }
    
    public loadText(game:Phaser.Game) : void {
        let width = window.innerWidth;
        let height= window.innerHeight;

        game.add.bitmapText(width-500,height-40,'gem','Build your team! You only need to move to the right!',19);
    }

}
    
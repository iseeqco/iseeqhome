import * as Phaser from 'phaser-ce';

export default class EndState extends Phaser.State {
    constructor(){
        super();

    }

    preload(){
        this.game.load.image('cups','assets/game/img/cups.png');
    }

    create(){
        let width = window.innerWidth;
        let height= window.innerHeight; 
        let rame = this.game.add.image(width/2-175,height/2-140,'rame')
        rame.height=280;
        rame.width=350;
        
        this.game.add.text(width/2-150,height/2-100,'Building your team with IseeQ can be so easy.',
            {font:"17px pressstart2p",fill:"#51aff7",wordWrapWidth:330,align:"center",wordWrap:true});

        this.game.add.image(width/2-50,height/2,'cups');

        let link = this.game.add.text(width/2-130,height/2+70,'Let us show how!',
            {font:"17px pressstart2p",fill:"#ff6123",wordWrapWidth:330,align:"center",wordWrap:true});
            link.inputEnabled=true;
            link.input.useHandCursor=true;
            link.events.onInputOver.add(()=>link.fill="white");
            link.events.onInputOut.add(()=>link.fill="#ff6123");
            link.events.onInputDown.add(()=>{this.game.destroy();window.location.href=window.location.origin+"/home/services";});

        let underline = this.game.add.graphics(width/2-130,height/2+95);
            underline.lineStyle(2,0xff6123);
            underline.moveTo(0, 0);
            underline.lineTo(265, 0);
    }
    update(){}
}
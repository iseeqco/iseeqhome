import * as Phaser from 'phaser-ce';


export default class Player extends Phaser.Sprite{

        xEndPos:number;
        yEndPos:number;
        playerProfesion:string;
        professionLogo:string;
        hasChair:boolean;

        constructor(game:Phaser.Game,playerType:string,xEndPosition:number,yEndPosition:number,
                    profession:string,professionLogo:string,hasChair:boolean){
            super(game,110,window.innerHeight-165,playerType)
            this.setPhisic();
            this.createAnimations()
            this.yEndPos=window.innerHeight+yEndPosition;
            this.xEndPos=window.innerWidth+xEndPosition;
            this.playerProfesion=profession;
            this.professionLogo=professionLogo;
            this.hasChair=hasChair;
        }
        
        private setPhisic(): void {
            this.game.physics.arcade.enable(this);
            this.body.collideWorldBounds = true;
            this.height=60;
            this.width=30;
        }

        private createAnimations(){
           this.frame=1;
           this.animations.add('move',[0,1,2],10,true);
           this.animations.add('shine',[3,4],10,true);
           this.animations.add('sit',[5,6],10,true); 
        }
        
        setEndPosition(){
           this.y=this.yEndPos;
           this.x=this.xEndPos;
           if (this.hasChair){
            let chair :Phaser.Image = this.game.add.image(this.x+10,this.y+25,'chair')
                chair.scale.x=0.7;
                chair.scale.y=0.7;
           }
           return  
        }
}





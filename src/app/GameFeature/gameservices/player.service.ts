import * as Phaser from 'phaser-ce';
import Player from '../objects/player';

export default  class PlayerService {

    numberOfCalls:number;
    
    profession:string;
    image:string;
    endPositionX:number;
    endPositionY:number;
    professionLogo:string;
    hasChair:boolean;

    PLAYER_GROUPS : any ={    Group1 : {professions:['Mobile developer','Backend engineer','Frontend developer','Automation engineer','Infrastructure engineer'],
                                        images:['persondev1','personedev2'],
                                        endPositionCorrectors:[{x:-190,y:-230},{x:-70,y:-230}],
                                        professionLogo:'controller'},

                              Group2 : {professions:['CTO','CFO','Sales director','Engineer manager','Marketing director'],
                                        images:['personewhite','personered'],
                                        endPositionCorrectors:[{x:-190,y:-330}],
                                        professionLogo:'bulb'},

                              Group3 : {professions:['Chief accountant','Office manager'],
                                        images:['personesuit','personem'],
                                        endPositionCorrectors:[{x:-160,y:-420}],
                                        professionLogo:'pig'}
                            } 

    width:number;
    height:number;

    constructor(){
        this.width=window.innerWidth;
        this.height=window.innerHeight;
        this.numberOfCalls=0;
    }

    preLoadPlayers(game:Phaser.Game){
        let width=44;
        let height=92;
        game.load.spritesheet('persondev1', 'assets/game/img/person-dev-1.png',width,height);
        game.load.spritesheet('personedev2', 'assets/game/img/person-dev-2.png',width,height);
        game.load.spritesheet('personem', 'assets/game/img/person-mustache.png',width,height);
        game.load.spritesheet('personered', 'assets/game/img/person-red-f.png',width,height);
        game.load.spritesheet('personesuit', 'assets/game/img/person-suitcase-m.png',50,height);
        game.load.spritesheet('personewhite', 'assets/game/img/person-white-m.png',width,height);
        game.load.image('chair','assets/game/img/chair.png');
    
    }   

    getRandomPlayer(game:Phaser.Game) : Player{
        this.numberOfCalls++;
        switch (this.numberOfCalls){
            case 1 :{
                this.setPlayerConstructorDatas(this.PLAYER_GROUPS.Group1)
                break;
            }
            case 2 :{
                this.setPlayerConstructorDatas(this.PLAYER_GROUPS.Group2)
                break;
            }
            case 3 :{
                this.setPlayerConstructorDatas(this.PLAYER_GROUPS.Group3)
                this.numberOfCalls=0;
                break
            }
        }
        
        let player : Player = new Player(game,this.image,this.endPositionX,this.endPositionY,this.profession,this.professionLogo,this.hasChair);
        return player  
    } 

    private setPlayerConstructorDatas(groupOfDatas:any){
        this.hasChair=true;
        this.profession = groupOfDatas.professions[Math.floor(Math.random() * Math.floor(groupOfDatas.professions.length))];
        this.image = groupOfDatas.images[Math.floor(Math.random() * Math.floor(groupOfDatas.images.length))];
        this.endPositionX = groupOfDatas.endPositionCorrectors[Math.floor(Math.random() * Math.floor(groupOfDatas.endPositionCorrectors.length))].x;
        this.endPositionY = groupOfDatas.endPositionCorrectors[Math.floor(Math.random() * Math.floor(groupOfDatas.endPositionCorrectors.length))].y;
        this.professionLogo = groupOfDatas.professionLogo;
        if (this.image=='personesuit'){
            this.hasChair=false;
            this.endPositionX=-260;
            this.endPositionY=-417;
        }
    }



}




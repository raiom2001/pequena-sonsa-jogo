// ═══════════════════════════════════════
//  FASE 3 — ÉRICA, cúmplice raivosa
//  Local: Corredor do Prédio
//  Artefatos: Espelho, Unhas Extra
// ═══════════════════════════════════════
class Level3Scene extends BaseLevel {
  constructor(){ super('Level3Scene'); }
  init(data){ this.prevScore=data.score||0; }

  create(){
    const W=this.scale.width, H=this.scale.height;
    this.initBase({hp:5,prevScore:this.prevScore,totalArtifacts:2,
      nextScene:'Level4Scene',phaseLabel:'FASE 3 — Érica',phaseColor:'#ffcc80'});
    this.groundKey='ground_l3'; this.bossColor=0xe65100;
    this.platDefs=[
      {x:140,y:410,key:'p130'},{x:360,y:342,key:'p160'},
      {x:600,y:270,key:'p140'},{x:820,y:200,key:'p110'},
      {x:200,y:262,key:'p110'},{x:500,y:182,key:'p160'},
      {x:750,y:382,key:'p130'},{x:80, y:185,key:'p110'},
    ];

    buildBGTexture(this,'bg_l3',0x2d1500,0x180a00);
    buildSonsaTexture(this,'sonsa');
    buildCibeleTexture(this,'erica');  // reutiliza silhueta com tint laranja
    buildCameraTexture(this,'camera'); buildArtifactTextures(this);
    buildParticleTexture(this,'particle'); buildStarTexture(this,'star');
    buildGroundTexture(this,'ground_l3',960,80,0x4e342e,0x6d4c41,0x8d6e63);
    ['p160','p140','p130','p110'].forEach(k=>{
      const m={p160:160,p140:140,p130:130,p110:110};
      buildPlatformTexture(this,k,m[k],20,0x4e342e,0x6d4c41);
    });

    this.add.image(W/2,H/2,'bg_l3');
    // Névoa alaranjada
    for(let i=0;i<5;i++){
      const f=this.add.graphics();
      f.fillStyle(0xff6f00,0.06);
      f.fillEllipse(Phaser.Math.Between(0,W),Phaser.Math.Between(H*0.3,H),
        Phaser.Math.Between(180,350),Phaser.Math.Between(60,120));
      this.tweens.add({targets:f,x:'+='+Phaser.Math.Between(-50,50),duration:Phaser.Math.Between(2000,5000),yoyo:true,repeat:-1});
    }
    this.createStars(40,0xffcc80);
    this.add.text(W/2,35,'🔥 CORREDOR DO PRÉDIO — "Território da Érica"',
      {fontSize:'14px',fontFamily:'Arial',color:'#ffcc80',stroke:'#000',strokeThickness:3}).setOrigin(0.5);

    this.boss=this.physics.add.sprite(720,H-150,'erica');
    this.boss.setTint(0xff8a65);
    this.boss.setCollideWorldBounds(true);
    this.boss.body.setSize(50,85).setOffset(5,5);
    this.boss.hp=14; this.boss.maxHp=14; this.boss.alive=true;
    this.boss.speed=140; this.boss.shootTimer=0; this.boss.shootInterval=1700;
    this.boss.bossName='ÉRICA';

    this.createPhysicsBase();
    this.spawnArtifacts([
      {key:'art_espelho',x:145,y:375,label:'Espelho 🪞'},
      {key:'art_unhas',  x:820,y:163,label:'Unhas Extra 💅'},
    ]);
    this.createHUDBase();
    this.cameras.main.fadeIn(600,60,25,0);
    this.dlgBossScale=1.7;
    this.xingTimer=2500;

    const dialogs=[
      {portrait:'erica', speaker:'ÉRICA', color:'#ffcc80',
       text:'Finalmente chegou! A Andressa ficou me ligando perguntando se eu te parei. Que chato!'},
      {portrait:'sonsa', speaker:'SONSA', color:'#a5d6a7',
       text:'Você também tá nessa? Érica, me diz onde a Andressa tá escondida com minha marmita!'},
      {portrait:'erica', speaker:'ÉRICA', color:'#ffab40',
       text:'No apartamento dela, no último andar. Mas você não vai chegar lá. Eu te garanto.'},
      {portrait:'sonsa', speaker:'SONSA', color:'#69f0ae',
       text:'Passei pela Aline e pela Reny. Você também não vai me parar, Érica!'},
      {portrait:'erica', speaker:'ÉRICA', color:'#e65100',
       text:'Tá bem confiante, hein? Vamos ver depois que eu te encher de câmera! VEM! 🔥💢'},
    ];
    this.showDialogSystem(dialogs,'erica',1.7);

    this.onLevelComplete=()=>{
      this.showFloat(W/2,200,'🔥 Érica derrotada! Última parada: Andressa!','#ffcc80');
      this.time.delayedCall(2000,()=>{
        this.cameras.main.fade(800,50,0,100,false,(_,p)=>{
          if(p===1) this.scene.start('Level4Scene',{score:this.score});
        });
      });
    };
  }

  getQuip(){
    const q=['A Andressa vai rir muito!','Volta pra casa!','Não aguenta mais não?','Desiste já!','Tô com pena de você!','Quase nada!'];
    return q[Phaser.Math.Between(0,q.length-1)];
  }

  update(time,delta){
    if(this.dialogOpen||this.gameEnded) return;
    this.invTimer=Math.max(0,this.invTimer-1);
    this.updatePlayerMovement();
    if(this.boss.alive){
      this.updateBossPatrol();
      this.boss.shootTimer+=delta;
      if(this.boss.shootTimer>=this.boss.shootInterval){
        this.boss.shootTimer=0;
        this.shootProjectile('camera',315,0xff8a65);
        if(this.rageMode) this.time.delayedCall(350,()=>this.shootProjectile('camera',315,0xe65100));
      }
    }
    this.xingTimer-=delta;
    if(this.xingTimer<=0&&this.boss.alive){
      this.xingTimer=Phaser.Math.Between(2000,3800);
      this.showFloat(this.boss.x,this.boss.y-55,'"'+this.getQuip()+'"','#ffcc80');
    }
  }
}
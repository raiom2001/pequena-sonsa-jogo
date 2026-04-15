// ═══════════════════════════════════════
//  FASE 1 — ALINE, obcecada com redes
//  Local: Escritório das Câmeras
//  Artefatos: Narguile, Unhas, Juliete, Batom
// ═══════════════════════════════════════
class Level1Scene extends BaseLevel {
  constructor(){ super('Level1Scene'); }
  init(data){ this.prevScore=data.score||0; }

  create(){
    const W=this.scale.width, H=this.scale.height;
    this.initBase({hp:5,prevScore:this.prevScore,totalArtifacts:4,
      nextScene:'Level2Scene',phaseLabel:'FASE 1 — Aline',phaseColor:'#f48fb1'});
    this.groundKey='ground_l1'; this.bossColor=0xe91e63;
    this.platDefs=[
      {x:180,y:395,key:'p160'},{x:420,y:320,key:'p140'},
      {x:670,y:248,key:'p160'},{x:100,y:258,key:'p110'},
      {x:720,y:395,key:'p130'},{x:510,y:180,key:'p110'},
    ];

    buildBGTexture(this,'bg_l1',0x1a1a2e,0x0d2b1e);
    buildSonsaTexture(this,'sonsa'); buildAlineTexture(this,'aline');
    buildCameraTexture(this,'camera'); buildArtifactTextures(this);
    buildParticleTexture(this,'particle'); buildStarTexture(this,'star');
    buildGroundTexture(this,'ground_l1',960,80,0x37474f,0x455a64,0x546e7a);
    ['p160','p140','p130','p110'].forEach(k=>{
      const m={p160:160,p140:140,p130:130,p110:110};
      buildPlatformTexture(this,k,m[k],20,0x455a64,0x607d8b);
    });

    this.add.image(W/2,H/2,'bg_l1');
    this.createStars(50);

    // Decoração escritório
    const deco=this.add.graphics();
    deco.fillStyle(0x263238,0.8);
    [[60,120],[200,120],[680,120],[820,120]].forEach(([x,y])=>{
      deco.fillRoundedRect(x,y,80,60,4);
      deco.fillStyle(0x80deea,0.3); deco.fillRect(x+4,y+4,34,50);
      deco.fillStyle(0x80deea,0.3); deco.fillRect(x+44,y+4,34,50);
      deco.fillStyle(0x263238,0.8);
    });
    this.add.text(W/2,35,'📸 ESTÚDIO DA ALINE — "Post ou morte"',
      {fontSize:'15px',fontFamily:'Arial',color:'#f48fb1',stroke:'#000',strokeThickness:3}).setOrigin(0.5);

    this.boss=this.physics.add.sprite(750,H-150,'aline');
    this.boss.setCollideWorldBounds(true);
    this.boss.body.setSize(48,82).setOffset(4,4);
    this.boss.hp=10; this.boss.maxHp=10; this.boss.alive=true;
    this.boss.speed=115; this.boss.shootTimer=0; this.boss.shootInterval=2000;
    this.boss.bossName='ALINE';

    this.createPhysicsBase();
    this.spawnArtifacts([
      {key:'art_narguile',x:185,y:360,label:'Narguile 💨'},
      {key:'art_unhas',   x:425,y:284,label:'Unhas 💅'},
      {key:'art_juliete', x:674,y:213,label:'Óculos Juliete 🕶️'},
      {key:'art_batom',   x:104,y:222,label:'Batom 💄'},
    ]);
    this.createHUDBase();
    this.cameras.main.fadeIn(600);
    this.dlgBossScale=1.6;

    const dialogs=[
      {portrait:'aline',speaker:'ALINE',color:'#f48fb1',
       text:'Sonsa! Você me viu postando stories de você SEM AUTORIZAÇÃO? Meu engajamento explodiu! 📈'},
      {portrait:'sonsa',speaker:'SONSA',color:'#a5d6a7',
       text:'Você... filmou eu comendo minha marmita e postou?? Onde está minha marmita, Aline?!'},
      {portrait:'aline',speaker:'ALINE',color:'#f48fb1',
       text:'A Andressa pediu que eu distraísse você aqui enquanto elas pegavam. Negócio é negócio! 😅'},
      {portrait:'sonsa',speaker:'SONSA',color:'#ff5252',
       text:'Você ajudou a roubar minha marmita por VIEWS?? Você é inacreditável!'},
      {portrait:'aline',speaker:'ALINE',color:'#e91e63',
       text:'Precisava do conteúdo! E agora vai ser conteúdo apanhando também! CÂMERAS, JÁ! 📸📸📸'},
    ];
    this.showDialogSystem(dialogs,'aline',1.6);

    this.onLevelComplete=()=>{
      this.showFloat(W/2,200,'📸 Aline derrotada! Seguindo para a Reny...','#f48fb1');
      this.time.delayedCall(1800,()=>{
        this.cameras.main.fade(700,0,100,0,false,(_,p)=>{
          if(p===1) this.scene.start('Level2Scene',{score:this.score});
        });
      });
    };
  }

  getQuip(){
    const q=['VAI POSTAR!','Que ângulo horrível!','Sem filtro não dá!','Engagement caindo!','Stories agora!','Não tem câmera não?'];
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
        this.shootProjectile('camera',290);
      }
    }
  }
}
// ═══════════════════════════════════════
//  FASE 2 — RENY, cúmplice da Andressa
//  Local: Praça do Bairro
//  Artefatos: Peruca, Pochete, Colar
// ═══════════════════════════════════════
class Level2Scene extends BaseLevel {
  constructor(){ super('Level2Scene'); }
  init(data){ this.prevScore=data.score||0; }

  create(){
    const W=this.scale.width, H=this.scale.height;
    this.initBase({hp:5,prevScore:this.prevScore,totalArtifacts:3,
      nextScene:'Level3Scene',phaseLabel:'FASE 2 — Reny',phaseColor:'#80cbc4'});
    this.groundKey='ground_l2'; this.bossColor=0x00897b;
    this.platDefs=[
      {x:140,y:410,key:'p130'},{x:370,y:340,key:'p160'},
      {x:620,y:268,key:'p140'},{x:840,y:200,key:'p110'},
      {x:210,y:265,key:'p110'},{x:510,y:185,key:'p160'},
      {x:760,y:390,key:'p130'},
    ];

    buildBGTexture(this,'bg_l2',0x003d33,0x001a14);
    buildSonsaTexture(this,'sonsa');
    buildCibeleTexture(this,'reny');   // reutiliza silhueta com tint verde
    buildPhoneTexture(this,'phone'); buildArtifactTextures(this);
    buildParticleTexture(this,'particle'); buildStarTexture(this,'star');
    buildGroundTexture(this,'ground_l2',960,80,0x1b5e20,0x2e7d32,0x388e3c);
    ['p160','p140','p130','p110'].forEach(k=>{
      const m={p160:160,p140:140,p130:130,p110:110};
      buildPlatformTexture(this,k,m[k],20,0x1b5e20,0x2e7d32);
    });

    this.add.image(W/2,H/2,'bg_l2');
    this.createStars(40,0x80cbc4);
    this.add.text(W/2,35,'🌿 PRAÇA DO BAIRRO — "Território da Reny"',
      {fontSize:'14px',fontFamily:'Arial',color:'#80cbc4',stroke:'#000',strokeThickness:3}).setOrigin(0.5);

    this.boss=this.physics.add.sprite(720,H-150,'reny');
    this.boss.setTint(0x80cbc4);
    this.boss.setCollideWorldBounds(true);
    this.boss.body.setSize(50,85).setOffset(5,5);
    this.boss.hp=12; this.boss.maxHp=12; this.boss.alive=true;
    this.boss.speed=130; this.boss.shootTimer=0; this.boss.shootInterval=1800;
    this.boss.bossName='RENY';

    this.createPhysicsBase();
    this.spawnArtifacts([
      {key:'art_peruca',  x:145,y:375,label:'Peruca 💃'},
      {key:'art_pochete', x:515,y:148,label:'Pochete 👜'},
      {key:'art_colar',   x:844,y:163,label:'Colar 📿'},
    ]);
    this.createHUDBase();
    this.cameras.main.fadeIn(600,0,30,25);
    this.dlgBossScale=1.7;
    this.xingTimer=3000;

    const dialogs=[
      {portrait:'reny', speaker:'RENY',  color:'#80cbc4',
       text:'Para aí, Sonsa! A Andressa me pediu pra te segurar aqui. Desculpa, mas negócio é negócio. 😬'},
      {portrait:'sonsa',speaker:'SONSA', color:'#a5d6a7',
       text:'Reny?? Você?? Eu te via na praça todo dia! Como você se meteu nisso?!'},
      {portrait:'reny', speaker:'RENY',  color:'#80cbc4',
       text:'A Andressa disse que a marmita era dela. Eu acreditei... mas tô com dúvida agora. 😅'},
      {portrait:'sonsa',speaker:'SONSA', color:'#69f0ae',
       text:'Claro que não é dela! É MINHA! Com frango, legumes e muito gengibre!'},
      {portrait:'reny', speaker:'RENY',  color:'#4db6ac',
       text:'Ai, que pena. Mas eu já prometi que ia te parar... não posso quebrar promessa não.'},
      {portrait:'reny', speaker:'RENY',  color:'#00897b',
       text:'Vou ter que te jogar umas coisas. Corre não, que vai doer menos! 😬💢'},
    ];
    this.showDialogSystem(dialogs,'reny',1.7);

    this.onLevelComplete=()=>{
      this.showFloat(W/2,200,'🌿 Reny derrotada! Seguindo para a Érica...','#80cbc4');
      this.time.delayedCall(1800,()=>{
        this.cameras.main.fade(700,0,80,60,false,(_,p)=>{
          if(p===1) this.scene.start('Level3Scene',{score:this.score});
        });
      });
    };
  }

  getQuip(){
    const q=['Desculpa!','Prometei à Andressa!','Não é pessoal!','Ei, quase!','Fecha os olhos!','Só mais um pouquinho!'];
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
        this.shootProjectile('phone',300,0x80cbc4);
        if(this.rageMode) this.time.delayedCall(400,()=>this.shootProjectile('phone',300,0x00897b));
      }
    }
    this.xingTimer-=delta;
    if(this.xingTimer<=0&&this.boss.alive){
      this.xingTimer=Phaser.Math.Between(2500,4500);
      this.showFloat(this.boss.x,this.boss.y-55,'"'+this.getQuip()+'"','#80cbc4');
    }
  }
}
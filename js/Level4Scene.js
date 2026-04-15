// ═══════════════════════════════════════
//  FASE 4 — ANDRESSA, a mandante
//  Local: Apartamento da Andressa
//  Artefatos: Pochete + Marmita GIGANTE
//  3 fases de raiva + ataque especial
// ═══════════════════════════════════════
class Level4Scene extends BaseLevel {
  constructor(){ super('Level4Scene'); }
  init(data){ this.prevScore=data.score||0; }

  create(){
    const W=this.scale.width, H=this.scale.height;
    this.initBase({hp:5,prevScore:this.prevScore,totalArtifacts:2,
      nextScene:'WinScene',phaseLabel:'FASE FINAL — Andressa',phaseColor:'#ce93d8'});
    this.groundKey='ground_l4'; this.bossColor=0x9c27b0;
    this.ragePhase=0;
    this.platDefs=[
      {x:140,y:418,key:'p160'},{x:380,y:345,key:'p160'},
      {x:630,y:272,key:'p140'},{x:870,y:200,key:'p110'},
      {x:180,y:272,key:'p90'}, {x:480,y:192,key:'p140'},
      {x:740,y:400,key:'p110'},{x:60, y:200,key:'p90'},
      {x:900,y:360,key:'p90'},
    ];

    buildBGTexture(this,'bg_l4',0x200020,0x0a0015);
    buildSonsaTexture(this,'sonsa'); buildAndressaTexture(this,'andressa');
    buildCameraTexture(this,'camera'); buildArtifactTextures(this);
    buildMarmitaTexture(this,'marmita_big');
    buildParticleTexture(this,'particle'); buildStarTexture(this,'star');
    buildGroundTexture(this,'ground_l4',960,80,0x4a0072,0x6a0dad,0x7B1FA2);
    ['p160','p140','p130','p110','p90'].forEach(k=>{
      const m={p160:160,p140:140,p130:130,p110:110,p90:90};
      buildPlatformTexture(this,k,m[k],20,0x4a0072,0x6a0dad);
    });

    this.add.image(W/2,H/2,'bg_l4');
    // Névoa roxa pesada
    for(let i=0;i<8;i++){
      const f=this.add.graphics();
      f.fillStyle(0x7B1FA2,0.07);
      f.fillEllipse(Phaser.Math.Between(0,W),Phaser.Math.Between(H*0.2,H),
        Phaser.Math.Between(200,420),Phaser.Math.Between(80,160));
      this.tweens.add({targets:f,x:'+='+Phaser.Math.Between(-60,60),duration:Phaser.Math.Between(3000,7000),yoyo:true,repeat:-1});
    }
    this.createStars(80,0xcc88ff);

    this.add.text(W/2,35,'🍱 APARTAMENTO DA ANDRESSA — "A marmita está aqui"',
      {fontSize:'13px',fontFamily:'Arial',color:'#ce93d8',stroke:'#000',strokeThickness:3}).setOrigin(0.5);

    // Marmita visível esperando
    buildMarmitaTexture(this,'marmita_big');
    const marmitaDeco=this.add.image(W-80,H-140,'marmita_big').setScale(2).setAlpha(0.8);
    this.tweens.add({targets:marmitaDeco,scaleX:2.1,scaleY:2.1,duration:800,yoyo:true,repeat:-1});
    this.add.text(W-80,H-100,'Sua marmita!',{fontSize:'12px',fontFamily:'Arial',color:'#FFD600',stroke:'#000',strokeThickness:2}).setOrigin(0.5);

    this.boss=this.physics.add.sprite(740,H-170,'andressa');
    this.boss.setCollideWorldBounds(true);
    this.boss.body.setSize(65,118).setOffset(7,8);
    this.boss.hp=24; this.boss.maxHp=24; this.boss.alive=true;
    this.boss.speed=120; this.boss.shootTimer=0; this.boss.shootInterval=1700;
    this.boss.setScale(1.1); this.boss.bossName='ANDRESSA';

    this.createPhysicsBase();
    this.spawnArtifacts([
      {key:'art_pochete',x:145,y:382,label:'Pochete 👜'},
      {key:'art_marmita',x:870,y:162,label:'Marmita 🍱'},
    ]);

    this.createHUDBase();
    this.cameras.main.fadeIn(800,100,0,100);
    this.dlgBossScale=1.3;
    this.xingTimer=2500;
    this.specialTimer=8000;

    const dialogs=[
  {portrait:'andressa',speaker:'ANDRESSA',color:'#ce93d8',
   text:'HAHAHAHA! Você sobreviveu à Aline, Reny e Érica?? Que perturbada! 😂'},
  {portrait:'sonsa',   speaker:'SONSA',   color:'#a5d6a7',
   text:'Você mandou três pessoas me parar por causa de uma marmita, Andressa?!'},
  {portrait:'andressa',speaker:'ANDRESSA',color:'#ba68c8',
   text:'Não era qualquer marmita! Strogonoff, salsicha, batata E arroz. Uma obra de arte! 🍱'},
  {portrait:'sonsa',   speaker:'SONSA',   color:'#69f0ae',
   text:'Eu fiz aquilo com AMOR! Horas na cozinha! E você simplesmente ROUBOU?'},
  {portrait:'andressa',speaker:'ANDRESSA',color:'#9c27b0',
   text:'Tava muito boa mesmo. Comi metade no caminho, sinto muito. 😬'},
  {portrait:'sonsa',   speaker:'SONSA',   color:'#ff5252',
   text:'VOCÊ COMEU METADE??? A SALSICHA, A BATATA... MEU STROGONOFF!!!!! 😤😤😤'},
  {portrait:'andressa',speaker:'ANDRESSA',color:'#e91e63',
   text:'Ainda sobrou bastante! Mas pra pegar o resto vai ter que me TIRAR NA FORÇA! VEEEEM! 💢💢'},
];
    this.showDialogSystem(dialogs,'andressa',1.3);

    this.onLevelComplete=()=>{
      this.showFloat(W/2,160,'🍱 MARMITA RECUPERADA! Andressa vencida!','#FFD600');
      this.time.delayedCall(2200,()=>{
        this.cameras.main.fade(900,200,100,255,false,(_,p)=>{
          if(p===1) this.scene.start('WinScene',{score:this.score});
        });
      });
    };
  }

  // 3 fases de raiva: 75%, 50%, 25%
 activateRage(){
  this.ragePhase++;
  this.rageMode=true;
  const W=this.scale.width; // ← FIX: pega W aqui dentro
  const msgs=[
    '😤 Tá me irritando! FASE 2!',
    '😡 CHEGA! MODO RAIVA TOTAL!',
    '🔥 EU VOU TE DESTRUIR! 🔥'
  ];
  const colors=[0xba68c8,0x9c27b0,0xff1744];
  this.boss.speed+=40;
  this.boss.shootInterval=Math.max(500,this.boss.shootInterval-300);
  this.boss.setTint(colors[this.ragePhase-1]||0xff1744);
  this.cameras.main.shake(500,0.02);
  this.cameras.main.flash(700,150,0,200);
  this.showFloat(W/2,160,msgs[(this.ragePhase-1)]||'🔥 FÚRIA FINAL!','#ff1744');
  this.tweens.add({targets:this.boss,scaleX:1.1+this.ragePhase*0.06,scaleY:1.1+this.ragePhase*0.06,duration:300});
  this.updateHUD();
}
  handleBossContact(player, boss){
  if(!boss.alive||this.dialogOpen||this.gameEnded) return;

  const playerBottom = player.y + player.height * 0.5;
  const bossTop = boss.y - boss.height * 0.4;
  const fallingFast = player.body.velocity.y > 30;

  if(fallingFast && playerBottom < bossTop + 35){
    // Pulo na cabeça
    boss.hp--;
    // Força o player pra cima imediatamente para não ficar preso
    player.body.velocity.y = -420;
    player.body.position.y -= 10; // empurra fisicamente pra fora

    this.cameras.main.shake(150,0.008);
    this.showFloat(boss.x,boss.y-55,'💥 -1','#FFD600');
    this.particles.setPosition(boss.x,boss.y);
    this.particles.setParticleTint(0x9c27b0); this.particles.explode(14);
    this.score+=65; this.updateHUD();
    this.tweens.add({targets:boss,alpha:0.25,duration:70,yoyo:true,repeat:4});

    const thresholds=[0.75,0.50,0.25];
    const ratio=boss.hp/boss.maxHp;
    if(this.ragePhase<3&&ratio<=thresholds[this.ragePhase]) this.activateRage();
    if(boss.hp<=0) this.defeatBoss();

  } else {
    // Contato lateral — dano no player
    if(this.invTimer<=0){
      this.hp--; this.invTimer=120; this.updateHUD();
      this.cameras.main.shake(200,0.012);
      // Empurra player pra longe do boss para não ficar preso
      const dir = player.x < boss.x ? -1 : 1;
      player.body.velocity.x = dir * 250;
      this.showFloat(player.x,player.y-30,'-1 ❤️','#e53935');
      if(this.hp<=0) this.triggerGameOver();
    }
  }
}

  defeatBoss(){
    this.boss.alive=false; this.bossDefeated=true; this.boss.setVelocityX(0);
    this.tweens.add({targets:this.boss,alpha:0,y:this.boss.y+90,angle:360,duration:1200,ease:'Power2'});
    this.cameras.main.flash(800,200,100,255);
    this.score+=800;
    this.showFloat(this.boss.x,this.boss.y-70,'ANDRESSA DERROTADA! +800','#FFD600');
    this.showFloat(this.scale.width/2,200,'🍱 A MARMITA ESTÁ LIVRE!','#a5d6a7');
    this.particles.setPosition(this.boss.x,this.boss.y);
    this.particles.setParticleTint(0xFFD600); this.particles.explode(50);
    this.updateBossHPBar(); this.checkWin();
  }

  getQuip(){
    const q=['Fedorenta!','Vai pro banhado!','Cretina verde!','Inútil!','Orelhuda!','Minha marmita agora!','Volta pra toca!','Patética!','Franguinha!'];
    return '"'+q[Phaser.Math.Between(0,q.length-1)]+'"';
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
        this.shootProjectile('camera',300);
        if(this.ragePhase>=2) this.time.delayedCall(300,()=>this.shootProjectile('camera',330));
        if(this.ragePhase>=3) this.time.delayedCall(600,()=>this.shootProjectile('camera',360));
      }
    }
    this.xingTimer-=delta;
    if(this.xingTimer<=0&&this.boss.alive){
      this.xingTimer=Phaser.Math.Between(2000,4000);
      this.showFloat(this.boss.x,this.boss.y-60,this.getQuip(),'#ce93d8');
    }
    this.specialTimer-=delta;
    if(this.specialTimer<=0&&this.boss.alive&&!this.dialogOpen){
      this.specialTimer=Phaser.Math.Between(7000,11000);
      this.specialAttack();
    }
  }

  specialAttack(){
    this.showFloat(this.boss.x,this.boss.y-80,'📷 CÂMERAS EM LEQUE!','#e53935');
    this.cameras.main.flash(300,150,0,200);
    for(let angle=-60;angle<=60;angle+=30){
      this.time.delayedCall(angle+100,()=>{
        if(!this.boss||!this.boss.alive) return;
        const b=this.boss;
        const rad=Phaser.Math.DegToRad(angle-90);
        const p=this.projectiles.create(b.x,b.y+20,'camera');
        p.setDepth(10); p.body.setAllowGravity(false);
        p.setVelocity(Math.cos(rad)*400,Math.sin(rad)*400);
        p.setTint(0xe91e63);
        this.time.delayedCall(2500,()=>{ if(p&&p.active) p.destroy(); });
      });
    }
  }
}
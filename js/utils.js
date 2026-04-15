// ══════════════════════════════════════════════
//  TEXTURAS PROCEDURAIS
// ══════════════════════════════════════════════

function buildSonsaTexture(scene, key='sonsa') {
  if(scene.textures.exists(key)) return;
  const rt=scene.add.renderTexture(0,0,52,84); const g=scene.add.graphics();

  // Sapatos marrons medievais
  g.fillStyle(0x4e342e); g.fillRoundedRect(2,72,20,10,3); g.fillRoundedRect(30,72,20,10,3);
  // Pernas verdes
  g.fillStyle(0x558B2F); g.fillRect(8,58,15,16); g.fillRect(29,58,15,16);

  // Vestido verde medieval com borda dourada
  g.fillStyle(0x33691E); g.fillRoundedRect(2,36,48,26,5);
  // Detalhe dourado na gola e barra
  g.fillStyle(0xF9A825);
  g.fillRect(2,36,48,4);   // cinto/gola dourado
  g.fillRect(2,58,48,4);   // barra dourada
  // Padrão do vestido
  g.fillStyle(0x558B2F); g.fillRoundedRect(14,40,24,18,3);
  g.fillStyle(0xF9A825,0.6);
  g.fillRect(24,40,2,18); // linha central dourada
  g.fillRect(14,48,24,2); // linha horizontal dourada

  // Mangas do vestido
  g.fillStyle(0x33691E); g.fillRoundedRect(-4,34,12,22,4); g.fillRoundedRect(44,34,12,22,4);
  g.fillStyle(0xF9A825); g.fillRect(-4,54,12,3); g.fillRect(44,54,12,3);
  // Mãos verdes
  g.fillStyle(0x6aaf3d); g.fillCircle(2,57,5); g.fillCircle(50,57,5);

  // Pescoço
  g.fillStyle(0x6aaf3d); g.fillRect(20,30,12,10);

  // Cabelo longo castanho — atrás da cabeça
  g.fillStyle(0x4a2c00);
  g.fillEllipse(26,18,42,36); // massa do cabelo
  g.fillRect(6,18,8,36);     // mecha esquerda longa
  g.fillRect(38,18,8,36);    // mecha direita longa
  g.fillRoundedRect(4,30,10,30,5);  // lateral esq
  g.fillRoundedRect(38,30,10,30,5); // lateral dir

  // Mechas na frente com reflexo
  g.fillStyle(0x6d3f00);
  g.fillRoundedRect(6,10,7,28,3);
  g.fillRoundedRect(39,10,7,28,3);
  g.fillStyle(0x8B5E00,0.5);
  g.fillRect(8,10,3,24); g.fillRect(41,10,3,24);

  // Cabeça verde
  g.fillStyle(0x6aaf3d); g.fillEllipse(26,18,36,30);

  // Orelhas de ogra — grandes e características
  g.fillStyle(0x558B2F);
  g.fillEllipse(6,18,16,10);   // orelha esq
  g.fillEllipse(46,18,16,10);  // orelha dir
  // Ponta das orelhas
  g.fillTriangle(0,14,4,22,-2,22);
  g.fillTriangle(52,14,48,22,54,22);
  g.fillStyle(0x8BC34A);
  g.fillEllipse(6,18,8,5);
  g.fillEllipse(46,18,8,5);

  // Franja com reflexo
  g.fillStyle(0x3e2000);
  g.fillEllipse(16,8,16,12); g.fillEllipse(26,6,14,10); g.fillEllipse(36,8,16,12);
  g.fillRect(10,8,32,8);
  g.fillStyle(0x6d3f00,0.4);
  g.fillRect(12,8,4,8); g.fillRect(22,6,4,8); g.fillRect(32,8,4,8);

  // Sobrancelhas expressivas
  g.fillStyle(0x2e1800);
  g.fillRoundedRect(12,14,10,3,1); g.fillRoundedRect(30,14,10,3,1);
  // Levemente inclinadas — cara simpática
  g.fillTriangle(12,14,22,14,14,11); g.fillTriangle(30,14,40,14,38,11);

  // Olhos castanhos grandes
  g.fillStyle(0xffffff); g.fillEllipse(18,19,10,9); g.fillEllipse(34,19,10,9);
  g.fillStyle(0x5d4037); g.fillCircle(18,19,4); g.fillCircle(34,19,4);
  g.fillStyle(0x1a1a1a); g.fillCircle(18,19,2.5); g.fillCircle(34,19,2.5);
  g.fillStyle(0xffffff); g.fillCircle(19,17,1.2); g.fillCircle(35,17,1.2);
  // Cílios
  g.lineStyle(1.5,0x1a1a1a);
  g.beginPath(); g.moveTo(13,15); g.lineTo(11,12); g.strokePath();
  g.beginPath(); g.moveTo(17,14); g.lineTo(17,11); g.strokePath();
  g.beginPath(); g.moveTo(21,15); g.lineTo(23,12); g.strokePath();
  g.beginPath(); g.moveTo(29,15); g.lineTo(27,12); g.strokePath();
  g.beginPath(); g.moveTo(33,14); g.lineTo(33,11); g.strokePath();
  g.beginPath(); g.moveTo(37,15); g.lineTo(39,12); g.strokePath();

  // Nariz pequeno arredondado
  g.fillStyle(0x558B2F); g.fillEllipse(26,23,8,5);
  g.fillStyle(0x33691E); g.fillCircle(23,23,2); g.fillCircle(29,23,2);

  // Sorriso largo
  g.lineStyle(2,0x1a1a1a); g.beginPath(); g.arc(26,26,6,0.1,Math.PI-0.1); g.strokePath();
  g.fillStyle(0xffffff); g.fillRect(23,26,3,3); g.fillRect(27,26,3,3);

  // Blush rosado nas bochechas
  g.fillStyle(0xff8a80,0.35); g.fillEllipse(13,22,9,5); g.fillEllipse(39,22,9,5);

  // Coroa dourada no topo
  g.fillStyle(0xF9A825);
  g.fillRect(16,4,20,5);
  g.fillTriangle(16,4,19,0,22,4);
  g.fillTriangle(22,4,26,1,30,4);
  g.fillTriangle(30,4,33,0,36,4);
  g.fillStyle(0xFFD600); g.fillCircle(19,4,2); g.fillCircle(26,2,2); g.fillCircle(33,4,2);
  g.fillStyle(0xe53935); g.fillCircle(19,4,1); g.fillCircle(26,2,1); g.fillCircle(33,4,1);

  rt.draw(g,0,0); rt.saveTexture(key); g.destroy(); rt.destroy();
}

function buildAlineTexture(scene, key='aline') {
  if(scene.textures.exists(key)) return;
  const rt=scene.add.renderTexture(0,0,56,90); const g=scene.add.graphics();
  g.fillStyle(0xc2185b); g.fillRoundedRect(2,78,18,10,4); g.fillRoundedRect(36,78,18,10,4);
  g.fillStyle(0xf8bbd0); g.fillRect(8,62,16,18); g.fillRect(32,62,16,18);
  g.fillStyle(0xe91e63); g.fillRoundedRect(4,34,48,32,8);
  g.fillStyle(0xf8bbd0); g.fillTriangle(28,34,18,46,38,46);
  g.fillStyle(0xf8bbd0); g.fillCircle(28,22,20);
  g.fillStyle(0xFFD600); g.fillCircle(28,8,20); g.fillRect(8,4,40,14);
  g.fillStyle(0x1a1a1a); g.fillCircle(20,20,4); g.fillCircle(36,20,4);
  g.fillStyle(0xffffff); g.fillCircle(21,19,1.5); g.fillCircle(37,19,1.5);
  g.lineStyle(3,0x4a2c00);
  g.beginPath(); g.moveTo(13,13); g.lineTo(24,17); g.strokePath();
  g.beginPath(); g.moveTo(43,13); g.lineTo(32,17); g.strokePath();
  g.lineStyle(2,0xb71c1c); g.beginPath(); g.arc(28,28,5,Math.PI+0.3,-0.3); g.strokePath();
  g.fillStyle(0x424242); g.fillRoundedRect(-14,55,20,14,3);
  g.fillStyle(0x90caf9); g.fillCircle(-5,62,5);
  g.fillStyle(0x0d47a1); g.fillCircle(-5,62,3);
  rt.draw(g,0,0); rt.saveTexture(key); g.destroy(); rt.destroy();
}

function buildAndressaTexture(scene, key='andressa') {
  if(scene.textures.exists(key)) return;
  const rt=scene.add.renderTexture(0,0,80,130); const g=scene.add.graphics();
  g.fillStyle(0x4a0072); g.fillRoundedRect(2,116,24,12,5); g.fillRoundedRect(54,116,24,12,5);
  g.fillStyle(0xce93d8); g.fillRect(8,88,26,32); g.fillRect(46,88,26,32);
  g.fillStyle(0x7B1FA2); g.fillRoundedRect(4,44,72,50,12);
  g.fillStyle(0x6a0dad); g.fillRoundedRect(14,54,52,24,6);
  g.fillStyle(0xce93d8); g.fillCircle(40,28,28);
  g.fillStyle(0x1a1a1a); g.fillCircle(40,12,28); g.fillRect(12,8,56,18);
  g.fillStyle(0x9c27b0); g.fillRect(12,8,8,22); g.fillRect(60,8,8,22);
  g.fillStyle(0xff1744); g.fillCircle(28,25,7); g.fillCircle(52,25,7);
  g.fillStyle(0x1a1a1a); g.fillCircle(28,25,4); g.fillCircle(52,25,4);
  g.fillStyle(0xff4444); g.fillCircle(29,24,1.5); g.fillCircle(53,24,1.5);
  g.lineStyle(4,0x1a1a1a);
  g.beginPath(); g.moveTo(18,15); g.lineTo(33,20); g.strokePath();
  g.beginPath(); g.moveTo(62,15); g.lineTo(47,20); g.strokePath();
  g.fillStyle(0xba68c8); g.fillEllipse(40,30,10,7);
  g.lineStyle(3,0x4a0072); g.beginPath(); g.arc(40,40,8,Math.PI+0.4,-0.4); g.strokePath();
  g.fillStyle(0xffffff); g.fillRect(34,39,12,5);
  g.lineStyle(1,0xcc0000); g.beginPath(); g.moveTo(40,39); g.lineTo(40,44); g.strokePath();
  rt.draw(g,0,0); rt.saveTexture(key); g.destroy(); rt.destroy();
}

// Reny e Érica reutilizam essa silhueta com tint diferente
function buildCibeleTexture(scene, key='cibele') {
  if(scene.textures.exists(key)) return;
  const rt=scene.add.renderTexture(0,0,60,95); const g=scene.add.graphics();
  g.fillStyle(0xf57f17); g.fillRoundedRect(2,82,20,12,4); g.fillRoundedRect(38,82,20,12,4);
  g.fillStyle(0xffe0b2); g.fillRect(8,65,18,20); g.fillRect(34,65,18,20);
  g.fillStyle(0xff6f00); g.fillRoundedRect(4,36,52,34,8);
  g.fillStyle(0xffab40); g.fillRect(14,44,10,8); g.fillRect(36,44,10,8);
  g.fillStyle(0xffe0b2); g.fillCircle(30,22,20);
  g.fillStyle(0xb71c1c); g.fillCircle(30,8,20); g.fillRect(10,4,40,14);
  g.fillStyle(0xc62828); g.fillEllipse(10,22,12,30); g.fillEllipse(50,22,12,30);
  g.fillStyle(0x1a1a1a); g.fillCircle(22,20,4); g.fillCircle(38,20,4);
  g.fillStyle(0xffffff); g.fillCircle(23,19,1.5); g.fillCircle(39,19,1.5);
  g.lineStyle(2,0x4a1a00);
  g.beginPath(); g.moveTo(16,13); g.lineTo(26,15); g.strokePath();
  g.beginPath(); g.moveTo(44,13); g.lineTo(34,15); g.strokePath();
  g.lineStyle(2,0x880e4f); g.beginPath(); g.arc(30,27,6,0.1,Math.PI-0.1); g.strokePath();
  g.fillStyle(0x212121); g.fillRoundedRect(-12,55,10,18,2);
  g.fillStyle(0x42a5f5); g.fillRect(-11,57,8,14);
  rt.draw(g,0,0); rt.saveTexture(key); g.destroy(); rt.destroy();
}

function buildCameraTexture(scene, key='camera') {
  if(scene.textures.exists(key)) return;
  const rt=scene.add.renderTexture(0,0,24,18); const g=scene.add.graphics();
  g.fillStyle(0x212121); g.fillRoundedRect(0,0,24,18,3);
  g.fillStyle(0x607d8b); g.fillRect(18,4,5,6);
  g.fillStyle(0x90a4ae); g.fillCircle(10,9,7);
  g.fillStyle(0x1565c0); g.fillCircle(10,9,5);
  g.fillStyle(0x42a5f5); g.fillCircle(10,9,2);
  g.fillStyle(0xfff9c4); g.fillCircle(9,8,1);
  rt.draw(g,0,0); rt.saveTexture(key); g.destroy(); rt.destroy();
}

function buildPhoneTexture(scene, key='phone') {
  if(scene.textures.exists(key)) return;
  const rt=scene.add.renderTexture(0,0,16,26); const g=scene.add.graphics();
  g.fillStyle(0x212121); g.fillRoundedRect(0,0,16,26,3);
  g.fillStyle(0x42a5f5); g.fillRect(1,3,14,18);
  g.fillStyle(0xffffff,0.3); g.fillRect(2,4,6,8);
  g.fillStyle(0xfff176); g.fillCircle(8,23,2);
  rt.draw(g,0,0); rt.saveTexture(key); g.destroy(); rt.destroy();
}

function buildMarmitaTexture(scene, key='marmita_big') {
  if(scene.textures.exists(key)) return;
  const rt=scene.add.renderTexture(0,0,64,48); const g=scene.add.graphics();
  g.fillStyle(0xff8f00); g.fillRoundedRect(4,8,56,34,6);
  g.fillStyle(0xffa000); g.fillRect(4,8,56,8);
  g.fillStyle(0x1a1a1a); g.fillRoundedRect(12,4,40,8,4);
  g.fillStyle(0x4caf50); g.fillRect(8,18,16,16);
  g.fillStyle(0xe53935); g.fillRect(26,18,16,16);
  g.fillStyle(0xffe082); g.fillRect(44,18,12,22);
  rt.draw(g,0,0); rt.saveTexture(key); g.destroy(); rt.destroy();
}

function buildArtifactTextures(scene) {
  const defs=[
    {key:'art_narguile', draw:(g)=>{ g.fillStyle(0x8e24aa);g.fillRoundedRect(8,12,14,22,4);g.fillStyle(0xce93d8);g.fillCircle(15,8,10);g.lineStyle(2,0x8e24aa);g.beginPath();g.arc(15,8,6,0,Math.PI*2);g.strokePath(); }},
    {key:'art_unhas',    draw:(g)=>{ g.fillStyle(0xe91e63);for(let i=0;i<5;i++){g.fillRoundedRect(2+i*6,8,5,20,3);} }},
    {key:'art_juliete',  draw:(g)=>{ g.lineStyle(3,0xffd600);g.beginPath();g.arc(10,14,8,0,Math.PI*2);g.strokePath();g.beginPath();g.arc(24,14,8,0,Math.PI*2);g.strokePath();g.beginPath();g.moveTo(18,14);g.lineTo(16,14);g.strokePath(); }},
    {key:'art_batom',    draw:(g)=>{ g.fillStyle(0xd32f2f);g.fillRoundedRect(10,4,10,24,3);g.fillStyle(0xff6659);g.fillRoundedRect(10,4,10,8,3); }},
    {key:'art_espelho',  draw:(g)=>{ g.lineStyle(3,0x90caf9);g.fillStyle(0xb3e5fc);g.fillCircle(16,13,12);g.strokeCircle(16,13,12);g.fillStyle(0xffffff);g.fillEllipse(12,10,5,4);g.fillStyle(0x546e7a);g.fillRect(14,25,4,8); }},
    {key:'art_peruca',   draw:(g)=>{ g.fillStyle(0xff80ab);g.fillEllipse(16,10,28,20);g.fillRect(4,10,24,16);g.fillStyle(0xf48fb1);g.fillEllipse(4,18,10,24);g.fillEllipse(28,18,10,24); }},
    {key:'art_pochete',  draw:(g)=>{ g.fillStyle(0xffcc02);g.fillRoundedRect(4,8,24,20,4);g.lineStyle(2,0xf9a825);g.strokeRoundedRect(4,8,24,20,4);g.fillStyle(0xf9a825);g.fillRect(14,4,4,6); }},
    {key:'art_colar',    draw:(g)=>{ g.lineStyle(3,0xffd600);g.beginPath();g.arc(16,14,10,Math.PI+0.3,-0.3);g.strokePath();g.fillStyle(0xffd600);g.fillCircle(16,24,5); }},
    {key:'art_marmita',  draw:(g)=>{ g.fillStyle(0xff8f00);g.fillRoundedRect(4,8,24,20,4);g.fillStyle(0xffa000);g.fillRect(4,8,24,4);g.fillStyle(0x43a047);g.fillRect(6,10,6,6);g.fillStyle(0xe53935);g.fillRect(14,10,6,6);g.fillStyle(0xfff176);g.fillRect(6,18,6,6);g.fillStyle(0x42a5f5);g.fillRect(14,18,6,6); }},
  ];
  defs.forEach(({key,draw})=>{
    if(scene.textures.exists(key)) return;
    const rt=scene.add.renderTexture(0,0,32,32); const g=scene.add.graphics();
    draw(g); rt.draw(g,0,0); rt.saveTexture(key); g.destroy(); rt.destroy();
  });
}

function buildPlatformTexture(scene, key, w=200, h=20, color=0x2E7D32, topColor=0x43A047) {
  const k=key+'_'+w;
  if(scene.textures.exists(k)) return k;
  const rt=scene.add.renderTexture(0,0,w,h); const g=scene.add.graphics();
  g.fillStyle(color); g.fillRect(0,0,w,h);
  g.fillStyle(topColor); g.fillRect(0,0,w,5);
  g.fillStyle(0x66BB6A); for(let x=8;x<w-4;x+=20){g.fillTriangle(x,0,x+6,0,x+3,-6);}
  rt.draw(g,0,0); rt.saveTexture(k); g.destroy(); rt.destroy(); return k;
}

function buildGroundTexture(scene, key, w=960, h=80, c1=0x1b5e20, c2=0x2E7D32, c3=0x388E3C) {
  if(scene.textures.exists(key)) return;
  const rt=scene.add.renderTexture(0,0,w,h); const g=scene.add.graphics();
  g.fillStyle(c1); g.fillRect(0,0,w,h);
  g.fillStyle(c2); g.fillRect(0,0,w,12);
  g.fillStyle(c3); for(let x=10;x<w;x+=30){g.fillTriangle(x,0,x+10,0,x+5,-8);}
  rt.draw(g,0,0); rt.saveTexture(key); g.destroy(); rt.destroy();
}

function buildParticleTexture(scene, key='particle') {
  if(scene.textures.exists(key)) return;
  const g=scene.add.graphics();
  g.fillStyle(0xffffff); g.fillCircle(8,8,8);
  g.generateTexture(key,16,16); g.destroy();
}

function buildStarTexture(scene, key='star') {
  if(scene.textures.exists(key)) return;
  const g=scene.add.graphics();
  g.fillStyle(0xffffff,1); g.fillCircle(4,4,4);
  g.generateTexture(key,8,8); g.destroy();
}

function buildButtonTexture(scene, key, w=200, h=50, color=0x4CAF50) {
  if(scene.textures.exists(key)) return;
  const rt=scene.add.renderTexture(0,0,w,h); const g=scene.add.graphics();
  g.fillStyle(color); g.fillRoundedRect(0,0,w,h,10);
  g.fillStyle(0xffffff,0.18); g.fillRoundedRect(4,4,w-8,h/2-4,8);
  g.lineStyle(2,0xffffff,0.4); g.strokeRoundedRect(1,1,w-2,h-2,10);
  rt.draw(g,0,0); rt.saveTexture(key); g.destroy(); rt.destroy();
}

function buildBGTexture(scene, key, color1, color2) {
  if(scene.textures.exists(key)) return;
  const W=960,H=540;
  const rt=scene.add.renderTexture(0,0,W,H); const g=scene.add.graphics();
  for(let y=0;y<H;y++){
    const t=y/H;
    const r=Math.round(Phaser.Math.Linear(Phaser.Display.Color.IntegerToColor(color1).r,Phaser.Display.Color.IntegerToColor(color2).r,t));
    const gv=Math.round(Phaser.Math.Linear(Phaser.Display.Color.IntegerToColor(color1).g,Phaser.Display.Color.IntegerToColor(color2).g,t));
    const b=Math.round(Phaser.Math.Linear(Phaser.Display.Color.IntegerToColor(color1).b,Phaser.Display.Color.IntegerToColor(color2).b,t));
    g.fillStyle(Phaser.Display.Color.GetColor(r,gv,b)); g.fillRect(0,y,W,1);
  }
  rt.draw(g,0,0); rt.saveTexture(key); g.destroy(); rt.destroy();
}

// ══════════════════════════════════════════════
//  BASE LEVEL — classe pai de todas as fases
// ══════════════════════════════════════════════
class BaseLevel extends Phaser.Scene {
  initBase(cfg){
    this.hp=cfg.hp||5; this.score=cfg.prevScore||0;
    this.artifactsCollected=0; this.totalArtifacts=cfg.totalArtifacts||4;
    this.bossDefeated=false; this.dialogOpen=true; this.dialogIdx=0;
    this.invTimer=0; this.gameEnded=false; this.xingTimer=0;
    this.rageMode=false; this.nextScene=cfg.nextScene;
    this.phaseLabel=cfg.phaseLabel||''; this.phaseColor=cfg.phaseColor||'#a5d6a7';
  }

  createPhysicsBase(){
    const W=this.scale.width, H=this.scale.height;
    this.ground=this.physics.add.staticGroup();
    const gi=this.add.image(W/2,H-40,this.groundKey||'ground');
    this.physics.add.existing(gi,true); gi.body.setSize(W,80); this.ground.add(gi);
    this.platforms=this.physics.add.staticGroup();
    const wMap={p200:200,p160:160,p140:140,p130:130,p110:110,p90:90};
    this.platDefs.forEach(def=>{
      const w=wMap[def.key]||160;
      const p=this.add.image(def.x,def.y,def.key+'_'+w);
      this.physics.add.existing(p,true); p.body.setSize(p.width,12); this.platforms.add(p);
    });
    this.player=this.physics.add.sprite(80,H-160,'sonsa');
    this.player.setCollideWorldBounds(true); this.player.setBounce(0.05);
    this.player.body.setSize(36,60).setOffset(6,8);
    this.projectiles=this.physics.add.group();
    this.physics.add.collider(this.player,this.ground);
    this.physics.add.collider(this.player,this.platforms);
    this.physics.add.collider(this.boss,this.ground);
    this.physics.add.collider(this.boss,this.platforms);
    this.physics.add.collider(this.projectiles,this.ground,(p)=>p.destroy());
    this.physics.add.collider(this.projectiles,this.platforms,(p)=>p.destroy());
    this.physics.add.overlap(this.player,this.artifactGroup,this.collectArtifact,null,this);
    this.physics.add.overlap(this.player,this.projectiles,this.hitByProjectile,null,this);
    this.physics.add.overlap(this.player,this.boss,this.handleBossContact,null,this);
    this.particles=this.add.particles(0,0,'particle',{
      speed:{min:80,max:220},scale:{start:0.4,end:0},
      lifespan:500,gravityY:300,emitting:false
    });
    this.cursors=this.input.keyboard.createCursorKeys();
    this.wasd=this.input.keyboard.addKeys('W,A,S,D,SPACE');
  }

  createHUDBase(){
    const W=this.scale.width, H=this.scale.height;
    this.hudHP=this.add.text(14,14,'',{fontSize:'22px',fontFamily:'Arial'}).setScrollFactor(0).setDepth(100);
    this.hudScore=this.add.text(14,44,'Score: 0',{fontSize:'16px',fontFamily:'Arial Black',color:'#FFD600',stroke:'#000',strokeThickness:3}).setScrollFactor(0).setDepth(100);
    this.hudArt=this.add.text(14,70,'Artefatos: 0/'+this.totalArtifacts,{fontSize:'14px',fontFamily:'Arial',color:'#a5d6a7',stroke:'#000',strokeThickness:2}).setScrollFactor(0).setDepth(100);
    this.hudPhase=this.add.text(W-14,14,this.phaseLabel,{fontSize:'15px',fontFamily:'Arial Black',color:this.phaseColor,stroke:'#000',strokeThickness:3}).setOrigin(1,0).setScrollFactor(0).setDepth(100);
    this.add.text(W/2,H-18,'← → mover  |  W/Espaço pular  |  Pule na cabeça para atacar',{fontSize:'11px',color:'rgba(255,255,255,0.4)',fontFamily:'Arial'}).setOrigin(0.5,1).setScrollFactor(0).setDepth(100);
    this.bossHPBg=this.add.graphics().setScrollFactor(0).setDepth(100);
    this.bossHPBar=this.add.graphics().setScrollFactor(0).setDepth(100);
    this.bossHPText=this.add.text(W/2,H-50,this.boss.bossName||'',{fontSize:'14px',fontFamily:'Arial Black',color:this.phaseColor,stroke:'#000',strokeThickness:3}).setOrigin(0.5).setScrollFactor(0).setDepth(100);
    this.rageLabel=this.add.text(W/2,H-68,'',{fontSize:'13px',fontFamily:'Arial Black',color:'#ff1744',stroke:'#000',strokeThickness:3}).setOrigin(0.5).setScrollFactor(0).setDepth(100);
    this.updateHUD();
  }

  updateHUD(){
    const hearts='❤️'.repeat(Math.max(0,this.hp))+'🖤'.repeat(Math.max(0,5-this.hp));
    this.hudHP.setText(hearts);
    this.hudScore.setText('Score: '+this.score);
    this.hudArt.setText('Artefatos: '+this.artifactsCollected+'/'+this.totalArtifacts);
    this.updateBossHPBar();
    if(this.rageLabel) this.rageLabel.setText(this.rageMode?'🔥 MODO FÚRIA!':'');
  }

  updateBossHPBar(){
    if(!this.bossHPBg) return;
    const W=this.scale.width, H=this.scale.height, bw=320;
    const ratio=this.boss&&this.boss.alive?Math.max(0,this.boss.hp/this.boss.maxHp):0;
    this.bossHPBg.clear(); this.bossHPBg.fillStyle(0x333333);
    this.bossHPBg.fillRoundedRect(W/2-bw/2,H-44,bw,14,4);
    this.bossHPBar.clear();
    const col=ratio>0.5?0x4CAF50:ratio>0.25?0xFFD600:0xe53935;
    this.bossHPBar.fillStyle(col);
    this.bossHPBar.fillRoundedRect(W/2-bw/2,H-44,bw*ratio,14,4);
  }

  showDialogSystem(dialogs, bossTexKey, bossScale=1.5){
    const W=this.scale.width, H=this.scale.height;
    this.currentDialogs=dialogs; this.dialogOpen=true; this.dialogIdx=0;
    this.dlgBox=this.add.graphics().setDepth(200);
    this.dlgPortrait=this.add.image(80,H-70,bossTexKey).setScale(bossScale).setDepth(201);
    this.dlgSpeaker=this.add.text(140,H-132,'',{fontSize:'17px',fontFamily:'Arial Black',color:'#fff',stroke:'#000',strokeThickness:3}).setDepth(201);
    this.dlgText=this.add.text(140,H-108,'',{fontSize:'14px',fontFamily:'Arial',color:'#eee',wordWrap:{width:740}}).setDepth(201);
    this.dlgHint=this.add.text(W-60,H-28,'▶ clique / Enter / Z',{fontSize:'11px',color:'rgba(255,255,255,0.5)'}).setOrigin(1,1).setDepth(201);
    this.renderDlg();
    this.input.on('pointerdown',()=>{ if(this.dialogOpen) this.nextDlg(); });
    this.input.keyboard.on('keydown-ENTER',()=>{ if(this.dialogOpen) this.nextDlg(); });
    this.input.keyboard.on('keydown-Z',()=>{ if(this.dialogOpen) this.nextDlg(); });
  }

  renderDlg(){
    const W=this.scale.width, H=this.scale.height;
    const d=this.currentDialogs[this.dialogIdx];
    this.dlgBox.clear();
    this.dlgBox.fillStyle(0x000000,0.88);
    this.dlgBox.fillRoundedRect(20,H-152,W-40,134,10);
    this.dlgBox.lineStyle(2,0x4CAF50,0.8);
    this.dlgBox.strokeRoundedRect(20,H-152,W-40,134,10);
    this.dlgPortrait.setTexture(d.portrait||'sonsa');
    this.dlgPortrait.setScale(d.portrait==='sonsa'?2.2:this.dlgBossScale||1.5);
    this.dlgSpeaker.setText(d.speaker).setColor(d.color||'#fff');
    this.dlgText.setText(d.text);
  }

  nextDlg(){
    this.dialogIdx++;
    if(this.dialogIdx>=this.currentDialogs.length){
      this.dialogOpen=false;
      this.dlgBox.destroy(); this.dlgPortrait.destroy();
      this.dlgSpeaker.destroy(); this.dlgText.destroy(); this.dlgHint.destroy();
      this.cameras.main.flash(300,255,100,100);
      this.onDialogEnd&&this.onDialogEnd();
    } else { this.renderDlg(); }
  }

  createStars(n=60, tint=0xffffff){
    const W=this.scale.width, H=this.scale.height;
    for(let i=0;i<n;i++){
      const s=this.add.image(Phaser.Math.Between(0,W),Phaser.Math.Between(0,H*0.7),'star')
        .setAlpha(Math.random()*0.6+0.2).setScale(Math.random()+0.3).setTint(tint);
      this.tweens.add({targets:s,alpha:0.1,duration:Phaser.Math.Between(600,2000),yoyo:true,repeat:-1});
    }
  }

  spawnArtifacts(defs){
  this.artifactGroup=this.physics.add.staticGroup();
  defs.forEach(def=>{
    const a=this.add.image(def.x,def.y,def.key).setScale(1.3);
    this.physics.add.existing(a,true); this.artifactGroup.add(a);
    a.artifactLabel=def.label;
    this.tweens.add({targets:a,scaleX:1.6,scaleY:1.6,duration:700,yoyo:true,repeat:-1,ease:'Sine.easeInOut'});
  });

  // ← ADICIONA ISSO AQUI
  this.physics.add.overlap(this.player, this.artifactGroup, this.collectArtifact, null, this);
}

  collectArtifact(player, artifact){
    const label=artifact.artifactLabel; artifact.destroy();
    this.artifactsCollected++; this.score+=120; this.updateHUD();
    this.showFloat(artifact.x,artifact.y-20,'+'+label+'!','#FFD600');
    this.particles.setPosition(artifact.x,artifact.y);
    this.particles.setParticleTint(0xFFD600); this.particles.explode(18);
    this.cameras.main.flash(200,255,215,0,false,null,this);
    this.checkWin();
  }

  hitByProjectile(player, proj){
    if(this.invTimer>0||this.dialogOpen||this.gameEnded) return;
    proj.destroy(); this.hp--; this.invTimer=130; this.updateHUD();
    this.cameras.main.shake(220,0.014); this.cameras.main.flash(180,255,0,0);
    this.showFloat(player.x,player.y-30,'-1 ❤️','#e53935');
    this.particles.setPosition(player.x,player.y);
    this.particles.setParticleTint(0xe53935); this.particles.explode(12);
    if(this.boss&&this.boss.alive)
      this.showFloat(this.boss.x,this.boss.y-60,this.getQuip(),'rgba(255,255,255,0.9)');
    if(this.hp<=0) this.triggerGameOver();
  }

  handleBossContact(player, boss){
    if(!boss.alive||this.dialogOpen||this.gameEnded) return;
    if(player.body.velocity.y>50&&player.y+player.height*0.6<boss.y+28){
      boss.hp--; player.setVelocityY(-400);
      this.cameras.main.shake(150,0.008);
      this.showFloat(boss.x,boss.y-50,'💥 -1','#FFD600');
      this.particles.setPosition(boss.x,boss.y);
      this.particles.setParticleTint(this.bossColor||0xe91e63); this.particles.explode(14);
      this.score+=55; this.updateHUD();
      this.tweens.add({targets:boss,alpha:0.25,duration:70,yoyo:true,repeat:4});
      if(!this.rageMode&&boss.hp<=boss.maxHp*0.5) this.activateRage();
      if(boss.hp<=0) this.defeatBoss();
    } else {
      if(this.invTimer<=0){
        this.hp--; this.invTimer=100; this.updateHUD();
        this.cameras.main.shake(200,0.012);
        this.showFloat(player.x,player.y-30,'-1 ❤️','#e53935');
        if(this.hp<=0) this.triggerGameOver();
      }
    }
  }

  activateRage(){
    this.rageMode=true;
    this.boss.speed=(this.boss.speed||100)*1.8;
    this.boss.shootInterval=Math.max(600,this.boss.shootInterval*0.55);
    this.boss.setTint(0xff4444);
    this.cameras.main.shake(400,0.018); this.cameras.main.flash(600,200,0,200);
    this.showFloat(this.scale.width/2,180,'🔥 '+this.boss.bossName+' ENTROU EM FÚRIA!','#ff1744');
    this.tweens.add({targets:this.boss,scaleX:1.15,scaleY:1.15,duration:300});
    this.updateHUD();
  }

  defeatBoss(){
    this.boss.alive=false; this.bossDefeated=true; this.boss.setVelocityX(0);
    this.tweens.add({targets:this.boss,alpha:0,y:this.boss.y+80,angle:360,duration:1000,ease:'Power2'});
    this.cameras.main.flash(600,255,200,0);
    this.score+=400;
    this.showFloat(this.boss.x,this.boss.y-60,this.boss.bossName+' DERROTADA! +400','#FFD600');
    this.particles.setPosition(this.boss.x,this.boss.y);
    this.particles.setParticleTint(0xFFD600); this.particles.explode(35);
    this.updateBossHPBar(); this.checkWin();
  }

  checkWin(){
    if(this.artifactsCollected>=this.totalArtifacts&&this.bossDefeated&&!this.gameEnded){
      this.gameEnded=true;
      this.showFloat(this.scale.width/2,180,'✨ FASE COMPLETA! ✨','#FFD600');
      this.onLevelComplete&&this.onLevelComplete();
    }
  }

  triggerGameOver(){
    this.gameEnded=true;
    this.time.delayedCall(500,()=>{
      this.cameras.main.fade(600,0,0,0,false,(_,p)=>{
        if(p===1) this.scene.start('GameOverScene',{score:this.score});
      });
    });
  }

  shootProjectile(texKey='camera', speed=300, tint=0xffffff){
    if(!this.boss||!this.boss.alive) return;
    const b=this.boss;
    const p=this.projectiles.create(b.x,b.y+40,texKey);
    p.setDepth(10);
    const dx=this.player.x-b.x, dy=this.player.y-b.y;
    const dist=Math.sqrt(dx*dx+dy*dy)||1;
    const sp=this.rageMode?speed*1.4:speed;
    p.setVelocity((dx/dist)*sp,(dy/dist)*sp);
    p.body.setAllowGravity(false);
    p.setRotation(Math.atan2(dy,dx));
    p.setTint(this.rageMode?0xff4444:tint);
    this.time.delayedCall(3500,()=>{ if(p&&p.active) p.destroy(); });
  }

  updatePlayerMovement(){
    const left=this.cursors.left.isDown||this.wasd.A.isDown;
    const right=this.cursors.right.isDown||this.wasd.D.isDown;
    const jump=Phaser.Input.Keyboard.JustDown(this.cursors.up)||
               Phaser.Input.Keyboard.JustDown(this.wasd.W)||
               Phaser.Input.Keyboard.JustDown(this.wasd.SPACE);
    if(left){ this.player.setVelocityX(-210); this.player.setFlipX(true); }
    else if(right){ this.player.setVelocityX(210); this.player.setFlipX(false); }
    else{ this.player.setVelocityX(0); }
    if(jump&&this.player.body.blocked.down) this.player.setVelocityY(-535);
    if(this.invTimer>0) this.player.setAlpha(Math.floor(this.invTimer/6)%2===0?1:0.3);
    else this.player.setAlpha(1);
  }

  updateBossPatrol(){
    if(!this.boss.alive) return;
    const dist=this.player.x-this.boss.x;
    if(Math.abs(dist)>80){
      this.boss.setVelocityX(dist>0?this.boss.speed:-this.boss.speed);
      this.boss.setFlipX(dist<0);
    } else { this.boss.setVelocityX(0); }
    if(this.boss.body.blocked.down&&Phaser.Math.Between(0,this.rageMode?120:260)===0){
      this.boss.setVelocityY(this.rageMode?-520:-460);
    }
  }

  showFloat(x, y, text, color='#FFD600'){
    const t=this.add.text(x,y,text,{
      fontSize:'16px', fontFamily:'Arial Black',
      color, stroke:'#000', strokeThickness:4
    }).setOrigin(0.5).setDepth(150);
    this.tweens.add({targets:t,y:y-70,alpha:0,duration:1400,ease:'Power2',onComplete:()=>t.destroy()});
  }

  getQuip(){ return '"..."'; }
}
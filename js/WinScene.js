class WinScene extends Phaser.Scene {
  constructor(){ super('WinScene'); }
  init(data){ this.finalScore=data.score||0; }
  create(){
    const W=this.scale.width, H=this.scale.height;
    buildBGTexture(this,'bg_win',0x1b5e20,0x0d2b1e);
    buildSonsaTexture(this,'sonsa');
    buildArtifactTextures(this);
    buildMarmitaTexture(this,'marmita_big');
    buildParticleTexture(this,'particle');
    buildButtonTexture(this,'btn_win',240,56,0x388E3C);
    buildStarTexture(this,'star');

    this.add.image(W/2,H/2,'bg_win');

    this.add.particles(0,0,'particle',{
      x:{min:0,max:W}, y:{min:-20,max:H*0.4},
      speed:{min:80,max:320},
      lifespan:{min:400,max:950},
      scale:{start:0.7,end:0},
      tint:[0xFFD600,0xe91e63,0x4CAF50,0x90caf9,0xce93d8,0xff8f00],
      quantity:4, frequency:55
    });

    const sonsa=this.add.image(W/2,H/2-10,'sonsa').setScale(4.5);
    this.tweens.add({targets:sonsa,y:H/2-25,duration:900,yoyo:true,repeat:-1,ease:'Sine'});
    this.tweens.add({targets:sonsa,angle:[-6,6],duration:420,yoyo:true,repeat:-1,ease:'Sine'});

    const marm=this.add.image(W/2+140,H/2-10,'marmita_big').setScale(3);
    this.tweens.add({targets:marm,angle:[-8,8],duration:600,yoyo:true,repeat:-1});

    this.add.text(W/2+3,52,'🍱 MARMITA RECUPERADA!',{fontSize:'44px',fontFamily:'Arial Black',color:'#7f5000',stroke:'#000',strokeThickness:4}).setOrigin(0.5);
    const winText=this.add.text(W/2,49,'🍱 MARMITA RECUPERADA!',{fontSize:'44px',fontFamily:'Arial Black',color:'#FFD600',stroke:'#fff',strokeThickness:2}).setOrigin(0.5);
    this.tweens.add({targets:winText,scaleX:1.04,scaleY:1.04,duration:800,yoyo:true,repeat:-1,ease:'Sine'});

    this.add.text(W/2,108,'A Pequena Sonsa venceu tudo!',{fontSize:'20px',fontFamily:'Arial',color:'#a5d6a7',stroke:'#000',strokeThickness:3}).setOrigin(0.5);
    this.add.text(W/2,136,'Aline, Reny, Érica e Andressa foram derrotadas! 💚',{fontSize:'16px',fontFamily:'Arial',color:'#ccc',stroke:'#000',strokeThickness:2}).setOrigin(0.5);

    // Epílogo
    const epiPanel=this.add.graphics();
    epiPanel.fillStyle(0x000000,0.6); epiPanel.fillRoundedRect(W/2-330,160,660,80,10);
    this.add.text(W/2,172,'"E assim a Pequena Sonsa comeu sua marmita quentinha, com gengibre,',{fontSize:'13px',fontFamily:'Arial',color:'#ddd'}).setOrigin(0.5);
    this.add.text(W/2,192,'cercada pelas suas orelhinhas favoritas. A Andressa ficou sem jantar."',{fontSize:'13px',fontFamily:'Arial',color:'#ddd'}).setOrigin(0.5);
    this.add.text(W/2,216,'— Narrador da Saga da Marmita',{fontSize:'12px',fontFamily:'Arial',color:'#888',fontStyle:'italic'}).setOrigin(0.5);

    this.add.text(W/2,262,'Score Final:',{fontSize:'16px',fontFamily:'Arial',color:'#ccc'}).setOrigin(0.5);
    this.add.text(W/2,290,this.finalScore,{fontSize:'52px',fontFamily:'Arial Black',color:'#FFD600',stroke:'#000',strokeThickness:4}).setOrigin(0.5);

    const arts=['art_narguile','art_unhas','art_juliete','art_batom','art_peruca','art_pochete','art_colar','art_marmita'];
    this.add.text(W/2,355,'Artefatos coletados:',{fontSize:'13px',fontFamily:'Arial',color:'#aaa'}).setOrigin(0.5);
    arts.forEach((k,i)=>{
      const a=this.add.image(W/2-175+i*52,382,k).setScale(1.4);
      this.tweens.add({targets:a,scaleX:1.7,scaleY:1.7,duration:500+i*80,yoyo:true,repeat:-1});
    });

    const btn=this.add.image(W/2,440,'btn_win').setInteractive({useHandCursor:true});
    this.add.text(W/2,440,'↩  Jogar novamente',{fontSize:'20px',fontFamily:'Arial Black',color:'#fff',stroke:'#000',strokeThickness:3}).setOrigin(0.5);
    btn.on('pointerover',()=>this.tweens.add({targets:btn,scaleX:1.08,scaleY:1.08,duration:100}));
    btn.on('pointerout', ()=>this.tweens.add({targets:btn,scaleX:1,scaleY:1,duration:100}));
    btn.on('pointerdown',()=>this.cameras.main.fade(600,0,0,0,false,(_,p)=>{ if(p===1) this.scene.start('MenuScene'); }));
    this.cameras.main.fadeIn(800);
  }
}
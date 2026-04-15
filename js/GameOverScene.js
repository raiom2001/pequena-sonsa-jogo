class GameOverScene extends Phaser.Scene {
  constructor(){ super('GameOverScene'); }
  create(){
    const W=this.scale.width, H=this.scale.height;
    buildBGTexture(this,'bg_go',0x1a0000,0x000000);
    buildSonsaTexture(this,'sonsa');
    buildParticleTexture(this,'particle');
    buildButtonTexture(this,'btn_red2',220,56,0xc62828);
    buildButtonTexture(this,'btn_green2',220,56,0x2E7D32);

    this.add.image(W/2,H/2,'bg_go');

    const sonsa=this.add.image(W/2,H/2-30,'sonsa').setScale(3).setAngle(90).setAlpha(0.7).setTint(0xff4444);
    this.tweens.add({targets:sonsa,alpha:0.4,duration:1200,yoyo:true,repeat:-1});

    this.add.text(W/2+3,108,'💀 GAME OVER',{fontSize:'60px',fontFamily:'Arial Black',color:'#7f0000',stroke:'#000',strokeThickness:4}).setOrigin(0.5);
    const goText=this.add.text(W/2,105,'💀 GAME OVER',{fontSize:'60px',fontFamily:'Arial Black',color:'#e53935',stroke:'#ff8a80',strokeThickness:2}).setOrigin(0.5);
    this.tweens.add({targets:goText,scaleX:1.04,scaleY:1.04,duration:700,yoyo:true,repeat:-1,ease:'Sine'});

    this.add.text(W/2,200,'A Pequena Sonsa foi derrotada...',{fontSize:'22px',fontFamily:'Arial',color:'#ffcdd2',stroke:'#000',strokeThickness:3}).setOrigin(0.5);
    this.add.text(W/2,240,'Sua marmita continua perdida. 😢',{fontSize:'18px',fontFamily:'Arial',color:'#aaa',stroke:'#000',strokeThickness:2}).setOrigin(0.5);

    const btnMenu=this.add.image(W/2-120,380,'btn_red2').setInteractive({useHandCursor:true});
    this.add.text(W/2-120,380,'↩  Menu',{fontSize:'22px',fontFamily:'Arial Black',color:'#fff',stroke:'#000',strokeThickness:3}).setOrigin(0.5);

    const btnRetry=this.add.image(W/2+120,380,'btn_green2').setInteractive({useHandCursor:true});
    this.add.text(W/2+120,380,'▶  Tentar de novo',{fontSize:'18px',fontFamily:'Arial Black',color:'#fff',stroke:'#000',strokeThickness:3}).setOrigin(0.5);

    btnMenu.on('pointerdown',()=>{
      this.cameras.main.fade(500,0,0,0,false,(_,p)=>{ if(p===1) this.scene.start('MenuScene'); });
    });
    btnRetry.on('pointerdown',()=>{
      this.cameras.main.fade(500,0,0,0,false,(_,p)=>{ if(p===1) this.scene.start('Level1Scene'); });
    });
    [btnMenu,btnRetry].forEach(b=>{
      b.on('pointerover',()=>this.tweens.add({targets:b,scaleX:1.08,scaleY:1.08,duration:100}));
      b.on('pointerout', ()=>this.tweens.add({targets:b,scaleX:1,scaleY:1,duration:100}));
    });

    this.cameras.main.fadeIn(500);
  }
}
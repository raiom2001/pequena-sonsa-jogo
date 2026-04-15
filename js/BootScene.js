class BootScene extends Phaser.Scene {
  constructor(){ super('BootScene'); }
  preload(){
    // Tenta carregar jpg e png
    this.load.image('menu_bg','menu.jpg');
    this.load.image('menu_bg_png','menu.png');
  }
  create(){ this.scene.start('MenuScene'); }
}

class MenuScene extends Phaser.Scene {
  constructor(){ super('MenuScene'); }

  create(){
    const W=this.scale.width, H=this.scale.height;

    buildSonsaTexture(this,'sonsa');
    buildParticleTexture(this,'particle');
    buildStarTexture(this,'star');
    buildButtonTexture(this,'btn_play',220,58,0x33691E);
    buildBGTexture(this,'bg_menu',0x1a2a0a,0x0a1500);

    // ── FUNDO: imagem da capa cobrindo tudo ─────────────────
    let bgLoaded = false;
    ['menu_bg','menu_bg_png'].forEach(k=>{
      if(!bgLoaded && this.textures.exists(k) && this.textures.get(k).key !== '__MISSING'){
        const img=this.add.image(W/2,H/2,k);
        const sc=Math.max(W/img.width, H/img.height);
        img.setScale(sc);
        bgLoaded=true;
      }
    });
    if(!bgLoaded){
      this.add.image(W/2,H/2,'bg_menu');
      for(let i=0;i<80;i++){
        const s=this.add.image(Phaser.Math.Between(0,W),Phaser.Math.Between(0,H),'star')
          .setAlpha(Math.random()*0.5+0.1).setScale(Math.random()+0.3);
        this.tweens.add({targets:s,alpha:0.05,duration:Phaser.Math.Between(800,2500),yoyo:true,repeat:-1});
      }
    }

    // Overlay escuro suave apenas no topo e baixo (efeito capa)
    const grad=this.add.graphics();
    // topo
    grad.fillStyle(0x000000,0.65); grad.fillRect(0,0,W,80);
    // baixo
    grad.fillStyle(0x000000,0.72); grad.fillRect(0,H-100,W,100);
    // lateral esquerda leve
    grad.fillStyle(0x000000,0.25); grad.fillRect(0,80,200,H-180);

    // ── TOPO: título estilo capa ─────────────────────────────
    // Subtítulo pequeno
    this.add.text(W/2,12,'Um conto nada encantado',{
      fontSize:'13px',fontFamily:'Georgia, serif',
      color:'#d4af37',stroke:'#000',strokeThickness:2,fontStyle:'italic'
    }).setOrigin(0.5,0);

    // Título principal grande
    this.add.text(W/2+3,28,'Pequena SONSA',{
      fontSize:'46px',fontFamily:'Arial Black',
      color:'#1a3300',stroke:'#000',strokeThickness:5
    }).setOrigin(0.5,0);
    const title=this.add.text(W/2,25,'Pequena SONSA',{
      fontSize:'46px',fontFamily:'Arial Black',
      color:'#4CAF50',stroke:'#d4af37',strokeThickness:3
    }).setOrigin(0.5,0);
    this.tweens.add({targets:title,scaleX:1.02,scaleY:1.02,duration:1200,yoyo:true,repeat:-1,ease:'Sine'});

    // Coroa no título
    const crown=this.add.text(W/2,22,'👑',{fontSize:'20px'}).setOrigin(0.5,1);
    this.tweens.add({targets:crown,y:18,duration:900,yoyo:true,repeat:-1,ease:'Sine'});

    // ── BAIXO: painel info pequeno ───────────────────────────
    this.add.text(22,H-92,'🎮 A/D ou ←→: mover   W/Espaço: pular   Pule na cabeça das vilãs para atacar',{
      fontSize:'11px',fontFamily:'Arial',color:'rgba(255,255,230,0.75)'
    });
    this.add.text(22,H-72,
      '🍱 Marmita (strogonoff, salsicha, batata e arroz) roubada pela Andressa e cúmplices. Recupere!',{
      fontSize:'11px',fontFamily:'Arial',color:'rgba(200,255,200,0.75)',wordWrap:{width:W-44}
    });
    this.add.text(22,H-52,'4 fases   |   8 artefatos   |   Score máximo: ∞',{
      fontSize:'11px',fontFamily:'Arial',color:'rgba(255,215,0,0.7)'
    });

    // ── BOTÃO JOGAR centralizado na metade inferior ──────────
    const btn=this.add.image(W/2,H-28,'btn_play').setInteractive({useHandCursor:true}).setOrigin(0.5,1);
    const btnTxt=this.add.text(W/2,H-28,'▶  JOGAR',{
      fontSize:'26px',fontFamily:'Arial Black',
      color:'#fff',stroke:'#1a2a0a',strokeThickness:4
    }).setOrigin(0.5,1);

    btn.on('pointerover',()=>this.tweens.add({targets:[btn,btnTxt],scaleX:1.08,scaleY:1.08,duration:100}));
    btn.on('pointerout', ()=>this.tweens.add({targets:[btn,btnTxt],scaleX:1,scaleY:1,duration:100}));
    btn.on('pointerdown',()=>{
      this.cameras.main.fade(600,0,0,0,false,(_,p)=>{
        if(p===1) this.scene.start('Level1Scene',{score:0});
      });
    });
    this.tweens.add({targets:btn,scaleX:1.03,scaleY:1.03,duration:900,yoyo:true,repeat:-1,ease:'Sine'});

    // ── Música procedural ───────────────────────────────────
    try {
      const ctx=new(window.AudioContext||window.webkitAudioContext)();
      // Melodia celta medieval simples
      const melody=[
        {f:392,d:0.4},{f:440,d:0.4},{f:523,d:0.5},{f:494,d:0.3},
        {f:440,d:0.4},{f:392,d:0.4},{f:349,d:0.6},{f:392,d:0.4},
        {f:440,d:0.4},{f:392,d:0.4},{f:349,d:0.4},{f:330,d:0.8},
      ];
      let idx=0;
      const playNote=()=>{
        if(!this.scene.isActive('MenuScene')) return;
        const {f,d}=melody[idx%melody.length]; idx++;
        const osc=ctx.createOscillator(); const gain=ctx.createGain();
        osc.connect(gain); gain.connect(ctx.destination);
        osc.type='triangle'; osc.frequency.value=f;
        gain.gain.setValueAtTime(0.07,ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.001,ctx.currentTime+d+0.1);
        osc.start(ctx.currentTime); osc.stop(ctx.currentTime+d+0.1);
        this.time.delayedCall((d+0.05)*1000,playNote);
      };
      this.input.once('pointerdown',()=>ctx.resume().then(()=>playNote()));
    } catch(e){}

    this.cameras.main.fadeIn(800);
  }
}
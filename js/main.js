const config = {
  type: Phaser.AUTO,
  width: 960,
  height: 540,
  backgroundColor: '#0d0d1a',
  physics: {
    default: 'arcade',
    arcade: { gravity: { y: 700 }, debug: false }
  },
  scene: [BootScene, MenuScene, Level1Scene, Level2Scene, Level3Scene, Level4Scene, GameOverScene, WinScene],
  scale: {
    mode: Phaser.Scale.FIT,
    autoCenter: Phaser.Scale.CENTER_BOTH
  }
};

const game = new Phaser.Game(config);

window.addEventListener('load', () => {
  setTimeout(() => {
    const c = document.querySelector('canvas');
    if(c){ c.setAttribute('tabindex','0'); c.focus(); }
  }, 500);
});

document.addEventListener('click', () => {
  const c = document.querySelector('canvas');
  if(c) c.focus();
});
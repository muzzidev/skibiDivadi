/*
//El dvadi original mide 800px x 550px en una pantalla de 1024px 
*/
let dvadi = document.getElementById("dvadi");
let juego = getComputedStyle(dvadi);
/* global Phaser */
const config = {
  type: Phaser.AUTO, //primero intenta usar WebGL, luego Canvas
  width: 800,
  height: 500,
  backgroundColor: '#00913f',
  parent: 'dvadi',
  pixelArt: true,
  physics: {
    default: 'arcade',
    arcade: {
      gravity: { y: 700 },
      debug: true
    }
  },
  
  scene: {
    preload, // se ejecuta para precargar recursos del juego
    create, // se ejecuta cuando se inicia
    update // se ejecuta cada frame
  }
}

new Phaser.Game(config);

function preload () {
  this.load.image('dvadi1', 'assets/dvadi1.png')
  this.load.image('floor', 'assets/floor.png')
}

function create () {

  this.floor = this.physics.add.staticGroup();

  this.floor
    .create(0, config.height-10, 'floor')
    .setOrigin(0, 0)
    .setScale(10)
    .refreshBody()
    
  this.dvadi1 = this.physics.add.image(0, config.height-30, 'dvadi1')
    .setOrigin(0, 1)
    .refreshBody()
    .setCollideWorldBounds(true)
    .setCircle(20, 0, 5)

  this.physics.add.collider(this.dvadi1, this.floor)

  this.keys = this.input.keyboard.createCursorKeys();
}

function update () {
  if (this.keys.left.isDown) {
    this.dvadi1.setVelocityX(-160);
  } else if(this.keys.right.isDown){
    this.dvadi1.setVelocityX(160);
  } else {
    this.dvadi1.setVelocityX(0);
  }
  if (this.keys.up.isDown && this.dvadi1.body.touching.down) {
    this.dvadi1.setVelocityY(-350);
  }

}

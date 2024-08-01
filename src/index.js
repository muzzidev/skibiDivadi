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
    default: 'matter',
    matter: {
      enableSleeping: true,
      gravity: { y: 9 },
      debug: {
        showBody: true,
        showStaticBody: true
      }
    }
  },
  scene: {
    preload, // se ejecuta para precargar recursos del juego
    create, // se ejecuta cuando se inicia
    update // se ejecuta cada frame
  }
}

const game = new Phaser.Game(config);

function preload () {
  this.load.image('dvadi1', 'assets/dvadi1.png')
  this.load.image('floor', 'assets/floor.png')
  this.load.image('pelota', 'assets/pelota.png')
}

function create () {
  this.matter.world.setBounds(0, 0, config.width, config.height)
  this.dvadi1 = this.matter.add.image(config.width-200, config.height-30, 'dvadi1');
  this.pelota = this.matter.add.image(0, 0, 'pelota');
  this.dvadi1.setFrictionAir(.2);
  this.dvadi1.setMass(20);
  this.dvadi1.setFixedRotation();

  this.keys = this.input.keyboard.createCursorKeys();
}

function update () {

  const speed = .2;

  if (this.keys.left.isDown) {
    this.dvadi1.setVelocityX(-4);
  } else if(this.keys.right.isDown){
    this.dvadi1.setVelocityX(4);
  }
  if (this.keys.up.isDown && this.dvadi1.getBottomCenter().y >= config.height) {
    let salto = new Vector(0, 1)
    this.dvadi1.applyForce(salto);
  }
  
}

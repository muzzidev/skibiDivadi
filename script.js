/*
//El dvadi original mide 800px x 550px en una pantalla de 1024px 
*/

/* global Phaser */

const config = {
  type: Phaser.AUTO, //primero intenta usar WebGL, luego Canvas
  width: .78*window.innerWidth,
  height: .9*window.innerHeight,
  backgroundColor: '#758',
  parent: 'dvadi',
  scene: {
    preload, // se ejecuta para precargar recursos del juego
    create, // se ejecuta cuando se inicia
    update // se ejecuta cada frame
  }
}

new Phaser.Game(config);

function preload () {
  console.log('preload');
  this.load.image(
    'placeholder1',
    './assets/placeholder1.png'
  )
}

function create () {
  console.log('create');
  this.add.image(10, 10, 'placeholder1')
  .setOrigin(0, 0)
  .setScale(5);
}

function update () {
  console.log('update');
}

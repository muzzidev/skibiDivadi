const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

let width = canvas.clientWidth;
let height = canvas.clientHeight;

//Declaro coordenadas del jugador
let x = width / 2;
let y = height;
let r = 20;

//Velocidades
let g = 9.8;
let v = 2;

//Booleanos que determinan en qué dirección se mueve
let LEFT, UP, RIGHT;

//Convertir grados a radianes
Math.radians = function (grados) {
  return (Math.PI / 180) * grados;
};

function drawPlayer(x, y, r) {
  ctx.beginPath();
  ctx.arc(x, y - r, r, 0, Math.radians(360));
  ctx.stroke();
  ctx.fill();
}

canvas.addEventListener("keydown", (e) => {
  switch (e.keyCode) {
    case 37:
      LEFT = true;
      break;

    case 38:
      UP = true;
      break;

    case 39:
      RIGHT = true;
      break;
  }
});
canvas.addEventListener("keyup", (e) => {
  switch (e.keyCode) {
    case 37:
      LEFT = false;
      break;

    case 38:
      UP = false;
      break;

    case 39:
      RIGHT = false;
      break;
  }
});

function move() {
  if (LEFT) {
    x -= v;
  }
  if (UP) {
    jump();
  }
  if (RIGHT) {
    x += v;
  }
}

function jump() {
  
}

//Límites del mapa
function bounds(){
  if (x >= width) {
    x -= v;
  }
  if (x <= 0) {
    x += v;
  }
}

//Main loop
function loop() {
  ctx.clearRect(0, 0, width, height);
  move();
  bounds();
  drawPlayer(x, y, r);
  requestAnimationFrame(loop);
}
requestAnimationFrame(loop);

const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

//Declaro coordenadas del jugador
let x = 0;
let y = 0;

//Booleanos que determinan en qué dirección se mueve
let LEFT, UP, RIGHT, DOWN;

//Convertir grados a radianes
Math.radians = function (grados) {
  return (Math.PI / 180) * grados;
};

function drawPlayer(x, y, r) {
  ctx.beginPath();
  ctx.arc(x, y, r, 0, Math.radians(360));
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

    case 40:
      DOWN = true;
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

    case 40:
      DOWN = false;
      break;
  }
});

function move() {
  if (LEFT) {
    x -= 3;
  }
  if (UP) {
    y -= 3;
  }
  if (RIGHT) {
    x += 3;
  }
  if (DOWN) {
    y += 3;
  }
}

//Main loop
function loop() {
  ctx.clearRect(0, 0, canvas.clientWidth, canvas.clientHeight);
  move();
  drawPlayer(x, y, 10);
  requestAnimationFrame(loop);
}
requestAnimationFrame(loop);

// module aliases
var Engine = Matter.Engine,
    Render = Matter.Render,
    Runner = Matter.Runner,
    Bodies = Matter.Bodies,
    Composite = Matter.Composite;

// create an engine
var engine = Engine.create();

var body = Matter.Body.create();
var vertices = Matter.Vertices.create([[]], body)

// create a renderer
var render = Render.create({
    element: document.body,
    engine: engine
});

var options = {
  restitution: .65
}


// create two boxes and a ground
var pelota = Bodies.circle(400, 200, 80, options, 80);
var ground = Bodies.rectangle(400, 610, 810, 60, { isStatic: true });

// add all of the bodies to the world
Composite.add(engine.world, [pelota, ground]);

// run the renderer
Render.run(render);

// create runner
var runner = Runner.create();

// run the engine
Runner.run(runner, engine);

// Click event
document.addEventListener("click", e => {
  Composite.add(engine.world, Bodies.circle(e.clientX, e.clientY, 80, options, 80));
})

// Update function
function update() {
  velocidadPelota = Matter.Body.getSpeed(pelota); 
  console.log(pelota.restitution);

  

  // Call update on the next frame
  requestAnimationFrame(update);
}

// Start the update loop
update();
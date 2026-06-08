import {Assets, Sprite} from "pixi.js";
import { buttonmaker } from "./clickableplacer";

export async function backgroundmaker(app) {
      // background
  const socials = await buttonmaker(app, "assets/socials.png", () => {
    window.location.href = "/public/locations/socials.html"
  })
  socials.scale.set(0.4)
  socials.anchor.set(-1.5)
  const texture = await Assets.load("assets/grass.png");
  const chintexture = await Assets.load("assets/chinchilla.png");
  const chinchilla = new Sprite(chintexture);

  const home =  await buttonmaker(app, "assets/myhome.png", () => {
    window.location.href = "/public/locations/home.html";
  });
  home.position.y = innerHeight - 390;
  app.stage.addChild(socials);
  app.stage.addChild(chinchilla);
  chinchilla.scale = 0.2;
  chinchilla.anchor.set(1,1)
  chinchilla.position.y = innerHeight - 40;
  chinchilla.position.x = 100;

  const grassarray = [];
  for (let i=0; i<10; i++) {
    const grass = new Sprite(texture);
    app.stage.addChild(grass);
    grass.anchor.y = 1;
    grass.position.x = i*grass.width;
    grass.position.y = innerHeight + 20;
    grassarray.push(grass);
  }
  chinchilla.eventMode = "static";
  let prevx = 0;
  let prevy = 0;
  let dx = 0;
  let dy = 0;
  let strengtx = 0;
  let strengty = 0;
  chinchilla.on("pointermove", (event) => {
    dx = event.x - prevx;
    dy = event.y - prevy;
    pickupstate = true;
    chinchilla.anchor.set(0.5);
    chinchilla.scale.x = 0.2 * turn;
    chinchilla.scale.y = 0.2;
    chinchilla.position.set(event.x, event.y) 
    chinchilla.rotation = Math.atan2(dy, dx)/5 + 0.1
    prevx = event.x;
    prevy = event.y;
  })
  chinchilla.on("pointerleave", () => {
    let a = 0;
    strengtx = dx;
    strengty = dy;
    chinchilla.rotation = 0;
    const onTick = () => {
      strengtx *= 0.99;
      strengty *= 0.95;
      chinchilla.position.y += a + strengty;
      chinchilla.position.x += strengtx;
      a += 0.1;
      if (chinchilla.position.y > innerHeight) {
        app.ticker.remove(onTick);
        chinchilla.anchor.set(1);
        strengtx = 0;
        strengty = 0;
        a = 0;
        pickupstate = false;
      }
    }
    app.ticker.add(onTick);
    })
  function walkcycle(dt) {
    if (chinchilla.position.x > innerWidth || chinchilla.position.x < 50) {
      turn *= -1;
      chinchilla.scale.x = 0.2 * turn;
    }
    if (chinchilla.position.x > innerWidth + 50) {
      chinchilla.position.x = innerWidth - 10;
    }
    if (chinchilla.position.x < -100) {
      chinchilla.position.x = 100;
    }
    chinchilla.position.x += 5 * turn * dt;
  }
  function squishcycle(x) {
    function easeInOutQuint(x) {
      return -(Math.cos(Math.PI * x*3) - 1) / 2;
    }
    chinchilla.scale.y = 0.2 - easeInOutQuint(x)/10
    frame += 1 * frameturn;
    if (frame > 100 || frame < 0) {
      frameturn *= -1
    }
  }
  let turn = 1;
  let frameturn = 1;
  let pickupstate = false;
  let frame = 0;
  app.ticker.add((time) => {
    time.maxFPS = 60;
    if (pickupstate == false) {
      walkcycle(time.deltaTime);
      squishcycle(frame/100)
      chinchilla.position.y = innerHeight - 40;
    }
    for (let grass of grassarray) {
      grass.position.y = innerHeight + 20;
      home.position.y = innerHeight - 390;
      socials.position.y = innerHeight - 390;
      socials.position.x = 200
    }
  })
}
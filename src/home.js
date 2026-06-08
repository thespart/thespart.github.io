import { Application, Assets, Sprite, v8_0_0 } from "pixi.js";
import { pickablemaker, buttonmaker } from "./clickableplacer";

function checkAABBCollision(sprite1, sprite2) {
    const bounds1 = sprite1.getBounds();
    const bounds2 = sprite2.getBounds();

    return bounds1.x < bounds2.x + bounds2.width &&
           bounds1.x + bounds1.width > bounds2.x &&
           bounds1.y < bounds2.y + bounds2.height &&
           bounds1.y + bounds1.height > bounds2.y;
}

(async () => {
  const app = new Application();
  await app.init({ backgroundAlpha: 0, resizeTo: window });
  document.getElementById("pixi-container").appendChild(app.canvas);
  const flowe = new Sprite(await Assets.load("/public/assets/flowe.png"));
  const bookshell = new Sprite(await Assets.load("/public/assets/polka.png"));
  const stol = new Sprite(await Assets.load("/public/assets/stol.png"));
  const door = await buttonmaker(app, "/public/assets/door.png", () => {
    window.location.href = "/index.html"
  });
  app.stage.addChild(bookshell);
  app.stage.addChild(stol);
  app.stage.addChild(flowe);
  const meat = await pickablemaker(app, "/public/assets/meat.png");
  const myself = await buttonmaker(app, "/public/assets/myself.png", () => {
    window.location.href = "https://gdbrowser.com/u/TheSpart"
  });
  const lavasast = await buttonmaker(app, "/public/assets/lavacast.png", () => {
    window.location.href = "https://lavacast.ru"
  });
  bookshell.anchor.set(0.5);
  bookshell.scale.set(1.8);
  stol.scale.set(2);
  bookshell.position.set(innerWidth*0.4, innerHeight/2);
  meat.position.set(innerWidth*0.4 - 120, innerHeight/2 - 150);
  lavasast.position.set(innerWidth*0.4 - 150, innerHeight/2 - 50);
  myself.position.set(innerWidth*0.4 + 50, innerHeight/2 - 240);
  stol.position.set(innerWidth*0.4 + 500, innerHeight/2);
  door.position.set(innerWidth*0.4 - 750, innerHeight/2 - 200);
  flowe.position.set(innerWidth*0.4 + 600, innerHeight/2 - 200);
  meat.scale.set(0.4);
  flowe.scale.set(0.5);
  lavasast.scale.set(0.8);
  myself.scale.set(0.5);

  window.addEventListener("resize", () => {
    bookshell.position.set(innerWidth*0.4, innerHeight/2);
    meat.position.set(innerWidth*0.4 - 120, innerHeight/2 - 150);
    myself.position.set(innerWidth*0.4 + 50, innerHeight/2 - 240);
    stol.position.set(innerWidth*0.4 + 500, innerHeight/2);
    door.position.set(innerWidth*0.4 - 750, innerHeight/2 - 200);
  });
  meat.on("pointermove", () => {
    if (checkAABBCollision(meat, flowe)) {
        meat.destroy();
        console.log("ooo")
        window.location.href = "/public/locations/flowe.html";
    }
  })
})();

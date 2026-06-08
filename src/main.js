import { Application, Assets, Sprite } from "pixi.js";
import { backgroundmaker } from "./background";


(async () => {
  const app = new Application();
  await app.init({ backgroundAlpha: 0, resizeTo: window });
  document.getElementById("pixi-container").appendChild(app.canvas);
  backgroundmaker(app);
})();

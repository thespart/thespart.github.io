import {Assets, Sprite} from "pixi.js";

export async function buttonmaker(app, url, functodo) {
    const texture = await Assets.load(url);
    const button = new Sprite(texture);
    app.stage.addChild(button);
    button.eventMode = "static";
    button.on("pointerenter", () => {
        button.tint = 0xaaaaaa;
    })
    button.on("pointerleave", () => {
        button.tint = 0xffffff;
    })
    button.on("click", functodo);
    return button;
}
export async function pickablemaker(app, url) {
    const texture = await Assets.load(url);
    const pickable = new Sprite(texture);
    pickable.anchor.set(0.5);
    app.stage.addChild(pickable);
    pickable.eventMode = "static";
    const mousepos = {
        prevx: 0,
        prevy: 0,
        dy: 0,
        dx: 0,
        strengtx: 0,
        strengty: 0,
    };
    pickable.on("pointermove", (event) => {
        mousepos.dx = event.x - mousepos.prevx;
        mousepos.dy = event.y - mousepos.prevy;
        pickable.position.set(event.x, event.y)
        pickable.anchor.set(0.5);
        pickable.rotation = Math.atan2(mousepos.dy, mousepos.dx)/5 + 0.1
        mousepos.prevx = event.x;
        mousepos.prevy = event.y;
    });
    pickable.on("pointerleave", () => {
        let a = 0;
        mousepos.strengty = mousepos.dy;
        mousepos.strengtx = mousepos.dx;
        pickable.rotation = 0;
        const onTick = () => {
            mousepos.strengtx *= 0.99;
            mousepos.strengty *= 0.95;
            pickable.anchor.set(1);
            pickable.position.y += a + mousepos.strengty;
            pickable.position.x += mousepos.strengtx;
            a += 0.1;
            if (pickable.position.y > innerHeight) {
                app.ticker.remove(onTick);
                mousepos.strengtx = 0;
                mousepos.strengty = 0;
                a = 0;
            }
        }
        app.ticker.add(onTick);
    });
    return pickable;
}
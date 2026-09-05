const stuffColumn = document.querySelector("#others ul");
const gifviewer = document.querySelector("#gif");
const divdesc = document.querySelector("#description");
const blankscreen = document.querySelector("#black");
const loadingtext = document.querySelector("h1");
const leftbutton = document.querySelector("#left");
const rightbutton = document.querySelector("#right");
const whitenoise = document.querySelector("#gif[src='/content/white.gif']");
const countdiv = document.querySelector("#count");
const hash = window.location.hash;
const kolvostuff = 20;
let latest = Number(hash.replace("#", "")) ?? 0;


const descriptions = {
    1: "i have a friend named Cu6e and i really wanted to make gif with him. So one day i asked for his permission to use his icon and after a week of thinking i ended up making that. I made 2 shots of my real life figure of wrinkler and then animated everything in flash 8",
    2: "i wanted to make very kul gif. firstly i made cube jumping on the tramplin, then i added a rifle, and then bank. only becuz i thought it kul",
    3: "kris taking shots with her camera in jungle, nothing more",
    4: "markys really dislikes mr proper. so i gave him a stick and freedom",
    5: "my very first gif, it was inspired by cyriak's work and made it krita (others were made in flash 8). you can see shashka working and jorik (cat in tazik) falls off from the pipe",
    6: "originally made for my channel logo, but its more than logo",
    7: "me and radioactivy running from 2003devin, yeap it strange, but kul",
    8: "CHICHILLA JUMPING AND HAVING FUN :DDDDDD",
    9: "car crossing infinity greenfields",
    10: "zeroud having fun on dirigablya",
    11: "i wanted to make animation where my OC running with portal gun, but krita weren't great tool for that. 2022 btw",
    12: "i dont really like this, i mean. it was supposed to look way better than this",
    13: "my first gif made for subcriber. my channel had 10 subcribers at the moment and i had an idea to make a gif for that subcriber. it was themed 'labyrinth of faun' or idk i dont remember",
    14: "my second commision for subcriber. basically zeroud (guy eating mushroom), cu6e and markys (guys at bg). you can remember them in others gifs aswell",
    15: "cat eating cat. life is strange thing",
    16: "my first animation made in after effects cs6, loved that so much i made gif of this",
    17: "moment from my animation, you can watch it in my Newgrounds!",
    18: "monster eating monster. life is strange thing",
    19: "i had this idea since 2024 and just made it. Could be a good ad for some deodorant",
    20: "one person and too many eyes. Take it however you want i dont care",
}

showGIF(latest);
let loaded = 0;
function showGIF(i) {
    countdiv.textContent = i+1;
    latest = i;
    window.location.hash = i;
    setTimeout(() => {
        gifviewer.classList.add("playBlink");
        whitenoise.classList.add("playWhiteNoise");
    }, 10);
    gifviewer.classList.remove("playBlink");
    whitenoise.classList.remove("playWhiteNoise");
    
    gifviewer.src = "./content/" + (latest+1) + ".gif";
        divdesc.textContent = descriptions[latest+1];
}

function getImages(amount, format) {
    const content = [];

    for (let i=0; i<amount; i++) {
        content.push("./content/" + (i+1) + "." + format);
    }
    return content;
}

function addColumn(content, i) {

    const elementli = document.createElement("li");

    elementli.addEventListener("click", () => {
        showGIF(i);
    });
    const elementimg = document.createElement("img");
    elementimg.alt = "cool gif"
    elementimg.src = content.image;
    if (loaded == kolvostuff) {
        loadingtext.style.display = 'none';
    }
        elementimg.addEventListener('load', () => {
            console.log(elementimg.src, "loaded", loaded);
            loaded++;
            loadingtext.textContent = `loading... ${loaded}/20`;
            if (loaded == kolvostuff) {
                loadingtext.style.display = 'none';
            }
        });
    elementli.appendChild(elementimg);
    stuffColumn.appendChild(elementli);
}
const preview = getImages(kolvostuff, "gif");

for (let i=0; i<kolvostuff; i++) {
    addColumn({image: preview[i]}, i);
}
rightbutton.addEventListener("click", () => {
    if (latest >= 0 && latest < kolvostuff-1) {
        latest++
        showGIF(latest);
    } else {
        latest = 0;
        showGIF(latest);
    }
    console.log(latest)
})

leftbutton.addEventListener("click", () => {
    if (latest > 0 && latest <= kolvostuff-1) {
        latest--
        showGIF(latest);
    } else {
        latest = kolvostuff-1;
        showGIF(latest);
    }
    console.log(latest)
})

document.querySelector("#tv").addEventListener("pointerenter", () => {
    divdesc.classList.remove("playFadeout");
    setTimeout(() => {
        divdesc.classList.add("playFadein");
    }, 5);
    
})

document.querySelector("#tv").addEventListener("pointerleave", () => {
    divdesc.classList.remove("playFadein");
    setTimeout(() => {
        divdesc.classList.add("playFadeout");
    }, 5);
})

document.addEventListener("readystatechange", function () {
  if (document.readyState === "complete") {
    // Initialize script
    const f = new FreezeImages({noCss: false, smoothing: false});
  }
});
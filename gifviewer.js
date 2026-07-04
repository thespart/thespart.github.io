const stuffColumn = document.querySelector("#others ul");
const gifviewer = document.querySelector("#gif img");
const divdesc = document.querySelector("#description p");
const blankscreen = document.querySelector("#black");
const loadingtext = document.querySelector("#gif p");
const leftbutton = document.querySelector("#buttons #left");
const rightbutton = document.querySelector("#buttons #right");
const kolvostuff = 17;

let latest = Number(localStorage.getItem("choose"));;

blankscreen.classList.add("unblack");

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
}

showGIF(latest);
function showGIF(i) {
    latest = i;
    gifviewer.src = "./content/" + (latest+1) + ".gif";
        divdesc.textContent = descriptions[latest+1];
        if (gifviewer.complete) {
            console.log(gifviewer.src, "loaded");
            loadingscreen(true);
        } else {
            loadingscreen(false);
            gifviewer.addEventListener('load', () => {
                loadingscreen(true);
            });
        }
}
// spasi
function loadingscreen(loaded) {
    if (loaded == true) {
        blankscreen.classList.add("unblack");
        blankscreen.classList.remove("doblack");
        loadingtext.classList.add("unblack");
        loadingtext.classList.remove("doblack");
    } else {
        blankscreen.classList.remove("unblack");
        blankscreen.classList.add("doblack");
        loadingtext.classList.remove("unblack");
        loadingtext.classList.add("doblack");
    }
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

    elementli.addEventListener("pointerenter", () => {
        showGIF(i);
    });
    const elementimg = document.createElement("img");
    elementimg.alt = "cool gif"
    elementimg.src = content.image;
    elementli.appendChild(elementimg);
    stuffColumn.appendChild(elementli);
}
const preview = getImages(kolvostuff, "jpeg");

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
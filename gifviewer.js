const stuffColumn = document.querySelector("#others ul");
const gifviewer = document.querySelector("#gif img");
const divdesc = document.querySelector("#description p");
const kolvostuff = 10;

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
        gifviewer.src = "./content/" + (i+1) + ".gif";
        divdesc.textContent = descriptions[i+1];
    })
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
const stuffColumn = document.querySelector("#info #tab ul");
const kolvostuff = 16;
function getImages(amount) {
    const content = [];

    for (let i=0; i<amount; i++) {
        content.push("./content/" + (i+1) + ".jpeg");
    }
    return content;
}
function addColumn(content, i) {

    const elementli = document.createElement("li");
    const elementDate = document.createElement('a');
    elementDate.href = "./gifwatcher.html"
    elementDate.textContent = "watch"
    elementDate.id = i;

    const elementimg = document.createElement("img");
    elementimg.src = content.image;
    elementli.appendChild(elementimg);

    elementli.appendChild(elementDate);
    stuffColumn.appendChild(elementli);
}
const content = getImages(kolvostuff);
for (let i=0; i<kolvostuff; i++) {
    addColumn({image: content[i]}, i)
}
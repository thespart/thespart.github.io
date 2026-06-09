const stuffColumn = document.querySelector("#info #tab ul");
const kolvostuff = 10;
function getImages(amount) {
    const content = [];

    for (let i=0; i<amount; i++) {
        content.push("./content/" + (i+1) + ".gif");
    }
    return content;
}
function addColumn(content) {

    const elementli = document.createElement("li");
    const elementDate = document.createElement('a');
    elementDate.href = "./gifwatcher.html"
    elementDate.textContent = content.date;
    elementDate.id = "date";

    const elementimg = document.createElement("img");
    elementimg.src = content.image;
    elementli.appendChild(elementimg);

    elementli.appendChild(elementDate);
    stuffColumn.appendChild(elementli);
}

for (let i=0; i<kolvostuff; i++) {
    const content = getImages(kolvostuff);
    addColumn({image: content[i], date: "watch"})
}
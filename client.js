const newsColumn = document.querySelector("#news ul");


function addColumn(content) {

    const elementli = document.createElement("li");
    const elementDate = document.createElement('p');
    elementDate.textContent = content.date;
    elementDate.id = "date";

    const elementp = document.createElement('p');
    elementp.textContent = content.text;
    elementli.appendChild(elementp);

    elementli.appendChild(elementDate);
    newsColumn.appendChild(elementli);
}
addColumn({text: "updated site a little, maybe i will remake it one day", date: "01.06.2026"});
addColumn({text: "also im planning to add info to every of my gifs so you could know why i made em :D", date: "27.04.2026"});
addColumn({text: "Hello everyone visitors! WELCUM TO MA WEBSITE !!! I will post here sometimes but don't expect me to be very active... or maybe i'll be :)))", date: "25.04.2026"});



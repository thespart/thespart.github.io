const sashkadom = document.querySelector("body header #maininfo #logo #megalogo img");
const news = document.querySelector("body main #rightpart #news");
const newsElement = document.querySelector('body main #rightpart #manipulator li input');
const rightbutton = document.querySelector('body main #rightpart #manipulator li #right');
const leftbutton = document.querySelector('body main #rightpart #manipulator li #left');
const dialogdom = document.querySelector('#quote');
const triangle = document.querySelector('#triangle');
let delta = 0;
let prevscroll = 0;
let toadd = 0;
window.addEventListener('scroll', () => {
    const scrollTop = window.scrollY;
    delta = (scrollTop - prevscroll);
    d -= delta*0.5;
    toadd = delta;
    prevscroll = scrollTop;
})
let b = 0;
let d = 0;
setInterval(() => {
    toadd > 0 ? b += 0.1: b -= 0.1;
    b += toadd*0.1;
    toadd *= 0.99;
    document.documentElement.style = `background-position: ${b}px ${d}px;`;
}, 10);

import Quotes from "./quotes.js";
const openSound = new Audio('/content/openup.mp3');
const dialogaccess = 1;
let clicks = 0;
let clickable = true;
let passcode = '000000';
let Randomizer = (min, max) => {return Math.floor(Math.random() * (max - min + 1)) + min;}
sashkadom.addEventListener("click", () => {
    if (clickable) {
        clickable = false;
        sashkadom.classList[0] == "animateSpinner" ? sashkadom.classList.remove("animateSpinner") : sashkadom.classList.add("animateSpinner"); effects();
        setTimeout(() => {sashkadom.classList.remove('animateSpinner'); clickable=true}, 1000);
        if (clicks++ > (dialogaccess)) {
            dialog(Randomizer(0, Quotes.length));
        }
    }
})

let count = 0;
const effects = () => {
    if (count > 60) {
        count = 0;
        return;
    }
    count++;
    sashkadom.style.filter = `brightness(${200-count*1.67}%)`;
    requestAnimationFrame(effects);
}
const initialQLength = Quotes.length;
let safeQuotes = [];
Quotes.forEach(el => safeQuotes.push(el));
const NewsJSON = [
    {s: 'school sux', t: 'im going to have exams very soon and school starts in 2days. No fun anymore. Life is ruthless. also i made cool cards check them', d: "30.08.2026"},
    {s: 'Expressiveness', t: "it just started to look beatiful. Animation tab is updated. I really want to make gallery with all of my nice artworks, but i can't do that without making my website weigh 200 gigabytes. So for now it will redirect to my newgrounds page.", d: "28.08.2026"},
    {s: 'Site Upgrade',t: 'After really long time (2 months) i finally made website look better and now it mobile friendly (<i>kind of</i>) and greenish.. hooray! If u want to see old version <a href="https://web.archive.org/web/20260523083019/https://thespart.ru/">check wayback machine</a>, but for some reason it shows incorrectly and i dont really care. Also, <b>+3 new gifs.</b> Planning to update gifwatcher since it pain to use both on pc and phonr',d: '09.08.2026'},
    {s: 'b',t: 'водитель маршрутки',d: '05.07.2026'},
    {s:'Tennis gaem',t: '<a href="https://thespart.ru/tennisball">added new game </a>(its still in beta), andddd in 2 days im going to have birthday :DDDDD!!!!! im going to be XX yo',d: '26.06.2026'},
    {s: 'Mint chat is gone',t: 'after a while mint chat has died. very sad. also check out my new gifs',d: '19.06.2026'},
    {s: 'GIFS update',t: "added info to every gif now you can see on what drug i've been while making them",d: '09.06.2026'},
    {s: 'Little update',t: 'updated site a little, maybe i will remake it one day',d: '01.06.2026'},
    {s: 'GIFS plans',t: 'also im planning to add info to every of my gifs so you could know why i made em :D',d: '27.04.2026'},
    {s: 'Initialization',t: "Hello everyone visitors! WELCUM TO MA WEBSITE !!! I will post here sometimes but don't expect me to be very active... or maybe i'll be :)))",d: '25.04.2026'},
]

// createElement p=parent e=element
function c(e) {
    return document.createElement(`${e}`);
}

//appendchild p=parent e=element
function a(p, e) {
    return p.appendChild(e);
}

function dialog(r) {
    if (clicks - 2 == dialogaccess) {
        setTimeout(() => {
            dialogdom.classList.add('animateDialogAppearence');
            triangle.classList.add('animateDialogAppearence');
            openSound.play();
            setTimeout(() => {dialogdom.style = 'opacity: 1;'; triangle.style = "opacity: 1;"}, 1000);
            dialogdom.firstElementChild.textContent = Quotes[r];
            Quotes.splice(r, 1);
        }, 1000)
        
    } else if (clicks - 2 > dialogaccess) {
         dialogdom.classList.add('animateOpacity');
         triangle.classList.add('animateOpacity');
         setTimeout(() => { dialogdom.classList.remove('animateOpacity'); triangle.classList.remove('animateOpacity'), 999 })
         dialogdom.firstElementChild.textContent = Quotes[r];
         Quotes.length > 0 ? Quotes.splice(r, 1) : safeQuotes.forEach(el => Quotes.push(el));
         // если ему нечего сказать 
         if (Quotes.length == initialQLength) {dialogdom.firstElementChild.textContent = "i dont have anything new to say. congrats"}
         console.log(Quotes, safeQuotes);
    }
}

// самая страшная функция, да может с реактом или jquery было бы в сто раз
// быстрее, но мне лень
function addNews(data) {
    const subject = data.s;
    const text = data.t;
    const date = data.d;

    const about = a(news,c('div'));
    const header = a(about, c('h1'));
    a(about, c('div')).classList.add('separator');
    about.id = "about";
    header.textContent = subject;
    about.innerHTML += `<h2>${text}</h2>`
    about.innerHTML += `<h2 id="date">${date}</h2>`
    return about;
}
// news per page
const NPP = 10;
let prevnewsvalue = 0;
let currentnews = 1;
function addnNews(newsNumber) {
    for (let i=0; i < NPP; i++) {
        if (i + (newsNumber-1)*NPP >= NewsJSON.length) {break};
        addNews(NewsJSON[i + (newsNumber-1)*NPP]);
    }
}
function changeNews() {
    if (currentnews < 1) {currentnews = 1}
    if (currentnews > Math.ceil(NewsJSON.length/NPP)) {currentnews = Math.ceil(NewsJSON.length/NPP)};
    const elements = document.querySelectorAll("#rightpart #about");
    elements.forEach(el => el.remove());
    if (prevnewsvalue != currentnews) {news?.scrollTo()};
    addnNews(currentnews);
    prevnewsvalue = currentnews;
    newsElement.value = currentnews + `/${Math.ceil(NewsJSON.length/NPP)}`;
}
newsElement?.addEventListener('input', () => {
    if (currentnews < 1) {currentnews = 1}
    if (currentnews > Math.ceil(NewsJSON.length/NPP)) {currentnews = Math.ceil(NewsJSON.length/NPP)};
})
newsElement?.addEventListener('change', () => {
    changeNews();
})
rightbutton?.addEventListener('click', () => {
    currentnews++;
    changeNews();
})
leftbutton?.addEventListener('click', () => {
    currentnews--;
    changeNews();
})
changeNews();
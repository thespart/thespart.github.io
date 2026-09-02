const pickdiv = document.querySelector("#pick ul");
const now = new Date();
let day = localStorage.getItem('day') ?? 8;

const hours = now.getHours();
const minutes = now.getMinutes();
const seconds = now.getSeconds();
const formateTime = (h, m, s) => {
    return `${String(h).padStart(2, '0')}:${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`;
}

const cardsbefore = JSON.parse(localStorage.getItem('cards'));
class Card {
    constructor(element, rarity) {
        this.element = element;
        this.rarity = rarity;
    }
}
const RarityList = [
    {t: 'regular', s: '/content/1.png', r: 0.4, c: '#718f65'},
    {t: 'kul one', s: '/content/2.png', r: 0.1, c: '#65868f'},
    {t: 'awesum', s: '/content/3.png', r: 0.03, c: '#8f6565'},
    {t: 'nic', s: '/content/4.png', r: 0.01, c: '#4d1c57'},
    {t: 'watahed', s: '/content/5.png', r: 0.003, c: '#e3e3e3'},
    {t: 'OMG!!111', s: '/content/6.png', r: 0, c: '#101010'},
]
function loadbefore() {
    for (let i=0; i<6; i++) {
        const rarity = cardsbefore[i].rarity;
        const car = new Card(createCard(), rarity.r);
        console.log(cardsbefore[i]);
        car.element.style = `background: ${rarity.c}`;
        car.element.querySelector('img').src = rarity.s;
        car.element.querySelector('p').textContent = rarity.t;
        car.element.querySelector('p').style.color = rarity.c;
    }
}
const cards = {};
function init() {
    for (let i=0; i<6; i++) {
        const rarity = applyRarity();
        const car = new Card(createCard(), rarity);
        car.element.style.display = 'none'
        cards[i] = car;
        setTimeout(() => {
            car.element.style.display = 'block'
            car.element.style = `background: ${rarity.c}`;
            car.element.querySelector('img').src = rarity.s;
            car.element.querySelector('p').textContent = rarity.t;
            car.element.querySelector('p').style.color = rarity.c;
            car.element.classList.add('animateAppearance');
            setTimeout(() => {
                car.element.classList.remove('animateAppearance');
            }, 500);
        }, i*200);
    }
    console.log(cards)
    return cards;
}
function applyRarity() {
    let bet = Math.random();
    for (let i=0; i<RarityList.length; i++) {
        if (bet < RarityList[i].r) {
            continue;
        } else {
            return RarityList[i];
        }
    }
}
function createCard() {
    const wrap = document.createElement('div');
    const el = document.createElement('div');
    wrap.addEventListener('mousemove', (e) => {
        const rect = wrap.getBoundingClientRect();
        const x = e.clientX - rect.left; 
        const y = e.clientY - rect.top;  
        
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        
        const rotateX = -((y - centerY) / centerY) * 30; 
        const rotateY = ((x - centerX) / centerX) * 30;
        
        el.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.2)`;
        el.style.filter = `brightness(${50 + (200 - x - y)/2}%)`;
    });

    wrap.addEventListener('mouseleave', () => {
        el.style.zIndex = '1';
        el.style.transform = 'rotateX(0deg) rotateY(0deg) scale(1)';
        el.style.filter = `brightness(100%)`;
        el.style.transition = 'transform 0.5s ease';
        
    });

    wrap.addEventListener('mouseenter', () => {
        el.style.transition = 'none'; 
        el.style.zIndex = '99';
    });

    const imgel = document.createElement('img');
    imgel.width = 85;
    imgel.height = 85;
    const text = document.createElement('p');
    wrap.appendChild(el);
    el.appendChild(imgel);
    el.appendChild(text);
    pickdiv.appendChild(wrap);
    return el;
}
console.log(localStorage.getItem('day'), day)
if (day != new Date().getDay()) {
    document.querySelector('#pick button').addEventListener('click', () => {
        localStorage.setItem('cards', JSON.stringify(init()));
        localStorage.setItem('day', new Date().getDay());
        document.querySelector('#pick button').style.display = 'none';
    })

} else {
    loadbefore();
    document.querySelector('#pick button').style.display = 'none';
}
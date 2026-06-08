const quote = document.querySelector("#quote h2");
const quotes = [
    "hthhrehehthgggg...",
    "FEWFEFFHGGHHGHGHGADSASSSSSSSSAAGH",
    "gghhghhh.... brrr.. aaa",
    "ASASFDSFL:SFSGGHJGHTHHJGGDKNGJMNDJGNHDJJKJTHTHTHTJJ",
    "hghghhhhhhggggggghghgsfssdsssdd, brr, wwww",
    "ASbgbghghpttryreryryyryryryrcbbf",
    "well",
    "SDSDS DSWEEWE SDSDF KDKFK LDSLDWEOWO PSDPDOSPOPIW",
    "AAAAAAAAAA AAA AA AAAAAAAAAAAAAAAAAA AAA",
    "brrr br rrr brbrbrbrbbrb brbrbrbr rrrrr",
    "pollos",
    "hell o",
    "hrr.... rhrhr...",
    "ewrew"
]
function Randomizer(min, max) {
    return Math.ceil(Math.random() * (max - min) - min)
}


quote.textContent = `"${quotes[Randomizer(1,quotes.length + 1)]}"`
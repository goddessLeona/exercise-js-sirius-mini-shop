//Uppgift 1 : Byt namn på första hoodien från Ash till Potato.

const potato = document.createElement("h3");
potato.innerText = "Potato";

const tShirt1 = document.querySelector(".art-1");
console.log(tShirt1)

const oldh3 = document.querySelector("h3")

tShirt1.replaceChild(potato, oldh3);

// Uppgift 2 : Byt namn på Home till Start.


const navmeny = document.querySelector("nav");
console.log(navmeny);

const oldAtag = document.querySelector("a")

const menyA = navmeny.innerHTML;
const newAtag = `<a href="#">Start</a>`;
console.log(newAtag)



//navmeny.insertAdjacentHTML("beforeend", newAtag);
//console.log(navmeny)
//navmeny.remove(navmeny.firstElementChild)


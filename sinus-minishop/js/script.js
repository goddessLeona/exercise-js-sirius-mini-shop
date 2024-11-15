//Uppgift 1 : Byt namn på första hoodien från Ash till Potato.

const potato = document.createElement("h3");
potato.innerText = "Potato";

const tShirt1 = document.querySelector(".art-1");
const oldh3 = document.querySelector("h3")

tShirt1.replaceChild(potato, oldh3);

// Uppgift 2 : Byt namn på Home till Start.


const navmeny = document.querySelector("nav");
navmeny.removeChild(navmeny.firstElementChild);

const menyA = navmeny.innerHTML;
const newAtag = `<a href="#">Start</a>`;

navmeny.insertAdjacentHTML("afterbegin", newAtag);



// Uppgift 3: Byt namn på Contact till Mail Us.

// Uppgift 4: Byt ut informationen om Sinus Hoodie - Fire.

const tShirt2 = document.querySelector(".art-2");

const newText = document.createElement("p");
newText.innerText = "This is a very red T-shirt that fit every one that like red"


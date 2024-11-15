//Uppgift 1 : Byt namn på första hoodien från Ash till Potato.

const potato = document.createElement("h3");
potato.innerText = "Potato";

const tShirt1 = document.querySelector(".art-1");
const oldh3 = document.querySelector("h3")

tShirt1.replaceChild(potato, oldh3);

// Uppgift 2 : Byt namn på Home till Start.


const navmeny = document.querySelector("nav");
navmeny.removeChild(navmeny.firstElementChild);

const newAtag = `<a href="#">Start</a>`;

navmeny.insertAdjacentHTML("afterbegin", newAtag);

// Uppgift 3: Byt namn på Contact till Mail Us. (fick hjälp)

const allAtagars = document.querySelectorAll("a");
allAtagars[2].innerText = " Mail Us"


// Uppgift 4: Byt ut informationen om Sinus Hoodie - Fire.

const tShirt2 = document.querySelector(".art-2");
const allPtagar = document.querySelectorAll("p");
const secondP = allPtagar[1];

const newText = document.createElement("p");
newText.innerText = "This is a very red T-shirt that fit every one that like red"

tShirt2.replaceChild(newText, secondP);

// Uppgift 5: Byt bakgrundsfärg och text på en knapp.

const newbutton = document.createElement("button");
newbutton.innerText = "Consume";

const odlbuttons = document.querySelectorAll("button");
const oldbutton = odlbuttons [1]
tShirt2.replaceChild(newbutton, oldbutton);

newbutton.style.backgroundColor = "red";
newbutton.style.color = "black";

// Uppgift 6: Byt bakgrundsfärg på någon av produkterna.

const oldImage = document.querySelectorAll("figure");
const newFigure = oldImage [0];

newFigure.style.backgroundColor = "pink";

// Uppgift 7: Byt ut adressen på sidan.

const oldArtical = document.querySelectorAll("article");
const newArticale = oldArtical [4];

newArticale.removeChild(newArticale. lastElementChild)

const newAddress = `<p> Sinus Skateboards <br> Någonstans 45 <br> Någonstans malmö </p> `

newArticale.insertAdjacentHTML("beforeend", newAddress);

// Uppgift 8: Byt färg på samtliga <p>. (fick hjälp)

const colorPtag = document.querySelectorAll("p");

colorPtag.forEach((item) =>{
    item.style.color = "green"
})
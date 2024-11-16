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

// Uppgift 9: Ändra text på samtliga knappar till add to cart. (fick hjälp)

const allButtons = document.querySelectorAll("button");

allButtons.forEach((button) =>{
    button.innerText = "Add to cart"
})

// Uppgift 10: Lägg till classen active på menyalternativet home.

const atagHome = allAtagars[3];
atagHome.setAttribute("class", "active");

// Uppgifte 11: Ta bort classen logo på logotypen.

const logo = document.querySelector(".logo");
const classes = logo.classList;// do not know how to use, so used other option

logo.removeAttribute("class", "logo");

// Uppgift 12: Lägg till ett nytt menyalternativ.

const allArticales = document.querySelectorAll("article");
const Menyarticale = allArticales[3];

const extraTreats = document.createElement("a");
extraTreats.innerText = "Extra treats";

Menyarticale.insertAdjacentElement("beforeend", extraTreats)


// Uppgift 13: Lägg till en ny produkt med följande info.

const newArticaleTshirt = document.createElement("article");
const mains = document.querySelector("main");

newArticaleTshirt.setAttribute("class", "art-4");
mains.insertAdjacentElement("beforeend", newArticaleTshirt);

const newTshirtInfo = document.querySelector(".art-4");

newpruduct = `<figure><img src="img/hoodie-forrest.png" alt="hoodie4"></figure><h2>Sinus hoodie</h2><h3>Forest</h3><p>A green forest t-shir to wear when you like to melt in with the forest...</p><button>Add to cart</button>`;
newTshirtInfo.insertAdjacentHTML("afterbegin", newpruduct);

// Uppgift 14 :Lyssna efter ett klick på logotypen (.logo). När den registrerar ett klick skall du console.log:a "found you!";
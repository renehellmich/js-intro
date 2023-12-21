
// * Aufbau

// * Eventlistener hinzufügen
// myBtn.addEventListener()

// * Event definieren
// myBtn.addEventListener("click")

const myBtn = document.querySelector("#button-hello");
const output = document.querySelector("#output");

myBtn.addEventListener("click", () => {
    output.innerHTML = "Hallo";
})

// * ===== MouseOver ======

const textInput = document.querySelector("#text-input");
textInput.addEventListener("mouseover", () => {
    console.log("Die Maus wurde über mich bewegt");
    textInput.style.border = "3px solid red"
})

// * ==== MouseOut ===

textInput.addEventListener("mouseout", ()=> {
    console.log("Die Maus hat mich verlassen");
    textInput.style.border = "3px solid blue"
})

// * ==== Change ====

const selectInput = document.querySelector("#select-input");
const selectOuput = document.querySelector("#select-output");

selectInput.addEventListener("change", () => {
    console.log("ich werde verändert");
    selectOuput.innerHTML = selectInput.value;
    selectOuput.style.color = "red";
})

// * === keypress ==== 

const username = document.querySelector("#username").addEventListener("keypress", () => {
    const user = document.querySelector("#user")
    user.style.backgroundColor ="red";
    user.style.color = "blue";
})

// * ===== keyup =====

const hacker = document.querySelector("#hacker");
const log = document.querySelector("#log");

hacker.addEventListener("keyup", logKey)

function logKey(event) {
    console.log(event.code);
}

// ! Externer EventListener
// * wir können die Function erstmal auslagern, damit wir das Ganze genereller halten können.


const list = document.querySelector("#myList")
console.log(list);
// console.dir(list);

const firstChildOfList = list.firstElementChild.innerHTML;
const lastChildOfList = list.lastElementChild.innerHTML;

const siblingElementOfList = list.firstElementChild.nextElementSibling.innerHTML;
console.log(siblingElementOfList);

console.log(firstChildOfList, lastChildOfList);

// * HTMLCollection

const liElementeToArray = list.children;
console.log(liElementeToArray);

const liElementeToArrayUmwandeln = Array.from(liElementeToArray)
console.log(liElementeToArrayUmwandeln);

liElementeToArrayUmwandeln.forEach((singleElement) => {
    singleElement.style.color = "purple";
})

liElementeToArrayUmwandeln[0].innerHTML = "Salat";
liElementeToArrayUmwandeln[0].style.color = "red";

const firstChild = liElementeToArrayUmwandeln[0]
console.log(firstChild.innerHTML);

const zugriffAufDasParentElement = list.parentElement
console.log(zugriffAufDasParentElement);

zugriffAufDasParentElement.style.border = "1px solid black";

// childElementCount length

console.log(list.childElementCount);
console.log(list.children.length);

const fließBand = document.querySelector("#fließband");
const firstCar = document.createElement("li")
firstCar.textContent = "Benz"
console.log(firstCar);

const secondAuto = document.createElement("li");
secondAuto.textContent = "Tesla";

const thirdAuto = document.createElement("li");
thirdAuto.textContent = "BMW"

// push() == unshift()
fließBand.appendChild(firstCar);
fließBand.appendChild(secondAuto);

//prepend() ist wie unshift() bei Arrays
fließBand.prepend(thirdAuto);

let imageVonDom = document.createElement("img");

imageVonDom.setAttribute("src", "https://unsplash.it/200")

document.body.prepend(imageVonDom);

let imageVonDom2 = document.createElement("img");
imageVonDom2.setAttribute("src", "https://unsplash.it/200")

fließBand.appendChild(imageVonDom2)

if (liElementeToArrayUmwandeln[0].style.color === "green") {
    liElementeToArrayUmwandeln[0].textContent = "Zwiebel"
}


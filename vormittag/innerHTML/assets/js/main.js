// * Comparison - Vergleichen

// * - == vergleicht die Werte
// * - === vergleicht die Werte und Datentypen

console.log(3 == "3");
console.log(3 === "3");

console.log(1 == 1);
console.log(1 == 2);
console.log(6 == "7");

// * != nicht gleicher Wert
// * !== nicht gleichert Wert und Datentypen

console.log(3 != 3);
console.log(3 !== 3);
console.log("3" !== 3);

// * > größer als
// * < kleiner als
// * >= größer gleich
// * <= kleiner gleich

console.log(3 > 2);
console.log(4 < 6);

console.log("A" > "B");
console.log("B" > "a");

// * Elemente selektieren

// * getElementById

const mainHeadLine = document.getElementById("main-headline");
console.log(mainHeadLine);
console.log(mainHeadLine.innerHTML);

// * querySelector()

// ! mit ID
const secondaryHeadline = document.querySelector("#secondary-headline");
console.log(secondaryHeadline);

// ! mit Class
const secondaryHeadline2 = document.querySelector(".myHeadLine");
console.log(secondaryHeadline2);

// !direkt mit Element
const secondaryHeadline3 = document.querySelector("h2");
console.log(secondaryHeadline3);
console.log(secondaryHeadline3.innerHTML);

// ! innerHTML

mainHeadLine.innerHTML = "Ich bin die neue Headline, HaHaHa";
secondaryHeadline.innerHTML = "Moin Moin!"

secondaryHeadline.innerHTML += "Leute";

mainHeadLine.style.color = "red";
mainHeadLine.style.backgroundColor = "yellow"
mainHeadLine.style.length = "min-content";
mainHeadLine.style.textAlign = "center"
mainHeadLine.style.border = "1px solid red";
mainHeadLine.style.borderRadius = "10px";

// ! Unterschied zwischen document.write() und .innerHTML

let divContainer = document.querySelector("#div-container");
divContainer.innerHTML = "<p>Ich bin ein p-Tag!</p>"
divContainer.innerHTML += "<p>Zweites p-Tag!</p>"

// ! Funktion

function sayHallo() {
    console.log("Hello Leute");
}
sayHallo();

function log(firstName, lastName) {
    console.log("Hello du bist eingeloggt" + firstName + lastName);
}

let vorName = "René"
let nachName = "Hellmich";

log(vorName, nachName);

function addMe(num1, num2) {
    console.log(num1 * num2);
}
addMe(3, 5)

let num5 = 5;
let num6 = 10;

function plusMe(num1, num2) {
    divContainer.innerHTML += "<p>"+ num1 + num2 + "</p>";
}

plusMe(num5, num6);
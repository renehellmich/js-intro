// let variablen überschreiben

let firstname = "Magda";
firstname = "Daniel";
console.log(firstname);


// wie kann ich eine toggle() Funktion erstellen?
function toggleStyle() {
    let body = document.querySelector("body");
    body.classList.toggle("chanch-bg")
}

// für was benötigen wir return false in form?
// Damit die Seite nicht neu geladen wird

// Welche Datentypen kennen wir bis jetzt?

// String (text)
// Number (Zahlen)
// Object (Objekte)
// Boolean (True, False)

// was macht ein document.write()
// Damit können wir ein Element am Ende der Seite hinzufügen.

// * "==" vs "==="
// "==" -> hier wird nur der Wert verglichen
// "===" -> hier wird sowohl der Wert und der Datentyp verglichen

// Für was ist benutzt man if / else
// Für eine Abfrage.

let user = "John";
let output = document.querySelector(".ifoutput");

if (user == "John") {
    output.innerHTML = "<p>Hallo John</p>"
} else {
    output.innerHTML = "<p>Dich kenne ich nicht!</p>"
}

let nutzer = "Sergio";
let output2 = document.querySelector(".ifoutput2");
if(nutzer === "Sergio") {
    output2.innerHTML = "<p>Guten Morgen Sergio</p>";
} else if (nutzer === "Florian") {
    output2.innerHTML = `<p> Guten Morgen ${nutzer} </p> `;
} else {
    output2.innerHTML = "<p>Dich kenne ich nicht!</p>"
}

// !Neues Thema

// * switch

let zahl = 1;
switch (zahl) {
    case 1:
        console.log("Die Zahl ist 1");
        break;
    case 2:
        console.log("Die Zahl ist 2");
        break;
    case 3:
        console.log("Die Zahl ist 3");
        break;
    default:
        console.log("Die Zahl ist nicht bekannt.");
        break;
}

// let fruit = "Apfel";

function getFruit() {

    let fruit = document.querySelector("#fruit").value;
    console.log(fruit);
switch (fruit) {
    case "Apfel":
        console.log("Das ist ein Apfel");
        break;
    case "Birne":
        console.log("Das ist eine Birne");
        break;
    default:
        console.log("Diese Frucht kenne ich nicht!");
        break;
}
}
function getDay() {
    let day = document.querySelector("#day").value;
    console.log(day);

    switch(day) {
        case "Montag":
        case "Dienstag":
        case "Mittwoch":
        case "Donnerstag":
        case "Freitag":
            console.log("Es ist ein Wochentag");
            break;
        case "Samstag":
        case "Sonntag":
            console.log("Es ist Wochenende huhu");
            break;
        default:
            console.log("Das ist ein gültiger Tag!!");
            break;
    }
}

let num = 50;

switch(true) {
    case num > 50:
        console.log("Die Zahl ist größer als 50!");
        break;
    case num < 50:
        console.log("Die Zahl ist kleiner als 50!");
        break;
    default:
        console.log("Die Zahl ist 50!");
        break;
}

// # ternary operator

let hungry = true;

hungry 
    ? console.log("ja, ich habe Hunger!")
    : console.log("nein, ich habe keinen Hunger");

let zahl2 = 4;

let ergebnis = 
    zahl2 > 5
        ? "Ja, das ist größer als 5" // true
        : "Nein, das ist kleiner als 5" // false

console.log(ergebnis);

let durst = false ? console.log("ich habe durst") : console.log("nein danke!");

// * ============= * //

const age = 20;

age > 19 ? console.log("Du darfst Shisha rauchen") : console.log("Du darfst Shisha nicht rauchen!");


// * String Methoden * //

//index     01234
let text = "Hallo Leute, heute ist ein schöner Tag! heute werden wir string Methoden lernen!"

// index start ist immer bei 0. H ist 0

// * concat()
// concat verbindet 2 Strings
let moreText = " Ich enthalte noch mehr Text."
console.log(text.concat(moreText));

// * charAt()
// liefert uns das jeweilige Zeichen zurück, das sich in einer Zeichenkette befindet.

console.log(text.charAt(3));

// * includes()
console.log(text.includes("hallo"));
console.log(text.includes("Hallo"));

// * indexOf()
// Sucht ab welchem Index das i das erste mal vorkommt.
console.log(text.indexOf("i"));
console.log(text.indexOf("H"));

// * length
// gibt uns die Länge eines Strings zurück
console.log(text.length);

// * replace()
// ersetzt einen Teil vom einem String und gibt diesen zurück.

console.log(text.replace("Tag", "Abend"));
console.log(text.replace("Hallo", "Guten Morgen"));

// * replaceAll()

console.log(text.replaceAll("heute", "abend"));

// * slice()
// von index 5 bis Ende
console.log(text.slice(5));
// von Index 0 bis 6
console.log(text.slice(0, 6));

// * substring()
console.log(text.substring(2));
console.log(text.substring(0, 6));

// * substring vs. slice
// mit slice kann ich mit minuswerten arbeiten, er fängt von hinten an!

console.log(text.slice(-3));
console.log(text.substring(text.length - 3, text.length));

// * toLowerCase()
// gibt alles in kleinbuchstaben zurück

console.log(text.toLowerCase());

// * toUpperCase()
// gibt alles in Großbuchstabend aus.

console.log(text.toUpperCase());

let zahl3 = 100;
console.log(zahl3);
console.log(String(zahl3));


// ! Wiederholungen

let someText = "Warum sind wir heute alle toll? :D"
const someMoreText = "wir werden heute js weiterlernen."

console.log(someText.indexOf("a"));
console.log(someText.includes("toll"));

console.log(someText.length);
console.log(someText.replace("toll", "großartig"));

console.log(someText.replaceAll("heute", "vormittags"));

console.log(someText.slice(someText.indexOf("heute"), someText.indexOf("heute")+5));

console.log(someText.concat(someMoreText));

// ! Switch wiederholung

let month = Number(document.querySelector("#month").value);

// hier kommen switch anweisungen 1 - 12 für die Monate
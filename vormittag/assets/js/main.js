// ! ==== Console.log() =====
console.log("Hello World!");
// Textausgabe in der Konsole von strings.

// ! ==== Variable =====

// * - const - wird für Werte verwenden, die nicht verändert werden sollen.
// * - let - Werte können nochmal verändert werden.
// * # var - aufdringlicher Nachbar, den wir nicht in unserem Vorgarten haben    wollen. wird seit ECMSCRIPT nicht mehr benutzt.

// ? CONST

const trainerName = "Farid";
console.log(trainerName);

// ? LET
let score = 8.8;
console.log(score);

let num1 = 5;
console.log("das ist num1", num1);

let num2 = 55;
console.log(num1 + num2);

let num3 = 40;
console.log({num3});

const num4 = 300;

num1 = 10;
console.log({num1});

// ! ==== Datentypen =====
console.log("==== Datentypen =====")

// ? number - String - Boolean

// ? String
console.log('Das ist ein String');

// ?Number
console.log('Das ist eine Nummer:', 50);
console.log(10 + 4);

// ? Boolean;

console.log(true);
console.log(false);

// ! ==== Konventionen =====

// * nicht zu kurz
// * nicht zu lang
// * dürfen nicht mit Zahlen beginnen
// * camelCase
// * Am Besten auf Englisch schreiben
let myFirstVariable;
// * Underscoure
let my_first_variable;
// * PascalCase
let MyFirstVariable;
// ! So geht es nicht
// # let nein-nein-so-nicht;
// # let $bitteAuchnichtso;
// # let kannichsonichtlesen;

// ! ==== Case Sensitive =====

// * JS unterscheidet zwischen Groß- und Kleinschreibung.
let a = 10;
let A = 100;
console.log(a);
console.log(A);

// ! ==== String Concatination =====
console.log('====String Concatination====');

const firstName = 'Wade';
const secondName = 'Winston';
const lastName = 'Wilson';

let state = 'New York';

console.log('Ich bin ' + firstName + ' ' + secondName + ' ' + lastName + ' und lebe in ' + state);
console.log(`Ich bin ${firstName} ${secondName} ${lastName} und lebe in ${state}`);

// ! ==== Arithmetische Operatoren =====
console.log('==== Arithmetische Operatoren =====');

let x = 5;
let y = 3;
let z = 15;

// * addieren
console.log(x + y);
// * subtrahieren
console.log(y - x);
// * dividieren
console.log(x / y);
// * multiplizieren
console.log(y * z);

// * Modulo % = Restwert
console.log(15 % 5); // 0
console.log(15 % 2); // 1
console.log(15 % 4); // 3

// ! Increment
// * mit ++ können wir den Wert um 1 hochsetzen

let zahl1 = 2;

console.log({zahl1});
zahl1++;
console.log(zahl1);

// ! Decrement
// * mit -- können wir den Wert um 1 verringern

let zahl2 = 2
console.log({zahl2});
zahl2 --
console.log({zahl2});

// ! ==== Output =====
console.log('==== Output =====');

// ! document.write()
document.write('Hallo Leute!');

document.write("<h2 class='test' style='font-size: 36px'>Ich bin eine Headline</h2>");

// ! window.alert()
// window.alert("ACHTUNG ACHTUNG, DIES IST EINE WICHTIGE DURCHSAGE!!!");

// ! ==== Input =====
console.log('==== Input =====');

// * zahl4 = window.prompt();
// * let confirm = window.confirm("Stimmen Sie den Cookies zu!");
// *console.log(confirm);
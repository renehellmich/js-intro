console.log("Hello World");

// ! slice()
// * Erstellt ein Array, der eine Kopie eines Teils des ursprünglichen Arrays darstellt.


let fruits = ["Banane", "Apfel", "Orange", "Mango"];
let obstsalat = fruits.slice(1,3);

console.log("fruits", fruits);
console.log("obstsalat", obstsalat);


// ! sort()
// * Sortiert die Elemente eines Arrays und gibt das sortierte Array zurück

let number = [23, 1, 5, 67, 9];
number.sort(function(a,b) {
    return a - b;
});
console.log("sort: ", number);

// ! splice()

let myHero = ["Deadpool", "Ironman", "Batman", "Aragorn"]
myHero.splice(2, 0, "Boromir")
console.log("splice: ", myHero);

// ! revers()
let number2 = [4, 8, 10, 5, 1];
number2.reverse();
console.log("Reverse: ", number2);

// ! MAP()

let myNumArr = [1, 2, 3, 4, 5];
let multi = myNumArr.map(num => num * num);
console.log("Multi: ", multi);

// ! ForEach()

let tiere = ["Hund", "Katze", "Maus"]

tiere.forEach((tier, index) => {
    console.log(index + ":" + tier);
});

let num = [1, 2, 3]
// * i = index / arr = array
num.forEach((element, index, array) => {
    console.log("Element:" + element);
    console.log("Index", + index);
    console.log("Gesamtes Array: ", array);
});

let num2 = [1, 2, 3, 4, 5]

const mapForEach = (num2) => {
    let double = num2.map(num => num * 2)

    double.forEach(doubleNum => {
        console.log("Verdoppelte Nummer: " + doubleNum);
    })

    
}

mapForEach(num2)

let num3 = [1, 2, 3, 4, 5]

const evenOdd = (pizza) => {
    let double = pizza.map(num => num * num)

    double.forEach(doubleNum => {
        console.log("Verdoppelte Nummer: " + doubleNum);
        if (doubleNum % 2 == 0){
            console.log("Nummer ist gerade!");
        } else {
            console.log("Nummer ist ungerade!");
        }
    })


}

mapForEach(num2)
evenOdd(num3)
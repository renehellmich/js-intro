const zahlen = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let geradeZahlen = zahlen.filter(num => num % 2 === 0);
console.log(geradeZahlen);

let ungeradeZahlen = zahlen.filter(num => num % 2 === 1);
console.log(ungeradeZahlen);

// * =============================================

const woerter = ["Banane", "Kaktus", "Flausch", "Ente", "Apfel", "Auto", "Giraffe", "Schmetterling", "Krokodil", "Lampe"];

let woerterLength6 = [];

const sortLength6 = () => {
    woerterLength6 = woerter.filter(value => value.length <= 6);
}

sortLength6();
console.log(woerterLength6);

// * =============================================

const zahlenNeu = [12, 25, 7, 18, 30, 5];

let zahlenKleiner20 = zahlenNeu.filter(num => num < 20)
console.log(zahlenKleiner20);

zahlenKleiner20.forEach(el => {
    zahlenKleiner20[zahlenKleiner20.indexOf(el)] = el * 2;
});

console.log(zahlenKleiner20);

// * ============================================

const heroArr = ["Superman", "Batman", undefined, , "Wonder Woman", "Spider-Man", "Black Widow", "Iron Man", "Thor", "Catwoman", , null];

console.log(heroArr);

let heroArrClear = [];

heroArrClear = heroArr.filter(value => value != null)

console.log(heroArrClear);


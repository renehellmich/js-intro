let person = ["Bruce", "Wayne", "Superreich"];
let friends = ["Farid", "Christian", "Sergio"];
let favoriteFood = ["Burger", "Sushi", "Mais-Käsebällchen"];

console.log(person, friends,favoriteFood);

console.log("====== 1 - 2 ======");

// console.log(person[person.indexOf("Bruce")]);
// console.log(person[1]);

/*
person.forEach(el => {
    console.log(el);
});

friends.forEach(el => {
    console.log(el);
});

favoriteFood.forEach(el => {
    console.log(el);
});
*/

let arr = [person, friends, favoriteFood]
arr.forEach(arrEl => {
    arrEl.forEach(el => {
        console.log(el);
    });
});

console.log("====== 1 - 3 ======");

console.log(person.length, friends.length, favoriteFood.length);

console.log("====== 1 - 4 ======");

console.log(person);
person.push("Batman", "Gotham-City");
console.log(person);
console.log(friends);
friends.push("Mazio", "Magda");
console.log(friends);
console.log(favoriteFood);
favoriteFood.push("Pizza", "Currywurst");
console.log(favoriteFood);

console.log("====== 1 - 5 ======");

console.log(person);
let popPerson = person.pop();
console.log(popPerson);
console.log(person);

console.log(friends);
let popFriends = friends.pop();
console.log(popFriends);
console.log(friends);

console.log(favoriteFood);
let popFavoriteFood = favoriteFood.pop();
console.log(popFavoriteFood);
console.log(favoriteFood);

console.log("====== 1 - 6 ======");

console.log(person);
let shiftPerson = person.shift();
console.log(shiftPerson);
console.log(person);

console.log(friends);
let shiftFriends = friends.shift();
console.log(shiftFriends);
console.log(friends);

console.log(favoriteFood);
let shiftFavoriteFood = favoriteFood.shift();
console.log(shiftFavoriteFood);
console.log(favoriteFood);

console.log("====== 1 - 7 ======");

friends.unshift("Farid");
console.log(friends);
friends.unshift("Julia", "Lea");
console.log(friends);

favoriteFood.unshift("Burger");
console.log(favoriteFood);
favoriteFood.unshift("Leberkäse", "Spinat");
console.log(favoriteFood);

console.log("====== 1 - 9 ======");

let numArr = [23, 54, 75];
let zaehler = 0;

// * === FUNKTIONEN === * //

const push = (i) => {
    for(j = 1; j <= i; j++) {
        numArr.push(randomNumber100())
    }
}

const unshift = (i) => {
    for(j = 1; j <= i; j++) {
        numArr.push(randomNumber100())
    }
}

const pop = (i) => {
    for(j = 1; j <= i; j++) {
        numArr.pop();
    }
}

const shift = (i) => {
    for(j = 1; j <= i; j++) {
        numArr.shift();
    }
}

const randomNumber100 = () => {
    let zahl = 0;
    zahl = Math.floor(Math.random() * 100) + 1;
    return zahl;
}


// * === AUFRUFE und AUSGABE === * //
push(5);
console.log(numArr);

unshift(5);
console.log(numArr);

pop(2);
console.log(numArr);

shift(2);
console.log(numArr);

// * === Edit: for schleife korrigiert. Einer immer zu viel durch Programmierfehler! 
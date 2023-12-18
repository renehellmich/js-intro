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
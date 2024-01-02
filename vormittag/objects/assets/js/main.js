const user = {
    name: "Jim",
    alter: 60,
    beruf: "Verkäufer",
    hobbies: ["zocken", "lesen", "sport machen"],
    adresse: {
        stadt: "Hamburg",
        straße: "Mustermann",
        PLZ: "2000"
    },
    auto: false
}

console.log(user);
console.log(user.alter);
console.log(user.beruf);
console.log(user.hobbies[1]);
console.log(user["alter"]);
console.log(Object.values(user.hobbies));

user.hobbies.forEach((hobby) => console.log(hobby))

delete user.auto

user.auto = "Tesla"

user.verheiratet = true;

user.clubhouse = "Golf Club"

const admin = {}

admin.name = "René"
admin.job = "Microsoft Developer"
admin.age = 29
admin.rights = true

console.log(admin);

// #Methoden

const calculator = {
    add: (a, b) => a + b,
    sub: (a, b) => a - b,
    multi: (a, b) => a * b
}

console.log(calculator.add(2,5));
console.log(calculator.sub(2,5));
console.log(calculator.multi(2,5));

const spieler = {
    name: "Ironman",
    class: "Hero",
    level: 100,
    spell: ["heilen", "fliegen", "laser"],
    login: () => {
        console.log(spieler.name + " ist eingeloggt");
    },
    castSpell: function() {
        console.log("castingSpell: " + this.spell[0]);
    },
    logOut(){
        console.log(this.name + " ist ausgeloggt");
    }
}

console.log(spieler);
spieler.login();
spieler.castSpell()

const keysVomSpielerObject = Object.keys(spieler)
console.log(keysVomSpielerObject);
const valuesVomSpielerObject = Object.values(spieler)
console.log(valuesVomSpielerObject);

keysVomSpielerObject.forEach((key) => {
    console.log("key " + key);
    const myValue = spieler[key]
    console.log("myValue " + myValue);
})

// Object.entries
// erstellt uns ein Array, dadurch können wir z.B. rüber mappen

const entriesObjectDieKeysUndValuesAlsArray = Object.entries(spieler)

console.log(entriesObjectDieKeysUndValuesAlsArray);

//bei arrays hatten wir forEach

// for-in loop

for(let akey in spieler) {
    console.log(akey);
}

const grades = {
    math: 4,
    sport: 1,
    informatik: 2,
    chemie: 1
}

let summe = 0;

for(let fach in grades) {
    summe += grades[fach]
}
console.log(summe);
const gradesLength = Object.values(grades).length
console.log(gradesLength);

const durchschnitt = summe / gradesLength
console.log(durchschnitt);

const user2 = {
    name: "Hanna",
    age: 30,
}

console.log(user2);

const updatedUser = {...user2, age: 33, email: "hanne@gmail.com"}
console.log(updatedUser);

const user1 = {
    name: "alice",
    age: 30,
}

const mehrInfoFürUser1 = {
    address: {
        street: "123 Mainst",
        city: "Wonderland"
    }
}

const User1Zusammenfuehren = {...user1, ...mehrInfoFürUser1}
console.log(User1Zusammenfuehren);

console.log(Object.entries(User1Zusammenfuehren));


const someArray = [1,2,3,4]

const reverseArray = [...someArray].reverse()
console.log(reverseArray);

const shiftArray = [...reverseArray].shift()
console.log(shiftArray);

const gegner = {
    name: "rambo",
    fähigkeiten: ["boxen", "arm drücken", "karate"],
    login: () => {
        console.log(`${gegner.name} ist eingeloggt`);
    }
}

const myButton = document.createElement("button")

document.body.appendChild(myButton)
// myButton.style.height = "24px"
// myButton.style.width = "48px"
myButton.textContent = "gegner"

myButton.addEventListener("submit", gegner.login(() => { return false }))


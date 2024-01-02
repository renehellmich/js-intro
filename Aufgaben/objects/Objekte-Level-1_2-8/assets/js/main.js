// Aufgabe 1 -2

const person = {
    name: "René",
    age: 29,
    sagnameAlter: () => {
        alert(person.name + person.age)
    }
}

console.log(person.name, person.age);
// person.sagnameAlter()

// 1 - 4
console.log("Object 1 - 4");

let unsereHaustiere = [
    {
        tiertyp: "Katze",

        names: [
            "Gipsy",
            "Nala",
            "Dinky"
        ]
    },
    {
        tiertyp: "Hunde",
        names: [
            "Knöpfchen",
            "Pinselchen",
            "Droopy"
        ]
    }
];

console.log(unsereHaustiere[0].names[1]);
console.log(unsereHaustiere[1].names[2]);
console.log(Object.values(unsereHaustiere[1])[1]);

console.log(Object.keys(unsereHaustiere));
unsereHaustiere[1].names = ["Knöpfchen", "Sparky", "Rambo"]
console.log(Object.values(unsereHaustiere[1])[1]);
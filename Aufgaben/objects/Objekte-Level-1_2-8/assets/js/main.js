// Aufgabe 1 -2
console.log("=== Object 1 - 2 ===");

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
console.log("=== Object 1 - 4 ===");

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

// 1 - 5
console.log("=== Objects 1 - 5 ===");
let unserLager = {
    schreibtisch: {
        schublade: "Hefter"
    },
    schrank: {
        "Obere Schublade": {
            Ordner1: "Dokumente",
            Ordner2: "Geheimnisse"
        },
        "Untere Schublade": "Cola"
    }
};
console.log(unserLager.schrank["Obere Schublade"].Ordner2);
console.log(unserLager.schreibtisch["schublade"]);
console.log(unserLager.schrank["Untere Schublade"]);

// 1 - 6
console.log("=== Objects 1 - 6 ===");
let myMusic = [
    {
        kunstler: "The Beatles",
        title: "Abbey Road",
        release_jahr: 1969,
        formate: ["LP", "CD", "MC", "Download"],
        gold: true
    },
    {
        kunstler: "Pink Floyd",
        title: "Dark Side of the Moon",
        release_jahr: 1978,
        formate: ["CS", "CD", "LP", "Download"],
        gold: true
    },
    {
        kunstler: "Led Zeppelin",
        title: "Led Zeppelin IV",
        release_jahr: 1971,
        formate: ["CS", "LP", "Download"],
        gold: true
    },
    {
        kunstler: "Metallica",
        title: "Kill ’Em All und Ride the Lightning",
        release_jahr: 1983,
        formate: ["LP", "CD", "MC", "Download"],
        gold: true
    }
];

myMusic.push({
    kunstler: "Xandria",
    title: "Nightfall",
    release_jahr: 2015,
    formate: ["rock", "metal"],
    gold: true
})

console.log(myMusic);
console.log(Object.entries(myMusic));

console.log(myMusic[0].kunstler);
console.log(myMusic[1].formate[3]);
console.log(myMusic[1].gold);
console.log(myMusic.find(x => x.release_jahr == 1971).release_jahr + " und " + myMusic.find(x => x.release_jahr = 1973).release_jahr);
console.log(myMusic.find(x => x.kunstler = "Metallica").formate[2]);
console.log(myMusic[3].title.split(" ")[4]);
console.log(myMusic[2].title.slice(myMusic[2].title.length - 2, myMusic[2].title.length));
console.log(myMusic[1].kunstler.slice(5));


// 1 - 7
console.log("=== Objects 1 - 7 ===");

myMusic
    .filter(x => x.release_jahr > 1975)
    .forEach((element) => {

        console.log(element.kunstler);
        console.log(element.title);
        console.log(element.formate.join());
        console.log("");

    })

// 1 - 7
console.log("=== Objects 1 - 7 ===");

let studentData = [
    {
        name: "Alex",
        age: 23,
        coop: false,
        address: {
            street: "Don Valley Business Park",
            city: "Toronto",
            postalCode: "ONM3C3E5"
        },
        emails: ["alex69@gmail.com", "alex123@yahoo.com"]
    },
    {
        name: "Sandra",
        age: 22,
        coop: true,
        address: {
            street: "34 Lawrence Ave",
            city: "Toronto",
            postalCode: "ONM3C0E5"
        },
        emails: ["sandra@gmail.com", "sandra@yahoo.com"]
    }
];

console.log(studentData);
const outputData = () => {
    studentData
        .forEach((element) => {
            console.log(element.name);
            console.log(element.coop);
            console.log(element.emails);
        })
    console.log(studentData.map(e => e.address.city));
}

outputData();

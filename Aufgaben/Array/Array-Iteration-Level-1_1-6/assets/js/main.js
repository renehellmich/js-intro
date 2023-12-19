let getraenke = [
    "Coca-Cola",
    "Apfelsaft",
    "Pepsi",
    "Traubensaft",
    "Sprite",
    "Orangensaft",
    "Red Bull Energy Drink",
    "Fanta"
]

getraenke.forEach(el => {
    console.log(el);
    document.write(el+"<br>") 
});

// * 1 - 2

let array = [
    18,
    16,
    80,
    51,
    47,
    38,
    95,
    42,
    68,
    61,
    34,
    51,
    20,
    17,
    56,
    31,
    100,
    6,
    5,
    30,
    74,
    97,
    28,
    99,
    91,
    27,
    73,
    12,
    92,
    6,
    27,
    71,
    26,
    15,
    78
];

let output = array.map(num => num * 2).sort(function(a,b) {
    return a - b;
});
console.log(output);

// * 1 - 3

let fahrenheit = [0, 32, 45, 50, 75, 80, 99, 120];

let celsius = fahrenheit.map(temp => ((temp-32)/1.8).toFixed(2) + "°C")
console.log(celsius);

// * 1 - 5

let checkNumber = [
    18,
    16,
    80,
    51,
    47,
    38,
    95,
    42,
    68,
    61,
    34,
    51,
    20,
    17,
    56,
    31,
    100,
    6,
    5,
    30,
    74,
    97,
    28,
    99,
    91,
    27,
    73,
    12,
    92,
    6,
    27,
    71,
    26,
    15,
    78
];

const modifiedNumbers = checkNumber.map(number => {
    number % 3 == 0
    ? number += 100
    : null;
    return number;
})

console.log(modifiedNumbers);

// * 1 - 6

let album = [
    "holidays.jpg",
    "Restaurant.jpg",
    "desktop",
    "rooms.GIF",
    "DOGATBEACH.jpg",
]

let cutString = (string) => {
    let output = string.replace(".jpg", "");
    return output.toLowerCase();
}
album.forEach((string, position) => {
    string.match(".jpg")
    ? album.splice(position, 1, cutString(string))
    : album.splice(position, 1, "invalid")
});


console.log(album);
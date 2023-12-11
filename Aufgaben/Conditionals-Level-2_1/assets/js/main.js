const jHeight = 170;
const jAge = 28;

const mHeight = 168;
const mAge = 34;

function calcNumber(height, age) {
    x = age * 5 + height;
    return x;
}

const john = calcNumber(jHeight, jAge);
console.log("john score: " + john);

const meike = calcNumber(mHeight, mAge);
console.log("meike score: " + meike);

if(john > meike) {
    console.log("John gewinnt das Spiel mit " + john + "Punkten");
} else if(meike > john) {
    console.log("Meike gewinnt das Spiel mit " + meike + "Punkten");
} else if (meike == john) {
    console.log("Beide Spieler haben gleich viele Punkte");
}

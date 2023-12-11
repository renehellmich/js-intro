let array = [];
const controlNumber = 27;

let diff = "";

function randomNumbers(numbers) {
    return numbers[Math.floor(Math.random()*numbers.length)]
}

for (let i = 0; i < 3; i++) {
    array[i] = randomNumbers([35, 74, 123]);
}
array.forEach(element => {
    // element = randomNumbers([35, 74, 123]);
    console.log(element);
    
});

console.log("Hier kommen die Ergebnisse:");
array.forEach(element => {
    diff = element - controlNumber;
    if (element > 27) {
        diff = diff * 2;
    }
    console.log(diff);
});
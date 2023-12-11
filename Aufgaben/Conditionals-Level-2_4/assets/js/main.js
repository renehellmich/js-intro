let x = 10;
let y = 5;

function sumTwoNumbers(num1, num2) {
    let sum = num1 + num2;
    return sum;
}

let z = sumTwoNumbers(x, y);

if (x == y) {
    console.log(z * 5);
} else {
    console.log(z);
}
let firstNum = document.getElementById("firstNum");
let secondNum = document.getElementById("secondNum");

const output = document.getElementById("output");

for (let i = 2; i <= 9; i++) {
    firstNum.innerHTML += `<option value="${i}">${i}</option>`;
    secondNum.innerHTML += `<option value="${i}">${i}</option>`;
}

const calcNumbers = (num1, num2, input) => {
    let numArr = [];
    let result = null;

    console.log(num1, num2, input);

    if (num1 != num2) {

        for (let i = 0; i < input; i++) {
            i % num1 == 0
                ? numArr[i] = i
                : i % num2 == 0
                    ? numArr[i] = i
                    : numArr[i] = 0;
        }

        console.log(numArr);

        numArr.forEach(element => {
            result += element;
        });
    } else {
        result = "Bitte geben Sie 2 unterschiedliche Nummern an!"
    }
    return result
}

function calcValue() {
    const firstNumber = firstNum.value;
    const secondNumber = secondNum.value;
    const inputNum = document.getElementById("inputNum").value;

    output.innerHTML = calcNumbers(firstNumber, secondNumber, inputNum)
}
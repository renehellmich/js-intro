const output = document.querySelector(".output");
let outputValue = 0;

function superFunc(value) {
    outputValue = outputValue + value;
    output.innerHTML = outputValue;
}

function superFuncZwei() {
    outputValue = outputValue * 2;
    output.innerHTML = outputValue
}

function reset() {
    output.innerHTML = 0;
    input = "";
}

function heroFunc() {
    let input = document.querySelector(".input").textContent;
    const matches = input.match(/([-+]\d+)/g);

    console.log(input);

    if (matches) {
        matches.forEach((gefunden) => {

            const match = /([-+]\d+)/.exec(gefunden)
            if (match) {
                const operator = match[1];
                const number = parseInt(match[2], 10);

                console.log(operator, number);
                console.log(outputValue + operator + number);

                outputValue = outputValue + operator + number;
                output.innerHTML = outputValue;

            }
        });

    }
}

// * Conditional Statements

/* ! if(Hier kommt eine Bedingungen rein) {
    Hier kommt Code rein, der ausgeführt wird, wenn die Bedingung zutrifft
} else if{} 
else {
    Hier steht Code, der ausgeführt wird, wenn die Bedingung nicht zutrifft.
}
*/

function reichSein() {
    let reich = document.querySelector("#reich").value;

    console.log(reich);

    let entscheidung = document.querySelector("#entscheidung");

    if (reich === "Yes") {
        entscheidung.innerHTML = "Du wirst reich bleiben"
    } else if (reich === "No") {
        entscheidung.innerHTML = "Du bleibst arm!";
    }
    else {
        entscheidung.innerHTML = "Hier ist irgendwas falsch gelaufen.";
    }

}

/*
function checkAge() {
    let age = document.querySelector("#ageInput").value;
    let output = document.querySelector("#message");

    console.log(age);

    if (age != "") {

        if (age >= 60) {
            output.innerHTML = "Du bist stein alt!"
        } else if (age < 18 || age > 60) {
            output.innerHTML = "Du bist zu jung oder älter als 60."
        } else if (age >= 18) {
            output.innerHTML = "Du bist genau im richtigen Alter.";
        }
    } else {
        output.innerHTML = "Das Feld ist leer!"
    }
}
*/

function checkAge() {
    let age = document.querySelector("#ageInput").value;
    let checked = document.querySelector("#checked").checked;
    let output = document.querySelector("#message");

    if (!checked) {
        output.innerHTML = "Du hast nicht zugestimmt!!"
    } else
    if (age >= 30 && age <= 80 && checked) {
        output.innerHTML = "Du bist ALT und hast zugestimmt, dass du alt bist."
    } else if (age >= 18 && age < 30 && checked) {
        output.innerHTML = "Du bist volljährig und hast zugestimmt."
    }
}

// ! Login

function checkUserData() {
    const correctUserName = "rene";
    const correctUserPassword = "123";

    let loginUserName = document.querySelector("#username").value;
    let loginUserPassword = document.querySelector("#password").value;

    const output = document.querySelector(".login-output");

    if (loginUserName === "" && loginUserPassword === "") {
        output.innerHTML = "<p class = 'password-message'>Es fehlen Anmeldedaten!</p>"
    } else if (loginUserName === correctUserName && loginUserPassword === correctUserPassword) {
        output.innerHTML = "<p class = 'password-message'>Richtige Daten wurden eingegeben.</p>"
        window.location.replace("./secret.html")
    } else {
        output.innerHTML = "<p class = 'error-message'>Einer der beiden Werte ist nicht korrekt!</p>"
    }
}

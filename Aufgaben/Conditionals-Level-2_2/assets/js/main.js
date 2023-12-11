const output = document.querySelector("#airQuality");
const deutsch = document.querySelector("#german");
const englisch = document.querySelector("#english");

const expression1 = "Level of health concern: ";
const expression2 = "Level of health effect: ";

function checkAirQuality() {
    const number = document.querySelector("#range").value;
    // "input[type='range']"

    console.log(number);
    output.innerHTML = `Luftqualität: ${number}`;

    if(number <= 50) {
        deutsch.innerHTML = `<h2>${expression1} Good </h2>`;
        englisch.innerHTML = `<h2> ${expression2} Little or no risk </h2>`
        document.querySelector("body").style.backgroundColor = "green";
    } else if (number > 50 && number <=100) {
        deutsch.innerHTML = `<h2>${expression1} Moderate </h2>`;
        englisch.innerHTML = `<h2> ${expression2} Acceptable quality </h2>`
        document.querySelector("body").style.backgroundColor = "yellow";
    } else if (number > 100) {
        deutsch.innerHTML = `<h2>${expression1} Unhealthy for sensitive groups </h2>`;
        englisch.innerHTML = `<h2>${expression2} Generable publics not likely affected</h2>`
        document.querySelector("body").style.backgroundColor = "orange";
    }
}
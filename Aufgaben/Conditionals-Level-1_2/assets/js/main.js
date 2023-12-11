const output = document.querySelector("#output");

function checkWeather() {
    const number = document.querySelector("#number").value;

    if (number <= 10 && number >= 8) {
        output.innerHTML = "super";
    } else if (number >= 6 && number <= 7) {
        output.innerHTML = "gut";
    } else if (number >= 3 && number <= 5) {
        output.innerHTML = "okay";
    } else if (number <= 2 && number >= 0) {
        output.innerHTML = "schlecht";
    } else {
        output.innerHTML = "Sie haben eine ungültige Zahl eingegeben!"
    }
}
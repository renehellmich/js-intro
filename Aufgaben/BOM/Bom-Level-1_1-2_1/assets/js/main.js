console.log("Start: Warten für 3 Sekunden..");

const startIntervall = () => {
    console.log("Erledigt: Du hast 3 Sekunden verschwendet.");
}

setTimeout(startIntervall, 3000)



let number = 10
const numberDown = () => {
    if (number != 0) {
        console.log(number);
        number--
    } else {
        console.log("Endlich Feierabend!");
        clearIntervall()
    }
}

const countIntervall = setInterval(numberDown, 1000)

const clearIntervall = () => {
    clearInterval(countIntervall)
}
const output = document.querySelector("#output")
const button = document.querySelector("#button")

let number = 100

const countInterval = () => {
    output.innerText = `${number}%`
    if (number != 0) {
        number--
    } else {
        clearInterval(countInterval())
    }
    
}

function startTimer() {
    setInterval(countInterval, 50)
}
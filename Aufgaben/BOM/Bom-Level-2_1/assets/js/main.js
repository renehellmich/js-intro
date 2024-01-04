const container = document.querySelector(".message")
const countOutput = document.querySelector("#count")

let countVar = 10
console.log(countVar);

const transitionDelay = () => {
    container.style.transitionDelay = "250ms"
    container.style.opacity = "0"
}

const countDown = () => {
    if (countVar != 0) {
        countOutput.innerHTML = countVar
        countVar--
    } else {
        countOutput.innerHTML = 0
        setTimeout(() => {
            // container.style.display = "none",
            transitionDelay(),
            clearInterval(countDown)
        }, 500)
    }
}

setInterval(countDown, 1000)
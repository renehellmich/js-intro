const cat = document.querySelector("#cat")
console.log(cat.clientWidth);

const winWidth = window.innerWidth
console.log(winWidth, cat.clientWidth);


let posAbs = 0
let speed = 500
let direction = "+"
let catInterval

const rightBound = winWidth - cat.clientWidth + posAbs
console.log(rightBound);

const goCat = () => {
    console.log("speed", speed);
    if (posAbs >= 0 && posAbs <= rightBound && direction === "+") {
        direction = "+"
        posAbs += Number(`${direction}8`)
        cat.style.left = `${posAbs}px`
    } else if (posAbs < 0 && direction === "-") {
        changeDirection(0)
        direction = "+"
        posAbs += Number(`${direction}8`)
        cat.style.left = `${posAbs}px`
    } else {
        changeDirection(180)
        direction = "-"
        posAbs += Number(`${direction}8`)
        cat.style.left = `${posAbs}px`
    }
}

const changeDirection = (deg) => {
    cat.style.transform = `rotateY(${deg}deg)`
}


// Functionsaufrufe

function catWalk() {
    // goCat()
    catInterval = setInterval(goCat, speed)
}

function pause() {
    clearInterval(catInterval)
}

function turn() {
    switch(direction) {
        case "+":
            changeDirection(180)
            direction = "-"
            break;
        case "-":
            changeDirection(0)
            direction = "+"
            break;
    }
}

function catSpeed() {
    speed = Number(prompt("Bitte geben Sie eine Geschwindigkeit ein:", ))
    pause()
    catWalk()
}
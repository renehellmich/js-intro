// * BOM

// * BOM => Browser Object Model

// Größe des Browser Fenster

console.log("Window Inner Heigth",window.innerHeight);
console.log("Window Inner Width",window.innerWidth);

console.log("Window Screen Height" ,window.screen.height);
console.log("Windows Screen Width" ,window.screen.width);

console.log("Screen avalHeigth", window.screen.availHeight);
console.log("Screen availWidth", window.screen.availWidth);

let myWindow

function openWindow () {
    // "_self", "_blank", "_parent"
    myWindow = window.open("https://www.google.de", "_blank")
}
function myScroll() {
    /* 
    1. Wert: px auf x Achse
    2. Wert: px auf y Achse
    */
    window.scroll(0, 1000)
}

// window.location
console.log(window.location.origin); // http://127.0.0.1:5500
console.log(window.location.pathname); // /vormittag/BOM/index.html
console.log(window.location.host); // 127.0.0.1:5500
console.log(window.location.protocol);

function myReload() {
    window.location.reload()
}
function aboutPage() {
    window.location.pathname = "./vormittag/BOM/assets/html/about.html"
}
function goBack() {
    window.history.back()
}
function goForward() {
    window.history.forward()
}


// Js Timing Event

// setTimeOut wird nur einmal ausgeführt, wiederholt sich nicht mehr

function sayHello() {
    console.log("Hallo und Guten Morgen");
    welcome.style.display = "block"
}

const welcome = document.createElement("div")
welcome.style.height = "50px"
welcome.style.width = "250px"
welcome.style.backgroundColor = "red"
welcome.style.color = "white"
welcome.textContent = "Hello Guys, Welcome"
welcome.style.display = "none"
document.body.appendChild(welcome)

setTimeout(sayHello, 2000)

function myTimer () {
    // let clock = document.createElement("div")
    // document.body.appendChild(clock)
    const clock = document.querySelector("#clock")
    const now = new Date()
    clock.innerHTML = now.toLocaleTimeString()
}

let timerVariable = setInterval(myTimer, 1000)



function VictorBleibMalWach () {
    console.log("Du musst wach bleiben");
}

let timer2 = setInterval(VictorBleibMalWach, 1000)


const train = document.querySelector("#train")

let leftPos = 0;
let trainInterval;

function startTrain() {
    let animationTrain = () => {
        leftPos += 10;
        train.style.left = `${leftPos}px`
    }

    trainInterval = setInterval(animationTrain, 100)
}

function stopTrain() {
    clearInterval(trainInterval)
}

const backgroundInterval = () => {
    const rgbFunc = () => Math.floor(Math.random() * 256)

    document.body.style.backgroundColor = `rgb(${rgbFunc()},${rgbFunc()},${rgbFunc()})`
}

const backgroundColorChange = setInterval(backgroundInterval, 1000)

function clearMyInterval () {
    clearInterval(timerVariable)
    clearInterval(timer2)
    clearInterval(backgroundColorChange)
}
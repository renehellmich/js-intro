console.log("Run.");

function getInputValue() {
    const output = document.querySelector(".output");

    let name = document.querySelector(".name").value;
    let age = document.querySelector(".num").value;
    let range = document.querySelector(".range").value;
    let checkbox = document.querySelector(".checkbox").checked;
    let date = document.querySelector(".bday").value;

    console.log(name, age, range, checkbox, date);

    output.innerHTML += `${name} ${age} ${range} ${checkbox} ${date}`;
}

// * Add, Remove & Toggle ClassList

function getDark() {
    console.log("dark mode activated");
    const myBody = document.querySelector("body");
    myBody.classList.toggle("dark"); // true oder false
    // classList guckt ins CSS rein
}

function addClass() {
    const headLine = document.querySelector(".myAdd");
    headLine.classList.add("big");
    // Einbahnstraße. mit toggle Vor zurück, mit add nur vor.
}

function removeClass() {
    const headLine2 = document.querySelector(".remove");
    headLine2.classList.remove("remove")
}
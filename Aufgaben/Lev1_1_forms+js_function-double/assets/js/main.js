const output = document.querySelector("#output");

function doubleMe() {
    const number = document.querySelector("#number").value;
    console.log("double loading");
    output.innerHTML = number * 2;
}
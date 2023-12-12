output = document.querySelector("#output");

function check() {
    const input = Number(document.querySelector("#age").value);

    let ageCheck = input >= 18
    ? "volljährig"
    : "minderjährig";
    console.log(ageCheck);

    output.innerHTML = ageCheck;
}
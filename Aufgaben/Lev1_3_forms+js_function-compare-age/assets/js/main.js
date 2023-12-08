
function getDiff() {
    const age1 = document.querySelector("#age1").value;
    const age2 = document.querySelector("#age2").value;
    const output = document.querySelector("#output");

    let diff = age1 - age2;

    console.log(age1, age2);
    output.innerHTML = `Die Differenz ist: <br> ${diff} `;
}
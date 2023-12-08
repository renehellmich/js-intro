
function diffYear() {
    const birthYear = document.querySelector("#birthYear").value;
    const output = document.querySelector("#output");

    const d = new Date();
    const year = d.getFullYear();

    console.log(year);

    let diff = year - birthYear;

    output.innerHTML = diff;
}
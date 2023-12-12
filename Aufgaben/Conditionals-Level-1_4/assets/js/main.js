const output = document.querySelector("#output");
const minLength = 8;
function check() {
    const input = document.querySelector("#password").value;
    const lg = input.length;
    console.log(lg);

    let LengthCheck =
        lg >= minLength
        ? "<span style='color: green';>Welcome to your account!</span>"
        : "<span style='color: red';>The Password is to short!</span>";
    output.innerHTML = LengthCheck;
}
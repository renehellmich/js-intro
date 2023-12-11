const output = document.querySelector("#output");
function checkAge() {
    const inputAge = document.querySelector("#age").value;
    
    if (inputAge < 18) {
        output.innerHTML = "You are under 18";
    } else {
        output.innerHTML = "You are older than 18"
    }
}
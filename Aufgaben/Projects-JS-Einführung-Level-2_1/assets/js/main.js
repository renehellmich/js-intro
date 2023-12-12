const output = document.querySelector("#output");
const error = document.querySelector("#error");

function sendMessage() {
    const input = document.querySelector("#message").value;

    let check =
        input != ""
        ?   (() => {
                output.innerHTML = input;
                error.classList.style.visibility = 'hidden';
            })()
        :   (() => {
                output.innerHTML = "";
                error.innerHTML = "<span style='color: red; visibility:visible;'>Sie müssen eine Nachricht eingeben!</span>";
            })(); 
}
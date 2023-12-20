output = document.querySelector("#loop_output");

const loop = () => {
    input = Number(document.querySelector("#loopnum").value)

    if (input % 2 == 0) {
        for (let i = 1; i <= input; i++) {
            output.innerHTML += "o";
        }
    } else {
        for(let i = 1; i <= input; i++) {
            i % 2 == 1
            ? output.innerHTML += "o"
            : output.innerHTML += "0";
        }
    }
    console.log(output);
}

function loopFunc() {
    loop();
}

function reset() {
    output.innerHTML = "";
}
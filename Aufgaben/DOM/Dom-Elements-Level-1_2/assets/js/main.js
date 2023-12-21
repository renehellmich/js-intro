

let x = true;


const example = document.getElementsByClassName("example");

objectArr = Array.from(example)
console.log(objectArr);
const button = objectArr[objectArr.length - 1]
console.log(button);

button.addEventListener("click", (e) => {
    let color = "#666"
    let color_red = "red"

    if (x == true) {
        for(let i = 0; i < example.length; i++){
            example[i].style.background = color;
        }
        e.target.style.color = "white";
        x = false;
    } else {
        for(let i = 0; i < example.length; i++){
            example[i].style.background = color_red
        }
        e.target.style.color = "white";
        x = true;
    }
    console.log("Test");
})

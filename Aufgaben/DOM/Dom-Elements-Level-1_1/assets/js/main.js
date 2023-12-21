const list = document.querySelector("#myList");
const newElement = document.querySelector("#inputText");
const button = document.querySelector("button");

button.addEventListener("click", addElement);

const inputWidth = newElement.size;

function addElement () {

    if (newElement.value != "") {
        const newListElement = document.createElement("li");
        newListElement.textContent = newElement.value;
        list.appendChild(newListElement);
    
        newElement.value = "";

        newElement.size = inputWidth;
    } else {
        let expression = "Bitte geben Sie einen Wert ein!"
        newElement.value = expression
        newElement.size = expression.length
    }
}

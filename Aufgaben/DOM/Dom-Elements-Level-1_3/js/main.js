const myList = document.querySelector("#myList")
const listArr = Array.from(myList.children)

console.log(myList);
console.log(listArr);

listArr.forEach((object, i) => {
    listArr[i] = object.innerText;
});

// ====================================================

const buttonClass = document.querySelector(".unten")
console.log(buttonClass);

const buttonFirstChild = buttonClass.firstElementChild
console.log(buttonFirstChild);

const buttonLastElementChild = buttonClass.lastElementChild;
console.log(buttonLastElementChild);

const buttonFirstNextChild = buttonClass.firstElementChild.nextElementSibling.nextElementSibling;
console.log(buttonFirstNextChild);

const buttonLastPreviousChild = buttonClass.lastElementChild.previousElementSibling.previousElementSibling;

console.log(buttonLastPreviousChild);

// ====================================================

const output = document.querySelector("output");

// ====================================================

buttonFirstChild.addEventListener("click", () => {
    output.innerText = myList.firstElementChild.innerText;
})

buttonFirstNextChild.addEventListener("click", () => {
    output.innerText = myList.lastElementChild.innerText;
})

buttonLastPreviousChild.addEventListener("click", () =>{
    output.innerText = myList.firstElementChild.nextElementSibling.innerText
})

buttonLastElementChild.addEventListener("click", () => {
    output.innerText = myList.lastElementChild.previousElementSibling.innerText;
})


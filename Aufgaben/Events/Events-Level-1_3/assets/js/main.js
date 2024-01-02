const box = document.getElementsByClassName("card");

const boxArr = Array.from(box)


console.log(boxArr);

boxArr.forEach((innerBox) => {
    innerBox.style.backgroundColor = "green";
    innerBox.style.height = "50px";
    innerBox.style.width = "50px";
    innerBox.style.marginBottom = "10px"
});






const headLine = document.querySelector(".headLineH1");

function changeHeadLine() {
    console.log("change run");
    headLine.classList.add("change");
}

function resetHeadLine() {
    console.log("reset run");
    headLine.classList.add("reset");
}
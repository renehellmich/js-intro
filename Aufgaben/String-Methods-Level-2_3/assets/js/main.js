function underlineWord() {
    const txt = document.querySelector("article");
    const input = document.querySelector("#search-input").value;

    console.log(input);

    txt.innerHTML = txt.innerText.replaceAll(input, "<span style='background-color: yellow;''>" + input + "</span>");
    
}
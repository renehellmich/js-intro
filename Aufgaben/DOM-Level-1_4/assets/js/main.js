
document.getElementById("info").innerHTML = "<h1>Hello World</h1><h2>How are you?</h2>";

document.getElementById("container").innerHTML = "<p>start of the element</p>"
document.write("<br>end of the element")

console.log("%c Good Morning", "background: white; color: red");


function textSend(eingabe){
    const text = document.querySelector("#text").value;
    const ausgabe = document.querySelector("#repeat");
    const datum = Date();
    ausgabe.innerHTML = `${text} sowie mein Text erscheinen nach dem Klick auf den Button. Heute haben wir den ${datum}`;
    document.getElementById("test").innerHTML += "<h1>Hello h1</h1>";
}
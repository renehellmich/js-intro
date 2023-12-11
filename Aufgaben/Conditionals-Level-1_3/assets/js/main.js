const formular = document.querySelector("form");

function greaterThan() {
    event.preventDefault();
    let decision = "";
    
    if (document.getElementById("input").value >= 18) {
        decision = true;
    } else {
        decision = false;
    }

    switch (decision) {
        case true:
            console.log("Ja");
            formular.innerHTML = "<p>Ja, Du kannst Shisha rauchn.</p>";
        case false:
            console.log("Nein");
            formular.innerHTML = "<p>Du bist leider zu jung!</p>";
    }
}
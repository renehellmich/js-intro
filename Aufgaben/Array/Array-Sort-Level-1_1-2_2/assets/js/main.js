let languages = [
    "JavaScript",
    "Python",
    "Java",
    "Ruby",
    "PHP",
    "C++",
    "CSS",
    "C#",
    "Go",
    "C",
    "TypeScript",
    "Swift"
];

// * 1 - 2

languages.sort()
console.log(languages);

languages.reverse()
console.log(languages);

// * 2 - 1

let phrases = ["Sergio", "Hannah", "Regallager", "Reliefpfeiler", "Rentner", "Ella mag alle Bohnen", "han nesaH has ennaH"];
let bool = null;

const revPhrases = (string) => {
    string.forEach(el => {
        el.match(" ")
            ? bool = true
            : bool = false;

        switch (bool) {
            case true:
                let values = el.split(" ");
                values.reverse();
                let output = null;
                values.forEach(longEl => {
                    output += revLetters(longEl) + " ";
                });
                console.log(output);
                break;
            case false:
                console.log(revLetters(el));
                break;
        }
    });
}

const revLetters = (string) => {
    let StringArr = string.split("")
    StringArr.reverse();
    let output = StringArr.join().replaceAll(",", "")
    // console.log(output);
    return output
}

revPhrases(phrases);

// * 2 - 2

let numArray2 = [36, 324, 122, 62, 98, 88, 99, 1000];

numArray2.sort(function(a, b) {
    return a - b;
})

numArray2.forEach((el, i) => {
    console.log(i + ":" + el);
});
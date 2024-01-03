// this 1 - 1
console.log("=== this 1 - 1 ===");

let person = {
    vorname: "Anton",
    nachname: "Fish",
    fullName: function () {
        return this.vorname + " " + this.nachname;
    }
};

console.log(person.fullName());

// this 1 - 2
console.log("=== this 1 - 2 ===");

let newPerson = {
    vorname: 'Anton',
    nachname: 'Fish',
    alter: 34,
    familienstand: 'ledig',
    groesse: '178cm',
    profil: function () {
        return this.vorname + " " + this.nachname + "<br>Alter: " + this.alter + " Jahre" + "<br>Körpergröße: " + this.groesse + "<br>Familienstand: " + this.familienstand;
}
};
//gib das Profil von Anton mit diesem Code im Element mit der "person" aus.
document.getElementById("person").innerHTML = newPerson.profil();
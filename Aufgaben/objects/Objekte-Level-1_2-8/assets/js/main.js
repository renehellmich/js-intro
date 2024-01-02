// Aufgabe 1 -2

const person = {
    name: "René",
    age: 29,
    sagnameAlter: () => {
        alert(person.name + person.age)
    }
}

console.log(person.name, person.age);
person.sagnameAlter()
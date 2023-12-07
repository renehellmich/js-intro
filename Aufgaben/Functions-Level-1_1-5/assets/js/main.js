function intro() {
    let a = 1 + 3;
    console.log("Hello World");
    console.log("1 + 3 = " + a);
}

intro();

// ! 1-2

function intro2(vorName, nachname){
    console.log(`Hi SuperCoder:in. Mein Name ist ${vorName} ${nachname}`);
}

let vorMann = "Max";
let nachMann = "Mustermann";
let vorFrau = "Mareike";
let nachFrau = "Musterfrau";

intro2(vorMann, nachMann);
intro2(vorFrau, nachFrau);

// ! 1 - 3

function intro3(name, stadt, alter){
    console.log(`Hallo, mein Name ist ${name}. Ich bin ${alter} Jahre alt. Ich komme aus ${stadt}`);
}

intro3("René Hellmich", 29, "Gummersbach");

// ! 1- 5

let num1 = 10;
let num2 = 2;

function math1(add1, add2){
    x = add1 * add2
    console.log(`Die Multiplikation von ${add1} und ${add2}:` + x);
    y = add1 / add2;
    console.log(`Die Division von ${add1} und ${add2}:` + y);
}

math1(num1, num2);
math1(30, 20)
math1(100,100);
math1(5,0)
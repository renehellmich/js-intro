let firstName = "René";
let lastName = "Hellich";

console.log(firstName.length);
console.log(lastName.length);

let fullName = `${firstName} ${lastName}`;
console.log(fullName.length);

// * 1 - 2 * //
console.log("==== 1 - 2 ==== ");

const txt = "How inappropriate to call this planet Earth, when clearly it is Ocean."

console.log(txt.indexOf("h"));
console.log(txt.indexOf("Earth"));
console.log(txt.indexOf("Moon"));

// * 1 - 4 * //
document.write("<h2>Aufgabenteil: 1 - 4</h2>")

const A = 'Susi is going to codingschool';

let var1 = A.slice(0, 4)
document.write("<p>"+var1+"</p>");

let var2 = A.slice(A.indexOf("is"), A.indexOf("is") + 2)
document.write("<p>"+var2+"</p>");

let substring = "is going to codingschool"
let var3 = A.slice(A.indexOf("is"), A.indexOf("is") + substring.length)
document.write("<p>"+var3+"</p>")

let var4 = A.slice(0, A.indexOf("going") - 1) + " " + A.slice(A.indexOf("school"), A.length);
document.write("<p>"+var4+"</p>")


// * 1 - 5 * //
document.write("<h2>Aufgabenteil: 1 - 5</h2>")

const B = 'Susi is going to codingschool';

let txt1 = B.substring(0, 4)
document.write("<p>"+txt1+"</p>");

let txt2 = B.substring(B.indexOf("is"), B.indexOf("is") + 2)
document.write("<p>"+txt2+"</p>");

let txtSubstring = "is going to codingschool"
let txt3 = B.substring(B.indexOf("is"), B.indexOf("is") + txtSubstring.length)
document.write("<p>"+txt3+"</p>")

let txt4 = A.substring(0, B.indexOf("going") - 1) + " " + B.substring(B.indexOf("school"), B.length);
document.write("<p>"+txt4+"</p>")

// * 1 - 7 * //
document.write("<h2>Aufgabenteil: 1 - 7</h2>")

const txt7 = "Sam ist good at codingschool";
const varReplaceGood = "good";
const varReplaceBad = "bad"
const varReplaceTennis = "tennis"

txt7Neu = txt7.replace("codingschool", "school");

document.write("<p>"+txt7Neu.replace("good", varReplaceBad)+"</p>");
document.write("<p>"+txt7Neu.replace("Sam", "Susi")+"</p>");
document.write("<p>"+txt7Neu.replace("school", varReplaceTennis)+"</p>");

// * 1 - 8 * //
document.write("<h2>Aufgabenteil: 1 - 8</h2>")

const txt8 = "Sam is going to codingschool";

document.write("<p>"+txt8.substring(0, 4).toUpperCase()+txt8.substring(txt8.indexOf("is"),txt8.indexOf("codingschool"))+txt8.substring(txt8.indexOf("codingschool"), txt8.length).toUpperCase()+"</p>");
document.write("<p>"+txt8.substring(0, 4).toLowerCase()+txt8.substring(txt8.indexOf("is"),txt8.indexOf("codingschool")).toUpperCase()+txt8.substring(txt8.indexOf("codingschool"), txt8.length).toLowerCase()+"</p>");
document.write(txt8);

// * 1 - 9 * //
document.write("<h2>Aufgabenteil: 1 - 9</h2>");

const string1 = "Sam is going to codingschool";
const string2 = "Susi";
const string3 = "and";

document.write("<p>"+string1+string3.concat("to the movie theater")+"</p>");
document.write("<p>"+string1.replace("codingschool", "movie theater")+"</p>");
document.write("<p>"+`${string2.concat(" "+string3).concat(" "+string1.replace("codingschool", "school"))} `+"</p>");
document.write("<p>"+`${string2.concat(" "+string3).concat(" "+string1.replace("codingschool", "gym")).concat(" "+string3).concat(" to the movie theater")} `+"</p>");
document.write("<p>"+`${string1.replace("Sam", string2).replace("codingschool", "school").concat(" "+string3+" to the movie theater")} `+"</p>");
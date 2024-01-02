let edelMetallPreise = [
    { name: "Gold", preiseGramEuro: 42.91, veraenderung: "+0.12%" },
    { name: "Silber", preiseGramEuro: 0.51, veraenderung: "+1.02%" },
    { name: "Platin", preiseGramEuro: 25.74, veraenderung: "+0.41%" },
    { name: "Palladium", preiseGramEuro: 50.93, veraenderung: "0.00%" },
    { name: "Rhodium", preiseGramEuro: 160.12, veraenderung: "-0.10%" },
    { name: "Iridium", preiseGramEuro: 42.84, veraenderung: "0.00%" },
    { name: "Ruthenium", preiseGramEuro: 7.36, veraenderung: "0.00%" },
    { name: "Rhenium", preiseGramEuro: 37.22, veraenderung: "-0.53%" },
    { name: "Osmium", preiseGramEuro: 11.54, veraenderung: "0.00%" }
];

let edelMetallName = []

edelMetallPreise.forEach((element) => {
    edelMetallName.push(element.name)
})
console.log("ForEach: ", edelMetallName);

let NameMap = (Object.values(edelMetallPreise).map(e => e.name));
console.log("Map: ", NameMap);

let edelMetallGramEuro = []

edelMetallPreise.forEach((element) => {
    edelMetallGramEuro.push(element.preiseGramEuro)
})
console.log("ForEach: ", edelMetallGramEuro);

let edelMetallVeraenderung = []

edelMetallPreise.forEach((element) => {
    edelMetallVeraenderung.push(element.veraenderung)
})
console.log("ForEach: ", edelMetallVeraenderung);

console.log(Object.values(edelMetallPreise).filter(e => e.preiseGramEuro > 50));

const myTbl = document.createElement("table")
document.body.appendChild(myTbl)

myTbl.style.border = "1px solid black"
myTbl.style.borderCollapse = "collapse"

const headerRow = myTbl.insertRow(0);
const headerCell1 = headerRow.insertCell(0);
const headerCell2 = headerRow.insertCell(1);
const headerCell3 = headerRow.insertCell(2);

headerCell1.style.border = "2px double black";
headerCell2.style.border = "2px double black";
headerCell3.style.border = "2px double black";

headerCell1.innerHTML = "Name";
headerCell2.innerHTML = "Preis pro Gramm (Euro)";
headerCell3.innerHTML = "Veränderung";

// Füge Datenzeilen hinzu
for (let i = 0; i < edelMetallName.length; i++) {
    const row = myTbl.insertRow(-1); // -1 fügt eine Zeile am Ende der Tabelle ein

    const cell1 = row.insertCell(0);
    const cell2 = row.insertCell(1);
    const cell3 = row.insertCell(2);

    cell1.style.border = "2px double black";
    cell2.style.border = "2px double black";
    cell3.style.border = "2px double black";

    cell1.innerHTML = edelMetallName[i];
    cell2.innerHTML = edelMetallGramEuro[i];
    cell3.innerHTML = edelMetallVeraenderung[i];
}

// Object 2 - 2
console.log("=== object 2 - 2 ===");

const singers = [
    { name: 'The Beatles', country: 'United Kingdom', period_active: { start: 1960, end: 1970 }, genre: "Rock / Pop" },
    { name: 'Elvis Presley', country: 'United States', period_active: { start: 1954, end: 1977 }, genre: "Rock and roll" },
    { name: 'Michael Jackson', country: 'United States', period_active: { start: 1964, end: 2009 }, genre: "Pop / Rock / Dance / Soul / R&B" },
    { name: 'Elton John', country: 'United Kingdom', period_active: { start: 1964, end: "present" }, genre: "Pop / Rock" },
    { name: 'Madonna', country: 'United States', period_active: { start: 1979, end: "present" }, genre: "Pop / Dance / Electronica" },
    { name: 'Led Zeppelin', country: 'United Kingdom', period_active: { start: 1968, end: 1980 }, genre: "Hard rock / Blues rock / Folk rock" },
    { name: 'Rihanna', country: 'United States', period_active: { start: 2005, end: "present" }, genre: "R&B / Pop / Dance / Hip-hop" },
    { name: 'Pink Floyd', country: 'United Kingdom', period_active: { start: 1965, end: 1996, extra: 2014 }, genre: "Progressive rock / Psychedelic rock" },
];

singersArray = Object.values(singers)
singersArray.sort((a,b) => {
    if (a.name < b.name){
        return -1;
    } else if(a.name > b.name) {
        return 1;
    }
    return 0
})

console.log(singersArray);

//Object 2 - 3
console.log("=== object 2 - 3 ===");

const divTable = document.querySelector("#table-container")
const myTbl2_4 = document.createElement("table")
divTable.appendChild(myTbl2_4)

const tblHeaderRow = myTbl2_4.insertRow(0)
const firstCell = tblHeaderRow.insertCell(0)
const secondCell = tblHeaderRow.insertCell(1)
const thirdCell = tblHeaderRow.insertCell(2)
const fourthCell = tblHeaderRow.insertCell(3)

firstCell.innerHTML = "Name"
firstCell.style.fontWeight = "bold"
firstCell.style.textAlign = "center"

secondCell.innerHTML = "Country"
secondCell.style.fontWeight = "bold"
secondCell.style.textAlign = "center"

thirdCell.innerHTML = "Period Active"
thirdCell.style.fontWeight = "bold"
thirdCell.style.textAlign = "center"

fourthCell.innerHTML = "Genre"
fourthCell.style.fontWeight = "bold"
fourthCell.style.textAlign = "center"

singers.forEach((e) => {
    const row = myTbl2_4.insertRow(-1)

    const cell1 = row.insertCell(0)
    const cell2 = row.insertCell(1)
    const cell3 = row.insertCell(2)
    const cell4 = row.insertCell(3)

    // console.log(Object.values(e.period_active).join().replace(",", " - "));

    cell1.innerHTML = e.name
    cell2.innerHTML = e.country
    cell3.innerHTML = Object.values(e.period_active).join().replace(",", " - ")
    cell4.innerHTML = e.genre
});


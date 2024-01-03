const date1 = new Date("September 2, 2019 09:00:00")
const date2 = new Date(0)
const date3 = new Date(31446908800)
const date4 = new Date(86400000)

const div = document.createElement("div")
document.body.appendChild(div)
div.innerHTML = `${date1} = new Date("September 2, 2019 09:00:00")`
div.innerHTML += "<br>" + `${date2} = new Date(0)`
div.innerHTML += "<br>" + `${date3} = new Date(31446908800)`
div.innerHTML += "<br>" + `${date4} = new Date(86400000)`

// 1 - 4
console.log("=== Date 1 - 4 ===");

const tageImMonat = (monat, jahr) => {
    const date = new Date(jahr, monat)
    console.log(date.getUTCDate());
}

tageImMonat(1, 2016)
tageImMonat(2, 2016)
tageImMonat(2, 2017)
tageImMonat(12, 2017)

// 1 - 5
console.log("=== Date 1 - 5 === ");

let list = [
    "Januar",
    "Februar",
    "März",
    "April",
    "Mai",
    "Juni",
    "Juli",
    "August",
    "September",
    "Oktober",
    "November",
    "Dezember"
];

const monatsName = (date) => {
    const monthNumber = list[new Date(date).getUTCMonth()]
    
    console.log(monthNumber);
} 

monatsName("2001-3-4")
monatsName("2019-12-24")
monatsName("1410-07-15")


// 1 - 7
console.log("=== Date 1 - 7 === ");

const tagesunterschied = (option) => {
    const date = new Date(option);
    // console.log(date.getDay());

    if (date.getDay() > 0 && date.getDay() < 6) {
        console.log("Arbeitstag");
    } else {
        console.log("Weekend");
    }
}

tagesunterschied("12.15.2019")
tagesunterschied("2.16.2001")
tagesunterschied("2.1.2020")
tagesunterschied("2.29.2020")
tagesunterschied("1.3.2024")
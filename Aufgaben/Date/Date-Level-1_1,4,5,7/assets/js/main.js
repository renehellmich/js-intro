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
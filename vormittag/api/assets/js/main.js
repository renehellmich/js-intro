// === API ===

// * API ist eine Schnittstelle zwischen Frontend und Backend
// * Application Programming Interface kommuniziert zwischen Frontend und Server 
// * es könnte auch sein, dass Server mit Server kommuniziert

// ? Datentyp => Boolean, Number, String, Array, Object => ab jetzt gibts was neues: JSON

// * JSON => JavaScript Object Notation

console.log(fetch("https://dummyjson.com/products"));

/*
fetch hat 3 Promise Zustände
    - Pending: Anfrage ist ausgeführt, allerdings ohne Antwort
    - Fullfield: Anfrage ist ausgeführt und die Daten bzw. die Antwort ist da
    - Rejected: Anfrage wurde abgelehnt.
*/

fetch("https://dummyjson.com/products")
.then((response) => response.json())
.then((data) => {
    console.log(data)
    const products = data.products
    console.log(products);

    products.forEach((el) => {
        const productID = el.id
        // console.log(productID);
        const title = el.title
        // console.log(title);
        const description = el.description
        // console.log(description);
        const dataImg = el.images[0]
        // console.log(dataImg);
        const price = el.price
        // console.log(price);

        let product = document.createElement("div")

        let h2 = document.createElement("h2")
        h2.textContent = title
        product.appendChild(h2)

        // Beschreibung
        let p = document.createElement("p")
        p.textContent = description
        product.appendChild(p)

        // Preis
        let h5 = document.createElement("h5")
        h5.textContent = `${price}€`
        product.appendChild(h5)

        // Img
        let img = document.createElement("img")
        img.setAttribute("src", dataImg)
        img.setAttribute("alt", title)
        // console.log(img);
        product.appendChild(img)

        //btn

        let infoBtn = document.createElement("button")
        infoBtn.textContent = "More Information"
        infoBtn.addEventListener("click", () => {
            fetch(`https://dummyjson.com/products/${productID}`)
            .then((resp) => resp.json())
            .then((data) => console.log(data))
            .catch((error) => console.log(error))
        })

        product.appendChild(infoBtn)

        document.querySelector("#products").appendChild(product)

    });
})
.catch((error) => console.log("Die Küche brennt leider", error))

// ! LOKAL FETCH

fetch("./assets/data/fakeData.json")
.then((resp) => resp.json())
.then((data) => console.log(data))
.catch((err) => console.log(err))

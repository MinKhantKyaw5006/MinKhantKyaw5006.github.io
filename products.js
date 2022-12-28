// define data
var products = [
    {
        name: "Vivo V20 Plus",
        quantity: 2,
        ppu: 11000
    },
    {
        name: "Samsumg Galxy S20",
        quantity: 1,
        ppu: 35000
    },
    {
        name: "Oppo Reno 6",
        quantity: 3,
        ppu: 16000
    },
    {
        name: "IPhone 14 Pro Max",
        quantity: 1,
        ppu: 40000
    }
]

function loadData() {
    let elem = document.getElementById("myName")
    elem.innerHTML = "Tanat Arora"

    let productList = document.getElementById("productList")

    let gross = 0
    for (let p in products) {
        let row = document.createElement("tr")

        let productName = document.createElement("td")
        productName.innerHTML = products[p].name

        let quantity = document.createElement("td")
        quantity.innerHTML = products[p].quantity
        quantity.classList.add("text_right")

        let ppu = document.createElement("td")
        ppu.innerHTML = products[p].ppu
        ppu.classList.add("text_right")

        let total = document.createElement("td")
        total.innerHTML = products[p].ppu * products[p].quantity
        total.classList.add("text_right")
        
        gross += products[p].ppu * products[p].quantity
        vat = gross * 0.07
        net = gross + vat

        row.appendChild(productName)
        row.appendChild(quantity)
        row.appendChild(ppu)
        row.appendChild(total)
        productList.appendChild(row)
    }

    let grossElem = document.getElementById("gross")
    grossElem.innerHTML = gross

    let vatElem = document.getElementById("vat")
    vatElem.innerHTML = Math.round(vat).toFixed(2)

    let netElem = document.getElementById("net")
    netElem.innerHTML = net
}
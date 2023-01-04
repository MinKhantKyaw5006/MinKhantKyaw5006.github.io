// define data
var products = [
    {
        name: "Samsung S22 ultra",
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

// This funciton will pick the value from the <select>

function addToCart() {
    let elProduct = document.getElementById("products")
    let pVal = elProduct.value
    console.log(pVal)
    
    let productObj = {
        name: $('#products').val(),
        quantity: $('#qty').val(),
        ppu: $('#ppu').val(),
    }

    $('#productBody').html("")

    products.push(productObj)
    loadData()
}

function loadData() {
    let elem = document.getElementById("myName")
    elem.innerHTML = "Lucas Antonio"

    let allRows = ""
    let gross = 0
    for (let p in products) {
        let cellName = `<td><img class='icon' src='delete.png' onclick='deleteProduct("${p}")'> ` + products[p].name + "</td>"
        let cellQuantity = '<td class="text_right">' + products[p].quantity + "</td>"
        let cellPPU = '<td class="text_right">' + products[p].ppu + "</td>"
        let total = products[p].ppu * products[p].quantity
        gross += total
        let cellTotal = '<td class="text_right">' + total + "</td>"
        let row = `<tr>${cellName}${cellQuantity}${cellPPU}${cellTotal}</tr>`
        allRows += row
    }
    $('#productBody').html(allRows)

    $("#gross").html(gross)

    let vat = gross * 0.07
    let net = gross + vat
    $("#vat").html(vat.toFixed(2))
    $("#net").html(net.toFixed(2))
}

function deleteProduct(index) {
    console.log("DELETE", index)
    delete products[index]
    $('#productBody').html("")
    loadData()
}

function loadDataOld() {
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
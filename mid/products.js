var Products = []


$(document).ready(function() {
    console.log("Welcome to Store!!")

    $.ajax({
        url: "Item.json",
    }).done(function (item) {
    
        
        for(let i in item) {
            Products.push(item[i])
            let dataStr = `<tr>
                <td><img style="width: 1.5em;" src='delete.png' onclick='DeleteProduct("${i}")'></td>
                <td>${item[i].Item}</td>
                <td>${item[i].Price}</td>
                <td>${item[i].Qty}</td>
                <td>${item[i].Amount}</td>
            </tr>`
            $("#data-table tr:last").after(dataStr)
        }

        console.log(Products)
    });
});    

function DeleteProduct(index) {
    console.log("Delete " + index)
    delete Products[index]

    console.log(Products)

    var count = $('#data-table tr').length;
 
    while (count > 1) {
        document.getElementById("data-table").deleteRow(1);
        count--;
    }

    for (let c in Products) {
        let csData = `<tr>
        <td><img style="width: 1.5em;" src='delete.png' onclick='DeleteProduct("${c}")'></td>
        <td>${Products[c].Item}</td>
        <td>${Products[c].Price}</td>
        <td>${Products[c].Qty}</td>
        <td>${Products[c].Amount}</td>
        </tr>`
        $("#data-table tr:last").after(csData)
    }
}

function clearTable() {

    var table = document.getElementById("data-table");

    var rows = table.querySelectorAll("tr:not(:first-child)");

    rows.forEach(function(row) {

        row.remove();

    });

}


function CalculateAmount (val){
    var tot_price= val * 100;
    var divobj= document.getElementById('tableBody');
    divobj.value= tot_price;
}


function addProduct() {
    let newName = (document.getElementById("exampleFormControlInput1")).value
    console.log(newName)

    let newProduct = {
        Item: $('#exampleFormControlInput1').val(),
        Price: $('#exampleFormControlInput2').val(),
        Qty: $('#exampleFormControlInput3').val(),
    }

    Products.push(newProduct)
    console.log(Products)

    let newData =  `<tr>
    <td><img style="width: 1.5em;" src='delete.png' onclick='DeleteProduct("${(Products.length)-1}")'></td>
    <td>${newProduct.Item}</td>
    <td>${newProduct.Price}</td>
    <td>${newProduct.Qty}</td>
    </tr>`

    $("#data-table tr:last").after(newData)
    
    
    let allRows = ""
    let gross = 0
    for (let p in products) {
        let cellName = `<td><img class='icon' src='icon-delete.png' onclick='deleteProduct("${p}")'> ` + products[p].Item + "</td>"
        let cellQuantity = '<td class="text-right">' + products[p].Qty + "</td>"
        let cellPPU = '<td class="text-right">' + products[p].Price + "</td>"
        let total = products[p].Price * products[p].Qty
        gross += total
        let cellTotal = '<td class="text-right">' + total + "</td>"
        let cellDiscount = '<td class="text-right">' + products[p].discount + "</td>"
        let row = `<tr>${cellName}${cellQuantity}${cellPPU}${cellTotal}${cellDiscount}</tr>`
        allRows += row
    }
    $('#data-table tr:Last').html(allRows)
    $("#gross").html(gross)
}



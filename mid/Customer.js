var Products = []


$(document).ready(function() {
    console.log("Welcome to Store!!")

    $.ajax({
        url: "data.json",
    }).done(function (data) {
    
        
        for(let d in data) {
            Products.push(data[d])
            let dataStr = `<tr>
                <td><img style="width: 1.5em;" src='delete.png' onclick='deleteCustomer("${d}")'>${data[d].name}</td>
                <td>${data[d].email}</td>
                <td>${data[d].phone}</td>
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
        <td><img style="width: 1.5em;" src='delete.png' onclick='deleteCustomer("${c}")'>${Products[c].name}</td>
        <td>${Products[c].email}</td>
        <td>${Products[c].phone}</td>
        </tr>`
        $("#data-table tr:last").after(csData)
    }
}

function addProduct() {
    let newName = (document.getElementById("exampleFormControlInput1")).value
    console.log(newName)

    let newCustomer = {
        name: $('#exampleFormControlInput1').val(),
        email: $('#exampleFormControlInput2').val(),
        phone: $('#exampleFormControlInput3').val()
    }

    Products.push(newCustomer)
    console.log(Products)

    let newData =  `<tr>
    <td><img style="width: 1.5em;" src='delete.png' onclick='deleteCustomer("${(Products.length)-1}")'>${newCustomer.name}</td>
    <td>${newCustomer.email}</td>
    <td>${newCustomer.phone}</td>
    </tr>`

    $("#data-table tr:last").after(newData)
}


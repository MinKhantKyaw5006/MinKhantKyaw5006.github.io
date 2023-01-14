var products = []; var Discount = 0; var Gross = 0; var AfterDiscount = 0;

$(document).ready(function () {
  console.log("ready!");
  $.ajax({
    url: "products.json",
  }).done(function (data) {
    s
    console.log("DONE", data);
    for (let d in data) {


      products.push(data[d]);
      let dataStr = `<tr id="row${d}">
                <td style="width:40px"><img src='button.png' class='icon' onclick="deleteProduct(${d})"></td>
                <td>${parseFloat(data[d].Quantity)}</td>
                <td>${data[d].Item}</td>
                <td>${parseFloat(data[d].UnitPrice).toFixed(2)}</td>
                <td>${parseFloat(data[d].TotalDiscount).toFixed(2)}</td>
                <td>${parseFloat(
        parseFloat(data[d].Quantity) * parseFloat(data[d].UnitPrice)
      ).toFixed(2)}</td>
                <td>${parseFloat(
        parseFloat(data[d].Quantity) * parseFloat(data[d].UnitPrice) -parseFloat(data[d].discount)
      ).toFixed(2)}</td>
            </tr>`;
      $("#data-table tr:last").after(dataStr);Discount = Discount + parseFloat(data[d].discount);
      $("#Discount").html(Discount.toFixed(2));Gross = Gross + parseFloat(data[d].Quantity) * parseFloat(data[d].UnitPrice);
      $("#Gross").html(Gross.toFixed(2));AfterDiscount =AfterDiscount +parseFloat(parseFloat(data[d].Quantity) * parseFloat(data[d].UnitPrice) -parseFloat(data[d].discount));
      $("#AfterDiscount").html(AfterDiscount.toFixed(2));
    }
  });
});

//function DeleteProduct(index) {
//  console.log("Delete " + index)
//  delete Products[index]
//
//  console.log(Products)
//
//  var count = $('#data-table tr').length;
//
//  while (count > 1) {
//      document.getElementById("data-table").deleteRow(1);
//      count--;
// }


$("#clearBtn").click(function () {
  for (let i = 0; i < products.length; i++) {
    delete products[i];
    let deletedRow = "#row" + i;
    $(deletedRow).remove();
  }
  Discount = 0;
  Gross = 0;
  AfterDiscount = 0;
  $("#Discount").html(Discount.toFixed(2));
  $("#Gross").html(Gross.toFixed(2));
  $("#AfterDiscount").html(AfterDiscount.toFixed(2));
});

function deleteProduct(index) {
  Discount = Discount - parseFloat(products[index].discount);
  $("#Discount").html(Discount.toFixed(2));
  Gross =Gross -parseFloat(products[index].Quantity) * parseFloat(products[index].UnitPrice);
  $("#Gross").html(Gross.toFixed(2));
  AfterDiscount =AfterDiscount -parseFloat(parseFloat(products[index].Quantity) * parseFloat(products[index].UnitPrice) -parseFloat(products[index].discount)
    );
  $("#AfterDiscount").html(AfterDiscount.toFixed(2));
  delete products[index]; // Delete element from array
  let deletedRow = "#row" + index;
  $(deletedRow).remove(); //Delete row
}

//function Addition() {
//  let newName = (document.getElementById("exampleFormControlInput1")).value
//  console.log(newName)
//
//  let newCustomer = {
//      name: $('#exampleFormControlInput1').val(),
//      email: $('#exampleFormControlInput2').val(),
//      phone: $('#exampleFormControlInput3').val()
//  }
//
//  Products.push(newCustomer)
//  console.log(Products)
//
//  let newData =  `<tr>
//  <td><img style="width: 1.5em;" src='delete.png' onclick='deleteCustomer("${(Products.length)-1}")'>${newCustomer.name}</td>
//  <td>${newCustomer.email}</td>
//  <td>${newCustomer.phone}</td>
//  </tr>`
//
//  $("#data-table tr:last").after(newData)
//}

function Addition() {
  let QuantityofItem = $("#QuantityofItem").val();
  let ProductName = $("#ProductName").val();
  let UnitPrice = $("#UnitPrice").val();
  let Promo = $("#Promo").val();
  let newProductAmount = parseFloat(
    parseFloat(QuantityofItem) * parseFloat(UnitPrice)
  ).toFixed(2);
  let amountAfterDiscount = parseFloat(
    parseFloat(newProductAmount) - parseFloat(Promo)
  ).toFixed(2);

  let Device = {
    Quantity: QuantityofItem,Item: ProductName,UnitPrice: UnitPrice,
    discount: Promo,amount: newProductAmount,
    amountAfterDiscount: amountAfterDiscount,
  };

  products.push(Device);

  let newProductIndex = products.length - 1;
  let newProduct = products[newProductIndex];

  let dataStr = `<tr id="row${newProductIndex}">

        <td style="width:40px"><img src='image/icondelete.png' class='icon' onclick="deleteProduct(${newProductIndex})"></td>
        <td>${parseFloat(newProduct.Quantity)}</td>
        <td>${newProduct.Item}</td>
        <td>${parseFloat(newProduct.UnitPrice).toFixed(2)}</td>
        <td>${parseFloat(newProduct.discount).toFixed(2)}</td>
        <td>${newProduct.amount}</td>
        <td>${newProduct.amountAfterDiscount}</td>
        
    </tr>`;
  $("#data-table tr:last").after(dataStr);
  Discount = Discount + parseFloat(newProduct.discount);

  $("#Discount").html(Discount.toFixed(2));
  Gross = Gross + parseFloat(newProduct.amount);
  
  $("#Gross").html(Gross.toFixed(2));
  AfterDiscount =AfterDiscount + parseFloat(newProduct.amountAfterDiscount);

  $("#AfterDiscount").html(AfterDiscount.toFixed(2));
}
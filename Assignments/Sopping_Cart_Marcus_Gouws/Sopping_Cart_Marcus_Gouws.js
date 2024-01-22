var nums = [1, 2, 3, 4];
var items = ["Coke", "Kit Kat", "Bar One", "Fanta"];
var prices = [7.5, 9.5, 8.5, 7.5];
var quantities = [0, 0, 0, 0];
var totals = [0.0, 0.0, 0.0, 0.0];
var totalOrderAmt = 0;

function add_selection(x) {
    console.log(x);
    quantities[x] = quantities[x] + 1;
    totals[x] = prices[x] * quantities[x];
    totalOrderAmt += prices[x];

    display_all();
}
function remove_selection(x) {
    console.log(x);
    quantities[x] = quantities[x] - 1;
    if(quantities[x]<0){
        alert( "You can not remove any more items");
        quantities[x]=quantities[x]+1;
    }
    totals[x] = prices[x] * quantities[x];
    totalOrderAmt -= prices[x];

    display_all();
}

function checkOut(){
    let message = "Your total price is: " + totalOrderAmt + "<br>Your items are:<br>";

  for (let i = 0; i < items.length; i++) {
    message += items[i] + ": " + quantities[i] + "<br>";
  }

   //These lines create a div element (popupContainer) and assign it a CSS class "popup-container" to style it later.
  // crating the popup container
  let popupContainer = document.createElement("div");
  popupContainer.classList.add("popup-container");

  //adding the button with what function it must perform
  let closeButton = document.createElement("button");
  closeButton.textContent = "Close";
  closeButton.addEventListener("click", function () {
    document.body.removeChild(popupContainer);
  })

 
  //this tells the program what to display
  popupContainer.innerHTML = message;
  //adds the closebtn to the form
  popupContainer.appendChild(closeButton);

    //this displays the popupcontainer created
  document.body.appendChild(popupContainer);
}

 


function display_all() {



    var myTable = "<table><th style='width: 100px; color: red; text-align: right;'>Num</th>";
    myTable += "<th style='width: 100px; color: red; text-align: right;'>Item</th>";
    myTable += "<th style='width: 100px; color: red; text-align: right;'>Price</th>";
    myTable += "<th style='width: 100px; color: red; text-align: right;'>Quantity</th>";
    myTable += "<th style='width: 100px; color: red; text-align: right;'>Total</th>";
    myTable += "<th style='width: 100px; color: red; text-align: right;'>Remove</th>";
    myTable += "<th style='width: 100px; color: red; text-align: right;'>Add</th>";
    
   
      for (i = 0; i < items.length; i++) {
      myTable += "<tr><td style='width: 100px; text-align: right;'>" + nums[i] + "</td>";
      myTable += "<td style='width: 100px; text-align: right;'>" + items[i] + "</td>";  // Corrected this line
      myTable += "<td style='width: 100px; text-align: right;'>" + prices[i] + "</td>";
      myTable += "<td style='width: 100px; text-align: right;'>" + quantities[i] + "</td>";
      myTable += "<td style='width: 100px; text-align: right;'>" + totals[i] + "</td>";
      myTable += "<td style='width: 100px; text-align: right;'><button onclick='remove_selection(" + i + ")'>Remove</button></td>";
      myTable += "<td style='width: 100px; text-align: right;'><button onclick='add_selection(" + i + ")'>Add</button></td>";
    }


   
   
    myTable += "</table>";
    // myTable += "<br/><br/><p>Total: " + totalOrderAmt + "</p>";
     myTable += "<td style='width: 100px; text-align: right;'><button onclick='checkOut()'>Checkout</button></td>";
     


    //document.write(myTable);
    document.getElementById("demo").innerHTML = myTable;


}

window.onload = function() {
    display_all();
}
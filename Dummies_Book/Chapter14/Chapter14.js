// Adding an event listener to the "placeOrder" button
document.getElementById("placeOrder").addEventListener("click", placeOrder);
document.getElementById("tip").addEventListener("click", handleTip);

// Declare tipAmount variable globally
let tipAmount = 0;

// Function to handle the order placement
function placeOrder() {
    // Retrieving input values from the form
    let numPizzas = document.getElementById("numPizzas").value;
    let typePizza = document.getElementById("typePizza").value;
    let deliveryCity = document.getElementById("deliveryCity").value;
    let birthday = new Date(document.getElementById("Birthday").value);
    let currentDate = new Date();

    // Validating the number of pizzas input
    if (!numPizzas || numPizzas == 0) {
        alert("Please enter a valid number of pizzas.");
        return;
    }

    // Calculating the order price based on the pizza type
    let orderPrice = calculatePrice(numPizzas, typePizza);

    // Calculating the delivery price based on the delivery city
    let deliveryPrice = calculateDelivery(orderPrice, deliveryCity);

    // Initializing the output message
    let theOutput = "<p>Thank you for your order.</p>";

    // Checking if it's the customer's birthday and applying discounts
    if (
        birthday.getDate() === currentDate.getDate() &&
        birthday.getMonth() === currentDate.getMonth() &&
        orderPrice > 100
    ) {
        // Use tipAmount here
        theOutput += "<p>Your Tip: $" + tipAmount;
        theOutput += "<p>Your total is: $" + ((orderPrice + deliveryPrice) * 0.1 + tipAmount);
        theOutput += "<p>Your delivery is: $" + deliveryPrice;
        theOutput += "<p>Happy Birthday! you have a 10% discount!";
        document.getElementById("displayTotal").innerHTML = theOutput;

    // Checking if it's the customer's birthday without qualifying for discount
    } else if (
        birthday.getDate() === currentDate.getDate() &&
        birthday.getMonth() === currentDate.getMonth()
    ) {
        // Use tipAmount here
        theOutput += "<p>Your Tip: $" + tipAmount;
        theOutput += "<p>Happy Birthday!";
        theOutput += "<p>Your total is: $" + (orderPrice + deliveryPrice + tipAmount);
        theOutput += "<p>Your delivery is: $" + deliveryPrice;
        document.getElementById("displayTotal").innerHTML = theOutput;

    // Handling regular orders
    } else {
        // Use tipAmount here
        theOutput += "<p>Your Tip: $" + tipAmount;
        theOutput += "<p>Your total is: $" + (orderPrice + deliveryPrice + tipAmount);
        theOutput += "<p>Your delivery is: $" + deliveryPrice;
        document.getElementById("displayTotal").innerHTML = theOutput;
    }
}

// Function to handle the tip calculation
function handleTip() {
    // Prompting the user for a tip amount
    tipAmount = parseFloat(prompt("Enter tip amount in dollars:"));

    // Checking if the user entered a valid tip amount
    if (tipAmount === null || tipAmount === "") {
        alert("Tip amount cannot be empty. Tip not added.");
        return;
    }

    // Checking if the entered tip amount is a valid number
    if (isNaN(tipAmount) || tipAmount < 0) {
        alert("Invalid tip amount. Tip not added.");
        return;
    }
}

// Function to calculate the order price based on pizza type
function calculatePrice(numPizzas, typePizza) {
    let orderPrice = 0;
    let extraCharge = 0;

    // Checking the type of pizza and applying additional charges
    if (typePizza === "Steak") {
        orderPrice = Number(numPizzas) * 10;
        extraCharge = 5;
        orderPrice += extraCharge;
        return orderPrice;
    } else if (typePizza === "Rib&Cheese") {
        orderPrice = Number(numPizzas) * 10;
        extraCharge = 10;
        orderPrice += extraCharge;
        return orderPrice;
    } else {
        orderPrice = Number(numPizzas) * 10;
        extraCharge = 0;
        orderPrice += extraCharge;
        return orderPrice;
    }
}

// Function to calculate the delivery price based on the delivery city
function calculateDelivery(orderPrice, deliveryCity) {
    let deliveryPrice = 0;

    // Checking the delivery city and assigning delivery charges
    if (deliveryCity === "KemptonPark") {
        deliveryPrice = 10;
        return deliveryPrice;
    } else if (deliveryCity === "Edenvale") {
        deliveryPrice = 20;
        return deliveryPrice;
    } else if (deliveryCity === "Spartan") {
        deliveryPrice = 5;
        return deliveryPrice;
    } else if (deliveryCity === "Silverlakes") {
        deliveryPrice = 15;
        return deliveryPrice;
    } else if (deliveryCity === "Sarengeti") {
        deliveryPrice = 30;
        return deliveryPrice;
    }
}

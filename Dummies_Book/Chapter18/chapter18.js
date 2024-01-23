// Declare global variables
let money = 20;        // Initial amount of money
let lunches = 0;       // Number of lunches bought

// Display lunch budget on the webpage
document.getElementById("money").innerHTML = money;

// Listen for the order button click
document.getElementById("placeOrder").addEventListener("click", buyLunches);

/*
  Buys a specified number of sandwiches per day at current prices
*/
function buyLunches() {
    resetForm();   // Reset the game for a new order
    let day = 0;    // Initialize the day counter

    // Continue buying lunches while there is money available
    while (money > 0) {
        day++;
        let priceToday = getSandwichPrice();  // Get the price of sandwiches for the day
        let numberOfSandwiches = document.getElementById("numSandwiches").value;
        let totalPrice = priceToday * numberOfSandwiches;

        // Check if there is enough money to buy the sandwiches
        if (money >= totalPrice) {
            money = money - totalPrice;  // Deduct the cost of sandwiches from the budget
            lunches++;                  // Increment the lunch counter
            // Display a receipt message for the day
            document.getElementById("receipt").innerHTML += "<p>On day " + day + ", sandwiches are: $" + priceToday + ". You have $" + money.toFixed(2) + " left.</p>";

        } else {
            // Display a message if there is not enough money for the sandwiches
            document.getElementById("receipt").innerHTML += "<p>Today, sandwiches are: $" + priceToday + ". You don't have enough money, Call a Friend!.</p>";
            money = 0;  // Set money to 0 as there is no more budget
        }
    }

    // Display the total number of lunches bought during the week
    document.getElementById("receipt").innerHTML += "<p>You bought " + lunches + " lunches this week.</p>";
}

/*
  Gets the current price of sandwiches
*/
function getSandwichPrice() {
    // Generate a random sandwich price between $1 and $5
    let sandwichPrice = (Math.random() * (5 - 1) + 1).toFixed(2);
    return sandwichPrice;
}

/*
  Resets the game so that a new order can be placed
*/
function resetForm() {
    money = 20;    // Reset the budget to the initial amount
    lunches = 0;   // Reset the lunch counter
    document.getElementById("receipt").innerHTML = "";  // Clear the receipt on the webpage
}

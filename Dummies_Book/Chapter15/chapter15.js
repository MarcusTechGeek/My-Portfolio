
// Get references to HTML elements
let todayDate = document.getElementById("todaysdate");
let todoButton = document.getElementById("whattodo");

// Add click event listener to the button
todoButton.addEventListener("click", displayActivity);

// Get the current date
let d = new Date();

// Display the current date initially
displayDate();

// Function to display the current date
function displayDate() {
    todayDate.innerHTML = d.toDateString();
}

// Function to display an activity based on the day of the week
function displayActivity() {
    // Get the day of the week (0 = Sunday, 1 = Monday, ..., 6 = Saturday)
    let dayOfWeek = d.getDay();

    // Variable to store the suggested activity
    let youShould;

    // Switch statement to determine the activity based on the day of the week
    switch (dayOfWeek) {
        case 0:
            youShould = "it is Sunday Play video games with friends or online.";
            break;
        case 1:
            youShould = "it is Monday Try out a new outdoor adventure like rock climbing or kayaking.";
            break;
        case 2:
            youShould = "it is Teusday Experiment with cooking and try out new recipes.";
            break;
        case 3:
            youShould = "it is Wednessday Plan a weekend getaway or road trip to a nearby city or scenic location.";
            break;
        case 4:
            youShould = "it is Thursday Challenge yourself with brain teasers, puzzles, or strategy games.";
            break;
        case 5:
            youShould = "it is Friday Explore the latest tech trends and gadgets.";
            break;
        case 6:
            youShould = "it is Saturday Host a barbecue or grill-out with friends and family..";
            break;
        default:
            youShould = "ERROR 404! DAY NOT FOUND:(";
            break;
    }

    // Display the suggested activity in the HTML element with the id "thingToDo"
    document.getElementById("thingToDo").innerHTML = youShould;
}
 

// Get the button with the id "replaceButton" from the HTML document
let button1 = document.getElementById("replaceButton");

// Attach an event listener to the button, so when it's clicked, the function replaceit is called
button1.addEventListener("click", replaceit);

// Function to replace placeholders in the story with user-input values
function replaceit() {
    // Get the element with the id "story" from the HTML document
    let story1 = document.getElementById("story");

    // Get values from input fields and wrap them in HTML spans with the class 'replacement'
    let adj11 = "<span class='replacement'>" + document.getElementById("adj1").value + "</span>";
    let verbing1 = "<span class='replacement'>" + document.getElementById("verbIng").value + "</span>";
    let roomInHouse1 = "<span class='replacement'>" + document.getElementById("roomInHouse").value + "</span>";
    let color1 = "<span class='replacement'>" + document.getElementById("color").value + "</span>";
    let nounPlural1 = "<span class='replacement'>" + document.getElementById("nounPlural").value + "</span>";
    let pastVerb1 = "<span class='replacement'>" + document.getElementById("pastVerb").value + "</span>";
    let beverage1 = "<span class='replacement'>" + document.getElementById("beverage").value + "</span>";
    let musicType1 = "<span class='replacement'>" + document.getElementById("musicType").value + "</span>";
    let diffRoom1 = "<span class='replacement'>" + document.getElementById("diffRoom").value + "</span>";
    let exclamation1 = "<span class='replacement'>" + document.getElementById("exclamation").value + "</span>";
    let pastVerb21 = "<span class='replacement'>" + document.getElementById("pastVerb2").value + "</span>";
    let adjDance1 = "<span class='replacement'>" + document.getElementById("adjDance").value + "</span>";
    let animal1 = "<span class='replacement'>" + document.getElementById("animal").value + "</span>";
    let city1 = "<span class='replacement'>" + document.getElementById("city").value + "</span>";
    let verb1 = "<span class='replacement'>" + document.getElementById("verb").value + "</span>";

    // Build the full story using the user-input values
    let fullStory = "<h1>Douglas's Dance Party</h1>";

    fullStory += "One " + adj11 + " day,";
    fullStory += " Douglas was " + verbing1 + " in his " + roomInHouse1 + ", reading a book about " ;
    fullStory+= color1 + " " + nounPlural1 + ".<br><br>";


    fullStory += "As he " + pastVerb1 + " his " + beverage1 + ", he heard " ;
    fullStory+= musicType1 + " music playing in the " + diffRoom1 + ".<br><br>";


    fullStory += exclamation1 + "! he exclaimed, as he " + pastVerb21 + " down the stairs to join the " + adjDance1 + " party.<br><br>";


    fullStory += "Douglas danced the " + animal1 + " Dance, the " + city1 ;
    fullStory+= " Shake, and took the prize for dancing the best Electric " + verb1 + ".<br><br>";

    // Set the innerHTML of the element with id "story" to the constructed story
    story1.innerHTML = fullStory;
}

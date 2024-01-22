// Load the wish list from localStorage on page load
window.addEventListener("load", loadWishList);

// Get the print button element and add a click event listener to trigger the printView function
let printbtn = document.getElementById("print");
printbtn.addEventListener("click", printView);

// Get the add button element and add a click event listener to trigger the addTheThing function
let addbnt = document.getElementById("add");
addbnt.addEventListener("click", addTheThing);

// Get the clear storage button element and add a click event listener totrigger the clearLocalStorage function
let clearStorageBtn = document.getElementById("clearStorage");
clearStorageBtn.addEventListener("click", clearLocalStorage);

// Function to clear the localStorage
function clearLocalStorage() {
  // Clear the stored data for "mylist" and "links"
  localStorage.removeItem("mylist"); localStorage.removeItem("links");
  // Reload the page to reflect the changes
  location.reload();
}


// Arrays to store the list items
let mylist = []; let links = [];

// Get the element to display the list
let myListArea = document.getElementById("wishlist");// Declare theThing and theLink as a global variable
let theThing;
let theLink;
// Load the wish list from localStorage
function loadWishList() {
  // Check if there is a wish list in localStorage
  if (localStorage.getItem("mylist") && localStorage.getItem("links")) {  
    
    // Parse the stored data and assign it to the arrays
    mylist = JSON.parse(localStorage.getItem("mylist"));
    links = JSON.parse(localStorage.getItem("links"));

    // Display the loaded wish list
    displayWishList();
  }
}

// Get the email button element and add a click event listener to trigger the sendEmail function
let emailBtn = document.getElementById("email");
emailBtn.addEventListener("click", sendEmail);

// Function to send an email with the wish list
function sendEmail() {
  // Prompt the user for their email address
  let userEmail = prompt("Please enter your email address:");

  // Check if the user entered an email address
  if (userEmail !== null && userEmail !== "") {
    // Create the email body with the wish list information
    let emailBody = "My Wishlist:\n";
    for (let i = 0; i < mylist.length; i++) {
      emailBody += `${mylist[i]} - Link: ${links[i]}\n`;
    }

    // Create the mailto link
    let mailtoLink = `mailto:${userEmail}?subject=My Wishlist&body=${encodeURIComponent(emailBody)}`;

    // Open the mailto link in a new tab or window
    window.open(mailtoLink, "_blank");
  } else {
    alert("Email address cannot be empty. Please try again.");
  }
}



// Function to handle adding an item to the list
function addTheThing() {
  // Get the input elements
  theThing = document.getElementById("iWant");
  theLink = document.getElementById("link");

  // Call the addToTheList function to add the item to the list
  addToTheList();

  // Save the wish list to localStorage
  saveWishList();

  // Reset the input fields
  resetInput(theThing);
  resetInput(theLink);
  alert("Try refressing page, Your list is now stored on local storage.. press Clear storage to clear it!")
}

// Function to add theThing value to the list
function addToTheList() {
  // Push the values to the respective arrays
  mylist.push(theThing.value);
  links.push(theLink.value);

  // Create new list item elements
  let newListItem = document.createElement("li");
  let newLinkItem = document.createElement("li");

  // Set the innerHTML of the new list items
  newListItem.innerHTML = mylist[mylist.length - 1];
  newLinkItem.innerHTML = "Link: " + links[links.length - 1];

  // Append the new list items to the myListArea
  myListArea.appendChild(newListItem);
  myListArea.appendChild(newLinkItem);
}

// Function to reset the value of an input field
function resetInput(inputToReset) {
  inputToReset.value = "";
}

function saveWishList() {
  localStorage.setItem("mylist", JSON.stringify(mylist));
  localStorage.setItem("links", JSON.stringify(links));
}

// Function to display the wish list
function displayWishList() {
  // Clear the content of myListArea
  myListArea.innerHTML = "";

  // Iterate through mylist and append each item and its corresponding link to myListArea
  for (let i = 0; i < mylist.length; i++) {
    myListArea.innerHTML += "<li>" + mylist[i] + "</li>";
    myListArea.innerHTML += "<li>" + "Link: " + links[i] + "</li>";
  }
}

// Function to handle the print view
function printView() {
  // Get elements for manipulation
  let listPage = document.getElementById("listPage");
  let fromArea = document.getElementById("fromArea");

  // Hide the fromArea element
  fromArea.style.display = "none";

  // Add a 'print' class to the listPage element
  listPage.className = "print";

  // Load the wish list from localStorage
  loadWishList();

  // Display the loaded wish list
  displayWishList();

  // Trigger the browser's print functionality
  window.print();
}

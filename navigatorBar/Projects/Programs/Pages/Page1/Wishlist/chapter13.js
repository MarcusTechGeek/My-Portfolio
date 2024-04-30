// Load the wish list from localStorage on page load
window.addEventListener("load", loadWishList);

// Get the print button element and add a click event listener to trigger the printView function
let printbtn = document.getElementById("print");
printbtn.addEventListener("click", printView);

// Get the add button element and add a click event listener to trigger the addTheThing function
let addbnt = document.getElementById("add");
addbnt.addEventListener("click", addTheThing);

// Get the clear storage button element and add a click event listener to trigger the clearLocalStorage function
let clearStorageBtn = document.getElementById("clearStorage");
clearStorageBtn.addEventListener("click", clearLocalStorage);

// Function to clear the localStorage
function clearLocalStorage() {
  // Clear the stored data for "mylist" and "links"
  localStorage.removeItem("mylist");
  localStorage.removeItem("links");
  // Reload the page to reflect the changes
  location.reload();
}

// Arrays to store the list items
let mylist = [];
let links = [];

// Get the element to display the list
let myListArea = document.getElementById("wishlist");

// Declare theThing and theLink as a global variable
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

// Function to send an email with the wish list using Formspree
function sendEmail() {
  // Prompt the user for their email address
  let userEmail = prompt("Please enter your email address:");

  // Check if the user entered an email address
  if (userEmail !== null && userEmail !== "") {
    // Construct the Formspree submission URL
    let formAction = "https://formspree.io/f/mkndjgwp"; 

    // Create a form element
    let form = document.createElement("form");
    form.setAttribute("method", "POST");
    form.setAttribute("action", formAction);

    // Create an input field for the email
    let emailInput = document.createElement("input");
    emailInput.setAttribute("type", "email");
    emailInput.setAttribute("name", "email");
    emailInput.setAttribute("value", userEmail);
    form.appendChild(emailInput);

    // Create an input field for the wish list
    let wishlistInput = document.createElement("input");
    wishlistInput.setAttribute("type", "hidden");
    wishlistInput.setAttribute("name", "wishlist");
    wishlistInput.setAttribute("value", JSON.stringify(mylist));
    form.appendChild(wishlistInput);

    // Submit the form
    document.body.appendChild(form);
    form.submit();
    document.body.removeChild(form);
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
 // alert("Your list is now stored on local storage. Press Clear Storage to clear it!");
}

// Function to add theThing value to the list
function addToTheList() {
  // Push the values to the respective arrays
  mylist.push(theThing.value);
  links.push(theLink.value);

  // Display the updated wish list
  displayWishList();
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
    let listItem = document.createElement("li");
    let removeButton = document.createElement("button");
    removeButton.textContent = "Remove";
    removeButton.classList.add("remove-btn");
    removeButton.addEventListener("click", function() {
      removeItem(i);
    });

    let linkItem = document.createElement("li");
    let linkAnchor = document.createElement("a");
    linkAnchor.href = links[i];
    linkAnchor.textContent = "Link: " + links[i];
    linkAnchor.target = "_blank";

    listItem.textContent = mylist[i];
    listItem.appendChild(removeButton);
    linkItem.appendChild(linkAnchor);

    myListArea.appendChild(listItem);
    myListArea.appendChild(linkItem);
  }
}

// Function to remove an item from the list
function removeItem(index) {
  mylist.splice(index, 1);
  links.splice(index, 1);
  saveWishList();
  displayWishList();
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

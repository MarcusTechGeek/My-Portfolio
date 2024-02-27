// Initial speed of the train
let trainSpeed = 250;

// Initial position of the train
let trainPosition = 0;

// Variable to store the animation interval
let animation;

// Get the train element from the HTML
let train = document.getElementById("train");

// Add click event listener to the train element to start speeding up
train.addEventListener("click", speedUp);

// Get the stop button element from the HTML
let stopButton = document.getElementById("stopButton");

// Add click event listener to the stop button to stop the train
stopButton.addEventListener("click", stopTrain);

// Function to increase the train speed
function speedUp() {
  // Check if the train speed is greater than 10
  if (trainSpeed > 10) {
    // Decrease the train speed
    trainSpeed -= 10;
    // Clear the previous animation interval
    clearInterval(animation);
    // Set a new animation interval with the updated speed
    animation = setInterval(frame, trainSpeed);
  }

  // Animation frame function
  function frame() {
    // Move the train position by 10 pixels
    trainPosition += 10;
    // Update the train's left position in the CSS
    train.style.left = trainPosition + 'px';
    // Check the current position for crash or stop conditions
    checkPosition(trainPosition);
    // Log the current position to the console
    console.log(trainPosition);
  }
}

// Function to check the train's position for crash or stop conditions
function checkPosition(currentPosition) {
  // Check if the train position is equal to the crash position
  if (trainPosition === 710) {
    // Alert and log a crash message
    alert("CRASH!");
    console.log("CRASH!");
    // Stop the animation interval
    clearInterval(animation);
  }
}

// Function to stop the train
function stopTrain() {
  // Check if the train position is less than the crash position
  if (trainPosition < 710) {
    // Stop the animation interval
    clearInterval(animation);
  }
}

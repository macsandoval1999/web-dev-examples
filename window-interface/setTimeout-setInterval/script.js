

// Initialize variables
// =================================
const countdownDisplay = document.getElementById('countdown');
const startButton = document.getElementById('startButton');
const pauseResumeButton = document.getElementById('pauseResumeButton');
const customTimeInput = document.getElementById('customTime');



// Countdown state default variables
// =================================
let timeLeft = 10; // default countdown time in seconds for when no custom time is provided
let intervalId = null; // to store the interval ID. When null, countdown is not running.
let isPaused = false; // to track if the countdown is paused



// Countdown functions
// =================================

// function to update the countdown display
function updateDisplay() {
    // First check if timeLeft is non-negative
    if (timeLeft >= 0) { // if timeLeft is non-negative...
        // update the display with the current time left
        countdownDisplay.textContent = timeLeft;
    // if timeLeft is negative, display "Time's up!"
    } else {
        countdownDisplay.textContent = "Time's up!";
    }
}

// function to start the countdown
function startCountdown() {
    // First check if a countdown is already running and do nothing if so
    if (intervalId !== null) // if countdown is already running...
        return; // do nothing
    // Get custom time if provided from the input field, otherwise use default time of 10 seconds
    let customValue = parseInt(customTimeInput.value, 10);
    // Next, validate the custom time input
    if (!isNaN(customValue) && customValue > 0) { // if custom value is not NaN and greater than 0...
        timeLeft = customValue; // set timeLeft to custom value
    // if custom value is invalid, use default time of 10 seconds
    } else { 
        timeLeft = 10;
    }
    // Now reset the paused state and update the display
    isPaused = false; // reset paused state
    pauseResumeButton.textContent = 'Pause'; // reset button text to 'Pause'
    // Update the display immediately
    updateDisplay();
    // Finally, start the countdown interval
    intervalId = setInterval(() => { // set interal id to a new interval that runs every second, 1000. 
        if (!isPaused) { // if isPaused is false...
            timeLeft--; // decrement timeLeft by 1
            if (timeLeft >= 0) { // if timeLeft is still non-negative...
                updateDisplay(); // update the display
            // if timeLeft is negative, clear the interval and set intervalId to null to indicate countdown is not running
            } else {
                clearInterval(intervalId);
                intervalId = null;
                updateDisplay(); // final update to show "Time's up!"
            }
        }
    }, 1000);
    // reset the start button to enabled after countdown ends. It has to be buffered to avoid immediate re-clicks and also because setInterval is asynchronous meaning the computer will continue counting down as any code after it starts runs immediately after starting the interval.  
    setTimeout(() => {
        startButton.disabled = false;
    }, (timeLeft + 1) * 1000);   
}

// function to pause or resume the countdown
function pauseResumeCountdown() {
    // check if countdown is running
    if (intervalId === null) return; // if countdown is not running, return and do nothing
    // The following code will run assuming countdown is running
    isPaused = !isPaused; // toggle the paused state. Putting ! before a boolean variable flips its value from true to false or false to true.
    // Update the button text based on the new paused state
    pauseResumeButton.textContent = isPaused ? 'Resume' : 'Pause'; // if isPaused is true, set text to 'Resume', else set to 'Pause'
}

// Function to display 'starting timer...' for 3 seconds using setTimeout
function showStartingMessageThenCountdown() {
    countdownDisplay.textContent = 'starting timer...';
    // Disable start button to prevent multiple triggers
    startButton.disabled = true;
    setTimeout(() => {
        startCountdown();
    }, 3000);
}



// Event listeners
// =================================
// Start button click event 
startButton.addEventListener('click', () => {
    if (startButton.disabled) return; // Prevent multiple clicks when disabled
    showStartingMessageThenCountdown();
});

// Pause/Resume button click event
pauseResumeButton.addEventListener('click', pauseResumeCountdown);
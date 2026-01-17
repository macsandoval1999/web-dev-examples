// initialize count variable at 0
let count = 0;

// set an interval to run every 1000 milliseconds (1 second)
const intervalId = setInterval(() => {
    count += 1; // increment count by 1
    console.log(count); // log the current count value to the console
    if (count === 3) { // check if count has reached 3. If so...
        clearInterval(intervalId); // stop the interval from running further. clearInterval is a  built-in function that takes an interval as an argument and stops it. Here we use it to stop the interval we created above after count reaches 3.
    }
}, 1000); // run the interval every 1000 milliseconds (1 second)

const fileName = window.location.pathname.split("/").pop(); // get the current path of the URL
console.log(fileName); // log the current path of the URL to the console
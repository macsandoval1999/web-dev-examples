// ***********TIME STAMP FOR FORMS
const timeStamp = document.getElementById('timestamp'); // Get the element with ID 'timestamp'
const date = new Date(); // Create a new Date object with the current date and time
timeStamp.value = date.toISOString(); // Set the value of the timestamp element to the current date and time in ISO format

// *************PHONE NUMBER FORMATTING
document.getElementById('phone').addEventListener('input', function (e) {
    let x = e.target.value.replace(/\D/g, '').substring(0, 10);
    let formatted = '';
    if (x.length > 6) {
        formatted = `(${x.substring(0, 3)}) ${x.substring(3, 6)}-${x.substring(6, 10)}`;
    } else if (x.length > 3) {
        formatted = `(${x.substring(0, 3)}) ${x.substring(3, 6)}`;
    } else if (x.length > 0) {
        formatted = `(${x}`;
    }
    e.target.value = formatted;
});
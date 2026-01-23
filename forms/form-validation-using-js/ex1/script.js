function doFV(event) {
    if (event) event.preventDefault();
    // INPUT
    const p1 = document.getElementById("principle");
    const p2 = document.getElementById("principle2");
    const r = document.getElementById("annualrate");
    const n = document.getElementById("periods");
    const y = document.getElementById("years");
    let valid = true;

    // Check if principle values match
    if (p1.value !== p2.value || p1.value === "" || p2.value === "") {
        p2.value = "";
        p1.focus();
        valid = false;
        alert("Principle amounts must match.");
    }
    
    // Check for form validity
    const form = document.getElementById("fvform");
    if (!form.checkValidity()) {
        form.reportValidity();
        valid = false;
    }

    if (!valid) {
        document.getElementById("output").textContent = "";
        return false;
    }

    // Parse values
    let p = parseFloat(p1.value);
    let rate = parseFloat(r.value);
    let periods = parseInt(n.value);
    let years = parseInt(y.value);

    // PROCESSING
    let output = computeFutureValue(p, rate, periods, years);
    // OUTPUT with formatting, handle NaN
    if (isNaN(output) || !isFinite(output)) {
        document.getElementById("output").textContent = "Invalid input.";
    } else {
        document.getElementById("output").textContent = `$${output.toFixed(2)}`;
    }
    return false;
}



// computer future value function
// p = principal, r = annual rate, y = number of years, n = periods of year.
function computeFutureValue(p, r, n, y) {
    let er = r / n; // effective rate per period
    let totalperiods = n * y;
    return p * Math.pow(1 + er, totalperiods);
}



// get and display the current year
document.getElementById("theyear").textContent = new Date().getFullYear();


const form = document.getElementById("fvform");
if (form) {
    form.addEventListener("submit", doFV);
}
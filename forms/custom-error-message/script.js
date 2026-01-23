const email = document.getElementById("mail");

email.addEventListener("input", (event) => {
    if (email.validity.typeMismatch) {
        email.setCustomValidity("I am expecting an email address! Butt muncher!!!");
    } else {
        email.setCustomValidity("");
    }
});
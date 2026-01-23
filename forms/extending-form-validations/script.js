const email = document.getElementById("mail");

email.addEventListener("input", (event) => {
    // Validate with the built-in constraints
    email.setCustomValidity("");
    if (!email.validity.valid) {
        return;
    }

    // Extend with a custom constraints
    if (!email.value.endsWith(".com")) {
        email.setCustomValidity("Please enter an email address ending with .com");
    }
});
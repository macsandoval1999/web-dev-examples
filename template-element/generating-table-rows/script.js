// Check for the HTML template element support
if ("content" in document.createElement("template")) { // if content property exists in a newly created template element...
    // Instantiate the table with the existing HTML tbody
    // and the row with the template
    const tbody = document.querySelector("tbody");
    const template = document.querySelector("#productrow");

    // Clone the new row and insert it into the table
    const clone = document.importNode(template.content, true); // acces templete content and deep clone it, meaning clone all child elements as well
    let td = clone.querySelectorAll("td"); // get all td elements in the cloned row
    td[0].textContent = "1235646565"; // In this example we manually set the text content of each cell in the row
    td[1].textContent = "Stuff";

    // Append the cloned row to the tbody
    tbody.appendChild(clone);

    // Here we also manually create and add another row to demonstrate multiple rows
    const clone2 = document.importNode(template.content, true);
    td = clone2.querySelectorAll("td");
    td[0].textContent = "0384928528";
    td[1].textContent = "Acme Kidney Beans 2";

    tbody.appendChild(clone2);

    // Note: In a real application, you would likely loop through data
    // and create rows dynamically rather than hardcoding values as above.

// If the template element is not supported
} else {
    // Find another way to add the rows to the table because
    // the HTML template element is not supported.
}
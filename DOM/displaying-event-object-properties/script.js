// Function to display properties of a DOM event object
function showEventProperties(e) { // e is the event object

    // HELPER FUNCTION DECLARATION: not actually executed yet
    // Helper function to add a cell to a table row, parameters are row and text
    function addCell(row, text) {
        // The method insertCell(-1) adds a new cell at the end of the row. Here, we use it to add a new cell for each property of the event object.
        const cell = row.insertCell(-1);
        // Append a text node with the provided text to the newly created cell.
        cell.appendChild(document.createTextNode(text));
    }

    // Use the provided event object or fallback to the global window object. Here, we use window as a fallback in case no event object is provided, and the event here is actually when the page loads. e is the event object passed to the function. || ensures that if e is falsy, window will be used instead. window is the global object in browsers.
    const event = e || window;
    // Display the type value of the event in the span with id "eventType"
    document.getElementById("eventType").textContent = event.type;

    // Create a table to display event object properties
    const table = document.createElement("table");

    // Create table header
    // The function createTHead() creates a table header element (<thead>). Here we create one for our table called table
    const thead = table.createTHead();
    // Insert a row into the table header. -1 adds the row at the end of the header
    let row = thead.insertRow(-1);
    
    // Create an array of labels for usage in the table header
    const labelList = ["#", "Property", "Value"];
    // Get the length of the label list for iteration
    const len = labelList.length;
    // Iterate over the label list and add each label as a cell in the header row using the addCell helper function
    for (let i = 0; i < len; i++) {
        addCell(row, labelList[i]);
    }

    // Create table body to hold event object properties
    const tbody = document.createElement("tbody");
    // Append the table body to the table
    table.appendChild(tbody);

    // Create table rows for each property of the event object and add them to the table
    for (const p in event) {
        row = tbody.insertRow(-1);
        row.className = row.rowIndex % 2 ? "odd" : "even";
        addCell(row, row.rowIndex);
        addCell(row, p);
        addCell(row, event[p]);
    }

    // Append the table to the body of the document
    const body = document.body;
    body.appendChild(table);
}

// Call the function to display event properties when the page loads
showEventProperties();
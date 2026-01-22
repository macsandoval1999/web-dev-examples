// **************Directory Script Section************** // 

// Decalre the URL of the JSON data file containing member information.
const requestURL =
    "https://macsandoval1999.github.io/wdd231/chamber/data/members.json";

// Select the directory container element where the member data will be displayed
const directory = document.querySelector("#directory");

// function to fetch member data for usage
async function getMemberData() {
    // Create a fetch request to the specified URL and wait for the response. Store it in a variable named 'response'.
    const response = await fetch(requestURL);
    // Parse the JSON data from the response and store it in a variable named 'members'.
    const data = await response.json();
    console.table(data.members);
    // Now that we have the JSON data, we can use it to populate our web page.
    displayMembers(data.members);
}

// Function to create and display member directory entries
function displayMembers(members) {
    // Loop through each member in the members array
    members.forEach((member) => {
        // Create a new section element to hold the member's information
        let card = document.createElement("section");

        // Create elements for the member's information
        let name = document.createElement("h2");
        let logo = document.createElement("img");
        let address = document.createElement("p");
        let phone = document.createElement("p");
        let website = document.createElement("a");

        let level = member.membershipLevel;
        if (level === "Gold") {
            card.classList.add("gold-member");
        } else if (level === "Silver") {
            card.classList.add("silver-member");
        }

        name.textContent = member.name;

        logo.setAttribute("src", member.logo);
        logo.setAttribute("alt", `Logo of ${member.name}`);
        logo.setAttribute("loading", "lazy");
        logo.setAttribute("width", "200");
        logo.setAttribute("height", "100");

        address.textContent = member.address;

        phone.textContent = member.phone;

        website.textContent = member.website;
        website.setAttribute("href", member.website);
        website.setAttribute("target", "_blank");

        // Append the elements to the card
        card.appendChild(name);
        card.appendChild(logo);
        card.appendChild(address);
        card.appendChild(phone);
        card.appendChild(website);

        // Append the card to the directory container
        directory.appendChild(card);
    });
}

// Call the function to fetch and display member data
getMemberData();



// **************DirectoryView Toggle Section************** //
const gridbutton = document.querySelector("#grid-btn");
const listbutton = document.querySelector("#list-btn");
const display = document.querySelector("#directory");

// initial state
display.classList.add("grid");
gridbutton.classList.add("active"); // Set grid button as active by default

// Event listener for grid view button
gridbutton.addEventListener("click", () => {
    if (gridbutton.classList.contains("active")) {
        return;
    }
    else {
        display.classList.add("grid");
        display.classList.remove("list");
        gridbutton.classList.add("active");
        listbutton.classList.remove("active");
    }
});

// Event listener for list view button
listbutton.addEventListener("click", () => {
    if (listbutton.classList.contains("active")) {
        return;
    }
    else {
        display.classList.add("list");
        display.classList.remove("grid");
        listbutton.classList.add("active");
        gridbutton.classList.remove("active");
    }
});
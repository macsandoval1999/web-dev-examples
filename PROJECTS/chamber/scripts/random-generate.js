// **************Random Member Spotlight Script Section************** //
const requestURL =
    "https://macsandoval1999.github.io/wdd231/chamber/data/members.json";

// Select the member spotlight container element where the spotlight member data will be displayed
const spotlightContainer = document.querySelector(".spotlight-members");
// function to fetch member data for usage
async function getSpotlightMemberData() {
// Create a fetch request to the specified URL and wait for the response. Store it in a variable named 'response'.
    const response = await fetch(requestURL);
    // Parse the JSON data from the response and store it in a variable named 'members'.
    const data = await response.json();
    // Now that we have the JSON data, we can use it to populate our web page.
    displaySpotlightMember(data.members);
}
// Function to create and display a random member spotlight entry
function displaySpotlightMember(members) {
    // Filter members to include only Gold and Silver membership levels
    const eligibleMembers = members.filter(member =>
        member.membershipLevel === "Gold" || member.membershipLevel === "Silver"
    );
    // Select 3 random members from the eligible members, ensuring no duplicates
    const spotlightMembers = [];
    while (spotlightMembers.length < 3 && eligibleMembers.length > 0) {
        const randomIndex = Math.floor(Math.random() * eligibleMembers.length);
        spotlightMembers.push(eligibleMembers.splice(randomIndex, 1)[0]);
    }
    // Loop through each selected spotlight member
    spotlightMembers.forEach((member) => {
        // Create a new section element to hold the member's information
        let card = document.createElement("section");
        // Create elements for the member's information
        let name = document.createElement("h2");
        let logo = document.createElement("img");
        let address = document.createElement("p");
        let phone = document.createElement("p");
        let website = document.createElement("a");

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

        if (member.membershipLevel === "Gold") {
            card.classList.add("gold-member");
        } else if (member.membershipLevel === "Silver") {
            card.classList.add("silver-member");
        }

        // Append the elements to the card
        card.appendChild(name);
        card.appendChild(logo);
        card.appendChild(address);
        card.appendChild(phone);
        card.appendChild(website);
        card.classList.add("spotlight-card");

        // Append the card to the spotlight container
        spotlightContainer.appendChild(card);
    });
}

// Call the function to fetch and display the spotlight member data
getSpotlightMemberData();
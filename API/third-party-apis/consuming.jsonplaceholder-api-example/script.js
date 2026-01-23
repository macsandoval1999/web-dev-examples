const userList = document.getElementById("users");
const getButton = document.querySelector("button");

async function fetchAndDisplayUsers() {
    userList.innerHTML = "Loading...";
    await sleep(1000); // simulate network delay
    try {
        const apiUrl = "https://jsonplaceholder.typicode.com/users"; // JSONPlaceholder API endpoint for users
        const response = await fetch(apiUrl); // fetch data from the API

        // Handle HTTP errors (e.g., 404 Not Found, 500 Server Error)
        if (!response.ok) {
            throw new Error(`Network response was not ok. Status: ${response.status}`);
        }

        const users = await response.json(); // await promised response.json() to parse JSON data

        // Clear previous content
        userList.innerHTML = "";

        users.forEach((user) => {
            // build figure content
            const li = document.createElement("li");
            li.innerHTML = `<strong>${user.name}</strong> | ${user.email}`;
            userList.appendChild(li);
        });
    } catch (error) {
        userList.innerHTML = `Could not load users: Error: ${error.message}`;
    }
}

function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}


getButton.addEventListener("click", fetchAndDisplayUsers);



/* As a special addition, I decided to add a sleep feature to simulate network delay in the fetchAndDisplayUsers function */
const todo = document.getElementById('todo-output');

async function getTodo() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/photos/77'); // Here we fetch the /photos endpoint
        console.log(response); // You can log the response to see its details like keys and values

        if (!response.ok) { // Check if the response status is OK (status code 200-299)
            throw new Error(`HTTP error! Status: ${response.status}`); // If not, throw an error
        }
        const data = await response.json(); // Parse the response as JSON
        todo.textContent = JSON.stringify(data, null, 2); // Display the fetched data in the todo element. stringify with null and 2 for pretty printing. This means stringify "data", with no replacer function (null), and an indentation of 2 spaces.
    } catch (error) { // Catch any errors that occur during the fetch or parsing
        console.error('There was a problem fetching the data:', error); // Log the error message to the console
    }
}

todo.textContent = 'Loading...';
getTodo();


/*
This code uses the Fetch API to make a GET request to the /photos endpoint of the JSONPlaceholder API. It retrieves a list of photo items and displays the object with ID 77 as displayed below. If there is an error, it logs the error message to the console.

    { "albumId": 2, "id": 77, "title": "ipsum consequatur vel omnis mollitia repellat dolores quasi", "url": "https://via.placeholder.com/600/36d137", "thumbnailUrl": "https://via.placeholder.com/150/36d137" }
*/
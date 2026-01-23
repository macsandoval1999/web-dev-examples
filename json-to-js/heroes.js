// This function is used to fetch the JSON data and populate the web page. It is defined as an asynchronous function using the async keyword. async functions allow the use of the await keyword, which makes it easier to work with promises. This function uses the Fetch API to get the JSON data from a URL, then processes that data to update the content of the web page. It calls two helper functions, populateHeader and populateHeroes, to update different parts of the page with the fetched data.
async function populate() {
    // Here our JSON is fetched from a file on the server. Here we store the URL of the file.
    const requestURL =
        "https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json";
    // Here we create a new request object using the URL we just defined.
    const request = new Request(requestURL);
    // Here we send the request using the fetch() method. This method returns a promise that resolves to the Response to that request, whether it is successful or not. await is used to wait for the promise to resolve.
    const response = await fetch(request);
    // Here we use the json() method of the Response object to extract the JSON body content from the response. This also returns a promise, so we use await again.
    const superHeroes = await response.json();

    // Now that we have the JSON data, we can use it to populate our web page.
    populateHeader(superHeroes);
    populateHeroes(superHeroes);
}



// This function populates the header of the web page with the squad name and hometown from the JSON data. It takes a single parameter, obj, which is expected to be the JSON object containing the squad information.
function populateHeader(obj) {
    const header = document.querySelector("header"); // Selects the <header> element in the HTML document.
    const myH1 = document.createElement("h1"); // Creates a new <h1> element.
    myH1.textContent = obj.squadName; // Sets the text content of the <h1> element to the squad name from the JSON object.
    header.appendChild(myH1); // Appends the <h1> element to the <header> element.

    const myPara = document.createElement("p"); // Creates a new <p> element.
    myPara.textContent = `Hometown: ${obj.homeTown} // Formed: ${obj.formed}`; // Sets the text content of the <p> element to include the hometown and formation year from the JSON object.
    header.appendChild(myPara); // Appends the <p> element to the <header> element.
}



// This function populates the main section of the web page with information about each superhero from the JSON data. It takes a single parameter, obj, which is expected to be the JSON object containing the squad members.
function populateHeroes(obj) {
    const section = document.querySelector("section"); // Selects the <section> element in the HTML document.
    const heroes = obj.members; // Retrieves the array of squad members from the JSON object.

    // Loops through each hero in the members array.
    for (const hero of heroes) {
        const myArticle = document.createElement("article"); // Creates a new <article> element.
        const myH2 = document.createElement("h2"); // Creates a new <h2> element.
        const myPara1 = document.createElement("p"); // Creates a new <p> element.
        const myPara2 = document.createElement("p"); // Creates another new <p> element.
        const myPara3 = document.createElement("p"); // Creates another new <p> element.
        const myList = document.createElement("ul"); // Creates a new <ul> element.

        myH2.textContent = hero.name; // Sets the text content of the <h2> element to the hero's name.
        myPara1.textContent = `Secret identity: ${hero.secretIdentity}`; // Sets the text content of the first <p> element to the hero's secret identity.
        myPara2.textContent = `Age: ${hero.age}`; // Sets the text content of the second <p> element to the hero's age.
        myPara3.textContent = "Superpowers:"; // Sets the text content of the third <p> element to "Superpowers:".

        const superPowers = hero.powers; // Retrieves the array of superpowers for the current hero.

        // Loops through each superpower and creates a list item for it.
        for (const power of superPowers) {
            const listItem = document.createElement("li"); // Creates a new <li> element.
            listItem.textContent = power; // Sets the text content of the <li> element to the current superpower.
            myList.appendChild(listItem); // Appends the <li> element to the <ul> element.
        }

        myArticle.appendChild(myH2); // Appends the <h2> element to the <article> element.
        myArticle.appendChild(myPara1); // Appends the first <p> element to the <article> element.
        myArticle.appendChild(myPara2); // Appends the second <p> element to the <article> element.
        myArticle.appendChild(myPara3); // Appends the third <p> element to the <article> element.
        myArticle.appendChild(myList); // Appends the <ul> element to the <article> element.

        section.appendChild(myArticle); // Appends the <article> element to the <section> element.
    }
}



// Calls the populate function to start the process of fetching the JSON data and populating the web page.
populate();
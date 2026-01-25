const url = 'https://pokeapi.co/api/v2/pokemon/1';
const options = {
    method: 'GET',
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'

    }
};
fetch(url, options)
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
        console.log('first: ', data);
        console.log('second: ', data.name);
    })
    .catch(error => {
        console.error('There was a problem with the fetch operation:', error);
    });
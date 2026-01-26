// Example: Canceling a fetch request with AbortController
const exampleCode = `
document.getElementById('example').textContent = exampleCode;

let controller;
const output = document.getElementById('output');

document.getElementById('start-fetch').addEventListener('click', async () => {
    controller = new AbortController();
    const signal = controller.signal;
    output.textContent = 'Fetching...';
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/photos', { signal });
        if (!response.ok) {
            throw new Error('Response status: ' + response.status);
        }
        const data = await response.json();
        output.textContent = 'Fetched ' + data.length + ' photos.';
    } catch (error) {
        if (error.name === 'AbortError') {
            output.textContent = 'Fetch aborted!';
        } else {
            output.textContent = 'Fetch error: ' + error;
        }
    }
});

document.getElementById('cancel-fetch').addEventListener('click', () => {
    if (controller) {
        controller.abort();
    }
});
`;

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

document.getElementById('example').textContent = exampleCode;

let controller;
const output = document.getElementById('output');

document.getElementById('start-fetch').addEventListener('click', async () => {
    controller = new AbortController();
    const signal = controller.signal;
    output.textContent = 'Fetching...';
    await sleep(3000); // simulate delay before fetch for 3 seconds // this is just for demonstration
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/photos', { signal });
        if (!response.ok) {
            throw new Error('Response status: ' + response.status);
        }
        const data = await response.json();
        output.textContent = 'Fetched ' + data.length + ' photos.';
    } catch (error) {
        if (error.name === 'AbortError') {
            output.textContent = 'Fetch aborted!';
        } else {
            output.textContent = 'Fetch error: ' + error;
        }
    }
});

document.getElementById('cancel-fetch').addEventListener('click', () => {
    if (controller) {
        controller.abort();
    }
});

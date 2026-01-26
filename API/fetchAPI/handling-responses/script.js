// Display all examples in the HTML
const statusExample = document.getElementById('status-example');
const typeExample = document.getElementById('type-example');
const headersExample = document.getElementById('headers-example');
const bodyExample = document.getElementById('body-example');
const streamExample = document.getElementById('stream-example');
const lineByLineExample = document.getElementById('line-by-line-example');
const lockedDisturbedExample = document.getElementById('locked-disturbed-example');
// Get output areas by ID (matching the HTML)
const output1 = document.getElementById('output1');
const output2 = document.getElementById('output2');
const output3 = document.getElementById('output3');
const output4 = document.getElementById('output4');
const output5 = document.getElementById('output5');
const output6 = document.getElementById('output6');
const output7 = document.getElementById('output7');



// Populate code examples in the HTML
statusExample.innerHTML = `fetch('https://jsonplaceholder.typicode.com/posts/1')
	.then(response => {
		if (response.ok) {
			return response.json();
		} else {
			throw new Error('HTTP error: ' + response.status);
		}
	})
	.then(data => console.log(data))
	.catch(error => console.error(error));`;
typeExample.innerHTML = `fetch('https://jsonplaceholder.typicode.com/posts/1')
	.then(response => {
		console.log(response.type); // e.g., 'basic', 'cors', 'opaque'
		return response.json();
	});`;
headersExample.innerHTML = `fetch('https://jsonplaceholder.typicode.com/posts/1')
	.then(response => {
		console.log(response.headers.get('Content-Type'));
		for (let [key, value] of response.headers) {
			console.log(key + ': ' + value);
		}
		return response.json();
	});`;
bodyExample.innerHTML = `fetch('https://jsonplaceholder.typicode.com/posts/1')
	.then(response => response.json())
	.then(data => console.log(data));`;
streamExample.innerHTML = `fetch('https://jsonplaceholder.typicode.com/posts')
	.then(response => {
		const reader = response.body.getReader();
		let result = '';
		const decoder = new TextDecoder();
		function read() {
			return reader.read().then(({ done, value }) => {
				if (done) return result;
				result += decoder.decode(value);
				return read();
			});
		}
		return read();
	})
	.then(result => console.log(result));`;
lineByLineExample.innerHTML = `fetch('https://www.w3.org/TR/PNG/iso_8859-1.txt')
	.then(response => response.body.getReader())
	.then(reader => {
		const decoder = new TextDecoder();
		let chunk = '';
		function read() {
			return reader.read().then(({ done, value }) => {
				if (done) {
					chunk.split('\n').forEach(line => console.log(line));
					return;
				}
				chunk += decoder.decode(value, { stream: true });
				let lines = chunk.split('\n');
				chunk = lines.pop();
				lines.forEach(line => console.log(line));
				return read();
			});
		}
		return read();
	});`;
lockedDisturbedExample.innerHTML = `fetch('https://jsonplaceholder.typicode.com/posts/1')
	.then(response => {
		console.log('Locked:', response.body.locked);
		console.log('Disturbed:', response.body.disturbed);
	});`;



// 1. Checking the Response Status
async function ex1fetchStatus() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
        if (!response.ok) {
            throw new Error('HTTP error: ' + response.status);
        }
        const data = await response.json();
        output1.textContent += JSON.stringify(data, null, 2);
    } catch (error) {
        output1.textContent += error;
    }
}
ex1fetchStatus();

// 2. Checking the Response Type
async function ex2fetchType() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
        if (!response.ok) {
            throw new Error('HTTP error: ' + response.status);
        }
        output2.textContent += `Type: ${response.type}`;
        await response.json();
    } catch (error) {
        output2.textContent += error;
    }
}
ex2fetchType();

// 3. Checking Headers
async function ex3fetchHeaders() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
        if (!response.ok) {
            throw new Error('HTTP error: ' + response.status);
        }
        output3.textContent += `Content-Type: ${response.headers.get('Content-Type')}\n`;
        for (let [key, value] of response.headers) {
            output3.textContent += `${key}: ${value}\n`;
        }
        await response.json();
    } catch (error) {
        output3.textContent += error;
    }
}
ex3fetchHeaders();

async function ex4fetchBody() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
        if (!response.ok) {
            throw new Error('HTTP error: ' + response.status);
        }
        const data = await response.json();
        output4.textContent += JSON.stringify(data, null, 2);
    } catch (error) {
        output4.textContent += error;
    }
}
ex4fetchBody();

// 5. Streaming the Response Body
async function ex5fetchStream() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        if (!response.ok) {
            throw new Error('HTTP error: ' + response.status);
        }
        const reader = response.body.getReader();
        let result = '';
        const decoder = new TextDecoder();
        async function read() {
            const { done, value } = await reader.read();
            if (done) return result;
            result += decoder.decode(value);
            return read();
        }
        result = await read();
        output5.textContent += result;
    } catch (error) {
        output5.textContent += error;
    }
}
ex5fetchStream();

// 6. Processing a Text File Line by Line
async function ex6fetchLineByLine() {
    try {
        const response = await fetch('https://www.w3.org/TR/PNG/iso_8859-1.txt');
        if (!response.ok) {
            throw new Error('HTTP error: ' + response.status);
        }
        const reader = response.body.getReader();
        const decoder = new TextDecoder();
        let chunk = '';
        async function read() {
            const { done, value } = await reader.read();
            if (done) {
                chunk.split('\n').forEach(line => output6.textContent += line + '\n');
                return;
            }
            chunk += decoder.decode(value, { stream: true });
            let lines = chunk.split('\n');
            chunk = lines.pop();
            lines.forEach(line => output6.textContent += line + '\n');
            return read();
        }
        await read();
    } catch (error) {
        output6.textContent += error;
    }
}
ex6fetchLineByLine();

// 7. Locked and Disturbed Streams
async function ex7fetchLockedDisturbed() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
        if (!response.ok) {
            throw new Error('HTTP error: ' + response.status);
        }
        output7.textContent += `Locked: ${response.body.locked}\n`;
        output7.textContent += `Disturbed: ${response.body.disturbed}\n`;
    } catch (error) {
        output7.textContent += error;
    }
}
ex7fetchLockedDisturbed();
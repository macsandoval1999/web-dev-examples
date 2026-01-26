// 1. Simple GET Request with try-catch
const ex1 = `async function fetchGet() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
    if (!response.ok) {
      throw new Error('Response status: ' + response.status);
    }
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error('Fetch GET error:', error);
  }
}`;
document.getElementById('ex1').textContent = ex1;

// 2. POST Request with JSON Body and try-catch
const ex2 = `async function fetchPost() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        title: 'foo',
        body: 'bar',
        userId: 1
      })
    });
    if (!response.ok) {
      throw new Error('Response status: ' + response.status);
    }
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error('Fetch POST error:', error);
  }
}`;
document.getElementById('ex2').textContent = ex2;

// 3. PUT Request to Update Data with try-catch
const ex3 = `async function fetchPut() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts/1', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        id: 1,
        title: 'updated title',
        body: 'updated body',
        userId: 1
      })
    });
    if (!response.ok) {
      throw new Error('Response status: ' + response.status);
    }
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error('Fetch PUT error:', error);
  }
}`;
document.getElementById('ex3').textContent = ex3;

// 4. PATCH Request to Partially Update Data with try-catch
const ex4 = `async function fetchPatch() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts/1', {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        title: 'patched title'
      })
    });
    if (!response.ok) {
      throw new Error('Response status: ' + response.status);
    }
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error('Fetch PATCH error:', error);
  }
}`;
document.getElementById('ex4').textContent = ex4;

// 5. DELETE Request with try-catch
const ex5 = `async function fetchDelete() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts/1', {
      method: 'DELETE'
    });
    if (!response.ok) {
      throw new Error('Response status: ' + response.status);
    }
    console.log('Deleted successfully');
  } catch (error) {
    console.error('Fetch DELETE error:', error);
  }
}`;
document.getElementById('ex5').textContent = ex5;

// 6. GET Request with API Key in headers
const ex6 = `async function fetchWithApiKey() {
  try {
    const response = await fetch('https://api.example.com/data', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer YOUR_API_KEY_HERE' // or 'x-api-key': 'YOUR_API_KEY_HERE'
      }
    });
    if (!response.ok) {
      throw new Error('Response status: ' + response.status);
    }
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error('Fetch with API key error:', error);
  }
}`;
document.getElementById('ex6').textContent = ex6;
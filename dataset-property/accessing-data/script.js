const items = document.querySelectorAll('#items li');
const details = document.createElement('div');
document.body.appendChild(details);


// Accessing data attributes using the dataset property
/*
To access a data attribute, use the dataset property followed by the attribute name in camelCase.
In HTML, we write data attributes using the `data-` prefix followed by a name, like `data-name="value"`.
Heres an example if I had a item with id="banana":
HTML    -   <li data-name="banana" data-category="fruit" data-color="yellow">Banana</li>
JS      -   const item = document.querySelector('#banana');
JS      -   item.dataset.name
*/
items.forEach(item => {
    item.addEventListener('click', () => {
        details.innerHTML = `
        <h2>Item Details</h2>
        <p>Name: ${item.dataset.name}</p>
        <p>Category: ${item.dataset.category}</p>
        <p>Color: ${item.dataset.color}</p>
        `;
        if (item.dataset.category === 'fruit') {
            details.style.backgroundColor = 'lightyellow';
        } else if (item.dataset.category === 'vegetable') {
            details.style.backgroundColor = 'lightgreen';
        } else if (item.dataset.category === 'dairy') {
            details.style.backgroundColor = 'lightblue';
        }
    });
});


// main.js
import { initInventory } from './inventory.js';

document.addEventListener('DOMContentLoaded', () => {
    const path = window.location.pathname.split('/').pop();
    if (path === '' || path === 'index.html') {
        // optional: fetch and populate featured car
        // Future hook
    } else if (path === 'inventory.html') {
        initInventory('#inventoryGrid');
    } else if (path === 'schedule.html') {
        // nothing special for now
    } else if (path === 'thanks.html') {
        // display submitted form data with URLSearchParams
        const params = new URLSearchParams(window.location.search);
        const container = document.querySelector('#thanksData');
        if (container) {
            container.innerHTML = '';
            for (const [k, v] of params.entries()) {
                const row = document.createElement('p');
                row.innerHTML = `<strong>${k}:</strong> ${v}`;
                container.appendChild(row);
            }
        }
    }
});

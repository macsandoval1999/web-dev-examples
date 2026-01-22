import { filterAndBuildCards, sortAndBuildCards, getFilteredVehicles } from './inventory-filter.mjs';



// Default states for initial load and state management
let currentFilter = 'all'; //default filter
let currentSort = null; // default sort order

// Function to update vehicles shown based on filter. This function resets sort when filter changes.
function updateFilter(type) { 
    currentFilter = type;
    currentSort = null; // Reset sort when filter changes
    filterAndBuildCards(type); // When filter changes, build cards based on the selected filter. This function is imported from inventory-filter.mjs and handles filtering and building cards.

    // Update active class on filter buttons
    document.querySelectorAll('#inventory-filter a').forEach(a => a.classList.remove('active')); // Loop through all filter links and remove active class. While I could have done this with a single querySelector, this way is more explicit and I dont have to make a removal for each possible filter. Serves as a reset before adding active to the next selected filter.
    const activeLink = document.getElementById(type); // Get the clicked filter link by its ID, remember the type is grabbed from the clicked element's ID in the main file event listener below.
    if (activeLink) activeLink.classList.add('active'); // Add active class to the clicked filter link
    document.querySelectorAll('#inventory-sort a').forEach(a => a.classList.remove('active')); // Reset sort buttons as well since sort is reset on filter change
}

// Function to update vehicles shown according to sort order
function updateSort(order) { 
    currentSort = order; // Set the current sort order
    const filtered = getFilteredVehicles(currentFilter); // Get the currently filtered vehicles based on the current filter. This function is imported from inventory-filter.mjs and returns the vehicles based on the current filter state.
    sortAndBuildCards(order, filtered); // Sort and build cards based on the selected order and currently filtered vehicles. This function is imported from inventory-filter.mjs and handles sorting and building cards.

    // Update active class on sort buttons
    const sortLinks = document.querySelectorAll('#inventory-sort a'); // Get all sort links
    sortLinks.forEach(a => a.classList.remove('active')); // Remove active class from all sort links
    const activeSort = document.getElementById(order === 'ascending' ? 'sort-price-asc' : 'sort-price-desc'); // if order is ascending, get the ascending link, else get the descending link
    activeSort.classList.add('active'); // Add active class to the clicked sort link
}





/*************************
Main Inventory Page Script
**************************/

// On page load
updateFilter('all'); // Show all vehicles by default



// Event listeners for filter and sort buttons
const selectedFilter = document.getElementById('inventory-filter'); //get the filter container
selectedFilter.addEventListener('click', (e) => { // add click event listener to the filter container
    if (e.target.tagName === 'A') { // If the clicked element is an anchor tag
        e.preventDefault(); // Prevent default elements default behavior which in this case would reload the page. preventDefault is a built-in method that stops the default action of an element.
        updateFilter(e.target.id); // Instead, call updateDisplay function and pass the clicked element's ID
    }
});

const selectedSort = document.getElementById('inventory-sort');
selectedSort.addEventListener('click', (e) => { // add click event listener to the sort container
    if (e.target.tagName === 'A') { // If the clicked element is an anchor tag
        e.preventDefault(); // Prevent default behavior
        const order = e.target.id === 'sort-price-asc' ? 'ascending' : 'descending'; // Instead, check if the target's ID is 'sort-price-asc', if so set order to 'ascending', else set to 'descending'
        updateSort(order); // Call updateSort function and pass the determined order to rebuild the cards accordingly
    }
});

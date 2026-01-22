// Import your buildCards function and inventory data
import { buildCards } from './cards-n-modals.mjs';
import { inventory } from './fetchers.mjs';
import { getSavedVehicles } from './check-saved.mjs';



// Remove all cards
export function clearCards() { // Clear existing cards
    const cardsContainer = document.getElementById('inventory-cards');
    cardsContainer.innerHTML = '';
}



// New Build Cards function with filtering
export function filterAndBuildCards(type) {
    clearCards(); // Clear existing cards first
    let filtered = inventory; // Start with full inventory

    if (type === 'saved') { // If 'saved' filter is selected. In the main file, with the click event, the id of the clicked element is passed as type. So if the saved button is clicked, the id 'saved' is passed here.
        filtered = getSavedVehicles(); // Use the imported function to get saved vehicles. Checks the "saved" array in localStorage and returns the vehicle objects from inventory that match those IDs.
        if (filtered.length === 0) { // If no saved vehicles found in localStorage, show a message and return
            const cardsContainer = document.getElementById('inventory-cards');
            cardsContainer.innerHTML = '<span class="no-vehicles-message">No saved vehicles found.</span>';
            return;
        }
    }
    else if (type && type !== 'all') { // Similarly, if the type is not 'all' and is defined, filter by body style based on the clicked button's id which is passed as type.
        filtered = inventory.filter(vehicle => vehicle.bodyStyle.toLowerCase() === type); // access vehicle.bodyStyle, convert to lowercase, and compare to the type. If they match, include in filtered array.
    }
    buildCards(filtered); // Build cards with the filtered data
}



// Return filtered vehicles based on type. Used in sorting function to get the currently filtered vehicles. 
export function getFilteredVehicles(type) { 
    if (type === 'saved') { // If 'saved' filter is selected it will return the saved vehicles with the help of the imported function that gets saved vehicles from localStorage.
        return getSavedVehicles();
    } else if (type && type !== 'all') { // If a specific body style filter is selected, filter and return vehicles matching that body style. Its lowercased to ensure case-insensitive comparison.
        return inventory.filter(vehicle => vehicle.bodyStyle.toLowerCase() === type);
    } else { // If 'all' is selected or no filter is applied, return the full inventory.
        return inventory;
    }
}



// Sort and build cards
export function sortAndBuildCards(order, filtered) { // Accepts the sort order and the currently filtered vehicles. In the main file, the updateSort function calls this and passes the currentSort and the filtered vehicles obtained from getFilteredVehicles function above.
    clearCards(); // First clear existing cards
    let sorted = (filtered ? filtered.slice() : inventory.slice()); // This means if filtered is provided, create a shallow copy of it using slice(), otherwise create a shallow copy of the full inventory. This ensures we don't modify the original arrays when sorting.
    if (order === 'ascending') { // Sort based on order
        sorted.sort((a, b) => a.price - b.price); // a is the first element being compared, b is the second. This sorts the array in place in ascending order based on the price property of the vehicle objects.
    } else if (order === 'descending') {
        sorted.sort((a, b) => b.price - a.price); // This sorts the array in place in descending order based on the price property.
    }
    buildCards(sorted); // After sorting, build cards with the sorted data
}
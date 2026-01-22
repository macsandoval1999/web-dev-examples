import { inventory } from './fetchers.mjs';



// Get saved vehicle IDs from localStorage
// Returns an array of saved vehicle IDs, if none are saved, returns an empty array but creates the 'saved' key in localStorage
export function getSavedIds() {
    return JSON.parse(localStorage.getItem('saved')) || [];
}

// Save a vehicle ID to localStorage
// If the vehicle ID is not already in the saved list, it is added
export function saveVehicle(id) {
    const saved = getSavedIds();
    if (!saved.includes(id)) {
        saved.push(id);
        localStorage.setItem('saved', JSON.stringify(saved));
    }
}

// Remove a vehicle ID from localStorage
// If the vehicle ID is found in the saved list, it is removed
export function unsaveVehicle(id) {
    let saved = getSavedIds();
    saved = saved.filter(savedId => savedId !== id);
    localStorage.setItem('saved', JSON.stringify(saved));
}

// Check if a vehicle is saved
// Returns true if the vehicle ID is in the saved list, false otherwise
export function isVehicleSaved(id) {
    return getSavedIds().includes(id);
}

// Get saved vehicle objects from inventory
// Returns an array of vehicle objects that are saved
export function getSavedVehicles() {
    const savedIds = getSavedIds();
    return inventory.filter(vehicle => savedIds.includes(vehicle.id));
}

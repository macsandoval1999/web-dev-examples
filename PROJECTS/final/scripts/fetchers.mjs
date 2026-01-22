// Fetch Vehicle Inventory Data
export async function fetchInventory() {
    try {
        const response = await fetch('./data/inventory.json'); //fetch the inventory data from the JSON file
        const inventory = await response.json(); // parse the JSON data
        return inventory;
    } catch (error) { // catch any errors that occur during the fetch or parsing
        console.error('Error fetching inventory:', error);
        return [];
    }
}
export const inventory = await fetchInventory();



// Fetch Services Data
export async function fetchServices() {
    try {
        const response = await fetch('./data/services.json');
        const services = await response.json();
        return services;
    } catch (error) {
        console.error('Error fetching services:', error);
        return [];
    }
}
export const services = await fetchServices();
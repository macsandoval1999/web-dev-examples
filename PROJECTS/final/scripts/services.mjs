import { services } from "./fetchers.mjs";



// Get services by category
export function getServicesByCategory(category) {
    return services.filter(service => service.category.toLowerCase() === category.toLowerCase()); // filter services where the category matches (case-insensitive)
}



// Get category description
export function getCategoryDescription(category) { // Provide descriptions for each category
    const descriptions = {
        maintenance: "Routine and essential services to keep your vehicle running smoothly.",
        consultation: "Expert advice and guidance for your automotive needs, including test drives and financing.",
        custom: "Specialized and performance services tailored to your unique requirements."
    };
    return descriptions[category.toLowerCase()] || ""; //Only return the mathching description, or an empty string if none found.
}



// Create UL list of services for a given category
export function createServiceList(category) {
    const filteredServices = getServicesByCategory(category); // Get services in the specified category using the function from above, then build a list.
    if (filteredServices.length === 0) {
        return `<p>No services available in the "${category}" category.</p>`;
    }
    const ul = document.createElement('ul'); // Create a UL element, then for each service in the filtered list, create an LI with the service details and append it to the UL.
    filteredServices.forEach(service => {
        const li = document.createElement('li');
        li.innerHTML = `<strong>${service.name}</strong>: ${service.description} - $${service.price.toFixed(2)} (${service.duration})`;
        ul.appendChild(li);
    });
    return ul.outerHTML;
}



// Generate modal content for a category
// Using the functions above, we can build the modal header and content for a given category.
export function getModalContent(category) {
    const name = category.charAt(0).toUpperCase() + category.slice(1).toLowerCase(); // Capitalize first letter of category for display
    const desc = getCategoryDescription(category); // Get the description for the category
    const list = createServiceList(category);  // Create the service list for the category
    return { // Return an object with header and content properties
        header: `<h2>${name} Services</h2>`,
        content: `<p>${desc}</p>${list}`
    };
}



// Get three random services from all services
// **USED IN SCHEDULING PAGE SPOTLIGHT**
export function getRandomServices(count = 3) { // Default to 3 services if count not provided, we only want to spotlight 3 services as hot picks of the day.
    const shuffled = services.slice().sort(() => 0.5 - Math.random()); // Shuffle the services array using sort with a random comparator. slice() creates a shallow copy to avoid modifying the original array.
    return shuffled.slice(0, count); // Return the first 'count' services from the shuffled array.
}



// Get all service names and make them options for form selection
// **USED IN SCHEDULING FORM - SERVICE SELECTION**
export function populateServiceOptions() {
    const serviceSelect = document.getElementById("service-type");
    if (!serviceSelect) return;
    services.forEach(service => {
        const option = document.createElement("option");
        option.value = service.name;
        option.textContent = service.name;
        serviceSelect.appendChild(option);
    });
}
// -----Script for navigation menu toggle-----
    // DOM elements
        const menu = document.querySelector('nav');   
        const menuSymbol = document.querySelector('#menu');
    // Event listener
        menuSymbol.addEventListener('click', function() {
            menu.classList.toggle('show-nav');
            menuSymbol.classList.toggle('show-nav');
        });

// -----Script for footer date-----
// Get current date
const today = new Date();
// Get current year
const year = document.querySelector("#currentyear");
year.innerHTML = `${today.getFullYear()}`;
// Set last modified date
const lastModified = document.querySelector('#lastModified'); 
lastModified.innerHTML = `Last Modification: ${document.lastModified}`; 

// -----Script for gallery page-----
const artwork = [
    {
        title: "Misunderstood",
        created: 2025,
        medium: "Charcoal on Paper",
        dimensions: "9 x 13.5 inches",
        type: "Drawing",
        imageLarge:
            "images/misunderstood-large.webp",
        imageMedium:
            "images/misunderstood-med.webp",
        imageSmall:
            "images/misunderstood-small.webp"
    },
    {
        title: "No Sin Unseen",
        created: 2025,
        medium: "Charcoal on Paper",
        dimensions: "9 x 13.5 inches",
        type: "Drawing",
        imageLarge:
            "images/no-sin-unseen-large.webp",
        imageMedium:
            "images/no-sin-unseen-med.webp",
        imageSmall:
            "images/no-sin-unseen-small.webp"
    },
    {
        title: "Portrait 65",
        created: 2024,
        medium: "Charcoal on Paper",
        dimensions: "9 x 13.5 inches",
        type: "Sketch",
        imageLarge:
            "images/portrait65-large.webp",
        imageMedium:
            "images/portrait65-med.webp",
        imageSmall:
            "images/portrait65-small.webp"
    },
    {
        title: "Portrait 67",
        created: 2025,
        medium: "Charcoal on Paper",
        dimensions: "9 x 13.5 inches",
        type: "Sketch",
        imageLarge:
            "images/portrait67-large.webp",
        imageMedium:
            "images/portrait67-med.webp",
        imageSmall:
            "images/portrait67-small.webp"
    },
    {
        title: "Radiation",
        created: 2025,
        medium: "Charcoal on Paper",
        dimensions: "9 x 13.5 inches",
        type: "Drawing",
        imageLarge:
            "images/radiation-large.webp",
        imageMedium:
            "images/radiation-med.webp",
        imageSmall:
            "images/radiation-small.webp"
    },
    {
        title: "Taquito Bub",
        created: 2023,
        medium: "Charcoal & Graphite on Paper",
        dimensions: "18 x 24 inches",
        type: "Drawing",
        imageLarge:
            "images/taquito-bub-large.webp",
        imageMedium:
            "images/taquito-bub-med.webp",
        imageSmall:
            "images/taquito-bub-small.webp"
    },
    {
        title: "Reflection",
        created: 2025,
        medium: "Charcoal on Paper",
        dimensions: "9 x 13.5 inches",
        type: "Drawing",
        imageLarge:
            "images/reflection-large.webp",
        imageMedium:
            "images/reflection-med.webp",
        imageSmall:
            "images/reflection-small.webp"  
    },
    {
        title: "The Deceiver",
        created: 2025,
        medium: "Black Paint on Canvas",
        dimensions: "16 x 20 inches",
        type: "Painting",
        imageLarge:
            "images/thedeceiver-large.webp",
        imageMedium:
            "images/thedeceiver-med.webp",
        imageSmall:
            "images/thedeceiver-small.webp"
    }, {
        title: "The Eternal Family",
        created: 2024,
        medium: "Charcoal on Canvas",
        dimensions: "18 x 24 inches",
        type: "Drawing",
        imageLarge:
            "images/the-eternal-fam-large.webp",
        imageMedium:
            "images/the-eternal-fam-med.webp",
        imageSmall:
            "images/the-eternal-fam-small.webp"
    }, {
        title: "Tornado",
        created: 2024,
        medium: "Charcoal & Graphite on Paper",
        dimensions: "9 x 13.5 inches",
        type: "Drawing",
        imageLarge:
            "images/tornado-large.webp",
        imageMedium:
            "images/tornado-med.webp",
        imageSmall:
            "images/tornado-small.webp"
    }, {
        title: "The Light of the World",
        created: 2023,
        medium: "Charcoal on Paper",
        dimensions: "18 x 24 inches",
        type: "Drawing",
        imageLarge:
            "images/the-light-of-the-world-large.webp",
        imageMedium:
            "images/the-light-of-the-world-med.webp",
        imageSmall:
            "images/the-light-of-the-world-small.webp"
    }
];
// DOM element for heading
let heading = document.querySelector('#gallery-title');
// Build the art cards
function createArtCards(filteredArt) {
    filteredArt.forEach(artwork => {
        let card = document.createElement('section');
        card.classList.add('art-card');

        card.innerHTML =
            `<picture>
                <source media="(min-width: 1020px)" srcset="${artwork.imageLarge}" width="1500" height="2000">
                <source media="(min-width: 768px)" srcset="${artwork.imageMedium}" width="1000" height="1333">
                <img src="${artwork.imageSmall}" alt="${artwork.title}" loading="lazy" width="500" height="667">
            </picture>
            <h3><span class="label">Title:</span> ${artwork.title}</h3>
            <p><span class="label">Year Created:</span> ${artwork.created}</p>
            <p><span class="label">Medium:</span> ${artwork.medium}</p>
            <p><span class="label">Original Dimensions:</span> ${artwork.dimensions}</p>

        `;

        document.querySelector('.gallery').appendChild(card);
    });
};
// Initial load of entire collection
createArtCards(artwork);
// Initial Load (All) Show entire collection
const allLink = document.querySelector('#all');
allLink.addEventListener('click', function () {
    document.querySelector('.gallery').innerHTML = '';
    createArtCards(artwork);
    heading.textContent = allLink.textContent;
});
// Filter gallery (Drawings) for Drawings
const drawingsLink = document.querySelector('#drawings');
drawingsLink.addEventListener('click', function () {
    document.querySelector('.gallery').innerHTML = '';
    createArtCards(artwork.filter(art => art.type === "Drawing"));
    heading.textContent = drawingsLink.textContent;
});
// Filter gallery (Paintings) for Paintings
const paintingsLink = document.querySelector('#paintings');
paintingsLink.addEventListener('click', function () {
    document.querySelector('.gallery').innerHTML = '';
    createArtCards(artwork.filter(art => art.type === "Painting"));
    heading.textContent = paintingsLink.textContent;
});
// Filter gallery (Photographs) for Photographs
const photographsLink = document.querySelector('#photographs');
photographsLink.addEventListener('click', function () {
    document.querySelector('.gallery').innerHTML = '';
    createArtCards(artwork.filter(art => art.type === "Photograph"));
    heading.textContent = photographsLink.textContent;
});
// Filter gallery (Sketches) for Sketches
const sketchesLink = document.querySelector('#sketches');
sketchesLink.addEventListener('click', function () {
    document.querySelector('.gallery').innerHTML = '';
    createArtCards(artwork.filter(art => art.type === "Sketch"));
    heading.textContent = sketchesLink.textContent;
});



// inventory.js (FULL UPDATED VERSION)
import { fetchJSON } from './fetcher.js';
import { openModal } from './modal.js';
import { isFavorite, toggleFavorite } from './favorites.js';

const DATA_URL = 'data/cars.json';
let ALL_CARS = [];
let compareList = [];

export async function initInventory(gridSelector = '#inventoryGrid') {
    try {
        ALL_CARS = await fetchJSON(DATA_URL);
        populateFilterOptions();
        renderInventory();

        setupFilterListeners();
        setupCompareBar();

    } catch (err) {
        document.querySelector(gridSelector).innerHTML = `
      <p>Error loading inventory. Please try again later.</p>
    `;
    }
}

/* -----------------------------------
    FILTER / SORT LOGIC
----------------------------------- */

function getFilteredCars() {
    let cars = [...ALL_CARS];

    const make = document.getElementById('filterMake').value;
    const year = document.getElementById('filterYear').value;
    const price = document.getElementById('filterPrice').value;
    const sort = document.getElementById('sortBy').value;

    // FILTERING
    if (make !== 'all') {
        cars = cars.filter(c => c.make === make);
    }

    if (year !== 'all') {
        cars = cars.filter(c => c.year == year);
    }

    if (price !== 'all') {
        cars = cars.filter(c => c.price <= Number(price));
    }

    // SORTING
    if (sort === 'priceLow') {
        cars.sort((a, b) => a.price - b.price);
    }
    if (sort === 'priceHigh') {
        cars.sort((a, b) => b.price - a.price);
    }
    if (sort === 'yearNew') {
        cars.sort((a, b) => b.year - a.year);
    }
    if (sort === 'yearOld') {
        cars.sort((a, b) => a.year - b.year);
    }

    return cars;
}

function setupFilterListeners() {
    ['filterMake', 'filterYear', 'filterPrice', 'sortBy']
        .forEach(id => document.getElementById(id).addEventListener('change', renderInventory));
}

function populateFilterOptions() {
    const makes = [...new Set(ALL_CARS.map(c => c.make))];
    const years = [...new Set(ALL_CARS.map(c => c.year))].sort((a, b) => b - a);

    const makeSel = document.getElementById('filterMake');
    const yearSel = document.getElementById('filterYear');

    makes.forEach(m => {
        makeSel.innerHTML += `<option value="${m}">${m}</option>`;
    });

    years.forEach(y => {
        yearSel.innerHTML += `<option value="${y}">${y}</option>`;
    });
}

/* -----------------------------------
    RENDER INVENTORY
----------------------------------- */

function renderInventory() {
    const cars = getFilteredCars();
    const grid = document.getElementById('inventoryGrid');
    grid.innerHTML = '';

    cars.forEach(car => {
        const card = document.createElement('article');
        card.className = 'card';
        card.innerHTML = `
      <img loading="lazy" src="${car.image}" alt="${car.year} ${car.make} ${car.model}">
      <div class="card-body">
        <h3>${car.year} ${car.make} ${car.model}</h3>
        <div class="meta">$${car.price.toLocaleString()} • ${car.mileage.toLocaleString()} mi</div>
        <div class="desc">${short(car.description)}</div>
      </div>
      <div class="actions">
        <button class="btn details" data-id="${car.id}">Details</button>
        <button class="btn favorite" data-id="${car.id}">
          ${isFavorite(car.id) ? 'Unfavorite' : 'Favorite'}
        </button>
        <button class="btn compareBtn" data-id="${car.id}">Compare</button>
      </div>
    `;
        grid.appendChild(card);
    });

    // BUTTON HANDLERS
    document.querySelectorAll('.details').forEach(btn => {
        btn.addEventListener('click', e => {
            const id = Number(e.target.dataset.id);
            const car = ALL_CARS.find(c => c.id === id);
            openModal(buildCarModal(car), `${car.year} ${car.make} ${car.model}`);
        });
    });

    document.querySelectorAll('.favorite').forEach(btn => {
        btn.addEventListener('click', e => {
            const id = Number(e.target.dataset.id);
            toggleFavorite(id);

            e.target.textContent = isFavorite(id) ? 'Unfavorite' : 'Favorite';
        });
    });

    document.querySelectorAll('.compareBtn').forEach(btn => {
        btn.addEventListener('click', e => {
            const id = Number(e.target.dataset.id);
            addToCompare(id);
        });
    });
}

/* -----------------------------------
    COMPARE FEATURE
----------------------------------- */

function addToCompare(id) {
    if (compareList.includes(id)) {
        alert('Vehicle already in compare list');
        return;
    }
    if (compareList.length >= 3) {
        alert('You can compare up to 3 vehicles only.');
        return;
    }

    compareList.push(id);
    updateCompareBar();
}

function setupCompareBar() {
    const bar = document.createElement('div');
    bar.id = 'compareBar';
    bar.style.cssText = `
    position:fixed;
    bottom:0;
    left:0;
    width:100%;
    background:#003399;
    color:white;
    padding:.5rem 1rem;
    display:flex;
    justify-content:space-between;
    align-items:center;
    font-weight:600;
    z-index:999;
  `;
    bar.innerHTML = `
    <span>Compare List: <span id="compareCount">0</span> / 3</span>
    <button class="btn" id="compareNow">Compare Now</button>
  `;
    document.body.appendChild(bar);

    document.getElementById('compareNow').addEventListener('click', showCompareModal);
    updateCompareBar();
}

function updateCompareBar() {
    document.getElementById('compareCount').textContent = compareList.length;
}

function showCompareModal() {
    if (compareList.length === 0) {
        alert('Add vehicles to compare first.');
        return;
    }

    const cars = compareList.map(id => ALL_CARS.find(c => c.id === id));

    let html = `
    <div style="display:flex;gap:1rem;overflow-x:auto;">
      ${cars.map(c => `
        <div style="min-width:250px;background:white;padding:1rem;border-radius:8px">
          <h3>${c.year} ${c.make} ${c.model}</h3>
          <img src="${c.image}" style="width:100%;height:150px;object-fit:cover">
          <p><strong>Price:</strong> $${c.price.toLocaleString()}</p>
          <p><strong>Mileage:</strong> ${c.mileage.toLocaleString()}</p>
          <p><strong>Fuel:</strong> ${c.fuel}</p>
          <p><strong>Body:</strong> ${c.bodyStyle}</p>
        </div>
      `).join('')}
    </div>
  `;

    openModal(html, 'Compare Vehicles');
}

/* -----------------------------------
    VEHICLE MODAL (includes finance estimator)
----------------------------------- */

function buildCarModal(car) {
    return `
    <img src="${car.image}" style="width:100%;height:220px;object-fit:cover;border-radius:6px">
    <p><strong>Price:</strong> $${car.price.toLocaleString()}</p>
    <p><strong>Mileage:</strong> ${car.mileage.toLocaleString()} miles</p>
    <p><strong>Fuel:</strong> ${car.fuel} • <strong>Body:</strong> ${car.bodyStyle}</p>
    <p>${car.description}</p>

    <h3>Finance Estimator</h3>
    <label>Down Payment</label>
    <input id="downPay" type="number" min="0" value="2000">
    <label>Interest Rate (%)</label>
    <input id="rate" type="number" min="0" value="5">
    <label>Term (months)</label>
    <input id="term" type="number" min="12" value="60">
    <button class="btn" id="calcPay">Calculate Payment</button>
    <p id="paymentResult"></p>

    <script>
      document.getElementById('calcPay').onclick = function(){
        const price = ${car.price};
        const down = Number(document.getElementById('downPay').value);
        const loan = price - down;
        const interest = Number(document.getElementById('rate').value) / 100 / 12;
        const term = Number(document.getElementById('term').value);

        const monthly = (loan * interest) / (1 - Math.pow(1 + interest, -term));
        document.getElementById('paymentResult').textContent =
          "Estimated Payment: $" + monthly.toFixed(2) + "/mo";
      };
    </script>

    <p style="margin-top:1rem;">
      <a href="schedule.html?carId=${car.id}" class="btn">Schedule Test Drive</a>
    </p>
  `;
}

/* -----------------------------------
    Helpers
----------------------------------- */
function short(t) { return t.length > 100 ? t.substring(0, 100) + '…' : t; }

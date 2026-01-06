// favorites.js
import { saveToStorage, loadFromStorage } from './storage.js';

const KEY = 'sag_favorites';

export function getFavorites() {
    return loadFromStorage(KEY, []);
}

export function isFavorite(id) {
    return getFavorites().includes(id);
}

export function toggleFavorite(id) {
    const favs = getFavorites();
    const idx = favs.indexOf(id);
    if (idx === -1) favs.push(id);
    else favs.splice(idx, 1);
    saveToStorage(KEY, favs);
    return favs;
}

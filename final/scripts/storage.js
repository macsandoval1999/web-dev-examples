// storage.js
export function saveToStorage(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
}
export function loadFromStorage(key, fallback = null) {
    try {
        const raw = localStorage.getItem(key);
        return raw ? JSON.parse(raw) : fallback;
    } catch (e) {
        console.warn("storage parse error", e);
        return fallback;
    }
}

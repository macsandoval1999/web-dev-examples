// modal.js
let lastFocused = null;
const backdrop = document.createElement('div');
backdrop.className = 'modal-backdrop';
backdrop.innerHTML = `<div class="modal" role="dialog" aria-modal="true" aria-hidden="true"></div>`;
document.body.appendChild(backdrop);

export function openModal(htmlContent, title = 'Details') {
    const dialog = backdrop.querySelector('.modal');
    dialog.innerHTML = `
    <button class="modal-close" aria-label="Close dialog">Close</button>
    <h2>${title}</h2>
    <div class="modal-content">${htmlContent}</div>
  `;
    const closeBtn = dialog.querySelector('.modal-close');
    closeBtn.addEventListener('click', closeModal);
    backdrop.style.display = 'flex';
    backdrop.querySelector('.modal').setAttribute('aria-hidden', 'false');
    lastFocused = document.activeElement;
    closeBtn.focus();
    backdrop.addEventListener('keydown', trapTab);
    backdrop.addEventListener('click', backdropClick);
}

export function closeModal() {
    const dialog = backdrop.querySelector('.modal');
    dialog.setAttribute('aria-hidden', 'true');
    backdrop.style.display = 'none';
    backdrop.removeEventListener('keydown', trapTab);
    backdrop.removeEventListener('click', backdropClick);
    if (lastFocused) lastFocused.focus();
}

function backdropClick(e) {
    // close only if backdrop (not modal) clicked
    if (e.target === backdrop) closeModal();
}

function trapTab(e) {
    if (e.key !== 'Tab') return;
    const focusable = backdrop.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])');
    if (focusable.length === 0) return;
    const first = focusable[0], last = focusable[focusable.length - 1];
    if (e.shiftKey && document.activeElement === first) {
        last.focus(); e.preventDefault();
    } else if (!e.shiftKey && document.activeElement === last) {
        first.focus(); e.preventDefault();
    }
}

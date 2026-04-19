import { g, escHtml } from '../utils/dom.js';

export function renderSuggestions(items, query) {
  const root = g('suggestions');
  if (!root) return;
  if (!query) {
    root.classList.remove('open');
    root.innerHTML = '';
    return;
  }
  if (!items.length) {
    root.classList.add('open');
    root.innerHTML = `<div class="sug-empty">No results for <strong>${escHtml(query)}</strong></div>`;
    return;
  }

  root.classList.add('open');
  root.innerHTML = items
    .slice(0, 20)
    .map(({ key, food }) => `<div class="sug-item" data-key="${key}">${escHtml(food.name)} <span class="sug-cal">${food.cal} kcal</span></div>`)
    .join('');
}

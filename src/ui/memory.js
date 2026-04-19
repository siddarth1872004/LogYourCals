import { g, escHtml } from '../utils/dom.js';

export function renderMemoryCount(count) {
  const badge = g('memoryCount');
  if (badge) badge.textContent = String(count);
}

export function renderMemoryDrawer(savedKeys, foodIndex) {
  const root = g('memoryList');
  if (!root) return;
  root.innerHTML = savedKeys
    .map((key) => {
      const food = foodIndex[key];
      if (!food) return '';
      return `<div class="mem-item" data-key="${key}">${escHtml(food.name)}</div>`;
    })
    .join('');
}

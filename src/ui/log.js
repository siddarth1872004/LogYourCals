import { g, escHtml } from '../utils/dom.js';

export function renderLog(entries) {
  const root = g('logList');
  if (!root) return;
  root.innerHTML = entries
    .map((entry) => `<div class="log-entry" data-id="${entry.id}"><strong>${escHtml(entry.name)}</strong> · ${Math.round(entry.cal)} kcal</div>`)
    .join('');
}

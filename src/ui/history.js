import { g } from '../utils/dom.js';

export function renderHistory(history) {
  const root = g('historyList');
  if (!root) return;
  const days = Object.keys(history).sort().reverse();
  root.innerHTML = days
    .map((day) => `<div class="hist-day"><strong>${day}</strong> · ${(history[day] || []).length} entries</div>`)
    .join('');
}

export function renderHeatmap(history) {
  const root = g('heatmap');
  if (!root) return;
  const days = Object.keys(history);
  root.innerHTML = `<div class="heatmap-summary">Tracked days: ${days.length}</div>`;
}

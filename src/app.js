import { initializeStorageVersion } from './core/storage.js';
import { getState } from './core/state.js';
import { triggerSuggestionRender } from './features/search.js';
import { addEntry, deleteEntry, undoLast } from './features/log.js';
import { refreshHistoryViews } from './features/history.js';
import { addWater, renderWaterFeature } from './features/water.js';
import { renderGoalsFeature, saveGoals } from './features/goals.js';
import { addToMemory, openMemoryDrawer } from './features/memory-drawer.js';
import { getFoodByKey } from './core/memory.js';
import { g } from './utils/dom.js';

function initSearch() {
  const input = g('foodInput');
  if (!input) return;
  input.addEventListener('input', (event) => {
    triggerSuggestionRender(event.target.value.trim());
  });

  g('suggestions')?.addEventListener('click', (event) => {
    const item = event.target.closest('.sug-item');
    if (!item) return;
    const key = item.dataset.key;
    const food = getFoodByKey(key);
    if (!food) return;
    const entry = { id: Date.now(), key, name: food.name, cal: Number(food.cal) || 0 };
    addEntry(entry);
  });
}

function initLogActions() {
  g('clearLogBtn')?.addEventListener('click', () => {
    const ids = getState().logEntries.map((entry) => entry.id);
    ids.forEach((id) => deleteEntry(id));
  });

  g('undoBtn')?.addEventListener('click', () => undoLast());
  g('logList')?.addEventListener('click', (event) => {
    const entryEl = event.target.closest('.log-entry');
    if (!entryEl) return;
    deleteEntry(Number(entryEl.dataset.id));
  });
}

function initWater() {
  g('waterAdd250')?.addEventListener('click', () => addWater(250));
  g('waterAdd500')?.addEventListener('click', () => addWater(500));
  g('waterAdd750')?.addEventListener('click', () => addWater(750));
  renderWaterFeature();
}

function initGoals() {
  renderGoalsFeature();
  g('saveGoalsBtn')?.addEventListener('click', () => {
    saveGoals({
      cal: Number(g('goalCal')?.value || 0),
      prot: Number(g('goalProt')?.value || 0),
      carb: Number(g('goalCarb')?.value || 0),
      fat: Number(g('goalFat')?.value || 0),
    });
  });
}

function initMemory() {
  g('memoryBtn')?.addEventListener('click', () => openMemoryDrawer());
  g('saveMemoryBtn')?.addEventListener('click', () => {
    const key = g('foodInput')?.value?.trim().toLowerCase().replace(/\s+/g, '-');
    if (key) addToMemory(key);
  });
}

function init() {
  initializeStorageVersion();
  initSearch();
  initLogActions();
  initWater();
  initGoals();
  initMemory();
  refreshHistoryViews();
}

init();

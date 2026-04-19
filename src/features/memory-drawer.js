import { getFoodIndex } from '../core/memory.js';
import { getSavedFoods, setSavedFoods } from '../core/state.js';
import { renderMemoryCount, renderMemoryDrawer } from '../ui/memory.js';

export function openMemoryDrawer() {
  const foods = getFoodIndex();
  renderMemoryDrawer(getSavedFoods(), foods);
  renderMemoryCount(getSavedFoods().length);
}

export function addToMemory(key) {
  const saved = getSavedFoods();
  if (saved.includes(key)) return;
  setSavedFoods([...saved, key]);
  openMemoryDrawer();
}

export function removeFromMemory(key) {
  setSavedFoods(getSavedFoods().filter((item) => item !== key));
  openMemoryDrawer();
}

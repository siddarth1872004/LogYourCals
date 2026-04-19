import { g } from '../utils/dom.js';

export function renderWater(waterMl, waterGoal) {
  const text = g('waterText');
  if (text) {
    text.textContent = `${(waterMl / 1000).toFixed(1)}L / ${(waterGoal / 1000).toFixed(1)}L`;
  }
  const pct = g('waterPctText');
  if (pct) {
    const value = Math.min(100, Math.round((waterMl / Math.max(waterGoal, 1)) * 100));
    pct.textContent = `${value}%`;
  }
}

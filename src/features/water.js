import { getState, setWaterMl } from '../core/state.js';
import { renderWater } from '../ui/water.js';

export function addWater(ml) {
  const next = getState().waterMl + ml;
  setWaterMl(next);
  renderWater(getState().waterMl, getState().waterGoal);
}

export function renderWaterFeature() {
  renderWater(getState().waterMl, getState().waterGoal);
}

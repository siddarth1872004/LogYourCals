import { getGoals, setGoals } from '../core/state.js';
import { renderGoals } from '../ui/goals.js';

export function renderGoalsFeature() {
  renderGoals(getGoals());
}

export function saveGoals(goalsPatch) {
  setGoals(goalsPatch);
  renderGoals(getGoals());
}

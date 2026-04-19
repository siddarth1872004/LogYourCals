import { getHistory } from '../core/state.js';
import { renderHeatmap, renderHistory } from '../ui/history.js';

export function refreshHistoryViews() {
  const history = getHistory();
  renderHistory(history);
  renderHeatmap(history);
}

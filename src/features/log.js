import { addLogEntry, getLogEntries, popUndo, pushUndo, removeLogEntry, setLogEntries, updateLogEntry } from '../core/state.js';
import { renderLog } from '../ui/log.js';

export function addEntry(entry) {
  addLogEntry(entry);
  pushUndo({ type: 'delete', payload: entry.id });
  renderLog(getLogEntries());
}

export function deleteEntry(id) {
  const removed = removeLogEntry(id);
  if (removed) pushUndo({ type: 'add', payload: removed });
  renderLog(getLogEntries());
}

export function editEntry(id, patch) {
  const before = getLogEntries().find((entry) => entry.id === id);
  if (!before) return;
  updateLogEntry(id, patch);
  pushUndo({ type: 'edit', payload: { id, before } });
  renderLog(getLogEntries());
}

export function undoLast() {
  const action = popUndo();
  if (!action) return;

  if (action.type === 'delete') {
    removeLogEntry(action.payload);
  }
  if (action.type === 'add') {
    addLogEntry(action.payload);
  }
  if (action.type === 'edit') {
    const next = getLogEntries().map((entry) => (entry.id === action.payload.id ? action.payload.before : entry));
    setLogEntries(next);
  }
  renderLog(getLogEntries());
}

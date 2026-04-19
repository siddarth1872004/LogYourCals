import { _load, _save, todayKey } from './storage.js';

const defaults = {
  goals: { cal: 2000, prot: 150, carb: 250, fat: 65 },
  logEntries: [],
  waterMl: 0,
  history: {},
  savedFoods: [],
  recentFoods: [],
  undoStack: [],
  waterGoal: 2500,
};

const state = {
  goals: _load('nutrilog_goals', defaults.goals),
  logEntries: _load('nutrilog_log_today', defaults.logEntries),
  waterMl: Number(localStorage.getItem('nutrilog_water_today') || 0),
  history: _load('nutrilog_history', defaults.history),
  savedFoods: _load('nutrilog_savedfoods', defaults.savedFoods),
  recentFoods: _load('nutrilog_recents', defaults.recentFoods),
  undoStack: [],
  waterGoal: Number(localStorage.getItem('nutrilog_watergoal') || defaults.waterGoal),
};

function persist() {
  _save('nutrilog_goals', state.goals, { history: state.history });
  _save('nutrilog_log_today', state.logEntries, { history: state.history });
  _save('nutrilog_history', state.history, { history: state.history });
  _save('nutrilog_savedfoods', state.savedFoods, { history: state.history });
  _save('nutrilog_recents', state.recentFoods, { history: state.history });
  localStorage.setItem('nutrilog_water_today', String(state.waterMl));
  localStorage.setItem('nutrilog_watergoal', String(state.waterGoal));
  localStorage.setItem('nutrilog_date', todayKey());
}

export const getState = () => state;

export function getGoals() { return state.goals; }
export function setGoals(goals) { state.goals = { ...state.goals, ...goals }; persist(); }

export function getLogEntries() { return state.logEntries; }
export function setLogEntries(entries) { state.logEntries = [...entries]; persist(); }
export function addLogEntry(entry) { state.logEntries = [...state.logEntries, entry]; persist(); }
export function updateLogEntry(id, patch) {
  state.logEntries = state.logEntries.map((entry) => (entry.id === id ? { ...entry, ...patch } : entry));
  persist();
}
export function removeLogEntry(id) {
  const removed = state.logEntries.find((entry) => entry.id === id);
  state.logEntries = state.logEntries.filter((entry) => entry.id !== id);
  persist();
  return removed;
}

export function getWaterMl() { return state.waterMl; }
export function setWaterMl(value) { state.waterMl = Math.max(0, Number(value) || 0); persist(); }

export function getHistory() { return state.history; }
export function setHistory(history) { state.history = { ...history }; persist(); }

export function getSavedFoods() { return state.savedFoods; }
export function setSavedFoods(savedFoods) { state.savedFoods = [...savedFoods]; persist(); }

export function getRecentFoods() { return state.recentFoods; }
export function setRecentFoods(recentFoods) { state.recentFoods = [...recentFoods]; persist(); }

export function pushUndo(action) {
  state.undoStack.push(action);
  if (state.undoStack.length > 30) state.undoStack.shift();
}

export function popUndo() {
  return state.undoStack.pop() || null;
}

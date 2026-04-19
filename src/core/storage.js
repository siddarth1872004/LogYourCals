const STORAGE_VERSION = 1;
const VERSION_KEY = 'nutrilog_storage_version';

export function _load(key, fallback = null) {
  try {
    const raw = localStorage.getItem(key);
    return raw ? JSON.parse(raw) : fallback;
  } catch {
    return fallback;
  }
}

export function _save(key, value, { history = null } = {}) {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch {
    if (history && typeof history === 'object') {
      const keys = Object.keys(history).sort();
      if (keys.length) {
        delete history[keys[0]];
        try {
          localStorage.setItem('nutrilog_history', JSON.stringify(history));
          localStorage.setItem(key, JSON.stringify(value));
        } catch {
          // no-op when quota is still exceeded
        }
      }
    }
  }
}

export function toDateKey(value) {
  if (typeof value === 'string' && /^\d{4}-\d{2}-\d{2}$/.test(value)) return value;
  const date = value instanceof Date ? value : new Date(value);
  if (Number.isNaN(date.getTime())) return null;
  return date.toISOString().slice(0, 10);
}

export function todayKey() {
  return toDateKey(new Date());
}

function migrateDateKeys(history) {
  const migrated = {};
  Object.entries(history || {}).forEach(([key, entries]) => {
    const normalized = toDateKey(new Date(key)) || toDateKey(key) || key;
    migrated[normalized] = entries;
  });
  return migrated;
}

export function initializeStorageVersion() {
  const storedVersion = Number(localStorage.getItem(VERSION_KEY) || 0);
  if (storedVersion >= STORAGE_VERSION) return;

  if (storedVersion < 1) {
    const history = _load('nutrilog_history', {});
    const migratedHistory = migrateDateKeys(history);
    _save('nutrilog_history', migratedHistory);

    const oldMemory = _load('nutriMemory', null);
    if (!_load('nutrilog_savedfoods', null) && oldMemory) {
      _save('nutrilog_savedfoods', oldMemory);
    }
  }

  localStorage.setItem(VERSION_KEY, String(STORAGE_VERSION));
}

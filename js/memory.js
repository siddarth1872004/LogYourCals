export function createFoodMemory(baseFoods = {}, userFoods = {}) {
  let customFoods = { ...userFoods };
  let index = buildIndex({ ...baseFoods, ...customFoods });

  function rebuild() {
    index = buildIndex({ ...baseFoods, ...customFoods });
  }

  return {
    getAll() {
      return index.byKey;
    },
    getByCategory(category = 'All') {
      if (!category || category === 'All') return [...index.keys];
      return [...(index.categoryIndex.get(category) || [])];
    },
    has(key) {
      return index.byKey.hasOwnProperty(key);
    },
    setUserFoods(nextUserFoods = {}) {
      customFoods = { ...nextUserFoods };
      rebuild();
    },
    search(query = '', boosts = {}) {
      const q = query.trim().toLowerCase();
      if (!q) return [];
      const out = [];
      for (const key of index.keys) {
        const food = index.byKey[key];
        const tokens = index.tokens.get(key) || [];
        const score = scoreFood(food, key, q, tokens, boosts);
        if (score > 0) out.push({ key, score });
      }
      return out.sort((a, b) => b.score - a.score).map(x => x.key);
    }
  };
}

function buildIndex(allFoods) {
  const keys = Object.keys(allFoods);
  const tokens = new Map();
  const categoryIndex = new Map();
  for (const key of keys) {
    const food = allFoods[key];
    const bag = new Set(tokenize(`${food.name || ''} ${food.category || ''} ${key}`));
    tokens.set(key, [...bag]);
    const cat = food.category || 'Other';
    if (!categoryIndex.has(cat)) categoryIndex.set(cat, []);
    categoryIndex.get(cat).push(key);
  }
  return { byKey: allFoods, keys, tokens, categoryIndex };
}

function tokenize(text = '') {
  return text.toLowerCase().split(/[^a-z0-9]+/).filter(Boolean);
}

function scoreFood(food, key, q, tokens, boosts) {
  const name = (food.name || '').toLowerCase();
  const id = key.toLowerCase();
  let score = 0;

  if (name === q || id === q) score = 5;
  else if (name.includes(q) || id.includes(q)) score = 4;
  else if (tokens.some(t => t.startsWith(q))) score = 3;
  else if (isSubsequence(q, name) || isSubsequence(q, id)) score = 2;

  if (!score) return 0;
  if (boosts?.saved?.has(key)) score += 0.7;
  if (boosts?.recent?.has(key)) score += 0.5;
  return score;
}

function isSubsequence(needle, haystack) {
  let i = 0;
  for (const ch of haystack) {
    if (ch === needle[i]) i += 1;
    if (i === needle.length) return true;
  }
  return false;
}

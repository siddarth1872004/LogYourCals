import { getFoodIndex } from '../core/memory.js';
import { renderSuggestions } from '../ui/search.js';

function lev(a, b) {
  const m = a.length;
  const n = b.length;
  const dp = Array.from({ length: m + 1 }, (_, i) => Array.from({ length: n + 1 }, (_, j) => (j === 0 ? i : 0)));
  for (let j = 0; j <= n; j += 1) dp[0][j] = j;
  for (let i = 1; i <= m; i += 1) {
    for (let j = 1; j <= n; j += 1) {
      dp[i][j] = a[i - 1] === b[j - 1] ? dp[i - 1][j - 1] : 1 + Math.min(dp[i - 1][j], dp[i][j - 1], dp[i - 1][j - 1]);
    }
  }
  return dp[m][n];
}

function scoreMatch(food, key, q) {
  const name = food.name.toLowerCase();
  const lq = q.toLowerCase();
  if (name === lq) return 100;
  if (name.startsWith(lq)) return 90;
  if (key.startsWith(lq)) return 85;
  if (name.includes(lq)) return 70;
  if (lq.length >= 4 && lev(name.slice(0, lq.length), lq) <= 1) return 25;
  return 0;
}

export function matchKeys(query) {
  if (!query) return [];
  const db = getFoodIndex();
  return Object.keys(db)
    .map((key) => ({ key, score: scoreMatch(db[key], key, query), food: db[key] }))
    .filter((item) => item.score > 0)
    .sort((a, b) => b.score - a.score);
}

export function triggerSuggestionRender(query) {
  const matches = matchKeys(query);
  renderSuggestions(matches, query);
}

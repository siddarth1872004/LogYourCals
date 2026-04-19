import { g } from '../utils/dom.js';

export function renderGoals(goals) {
  const mappings = [
    ['goalCal', goals.cal],
    ['goalProt', goals.prot],
    ['goalCarb', goals.carb],
    ['goalFat', goals.fat],
  ];

  mappings.forEach(([id, value]) => {
    const el = g(id);
    if (el) el.value = value;
  });
}

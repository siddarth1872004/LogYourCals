import FOOD_DB from '../../js/foods.js';
import { USER_FOOD_DB } from '../../js/user_foods.js';

function loadRuntimeUserFoods() {
  try {
    return JSON.parse(localStorage.getItem('nutrilog_userfoods') || '{}');
  } catch {
    return {};
  }
}

export function getFoodIndex() {
  return {
    ...FOOD_DB,
    ...USER_FOOD_DB,
    ...loadRuntimeUserFoods(),
  };
}

export function getFoodByKey(key) {
  return getFoodIndex()[key] || null;
}

export function getFoodKeys() {
  return Object.keys(getFoodIndex());
}

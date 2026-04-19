import FOOD_DB from './foods.js';

/* ══════════════════════════════════════════════════════
   NUTRILOG — v5  (clean unified rewrite)
   All features merged, all bugs fixed, zero duplicate
   function definitions, proper mobile + storage support
══════════════════════════════════════════════════════ */

/* ─── Custom foods ─────────────────────────────────── */
let USER_DB      = JSON.parse(localStorage.getItem('nutrilog_userfoods') || '{}');
function getAllFoods() { return { ...FOOD_DB, ...USER_DB }; }
function persistUserDB() { _save('nutrilog_userfoods', USER_DB); }

/* ─── Persistent state ─────────────────────────────── */
let goals        = _load('nutrilog_goals')        || { cal:2000, prot:150, carb:250, fat:65 };
let savedFoods   = _load('nutrilog_savedfoods')   || _load('nutriMemory') || [];
let recentFoods  = _load('nutrilog_recents')      || [];
let history      = _load('nutrilog_history')      || {};   // { "YYYY-MM-DD": [entries] }
let waterGoal    = parseInt(localStorage.getItem('nutrilog_watergoal') || '2500');
let mealGroups   = _load('nutrilog_mealgroups')   || ['Breakfast','Lunch','Dinner','Snacks'];
let streakData   = _load('nutrilog_streak')       || { count:0, lastDate:'' };
let theme        = localStorage.getItem('nutrilog_theme') || 'dark';
let bodyWeight   = _load('nutrilog_bodyweight')   || [];
let mealTemplates= _load('nutrilog_meal_templates')|| {};

/* ─── Session state (today) ────────────────────────── */
let logEntries     = [];
let dailyTotals    = { cal:0, prot:0, carb:0, fat:0 };
let waterMl        = 0;
let caloriesBurned = 0;
let currentMeal    = localStorage.getItem('nutrilog_curmeal') || autoDetectMeal();

/* ─── UI state ─────────────────────────────────────── */
let currentFood    = null;
let activeMode     = 'weight';
let memoryFilter   = '';
let memoryCatFilter= 'All';
let dragSrcIdx     = null;
let undoStack      = [];
let searchDebounce = null;
let highlightedSug = -1;
let collapsedMeals = new Set(_load('nutrilog_collapsed') || []);
let portionMemory  = _load('nutrilog_portion_memory') || {};
let savedPulseTimer= null;
let compareFood    = null;
let mealTemplatesCache = {};

/* ─── Tiny helpers ─────────────────────────────────── */
function _save(k, v) {
  try { localStorage.setItem(k, JSON.stringify(v)); } catch(e) {
    // quota: evict oldest history entry and retry
    const keys = Object.keys(history).sort();
    if (keys.length) { delete history[keys[0]]; _save('nutrilog_history', history); }
    try { localStorage.setItem(k, JSON.stringify(v)); } catch(_) {}
  }
}
function _load(k) {
  try { const v = localStorage.getItem(k); return v ? JSON.parse(v) : null; } catch(e) { return null; }
}
function toDateKey(d) {
  // Always store/read as YYYY-MM-DD for reliable sort and cross-browser parsing
  if (typeof d === 'string' && /^\d{4}-\d{2}-\d{2}$/.test(d)) return d;
  const dt = d instanceof Date ? d : new Date(d);
  if (isNaN(dt)) return null;
  return dt.toISOString().split('T')[0];
}
function todayKey() { return toDateKey(new Date()); }
function autoDetectMeal() {
  const h = new Date().getHours();
  return h<10 ? 'Breakfast' : h<14 ? 'Lunch' : h<18 ? 'Snacks' : 'Dinner';
}
function escHtml(s) {
  return String(s??'').replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');
}
function escAttr(s) { return String(s??'').replace(/'/g,"\\'"); }
function setText(id,v) { const e=document.getElementById(id); if(e) e.textContent=v; }
function setVal(id,v)  { const e=document.getElementById(id); if(e) e.value=v; }
function setW(id,pct)  { const e=document.getElementById(id); if(e) e.style.width=Math.min(100,pct)+'%'; }
function g(id)         { return document.getElementById(id); }

/* ─── Init: day rollover + load today ─────────────── */
(function init() {
  const today   = todayKey();
  const saved   = localStorage.getItem('nutrilog_date');

  if (saved && saved !== today) {
    // Archive previous day
    const yLog = _load('nutrilog_log_today') || [];
    if (yLog.length) {
      // Migrate old toDateString() keys to YYYY-MM-DD on first encounter
      const archivedKey = toDateKey(new Date(saved)) || saved;
      history[archivedKey] = yLog;
      const keys = Object.keys(history).sort();
      while (keys.length > 90) delete history[keys.shift()];
      _save('nutrilog_history', history);
    }
    localStorage.setItem('nutrilog_date', today);
    localStorage.removeItem('nutrilog_log_today');
    localStorage.removeItem('nutrilog_water_today');
    localStorage.removeItem('nutrilog_burned_today');
    _updateStreak(today);
    waterMl = caloriesBurned = 0;
  } else {
    if (!saved) localStorage.setItem('nutrilog_date', today);
    logEntries     = _load('nutrilog_log_today') || [];
    waterMl        = parseInt(localStorage.getItem('nutrilog_water_today') || '0');
    caloriesBurned = parseInt(localStorage.getItem('nutrilog_burned_today') || '0');
  }
  recomputeTotals();

  // Migrate old "nutriMemory" key
  if (!_load('nutrilog_savedfoods') && _load('nutriMemory')) {
    savedFoods = _load('nutriMemory');
    _save('nutrilog_savedfoods', savedFoods);
  }
})();

function _updateStreak(today) {
  const yest = new Date(); yest.setDate(yest.getDate()-1);
  const yKey = toDateKey(yest);
  if (streakData.lastDate === yKey) streakData.count++;
  else if (streakData.lastDate !== today) streakData.count = 1;
  streakData.lastDate = today;
  _save('nutrilog_streak', streakData);
}

function recomputeTotals() {
  dailyTotals = { cal:0, prot:0, carb:0, fat:0 };
  logEntries.forEach(e => {
    dailyTotals.cal  += e.cal;
    dailyTotals.prot  = +(dailyTotals.prot + e.prot).toFixed(1);
    dailyTotals.carb  = +(dailyTotals.carb + e.carb).toFixed(1);
    dailyTotals.fat   = +(dailyTotals.fat  + e.fat ).toFixed(1);
  });
}

function persistLog() {
  _save('nutrilog_log_today', logEntries);
  const el = g('savedPulse');
  if (el) { el.classList.add('active'); clearTimeout(savedPulseTimer); savedPulseTimer = setTimeout(()=>el.classList.remove('active'),1200); }
}

/* ─── Apply theme ──────────────────────────────────── */
function applyTheme() {
  document.documentElement.setAttribute('data-theme', theme);
  const btn = g('themeBtn'); if(btn) btn.textContent = theme==='dark' ? '☀' : '🌙';
}
applyTheme();
g('themeBtn')?.addEventListener('click', () => {
  theme = theme==='dark' ? 'light' : 'dark';
  localStorage.setItem('nutrilog_theme', theme);
  applyTheme();
});

/* ─── Date badge ───────────────────────────────────── */
setText('dateBadge', new Date().toLocaleDateString('en-US',{weekday:'long',month:'long',day:'numeric'}));
(function updateStreakBadge() {
  const el = g('streakBadge'); if(!el) return;
  if (streakData.count >= 3) { el.textContent=`🔥 ${streakData.count}d`; el.style.display='inline-flex'; }
  else el.style.display='none';
})();

/* ══════════════════════════════════════════════════════
   SEARCH
══════════════════════════════════════════════════════ */
const foodInput   = g('foodInput');
const suggestBox  = g('suggestions');
const portionCard = g('portionCard');

function scoreMatch(food, key, q) {
  const name=food.name.toLowerCase(), cat=(food.category||'').toLowerCase(), lq=q.toLowerCase();
  if (name===lq) return 100;
  if (name.startsWith(lq)) return 90;
  if (key.startsWith(lq)) return 85;
  if (name.includes(lq)) return 75;
  if (key.includes(lq)) return 65;
  if (name.split(' ').some(w=>w.startsWith(lq))) return 60;
  const words=lq.split(/\s+/).filter(Boolean);
  if (words.length>1 && words.every(w=>name.includes(w)||key.includes(w))) return 55;
  if (cat.includes(lq)) return 40;
  if (lq.length>=4) {
    for (const tok of [name,...name.split(' ')]) {
      if (Math.abs(tok.length-lq.length)<=2 && lev(lq,tok.slice(0,lq.length+1))<=1) return 28;
    }
  }
  return 0;
}
function lev(a,b) {
  const m=a.length,n=b.length,dp=Array.from({length:m+1},(_,i)=>Array.from({length:n+1},(_,j)=>j===0?i:0));
  for(let j=0;j<=n;j++) dp[0][j]=j;
  for(let i=1;i<=m;i++) for(let j=1;j<=n;j++) dp[i][j]=a[i-1]===b[j-1]?dp[i-1][j-1]:1+Math.min(dp[i-1][j],dp[i][j-1],dp[i-1][j-1]);
  return dp[m][n];
}
function matchKeys(q) {
  if(!q) return [];
  const db=getAllFoods();
  return Object.keys(db).map(k=>({k,s:scoreMatch(db[k],k,q)})).filter(x=>x.s>0).sort((a,b)=>b.s-a.s).map(x=>x.k);
}
function hlMatch(name,q) {
  const li=name.toLowerCase().indexOf(q.toLowerCase());
  if(li===-1) return escHtml(name);
  return escHtml(name.slice(0,li))+`<mark>${escHtml(name.slice(li,li+q.length))}</mark>`+escHtml(name.slice(li+q.length));
}

function renderSuggestions(keys) {
  const db=getAllFoods(), q=foodInput.value.trim();
  if (!q) { renderRecentsDropdown(); return; }
  if (!keys.length) {
    suggestBox.innerHTML=`<div class="sug-empty">No results for "<strong>${escHtml(q)}</strong>"
      <button class="sug-add-custom" onclick="openAddFoodModal('${escAttr(q)}')">+ Add as custom food</button></div>`;
    suggestBox.classList.add('open'); return;
  }
  const cats=new Map();
  keys.slice(0,36).forEach(k=>{const c=db[k].category||'Other';if(!cats.has(c))cats.set(c,[]);cats.get(c).push(k);});
  let html='';
  for(const [cat,ks] of cats) {
    html+=`<div class="sug-cat">${escHtml(cat)}</div>`;
    html+=ks.map(k=>{
      const f=db[k],isC=!!f._custom,isR=recentFoods.some(r=>r.key===k),isS=savedFoods.includes(k);
      return `<div class="sug-item${isC?' sug-custom':''}${isR?' sug-recent':''}" data-key="${k}">
        <div class="sug-main"><span class="sug-name">${hlMatch(f.name,q)}${isC?'<span class="custom-badge">custom</span>':''}</span>
        <span class="sug-meta">${escHtml(f.category||'')} · ${escHtml(f.servingLabel)}</span></div>
        <div class="sug-right">${isS?'<span class="sug-pin">📌</span>':''}${isR?'<span class="sug-clock">⏱</span>':''}
        <span class="sug-cal">${f.cal} kcal/${f.base}${f.unit}</span></div></div>`;
    }).join('');
  }
  if(keys.length>36) html+=`<div class="sug-more">+${keys.length-36} more — keep typing</div>`;
  html+=`<div class="sug-footer"><button class="sug-add-custom" onclick="openAddFoodModal('${escAttr(q)}')">+ Add "${escHtml(q)}" as custom food</button></div>`;
  suggestBox.innerHTML=html; suggestBox.classList.add('open');
}

function renderRecentsDropdown() {
  if(!recentFoods.length){suggestBox.classList.remove('open');return;}
  const db=getAllFoods();
  let html=`<div class="sug-cat">⏱ Recently Logged</div>`;
  html+=recentFoods.slice(0,10).map(r=>{
    const f=db[r.key]; if(!f) return '';
    return `<div class="sug-item sug-recent" data-key="${r.key}">
      <div class="sug-main"><span class="sug-name">${escHtml(f.name)}</span>
      <span class="sug-meta">${escHtml(r.portion)} · ${r.cal} kcal last time</span></div>
      <span class="sug-cal">${f.cal} kcal/${f.base}${f.unit}</span></div>`;
  }).filter(Boolean).join('');
  html+=`<div class="sug-footer recents-footer"><button class="sug-clear-recents" onclick="clearRecents()">Clear recents</button></div>`;
  suggestBox.innerHTML=html; suggestBox.classList.add('open');
}
function clearRecents() { recentFoods=[]; _save('nutrilog_recents',recentFoods); suggestBox.classList.remove('open'); showToast('Recents cleared'); }
window.clearRecents=clearRecents;

function addToRecents(key,portionLabel,cal) {
  recentFoods=recentFoods.filter(r=>r.key!==key);
  recentFoods.unshift({key,name:getAllFoods()[key]?.name||key,portion:portionLabel,cal});
  if(recentFoods.length>20) recentFoods.pop();
  _save('nutrilog_recents',recentFoods);
}

// Search filter pills
const FILTER_PILLS=[
  {l:'🌾 Grains',q:'Grains'},{l:'🥩 Meat',q:'Meat'},{l:'🐟 Seafood',q:'Seafood'},
  {l:'🥦 Veg',q:'Vegetables'},{l:'🥛 Dairy',q:'Eggs & Dairy'},{l:'🍛 Indian',q:'Indian'},
  {l:'🫘 Dal',q:'Dal'},{l:'🍕 Fast Food',q:'Fast Food'},{l:'🥤 Drinks',q:'Beverages'},
  {l:'🍰 Sweets',q:'Sweets'},{l:'🥜 Nuts',q:'Nuts'},{l:'🍳 Breakfast',q:'Breakfast'},
];
(function(){
  const w=g('searchFilterPills'); if(!w) return;
  w.innerHTML=FILTER_PILLS.map(f=>`<button class="search-filter-pill" onclick="applyFilter('${escAttr(f.q)}')">${f.l}</button>`).join('');
})();
function applyFilter(q) {
  foodInput.value=q; foodInput.dispatchEvent(new Event('input'));
  document.querySelectorAll('.search-filter-pill').forEach(b=>b.classList.toggle('active',b.onclick?.toString().includes(`'${q}'`)));
  foodInput.focus();
}
window.applyFilter=applyFilter;

foodInput?.addEventListener('input',()=>{
  highlightedSug=-1; clearTimeout(searchDebounce);
  const q=foodInput.value.trim();
  if(!q){renderRecentsDropdown();return;}
  searchDebounce=setTimeout(()=>renderSuggestions(matchKeys(q)),100);
});
foodInput?.addEventListener('focus',()=>{ if(!foodInput.value.trim()) renderRecentsDropdown(); });
foodInput?.addEventListener('keydown',e=>{
  if(e.key==='Escape'){
    if(suggestBox.classList.contains('open')){suggestBox.classList.remove('open');}
    else{portionCard.classList.remove('visible');currentFood=null;foodInput.value='';}
    foodInput.blur(); return;
  }
  if(e.key==='Enter'){
    e.preventDefault();
    const items=[...suggestBox.querySelectorAll('.sug-item[data-key]')];
    if(highlightedSug>=0&&items[highlightedSug]){selectFood(items[highlightedSug].dataset.key);return;}
    const q=foodInput.value.trim(); if(!q) return;
    const keys=matchKeys(q);
    if(keys.length===1) selectFood(keys[0]);
    else if(keys.length>1) renderSuggestions(keys);
    else openAddFoodModal(q);
    return;
  }
  if(e.key==='ArrowDown'||e.key==='ArrowUp'){
    e.preventDefault();
    const items=[...suggestBox.querySelectorAll('.sug-item[data-key]')];
    if(!items.length) return;
    highlightedSug=((highlightedSug+(e.key==='ArrowDown'?1:-1))+items.length+1)%(items.length+1)-1;
    items.forEach((el,i)=>el.classList.toggle('highlighted',i===highlightedSug));
    if(highlightedSug>=0){items[highlightedSug].scrollIntoView({block:'nearest'});foodInput.value=getAllFoods()[items[highlightedSug].dataset.key]?.name||foodInput.value;}
  }
});
g('searchBtn')?.addEventListener('click',()=>{
  const q=foodInput.value.trim(); if(!q){renderRecentsDropdown();return;}
  highlightedSug=-1; renderSuggestions(matchKeys(q));
});
suggestBox?.addEventListener('click',e=>{const it=e.target.closest('.sug-item[data-key]');if(it)selectFood(it.dataset.key);});
document.addEventListener('click',e=>{ if(!e.target.closest('#searchArea')&&!e.target.closest('#suggestions')) suggestBox?.classList.remove('open'); });
g('clearSearchBtn')?.addEventListener('click',()=>{ foodInput.value=''; suggestBox?.classList.remove('open'); portionCard?.classList.remove('visible'); currentFood=null; foodInput.focus(); });

/* ══════════════════════════════════════════════════════
   SELECT FOOD
══════════════════════════════════════════════════════ */
function selectFood(key) {
  const db=getAllFoods(); if(!db[key]){showToast('Food not found','warn');return;}
  currentFood={...db[key],_key:key};
  suggestBox?.classList.remove('open'); highlightedSug=-1;
  foodInput.value=currentFood.name;

  setText('cardFoodName',currentFood.name);
  setText('cardFoodBase',`${currentFood.cal} kcal per ${currentFood.base}${currentFood.unit}`);
  setText('cardServingInfo',`Suggested: ${currentFood.servingLabel} (${currentFood.servingSize}${currentFood.unit})`);

  const cTag=g('cardCustomTag'); if(cTag) cTag.style.display=currentFood._custom?'inline-flex':'none';
  const hasCount=!!currentFood.countable;
  const modeTabs=g('modeTabs'); if(modeTabs) modeTabs.style.display=hasCount?'flex':'none';

  const portionInput=g('portionInput'), unitSel=g('unitSelector'), countInput=g('countInput'), countUnit=g('countUnit');

  // Restore last portion if any
  const mem=portionMemory[key];
  portionInput.value=mem?.amount||currentFood.servingSize;
  buildUnitOptions();
  if(mem?.unit){const opts=[...unitSel.options].map(o=>o.value);if(opts.includes(mem.unit))unitSel.value=mem.unit;}
  if(hasCount){countInput.value=1;if(countUnit)countUnit.textContent=currentFood.countable.unitName+'(s)';}

  const pBadge=g('portionMemoryBadge');
  if(pBadge) pBadge.style.display=mem?'inline-flex':'none';

  const presets=g('presetBtns'); if(presets) presets.style.display=hasCount?'none':'flex';
  const quickAmts=g('quickAmountBtns'); if(quickAmts) quickAmts.style.display=hasCount?'none':'flex';

  activeMode=hasCount?'count':'weight';
  g('tabWeight')?.classList.toggle('active',activeMode==='weight');
  g('tabCount')?.classList.toggle('active',activeMode==='count');
  g('weightPanel').style.display=activeMode==='weight'?'flex':'none';
  g('countPanel').style.display=activeMode==='count'?'flex':'none';

  portionCard.classList.add('visible');
  setTimeout(()=>(activeMode==='count'?countInput:portionInput)?.select(),40);
  updateMacros();
}
window.selectFood=selectFood;

function buildUnitOptions() {
  const isLiq=currentFood.unit==='ml';
  const opts=isLiq?[['ml','ml'],['l','L'],['fl_oz','fl oz'],['cup','cup'],['tbsp','tbsp'],['tsp','tsp']]
    :[['g','g'],['kg','kg'],['oz','oz'],['lb','lb'],['cup','cup'],['tbsp','tbsp'],['tsp','tsp']];
  const sel=g('unitSelector');
  sel.innerHTML=opts.map(([v,l])=>`<option value="${v}">${l}</option>`).join('');
  sel.value=isLiq?'ml':'g';
}

/* ── Mode tabs ─────────────────────────────────────── */
g('tabWeight')?.addEventListener('click',()=>switchMode('weight'));
g('tabCount')?.addEventListener('click',()=>switchMode('count'));
function switchMode(mode) {
  activeMode=mode;
  g('tabWeight')?.classList.toggle('active',mode==='weight');
  g('tabCount')?.classList.toggle('active',mode==='count');
  g('weightPanel').style.display=mode==='weight'?'flex':'none';
  g('countPanel').style.display=mode==='count'?'flex':'none';
  const pr=g('presetBtns'); if(pr) pr.style.display=mode==='weight'?'flex':'none';
  updateMacros();
  setTimeout(()=>(mode==='count'?g('countInput'):g('portionInput'))?.select(),20);
}

/* ── Presets ───────────────────────────────────────── */
g('presetBtns')?.addEventListener('click',e=>{
  const btn=e.target.closest('[data-preset]');
  if(!btn||!currentFood||activeMode!=='weight') return;
  g('portionInput').value=btn.dataset.preset;
  const sel=g('unitSelector');
  if(sel&&!['ml'].includes(currentFood.unit)) sel.value='g';
  updateMacros(); g('portionInput')?.focus();
});

/* ── Quick amounts ─────────────────────────────────── */
const QUICK_AMTS=[{l:'½ cup',g:120},{l:'1 cup',g:240},{l:'1 tbsp',g:15},{l:'2 tbsp',g:30},
  {l:'1 tsp',g:5},{l:'1 oz',g:28},{l:'½ serv',div:2},{l:'×2',mul:2}];
(function(){
  const c=g('quickAmountBtns'); if(!c) return;
  c.innerHTML=QUICK_AMTS.map(q=>`<button class="quick-amt-btn" data-qa='${JSON.stringify(q)}'>${q.l}</button>`).join('');
})();
g('quickAmountBtns')?.addEventListener('click',e=>{
  const btn=e.target.closest('[data-qa]'); if(!btn||!currentFood||activeMode!=='weight') return;
  const q=JSON.parse(btn.dataset.qa); const pi=g('portionInput');
  if(q.g){pi.value=q.g;g('unitSelector').value='g';}
  else if(q.div) pi.value=+(parseFloat(pi.value)/q.div).toFixed(1);
  else if(q.mul) pi.value=+(parseFloat(pi.value)*q.mul).toFixed(1);
  updateMacros();
});

/* ── Portion memory ────────────────────────────────── */
g('clearPortionMemoryBtn')?.addEventListener('click',()=>{
  if(currentFood?._key){delete portionMemory[currentFood._key];_save('nutrilog_portion_memory',portionMemory);const b=g('portionMemoryBadge');if(b)b.style.display='none';showToast('Portion memory cleared');}
});

/* ══════════════════════════════════════════════════════
   MACRO CALCULATION
══════════════════════════════════════════════════════ */
const CONV={g:1,kg:1000,oz:28.35,lb:453.6,ml:1,l:1000,fl_oz:29.57,cup:240,tbsp:15,tsp:5};
function getGrams() {
  if(activeMode==='count'){const n=parseFloat(g('countInput').value)||0;return n*(currentFood.countable?.gramsEach??currentFood.servingSize);}
  return (parseFloat(g('portionInput').value)||0)*(CONV[g('unitSelector').value]??1);
}
function computeMacros(grams) {
  const f=grams/currentFood.base;
  return{cal:Math.round(currentFood.cal*f),prot:+(currentFood.prot*f).toFixed(1),carb:+(currentFood.carb*f).toFixed(1),fat:+(currentFood.fat*f).toFixed(1),grams:Math.round(grams)};
}
function updateMacros() {
  if(!currentFood) return;
  const m=computeMacros(getGrams());
  setText('mcal',m.cal); setText('mprot',m.prot+'g'); setText('mcarb',m.carb+'g'); setText('mfat',m.fat+'g');
  currentFood._pending=m;
  const pct=Math.min(100,(m.cal/goals.cal)*100);
  const bar=g('pendingCalBar'); if(bar){bar.style.width=pct+'%';bar.className='pending-cal-bar'+(pct>90?' danger':'');}
  const cp=Math.round(m.prot*4),cc=Math.round(m.carb*4),cf=Math.round(m.fat*9);
  setText('detailCalProt',cp+' kcal'); setText('detailCalCarb',cc+' kcal'); setText('detailCalFat',cf+' kcal');
  setText('detailProtPct',goals.prot>0?Math.round((m.prot/goals.prot)*100)+'%':'');
  setText('detailCarbPct',goals.carb>0?Math.round((m.carb/goals.carb)*100)+'%':'');
  setText('detailFatPct', goals.fat >0?Math.round((m.fat /goals.fat )*100)+'%':'');
  const warn=g('exceedWarn');
  if(warn){const over=dailyTotals.cal+m.cal-(goals.cal+caloriesBurned);warn.style.display=over>0?'flex':'none';if(over>0)warn.textContent=`⚠ +${m.cal} kcal = ${dailyTotals.cal+m.cal} total (${over} over goal)`;}
}
g('portionInput')?.addEventListener('input',updateMacros);
g('unitSelector')?.addEventListener('change',updateMacros);
g('countInput')?.addEventListener('input',updateMacros);

/* ── Meal selector ─────────────────────────────────── */
function renderMealSelector() {
  const sel=g('mealSelector'); if(!sel) return;
  sel.innerHTML=mealGroups.map(m=>`<option value="${escAttr(m)}"${m===currentMeal?' selected':''}>${escHtml(m)}</option>`).join('');
}
g('mealSelector')?.addEventListener('change',function(){currentMeal=this.value;localStorage.setItem('nutrilog_curmeal',currentMeal);});

/* ══════════════════════════════════════════════════════
   LOG FOOD
══════════════════════════════════════════════════════ */
g('addLogBtn')?.addEventListener('click',logFood);
portionCard?.addEventListener('keydown',e=>{if(e.key==='Enter'&&e.target.tagName!=='BUTTON'&&e.target.tagName!=='SELECT')(window.logFood||logFood)();});

function logFood() {
  if(!currentFood?._pending){showToast('Select a food first','warn');return;}
  if(currentFood._pending.grams<=0){showToast('Enter a portion amount','warn');return;}
  const{cal,prot,carb,fat,grams}=currentFood._pending;
  let portionLabel;
  if(activeMode==='count'){const n=parseFloat(g('countInput').value)||1;const un=currentFood.countable?.unitName||'piece';portionLabel=`${n} ${un}${n!==1?'s':''} (~${grams}g)`;}
  else{portionLabel=`${g('portionInput').value}${g('unitSelector').value} (~${grams}g)`;}

  const entry={id:Date.now(),key:currentFood._key,name:currentFood.name,portion:portionLabel,meal:currentMeal,cal,prot,carb,fat,
    time:new Date().toLocaleTimeString('en-US',{hour:'2-digit',minute:'2-digit'}),custom:!!currentFood._custom,note:''};

  pushUndo({type:'add',snapshot:JSON.stringify(logEntries)});
  logEntries.push(entry); persistLog();
  addToRecents(currentFood._key,portionLabel,cal);

  // Save portion memory
  if(activeMode==='weight'){portionMemory[currentFood._key]={amount:g('portionInput').value,unit:g('unitSelector').value};_save('nutrilog_portion_memory',portionMemory);}

  dailyTotals.cal+=cal;
  dailyTotals.prot=+(dailyTotals.prot+prot).toFixed(1);
  dailyTotals.carb=+(dailyTotals.carb+carb).toFixed(1);
  dailyTotals.fat=+(dailyTotals.fat+fat).toFixed(1);
  renderLog(); updateTotals();
  showToast(`${currentFood.name} logged · +${cal} kcal`,'success',true);
  portionCard.classList.remove('visible'); foodInput.value=''; currentFood=null;
}

function deleteEntry(id) {
  const idx=logEntries.findIndex(e=>e.id===id); if(idx===-1) return;
  pushUndo({type:'delete',idx,entry:{...logEntries[idx]}});
  const[rem]=logEntries.splice(idx,1);
  dailyTotals.cal=Math.max(0,+(dailyTotals.cal-rem.cal).toFixed(1));
  dailyTotals.prot=Math.max(0,+(dailyTotals.prot-rem.prot).toFixed(1));
  dailyTotals.carb=Math.max(0,+(dailyTotals.carb-rem.carb).toFixed(1));
  dailyTotals.fat=Math.max(0,+(dailyTotals.fat-rem.fat).toFixed(1));
  persistLog(); renderLog(); updateTotals(); showToast('Removed · Ctrl+Z to undo','warn');
}
window.deleteEntry=deleteEntry;

function duplicateEntry(id) {
  const orig=logEntries.find(e=>e.id===id); if(!orig) return;
  const copy={...orig,id:Date.now(),time:new Date().toLocaleTimeString('en-US',{hour:'2-digit',minute:'2-digit'})};
  pushUndo({type:'add',snapshot:JSON.stringify(logEntries)});
  logEntries.push(copy);
  dailyTotals.cal+=copy.cal; dailyTotals.prot=+(dailyTotals.prot+copy.prot).toFixed(1);
  dailyTotals.carb=+(dailyTotals.carb+copy.carb).toFixed(1); dailyTotals.fat=+(dailyTotals.fat+copy.fat).toFixed(1);
  persistLog(); renderLog(); updateTotals(); showToast(`${copy.name} duplicated ✓`);
}
window.duplicateEntry=duplicateEntry;

function editEntryPortion(id) {
  const entry=logEntries.find(e=>e.id===id); if(!entry) return;
  const db=getAllFoods(); const key=entry.key||Object.keys(db).find(k=>db[k].name===entry.name);
  if(!key){showToast('Food not in DB','warn');return;}
  deleteEntry(id); setTimeout(()=>selectFood(key),80);
}
window.editEntryPortion=editEntryPortion;

function editEntryNote(id) {
  const entry=logEntries.find(e=>e.id===id); if(!entry) return;
  const modal=g('noteModal'); const input=g('noteInput');
  if(!modal||!input) return;
  input.value=entry.note||''; modal.dataset.entryId=id;
  modal.classList.add('open'); setTimeout(()=>input.focus(),80);
}
window.editEntryNote=editEntryNote;

g('saveNoteBtn')?.addEventListener('click',()=>{
  const modal=g('noteModal'); const id=parseInt(modal?.dataset.entryId);
  const note=g('noteInput')?.value.trim()||'';
  const entry=logEntries.find(e=>e.id===id);
  if(entry){entry.note=note;persistLog();renderLog();}
  modal?.classList.remove('open'); showToast('Note saved ✓');
});
g('cancelNoteBtn')?.addEventListener('click',()=>g('noteModal')?.classList.remove('open'));

function changeMealForEntry(id,meal) {
  const entry=logEntries.find(e=>e.id===id); if(!entry) return;
  entry.meal=meal; persistLog(); renderLog();
}
window.changeMealForEntry=changeMealForEntry;

/* ── Undo ──────────────────────────────────────────── */
function pushUndo(action) { undoStack.push(action); if(undoStack.length>30) undoStack.shift(); }
function undoLast() {
  const action=undoStack.pop(); if(!action){showToast('Nothing to undo','warn');return;}
  if(action.type==='delete') logEntries.splice(action.idx,0,action.entry);
  else logEntries=JSON.parse(action.snapshot);
  persistLog(); recomputeTotals(); renderLog(); updateTotals(); showToast('Undo ✓');
}
window.undoLast=undoLast;

/* ── Global keyboard shortcuts ─────────────────────── */
document.addEventListener('keydown',e=>{
  const inInput=['INPUT','TEXTAREA','SELECT'].includes(document.activeElement?.tagName);
  if((e.ctrlKey||e.metaKey)&&e.key==='z'){e.preventDefault();undoLast();return;}
  if((e.ctrlKey||e.metaKey)&&e.key==='k'){e.preventDefault();foodInput?.focus();foodInput?.select();return;}
  if((e.ctrlKey||e.metaKey)&&e.key==='Enter'&&currentFood?._pending){e.preventDefault();(window.logFood||logFood)();return;}
  if(!inInput){
    if(e.key==='/'||e.key==='f'){e.preventDefault();foodInput?.focus();return;}
    if(e.key==='h'){e.preventDefault();openHistoryDrawer();return;}
    if(e.key==='m'){e.preventDefault();openMemoryDrawer();return;}
    if(e.key==='g'){e.preventDefault();openGoalsModal();return;}
    if(e.key==='t'){e.preventDefault();openTemplatesDrawer();return;}
    if(e.key==='w'){e.preventDefault();g('logWeightBtn')?.click();return;}
    if(e.key==='e'){e.preventDefault();g('burnCalcBtn')?.click();return;}
    if(e.key==='?'||e.key==='F1'){e.preventDefault();g('shortcutsModal')?.classList.add('open');return;}
  }
  if(e.key==='Escape'){
    closeMemoryDrawer(); closeHistoryDrawer(); closeTemplatesDrawer(); closeCompareDrawer();
    ['addFoodModal','goalsModal','shortcutsModal','noteModal','burnModal','burnCalcModal','weightModal'].forEach(id=>g(id)?.classList.remove('open'));
    suggestBox?.classList.remove('open');
  }
});

/* ══════════════════════════════════════════════════════
   RENDER LOG
══════════════════════════════════════════════════════ */
let logFilter='';
g('logSearchInput')?.addEventListener('input',function(){logFilter=this.value.toLowerCase();renderLog();});

function toggleMealCollapse(meal){
  if(collapsedMeals.has(meal))collapsedMeals.delete(meal);else collapsedMeals.add(meal);
  _save('nutrilog_collapsed',[...collapsedMeals]); renderLog();
}
window.toggleMealCollapse=toggleMealCollapse;

function renderLog() {
  const logEntEl=g('logEntries'); if(!logEntEl) return;
  updateMobLogBadge?.();
  const filtered=logFilter?logEntries.filter(e=>e.name.toLowerCase().includes(logFilter)||e.meal?.toLowerCase().includes(logFilter)):logEntries;
  if(!filtered.length&&!logEntries.length){
    logEntEl.innerHTML=`<div class="log-empty"><div class="log-empty-icon">🍽</div><div class="log-empty-title">Nothing logged yet</div><div class="log-empty-sub">Press <kbd>/</kbd> or <kbd>Ctrl+K</kbd> to search</div></div>`;return;
  }
  if(!filtered.length){logEntEl.innerHTML=`<div class="log-empty"><div class="log-empty-title">No entries match "${escHtml(logFilter)}"</div></div>`;return;}

  const groups=Object.fromEntries([...mealGroups,'Other'].map(m=>[m,[]]));
  filtered.forEach(e=>{const g2=mealGroups.includes(e.meal)?e.meal:'Other';groups[g2].push(e);});

  let html='';
  for(const meal of[...mealGroups,'Other']){
    const entries=groups[meal]; if(!entries.length) continue;
    const mc=entries.reduce((s,e)=>s+e.cal,0);
    const mp=+entries.reduce((s,e)=>s+e.prot,0).toFixed(1);
    const mcb=+entries.reduce((s,e)=>s+e.carb,0).toFixed(1);
    const mf=+entries.reduce((s,e)=>s+e.fat,0).toFixed(1);
    const isCol=collapsedMeals.has(meal);
    html+=`<div class="meal-group">
      <div class="meal-group-header" onclick="toggleMealCollapse('${escAttr(meal)}')">
        <div class="meal-header-left">
          <span class="meal-chevron">${isCol?'▶':'▼'}</span>
          <span class="meal-name">${escHtml(meal)}</span>
          <span class="meal-count">${entries.length}</span>
        </div>
        <div class="meal-totals">
          <span class="mt-cal">${mc} kcal</span>
          <span class="mt-sep">·</span>
          <span class="mt-prot">${mp}g P</span>
          <span class="mt-carb">${mcb}g C</span>
          <span class="mt-fat">${mf}g F</span>
        </div>
      </div>`;
    if(!isCol){
      entries.forEach(e=>{
        html+=`<div class="log-entry" data-id="${e.id}" draggable="true"
            ondragstart="dragStart(event,${e.id})" ondragover="dragOver(event)"
            ondrop="dragDrop(event,${e.id})" ondragend="dragEnd()">
          <div class="drag-handle">⠿</div>
          <div class="entry-body">
            <div class="entry-head">
              <div class="entry-info">
                <div class="entry-name">${escHtml(e.name)}${e.custom?'<span class="custom-badge">custom</span>':''}</div>
                <div class="entry-meta">${escHtml(e.portion)} · ${e.time}${e.note?`<span class="entry-note" onclick="editEntryNote(${e.id})"> 📝 ${escHtml(e.note)}</span>`:''}</div>
              </div>
              <div class="entry-actions">
                <button class="ea-btn" onclick="duplicateEntry(${e.id})" title="Log again">⎘</button>
                <button class="ea-btn" onclick="editEntryPortion(${e.id})" title="Edit portion">✏</button>
                <button class="ea-btn" onclick="editEntryNote(${e.id})" title="Note">📝</button>
                <select class="entry-meal-sel" onchange="changeMealForEntry(${e.id},this.value)" title="Move to meal">
                  ${mealGroups.map(m=>`<option value="${escAttr(m)}"${m===e.meal?' selected':''}>${escHtml(m)}</option>`).join('')}
                </select>
                <button class="ea-btn ea-del" onclick="deleteEntry(${e.id})" title="Delete">✕</button>
              </div>
            </div>
            <div class="entry-macros">
              <span class="em cal">${e.cal} kcal</span>
              <span class="em prot">${e.prot}g P</span>
              <span class="em carb">${e.carb}g C</span>
              <span class="em fat">${e.fat}g F</span>
            </div>
          </div>
        </div>`;
      });
    }
    html+='</div>';
  }
  logEntEl.innerHTML=html;
}

/* ── Drag & drop ───────────────────────────────────── */
function dragStart(e,id){dragSrcIdx=logEntries.findIndex(en=>en.id===id);e.target.closest('.log-entry')?.classList.add('dragging');e.dataTransfer.effectAllowed='move';}
function dragOver(e){e.preventDefault();e.dataTransfer.dropEffect='move';}
function dragDrop(e,id){e.preventDefault();const ti=logEntries.findIndex(en=>en.id===id);if(dragSrcIdx===null||dragSrcIdx===ti)return;const[mv]=logEntries.splice(dragSrcIdx,1);logEntries.splice(ti,0,mv);persistLog();renderLog();}
function dragEnd(){dragSrcIdx=null;document.querySelectorAll('.log-entry.dragging').forEach(el=>el.classList.remove('dragging'));}
window.dragStart=dragStart;window.dragOver=dragOver;window.dragDrop=dragDrop;window.dragEnd=dragEnd;

/* ══════════════════════════════════════════════════════
   TOTALS
══════════════════════════════════════════════════════ */
function updateTotals() {
  const net     = dailyTotals.cal - caloriesBurned;
  const netGoal = goals.cal + caloriesBurned;
  const rem     = netGoal - net;

  // ── Calorie ring ───────────────────────────────────
  setText('calRingNum', Math.round(dailyTotals.cal));
  setText('totalCal',   Math.round(dailyTotals.cal));  // hidden compat
  const ringEl = g('calRingFill');
  if (ringEl) {
    const circ   = 2 * Math.PI * 39;
    const pct    = Math.min(1, net / netGoal);
    const offset = circ - (pct * circ);
    ringEl.style.strokeDasharray  = circ;
    ringEl.style.strokeDashoffset = offset;
    ringEl.classList.toggle('over', net > netGoal);
  }
  setText('criGoal',  `${netGoal} kcal`);
  setText('criEaten', `${Math.round(dailyTotals.cal)} kcal`);
  setText('goalProtLbl', goals.prot + 'g');
  setText('goalCarbLbl', goals.carb + 'g');
  setText('goalFatLbl',  goals.fat  + 'g');

  // ── Remaining ──────────────────────────────────────
  const remEl = g('caloriesRemaining');
  if (remEl) {
    remEl.textContent = rem >= 0
      ? `${Math.round(rem)} kcal remaining`
      : `${Math.abs(Math.round(rem))} kcal over`;
    remEl.className = 'cal-remaining' + (rem < 0 ? ' over' : '');
  }
  const remLabel = g('criRemLabel');
  if (remLabel) remLabel.textContent = rem < 0 ? 'Over by' : 'Remaining';

  // ── Exercise pill ─────────────────────────────────
  const pill = g('exercisePill');
  const burnRow = g('criBurnedRow');
  if (caloriesBurned > 0) {
    if (pill) { pill.style.display = 'inline-flex'; setText('burnedPillText', `−${caloriesBurned} kcal burned`); }
    if (burnRow) { burnRow.style.display = 'flex'; setText('criBurned', `${caloriesBurned} kcal`); }
  } else {
    if (pill) pill.style.display = 'none';
    if (burnRow) burnRow.style.display = 'none';
  }

  // ── Macro mini bars ────────────────────────────────
  setText('totalProt', dailyTotals.prot.toFixed(1) + 'g');
  setText('totalCarb', dailyTotals.carb.toFixed(1) + 'g');
  setText('totalFat',  dailyTotals.fat.toFixed(1)  + 'g');
  const protPct = goals.prot > 0 ? Math.min(100, (dailyTotals.prot / goals.prot) * 100) : 0;
  const carbPct = goals.carb > 0 ? Math.min(100, (dailyTotals.carb / goals.carb) * 100) : 0;
  const fatPct  = goals.fat  > 0 ? Math.min(100, (dailyTotals.fat  / goals.fat ) * 100) : 0;
  setW('mmbProt', protPct); setW('mmbCarb', carbPct); setW('mmbFat', fatPct);

  // ── Macro proportion bar ───────────────────────────
  const calTotal = dailyTotals.prot*4 + dailyTotals.carb*4 + dailyTotals.fat*9;
  if (calTotal > 0) {
    setW('barProt', (dailyTotals.prot*4/calTotal)*100);
    setW('barCarb', (dailyTotals.carb*4/calTotal)*100);
    setW('barFat',  (dailyTotals.fat*9/calTotal)*100);
  } else { setW('barProt',0); setW('barCarb',0); setW('barFat',0); }

  updateMotivationalMsg();
  updateWeightDisplay();
}
function _goalBar(barId,current,goal,pctId){
  const el=g(barId); if(!el) return;
  const pct=goal>0?Math.min(100,(current/goal)*100):0;
  el.style.width=pct+'%';
  el.className='goal-fill'+(pct>=100?' reached':pct>=85?' near':'');
  const pe=g(pctId); if(pe) pe.textContent=goal>0?Math.round((current/goal)*100)+'%':'';
}

/* ── Macro donut ───────────────────────────────────── */
function renderMacroPie() {
  const canvas=g('macroPie'); if(!canvas) return;
  const ctx=canvas.getContext('2d'),{prot,carb,fat}=dailyTotals;
  const cp=prot*4,cc=carb*4,cf=fat*9,total=cp+cc+cf;
  ctx.clearRect(0,0,80,80);
  if(!total){ctx.fillStyle='rgba(255,255,255,.06)';ctx.beginPath();ctx.arc(40,40,32,0,Math.PI*2);ctx.fill();}
  else{
    const colors=['#4ecdc4','#f7b731','#a29bfe'];
    let angle=-Math.PI/2;
    [cp,cc,cf].forEach((v,i)=>{const sl=(v/total)*Math.PI*2;ctx.beginPath();ctx.moveTo(40,40);ctx.arc(40,40,32,angle,angle+sl);ctx.closePath();ctx.fillStyle=colors[i];ctx.fill();angle+=sl;});
  }
  ctx.beginPath();ctx.arc(40,40,18,0,Math.PI*2);ctx.fillStyle='var(--bg2)';ctx.fill();
  ctx.fillStyle='rgba(232,234,240,.8)';ctx.font='bold 10px DM Mono,monospace';ctx.textAlign='center';ctx.textBaseline='middle';
  ctx.fillText(Math.round(dailyTotals.cal),40,40);
}

/* ── Motivation message ────────────────────────────── */
function updateMotivationalMsg() {
  const el=g('motivationMsg'); if(!el) return;
  const pct=goals.cal>0?(dailyTotals.cal/goals.cal)*100:0,n=logEntries.length;
  let msg='';
  if(!n) msg='👋 Log your first meal!';
  else if(pct<25) msg='🌅 Good start — keep logging!';
  else if(pct<50) msg='💪 Quarter way there.';
  else if(pct<75) msg='🔥 More than halfway!';
  else if(pct<95) msg='✅ Almost at goal!';
  else if(pct<110) msg='🎯 Goal reached!';
  else msg='😅 Over goal today.';
  if(streakData.count>=7) msg+=` 🔥${streakData.count}d streak!`;
  el.textContent=msg;
}

/* ══════════════════════════════════════════════════════
   WATER TRACKER
══════════════════════════════════════════════════════ */
function updateWaterUI() {
  const pct = Math.min(100, (waterMl / waterGoal) * 100);

  // Wave animation
  const bg = g('waterWaveBg');
  if (bg) bg.style.height = pct + '%';
  const w1 = g('waterWave1'), w2 = g('waterWave2');
  const waveBottom = pct + '%';
  if (w1) w1.style.bottom = waveBottom;
  if (w2) w2.style.bottom = waveBottom;
  const pt = g('waterPctText');
  if (pt) pt.textContent = pct >= 5 ? Math.round(pct) + '%' : '';

  const txt = g('waterText');
  if (txt) txt.textContent = `${(waterMl/1000).toFixed(1).replace(/\.0$/,'')}L / ${(waterGoal/1000).toFixed(1).replace(/\.0$/,'')}L`;

  const filled = Math.floor(waterMl / 250);
  const glasses = g('waterGlasses');
  if (glasses) glasses.innerHTML = Array.from({length:10}, (_,i) =>
    `<button class="water-glass${i < filled ? ' full' : ''}" onclick="addWaterGlass(${i},${filled})" title="${i < filled ? 'Remove 250ml' : 'Add 250ml'}">💧</button>`
  ).join('');
}

function addWaterGlass(idx, filled) {
  const ml = idx < filled ? -250 : 250;
  (window.addWater||addWater)(ml);
  // Animate the glass
  const glasses = g('waterGlasses')?.querySelectorAll('.water-glass');
  if (glasses && glasses[idx]) {
    glasses[idx].classList.add('just-added');
    setTimeout(() => glasses[idx]?.classList.remove('just-added'), 500);
  }
}
window.addWaterGlass = addWaterGlass;
function addWater(ml){
  waterMl=Math.max(0,waterMl+ml); localStorage.setItem('nutrilog_water_today',waterMl); updateWaterUI();
  if(ml>0&&waterMl>=waterGoal&&waterMl-ml<waterGoal) showToast('💧 Water goal reached! 🎉');
  else if(ml>0) showToast(`+${ml}ml · ${(waterMl/1000).toFixed(1)}L today`);
}
window.addWater=addWater;
g('waterAdd250')?.addEventListener('click',()=>addWater(250));
g('waterAdd500')?.addEventListener('click',()=>addWater(500));
g('waterAdd750')?.addEventListener('click',()=>addWater(750));
g('waterCustom')?.addEventListener('click',()=>{const a=parseInt(prompt('Add water (ml):','330'));if(a>0)addWater(a);});

/* ══════════════════════════════════════════════════════
   CALORIES BURNED
══════════════════════════════════════════════════════ */
g('burnBtn')?.addEventListener('click',()=>{setVal('burnInput','');g('burnModal')?.classList.add('open');setTimeout(()=>g('burnInput')?.focus(),80);});
g('saveBurnBtn')?.addEventListener('click',()=>{
  const v=parseInt(g('burnInput')?.value)||0;
  if(v<0){showToast('Enter a positive number','warn');return;}
  caloriesBurned=v; localStorage.setItem('nutrilog_burned_today',caloriesBurned);
  g('burnModal')?.classList.remove('open'); updateTotals(); showToast(`${v} kcal exercise logged ✓`);
});
g('cancelBurnBtn')?.addEventListener('click',()=>g('burnModal')?.classList.remove('open'));
/* ── Unlog burned calories ─────────────────────────── */
function unlogBurn() {
  caloriesBurned = 0;
  localStorage.setItem('nutrilog_burned_today', 0);
  updateTotals();
  showToast('Exercise calories removed');
}
window.unlogBurn = unlogBurn;



/* ── Activity calc ─────────────────────────────────── */
const ACTIVITIES=[
  {n:'Walking (slow)',m:2.5},{n:'Walking (brisk)',m:3.8},{n:'Running (5km/h)',m:8.3},{n:'Running (10km/h)',m:11.5},
  {n:'Cycling (leisure)',m:4.0},{n:'Cycling (vigorous)',m:8.0},{n:'Swimming',m:7.0},{n:'Weight Training',m:4.0},
  {n:'HIIT',m:10.0},{n:'Yoga',m:2.5},{n:'Jump Rope',m:11.0},{n:'Badminton',m:5.5},
  {n:'Cricket',m:4.8},{n:'Football',m:7.0},{n:'Basketball',m:6.5},{n:'Hiking',m:6.0},
  {n:'Dancing',m:5.0},{n:'Stair climbing',m:8.0},{n:'Stretching',m:2.5},
];
(function(){const s=g('activitySelect');if(!s)return;s.innerHTML=ACTIVITIES.map(a=>`<option value="${a.m}">${a.n}</option>`).join('');})();
function calcActivityBurn(){
  const met=parseFloat(g('activitySelect')?.value)||3.5;const mins=parseFloat(g('activityMins')?.value)||30;const wt=parseFloat(g('activityWeight')?.value)||70;
  const kcal=Math.round((met*3.5*wt/200)*mins);const el=g('activityResult');
  if(el){el.textContent=`≈ ${kcal} kcal burned`;el.style.display='block';} return kcal;
}
window.calcActivityBurn=calcActivityBurn;
g('calcActivityBtn')?.addEventListener('click',calcActivityBurn);
g('logActivityBurnBtn')?.addEventListener('click',()=>{const kcal=calcActivityBurn();caloriesBurned+=kcal;localStorage.setItem('nutrilog_burned_today',caloriesBurned);updateTotals();g('burnCalcModal')?.classList.remove('open');showToast(`${kcal} kcal burned logged ✓`);});
g('burnCalcBtn')?.addEventListener('click',()=>{g('burnCalcModal')?.classList.add('open');});
g('closeBurnCalcModal')?.addEventListener('click',()=>g('burnCalcModal')?.classList.remove('open'));
g('burnCalcModal')?.addEventListener('click',e=>{if(e.target===e.currentTarget)e.currentTarget.classList.remove('open');});

/* ══════════════════════════════════════════════════════
   HISTORY DRAWER — with edit/delete of past entries
══════════════════════════════════════════════════════ */
g('historyBtn')?.addEventListener('click',openHistoryDrawer);
g('closeHistory')?.addEventListener('click',closeHistoryDrawer);
g('historyOverlay')?.addEventListener('click',closeHistoryDrawer);

function openHistoryDrawer(){renderHistoryDrawer();g('historyDrawer')?.classList.add('open');g('historyOverlay')?.classList.add('open');}
function closeHistoryDrawer(){g('historyDrawer')?.classList.remove('open');g('historyOverlay')?.classList.remove('open');}

function renderHistoryDrawer() {
  renderCalorieHeatmap();
  const list=g('historyList'); if(!list) return;
  const dates=Object.keys(history).sort().reverse();
  if(!dates.length){list.innerHTML=`<div class="log-empty" style="padding:28px 16px">No history yet — come back tomorrow!</div>`;return;}

  const allDays=dates.map(d=>{const e=history[d];return{cal:e.reduce((s,x)=>s+x.cal,0),prot:e.reduce((s,x)=>s+x.prot,0)};});
  const avgCal=Math.round(allDays.reduce((s,d)=>s+d.cal,0)/allDays.length);
  const avgProt=(allDays.reduce((s,d)=>s+d.prot,0)/allDays.length).toFixed(1);

  list.innerHTML=`<div class="hist-stats">
    <div class="hist-stat"><span class="hs-val">${avgCal}</span><span class="hs-lbl">avg kcal</span></div>
    <div class="hist-stat"><span class="hs-val">${avgProt}g</span><span class="hs-lbl">avg protein</span></div>
    <div class="hist-stat"><span class="hs-val">${dates.length}</span><span class="hs-lbl">days logged</span></div>
  </div>`+dates.map(dateStr=>{
    const entries=history[dateStr];
    const tc=entries.reduce((s,e)=>s+e.cal,0);
    const tp=+entries.reduce((s,e)=>s+e.prot,0).toFixed(1);
    const tcb=+entries.reduce((s,e)=>s+e.carb,0).toFixed(1);
    const tf=+entries.reduce((s,e)=>s+e.fat,0).toFixed(1);
    const pct=Math.min(100,(tc/goals.cal)*100);
    const dt=new Date(dateStr+'T12:00:00');
    const label=dt.toLocaleDateString('en-US',{weekday:'short',month:'short',day:'numeric'});
    return `<div class="hist-day" id="hday_${dateStr}">
      <div class="hist-day-header" onclick="toggleHistDay('${dateStr}')">
        <div class="hist-day-left">
          <span class="hist-chevron" id="hchev_${dateStr}">▶</span>
          <div>
            <div class="hist-date">${label}</div>
            <div class="hist-summary">${entries.length} items · ${tc} kcal</div>
          </div>
        </div>
        <div class="hist-right">
          <div class="hist-bar-mini"><div style="width:${pct}%;background:var(--cal)"></div></div>
          <div class="hist-day-actions">
            <button class="hist-action-btn" onclick="event.stopPropagation();loadHistoryDay('${dateStr}')" title="Load this day into today's log">📋 Load</button>
            <button class="hist-action-btn hist-del-btn" onclick="event.stopPropagation();deleteHistoryDay('${dateStr}')" title="Delete this day">🗑</button>
          </div>
        </div>
      </div>
      <div class="hist-entries" id="hentries_${dateStr}" style="display:none">
        <div class="hist-macros-summary">
          <span class="em prot" style="font-size:.65rem">${tp}g P</span>
          <span class="em carb" style="font-size:.65rem">${tcb}g C</span>
          <span class="em fat"  style="font-size:.65rem">${tf}g F</span>
        </div>
        ${entries.map((e,i)=>`
          <div class="hist-entry" id="hent_${dateStr}_${i}">
            <div class="hist-entry-info">
              <span class="hist-food">${escHtml(e.name)}</span>
              <span class="hist-portion">${escHtml(e.portion||'')} · <span class="em cal" style="font-size:.65rem;padding:1px 4px">${e.cal} kcal</span></span>
            </div>
            <div class="hist-entry-actions">
              <button class="hist-entry-btn" onclick="useHistoryEntry('${dateStr}',${i})" title="Use this food now">Use</button>
              <button class="hist-entry-btn hist-entry-del" onclick="deleteHistoryEntry('${dateStr}',${i})" title="Remove this entry">✕</button>
            </div>
          </div>`).join('')}
      </div>
    </div>`;
  }).join('');
}

function toggleHistDay(dateStr) {
  const entries=g(`hentries_${dateStr}`),chev=g(`hchev_${dateStr}`);
  if(!entries) return;
  const open=entries.style.display!=='none';
  entries.style.display=open?'none':'block';
  if(chev) chev.textContent=open?'▶':'▼';
}
window.toggleHistDay=toggleHistDay;

function deleteHistoryDay(dateStr) {
  const entries=history[dateStr]; if(!entries) return;
  if(!confirm(`Delete all ${entries.length} entries from ${dateStr}?`)) return;
  delete history[dateStr]; _save('nutrilog_history',history);
  renderHistoryDrawer(); showToast('Day deleted','warn');
}
window.deleteHistoryDay=deleteHistoryDay;

function deleteHistoryEntry(dateStr,idx) {
  if(!history[dateStr]) return;
  history[dateStr].splice(idx,1);
  if(!history[dateStr].length) delete history[dateStr];
  _save('nutrilog_history',history); renderHistoryDrawer();
  showToast('Entry removed','warn');
}
window.deleteHistoryEntry=deleteHistoryEntry;

function loadHistoryDay(dateStr) {
  const entries=history[dateStr]; if(!entries?.length) return;
  if(logEntries.length&&!confirm(`Add ${entries.length} items from ${dateStr} to today's log?`)) return;
  pushUndo({type:'add',snapshot:JSON.stringify(logEntries)});
  const now=new Date().toLocaleTimeString('en-US',{hour:'2-digit',minute:'2-digit'});
  entries.forEach(e=>logEntries.push({...e,id:Date.now()+Math.random(),time:now}));
  persistLog(); recomputeTotals(); renderLog(); updateTotals();
  closeHistoryDrawer(); showToast(`${entries.length} items loaded from ${dateStr} ✓`);
}
window.loadHistoryDay=loadHistoryDay;

function useHistoryEntry(dateStr,idx) {
  const entry=history[dateStr]?.[idx]; if(!entry) return;
  const key=entry.key||Object.keys(getAllFoods()).find(k=>getAllFoods()[k].name===entry.name);
  if(!key){showToast('Food not in DB — try Custom Food','warn');return;}
  closeHistoryDrawer(); setTimeout(()=>selectFood(key),150);
}
window.useHistoryEntry=useHistoryEntry;

/* ── Calorie heatmap — fixed YYYY-MM-DD key parsing ── */
function renderCalorieHeatmap() {
  const container=g('calorieHeatmap'); if(!container) return;
  // Get last 56 days (8 weeks) in order
  const dates=[];
  for(let i=55;i>=0;i--){const d=new Date();d.setDate(d.getDate()-i);dates.push(toDateKey(d));}

  if(!Object.keys(history).length){container.innerHTML='<div class="heat-empty">No history yet</div>';return;}

  const cells=dates.map(d=>{
    if(!history[d]) return `<div class="heat-cell lv0" title="${d}: no data"></div>`;
    const cal=history[d].reduce((s,e)=>s+e.cal,0);
    const pct=goals.cal>0?(cal/goals.cal)*100:0;
    const lvl=pct<10?0:pct<40?1:pct<70?2:pct<100?3:4;
    return `<div class="heat-cell lv${lvl}" title="${d}: ${cal} kcal (${Math.round(pct)}% of goal)" onclick="jumpToHistDay('${d}')"></div>`;
  });

  container.innerHTML=`
    <div class="heat-label">Last 8 weeks · click a cell to expand that day</div>
    <div class="heat-grid">${cells.join('')}</div>
    <div class="heat-legend">
      <span>0%</span>
      ${[0,1,2,3,4].map(i=>`<div class="heat-cell lv${i}" style="cursor:default"></div>`).join('')}
      <span>100%+</span>
    </div>`;
}

function jumpToHistDay(dateStr){
  if(!history[dateStr]) return;
  const el=g(`hday_${dateStr}`); const entries=g(`hentries_${dateStr}`);
  if(el&&entries){entries.style.display='block';const chev=g(`hchev_${dateStr}`);if(chev)chev.textContent='▼';setTimeout(()=>el.scrollIntoView({behavior:'smooth',block:'start'}),100);}
}
window.jumpToHistDay=jumpToHistDay;

/* ══════════════════════════════════════════════════════
   GOALS MODAL + TDEE
══════════════════════════════════════════════════════ */
g('goalsBtn')?.addEventListener('click',openGoalsModal);
g('closeGoalsModal')?.addEventListener('click',()=>g('goalsModal')?.classList.remove('open'));
g('goalsModal')?.addEventListener('click',e=>{if(e.target===e.currentTarget)e.currentTarget.classList.remove('open');});
function openGoalsModal(){
  setVal('goalCalInput',goals.cal);setVal('goalProtInput',goals.prot);
  setVal('goalCarbInput',goals.carb);setVal('goalFatInput',goals.fat);
  setVal('goalWaterInput',waterGoal);
  g('goalsModal')?.classList.add('open');
}
g('saveGoalsBtn')?.addEventListener('click',()=>{
  goals.cal=Math.max(1,parseInt(g('goalCalInput').value)||2000);
  goals.prot=Math.max(1,parseInt(g('goalProtInput').value)||150);
  goals.carb=Math.max(1,parseInt(g('goalCarbInput').value)||250);
  goals.fat=Math.max(1,parseInt(g('goalFatInput').value)||65);
  waterGoal=Math.max(100,parseInt(g('goalWaterInput').value)||2500);
  _save('nutrilog_goals',goals); localStorage.setItem('nutrilog_watergoal',waterGoal);
  g('goalsModal')?.classList.remove('open'); updateTotals(); updateWaterUI();
  setText('criGoal', goals.cal + ' kcal');
  setText('goalProtLbl', goals.prot + 'g');
  setText('goalCarbLbl', goals.carb + 'g');
  setText('goalFatLbl',  goals.fat  + 'g');
  showToast('Goals saved ✓');
});
g('calcTDEEBtn')?.addEventListener('click',()=>{
  const age=parseInt(g('tdeeAge')?.value),wt=parseFloat(g('tdeeWeight')?.value),ht=parseFloat(g('tdeeHeight')?.value);
  const gender=g('tdeeGender')?.value,activ=parseFloat(g('tdeeActivity')?.value);
  if(!age||!wt||!ht){showToast('Fill all TDEE fields','warn');return;}
  const bmr=gender==='male'?10*wt+6.25*ht-5*age+5:10*wt+6.25*ht-5*age-161;
  const tdee=Math.round(bmr*activ);
  setVal('goalCalInput',tdee);setVal('goalProtInput',Math.round(wt*1.8));
  setVal('goalCarbInput',Math.round(tdee*0.40/4));setVal('goalFatInput',Math.round(tdee*0.30/9));
  setText('tdeResult',`TDEE: ${tdee} kcal (BMR: ${Math.round(bmr)})`);
  showToast(`TDEE: ${tdee} kcal — goals filled ✓`);
});

/* ══════════════════════════════════════════════════════
   ADD / EDIT CUSTOM FOOD
══════════════════════════════════════════════════════ */
function openAddFoodModal(prefill='',editKey=null) {
  suggestBox?.classList.remove('open');
  const modal=g('addFoodModal'); if(!modal) return;
  const isEdit=!!editKey;
  if(isEdit){
    const f=USER_DB[editKey]; if(!f) return;
    setVal('afName',f.name);setVal('afCategory',f.category||'Custom');setVal('afUnit',f.unit||'g');
    setVal('afBase',f.base||100);setVal('afCal',f.cal||0);setVal('afProt',f.prot||0);
    setVal('afCarb',f.carb||0);setVal('afFat',f.fat||0);setVal('afServing',f.servingSize||100);
    setVal('afServingLabel',f.servingLabel||'1 serving');
    const cb=g('afCountable'); if(cb) cb.checked=!!f.countable;
    if(f.countable){setVal('afUnitName',f.countable.unitName||'');setVal('afGramsEach',f.countable.gramsEach||'');}
    const cr=g('afCountRow'); if(cr) cr.style.display=f.countable?'grid':'none';
  } else {
    ['afCal','afProt','afCarb','afFat','afUnitName','afGramsEach'].forEach(id=>setVal(id,''));
    setVal('afName',prefill);setVal('afCategory','Custom');setVal('afUnit','g');
    setVal('afBase',100);setVal('afServing',100);setVal('afServingLabel','1 serving');
    const cb=g('afCountable'); if(cb) cb.checked=false;
    const cr=g('afCountRow'); if(cr) cr.style.display='none';
  }
  modal.dataset.editKey=editKey||'';
  const saveBtn=g('saveCustomFoodBtn'); if(saveBtn) saveBtn.textContent=isEdit?'Update Food':'Save Food';
  const titleEl=modal.querySelector('.modal-header h2'); if(titleEl) titleEl.textContent=isEdit?'✏ Edit Custom Food':'🧪 Add Custom Food';
  updateCalPreview(); modal.classList.add('open');
  setTimeout(()=>g('afName')?.focus(),80);
}
window.openAddFoodModal=openAddFoodModal;

function updateCalPreview() {
  const cal=parseFloat(g('afCal')?.value)||0,p=parseFloat(g('afProt')?.value)||0,c=parseFloat(g('afCarb')?.value)||0,f=parseFloat(g('afFat')?.value)||0;
  const sum=Math.round(p*4+c*4+f*9); const el=g('afCalPreview'); if(!el) return;
  if(!cal&&!sum){el.textContent='';return;}
  const diff=cal-sum;
  el.textContent=cal?`${cal} kcal entered · macros = ${sum} kcal${Math.abs(diff)>10?` (diff: ${diff>0?'+':''}${diff})`:'  ✓'}`:`Macros sum to ${sum} kcal`;
  el.className='cal-preview-hint'+(Math.abs(diff)>50?' mismatch':'');
}
['afCal','afProt','afCarb','afFat'].forEach(id=>g(id)?.addEventListener('input',updateCalPreview));
g('afCountable')?.addEventListener('change',function(){const cr=g('afCountRow');if(cr)cr.style.display=this.checked?'grid':'none';});
g('closeAddFoodModal')?.addEventListener('click',()=>g('addFoodModal')?.classList.remove('open'));
g('addFoodModal')?.addEventListener('click',e=>{if(e.target===e.currentTarget)e.currentTarget.classList.remove('open');});
g('saveCustomFoodBtn')?.addEventListener('click',saveCustomFood);

function saveCustomFood() {
  const modal=g('addFoodModal'); const editKey=modal?.dataset.editKey||null;
  const name=g('afName').value.trim(),category=g('afCategory').value.trim()||'Custom';
  const unit=g('afUnit').value,base=parseFloat(g('afBase').value)||100;
  const cal=parseFloat(g('afCal').value),prot=parseFloat(g('afProt').value)||0;
  const carb=parseFloat(g('afCarb').value)||0,fat=parseFloat(g('afFat').value)||0;
  const serving=parseFloat(g('afServing').value)||base,servingLabel=g('afServingLabel').value.trim()||'1 serving';
  const isC=g('afCountable').checked,unitName=g('afUnitName').value.trim(),gramsEach=parseFloat(g('afGramsEach').value);
  if(!name){showToast('Food name required','warn');return;}
  if(isNaN(cal)||cal<0){showToast('Enter valid calories','warn');return;}
  if(isC&&(!unitName||isNaN(gramsEach)||gramsEach<=0)){showToast('Fill unit name & grams per piece','warn');return;}
  const entry={name,category,unit,base,cal,prot,carb,fat,servingSize:serving,servingLabel,_custom:true};
  if(isC) entry.countable={unitName,gramsEach};
  const key=editKey||('custom__'+name.toLowerCase().replace(/[^a-z0-9]+/g,'_').replace(/_+$/,'')+(USER_DB[`custom__${name.toLowerCase().replace(/[^a-z0-9]+/g,'_').replace(/_+$/,'')}`]&&!editKey?'_'+Date.now():''));
  USER_DB[key]=entry; persistUserDB();
  modal?.classList.remove('open');
  showToast(editKey?`"${name}" updated ✓`:`"${name}" added ✓`);
  if(!editKey) selectFood(key); else renderMemoryDrawer();
  renderMemoryCount();
}

function deleteCustomFood(key) {
  if(!USER_DB[key]) return;
  const name=USER_DB[key].name;
  if(!confirm(`Delete "${name}"?`)) return;
  delete USER_DB[key]; persistUserDB();
  savedFoods=savedFoods.filter(k=>k!==key); persistMemory();
  renderMemoryDrawer(); renderMemoryCount(); showToast(`"${name}" deleted`,'warn');
}
window.deleteCustomFood=deleteCustomFood;
function editCustomFood(key){openAddFoodModal('',key);}
window.editCustomFood=editCustomFood;

/* ══════════════════════════════════════════════════════
   NUTRIMEMORY
══════════════════════════════════════════════════════ */
g('saveMemoryBtn')?.addEventListener('click',()=>{if(!currentFood)return;const key=currentFood._key;if(savedFoods.includes(key)){showToast('Already saved!');return;}savedFoods.push(key);persistMemory();showToast('Saved ✓');renderMemoryCount();});
function persistMemory(){_save('nutrilog_savedfoods',savedFoods);}
function removeFromMemory(key){savedFoods=savedFoods.filter(k=>k!==key);persistMemory();renderMemoryCount();renderMemoryDrawer();}
window.removeFromMemory=removeFromMemory;
function addToMemory(key){if(savedFoods.includes(key))return;savedFoods.push(key);persistMemory();renderMemoryCount();showToast(`${getAllFoods()[key]?.name} saved!`);renderMemoryDrawer();}
window.addToMemory=addToMemory;
function useFromMemory(key){closeMemoryDrawer();setTimeout(()=>selectFood(key),120);}
window.useFromMemory=useFromMemory;
function renderMemoryCount(){const el=g('memoryCount');if(el)el.textContent=savedFoods.length;}

g('memoryBtn')?.addEventListener('click',openMemoryDrawer);
g('closeMemory')?.addEventListener('click',closeMemoryDrawer);
g('memoryOverlay')?.addEventListener('click',closeMemoryDrawer);
function openMemoryDrawer(){memoryCatFilter='All';memoryFilter='';const ms=g('memorySearch');if(ms)ms.value='';renderMemoryDrawer();g('memoryDrawer')?.classList.add('open');g('memoryOverlay')?.classList.add('open');setTimeout(()=>g('memorySearch')?.focus(),160);}
function closeMemoryDrawer(){g('memoryDrawer')?.classList.remove('open');g('memoryOverlay')?.classList.remove('open');}

g('memorySearch')?.addEventListener('input',function(){memoryFilter=this.value.toLowerCase();renderMemoryDrawer();});

function renderMemoryDrawer() {
  const db=getAllFoods();
  const allCats=[...new Set(Object.values(db).map(f=>f.category||'Other'))].sort();
  const cats=g('memoryCats');
  if(cats) cats.innerHTML=['All',...allCats].map(c=>`<button class="cat-pill${c===memoryCatFilter?' active':''}" onclick="setCatFilter('${escAttr(c)}')">${escHtml(c)}</button>`).join('');
  const pass=k=>{const f=db[k];if(!f)return false;if(memoryCatFilter!=='All'&&f.category!==memoryCatFilter)return false;if(memoryFilter&&!f.name.toLowerCase().includes(memoryFilter)&&!(f.category||'').toLowerCase().includes(memoryFilter)&&!k.includes(memoryFilter))return false;return true;};
  const saved=savedFoods.filter(pass),custom=Object.keys(USER_DB).filter(pass),all=Object.keys(db).filter(pass);
  let html='';
  if(saved.length){html+=`<div class="drawer-section-title">📌 Saved (${saved.length})</div>`;html+=saved.map(k=>memCard(k,true)).join('');html+=`<hr class="drawer-divider">`;}
  if(custom.length){html+=`<div class="drawer-section-title">🧪 My Custom Foods (${custom.length})</div>`;html+=custom.map(k=>memCard(k,savedFoods.includes(k))).join('');html+=`<hr class="drawer-divider">`;}
  const show=all.slice(0,100);
  html+=`<div class="drawer-section-title">📚 All Foods (${all.length.toLocaleString()})</div>`;
  if(!show.length){html+=`<div class="log-empty" style="padding:16px 0">No foods match.</div>`;}
  else{html+=show.map(k=>memCard(k,savedFoods.includes(k))).join('');if(all.length>100)html+=`<div class="sug-more">Showing 100 of ${all.length.toLocaleString()} — type to filter</div>`;}
  const ml=g('memoryList'); if(ml) ml.innerHTML=html;
}
function memCard(key,isSaved){
  const db=getAllFoods(),f=db[key];if(!f)return'';const isC=!!f._custom;
  return`<div class="mem-card${isC?' mem-card-custom':''}">
    <div class="mem-card-head">
      <div class="mem-info"><div class="mem-name">${escHtml(f.name)}${isC?'<span class="custom-badge">custom</span>':''}</div>
      <div class="mem-cat">${escHtml(f.category||'')}${f.countable?' · by '+f.countable.unitName:''}</div></div>
      <div class="mem-actions">
        <button class="mem-use-btn" onclick="useFromMemory('${key}')">Use →</button>
        ${isSaved?`<button class="mem-pin-btn active" onclick="removeFromMemory('${key}')" title="Unsave">📌</button>`:`<button class="mem-pin-btn" onclick="addToMemory('${key}')" title="Save">📌</button>`}
        ${isC?`<button class="mem-edit-btn" onclick="editCustomFood('${key}')" title="Edit">✏</button><button class="mem-del-btn" onclick="deleteCustomFood('${key}')" title="Delete">🗑</button>`:''}
      </div>
    </div>
    <div class="mem-table">
      <div class="mem-cell mc-cal"><span class="mc-val">${f.cal}</span><span class="mc-lbl">kcal</span></div>
      <div class="mem-cell mc-prot"><span class="mc-val">${f.prot}g</span><span class="mc-lbl">prot</span></div>
      <div class="mem-cell mc-carb"><span class="mc-val">${f.carb}g</span><span class="mc-lbl">carbs</span></div>
      <div class="mem-cell mc-fat"><span class="mc-val">${f.fat}g</span><span class="mc-lbl">fat</span></div>
    </div>
    <div class="mem-base">per ${f.base}${f.unit} · ${escHtml(f.servingLabel)}</div>
  </div>`;
}
function setCatFilter(cat){memoryCatFilter=cat;renderMemoryDrawer();}
window.setCatFilter=setCatFilter;

/* ══════════════════════════════════════════════════════
   CLEAR LOG
══════════════════════════════════════════════════════ */
g('clearLogBtn')?.addEventListener('click',()=>{
  if(!logEntries.length) return;
  if(!confirm("Clear today's entire log?")) return;
  pushUndo({type:'clear',snapshot:JSON.stringify(logEntries)});
  logEntries=[];dailyTotals={cal:0,prot:0,carb:0,fat:0};
  persistLog();renderLog();updateTotals();showToast("Log cleared · Ctrl+Z to undo",'warn');
});

/* ══════════════════════════════════════════════════════
   MEAL TEMPLATES
══════════════════════════════════════════════════════ */
g('saveTemplateBtn')?.addEventListener('click',()=>{
  if(!logEntries.length){showToast('Log some food first','warn');return;}
  const name=prompt('Template name:','My Template');
  if(!name?.trim()) return;
  mealTemplates[name.trim()]=logEntries.map(e=>({key:e.key,name:e.name,portion:e.portion,meal:e.meal,cal:e.cal,prot:e.prot,carb:e.carb,fat:e.fat}));
  _save('nutrilog_meal_templates',mealTemplates);showToast(`"${name}" saved ✓`);renderTemplatesPanel();
});
g('templatesBtn')?.addEventListener('click',openTemplatesDrawer);
g('closeTemplates')?.addEventListener('click',closeTemplatesDrawer);
g('templatesOverlay')?.addEventListener('click',closeTemplatesDrawer);
function openTemplatesDrawer(){renderTemplatesPanel();g('templatesDrawer')?.classList.add('open');g('templatesOverlay')?.classList.add('open');}
function closeTemplatesDrawer(){g('templatesDrawer')?.classList.remove('open');g('templatesOverlay')?.classList.remove('open');}
function renderTemplatesPanel(){
  const panel=g('templatesPanel');if(!panel)return;
  const keys=Object.keys(mealTemplates);
  if(!keys.length){panel.innerHTML=`<div class="tmpl-empty">No templates yet.<br>Log a full day then click 💾 to save it.</div>`;return;}
  panel.innerHTML=keys.map(name=>{const e=mealTemplates[name];const cal=e.reduce((s,x)=>s+x.cal,0);return`<div class="tmpl-item"><div class="tmpl-info"><div class="tmpl-name">${escHtml(name)}</div><div class="tmpl-meta">${e.length} items · ${cal} kcal</div></div><div class="tmpl-actions"><button class="tmpl-load-btn" onclick="loadTemplate('${escAttr(name)}')">Load</button><button class="tmpl-del-btn" onclick="deleteTemplate('${escAttr(name)}')">✕</button></div></div>`;}).join('');
}
function loadTemplate(name){
  const t=mealTemplates[name];if(!t)return;
  if(logEntries.length&&!confirm(`Add "${name}" to today's log?`))return;
  pushUndo({type:'add',snapshot:JSON.stringify(logEntries)});
  const now=new Date().toLocaleTimeString('en-US',{hour:'2-digit',minute:'2-digit'});
  t.forEach(e=>logEntries.push({...e,id:Date.now()+Math.random(),time:now,note:''}));
  persistLog();recomputeTotals();renderLog();updateTotals();
  closeTemplatesDrawer();showToast(`"${name}" loaded ✓`);
}
window.loadTemplate=loadTemplate;
function deleteTemplate(name){if(!confirm(`Delete template "${name}"?`))return;delete mealTemplates[name];_save('nutrilog_meal_templates',mealTemplates);renderTemplatesPanel();showToast(`"${name}" deleted`,'warn');}
window.deleteTemplate=deleteTemplate;

/* ══════════════════════════════════════════════════════
   FOOD COMPARE
══════════════════════════════════════════════════════ */
g('compareBtn')?.addEventListener('click',()=>{if(!currentFood){showToast('Select a food first','warn');return;}compareFood={...currentFood};setText('compareA',compareFood.name);openCompareDrawer();});
g('closeCompare')?.addEventListener('click',closeCompareDrawer);
g('compareOverlay')?.addEventListener('click',closeCompareDrawer);
function openCompareDrawer(){renderCompareDrawer();g('compareDrawer')?.classList.add('open');g('compareOverlay')?.classList.add('open');}
function closeCompareDrawer(){g('compareDrawer')?.classList.remove('open');g('compareOverlay')?.classList.remove('open');}
function renderCompareDrawer(){const el=g('compareTable');if(el)el.innerHTML=`<div class="cmp-hint">Search a food above to compare with <strong>${escHtml(compareFood?.name||'')}</strong></div>`;}
g('compareSearch')?.addEventListener('input',function(){
  const q=this.value.trim();if(q.length<1){g('compareResults').innerHTML='';return;}
  const db=getAllFoods();const keys=matchKeys(q).slice(0,10);
  g('compareResults').innerHTML=keys.map(k=>`<div class="cmp-result" onclick="setCompareB('${k}')">${escHtml(db[k].name)}</div>`).join('');
});
function setCompareB(key){
  const db=getAllFoods(),b=db[key];if(!b||!compareFood)return;const a=compareFood;
  const PER=100;const norm=(v,base)=>+(v*PER/base).toFixed(1);
  const fields=[{l:'Calories',a:a.cal,b:b.cal,u:'kcal',ab:a.base,bb:b.base},{l:'Protein',a:a.prot,b:b.prot,u:'g',ab:a.base,bb:b.base},{l:'Carbs',a:a.carb,b:b.carb,u:'g',ab:a.base,bb:b.base},{l:'Fat',a:a.fat,b:b.fat,u:'g',ab:a.base,bb:b.base}];
  let html=`<div class="cmp-header"><div class="cmp-col-a">${escHtml(a.name)}</div><div class="cmp-per">per ${PER}g</div><div class="cmp-col-b">${escHtml(b.name)}</div></div>`;
  fields.forEach(f=>{const av=norm(f.a,f.ab),bv=norm(f.b,f.bb);const w=av<bv?'a':bv<av?'b':'';
    html+=`<div class="cmp-row"><div class="cmp-val-a${w==='a'?' cmp-win':''}">${av} ${f.u}</div><div class="cmp-label">${f.l}</div><div class="cmp-val-b${w==='b'?' cmp-win':''}">${bv} ${f.u}</div></div>`;});
  g('compareTable').innerHTML=html;g('compareResults').innerHTML='';if(g('compareSearch'))g('compareSearch').value='';
}
window.setCompareB=setCompareB;

/* ══════════════════════════════════════════════════════
   BODY WEIGHT TRACKER
══════════════════════════════════════════════════════ */
g('logWeightBtn')?.addEventListener('click',()=>{
  const today=new Date().toISOString().split('T')[0];
  const last=bodyWeight.at(-1);setVal('weightInput',last?.kg||'');setVal('weightDate',today);
  g('weightModal')?.classList.add('open');setTimeout(()=>g('weightInput')?.focus(),80);
});
g('saveWeightBtn')?.addEventListener('click',()=>{
  const kg=parseFloat(g('weightInput')?.value),date=g('weightDate')?.value;
  if(!kg||kg<=0||kg>600){showToast('Enter a valid weight','warn');return;}
  if(!date){showToast('Select a date','warn');return;}
  const filtered=bodyWeight.filter(e=>e.date!==date);filtered.push({date,kg});
  filtered.sort((a,b)=>a.date.localeCompare(b.date));bodyWeight=filtered;
  _save('nutrilog_bodyweight',bodyWeight);g('weightModal')?.classList.remove('open');
  showToast(`${kg}kg logged ✓`);updateWeightDisplay();renderWeightChart();
});
g('cancelWeightBtn')?.addEventListener('click',()=>g('weightModal')?.classList.remove('open'));

function updateWeightDisplay(){
  const last=bodyWeight.at(-1),el=g('weightDisplay'),diffEl=g('weightDiff');
  if(!el)return;
  if(!last){el.textContent='—';if(diffEl)diffEl.textContent='';return;}
  el.textContent=last.kg+'kg';
  const prev=bodyWeight.at(-2);
  if(diffEl&&prev){const d=+(last.kg-prev.kg).toFixed(1);diffEl.textContent=(d>0?'▲':'▼')+Math.abs(d)+'kg';diffEl.className='weight-diff '+(d>0?'up':'down');}
  else if(diffEl)diffEl.textContent='';
}
function renderWeightChart(){
  const canvas=g('weightChart');if(!canvas||bodyWeight.length<2)return;
  const ctx=canvas.getContext('2d'),w=canvas.offsetWidth||280,h=70;
  canvas.width=w;
  const pts=bodyWeight.slice(-30),vals=pts.map(p=>p.kg);
  const mn=Math.min(...vals)-0.5,mx=Math.max(...vals)+0.5,rng=mx-mn||1;
  ctx.clearRect(0,0,w,h);
  const sx=i=>i*(w/(pts.length-1));const sy=v=>h-6-((v-mn)/rng)*(h-12);
  ctx.strokeStyle='rgba(255,255,255,.05)';ctx.lineWidth=1;
  [0.25,0.5,0.75].forEach(t=>{const y=(h-12)*t+6;ctx.beginPath();ctx.moveTo(0,y);ctx.lineTo(w,y);ctx.stroke();});
  ctx.beginPath();ctx.strokeStyle='rgba(108,99,255,.75)';ctx.lineWidth=2;ctx.lineJoin='round';
  pts.forEach((p,i)=>i===0?ctx.moveTo(sx(i),sy(p.kg)):ctx.lineTo(sx(i),sy(p.kg)));ctx.stroke();
  ctx.lineTo(sx(pts.length-1),h);ctx.lineTo(0,h);ctx.closePath();ctx.fillStyle='rgba(108,99,255,.07)';ctx.fill();
  pts.forEach((p,i)=>{ctx.beginPath();ctx.arc(sx(i),sy(p.kg),2.5,0,Math.PI*2);ctx.fillStyle='#9b94ff';ctx.fill();});
  const l=pts.at(-1);ctx.fillStyle='rgba(232,234,240,.75)';ctx.font='bold 9px DM Mono,monospace';ctx.textAlign='right';ctx.fillText(l.kg+'kg',w-3,sy(l.kg)-5);
}


/* ══════════════════════════════════════════════════════
   EXPORT / IMPORT
══════════════════════════════════════════════════════ */
g('exportBtn')?.addEventListener('click',()=>{
  const data={version:3,exported:new Date().toISOString(),goals,waterGoal,mealGroups,savedFoods,history,userFoods:USER_DB,recents:recentFoods,templates:mealTemplates,bodyWeight,streak:streakData,
    today:{date:todayKey(),entries:logEntries,waterMl,burned:caloriesBurned}};
  const blob=new Blob([JSON.stringify(data,null,2)],{type:'application/json'});
  const url=URL.createObjectURL(blob);const a=document.createElement('a');a.href=url;a.download=`nutrilog-${todayKey()}.json`;a.click();URL.revokeObjectURL(url);showToast('Data exported ✓');
});
g('importBtn')?.addEventListener('click',()=>g('importFile')?.click());
g('importFile')?.addEventListener('change',function(e){
  const file=e.target.files?.[0];if(!file)return;
  const reader=new FileReader();
  reader.onload=ev=>{
    try{
      const data=JSON.parse(ev.target.result);if(!data.version)throw new Error('Invalid file');
      if(!confirm('Import will merge with current data. Continue?'))return;
      if(data.goals)Object.assign(goals,data.goals);_save('nutrilog_goals',goals);
      if(data.waterGoal){waterGoal=data.waterGoal;localStorage.setItem('nutrilog_watergoal',waterGoal);}
      if(data.savedFoods){savedFoods=data.savedFoods;persistMemory();}
      if(data.history)Object.assign(history,data.history);_save('nutrilog_history',history);
      if(data.userFoods)Object.assign(USER_DB,data.userFoods);persistUserDB();
      if(data.templates)Object.assign(mealTemplates,data.templates);_save('nutrilog_meal_templates',mealTemplates);
      if(data.bodyWeight){bodyWeight=[...bodyWeight,...data.bodyWeight].filter((v,i,a)=>a.findIndex(x=>x.date===v.date)===i).sort((a,b)=>a.date.localeCompare(b.date));_save('nutrilog_bodyweight',bodyWeight);}
      if(data.streak&&data.streak.count>streakData.count)streakData=data.streak;_save('nutrilog_streak',streakData);
      if(data.today?.entries&&data.today.date===todayKey()){logEntries=data.today.entries;waterMl=data.today.waterMl||0;caloriesBurned=data.today.burned||0;persistLog();localStorage.setItem('nutrilog_water_today',waterMl);localStorage.setItem('nutrilog_burned_today',caloriesBurned);}
      recomputeTotals();renderLog();updateTotals();updateWaterUI();renderMemoryCount();updateWeightDisplay();renderWeightChart();
      g('goalsModal')?.classList.remove('open');showToast('Import successful ✓');
    }catch(err){showToast('Import failed: '+err.message,'warn');}
    e.target.value='';
  };
  reader.readAsText(file);
});

/* ══════════════════════════════════════════════════════
   COPY LOG TO CLIPBOARD
══════════════════════════════════════════════════════ */
g('copyLogBtn')?.addEventListener('click',()=>{
  if(!logEntries.length){showToast('Nothing to copy','warn');return;}
  const date=new Date().toLocaleDateString('en-US',{weekday:'long',month:'long',day:'numeric'});
  let text=`NutriLog — ${date}\n${'─'.repeat(36)}\n\n`;
  const groups={};mealGroups.forEach(m=>groups[m]=[]);groups['Other']=[];
  logEntries.forEach(e=>{const g2=mealGroups.includes(e.meal)?e.meal:'Other';groups[g2].push(e);});
  [...mealGroups,'Other'].forEach(meal=>{const ents=groups[meal];if(!ents.length)return;text+=`${meal.toUpperCase()}\n`;ents.forEach(e=>text+=`  • ${e.name} — ${e.portion} → ${e.cal} kcal | ${e.prot}g P | ${e.carb}g C | ${e.fat}g F${e.note?' ('+e.note+')':''}\n`);text+='\n';});
  text+=`${'─'.repeat(36)}\nTOTAL: ${Math.round(dailyTotals.cal)} kcal | ${dailyTotals.prot}g P | ${dailyTotals.carb}g C | ${dailyTotals.fat}g F\n`;
  if(caloriesBurned) text+=`Burned: ${caloriesBurned} kcal · Net: ${Math.round(dailyTotals.cal-caloriesBurned)} kcal\n`;
  if(waterMl) text+=`Water: ${(waterMl/1000).toFixed(1)}L\n`;
  navigator.clipboard.writeText(text).then(()=>showToast('Copied to clipboard ✓')).catch(()=>showToast('Copy failed','warn'));
});

/* ══════════════════════════════════════════════════════
   SHORTCUTS MODAL
══════════════════════════════════════════════════════ */
g('shortcutsBtn')?.addEventListener('click',()=>g('shortcutsModal')?.classList.add('open'));
g('closeShortcutsModal')?.addEventListener('click',()=>g('shortcutsModal')?.classList.remove('open'));
g('shortcutsModal')?.addEventListener('click',e=>{if(e.target===e.currentTarget)e.currentTarget.classList.remove('open');});

/* ══════════════════════════════════════════════════════
   MOBILE TAB SWITCHING — 5-tab with More sheet
══════════════════════════════════════════════════════ */
(function(){
  const isMobile = () => window.innerWidth <= 640;

  // On desktop, always show both columns
  if (!isMobile()) {
    document.querySelector('.left-col')?.classList.add('active');
    document.querySelector('.right-col')?.classList.add('active');
  }

  const panels = {
    search: () => showCol('left',  () => g('foodInput')?.focus()),
    log:    () => showCol('right', () => g('logEntries')?.scrollIntoView({behavior:'smooth',block:'start'})),
    stats:  () => showCol('right', () => g('caloriesRemaining')?.scrollIntoView({behavior:'smooth',block:'start'})),
    water:  () => showCol('left',  () => setTimeout(()=>g('waterWaveWrap')?.scrollIntoView({behavior:'smooth',block:'center'}),80)),
    more:   () => openMoreSheet(),
  };

  function showCol(col, cb) {
    const left  = document.querySelector('.left-col');
    const right = document.querySelector('.right-col');
    if (!left || !right) return;
    if (col === 'left')  { left.classList.add('active');    right.classList.remove('active'); }
    else                 { right.classList.add('active');   left.classList.remove('active'); }
    cb?.();
  }

  function activateTab(name) {
    if (!isMobile() && name !== 'more') {
      // On desktop just call the action but don't hide panels
      if (name === 'more') openMoreSheet();
      return;
    }
    document.querySelectorAll('.mob-tab').forEach(t => t.classList.toggle('active', t.dataset.tab === name));
    localStorage.setItem('nutrilog_mobile_tab', name);
    (panels[name] || (() => {}))();
    // Update log badge
    updateMobLogBadge();
  }
  window.activateTab = activateTab;

  // Restore last tab
  const saved = localStorage.getItem('nutrilog_mobile_tab') || 'search';
  if (isMobile()) activateTab(saved);
  else { document.querySelector('.left-col')?.classList.add('active'); document.querySelector('.right-col')?.classList.add('active'); }

  document.querySelectorAll('.mob-tab').forEach(t =>
    t.addEventListener('click', () => activateTab(t.dataset.tab))
  );

  window.addEventListener('resize', () => {
    if (!isMobile()) {
      document.querySelector('.left-col')?.classList.add('active');
      document.querySelector('.right-col')?.classList.add('active');
    }
  });
})();

/* ── More sheet ────────────────────────────────────── */
function openMoreSheet() {
  g('moreSheet')?.classList.add('open');
  g('moreSheetOverlay')?.classList.add('open');
  document.querySelectorAll('.mob-tab').forEach(t => t.classList.toggle('active', t.dataset.tab === 'more'));
}
function closeMoreSheet() {
  g('moreSheet')?.classList.remove('open');
  g('moreSheetOverlay')?.classList.remove('open');
  // Restore previous tab highlight
  const saved = localStorage.getItem('nutrilog_mobile_tab') || 'search';
  document.querySelectorAll('.mob-tab').forEach(t => t.classList.toggle('active', t.dataset.tab === saved && saved !== 'more'));
}
window.openMoreSheet = openMoreSheet;
window.closeMoreSheet = closeMoreSheet;

/* ── Log entry count badge on mobile tab ───────────── */
function updateMobLogBadge() {
  const el = g('mobLogBadge');
  if (!el) return;
  if (logEntries.length > 0) {
    el.textContent = logEntries.length;
    el.style.display = 'flex';
  } else {
    el.style.display = 'none';
  }
}

/* ══════════════════════════════════════════════════════
   TOAST STACK
══════════════════════════════════════════════════════ */
function showToast(msg,type='success',withUndo=false){
  const c=g('toastContainer');if(!c)return;
  const id='t'+Date.now()+'_'+Math.random().toString(36).slice(2);
  const el=document.createElement('div');
  el.className=`toast-item${type==='warn'?' warn':''}`;el.id=id;
  el.innerHTML=`<span class="toast-msg">${escHtml(msg)}</span>${withUndo?'<button class="toast-undo" onclick="undoLast()">Undo</button>':''}<button class="toast-close" onclick="dismissToast('${id}')">✕</button>`;
  c.appendChild(el);
  requestAnimationFrame(()=>requestAnimationFrame(()=>el.classList.add('show')));
  el._t=setTimeout(()=>dismissToast(id),3500);
}
window.showToast=showToast;
function dismissToast(id){const el=g(id);if(!el)return;clearTimeout(el._t);el.classList.remove('show');setTimeout(()=>el?.remove(),320);}
window.dismissToast=dismissToast;

/* ══════════════════════════════════════════════════════
   STORAGE SAFETY NET
   Saves all state on: hide, pagehide, beforeunload, + every 60s
══════════════════════════════════════════════════════ */
function saveAllState(){
  _save('nutrilog_log_today',logEntries);
  localStorage.setItem('nutrilog_water_today',waterMl);
  localStorage.setItem('nutrilog_burned_today',caloriesBurned);
  _save('nutrilog_userfoods',USER_DB);
  _save('nutrilog_savedfoods',savedFoods);
  _save('nutrilog_goals',goals);
  _save('nutrilog_recents',recentFoods);
  _save('nutrilog_history',history);
  _save('nutrilog_streak',streakData);
  _save('nutrilog_portion_memory',portionMemory);
  _save('nutrilog_meal_templates',mealTemplates);
  _save('nutrilog_bodyweight',bodyWeight);
  localStorage.setItem('nutrilog_curmeal',currentMeal);
  localStorage.setItem('nutrilog_theme',theme);
  localStorage.setItem('nutrilog_watergoal',waterGoal);
}
document.addEventListener('visibilitychange',()=>{if(document.visibilityState==='hidden')saveAllState();});
window.addEventListener('pagehide',saveAllState);
window.addEventListener('beforeunload',saveAllState);
setInterval(saveAllState,60_000);

/* ══════════════════════════════════════════════════════
   INIT
══════════════════════════════════════════════════════ */
renderMealSelector();
renderLog();
updateTotals();
updateWaterUI();
try{updateMobLogBadge();}catch(_){}
renderMemoryCount();
updateWeightDisplay();
renderWeightChart();
renderTemplatesPanel();


/* ══════════════════════════════════════════════════════
   QOL: RIPPLE EFFECT ON BUTTONS
══════════════════════════════════════════════════════ */
document.addEventListener('click', e => {
  const btn = e.target.closest('.add-btn, .search-btn, .mem-use-btn, .tdee-calc-btn, .tmpl-load-btn, .water-btns button');
  if (!btn) return;
  const r = document.createElement('span');
  r.className = 'ripple-wave';
  const rect = btn.getBoundingClientRect();
  r.style.left = (e.clientX - rect.left) + 'px';
  r.style.top  = (e.clientY - rect.top)  + 'px';
  btn.appendChild(r);
  setTimeout(() => r.remove(), 600);
});

/* ══════════════════════════════════════════════════════
   QOL: ANIMATED NUMBER CHANGES
══════════════════════════════════════════════════════ */
let _prevCal = 0;
const _origUpdateTotals = updateTotals;
function updateTotalsAnimated() {
  const newCal = Math.round(dailyTotals.cal);
  _origUpdateTotals();
  // Animate calorie ring number if it changed
  if (newCal !== _prevCal) {
    const el = g('calRingNum');
    if (el) { el.classList.remove('num-tick'); void el.offsetWidth; el.classList.add('num-tick'); }
    _prevCal = newCal;
  }
}
window.updateTotals = updateTotalsAnimated;

/* ══════════════════════════════════════════════════════
   QOL: SWIPE TO DELETE LOG ENTRIES (mobile)
══════════════════════════════════════════════════════ */
let swipeStart = null;
document.addEventListener('touchstart', e => {
  const entry = e.target.closest('.log-entry[data-id]');
  if (!entry) return;
  swipeStart = { x: e.touches[0].clientX, id: parseInt(entry.dataset.id), el: entry };
}, { passive: true });

document.addEventListener('touchend', e => {
  if (!swipeStart) return;
  const dx = e.changedTouches[0].clientX - swipeStart.x;
  if (dx < -80) {
    // Swipe left to delete
    swipeStart.el.classList.add('deleting');
    setTimeout(() => deleteEntry(swipeStart.id), 180);
  }
  swipeStart = null;
}, { passive: true });

/* ══════════════════════════════════════════════════════
   QOL: PULL TO REFRESH HINT (mobile)
══════════════════════════════════════════════════════ */
let pullStart = 0;
window.addEventListener('touchstart', e => {
  if (window.scrollY === 0) pullStart = e.touches[0].clientY;
}, { passive: true });
window.addEventListener('touchend', e => {
  if (pullStart === 0) return;
  const dy = e.changedTouches[0].clientY - pullStart;
  if (dy > 80 && window.scrollY === 0) {
    // Light haptic-style feedback
    showToast('All data saved ✓');
    saveAllState();
  }
  pullStart = 0;
}, { passive: true });

/* ══════════════════════════════════════════════════════
   QOL: KEYBOARD SHORTCUT HINTS ON FOCUS
══════════════════════════════════════════════════════ */
g('foodInput')?.addEventListener('focus', () => {
  // Show hint only first few times
  const n = parseInt(localStorage.getItem('nutrilog_search_hints') || '0');
  if (n < 3) {
    localStorage.setItem('nutrilog_search_hints', n + 1);
    if (n === 0) showToast('Tip: ↑↓ to navigate, Enter to select');
  }
});

/* ══════════════════════════════════════════════════════
   QOL: SMART PORTION INPUT — select on focus
══════════════════════════════════════════════════════ */
g('portionInput')?.addEventListener('focus', function() { this.select(); });
g('countInput')?.addEventListener('focus', function() { this.select(); });

/* QoL: double-tap log entry to edit (only if no swipe) */
let lastTap = 0;
document.addEventListener('touchend', e => {
  const entry = e.target.closest('.log-entry[data-id]');
  if (!entry) return;
  if (swipeStart) return; // swipe was in progress
  const now = Date.now();
  if (now - lastTap < 320) {
    const id = parseInt(entry.dataset.id);
    e.preventDefault();
    editEntryPortion(id);
    lastTap = 0; return;
  }
  lastTap = now;
}, { passive: true });

/* ══════════════════════════════════════════════════════
   QOL: WATER GOAL CELEBRATION
══════════════════════════════════════════════════════ */
const _origAddWater = addWater;
window.addWater = function(ml) {
  const wasBefore = waterMl < waterGoal;
  _origAddWater(ml);
  if (wasBefore && waterMl >= waterGoal) {
    // Big celebration toast
    setTimeout(() => showToast('🎉 Water goal reached! Great hydration!'), 200);
  }
};

/* ══════════════════════════════════════════════════════
   QOL: AUTOFOCUS AFTER LOG
   After logging a food, auto-focus search for fast multi-logging
══════════════════════════════════════════════════════ */
const _origLogFood = logFood;
window.logFood = function() {
  _origLogFood();
  setTimeout(() => { if (!currentFood) { g('foodInput')?.focus(); g('foodInput')?.select(); } }, 250);
};

/* ══════════════════════════════════════════════════════
   QOL: GOALS LABEL SYNC on load
══════════════════════════════════════════════════════ */
(function syncGoalLabels() {
  setText('criGoal',   goals.cal + ' kcal');
  setText('goalProtLbl', goals.prot + 'g');
  setText('goalCarbLbl', goals.carb + 'g');
  setText('goalFatLbl',  goals.fat  + 'g');
})();


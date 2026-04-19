/**
 * NutriLog Food Database
 * ─────────────────────────────────────────────────────────
 * Each entry: { name, category, unit, base, cal, prot, carb, fat,
 *               servingSize, servingLabel,
 *               countable (optional): { unitName, gramsEach } }
 *
 * - base   : the reference weight/volume in `unit`
 * - cal/prot/carb/fat : per `base` amount
 * - countable: for items that are naturally counted (dosa, idli, egg...)
 *              gramsEach = approx grams per single piece
 *
 * All values are approximate nutritional averages.
 */

const FOOD_DB = {

  /* ══════════════════════════════════════════════════════
     🍚  GRAINS, RICE & CEREALS — COMPLETE SECTION
  ══════════════════════════════════════════════════════ */

  /* ── White & Polished Rice ─────────────────────────── */
  "white rice cooked":            { name:"White Rice (cooked)",                category:"Grains", unit:"g", base:100, cal:130, prot:2.7, carb:28,  fat:0.3, servingSize:180, servingLabel:"1 cup cooked" },
  "white rice raw":               { name:"White Rice (raw / dry)",             category:"Grains", unit:"g", base:100, cal:365, prot:7,   carb:80,  fat:0.7, servingSize:45,  servingLabel:"¼ cup dry" },
  "basmati rice cooked":          { name:"Basmati Rice (cooked)",              category:"Grains", unit:"g", base:100, cal:121, prot:3.5, carb:25,  fat:0.4, servingSize:180, servingLabel:"1 cup cooked" },
  "basmati rice raw":             { name:"Basmati Rice (raw)",                 category:"Grains", unit:"g", base:100, cal:350, prot:8,   carb:78,  fat:0.5, servingSize:45,  servingLabel:"¼ cup dry" },
  "jasmine rice cooked":          { name:"Jasmine Rice (cooked)",              category:"Grains", unit:"g", base:100, cal:129, prot:2.5, carb:28,  fat:0.3, servingSize:180, servingLabel:"1 cup cooked" },
  "sona masoori rice cooked":     { name:"Sona Masoori Rice (cooked)",         category:"Grains", unit:"g", base:100, cal:125, prot:2.8, carb:27,  fat:0.3, servingSize:180, servingLabel:"1 cup cooked" },
  "parboiled rice cooked":        { name:"Parboiled / Idli Rice (cooked)",     category:"Grains", unit:"g", base:100, cal:123, prot:2.7, carb:26,  fat:0.4, servingSize:180, servingLabel:"1 cup cooked" },
  "ponni rice cooked":            { name:"Ponni Rice (cooked)",                category:"Grains", unit:"g", base:100, cal:126, prot:2.6, carb:27,  fat:0.3, servingSize:180, servingLabel:"1 cup cooked" },
  "arborio rice cooked":          { name:"Arborio Rice (cooked, risotto)",     category:"Grains", unit:"g", base:100, cal:141, prot:2.6, carb:30,  fat:0.3, servingSize:200, servingLabel:"1 cup cooked" },
  "sticky glutinous rice cooked": { name:"Sticky / Glutinous Rice (cooked)",  category:"Grains", unit:"g", base:100, cal:170, prot:3.5, carb:37,  fat:0.3, servingSize:180, servingLabel:"1 cup cooked" },

  /* ── Brown & Whole Grain Rice ──────────────────────── */
  "brown rice cooked":            { name:"Brown Rice (cooked)",                category:"Grains", unit:"g", base:100, cal:123, prot:2.6, carb:26,  fat:1,   servingSize:180, servingLabel:"1 cup cooked" },
  "brown rice raw":               { name:"Brown Rice (raw / dry)",             category:"Grains", unit:"g", base:100, cal:370, prot:8,   carb:77,  fat:2.7, servingSize:45,  servingLabel:"¼ cup dry" },
  "red rice cooked":              { name:"Red Rice (cooked)",                  category:"Grains", unit:"g", base:100, cal:111, prot:2.5, carb:24,  fat:0.8, servingSize:180, servingLabel:"1 cup cooked" },
  "black rice cooked":            { name:"Black / Forbidden Rice (cooked)",    category:"Grains", unit:"g", base:100, cal:160, prot:3.5, carb:34,  fat:1.5, servingSize:186, servingLabel:"1 cup cooked" },
  "wild rice cooked":             { name:"Wild Rice (cooked)",                 category:"Grains", unit:"g", base:100, cal:101, prot:4,   carb:21,  fat:0.3, servingSize:164, servingLabel:"1 cup cooked" },
  "purple rice cooked":           { name:"Purple Rice (cooked)",               category:"Grains", unit:"g", base:100, cal:155, prot:3.3, carb:33,  fat:1.2, servingSize:180, servingLabel:"1 cup cooked" },
  "cargo rice cooked":            { name:"Cargo / Lightly Milled Rice (cooked)",category:"Grains", unit:"g", base:100, cal:118, prot:2.5, carb:25,  fat:0.5, servingSize:180, servingLabel:"1 cup cooked" },

  /* ── Flattened & Puffed Rice ───────────────────────── */
  "poha flattened rice thick":    { name:"Poha / Flattened Rice (thick)",      category:"Grains", unit:"g", base:100, cal:356, prot:7,   carb:79,  fat:1,   servingSize:50,  servingLabel:"½ cup dry" },
  "poha flattened rice thin":     { name:"Poha / Flattened Rice (thin)",       category:"Grains", unit:"g", base:100, cal:356, prot:7,   carb:79,  fat:1,   servingSize:40,  servingLabel:"½ cup dry" },
  "aval beaten rice":             { name:"Aval / Beaten Rice (Kerala style)",  category:"Grains", unit:"g", base:100, cal:356, prot:6.5, carb:79,  fat:1.2, servingSize:40,  servingLabel:"½ cup dry" },
  "puffed rice murmura":          { name:"Puffed Rice / Murmura",              category:"Grains", unit:"g", base:100, cal:402, prot:6.3, carb:90,  fat:0.5, servingSize:15,  servingLabel:"1 cup puffed" },
  "rice flakes beaten":           { name:"Rice Flakes (beaten, medium thick)", category:"Grains", unit:"g", base:100, cal:357, prot:6.5, carb:79,  fat:1.2, servingSize:40,  servingLabel:"½ cup dry" },

  /* ── Oats ──────────────────────────────────────────── */
  "oats rolled dry":              { name:"Rolled Oats (dry)",                  category:"Grains", unit:"g", base:100, cal:389, prot:17,  carb:66,  fat:7,   servingSize:40,  servingLabel:"½ cup dry" },
  "oatmeal cooked":               { name:"Oatmeal / Porridge (cooked, water)", category:"Grains", unit:"g", base:100, cal:71,  prot:2.5, carb:12,  fat:1.5, servingSize:240, servingLabel:"1 cup cooked" },
  "oatmeal cooked milk":          { name:"Oatmeal (cooked with whole milk)",   category:"Grains", unit:"g", base:100, cal:100, prot:4,   carb:14,  fat:3,   servingSize:240, servingLabel:"1 cup cooked" },
  "oat bran dry":                 { name:"Oat Bran (dry)",                     category:"Grains", unit:"g", base:100, cal:246, prot:17,  carb:66,  fat:7,   servingSize:28,  servingLabel:"¼ cup dry" },
  "oat bran cooked":              { name:"Oat Bran (cooked)",                  category:"Grains", unit:"g", base:100, cal:40,  prot:3.2, carb:7,   fat:0.9, servingSize:219, servingLabel:"1 cup cooked" },
  "instant oats":                 { name:"Instant Oats (plain, dry)",          category:"Grains", unit:"g", base:100, cal:380, prot:14,  carb:68,  fat:6.5, servingSize:28,  servingLabel:"1 packet" },
  "steel cut oats dry":           { name:"Steel Cut / Irish Oats (dry)",       category:"Grains", unit:"g", base:100, cal:370, prot:15,  carb:67,  fat:7,   servingSize:40,  servingLabel:"¼ cup dry" },
  "steel cut oats cooked":        { name:"Steel Cut Oats (cooked)",            category:"Grains", unit:"g", base:100, cal:67,  prot:2.8, carb:12,  fat:1.2, servingSize:240, servingLabel:"1 cup cooked" },
  "quick oats":                   { name:"Quick Oats (1-minute oats, dry)",    category:"Grains", unit:"g", base:100, cal:379, prot:13,  carb:68,  fat:6.5, servingSize:40,  servingLabel:"½ cup dry" },
  "overnight oats":               { name:"Overnight Oats (oats + milk, prep)", category:"Grains", unit:"g", base:100, cal:120, prot:5,   carb:19,  fat:3,   servingSize:200, servingLabel:"1 jar" },

  /* ── Wheat & Flour ─────────────────────────────────── */
  "whole wheat flour atta":       { name:"Whole Wheat Flour / Atta",           category:"Grains", unit:"g", base:100, cal:340, prot:13,  carb:71,  fat:2.5, servingSize:30,  servingLabel:"¼ cup" },
  "maida all purpose flour":      { name:"Maida / All-Purpose Flour",          category:"Grains", unit:"g", base:100, cal:364, prot:10,  carb:76,  fat:1,   servingSize:30,  servingLabel:"¼ cup" },
  "bread flour":                  { name:"Bread Flour (high gluten)",          category:"Grains", unit:"g", base:100, cal:361, prot:13,  carb:73,  fat:1.7, servingSize:30,  servingLabel:"¼ cup" },
  "cake flour":                   { name:"Cake Flour",                         category:"Grains", unit:"g", base:100, cal:356, prot:9,   carb:76,  fat:0.9, servingSize:30,  servingLabel:"¼ cup" },
  "wheat bran":                   { name:"Wheat Bran",                         category:"Grains", unit:"g", base:100, cal:216, prot:16,  carb:65,  fat:4.3, servingSize:14,  servingLabel:"2 tbsp" },
  "wheat germ":                   { name:"Wheat Germ (toasted)",               category:"Grains", unit:"g", base:100, cal:382, prot:29,  carb:52,  fat:9.7, servingSize:14,  servingLabel:"2 tbsp" },
  "semolina rava":                { name:"Semolina / Rava (fine)",             category:"Grains", unit:"g", base:100, cal:360, prot:13,  carb:73,  fat:1,   servingSize:30,  servingLabel:"2 tbsp dry" },
  "semolina coarse":              { name:"Semolina (coarse / sooji)",          category:"Grains", unit:"g", base:100, cal:360, prot:12,  carb:72,  fat:1.1, servingSize:30,  servingLabel:"2 tbsp dry" },
  "bulgur wheat cooked":          { name:"Bulgur Wheat (cooked)",              category:"Grains", unit:"g", base:100, cal:83,  prot:3.1, carb:19,  fat:0.2, servingSize:182, servingLabel:"1 cup cooked" },
  "bulgur wheat dry":             { name:"Bulgur Wheat (dry)",                 category:"Grains", unit:"g", base:100, cal:342, prot:12,  carb:76,  fat:1.3, servingSize:45,  servingLabel:"¼ cup dry" },
  "cracked wheat dalia dry":      { name:"Cracked Wheat / Dalia (dry)",        category:"Grains", unit:"g", base:100, cal:340, prot:12,  carb:72,  fat:1.5, servingSize:40,  servingLabel:"¼ cup dry" },
  "cracked wheat dalia cooked":   { name:"Cracked Wheat / Dalia (cooked)",     category:"Grains", unit:"g", base:100, cal:105, prot:4,   carb:22,  fat:0.5, servingSize:200, servingLabel:"1 cup cooked" },
  "farro cooked":                 { name:"Farro (cooked)",                     category:"Grains", unit:"g", base:100, cal:130, prot:5,   carb:26,  fat:0.5, servingSize:200, servingLabel:"1 cup cooked" },
  "spelt cooked":                 { name:"Spelt (cooked)",                     category:"Grains", unit:"g", base:100, cal:127, prot:5.5, carb:26,  fat:0.9, servingSize:194, servingLabel:"1 cup cooked" },
  "kamut khorasan cooked":        { name:"Kamut / Khorasan Wheat (cooked)",    category:"Grains", unit:"g", base:100, cal:147, prot:6.6, carb:30,  fat:1,   servingSize:182, servingLabel:"1 cup cooked" },
  "einkorn cooked":               { name:"Einkorn Wheat (cooked)",             category:"Grains", unit:"g", base:100, cal:131, prot:5.5, carb:26,  fat:1,   servingSize:180, servingLabel:"1 cup cooked" },
  "emmer wheat cooked":           { name:"Emmer / Farro Piccolo (cooked)",     category:"Grains", unit:"g", base:100, cal:128, prot:5.2, carb:26,  fat:0.8, servingSize:180, servingLabel:"1 cup cooked" },
  "wheat berries cooked":         { name:"Wheat Berries (cooked)",             category:"Grains", unit:"g", base:100, cal:152, prot:5.6, carb:31,  fat:1,   servingSize:200, servingLabel:"1 cup cooked" },
  "freekeh cooked":               { name:"Freekeh (cooked)",                   category:"Grains", unit:"g", base:100, cal:129, prot:5.7, carb:26,  fat:0.8, servingSize:200, servingLabel:"1 cup cooked" },

  /* ── Corn / Maize ──────────────────────────────────── */
  "corn flour cornstarch":        { name:"Corn Flour / Cornstarch",            category:"Grains", unit:"g", base:100, cal:381, prot:0.3, carb:91,  fat:0.1, servingSize:8,   servingLabel:"1 tbsp" },
  "maize flour cornmeal":         { name:"Maize Flour / Yellow Cornmeal",      category:"Grains", unit:"g", base:100, cal:362, prot:8,   carb:77,  fat:3.6, servingSize:30,  servingLabel:"¼ cup" },
  "polenta cornmeal cooked":      { name:"Polenta / Cornmeal (cooked)",        category:"Grains", unit:"g", base:100, cal:70,  prot:1.5, carb:15,  fat:0.3, servingSize:245, servingLabel:"1 cup cooked" },
  "corn grits cooked":            { name:"Corn Grits (cooked)",                category:"Grains", unit:"g", base:100, cal:71,  prot:1.7, carb:15,  fat:0.2, servingSize:242, servingLabel:"1 cup cooked" },
  "hominy cooked":                { name:"Hominy (cooked, canned)",            category:"Grains", unit:"g", base:100, cal:72,  prot:1.5, carb:15,  fat:0.9, servingSize:165, servingLabel:"1 cup" },
  "masa harina":                  { name:"Masa Harina (nixtamalized corn flour)",category:"Grains", unit:"g", base:100, cal:362, prot:8,   carb:75,  fat:4,   servingSize:30,  servingLabel:"¼ cup" },

  /* ── Other Ancient & Specialty Grains ─────────────── */
  "quinoa cooked":                { name:"Quinoa (cooked)",                    category:"Grains", unit:"g", base:100, cal:120, prot:4.1, carb:22,  fat:1.9, servingSize:185, servingLabel:"1 cup cooked" },
  "quinoa dry":                   { name:"Quinoa (dry / raw)",                 category:"Grains", unit:"g", base:100, cal:368, prot:14,  carb:64,  fat:6,   servingSize:45,  servingLabel:"¼ cup dry" },
  "amaranth cooked":              { name:"Amaranth (cooked)",                  category:"Grains", unit:"g", base:100, cal:102, prot:3.8, carb:18.7,fat:1.6, servingSize:246, servingLabel:"1 cup cooked" },
  "amaranth dry":                 { name:"Amaranth (dry)",                     category:"Grains", unit:"g", base:100, cal:371, prot:14,  carb:65,  fat:7,   servingSize:45,  servingLabel:"¼ cup dry" },
  "buckwheat cooked":             { name:"Buckwheat / Kuttu (cooked)",         category:"Grains", unit:"g", base:100, cal:92,  prot:3.4, carb:20,  fat:0.6, servingSize:168, servingLabel:"1 cup cooked" },
  "buckwheat dry":                { name:"Buckwheat Groats (dry)",             category:"Grains", unit:"g", base:100, cal:343, prot:13,  carb:72,  fat:3.4, servingSize:45,  servingLabel:"¼ cup dry" },
  "buckwheat flour":              { name:"Buckwheat Flour / Kuttu Atta",       category:"Grains", unit:"g", base:100, cal:335, prot:13,  carb:71,  fat:3.5, servingSize:30,  servingLabel:"¼ cup" },
  "teff cooked":                  { name:"Teff (cooked)",                      category:"Grains", unit:"g", base:100, cal:101, prot:3.9, carb:20,  fat:0.7, servingSize:252, servingLabel:"1 cup cooked" },
  "teff dry":                     { name:"Teff (dry)",                         category:"Grains", unit:"g", base:100, cal:367, prot:13,  carb:73,  fat:2.4, servingSize:45,  servingLabel:"¼ cup dry" },
  "sorghum jowar cooked":         { name:"Jowar / Sorghum (cooked)",           category:"Grains", unit:"g", base:100, cal:119, prot:4,   carb:26,  fat:1.3, servingSize:200, servingLabel:"1 cup cooked" },
  "barley cooked":                { name:"Barley (pearl, cooked)",             category:"Grains", unit:"g", base:100, cal:123, prot:2.3, carb:28,  fat:0.4, servingSize:157, servingLabel:"1 cup cooked" },
  "barley hulled cooked":         { name:"Barley (hulled / whole grain, cooked)", category:"Grains", unit:"g", base:100, cal:145, prot:4,   carb:30,  fat:1,   servingSize:200, servingLabel:"1 cup cooked" },
  "barley dry":                   { name:"Barley (pearl, dry)",                category:"Grains", unit:"g", base:100, cal:352, prot:9.9, carb:78,  fat:1.2, servingSize:45,  servingLabel:"¼ cup dry" },
  "couscous cooked":              { name:"Couscous (cooked)",                  category:"Grains", unit:"g", base:100, cal:112, prot:3.8, carb:23,  fat:0.2, servingSize:157, servingLabel:"1 cup cooked" },
  "couscous dry":                 { name:"Couscous (dry)",                     category:"Grains", unit:"g", base:100, cal:376, prot:13,  carb:78,  fat:0.6, servingSize:45,  servingLabel:"¼ cup dry" },
  "wheatberries cooked":          { name:"Wheat Berries (whole, cooked)",      category:"Grains", unit:"g", base:100, cal:152, prot:5.6, carb:31,  fat:1,   servingSize:200, servingLabel:"1 cup cooked" },

  /* ── Millets ───────────────────────────────────────── */
  "millet pearl bajra dry":       { name:"Pearl Millet / Bajra (dry)",         category:"Grains", unit:"g", base:100, cal:378, prot:11,  carb:75,  fat:5,   servingSize:40,  servingLabel:"¼ cup dry" },
  "millet pearl bajra cooked":    { name:"Pearl Millet / Bajra (cooked)",      category:"Grains", unit:"g", base:100, cal:107, prot:3.5, carb:21,  fat:1.5, servingSize:200, servingLabel:"1 cup cooked" },
  "millet finger ragi dry":       { name:"Ragi / Finger Millet (dry)",         category:"Grains", unit:"g", base:100, cal:336, prot:7,   carb:73,  fat:1.5, servingSize:40,  servingLabel:"¼ cup dry" },
  "millet finger ragi cooked":    { name:"Ragi / Finger Millet (cooked)",      category:"Grains", unit:"g", base:100, cal:97,  prot:2,   carb:21,  fat:0.5, servingSize:200, servingLabel:"1 cup cooked" },
  "millet finger ragi flour":     { name:"Ragi Flour (finger millet flour)",   category:"Grains", unit:"g", base:100, cal:336, prot:7,   carb:73,  fat:1.5, servingSize:30,  servingLabel:"¼ cup" },
  "millet sorghum jowar dry":     { name:"Jowar / Sorghum (dry)",              category:"Grains", unit:"g", base:100, cal:349, prot:11,  carb:73,  fat:3.5, servingSize:40,  servingLabel:"¼ cup dry" },
  "millet foxtail cooked":        { name:"Foxtail Millet / Thinai (cooked)",   category:"Grains", unit:"g", base:100, cal:119, prot:3,   carb:25,  fat:1,   servingSize:180, servingLabel:"1 cup cooked" },
  "millet foxtail dry":           { name:"Foxtail Millet / Thinai (dry)",      category:"Grains", unit:"g", base:100, cal:351, prot:12,  carb:70,  fat:4,   servingSize:40,  servingLabel:"¼ cup dry" },
  "millet kodo cooked":           { name:"Kodo Millet / Varagu (cooked)",      category:"Grains", unit:"g", base:100, cal:104, prot:2.8, carb:23,  fat:0.5, servingSize:180, servingLabel:"1 cup cooked" },
  "millet little samai cooked":   { name:"Little Millet / Samai (cooked)",     category:"Grains", unit:"g", base:100, cal:107, prot:3.3, carb:23,  fat:1,   servingSize:180, servingLabel:"1 cup cooked" },
  "millet barnyard sanwa cooked": { name:"Barnyard Millet / Sanwa (cooked)",   category:"Grains", unit:"g", base:100, cal:97,  prot:3.6, carb:20,  fat:0.6, servingSize:180, servingLabel:"1 cup cooked" },
  "millet proso cooked":          { name:"Proso Millet (cooked)",              category:"Grains", unit:"g", base:100, cal:119, prot:3.8, carb:23,  fat:1,   servingSize:180, servingLabel:"1 cup cooked" },
  "millet browntop cooked":       { name:"Browntop Millet (cooked)",           category:"Grains", unit:"g", base:100, cal:105, prot:3.5, carb:22,  fat:0.8, servingSize:180, servingLabel:"1 cup cooked" },
  "millet pearl puffed":          { name:"Puffed Bajra / Pearl Millet",        category:"Grains", unit:"g", base:100, cal:360, prot:11,  carb:73,  fat:4,   servingSize:20,  servingLabel:"1 cup puffed" },
  "millet jowar puffed":          { name:"Puffed Jowar / Sorghum",             category:"Grains", unit:"g", base:100, cal:350, prot:10,  carb:74,  fat:2.5, servingSize:20,  servingLabel:"1 cup puffed" },

  /* ── Alternative / Specialty Flours ───────────────── */
  "besan gram flour":             { name:"Besan / Gram Flour (chickpea flour)", category:"Grains", unit:"g", base:100, cal:387, prot:22,  carb:58,  fat:6,   servingSize:30,  servingLabel:"¼ cup" },
  "rice flour":                   { name:"Rice Flour (white)",                 category:"Grains", unit:"g", base:100, cal:366, prot:6,   carb:80,  fat:1.4, servingSize:30,  servingLabel:"¼ cup" },
  "brown rice flour":             { name:"Brown Rice Flour",                   category:"Grains", unit:"g", base:100, cal:363, prot:7.2, carb:76,  fat:2.8, servingSize:30,  servingLabel:"¼ cup" },
  "oat flour":                    { name:"Oat Flour",                          category:"Grains", unit:"g", base:100, cal:380, prot:13,  carb:68,  fat:7,   servingSize:30,  servingLabel:"¼ cup" },
  "almond flour":                 { name:"Almond Flour (blanched)",            category:"Grains", unit:"g", base:100, cal:571, prot:21,  carb:21,  fat:50,  servingSize:28,  servingLabel:"¼ cup" },
  "coconut flour":                { name:"Coconut Flour",                      category:"Grains", unit:"g", base:100, cal:400, prot:18,  carb:60,  fat:15,  servingSize:14,  servingLabel:"2 tbsp" },
  "tapioca starch flour":         { name:"Tapioca Starch / Cassava Flour",     category:"Grains", unit:"g", base:100, cal:358, prot:0.2, carb:88,  fat:0.1, servingSize:14,  servingLabel:"2 tbsp" },
  "arrowroot starch":             { name:"Arrowroot Starch",                   category:"Grains", unit:"g", base:100, cal:357, prot:0.3, carb:88,  fat:0.1, servingSize:8,   servingLabel:"1 tbsp" },
  "chickpea flour besan":         { name:"Chickpea Flour / Besan",             category:"Grains", unit:"g", base:100, cal:387, prot:22,  carb:58,  fat:6,   servingSize:30,  servingLabel:"¼ cup" },
  "cassava flour":                { name:"Cassava / Tapioca Flour",            category:"Grains", unit:"g", base:100, cal:363, prot:2.2, carb:88,  fat:0.3, servingSize:30,  servingLabel:"¼ cup" },
  "sorghum flour":                { name:"Sorghum / Jowar Flour",              category:"Grains", unit:"g", base:100, cal:339, prot:8.4, carb:74,  fat:3.3, servingSize:30,  servingLabel:"¼ cup" },
  "teff flour":                   { name:"Teff Flour",                         category:"Grains", unit:"g", base:100, cal:366, prot:13,  carb:73,  fat:2.5, servingSize:30,  servingLabel:"¼ cup" },
  "spelt flour":                  { name:"Spelt Flour",                        category:"Grains", unit:"g", base:100, cal:338, prot:14,  carb:70,  fat:2.4, servingSize:30,  servingLabel:"¼ cup" },
  "rye flour dark":               { name:"Rye Flour (dark)",                   category:"Grains", unit:"g", base:100, cal:325, prot:9,   carb:69,  fat:1.7, servingSize:30,  servingLabel:"¼ cup" },
  "gluten free flour blend":      { name:"Gluten-Free Flour Blend",            category:"Grains", unit:"g", base:100, cal:370, prot:5,   carb:80,  fat:2,   servingSize:30,  servingLabel:"¼ cup" },
  "potato starch":                { name:"Potato Starch",                      category:"Grains", unit:"g", base:100, cal:357, prot:0.1, carb:83,  fat:0.1, servingSize:8,   servingLabel:"1 tbsp" },

  /* ── Breakfast Cereals ─────────────────────────────── */
  "cornflakes":                   { name:"Corn Flakes",                        category:"Grains", unit:"g", base:100, cal:357, prot:8,   carb:84,  fat:0.4, servingSize:30,  servingLabel:"1 cup" },
  "cornflakes with milk":         { name:"Corn Flakes (with whole milk)",      category:"Grains", unit:"g", base:100, cal:132, prot:4.5, carb:22,  fat:3.2, servingSize:180, servingLabel:"1 bowl with milk" },
  "wheat flakes":                 { name:"Wheat Flakes Cereal",                category:"Grains", unit:"g", base:100, cal:340, prot:10,  carb:75,  fat:1.5, servingSize:30,  servingLabel:"1 cup" },
  "bran flakes":                  { name:"Bran Flakes",                        category:"Grains", unit:"g", base:100, cal:318, prot:9,   carb:74,  fat:2,   servingSize:30,  servingLabel:"¾ cup" },
  "all bran":                     { name:"All-Bran (high fibre cereal)",       category:"Grains", unit:"g", base:100, cal:270, prot:10,  carb:56,  fat:3.8, servingSize:40,  servingLabel:"½ cup" },
  "muesli plain":                 { name:"Muesli (plain, no added sugar)",     category:"Grains", unit:"g", base:100, cal:363, prot:10,  carb:69,  fat:6,   servingSize:50,  servingLabel:"½ cup" },
  "muesli toasted":               { name:"Toasted Muesli",                     category:"Grains", unit:"g", base:100, cal:395, prot:9,   carb:64,  fat:12,  servingSize:50,  servingLabel:"½ cup" },
  "granola plain":                { name:"Granola (plain, with honey & oats)", category:"Grains", unit:"g", base:100, cal:471, prot:10,  carb:64,  fat:20,  servingSize:50,  servingLabel:"½ cup" },
  "granola low fat":              { name:"Low-Fat Granola",                    category:"Grains", unit:"g", base:100, cal:393, prot:9,   carb:74,  fat:6,   servingSize:50,  servingLabel:"½ cup" },
  "granola clusters":             { name:"Granola Clusters (with nuts/fruit)", category:"Grains", unit:"g", base:100, cal:450, prot:9,   carb:63,  fat:18,  servingSize:50,  servingLabel:"½ cup" },
  "rice krispies":                { name:"Rice Krispies / Puffed Rice Cereal", category:"Grains", unit:"g", base:100, cal:393, prot:6.8, carb:88,  fat:1.5, servingSize:29,  servingLabel:"1¼ cup" },
  "frosted flakes":               { name:"Frosted Flakes / Sugar Corn Flakes", category:"Grains", unit:"g", base:100, cal:378, prot:5.6, carb:90,  fat:0.3, servingSize:29,  servingLabel:"¾ cup" },
  "cheerios":                     { name:"Cheerios (original oat rings)",      category:"Grains", unit:"g", base:100, cal:376, prot:13,  carb:73,  fat:7,   servingSize:28,  servingLabel:"1 cup" },
  "shredded wheat":               { name:"Shredded Wheat",                     category:"Grains", unit:"g", base:100, cal:352, prot:11,  carb:79,  fat:2.5, servingSize:47,  servingLabel:"2 biscuits",           countable:{ unitName:"biscuit", gramsEach:24 } },
  "weetabix":                     { name:"Weetabix / Wheat Biscuit",           category:"Grains", unit:"g", base:100, cal:362, prot:12,  carb:70,  fat:2,   servingSize:37,  servingLabel:"2 biscuits",           countable:{ unitName:"biscuit", gramsEach:18.5 } },
  "special k":                    { name:"Special K",                          category:"Grains", unit:"g", base:100, cal:379, prot:16,  carb:75,  fat:1.5, servingSize:31,  servingLabel:"1 cup" },
  "fruit loops":                  { name:"Froot Loops / Fruit Rings Cereal",   category:"Grains", unit:"g", base:100, cal:384, prot:5,   carb:89,  fat:3,   servingSize:29,  servingLabel:"¾ cup" },
  "coco pops":                    { name:"Coco Pops / Cocoa Krispies",         category:"Grains", unit:"g", base:100, cal:390, prot:5,   carb:87,  fat:2,   servingSize:30,  servingLabel:"1 cup" },
  "honey bunches of oats":        { name:"Honey Bunches of Oats",              category:"Grains", unit:"g", base:100, cal:396, prot:7,   carb:79,  fat:6,   servingSize:31,  servingLabel:"¾ cup" },
  "milo cereal":                  { name:"Milo Cereal / Nesquik Cereal",       category:"Grains", unit:"g", base:100, cal:395, prot:7,   carb:81,  fat:4,   servingSize:30,  servingLabel:"¾ cup" },
  "puffed wheat cereal":          { name:"Puffed Wheat (breakfast cereal)",    category:"Grains", unit:"g", base:100, cal:357, prot:15,  carb:78,  fat:1.5, servingSize:15,  servingLabel:"1 cup" },
  "porridge oat instant sachet":  { name:"Instant Porridge Sachet (flavoured)",category:"Grains", unit:"g", base:100, cal:370, prot:10,  carb:68,  fat:6,   servingSize:35,  servingLabel:"1 sachet" },

  /* ── Other Grain Products ──────────────────────────── */
  "rice bran":                    { name:"Rice Bran",                          category:"Grains", unit:"g", base:100, cal:316, prot:14,  carb:50,  fat:20,  servingSize:14,  servingLabel:"2 tbsp" },
  "makhana fox nuts":             { name:"Makhana / Fox Nuts (roasted)",       category:"Grains", unit:"g", base:100, cal:347, prot:9.7, carb:76,  fat:0.1, servingSize:30,  servingLabel:"1 cup puffed" },
  "puffed wheat murmura":         { name:"Puffed Wheat / Murmura",             category:"Grains", unit:"g", base:100, cal:357, prot:15,  carb:78,  fat:1.5, servingSize:15,  servingLabel:"1 cup puffed" },
  "sabudana sago dry":            { name:"Sabudana / Sago (dry tapioca pearls)",category:"Grains", unit:"g", base:100, cal:350, prot:0.2, carb:88,  fat:0.2, servingSize:45,  servingLabel:"¼ cup dry" },
  "sabudana cooked":              { name:"Sabudana / Sago (cooked)",           category:"Grains", unit:"g", base:100, cal:138, prot:0.1, carb:34,  fat:0.1, servingSize:200, servingLabel:"1 cup cooked" },
  "sattu roasted flour":          { name:"Sattu (roasted chickpea/barley flour)", category:"Grains", unit:"g", base:100, cal:378, prot:22,  carb:60,  fat:6,   servingSize:30,  servingLabel:"2 tbsp" },
  "flaxseed ground":              { name:"Ground Flaxseed / Linseed",          category:"Grains", unit:"g", base:100, cal:534, prot:18,  carb:29,  fat:42,  servingSize:10,  servingLabel:"1 tbsp" },
  "psyllium husk":                { name:"Psyllium Husk",                      category:"Grains", unit:"g", base:100, cal:200, prot:2,   carb:85,  fat:1,   servingSize:5,   servingLabel:"1 tsp" },
  "chia seeds":                   { name:"Chia Seeds",                         category:"Grains", unit:"g", base:100, cal:486, prot:17,  carb:42,  fat:31,  servingSize:28,  servingLabel:"2 tbsp" },
  "hemp seeds":                   { name:"Hemp Seeds / Hemp Hearts",           category:"Grains", unit:"g", base:100, cal:553, prot:32,  carb:8.7, fat:49,  servingSize:30,  servingLabel:"3 tbsp" },
  
  
  









  
/* ══════════════════════════════════════════════════════
     🫓  BREADS & BAKED GOODS — COMPLETE SECTION
  ══════════════════════════════════════════════════════ */

  /* ── Western Breads ────────────────────────────────── */
  "white bread":                  { name:"White Bread",                        category:"Bread", unit:"g", base:100, cal:265, prot:9,   carb:51,  fat:3.2, servingSize:30,  servingLabel:"1 slice",              countable:{ unitName:"slice",      gramsEach:30   } },
  "whole wheat bread":            { name:"Whole Wheat Bread",                  category:"Bread", unit:"g", base:100, cal:247, prot:13,  carb:41,  fat:3.4, servingSize:30,  servingLabel:"1 slice",              countable:{ unitName:"slice",      gramsEach:30   } },
  "multigrain bread":             { name:"Multigrain Bread",                   category:"Bread", unit:"g", base:100, cal:251, prot:11,  carb:44,  fat:4,   servingSize:30,  servingLabel:"1 slice",              countable:{ unitName:"slice",      gramsEach:30   } },
  "sourdough bread":              { name:"Sourdough Bread",                    category:"Bread", unit:"g", base:100, cal:274, prot:9,   carb:52,  fat:1.2, servingSize:30,  servingLabel:"1 slice",              countable:{ unitName:"slice",      gramsEach:30   } },
  "rye bread":                    { name:"Rye Bread",                          category:"Bread", unit:"g", base:100, cal:259, prot:9,   carb:48,  fat:3.3, servingSize:32,  servingLabel:"1 slice",              countable:{ unitName:"slice",      gramsEach:32   } },
  "dark rye bread":               { name:"Dark Rye / Schwarzbrot",             category:"Bread", unit:"g", base:100, cal:250, prot:8.5, carb:48,  fat:2,   servingSize:32,  servingLabel:"1 slice",              countable:{ unitName:"slice",      gramsEach:32   } },
  "pumpernickel bread":           { name:"Pumpernickel Bread",                 category:"Bread", unit:"g", base:100, cal:250, prot:9,   carb:49,  fat:1.7, servingSize:32,  servingLabel:"1 slice",              countable:{ unitName:"slice",      gramsEach:32   } },
  "gluten free bread":            { name:"Gluten-Free Bread",                  category:"Bread", unit:"g", base:100, cal:247, prot:3.5, carb:49,  fat:3.5, servingSize:30,  servingLabel:"1 slice",              countable:{ unitName:"slice",      gramsEach:30   } },
  "seeded bread":                 { name:"Seeded Bread (sunflower/poppy)",     category:"Bread", unit:"g", base:100, cal:285, prot:10,  carb:46,  fat:7,   servingSize:35,  servingLabel:"1 thick slice",        countable:{ unitName:"slice",      gramsEach:35   } },
  "brioche":                      { name:"Brioche",                            category:"Bread", unit:"g", base:100, cal:365, prot:8,   carb:45,  fat:17,  servingSize:40,  servingLabel:"1 roll",               countable:{ unitName:"roll",       gramsEach:40   } },
  "brioche bun":                  { name:"Brioche Bun (burger bun)",           category:"Bread", unit:"g", base:100, cal:340, prot:8.5, carb:48,  fat:13,  servingSize:55,  servingLabel:"1 bun",                countable:{ unitName:"bun",        gramsEach:55   } },
  "baguette":                     { name:"Baguette (French bread)",            category:"Bread", unit:"g", base:100, cal:272, prot:9,   carb:52,  fat:1.8, servingSize:50,  servingLabel:"1 thick slice",        countable:{ unitName:"slice",      gramsEach:50   } },
  "ciabatta":                     { name:"Ciabatta",                           category:"Bread", unit:"g", base:100, cal:271, prot:9,   carb:52,  fat:2.5, servingSize:60,  servingLabel:"1 roll",               countable:{ unitName:"roll",       gramsEach:60   } },
  "focaccia":                     { name:"Focaccia",                           category:"Bread", unit:"g", base:100, cal:284, prot:7,   carb:43,  fat:9.5, servingSize:60,  servingLabel:"1 piece",              countable:{ unitName:"piece",      gramsEach:60   } },
  "bagel plain":                  { name:"Bagel (plain)",                      category:"Bread", unit:"g", base:100, cal:270, prot:10,  carb:53,  fat:1.6, servingSize:98,  servingLabel:"1 medium bagel",       countable:{ unitName:"bagel",      gramsEach:98   } },
  "bagel everything":             { name:"Bagel (everything seasoning)",       category:"Bread", unit:"g", base:100, cal:275, prot:10,  carb:53,  fat:2,   servingSize:98,  servingLabel:"1 bagel",              countable:{ unitName:"bagel",      gramsEach:98   } },
  "bagel whole wheat":            { name:"Bagel (whole wheat)",                category:"Bread", unit:"g", base:100, cal:250, prot:11,  carb:51,  fat:1.5, servingSize:98,  servingLabel:"1 bagel",              countable:{ unitName:"bagel",      gramsEach:98   } },
  "english muffin":               { name:"English Muffin",                     category:"Bread", unit:"g", base:100, cal:227, prot:8.4, carb:44,  fat:1.9, servingSize:57,  servingLabel:"1 muffin",             countable:{ unitName:"muffin",     gramsEach:57   } },
  "dinner roll":                  { name:"Dinner Roll",                        category:"Bread", unit:"g", base:100, cal:298, prot:9,   carb:51,  fat:6.5, servingSize:28,  servingLabel:"1 roll",               countable:{ unitName:"roll",       gramsEach:28   } },
  "hamburger bun":                { name:"Hamburger Bun (plain)",              category:"Bread", unit:"g", base:100, cal:279, prot:8.7, carb:50,  fat:4.5, servingSize:43,  servingLabel:"1 bun",                countable:{ unitName:"bun",        gramsEach:43   } },
  "hot dog bun":                  { name:"Hot Dog Bun",                        category:"Bread", unit:"g", base:100, cal:268, prot:8.5, carb:49,  fat:3.5, servingSize:43,  servingLabel:"1 bun",                countable:{ unitName:"bun",        gramsEach:43   } },
  "pita bread":                   { name:"Pita Bread (white)",                 category:"Bread", unit:"g", base:100, cal:275, prot:9.1, carb:56,  fat:1.2, servingSize:60,  servingLabel:"1 pita",               countable:{ unitName:"pita",       gramsEach:60   } },
  "pita bread whole wheat":       { name:"Pita Bread (whole wheat)",           category:"Bread", unit:"g", base:100, cal:265, prot:10,  carb:53,  fat:1.7, servingSize:60,  servingLabel:"1 pita",               countable:{ unitName:"pita",       gramsEach:60   } },
  "pita chips":                   { name:"Pita Chips (baked)",                 category:"Bread", unit:"g", base:100, cal:400, prot:10,  carb:68,  fat:9,   servingSize:28,  servingLabel:"~8 chips" },
  "croissant plain":              { name:"Croissant (plain)",                  category:"Bread", unit:"g", base:100, cal:406, prot:8.2, carb:46,  fat:21,  servingSize:57,  servingLabel:"1 medium croissant",   countable:{ unitName:"croissant",  gramsEach:57   } },
  "croissant butter":             { name:"Croissant (all-butter)",             category:"Bread", unit:"g", base:100, cal:422, prot:8,   carb:45,  fat:24,  servingSize:60,  servingLabel:"1 large croissant",    countable:{ unitName:"croissant",  gramsEach:60   } },
  "croissant chocolate":          { name:"Croissant (chocolate / pain au choc)",category:"Bread", unit:"g", base:100, cal:450, prot:7.5, carb:50,  fat:25,  servingSize:65,  servingLabel:"1 piece",              countable:{ unitName:"piece",      gramsEach:65   } },
  "toast white":                  { name:"Toast (white bread, toasted)",       category:"Bread", unit:"g", base:100, cal:313, prot:10,  carb:61,  fat:3.9, servingSize:28,  servingLabel:"1 slice",              countable:{ unitName:"slice",      gramsEach:28   } },
  "toast whole wheat":            { name:"Toast (whole wheat, toasted)",       category:"Bread", unit:"g", base:100, cal:290, prot:12,  carb:52,  fat:4,   servingSize:28,  servingLabel:"1 slice",              countable:{ unitName:"slice",      gramsEach:28   } },
  "breadstick grissini":          { name:"Breadstick / Grissini",              category:"Bread", unit:"g", base:100, cal:427, prot:11,  carb:74,  fat:9.5, servingSize:10,  servingLabel:"1 breadstick",         countable:{ unitName:"breadstick", gramsEach:10   } },
  "french bread loaf":            { name:"French Bread / Boule (slice)",       category:"Bread", unit:"g", base:100, cal:274, prot:9.5, carb:52,  fat:2.5, servingSize:35,  servingLabel:"1 slice",              countable:{ unitName:"slice",      gramsEach:35   } },
  "naan":                         { name:"Naan",                               category:"Bread", unit:"g", base:100, cal:317, prot:9,   carb:55,  fat:7,   servingSize:90,  servingLabel:"1 naan",               countable:{ unitName:"naan",       gramsEach:90   } },
  "garlic naan":                  { name:"Garlic Naan",                        category:"Bread", unit:"g", base:100, cal:330, prot:9,   carb:55,  fat:9,   servingSize:90,  servingLabel:"1 naan",               countable:{ unitName:"naan",       gramsEach:90   } },
  "peshwari naan":                { name:"Peshwari Naan (coconut/almond)",     category:"Bread", unit:"g", base:100, cal:350, prot:8,   carb:55,  fat:12,  servingSize:90,  servingLabel:"1 naan",               countable:{ unitName:"naan",       gramsEach:90   } },
  "wrap flour tortilla":          { name:"Flour Tortilla Wrap",                category:"Bread", unit:"g", base:100, cal:312, prot:8,   carb:54,  fat:7.3, servingSize:45,  servingLabel:"1 medium wrap",        countable:{ unitName:"wrap",       gramsEach:45   } },
  "wrap whole wheat":             { name:"Whole Wheat Wrap / Tortilla",        category:"Bread", unit:"g", base:100, cal:290, prot:10,  carb:54,  fat:5,   servingSize:45,  servingLabel:"1 wrap",               countable:{ unitName:"wrap",       gramsEach:45   } },
  "tortilla corn":                { name:"Corn Tortilla",                      category:"Bread", unit:"g", base:100, cal:218, prot:5,   carb:46,  fat:2.5, servingSize:30,  servingLabel:"1 tortilla",           countable:{ unitName:"tortilla",   gramsEach:30   } },
  "crumpet":                      { name:"Crumpet",                            category:"Bread", unit:"g", base:100, cal:193, prot:7,   carb:39,  fat:1,   servingSize:45,  servingLabel:"1 crumpet",            countable:{ unitName:"crumpet",    gramsEach:45   } },
  "chapata rustic loaf":          { name:"Chapata / Rustic Country Loaf (slice)", category:"Bread", unit:"g", base:100, cal:260, prot:8.5, carb:51, fat:2,   servingSize:35,  servingLabel:"1 slice",              countable:{ unitName:"slice",      gramsEach:35   } },

  /* ── Indian Flatbreads ─────────────────────────────── */
  "chapati roti plain":           { name:"Chapati / Roti (plain, thin)",       category:"Bread", unit:"g", base:100, cal:297, prot:8,   carb:55,  fat:4,   servingSize:40,  servingLabel:"1 roti",               countable:{ unitName:"roti",       gramsEach:40   } },
  "chapati roti thick":           { name:"Chapati / Roti (thick, home style)", category:"Bread", unit:"g", base:100, cal:310, prot:8.5, carb:57,  fat:5,   servingSize:55,  servingLabel:"1 roti",               countable:{ unitName:"roti",       gramsEach:55   } },
  "chapati multigrain":           { name:"Multigrain Chapati",                 category:"Bread", unit:"g", base:100, cal:265, prot:9,   carb:49,  fat:4,   servingSize:40,  servingLabel:"1 roti",               countable:{ unitName:"roti",       gramsEach:40   } },
  "paratha plain":                { name:"Paratha (plain, tawa-fried)",        category:"Bread", unit:"g", base:100, cal:326, prot:8,   carb:51,  fat:11,  servingSize:60,  servingLabel:"1 paratha",            countable:{ unitName:"paratha",    gramsEach:60   } },
  "paratha lachha":               { name:"Lachha Paratha (layered)",           category:"Bread", unit:"g", base:100, cal:338, prot:7,   carb:48,  fat:13,  servingSize:70,  servingLabel:"1 paratha",            countable:{ unitName:"paratha",    gramsEach:70   } },
  "paratha aloo":                 { name:"Aloo Paratha (potato stuffed)",      category:"Bread", unit:"g", base:100, cal:200, prot:5,   carb:32,  fat:6,   servingSize:100, servingLabel:"1 paratha",            countable:{ unitName:"paratha",    gramsEach:100  } },
  "paratha paneer":               { name:"Paneer Paratha",                     category:"Bread", unit:"g", base:100, cal:255, prot:9,   carb:32,  fat:10,  servingSize:100, servingLabel:"1 paratha",            countable:{ unitName:"paratha",    gramsEach:100  } },
  "paratha mooli":                { name:"Mooli / Radish Paratha",             category:"Bread", unit:"g", base:100, cal:195, prot:5,   carb:30,  fat:6.5, servingSize:100, servingLabel:"1 paratha",            countable:{ unitName:"paratha",    gramsEach:100  } },
  "paratha gobi":                 { name:"Gobi / Cauliflower Paratha",         category:"Bread", unit:"g", base:100, cal:208, prot:5.5, carb:31,  fat:7,   servingSize:100, servingLabel:"1 paratha",            countable:{ unitName:"paratha",    gramsEach:100  } },
  "paratha methi":                { name:"Methi / Fenugreek Paratha",          category:"Bread", unit:"g", base:100, cal:290, prot:8,   carb:45,  fat:9,   servingSize:60,  servingLabel:"1 paratha",            countable:{ unitName:"paratha",    gramsEach:60   } },
  "paratha onion":                { name:"Pyaaz / Onion Paratha",              category:"Bread", unit:"g", base:100, cal:280, prot:7,   carb:43,  fat:9,   servingSize:70,  servingLabel:"1 paratha",            countable:{ unitName:"paratha",    gramsEach:70   } },
  "paratha dal":                  { name:"Dal / Lentil Paratha",               category:"Bread", unit:"g", base:100, cal:230, prot:8.5, carb:35,  fat:7,   servingSize:80,  servingLabel:"1 paratha",            countable:{ unitName:"paratha",    gramsEach:80   } },
  "puri plain":                   { name:"Puri (fried, plain)",                category:"Bread", unit:"g", base:100, cal:403, prot:8,   carb:55,  fat:17,  servingSize:30,  servingLabel:"1 puri",               countable:{ unitName:"puri",       gramsEach:30   } },
  "puri whole wheat":             { name:"Puri (whole wheat)",                 category:"Bread", unit:"g", base:100, cal:385, prot:8.5, carb:53,  fat:15,  servingSize:30,  servingLabel:"1 puri",               countable:{ unitName:"puri",       gramsEach:30   } },
  "bhatura":                      { name:"Bhatura (fried fermented dough)",    category:"Bread", unit:"g", base:100, cal:375, prot:8,   carb:55,  fat:14,  servingSize:80,  servingLabel:"1 bhatura",            countable:{ unitName:"bhatura",    gramsEach:80   } },
  "kulcha plain":                 { name:"Kulcha (plain, tandoor)",            category:"Bread", unit:"g", base:100, cal:303, prot:8,   carb:54,  fat:6,   servingSize:80,  servingLabel:"1 kulcha",             countable:{ unitName:"kulcha",     gramsEach:80   } },
  "kulcha stuffed":               { name:"Stuffed Kulcha (amritsari style)",   category:"Bread", unit:"g", base:100, cal:280, prot:7,   carb:45,  fat:9,   servingSize:120, servingLabel:"1 kulcha",             countable:{ unitName:"kulcha",     gramsEach:120  } },
  "thepla":                       { name:"Thepla (methi / fenugreek flatbread)",category:"Bread", unit:"g", base:100, cal:304, prot:9,   carb:46,  fat:9.5, servingSize:45,  servingLabel:"1 thepla",             countable:{ unitName:"thepla",     gramsEach:45   } },
  "missi roti":                   { name:"Missi Roti (besan + wheat)",         category:"Bread", unit:"g", base:100, cal:288, prot:12,  carb:48,  fat:5,   servingSize:45,  servingLabel:"1 roti",               countable:{ unitName:"roti",       gramsEach:45   } },
  "makki roti":                   { name:"Makki di Roti (maize flatbread)",    category:"Bread", unit:"g", base:100, cal:230, prot:5.5, carb:46,  fat:2.5, servingSize:60,  servingLabel:"1 roti",               countable:{ unitName:"roti",       gramsEach:60   } },
  "bajra roti":                   { name:"Bajra Roti (pearl millet)",          category:"Bread", unit:"g", base:100, cal:296, prot:9,   carb:57,  fat:4,   servingSize:50,  servingLabel:"1 roti",               countable:{ unitName:"roti",       gramsEach:50   } },
  "ragi roti":                    { name:"Ragi Roti (finger millet)",          category:"Bread", unit:"g", base:100, cal:260, prot:7,   carb:54,  fat:2,   servingSize:50,  servingLabel:"1 roti",               countable:{ unitName:"roti",       gramsEach:50   } },
  "jowar roti":                   { name:"Jowar Roti (sorghum flatbread)",     category:"Bread", unit:"g", base:100, cal:250, prot:7.5, carb:52,  fat:2,   servingSize:55,  servingLabel:"1 roti",               countable:{ unitName:"roti",       gramsEach:55   } },
  "akki rotti":                   { name:"Akki Rotti (rice flour roti)",       category:"Bread", unit:"g", base:100, cal:220, prot:4,   carb:43,  fat:3.5, servingSize:80,  servingLabel:"1 rotti",              countable:{ unitName:"rotti",      gramsEach:80   } },
  "roomali roti":                 { name:"Roomali Roti (paper thin)",          category:"Bread", unit:"g", base:100, cal:275, prot:8,   carb:55,  fat:3,   servingSize:30,  servingLabel:"1 roti",               countable:{ unitName:"roti",       gramsEach:30   } },
  "tandoori roti":                { name:"Tandoori Roti",                      category:"Bread", unit:"g", base:100, cal:305, prot:9,   carb:58,  fat:4.5, servingSize:55,  servingLabel:"1 roti",               countable:{ unitName:"roti",       gramsEach:55   } },
  "chapati oil brushed":          { name:"Chapati (oil-brushed, restaurant)",  category:"Bread", unit:"g", base:100, cal:320, prot:8,   carb:55,  fat:8,   servingSize:50,  servingLabel:"1 roti",               countable:{ unitName:"roti",       gramsEach:50   } },
  "phulka":                       { name:"Phulka (puffed thin roti)",          category:"Bread", unit:"g", base:100, cal:280, prot:8,   carb:56,  fat:2,   servingSize:35,  servingLabel:"1 phulka",             countable:{ unitName:"phulka",     gramsEach:35   } },

  /* ── South Indian Breads & Dosas ───────────────────── */
  "dosa plain":                   { name:"Plain Dosa",                         category:"Bread", unit:"g", base:100, cal:168, prot:3.9, carb:32,  fat:2.6, servingSize:80,  servingLabel:"1 dosa",               countable:{ unitName:"dosa",       gramsEach:80   } },
  "masala dosa":                  { name:"Masala Dosa",                        category:"Bread", unit:"g", base:100, cal:162, prot:4,   carb:27,  fat:4.5, servingSize:160, servingLabel:"1 masala dosa",        countable:{ unitName:"dosa",       gramsEach:160  } },
  "rava dosa":                    { name:"Rava Dosa",                          category:"Bread", unit:"g", base:100, cal:190, prot:4.5, carb:29,  fat:6.5, servingSize:80,  servingLabel:"1 rava dosa",          countable:{ unitName:"dosa",       gramsEach:80   } },
  "neer dosa":                    { name:"Neer Dosa (thin rice crepe)",        category:"Bread", unit:"g", base:100, cal:107, prot:2.5, carb:22,  fat:1,   servingSize:60,  servingLabel:"1 dosa",               countable:{ unitName:"dosa",       gramsEach:60   } },
  "set dosa":                     { name:"Set Dosa (thick, soft)",             category:"Bread", unit:"g", base:100, cal:145, prot:3.8, carb:28,  fat:2.5, servingSize:60,  servingLabel:"1 dosa",               countable:{ unitName:"dosa",       gramsEach:60   } },
  "pesarattu":                    { name:"Pesarattu (green moong dosa)",       category:"Bread", unit:"g", base:100, cal:195, prot:8,   carb:32,  fat:4.5, servingSize:80,  servingLabel:"1 pesarattu",          countable:{ unitName:"pesarattu",  gramsEach:80   } },
  "adai":                         { name:"Adai (mixed lentil dosa)",           category:"Bread", unit:"g", base:100, cal:195, prot:8,   carb:30,  fat:5,   servingSize:80,  servingLabel:"1 adai",               countable:{ unitName:"adai",       gramsEach:80   } },
  "uttapam":                      { name:"Uttapam (thick dosa with toppings)", category:"Bread", unit:"g", base:100, cal:107, prot:3.5, carb:18,  fat:2.5, servingSize:120, servingLabel:"1 uttapam",            countable:{ unitName:"uttapam",    gramsEach:120  } },
  "appam":                        { name:"Appam (fermented rice hoppers)",     category:"Bread", unit:"g", base:100, cal:156, prot:3.5, carb:32,  fat:1.5, servingSize:70,  servingLabel:"1 appam",              countable:{ unitName:"appam",      gramsEach:70   } },
  "idiyappam string hoppers":     { name:"Idiyappam / String Hoppers",         category:"Bread", unit:"g", base:100, cal:155, prot:3,   carb:34,  fat:0.5, servingSize:70,  servingLabel:"1 piece",              countable:{ unitName:"piece",      gramsEach:70   } },
  "idli":                         { name:"Idli (steamed rice cake)",           category:"Bread", unit:"g", base:100, cal:58,  prot:2,   carb:12,  fat:0.4, servingSize:45,  servingLabel:"1 idli",               countable:{ unitName:"idli",       gramsEach:45   } },
  "mini idli":                    { name:"Mini Idli",                          category:"Bread", unit:"g", base:100, cal:58,  prot:2,   carb:12,  fat:0.4, servingSize:15,  servingLabel:"1 mini idli",          countable:{ unitName:"idli",       gramsEach:15   } },
  "rava idli":                    { name:"Rava / Semolina Idli",               category:"Bread", unit:"g", base:100, cal:148, prot:4.5, carb:25,  fat:4,   servingSize:60,  servingLabel:"1 rava idli",          countable:{ unitName:"idli",       gramsEach:60   } },

  /* ── Middle Eastern & Mediterranean Breads ─────────── */
  "lavash":                       { name:"Lavash (thin Armenian flatbread)",   category:"Bread", unit:"g", base:100, cal:290, prot:9,   carb:58,  fat:3,   servingSize:28,  servingLabel:"1 sheet piece" },
  "flatbread piadina":            { name:"Piadina (Italian flatbread)",        category:"Bread", unit:"g", base:100, cal:325, prot:8.5, carb:54,  fat:8.5, servingSize:70,  servingLabel:"1 piadina",            countable:{ unitName:"piadina",    gramsEach:70   } },
  "markook shrak":                { name:"Markook / Shrak (paper-thin Arabic bread)", category:"Bread", unit:"g", base:100, cal:270, prot:8,  carb:56,  fat:2,   servingSize:40,  servingLabel:"1 piece" },
  "manakish zaatar":              { name:"Manakish / Za'atar Bread",           category:"Bread", unit:"g", base:100, cal:320, prot:8.5, carb:48,  fat:11,  servingSize:100, servingLabel:"1 piece",              countable:{ unitName:"piece",      gramsEach:100  } },
  "injera":                       { name:"Injera (Ethiopian teff flatbread)",  category:"Bread", unit:"g", base:100, cal:124, prot:3.8, carb:26,  fat:0.7, servingSize:110, servingLabel:"1 piece",              countable:{ unitName:"piece",      gramsEach:110  } },
  "chapati east african":         { name:"Chapati (East African style, oilier)",category:"Bread", unit:"g", base:100, cal:330, prot:7.5, carb:49,  fat:12,  servingSize:60,  servingLabel:"1 chapati",            countable:{ unitName:"chapati",    gramsEach:60   } },
  "roti canai":                   { name:"Roti Canai / Paratha (Malaysian)",   category:"Bread", unit:"g", base:100, cal:360, prot:7.5, carb:46,  fat:16,  servingSize:80,  servingLabel:"1 piece",              countable:{ unitName:"piece",      gramsEach:80   } },

  /* ── Pastries & Croissant-Style ────────────────────── */
  "danish pastry":                { name:"Danish Pastry (fruit/custard)",      category:"Bread", unit:"g", base:100, cal:374, prot:7,   carb:52,  fat:16,  servingSize:65,  servingLabel:"1 pastry",             countable:{ unitName:"pastry",     gramsEach:65   } },
  "pain au raisin":               { name:"Pain aux Raisins (scroll pastry)",   category:"Bread", unit:"g", base:100, cal:385, prot:7,   carb:54,  fat:15,  servingSize:80,  servingLabel:"1 pastry",             countable:{ unitName:"pastry",     gramsEach:80   } },
  "almond croissant":             { name:"Almond Croissant",                   category:"Bread", unit:"g", base:100, cal:490, prot:10,  carb:48,  fat:29,  servingSize:75,  servingLabel:"1 croissant",          countable:{ unitName:"croissant",  gramsEach:75   } },
  "cinnamon roll":                { name:"Cinnamon Roll",                      category:"Bread", unit:"g", base:100, cal:380, prot:6.5, carb:60,  fat:13,  servingSize:90,  servingLabel:"1 roll",               countable:{ unitName:"roll",       gramsEach:90   } },
  "cinnamon roll with icing":     { name:"Cinnamon Roll with Cream Cheese Icing", category:"Bread", unit:"g", base:100, cal:420, prot:6, carb:66,  fat:15,  servingSize:100, servingLabel:"1 roll",               countable:{ unitName:"roll",       gramsEach:100  } },
  "chelsea bun":                  { name:"Chelsea Bun / Sticky Bun",           category:"Bread", unit:"g", base:100, cal:365, prot:7,   carb:60,  fat:11,  servingSize:80,  servingLabel:"1 bun",                countable:{ unitName:"bun",        gramsEach:80   } },
  "stollen":                      { name:"Stollen (German Christmas bread)",   category:"Bread", unit:"g", base:100, cal:400, prot:7,   carb:56,  fat:17,  servingSize:50,  servingLabel:"1 slice",              countable:{ unitName:"slice",      gramsEach:50   } },
  "panettone":                    { name:"Panettone",                          category:"Bread", unit:"g", base:100, cal:365, prot:7,   carb:61,  fat:11,  servingSize:60,  servingLabel:"1 slice",              countable:{ unitName:"slice",      gramsEach:60   } },
  "challah":                      { name:"Challah (Jewish egg bread)",         category:"Bread", unit:"g", base:100, cal:300, prot:9,   carb:54,  fat:5,   servingSize:35,  servingLabel:"1 slice",              countable:{ unitName:"slice",      gramsEach:35   } },
  "banana bread":                 { name:"Banana Bread",                       category:"Bread", unit:"g", base:100, cal:328, prot:5,   carb:56,  fat:10,  servingSize:60,  servingLabel:"1 slice",              countable:{ unitName:"slice",      gramsEach:60   } },
  "zucchini bread":               { name:"Zucchini / Courgette Bread",         category:"Bread", unit:"g", base:100, cal:294, prot:4.5, carb:47,  fat:10,  servingSize:55,  servingLabel:"1 slice",              countable:{ unitName:"slice",      gramsEach:55   } },
  "pumpkin bread":                { name:"Pumpkin Bread (spiced)",             category:"Bread", unit:"g", base:100, cal:310, prot:4.5, carb:55,  fat:8.5, servingSize:55,  servingLabel:"1 slice",              countable:{ unitName:"slice",      gramsEach:55   } },
  "lemon loaf":                   { name:"Lemon Loaf / Lemon Drizzle Cake",    category:"Bread", unit:"g", base:100, cal:370, prot:5,   carb:57,  fat:15,  servingSize:65,  servingLabel:"1 slice",              countable:{ unitName:"slice",      gramsEach:65   } },
  "cornbread":                    { name:"Cornbread",                          category:"Bread", unit:"g", base:100, cal:305, prot:5.5, carb:52,  fat:8.5, servingSize:60,  servingLabel:"1 square",             countable:{ unitName:"square",     gramsEach:60   } },
  "soda bread":                   { name:"Irish Soda Bread",                   category:"Bread", unit:"g", base:100, cal:258, prot:7.5, carb:50,  fat:2.5, servingSize:50,  servingLabel:"1 slice",              countable:{ unitName:"slice",      gramsEach:50   } },
  "beer bread":                   { name:"Beer Bread",                         category:"Bread", unit:"g", base:100, cal:295, prot:7,   carb:52,  fat:5,   servingSize:50,  servingLabel:"1 slice",              countable:{ unitName:"slice",      gramsEach:50   } },

  /* ── Muffins & Quick Breads ────────────────────────── */
  "muffin plain":                 { name:"Plain / Blueberry Muffin",           category:"Bread", unit:"g", base:100, cal:379, prot:5.5, carb:59,  fat:14,  servingSize:75,  servingLabel:"1 muffin",             countable:{ unitName:"muffin",     gramsEach:75   } },
  "muffin chocolate chip":        { name:"Chocolate Chip Muffin",              category:"Bread", unit:"g", base:100, cal:410, prot:5.5, carb:62,  fat:16,  servingSize:75,  servingLabel:"1 muffin",             countable:{ unitName:"muffin",     gramsEach:75   } },
  "muffin bran":                  { name:"Bran Muffin",                        category:"Bread", unit:"g", base:100, cal:305, prot:6.5, carb:55,  fat:8,   servingSize:57,  servingLabel:"1 muffin",             countable:{ unitName:"muffin",     gramsEach:57   } },
  "muffin double chocolate":      { name:"Double Chocolate Muffin",            category:"Bread", unit:"g", base:100, cal:430, prot:5.5, carb:63,  fat:18,  servingSize:90,  servingLabel:"1 large muffin",       countable:{ unitName:"muffin",     gramsEach:90   } },
  "muffin coffee cake":           { name:"Coffee Cake / Streusel Muffin",      category:"Bread", unit:"g", base:100, cal:395, prot:5,   carb:62,  fat:14,  servingSize:75,  servingLabel:"1 muffin",             countable:{ unitName:"muffin",     gramsEach:75   } },
  "scone plain":                  { name:"Plain Scone",                        category:"Bread", unit:"g", base:100, cal:364, prot:7.5, carb:56,  fat:13,  servingSize:57,  servingLabel:"1 scone",              countable:{ unitName:"scone",      gramsEach:57   } },
  "scone cheese":                 { name:"Cheese Scone",                       category:"Bread", unit:"g", base:100, cal:380, prot:9.5, carb:50,  fat:16,  servingSize:57,  servingLabel:"1 scone",              countable:{ unitName:"scone",      gramsEach:57   } },
  "scone fruit":                  { name:"Fruit Scone (raisin / currant)",     category:"Bread", unit:"g", base:100, cal:375, prot:7,   carb:58,  fat:13,  servingSize:57,  servingLabel:"1 scone",              countable:{ unitName:"scone",      gramsEach:57   } },
  "scone cranberry orange":       { name:"Cranberry Orange Scone",             category:"Bread", unit:"g", base:100, cal:385, prot:6.5, carb:60,  fat:14,  servingSize:60,  servingLabel:"1 scone",              countable:{ unitName:"scone",      gramsEach:60   } },

  /* ── Pancakes, Waffles & French Toast ──────────────── */
  "pancake plain":                { name:"Pancake (plain, 4-inch)",            category:"Bread", unit:"g", base:100, cal:227, prot:6,   carb:34,  fat:8,   servingSize:38,  servingLabel:"1 pancake",            countable:{ unitName:"pancake",    gramsEach:38   } },
  "pancake buttermilk":           { name:"Buttermilk Pancake",                 category:"Bread", unit:"g", base:100, cal:245, prot:6.5, carb:36,  fat:9,   servingSize:45,  servingLabel:"1 pancake",            countable:{ unitName:"pancake",    gramsEach:45   } },
  "pancake blueberry":            { name:"Blueberry Pancake",                  category:"Bread", unit:"g", base:100, cal:248, prot:6,   carb:36,  fat:9,   servingSize:45,  servingLabel:"1 pancake",            countable:{ unitName:"pancake",    gramsEach:45   } },
  "pancake protein":              { name:"Protein Pancake (oat + egg white)",  category:"Bread", unit:"g", base:100, cal:180, prot:14,  carb:22,  fat:4,   servingSize:60,  servingLabel:"1 pancake",            countable:{ unitName:"pancake",    gramsEach:60   } },
  "waffle plain":                 { name:"Waffle (plain)",                     category:"Bread", unit:"g", base:100, cal:291, prot:8,   carb:36,  fat:13,  servingSize:75,  servingLabel:"1 waffle",             countable:{ unitName:"waffle",     gramsEach:75   } },
  "waffle whole wheat":           { name:"Whole Wheat Waffle",                 category:"Bread", unit:"g", base:100, cal:265, prot:9,   carb:38,  fat:10,  servingSize:75,  servingLabel:"1 waffle",             countable:{ unitName:"waffle",     gramsEach:75   } },
  "waffle belgian":               { name:"Belgian Waffle (thick, fluffy)",     category:"Bread", unit:"g", base:100, cal:320, prot:7.5, carb:40,  fat:15,  servingSize:130, servingLabel:"1 waffle",             countable:{ unitName:"waffle",     gramsEach:130  } },
  "french toast":                 { name:"French Toast",                       category:"Bread", unit:"g", base:100, cal:229, prot:8,   carb:26,  fat:10,  servingSize:65,  servingLabel:"1 slice",              countable:{ unitName:"slice",      gramsEach:65   } },
  "french toast stuffed":         { name:"Stuffed French Toast (cream cheese)",category:"Bread", unit:"g", base:100, cal:310, prot:8.5, carb:35,  fat:15,  servingSize:100, servingLabel:"1 piece",              countable:{ unitName:"piece",      gramsEach:100  } },
  "crepe plain":                  { name:"Crepe (plain, thin)",                category:"Bread", unit:"g", base:100, cal:200, prot:6.5, carb:27,  fat:7.5, servingSize:50,  servingLabel:"1 crepe",              countable:{ unitName:"crepe",      gramsEach:50   } },
  "crepe sweet":                  { name:"Crepe (sweet, Nutella/jam filled)",  category:"Bread", unit:"g", base:100, cal:280, prot:5.5, carb:41,  fat:11,  servingSize:80,  servingLabel:"1 crepe",              countable:{ unitName:"crepe",      gramsEach:80   } },
  "dosa plain crepe style":       { name:"Rice Crepe / Thin Dosa (crispy)",    category:"Bread", unit:"g", base:100, cal:168, prot:3.9, carb:32,  fat:2.6, servingSize:60,  servingLabel:"1 dosa",               countable:{ unitName:"dosa",       gramsEach:60   } },

  /* ── Savoury Pastries & Pies ───────────────────────── */
  "empanada":                     { name:"Empanada (baked, meat)",             category:"Bread", unit:"g", base:100, cal:298, prot:10,  carb:32,  fat:15,  servingSize:90,  servingLabel:"1 empanada",           countable:{ unitName:"empanada",   gramsEach:90   } },
  "samosa pastry":                { name:"Samosa Pastry (shell only)",         category:"Bread", unit:"g", base:100, cal:390, prot:7,   carb:56,  fat:16,  servingSize:30,  servingLabel:"1 shell" },
  "phyllo pastry dough":          { name:"Phyllo / Filo Dough (baked sheet)",  category:"Bread", unit:"g", base:100, cal:385, prot:9,   carb:61,  fat:12,  servingSize:20,  servingLabel:"2 sheets" },
  "puff pastry sheet":            { name:"Puff Pastry (baked)",                category:"Bread", unit:"g", base:100, cal:558, prot:6.3, carb:45,  fat:40,  servingSize:30,  servingLabel:"1 pastry square" },
  "vol au vent":                  { name:"Vol-au-Vent Pastry Shell",           category:"Bread", unit:"g", base:100, cal:540, prot:7,   carb:42,  fat:39,  servingSize:20,  servingLabel:"1 small shell",        countable:{ unitName:"shell",      gramsEach:20   } },
  "sausage roll":                 { name:"Sausage Roll",                       category:"Bread", unit:"g", base:100, cal:328, prot:10,  carb:25,  fat:21,  servingSize:60,  servingLabel:"1 roll",               countable:{ unitName:"roll",       gramsEach:60   } },
  "cheese straw":                 { name:"Cheese Straw",                       category:"Bread", unit:"g", base:100, cal:480, prot:12,  carb:40,  fat:31,  servingSize:15,  servingLabel:"1 straw",              countable:{ unitName:"straw",      gramsEach:15   } },
  "quiche slice":                 { name:"Quiche (cheese & bacon slice)",      category:"Bread", unit:"g", base:100, cal:290, prot:10,  carb:18,  fat:20,  servingSize:100, servingLabel:"1 slice",              countable:{ unitName:"slice",      gramsEach:100  } },
  "pie crust baked":              { name:"Pie Crust / Pastry Shell (baked)",   category:"Bread", unit:"g", base:100, cal:444, prot:5.7, carb:44,  fat:28,  servingSize:23,  servingLabel:"1 slice (shell)" },
  "spanakopita":                  { name:"Spanakopita (spinach & feta pie)",   category:"Bread", unit:"g", base:100, cal:280, prot:8,   carb:22,  fat:18,  servingSize:80,  servingLabel:"1 piece",              countable:{ unitName:"piece",      gramsEach:80   } },
  "cheese and onion pasty":       { name:"Cheese & Onion Pasty",               category:"Bread", unit:"g", base:100, cal:290, prot:8,   carb:30,  fat:16,  servingSize:150, servingLabel:"1 pasty",              countable:{ unitName:"pasty",      gramsEach:150  } },
  "cornish pasty":                { name:"Cornish Pasty (meat & veg)",         category:"Bread", unit:"g", base:100, cal:295, prot:10,  carb:29,  fat:16,  servingSize:150, servingLabel:"1 pasty",              countable:{ unitName:"pasty",      gramsEach:150  } },
  "pao bun":                     { name:"Pao / Dinner Bun (soft, Indian style)", category:"Bread", unit:"g", base:100, cal:270, prot:8,  carb:50,  fat:4,   servingSize:40,  servingLabel:"1 pao",               countable:{ unitName:"pao",        gramsEach:40   } },
  "bao steamed bun":              { name:"Bao / Steamed Bun (plain)",          category:"Bread", unit:"g", base:100, cal:230, prot:6.5, carb:43,  fat:3.5, servingSize:75,  servingLabel:"1 bao",                countable:{ unitName:"bao",        gramsEach:75   } },
  "char siu bao":                 { name:"Char Siu Bao (BBQ pork steamed bun)",category:"Bread", unit:"g", base:100, cal:250, prot:10,  carb:40,  fat:5.5, servingSize:75,  servingLabel:"1 bao",                countable:{ unitName:"bao",        gramsEach:75   } },















/* ══════════════════════════════════════════════════════
     🥞  INDIAN BREAKFAST — COMPLETE SECTION
  ══════════════════════════════════════════════════════ */

  /* ── Idli Varieties ────────────────────────────────── */
  "idli plain":                   { name:"Idli (plain, steamed)",              category:"Indian Breakfast", unit:"g", base:100, cal:58,  prot:2,   carb:12,  fat:0.4, servingSize:45,  servingLabel:"1 idli",               countable:{ unitName:"idli",       gramsEach:45  } },
  "idli mini":                    { name:"Mini Idli",                          category:"Indian Breakfast", unit:"g", base:100, cal:58,  prot:2,   carb:12,  fat:0.4, servingSize:15,  servingLabel:"1 mini idli",          countable:{ unitName:"idli",       gramsEach:15  } },
  "idli rava":                    { name:"Rava / Semolina Idli",               category:"Indian Breakfast", unit:"g", base:100, cal:148, prot:4.5, carb:25,  fat:4,   servingSize:60,  servingLabel:"1 rava idli",          countable:{ unitName:"idli",       gramsEach:60  } },
  "idli thatte":                  { name:"Thatte Idli (plate idli, Karnataka)",category:"Indian Breakfast", unit:"g", base:100, cal:62,  prot:2.1, carb:13,  fat:0.5, servingSize:90,  servingLabel:"1 thatte idli",        countable:{ unitName:"idli",       gramsEach:90  } },
  "idli mallige":                 { name:"Mallige Idli (soft Bangalore style)",category:"Indian Breakfast", unit:"g", base:100, cal:58,  prot:2,   carb:12,  fat:0.4, servingSize:50,  servingLabel:"1 mallige idli",       countable:{ unitName:"idli",       gramsEach:50  } },
  "idli kanchipuram":             { name:"Kanchipuram Idli (spiced with cumin+pepper)", category:"Indian Breakfast", unit:"g", base:100, cal:75, prot:2.5, carb:13,  fat:1.8, servingSize:60,  servingLabel:"1 idli",               countable:{ unitName:"idli",       gramsEach:60  } },
  "idli stuffed":                 { name:"Stuffed Idli (with chutney filling)",category:"Indian Breakfast", unit:"g", base:100, cal:90,  prot:3,   carb:16,  fat:2,   servingSize:60,  servingLabel:"1 idli",               countable:{ unitName:"idli",       gramsEach:60  } },
  "idli sambar":                  { name:"Idli with Sambar (2 idli + sambar)", category:"Indian Breakfast", unit:"g", base:100, cal:68,  prot:3,   carb:13,  fat:0.8, servingSize:200, servingLabel:"2 idli + 1 cup sambar",countable:{ unitName:"idli",       gramsEach:45  } },
  "idiyappam":                    { name:"Idiyappam / String Hoppers",         category:"Indian Breakfast", unit:"g", base:100, cal:155, prot:3,   carb:34,  fat:0.5, servingSize:70,  servingLabel:"1 piece",              countable:{ unitName:"piece",      gramsEach:70  } },

  /* ── Dosa Varieties ────────────────────────────────── */
  "dosa plain":                   { name:"Plain Dosa (crispy, thin)",          category:"Indian Breakfast", unit:"g", base:100, cal:168, prot:3.9, carb:32,  fat:2.6, servingSize:80,  servingLabel:"1 dosa",               countable:{ unitName:"dosa",       gramsEach:80  } },
  "dosa masala":                  { name:"Masala Dosa (with potato filling)",  category:"Indian Breakfast", unit:"g", base:100, cal:162, prot:4,   carb:27,  fat:4.5, servingSize:160, servingLabel:"1 masala dosa",        countable:{ unitName:"dosa",       gramsEach:160 } },
  "dosa rava":                    { name:"Rava / Sooji Dosa",                  category:"Indian Breakfast", unit:"g", base:100, cal:190, prot:4.5, carb:29,  fat:6.5, servingSize:80,  servingLabel:"1 rava dosa",          countable:{ unitName:"dosa",       gramsEach:80  } },
  "dosa neer":                    { name:"Neer Dosa (thin rice crepe, Karnataka)", category:"Indian Breakfast", unit:"g", base:100, cal:107, prot:2.5, carb:22, fat:1,   servingSize:60,  servingLabel:"1 dosa",               countable:{ unitName:"dosa",       gramsEach:60  } },
  "dosa set":                     { name:"Set Dosa (thick, spongy, Karnataka)",category:"Indian Breakfast", unit:"g", base:100, cal:145, prot:3.8, carb:28,  fat:2.5, servingSize:60,  servingLabel:"1 dosa",               countable:{ unitName:"dosa",       gramsEach:60  } },
  "dosa pesarattu":               { name:"Pesarattu (green moong dosa, Andhra)",category:"Indian Breakfast", unit:"g", base:100, cal:195, prot:8,  carb:32,  fat:4.5, servingSize:80,  servingLabel:"1 pesarattu",          countable:{ unitName:"pesarattu",  gramsEach:80  } },
  "dosa adai":                    { name:"Adai (mixed dal + rice dosa)",       category:"Indian Breakfast", unit:"g", base:100, cal:195, prot:8,   carb:30,  fat:5,   servingSize:80,  servingLabel:"1 adai",               countable:{ unitName:"adai",       gramsEach:80  } },
  "dosa onion":                   { name:"Onion Dosa",                         category:"Indian Breakfast", unit:"g", base:100, cal:175, prot:4,   carb:30,  fat:4,   servingSize:90,  servingLabel:"1 dosa",               countable:{ unitName:"dosa",       gramsEach:90  } },
  "dosa ghee":                    { name:"Ghee / Butter Dosa",                 category:"Indian Breakfast", unit:"g", base:100, cal:215, prot:3.8, carb:28,  fat:9,   servingSize:90,  servingLabel:"1 dosa",               countable:{ unitName:"dosa",       gramsEach:90  } },
  "dosa egg":                     { name:"Egg Dosa",                           category:"Indian Breakfast", unit:"g", base:100, cal:195, prot:7,   carb:26,  fat:7,   servingSize:120, servingLabel:"1 dosa",               countable:{ unitName:"dosa",       gramsEach:120 } },
  "dosa cheese":                  { name:"Cheese Dosa",                        category:"Indian Breakfast", unit:"g", base:100, cal:230, prot:7,   carb:28,  fat:10,  servingSize:110, servingLabel:"1 dosa",               countable:{ unitName:"dosa",       gramsEach:110 } },
  "dosa podi":                    { name:"Podi Dosa (with gunpowder chutney)", category:"Indian Breakfast", unit:"g", base:100, cal:200, prot:4.5, carb:30,  fat:6,   servingSize:85,  servingLabel:"1 dosa",               countable:{ unitName:"dosa",       gramsEach:85  } },
  "dosa mysore masala":           { name:"Mysore Masala Dosa (with red chutney)", category:"Indian Breakfast", unit:"g", base:100, cal:185, prot:4.5, carb:29, fat:6,   servingSize:170, servingLabel:"1 dosa",               countable:{ unitName:"dosa",       gramsEach:170 } },
  "dosa spring":                  { name:"Spring Dosa (paper thin crispy)",    category:"Indian Breakfast", unit:"g", base:100, cal:155, prot:3.5, carb:31,  fat:2,   servingSize:60,  servingLabel:"1 dosa",               countable:{ unitName:"dosa",       gramsEach:60  } },
  "dosa uthappam":                { name:"Uttapam (thick dosa with onion/tomato)", category:"Indian Breakfast", unit:"g", base:100, cal:107, prot:3.5, carb:18, fat:2.5, servingSize:120, servingLabel:"1 uttapam",            countable:{ unitName:"uttapam",    gramsEach:120 } },
  "dosa kuzhi paniyaram":         { name:"Kuzhi Paniyaram (paddu, Karnataka)", category:"Indian Breakfast", unit:"g", base:100, cal:185, prot:4.5, carb:31,  fat:5,   servingSize:25,  servingLabel:"1 piece",              countable:{ unitName:"paniyaram",  gramsEach:25  } },

  /* ── Appam & Hoppers ───────────────────────────────── */
  "appam plain":                  { name:"Appam (plain, fermented rice hopper)", category:"Indian Breakfast", unit:"g", base:100, cal:156, prot:3.5, carb:32, fat:1.5, servingSize:70,  servingLabel:"1 appam",              countable:{ unitName:"appam",      gramsEach:70  } },
  "appam egg":                    { name:"Egg Appam / Mutta Appam",            category:"Indian Breakfast", unit:"g", base:100, cal:190, prot:7,   carb:26,  fat:6,   servingSize:90,  servingLabel:"1 appam",              countable:{ unitName:"appam",      gramsEach:90  } },
  "appam coconut milk":           { name:"Appam with Coconut Milk (stew)",     category:"Indian Breakfast", unit:"g", base:100, cal:145, prot:3.5, carb:25,  fat:4,   servingSize:180, servingLabel:"1 appam + milk" },
  "palappam":                     { name:"Palappam (Kerala rice hoppers)",     category:"Indian Breakfast", unit:"g", base:100, cal:160, prot:3.5, carb:33,  fat:1.8, servingSize:75,  servingLabel:"1 appam",              countable:{ unitName:"appam",      gramsEach:75  } },
  "vellayappam":                  { name:"Vellayappam (white hoppers)",        category:"Indian Breakfast", unit:"g", base:100, cal:148, prot:3,   carb:31,  fat:1.5, servingSize:65,  servingLabel:"1 piece",              countable:{ unitName:"piece",      gramsEach:65  } },

  /* ── Upma Varieties ────────────────────────────────── */
  "upma rava plain":              { name:"Rava / Sooji Upma (plain)",          category:"Indian Breakfast", unit:"g", base:100, cal:158, prot:3.5, carb:27,  fat:4.5, servingSize:200, servingLabel:"1 bowl" },
  "upma rava vegetable":          { name:"Vegetable Upma",                     category:"Indian Breakfast", unit:"g", base:100, cal:165, prot:4,   carb:27,  fat:5,   servingSize:200, servingLabel:"1 bowl" },
  "upma vermicelli":              { name:"Vermicelli / Semiya Upma",           category:"Indian Breakfast", unit:"g", base:100, cal:170, prot:4,   carb:31,  fat:4,   servingSize:200, servingLabel:"1 bowl" },
  "upma bread":                   { name:"Bread Upma",                         category:"Indian Breakfast", unit:"g", base:100, cal:205, prot:6,   carb:32,  fat:6.5, servingSize:200, servingLabel:"1 bowl" },
  "upma oats":                    { name:"Oats Upma",                          category:"Indian Breakfast", unit:"g", base:100, cal:140, prot:5.5, carb:22,  fat:4,   servingSize:200, servingLabel:"1 bowl" },
  "upma quinoa":                  { name:"Quinoa Upma",                        category:"Indian Breakfast", unit:"g", base:100, cal:148, prot:5,   carb:24,  fat:4.5, servingSize:200, servingLabel:"1 bowl" },
  "upma rice rava":               { name:"Rice Rava Upma / Akki Thari Upma",  category:"Indian Breakfast", unit:"g", base:100, cal:155, prot:3,   carb:28,  fat:4,   servingSize:200, servingLabel:"1 bowl" },

  /* ── Poha Varieties ────────────────────────────────── */
  "poha kanda plain":             { name:"Kanda Poha (onion poha)",            category:"Indian Breakfast", unit:"g", base:100, cal:185, prot:3.5, carb:36,  fat:4,   servingSize:200, servingLabel:"1 bowl" },
  "poha batata":                  { name:"Batata / Aloo Poha (potato + onion)",category:"Indian Breakfast", unit:"g", base:100, cal:195, prot:3.5, carb:37,  fat:4.5, servingSize:200, servingLabel:"1 bowl" },
  "poha dadpe":                   { name:"Dadpe Poha (raw, coconut + onion)",  category:"Indian Breakfast", unit:"g", base:100, cal:165, prot:3,   carb:33,  fat:3,   servingSize:150, servingLabel:"1 bowl" },
  "poha indori":                  { name:"Indori Poha (with sev + fennel)",    category:"Indian Breakfast", unit:"g", base:100, cal:210, prot:4,   carb:38,  fat:5.5, servingSize:200, servingLabel:"1 bowl" },
  "poha gojjaval":                { name:"Gojjavalakki (Kannada tamarind poha)",category:"Indian Breakfast", unit:"g", base:100, cal:175, prot:3,   carb:35,  fat:3.5, servingSize:150, servingLabel:"1 bowl" },
  "poha egg":                     { name:"Egg Poha",                           category:"Indian Breakfast", unit:"g", base:100, cal:205, prot:7.5, carb:32,  fat:6,   servingSize:200, servingLabel:"1 bowl" },
  "aval upma":                    { name:"Aval / Poha Upma (Kerala style)",    category:"Indian Breakfast", unit:"g", base:100, cal:175, prot:3,   carb:32,  fat:4,   servingSize:200, servingLabel:"1 bowl" },

  /* ── Pongal Varieties ──────────────────────────────── */
  "ven pongal":                   { name:"Ven Pongal (savoury rice + dal)",    category:"Indian Breakfast", unit:"g", base:100, cal:162, prot:5,   carb:28,  fat:4.5, servingSize:200, servingLabel:"1 bowl" },
  "ven pongal ghee":              { name:"Ven Pongal (with extra ghee)",       category:"Indian Breakfast", unit:"g", base:100, cal:185, prot:5.5, carb:28,  fat:7,   servingSize:200, servingLabel:"1 bowl" },
  "sakkarai pongal":              { name:"Sakkarai / Sweet Pongal (jaggery)",  category:"Indian Breakfast", unit:"g", base:100, cal:200, prot:3.5, carb:40,  fat:4.5, servingSize:150, servingLabel:"1 bowl" },
  "pongal oats":                  { name:"Oats Pongal",                        category:"Indian Breakfast", unit:"g", base:100, cal:145, prot:5,   carb:24,  fat:4,   servingSize:200, servingLabel:"1 bowl" },

  /* ── Vada Varieties ────────────────────────────────── */
  "vada medu":                    { name:"Medu Vada (urad dal, fried)",        category:"Indian Breakfast", unit:"g", base:100, cal:322, prot:9,   carb:40,  fat:14,  servingSize:60,  servingLabel:"1 vada",               countable:{ unitName:"vada",       gramsEach:60  } },
  "vada dahi":                    { name:"Dahi Vada (in yogurt)",              category:"Indian Breakfast", unit:"g", base:100, cal:165, prot:6,   carb:22,  fat:6,   servingSize:80,  servingLabel:"1 piece",              countable:{ unitName:"vada",       gramsEach:80  } },
  "vada sambar":                  { name:"Sambar Vada (soaked in sambar)",     category:"Indian Breakfast", unit:"g", base:100, cal:155, prot:6,   carb:22,  fat:5,   servingSize:120, servingLabel:"1 vada + sambar",      countable:{ unitName:"vada",       gramsEach:60  } },
  "vada masala":                  { name:"Masala Vada / Paruppu Vada (chana dal)", category:"Indian Breakfast", unit:"g", base:100, cal:315, prot:10, carb:36, fat:14,  servingSize:45,  servingLabel:"1 vada",               countable:{ unitName:"vada",       gramsEach:45  } },
  "vada aloo tikki":              { name:"Aloo Tikki (potato patty)",          category:"Indian Breakfast", unit:"g", base:100, cal:195, prot:4,   carb:28,  fat:8,   servingSize:60,  servingLabel:"1 tikki",              countable:{ unitName:"tikki",      gramsEach:60  } },
  "vada sabudana":                { name:"Sabudana Vada (sago patty)",         category:"Indian Breakfast", unit:"g", base:100, cal:290, prot:5,   carb:42,  fat:11,  servingSize:50,  servingLabel:"1 vada",               countable:{ unitName:"vada",       gramsEach:50  } },
  "vada palak":                   { name:"Palak / Spinach Vada",               category:"Indian Breakfast", unit:"g", base:100, cal:270, prot:7.5, carb:35,  fat:11,  servingSize:45,  servingLabel:"1 vada",               countable:{ unitName:"vada",       gramsEach:45  } },

  /* ── Puttu ─────────────────────────────────────────── */
  "puttu rice":                   { name:"Rice Puttu (steamed rice cylinders)",category:"Indian Breakfast", unit:"g", base:100, cal:175, prot:3.7, carb:38,  fat:0.5, servingSize:100, servingLabel:"1 cylinder" },
  "puttu ragi":                   { name:"Ragi Puttu",                         category:"Indian Breakfast", unit:"g", base:100, cal:165, prot:3.5, carb:36,  fat:0.5, servingSize:100, servingLabel:"1 serving" },
  "puttu wheat":                  { name:"Wheat Puttu",                        category:"Indian Breakfast", unit:"g", base:100, cal:180, prot:5,   carb:37,  fat:1,   servingSize:100, servingLabel:"1 serving" },
  "puttu corn":                   { name:"Corn / Maize Puttu",                 category:"Indian Breakfast", unit:"g", base:100, cal:170, prot:3.5, carb:36,  fat:0.8, servingSize:100, servingLabel:"1 serving" },
  "puttu kadala curry":           { name:"Puttu + Kadala Curry (full plate)",  category:"Indian Breakfast", unit:"g", base:100, cal:165, prot:6,   carb:28,  fat:4,   servingSize:250, servingLabel:"1 plate" },

  /* ── Porridge & Kanji ──────────────────────────────── */
  "porridge rice kanji":          { name:"Rice Kanji / Rice Porridge (plain)",category:"Indian Breakfast", unit:"g", base:100, cal:55,  prot:1.2, carb:12,  fat:0.2, servingSize:300, servingLabel:"1 large bowl" },
  "porridge ragi":                { name:"Ragi / Finger Millet Porridge",      category:"Indian Breakfast", unit:"g", base:100, cal:72,  prot:2,   carb:15,  fat:0.5, servingSize:200, servingLabel:"1 bowl" },
  "porridge daliya":              { name:"Daliya / Broken Wheat Porridge",     category:"Indian Breakfast", unit:"g", base:100, cal:149, prot:4.5, carb:30,  fat:1.5, servingSize:200, servingLabel:"1 bowl" },
  "porridge oats masala":         { name:"Masala Oats (savoury)",              category:"Indian Breakfast", unit:"g", base:100, cal:130, prot:5,   carb:22,  fat:3.5, servingSize:200, servingLabel:"1 bowl" },
  "porridge oats sweet":          { name:"Sweet Oats (milk + banana + honey)", category:"Indian Breakfast", unit:"g", base:100, cal:160, prot:5,   carb:27,  fat:4.5, servingSize:200, servingLabel:"1 bowl" },
  "kambu koozh":                  { name:"Kambu / Bajra Koozh (fermented millet porridge)", category:"Indian Breakfast", unit:"g", base:100, cal:68, prot:2,  carb:14,  fat:0.5, servingSize:300, servingLabel:"1 glass/bowl" },
  "sattu porridge":               { name:"Sattu Porridge / Sattu Churma",      category:"Indian Breakfast", unit:"g", base:100, cal:378, prot:22,  carb:60,  fat:6,   servingSize:30,  servingLabel:"2 tbsp powder" },
  "tharavu kanji":                { name:"Tharavu Kanji (duck egg porridge, Kerala)", category:"Indian Breakfast", unit:"g", base:100, cal:85, prot:4.5, carb:11,  fat:3,   servingSize:250, servingLabel:"1 bowl" },
  "rice congee":                  { name:"Rice Congee / Juk (South Indian style)", category:"Indian Breakfast", unit:"g", base:100, cal:50,  prot:1.2, carb:11,  fat:0.2, servingSize:300, servingLabel:"1 bowl" },

  /* ── Sabudana Dishes ───────────────────────────────── */
  "sabudana khichdi":             { name:"Sabudana Khichdi",                   category:"Indian Breakfast", unit:"g", base:100, cal:190, prot:3,   carb:37,  fat:5,   servingSize:200, servingLabel:"1 bowl" },
  "sabudana kheer":               { name:"Sabudana Kheer",                     category:"Indian Breakfast", unit:"g", base:100, cal:165, prot:3.5, carb:31,  fat:4,   servingSize:150, servingLabel:"1 bowl" },
  "sabudana thalipeeth":          { name:"Sabudana Thalipeeth",                category:"Indian Breakfast", unit:"g", base:100, cal:260, prot:5,   carb:45,  fat:7,   servingSize:80,  servingLabel:"1 piece",              countable:{ unitName:"piece",      gramsEach:80  } },

  /* ── Egg Dishes (Indian Style) ─────────────────────── */
  "omelette plain":               { name:"Plain Omelette",                     category:"Indian Breakfast", unit:"g", base:100, cal:154, prot:11,  carb:0.6, fat:12,  servingSize:100, servingLabel:"2-egg omelette",       countable:{ unitName:"omelette",   gramsEach:100 } },
  "omelette masala":              { name:"Masala Omelette (onion+tomato+chilli)", category:"Indian Breakfast", unit:"g", base:100, cal:165, prot:10.5, carb:3, fat:12,  servingSize:110, servingLabel:"2-egg omelette",       countable:{ unitName:"omelette",   gramsEach:110 } },
  "omelette tomato":              { name:"Tomato Omelette",                    category:"Indian Breakfast", unit:"g", base:100, cal:160, prot:10,  carb:4,   fat:11,  servingSize:100, servingLabel:"1 omelette",           countable:{ unitName:"omelette",   gramsEach:100 } },
  "omelette cheese":              { name:"Cheese Omelette",                    category:"Indian Breakfast", unit:"g", base:100, cal:210, prot:13,  carb:1.5, fat:17,  servingSize:110, servingLabel:"1 omelette",           countable:{ unitName:"omelette",   gramsEach:110 } },
  "egg bhurji":                   { name:"Egg Bhurji (Indian scrambled eggs)", category:"Indian Breakfast", unit:"g", base:100, cal:175, prot:12,  carb:4,   fat:12,  servingSize:120, servingLabel:"1 serving" },
  "egg bhurji pav":               { name:"Egg Bhurji + Pav",                  category:"Indian Breakfast", unit:"g", base:100, cal:220, prot:10,  carb:25,  fat:9,   servingSize:200, servingLabel:"1 plate" },
  "anda paratha":                 { name:"Anda / Egg Paratha",                 category:"Indian Breakfast", unit:"g", base:100, cal:250, prot:9.5, carb:32,  fat:10,  servingSize:100, servingLabel:"1 paratha",            countable:{ unitName:"paratha",    gramsEach:100 } },
  "egg dosa":                     { name:"Egg Dosa",                           category:"Indian Breakfast", unit:"g", base:100, cal:195, prot:7,   carb:26,  fat:7,   servingSize:120, servingLabel:"1 dosa",               countable:{ unitName:"dosa",       gramsEach:120 } },
  "boiled egg indian style":      { name:"Boiled Egg (spiced with masala)",    category:"Indian Breakfast", unit:"g", base:100, cal:85,  prot:6.5, carb:1.5, fat:5.5, servingSize:50,  servingLabel:"1 egg",                countable:{ unitName:"egg",        gramsEach:50  } },

  /* ── Halwa Varieties ───────────────────────────────── */
  "halwa sooji sheera":           { name:"Sooji / Semolina Halwa (Sheera)",    category:"Indian Breakfast", unit:"g", base:100, cal:260, prot:4,   carb:45,  fat:8,   servingSize:100, servingLabel:"1 cup" },
  "halwa atta":                   { name:"Atta / Wheat Flour Halwa",           category:"Indian Breakfast", unit:"g", base:100, cal:370, prot:5,   carb:55,  fat:15,  servingSize:80,  servingLabel:"1 serving" },
  "halwa banana":                 { name:"Banana Halwa",                       category:"Indian Breakfast", unit:"g", base:100, cal:255, prot:2.5, carb:45,  fat:8,   servingSize:80,  servingLabel:"1 serving" },
  "halwa moong dal":              { name:"Moong Dal Halwa",                    category:"Indian Breakfast", unit:"g", base:100, cal:295, prot:7,   carb:42,  fat:11,  servingSize:80,  servingLabel:"1 serving" },
  "halwa bread":                  { name:"Bread Halwa",                        category:"Indian Breakfast", unit:"g", base:100, cal:310, prot:5,   carb:48,  fat:11,  servingSize:80,  servingLabel:"1 serving" },

  /* ── Poori & Accompaniments ────────────────────────── */
  "poori bhaji":                  { name:"Poori + Bhaji (aloo bhaji)",         category:"Indian Breakfast", unit:"g", base:100, cal:250, prot:5,   carb:33,  fat:11,  servingSize:200, servingLabel:"2 pooris + bhaji",     countable:{ unitName:"poori",      gramsEach:30  } },
  "poori aloo":                   { name:"Poori + Aloo Sabzi",                 category:"Indian Breakfast", unit:"g", base:100, cal:245, prot:4.5, carb:33,  fat:11,  servingSize:200, servingLabel:"2 pooris + sabzi",     countable:{ unitName:"poori",      gramsEach:30  } },
  "poori halwa":                  { name:"Poori + Halwa + Chana (Kanpur/UP style)", category:"Indian Breakfast", unit:"g", base:100, cal:300, prot:6, carb:42,  fat:13,  servingSize:250, servingLabel:"2 pooris + sides" },
  "chole bhatura":                { name:"Chole Bhatura",                      category:"Indian Breakfast", unit:"g", base:100, cal:280, prot:8,   carb:37,  fat:12,  servingSize:300, servingLabel:"2 bhaturas + chole",   countable:{ unitName:"bhatura",    gramsEach:80  } },

  /* ── South Indian Breakfast Specials ───────────────── */
  "bisibelebath":                 { name:"Bisibele Bath (Karnataka rice+dal+veg)", category:"Indian Breakfast", unit:"g", base:100, cal:145, prot:5, carb:26,  fat:3.5, servingSize:250, servingLabel:"1 bowl" },
  "pongal full plate":            { name:"Ven Pongal + Sambar + Chutney (full plate)", category:"Indian Breakfast", unit:"g", base:100, cal:140, prot:4.5, carb:24, fat:4, servingSize:350, servingLabel:"1 full plate" },
  "idli full plate":              { name:"Idli Plate (4 idli + sambar + 2 chutneys)", category:"Indian Breakfast", unit:"g", base:100, cal:75, prot:3, carb:14, fat:1.5, servingSize:380, servingLabel:"1 full plate" },
  "dosa full plate":              { name:"Dosa + Sambar + Chutney (full plate)", category:"Indian Breakfast", unit:"g", base:100, cal:130, prot:4, carb:23,  fat:3,   servingSize:300, servingLabel:"1 full plate" },
  "mini tiffin":                  { name:"Mini Tiffin (2 idli + 1 vada + sambar)", category:"Indian Breakfast", unit:"g", base:100, cal:135, prot:5, carb:20,  fat:4.5, servingSize:250, servingLabel:"1 plate" },
  "thayir sadam":                 { name:"Thayir Sadam / Curd Rice",           category:"Indian Breakfast", unit:"g", base:100, cal:100, prot:3.5, carb:18,  fat:2,   servingSize:200, servingLabel:"1 cup" },
  "lemon rice":                   { name:"Lemon Rice (Chitranna / Elumichai Sadam)", category:"Indian Breakfast", unit:"g", base:100, cal:160, prot:3.5, carb:30, fat:4, servingSize:200, servingLabel:"1 cup" },
  "avial":                        { name:"Avial (mixed veg in coconut)",       category:"Indian Breakfast", unit:"g", base:100, cal:120, prot:3,   carb:12,  fat:7,   servingSize:150, servingLabel:"1 serving" },

  /* ── North Indian Breakfast Specials ───────────────── */
  "paratha aloo full":            { name:"Aloo Paratha + Curd + Pickle",       category:"Indian Breakfast", unit:"g", base:100, cal:220, prot:5.5, carb:33,  fat:8.5, servingSize:250, servingLabel:"1 full serving",       countable:{ unitName:"paratha",    gramsEach:100 } },
  "paratha gobhi full":           { name:"Gobi Paratha + Curd + Pickle",       category:"Indian Breakfast", unit:"g", base:100, cal:225, prot:6,   carb:32,  fat:9,   servingSize:250, servingLabel:"1 full serving",       countable:{ unitName:"paratha",    gramsEach:100 } },
  "puri aloo full":               { name:"Puri + Aloo Sabzi (North Indian)",   category:"Indian Breakfast", unit:"g", base:100, cal:250, prot:5,   carb:33,  fat:11,  servingSize:200, servingLabel:"2 puris + sabzi" },
  "kachori aloo":                 { name:"Kachori + Aloo Sabzi",               category:"Indian Breakfast", unit:"g", base:100, cal:320, prot:6,   carb:42,  fat:14,  servingSize:150, servingLabel:"1 kachori + sabzi",    countable:{ unitName:"kachori",    gramsEach:60  } },
  "bedmi poori":                  { name:"Bedmi Poori (urad dal stuffed)",     category:"Indian Breakfast", unit:"g", base:100, cal:370, prot:9,   carb:46,  fat:17,  servingSize:40,  servingLabel:"1 bedmi",              countable:{ unitName:"bedmi",      gramsEach:40  } },
  "makki roti sarson saag":       { name:"Makki Roti + Sarson da Saag",        category:"Indian Breakfast", unit:"g", base:100, cal:160, prot:5,   carb:26,  fat:5,   servingSize:250, servingLabel:"1 roti + saag",        countable:{ unitName:"roti",       gramsEach:60  } },
  "missi roti achar":             { name:"Missi Roti + Pickle + Curd",         category:"Indian Breakfast", unit:"g", base:100, cal:270, prot:11,  carb:43,  fat:7,   servingSize:150, servingLabel:"1 roti + sides",       countable:{ unitName:"roti",       gramsEach:45  } },

  /* ── Gujarati & Western India Breakfast ────────────── */
  "thepla curd":                  { name:"Thepla + Curd (Gujarati breakfast)", category:"Indian Breakfast", unit:"g", base:100, cal:285, prot:8.5, carb:41,  fat:9.5, servingSize:150, servingLabel:"2 thepla + curd",      countable:{ unitName:"thepla",     gramsEach:45  } },
  "dhokla khaman":                { name:"Khaman Dhokla",                      category:"Indian Breakfast", unit:"g", base:100, cal:160, prot:6,   carb:27,  fat:3.5, servingSize:60,  servingLabel:"1 piece",              countable:{ unitName:"piece",      gramsEach:60  } },
  "sev khamani":                  { name:"Sev Khamani (crumbled dhokla)",      category:"Indian Breakfast", unit:"g", base:100, cal:195, prot:7,   carb:30,  fat:6,   servingSize:150, servingLabel:"1 serving" },
  "fafda jalebi":                 { name:"Fafda + Jalebi (Gujarat combo)",     category:"Indian Breakfast", unit:"g", base:100, cal:420, prot:6,   carb:60,  fat:18,  servingSize:80,  servingLabel:"1 portion" },
  "khakra tea":                   { name:"Khakra + Tea (Gujarati morning)",    category:"Indian Breakfast", unit:"g", base:100, cal:395, prot:10,  carb:70,  fat:9,   servingSize:40,  servingLabel:"2 khakra" },
  "handvo slice":                 { name:"Handvo (baked lentil cake)",         category:"Indian Breakfast", unit:"g", base:100, cal:230, prot:7,   carb:35,  fat:7,   servingSize:80,  servingLabel:"1 slice",              countable:{ unitName:"slice",      gramsEach:80  } },
  "khandvi":                      { name:"Khandvi (besan rolls)",              category:"Indian Breakfast", unit:"g", base:100, cal:155, prot:6,   carb:22,  fat:5,   servingSize:15,  servingLabel:"1 roll",               countable:{ unitName:"roll",       gramsEach:15  } },
  "muthia steamed":               { name:"Steamed Muthia",                     category:"Indian Breakfast", unit:"g", base:100, cal:175, prot:5.5, carb:29,  fat:4,   servingSize:30,  servingLabel:"1 piece",              countable:{ unitName:"piece",      gramsEach:30  } },

  /* ── Maharashtra Breakfast ─────────────────────────── */
  "misal pav full":               { name:"Misal Pav (full plate)",             category:"Indian Breakfast", unit:"g", base:100, cal:180, prot:7,   carb:28,  fat:5,   servingSize:250, servingLabel:"1 plate" },
  "thalipeeth":                   { name:"Thalipeeth (multigrain flatbread)",  category:"Indian Breakfast", unit:"g", base:100, cal:260, prot:8,   carb:42,  fat:7.5, servingSize:80,  servingLabel:"1 piece",              countable:{ unitName:"piece",      gramsEach:80  } },
  "sabudana khichdi maharashtra": { name:"Sabudana Khichdi (Maharashtra style)",category:"Indian Breakfast", unit:"g", base:100, cal:190, prot:3,   carb:37,  fat:5,   servingSize:200, servingLabel:"1 bowl" },
  "upvas thali":                  { name:"Upvas / Fasting Thali (sabudana + fruit)", category:"Indian Breakfast", unit:"g", base:100, cal:185, prot:3, carb:36,  fat:4.5, servingSize:250, servingLabel:"1 plate" },

  /* ── Bengali & East India Breakfast ────────────────── */
  "luchi aloo dom":               { name:"Luchi + Aloo Dum (Bengal)",         category:"Indian Breakfast", unit:"g", base:100, cal:280, prot:5,   carb:38,  fat:12,  servingSize:200, servingLabel:"2 luchi + aloo dom",   countable:{ unitName:"luchi",      gramsEach:30  } },
  "radhaballabhi":                { name:"Radhaballabhi (dal stuffed puri)",   category:"Indian Breakfast", unit:"g", base:100, cal:350, prot:9,   carb:48,  fat:14,  servingSize:45,  servingLabel:"1 piece",              countable:{ unitName:"piece",      gramsEach:45  } },
  "muri breakfast":               { name:"Muri / Puffed Rice Breakfast Bowl", category:"Indian Breakfast", unit:"g", base:100, cal:195, prot:4,   carb:40,  fat:3,   servingSize:50,  servingLabel:"1 bowl" },
  "khichuri bengali":             { name:"Khichuri (Bengali rice + dal)",     category:"Indian Breakfast", unit:"g", base:100, cal:130, prot:5,   carb:24,  fat:2.5, servingSize:250, servingLabel:"1 bowl" },

  /* ── Accompaniments & Chutneys ─────────────────────── */
  "sambar":                       { name:"Sambar",                             category:"Indian Breakfast", unit:"g", base:100, cal:54,  prot:3,   carb:9,   fat:1.2, servingSize:200, servingLabel:"1 cup" },
  "sambar drumstick":             { name:"Drumstick Sambar",                   category:"Indian Breakfast", unit:"g", base:100, cal:58,  prot:3,   carb:9,   fat:1.5, servingSize:200, servingLabel:"1 cup" },
  "rasam":                        { name:"Rasam (thin tamarind broth)",        category:"Indian Breakfast", unit:"g", base:100, cal:20,  prot:0.8, carb:4,   fat:0.5, servingSize:200, servingLabel:"1 cup" },
  "coconut chutney":              { name:"Coconut Chutney",                    category:"Indian Breakfast", unit:"g", base:100, cal:185, prot:2,   carb:10,  fat:16,  servingSize:30,  servingLabel:"2 tbsp" },
  "tomato chutney":               { name:"Tomato Chutney",                     category:"Indian Breakfast", unit:"g", base:100, cal:85,  prot:1.5, carb:14,  fat:3,   servingSize:30,  servingLabel:"2 tbsp" },
  "green chutney mint":           { name:"Mint / Coriander Green Chutney",    category:"Indian Breakfast", unit:"g", base:100, cal:70,  prot:2,   carb:11,  fat:2,   servingSize:20,  servingLabel:"1 tbsp" },
  "podi gunpowder":               { name:"Idli / Dosa Podi (gunpowder)",       category:"Indian Breakfast", unit:"g", base:100, cal:385, prot:15,  carb:50,  fat:14,  servingSize:5,   servingLabel:"1 tsp" },
  "idli milagai podi":            { name:"Idli Milagai Podi (with sesame oil)",category:"Indian Breakfast", unit:"g", base:100, cal:440, prot:14,  carb:50,  fat:20,  servingSize:8,   servingLabel:"1 tsp podi + oil" },




















/* ══════════════════════════════════════════════════════
     🍛  INDIAN CURRIES & DALS — COMPLETE SECTION
  ══════════════════════════════════════════════════════ */

  /* ── Toor / Arhar Dal ──────────────────────────────── */
  "dal toor plain":               { name:"Toor / Arhar Dal (plain, cooked)",   category:"Indian Dal", unit:"g", base:100, cal:105, prot:7,   carb:18,  fat:0.4, servingSize:200, servingLabel:"1 cup" },
  "dal toor tadka":               { name:"Toor Dal Tadka (tempered)",          category:"Indian Dal", unit:"g", base:100, cal:120, prot:7,   carb:18,  fat:2.5, servingSize:200, servingLabel:"1 cup" },
  "dal toor fry":                 { name:"Toor Dal Fry (ghee + spices)",       category:"Indian Dal", unit:"g", base:100, cal:135, prot:7,   carb:18,  fat:4,   servingSize:200, servingLabel:"1 cup" },

  /* ── Moong Dal ─────────────────────────────────────── */
  "dal moong yellow cooked":      { name:"Yellow Moong Dal (cooked)",          category:"Indian Dal", unit:"g", base:100, cal:105, prot:7.5, carb:17,  fat:0.4, servingSize:200, servingLabel:"1 cup" },
  "dal moong green whole cooked": { name:"Whole Green Moong (cooked)",         category:"Indian Dal", unit:"g", base:100, cal:115, prot:7.5, carb:18,  fat:1.5, servingSize:200, servingLabel:"1 cup" },
  "dal moong tadka":              { name:"Moong Dal Tadka",                    category:"Indian Dal", unit:"g", base:100, cal:118, prot:7.5, carb:17,  fat:2.5, servingSize:200, servingLabel:"1 cup" },
  "dal moong khichdi":            { name:"Moong Dal Khichdi",                  category:"Indian Dal", unit:"g", base:100, cal:118, prot:4.5, carb:22,  fat:2,   servingSize:250, servingLabel:"1 bowl" },
  "dal moong cheela":             { name:"Moong Dal Cheela / Chilla",          category:"Indian Dal", unit:"g", base:100, cal:175, prot:8,   carb:24,  fat:5,   servingSize:60,  servingLabel:"1 cheela",   countable:{ unitName:"cheela",  gramsEach:60  } },

  /* ── Masoor Dal ────────────────────────────────────── */
  "dal masoor red cooked":        { name:"Red Masoor Dal (cooked)",            category:"Indian Dal", unit:"g", base:100, cal:116, prot:9,   carb:20,  fat:0.4, servingSize:200, servingLabel:"1 cup" },
  "dal masoor tadka":             { name:"Masoor Dal Tadka",                   category:"Indian Dal", unit:"g", base:100, cal:128, prot:9,   carb:20,  fat:2,   servingSize:200, servingLabel:"1 cup" },
  "dal masoor whole brown":       { name:"Whole Brown Masoor (cooked)",        category:"Indian Dal", unit:"g", base:100, cal:116, prot:9,   carb:20,  fat:0.4, servingSize:200, servingLabel:"1 cup" },

  /* ── Chana / Chickpea Dal ──────────────────────────── */
  "dal chana cooked":             { name:"Chana Dal (split, cooked)",          category:"Indian Dal", unit:"g", base:100, cal:164, prot:9,   carb:27,  fat:2.7, servingSize:200, servingLabel:"1 cup" },
  "dal chana tadka":              { name:"Chana Dal Tadka",                    category:"Indian Dal", unit:"g", base:100, cal:178, prot:9,   carb:27,  fat:4.5, servingSize:200, servingLabel:"1 cup" },
  "chole chickpea masala":        { name:"Chole / Chana Masala",               category:"Indian Dal", unit:"g", base:100, cal:155, prot:8,   carb:22,  fat:4.5, servingSize:200, servingLabel:"1 cup" },
  "chole amritsari":              { name:"Amritsari Chole",                    category:"Indian Dal", unit:"g", base:100, cal:165, prot:8.5, carb:23,  fat:5,   servingSize:200, servingLabel:"1 cup" },
  "kadala curry":                 { name:"Kadala Curry (black chickpeas, Kerala)", category:"Indian Dal", unit:"g", base:100, cal:148, prot:7.5, carb:22, fat:4,   servingSize:200, servingLabel:"1 cup" },

  /* ── Urad Dal ──────────────────────────────────────── */
  "dal urad cooked":              { name:"Urad Dal (whole black, cooked)",     category:"Indian Dal", unit:"g", base:100, cal:105, prot:6,   carb:20,  fat:0.5, servingSize:200, servingLabel:"1 cup" },
  "dal makhani":                  { name:"Dal Makhani (cream + butter)",       category:"Indian Dal", unit:"g", base:100, cal:160, prot:6.5, carb:14,  fat:8.5, servingSize:200, servingLabel:"1 cup" },
  "dal makhani restaurant":       { name:"Dal Makhani (restaurant-style, rich)",category:"Indian Dal", unit:"g", base:100, cal:195, prot:7,   carb:14,  fat:12,  servingSize:200, servingLabel:"1 cup" },

  /* ── Rajma / Kidney Beans ──────────────────────────── */
  "rajma red cooked":             { name:"Rajma (red kidney beans, cooked)",   category:"Indian Dal", unit:"g", base:100, cal:127, prot:8.7, carb:23,  fat:0.5, servingSize:200, servingLabel:"1 cup" },
  "rajma masala":                 { name:"Rajma Masala",                       category:"Indian Dal", unit:"g", base:100, cal:145, prot:8.5, carb:22,  fat:3.5, servingSize:200, servingLabel:"1 cup" },
  "rajma chawal":                 { name:"Rajma Chawal (dal + rice)",          category:"Indian Dal", unit:"g", base:100, cal:140, prot:6,   carb:26,  fat:2,   servingSize:300, servingLabel:"1 plate" },

  /* ── Other Legume Dals ─────────────────────────────── */
  "dal lobia cowpea":             { name:"Lobia / Cowpea Dal (cooked)",        category:"Indian Dal", unit:"g", base:100, cal:116, prot:8,   carb:21,  fat:0.5, servingSize:200, servingLabel:"1 cup" },
  "dal moth beans":               { name:"Moth Beans / Matki (cooked)",        category:"Indian Dal", unit:"g", base:100, cal:143, prot:10,  carb:25,  fat:0.5, servingSize:200, servingLabel:"1 cup" },
  "dal horse gram kulthi":        { name:"Horse Gram / Kulthi Dal (cooked)",   category:"Indian Dal", unit:"g", base:100, cal:321, prot:22,  carb:57,  fat:0.5, servingSize:100, servingLabel:"½ cup" },
  "dal val field beans":          { name:"Val / Field Beans Dal",              category:"Indian Dal", unit:"g", base:100, cal:130, prot:9,   carb:22,  fat:0.5, servingSize:200, servingLabel:"1 cup" },
  "sambar":                       { name:"Sambar (thin lentil soup)",          category:"Indian Dal", unit:"g", base:100, cal:54,  prot:3,   carb:9,   fat:1.2, servingSize:200, servingLabel:"1 cup" },
  "rasam":                        { name:"Rasam (pepper-tamarind broth)",      category:"Indian Dal", unit:"g", base:100, cal:20,  prot:0.8, carb:4,   fat:0.5, servingSize:200, servingLabel:"1 cup" },
  "dal soup mixed":               { name:"Mixed Dal Soup",                     category:"Indian Dal", unit:"g", base:100, cal:98,  prot:6,   carb:16,  fat:1.5, servingSize:240, servingLabel:"1 cup" },
  "panchmel dal":                 { name:"Panchmel / Panchratna Dal (5-lentil mix)", category:"Indian Dal", unit:"g", base:100, cal:130, prot:7.5, carb:21, fat:2.5, servingSize:200, servingLabel:"1 cup" },

  /* ── Paneer Curries ────────────────────────────────── */
  "paneer butter masala":         { name:"Paneer Butter Masala",               category:"Indian Curry", unit:"g", base:100, cal:220, prot:8.5, carb:9,   fat:16,  servingSize:200, servingLabel:"1 cup" },
  "palak paneer":                 { name:"Palak Paneer",                       category:"Indian Curry", unit:"g", base:100, cal:189, prot:8,   carb:7,   fat:14,  servingSize:200, servingLabel:"1 cup" },
  "kadai paneer":                 { name:"Kadai Paneer",                       category:"Indian Curry", unit:"g", base:100, cal:235, prot:9,   carb:9,   fat:18,  servingSize:200, servingLabel:"1 cup" },
  "shahi paneer":                 { name:"Shahi Paneer",                       category:"Indian Curry", unit:"g", base:100, cal:268, prot:10,  carb:10,  fat:21,  servingSize:200, servingLabel:"1 cup" },
  "matar paneer":                 { name:"Matar Paneer",                       category:"Indian Curry", unit:"g", base:100, cal:170, prot:7,   carb:10,  fat:11,  servingSize:200, servingLabel:"1 cup" },
  "paneer tikka masala":          { name:"Paneer Tikka Masala",                category:"Indian Curry", unit:"g", base:100, cal:245, prot:10,  carb:10,  fat:18,  servingSize:200, servingLabel:"1 cup" },
  "paneer do pyaza":              { name:"Paneer Do Pyaza",                    category:"Indian Curry", unit:"g", base:100, cal:215, prot:9,   carb:10,  fat:16,  servingSize:200, servingLabel:"1 cup" },
  "paneer lababdar":              { name:"Paneer Lababdar",                    category:"Indian Curry", unit:"g", base:100, cal:255, prot:10,  carb:9,   fat:20,  servingSize:200, servingLabel:"1 cup" },
  "paneer korma":                 { name:"Paneer Korma",                       category:"Indian Curry", unit:"g", base:100, cal:295, prot:10,  carb:11,  fat:24,  servingSize:200, servingLabel:"1 cup" },
  "paneer kolhapuri":             { name:"Paneer Kolhapuri (spicy)",           category:"Indian Curry", unit:"g", base:100, cal:230, prot:9.5, carb:8,   fat:18,  servingSize:200, servingLabel:"1 cup" },
  "chena peas curry":             { name:"Chena / Fresh Paneer Peas Curry",    category:"Indian Curry", unit:"g", base:100, cal:195, prot:9,   carb:10,  fat:13,  servingSize:200, servingLabel:"1 cup" },

  /* ── Chicken Curries ───────────────────────────────── */
  "butter chicken":               { name:"Butter Chicken / Murgh Makhani",     category:"Indian Curry", unit:"g", base:100, cal:175, prot:17,  carb:6,   fat:9,   servingSize:250, servingLabel:"1 serving" },
  "chicken curry homestyle":      { name:"Chicken Curry (home-style, with bone)", category:"Indian Curry", unit:"g", base:100, cal:155, prot:15, carb:4,   fat:8.5, servingSize:250, servingLabel:"1 serving" },
  "chicken tikka masala":         { name:"Chicken Tikka Masala",               category:"Indian Curry", unit:"g", base:100, cal:185, prot:18,  carb:7,   fat:10,  servingSize:250, servingLabel:"1 serving" },
  "chicken kadai":                { name:"Kadai Chicken",                      category:"Indian Curry", unit:"g", base:100, cal:195, prot:20,  carb:6,   fat:11,  servingSize:250, servingLabel:"1 serving" },
  "chicken korma":                { name:"Chicken Korma",                      category:"Indian Curry", unit:"g", base:100, cal:220, prot:18,  carb:6,   fat:14,  servingSize:250, servingLabel:"1 serving" },
  "chicken saag":                 { name:"Chicken Saag / Saagwala Chicken",    category:"Indian Curry", unit:"g", base:100, cal:165, prot:18,  carb:5,   fat:9,   servingSize:250, servingLabel:"1 serving" },
  "chicken do pyaza":             { name:"Chicken Do Pyaza",                   category:"Indian Curry", unit:"g", base:100, cal:175, prot:19,  carb:7,   fat:9.5, servingSize:250, servingLabel:"1 serving" },
  "chicken rogan josh":           { name:"Chicken Rogan Josh",                 category:"Indian Curry", unit:"g", base:100, cal:185, prot:19,  carb:5,   fat:11,  servingSize:250, servingLabel:"1 serving" },
  "chicken achari":               { name:"Chicken Achari (pickle spiced)",     category:"Indian Curry", unit:"g", base:100, cal:180, prot:18,  carb:5,   fat:10.5,servingSize:250, servingLabel:"1 serving" },
  "chicken chettinad":            { name:"Chicken Chettinad (Tamil Nadu)",     category:"Indian Curry", unit:"g", base:100, cal:195, prot:20,  carb:4,   fat:12,  servingSize:250, servingLabel:"1 serving" },
  "chicken kolhapuri":            { name:"Chicken Kolhapuri (spicy, Maharashtra)", category:"Indian Curry", unit:"g", base:100, cal:200, prot:20, carb:5,   fat:12,  servingSize:250, servingLabel:"1 serving" },
  "chicken rezala":               { name:"Chicken Rezala (Bengali, yogurt)",   category:"Indian Curry", unit:"g", base:100, cal:190, prot:18,  carb:5,   fat:12,  servingSize:250, servingLabel:"1 serving" },
  "dahi chicken":                 { name:"Dahi Chicken (yogurt marinade)",     category:"Indian Curry", unit:"g", base:100, cal:175, prot:17,  carb:5,   fat:9.5, servingSize:250, servingLabel:"1 serving" },
  "chicken handi":                { name:"Chicken Handi",                      category:"Indian Curry", unit:"g", base:100, cal:210, prot:19,  carb:6,   fat:13,  servingSize:250, servingLabel:"1 serving" },
  "chicken cafreal":              { name:"Chicken Cafreal (Goan)",             category:"Indian Curry", unit:"g", base:100, cal:185, prot:21,  carb:4,   fat:10,  servingSize:200, servingLabel:"1 serving" },
  "chicken xacuti":               { name:"Chicken Xacuti (Goan coconut)",      category:"Indian Curry", unit:"g", base:100, cal:205, prot:19,  carb:6,   fat:13,  servingSize:250, servingLabel:"1 serving" },

  /* ── Mutton / Lamb Curries ─────────────────────────── */
  "mutton curry":                 { name:"Mutton Curry (homestyle, bone-in)", category:"Indian Curry", unit:"g", base:100, cal:210, prot:18,  carb:3.5, fat:14,  servingSize:250, servingLabel:"1 serving" },
  "mutton rogan josh":            { name:"Mutton Rogan Josh (Kashmiri)",       category:"Indian Curry", unit:"g", base:100, cal:225, prot:19,  carb:4,   fat:15,  servingSize:250, servingLabel:"1 serving" },
  "mutton korma":                 { name:"Mutton Korma",                       category:"Indian Curry", unit:"g", base:100, cal:265, prot:18,  carb:5,   fat:20,  servingSize:250, servingLabel:"1 serving" },
  "mutton do pyaza":              { name:"Mutton Do Pyaza",                    category:"Indian Curry", unit:"g", base:100, cal:220, prot:18,  carb:6,   fat:14.5,servingSize:250, servingLabel:"1 serving" },
  "mutton keema":                 { name:"Mutton Keema (minced mutton)",       category:"Indian Curry", unit:"g", base:100, cal:235, prot:18,  carb:3,   fat:17,  servingSize:200, servingLabel:"1 serving" },
  "keema matar":                  { name:"Keema Matar (mince + peas)",         category:"Indian Curry", unit:"g", base:100, cal:210, prot:18,  carb:9,   fat:11,  servingSize:200, servingLabel:"1 serving" },
  "mutton kofta":                 { name:"Mutton Kofta Curry",                 category:"Indian Curry", unit:"g", base:100, cal:230, prot:16,  carb:8,   fat:15,  servingSize:250, servingLabel:"1 serving" },
  "mutton nihari":                { name:"Nihari (slow-cooked mutton)",        category:"Indian Curry", unit:"g", base:100, cal:195, prot:16,  carb:5,   fat:13,  servingSize:250, servingLabel:"1 bowl" },
  "mutton paya soup":             { name:"Paya / Trotters Soup",               category:"Indian Curry", unit:"g", base:100, cal:90,  prot:11,  carb:2,   fat:4.5, servingSize:300, servingLabel:"1 bowl" },
  "mutton haleem":                { name:"Haleem (slow-cooked mutton + dal)",  category:"Indian Curry", unit:"g", base:100, cal:195, prot:14,  carb:13,  fat:9,   servingSize:250, servingLabel:"1 bowl" },
  "mutton saag":                  { name:"Mutton Saag / Saagwala",             category:"Indian Curry", unit:"g", base:100, cal:210, prot:18,  carb:4,   fat:14,  servingSize:250, servingLabel:"1 serving" },
  "lamb curry kerala":            { name:"Mutton / Lamb Kerala Curry (coconut)", category:"Indian Curry", unit:"g", base:100, cal:230, prot:18, carb:5,   fat:16,  servingSize:250, servingLabel:"1 serving" },
  "mutton vindaloo":              { name:"Mutton Vindaloo (Goan, spicy)",      category:"Indian Curry", unit:"g", base:100, cal:220, prot:18,  carb:5,   fat:14.5,servingSize:250, servingLabel:"1 serving" },

  /* ── Fish & Seafood Curries ────────────────────────── */
  "fish curry homestyle":         { name:"Fish Curry (homestyle, South Indian)", category:"Indian Curry", unit:"g", base:100, cal:135, prot:14, carb:5,   fat:6,   servingSize:200, servingLabel:"1 serving" },
  "fish curry coconut":           { name:"Fish Curry (coconut-based, Kerala)", category:"Indian Curry", unit:"g", base:100, cal:155, prot:14,  carb:4,   fat:9,   servingSize:200, servingLabel:"1 serving" },
  "fish molee":                   { name:"Fish Molee (Kerala yellow curry)",   category:"Indian Curry", unit:"g", base:100, cal:155, prot:14,  carb:4,   fat:9,   servingSize:200, servingLabel:"1 serving" },
  "fish goan curry":              { name:"Goan Fish Curry (red, tangy)",       category:"Indian Curry", unit:"g", base:100, cal:145, prot:14,  carb:5.5, fat:7.5, servingSize:200, servingLabel:"1 serving" },
  "prawn masala":                 { name:"Prawn Masala",                       category:"Indian Curry", unit:"g", base:100, cal:145, prot:16,  carb:7,   fat:6.5, servingSize:200, servingLabel:"1 serving" },
  "prawn curry coconut":          { name:"Prawn Curry (coconut, Kerala)",      category:"Indian Curry", unit:"g", base:100, cal:165, prot:15,  carb:5,   fat:10,  servingSize:200, servingLabel:"1 serving" },
  "crab masala":                  { name:"Crab Masala",                        category:"Indian Curry", unit:"g", base:100, cal:125, prot:15,  carb:6,   fat:4.5, servingSize:200, servingLabel:"1 serving" },
  "fish vindaloo":                { name:"Fish Vindaloo (Goan)",               category:"Indian Curry", unit:"g", base:100, cal:140, prot:14,  carb:5,   fat:7.5, servingSize:200, servingLabel:"1 serving" },
  "squid calamari masala":        { name:"Squid / Calamari Masala",            category:"Indian Curry", unit:"g", base:100, cal:155, prot:14,  carb:7,   fat:8,   servingSize:150, servingLabel:"1 serving" },
  "fish ambotik":                 { name:"Fish Ambotik (Goan sweet-sour)",     category:"Indian Curry", unit:"g", base:100, cal:140, prot:13,  carb:6,   fat:7,   servingSize:200, servingLabel:"1 serving" },

  /* ── Vegetable Curries ─────────────────────────────── */
  "aloo gobi":                    { name:"Aloo Gobi (potato + cauliflower)",   category:"Indian Curry", unit:"g", base:100, cal:112, prot:3,   carb:16,  fat:4.5, servingSize:200, servingLabel:"1 cup" },
  "aloo matar":                   { name:"Aloo Matar (potato + peas)",         category:"Indian Curry", unit:"g", base:100, cal:100, prot:3,   carb:16,  fat:3.5, servingSize:200, servingLabel:"1 cup" },
  "aloo palak":                   { name:"Aloo Palak (potato + spinach)",      category:"Indian Curry", unit:"g", base:100, cal:95,  prot:3,   carb:14,  fat:3.5, servingSize:200, servingLabel:"1 cup" },
  "aloo curry":                   { name:"Aloo Curry (plain potato curry)",    category:"Indian Curry", unit:"g", base:100, cal:105, prot:2.5, carb:18,  fat:3,   servingSize:200, servingLabel:"1 cup" },
  "aloo jeera":                   { name:"Jeera Aloo (cumin potatoes)",        category:"Indian Curry", unit:"g", base:100, cal:120, prot:2.5, carb:18,  fat:5,   servingSize:150, servingLabel:"1 cup" },
  "baingan bharta":               { name:"Baingan Bharta (roasted eggplant)",  category:"Indian Curry", unit:"g", base:100, cal:100, prot:2.5, carb:10,  fat:5.5, servingSize:150, servingLabel:"1 serving" },
  "bhindi masala":                { name:"Bhindi Masala (okra)",               category:"Indian Curry", unit:"g", base:100, cal:95,  prot:2.5, carb:10,  fat:5,   servingSize:150, servingLabel:"1 serving" },
  "bhindi do pyaza":              { name:"Bhindi Do Pyaza",                    category:"Indian Curry", unit:"g", base:100, cal:100, prot:2.5, carb:10,  fat:5.5, servingSize:150, servingLabel:"1 serving" },
  "mixed veg sabzi":              { name:"Mixed Veg Sabzi",                    category:"Indian Curry", unit:"g", base:100, cal:90,  prot:2.5, carb:11,  fat:4,   servingSize:150, servingLabel:"1 serving" },
  "saag sarson":                  { name:"Sarson da Saag (mustard greens)",    category:"Indian Curry", unit:"g", base:100, cal:80,  prot:3.5, carb:8,   fat:4,   servingSize:200, servingLabel:"1 cup" },
  "methi sabzi":                  { name:"Methi Sabzi (fenugreek leaves)",     category:"Indian Curry", unit:"g", base:100, cal:75,  prot:3,   carb:9,   fat:3.5, servingSize:150, servingLabel:"1 serving" },
  "palak sabzi":                  { name:"Palak Sabzi / Saag (spinach)",       category:"Indian Curry", unit:"g", base:100, cal:80,  prot:4,   carb:7,   fat:4,   servingSize:150, servingLabel:"1 serving" },
  "tinda sabzi":                  { name:"Tinda / Apple Gourd Sabzi",          category:"Indian Curry", unit:"g", base:100, cal:75,  prot:2,   carb:10,  fat:3,   servingSize:150, servingLabel:"1 serving" },
  "arbi curry":                   { name:"Arbi / Taro Curry",                  category:"Indian Curry", unit:"g", base:100, cal:150, prot:2,   carb:28,  fat:4,   servingSize:150, servingLabel:"1 serving" },
  "kaddu pumpkin curry":          { name:"Kaddu / Pumpkin Curry",              category:"Indian Curry", unit:"g", base:100, cal:75,  prot:1.5, carb:12,  fat:2.5, servingSize:150, servingLabel:"1 serving" },
  "sem beans sabzi":              { name:"Sem / Flat Beans Sabzi",             category:"Indian Curry", unit:"g", base:100, cal:80,  prot:3,   carb:12,  fat:2.5, servingSize:150, servingLabel:"1 serving" },
  "lauki sabzi":                  { name:"Lauki / Bottle Gourd Sabzi",         category:"Indian Curry", unit:"g", base:100, cal:55,  prot:1.5, carb:9,   fat:2,   servingSize:150, servingLabel:"1 serving" },
  "karela masala":                { name:"Karela / Bitter Gourd Masala",       category:"Indian Curry", unit:"g", base:100, cal:75,  prot:2,   carb:8,   fat:4,   servingSize:100, servingLabel:"1 serving" },
  "parwal sabzi":                 { name:"Parwal / Pointed Gourd Sabzi",       category:"Indian Curry", unit:"g", base:100, cal:70,  prot:2,   carb:10,  fat:2.5, servingSize:150, servingLabel:"1 serving" },
  "kathal jackfruit curry":       { name:"Kathal / Jackfruit Curry",           category:"Indian Curry", unit:"g", base:100, cal:100, prot:2.5, carb:18,  fat:2.5, servingSize:200, servingLabel:"1 cup" },
  "mushroom masala":              { name:"Mushroom Masala",                    category:"Indian Curry", unit:"g", base:100, cal:110, prot:4,   carb:8,   fat:7,   servingSize:150, servingLabel:"1 serving" },
  "mushroom matar":               { name:"Mushroom Matar",                     category:"Indian Curry", unit:"g", base:100, cal:105, prot:4,   carb:9,   fat:6.5, servingSize:150, servingLabel:"1 serving" },
  "navratan korma":               { name:"Navratan Korma (9 veg)",             category:"Indian Curry", unit:"g", base:100, cal:198, prot:5.5, carb:16,  fat:13,  servingSize:200, servingLabel:"1 cup" },
  "malai kofta":                  { name:"Malai Kofta",                        category:"Indian Curry", unit:"g", base:100, cal:240, prot:7,   carb:17,  fat:17,  servingSize:200, servingLabel:"1 cup" },
  "methi malai matar":            { name:"Methi Malai Matar",                  category:"Indian Curry", unit:"g", base:100, cal:195, prot:6,   carb:12,  fat:14,  servingSize:200, servingLabel:"1 cup" },
  "shahi veg":                    { name:"Shahi Mixed Vegetable",              category:"Indian Curry", unit:"g", base:100, cal:180, prot:4.5, carb:14,  fat:12,  servingSize:200, servingLabel:"1 cup" },

  /* ── South Indian Curries & Gravies ────────────────── */
  "sambar full":                  { name:"Sambar (full, with vegetables)",     category:"Indian Curry", unit:"g", base:100, cal:58,  prot:3.2, carb:9.5, fat:1.5, servingSize:200, servingLabel:"1 cup" },
  "avial":                        { name:"Avial (mixed veg in coconut+curd)",  category:"Indian Curry", unit:"g", base:100, cal:120, prot:3,   carb:12,  fat:7,   servingSize:150, servingLabel:"1 serving" },
  "kootu":                        { name:"Kootu (veg + dal, Tamil Nadu)",      category:"Indian Curry", unit:"g", base:100, cal:115, prot:4.5, carb:13,  fat:5,   servingSize:150, servingLabel:"1 serving" },
  "olan":                         { name:"Olan (white gourd + coconut milk)",  category:"Indian Curry", unit:"g", base:100, cal:95,  prot:2,   carb:8,   fat:6,   servingSize:150, servingLabel:"1 serving" },
  "erissery":                     { name:"Erissery (pumpkin + lentil, Kerala)",category:"Indian Curry", unit:"g", base:100, cal:130, prot:4,   carb:15,  fat:6.5, servingSize:150, servingLabel:"1 serving" },
  "kalan":                        { name:"Kalan (raw banana + yam + yogurt)", category:"Indian Curry", unit:"g", base:100, cal:140, prot:2.5, carb:18,  fat:7,   servingSize:150, servingLabel:"1 serving" },
  "pachadi":                      { name:"Pachadi (Kerala yogurt curry)",      category:"Indian Curry", unit:"g", base:100, cal:80,  prot:2.5, carb:7,   fat:5,   servingSize:100, servingLabel:"½ cup" },
  "pulissery":                    { name:"Pulissery (buttermilk curry, Kerala)",category:"Indian Curry", unit:"g", base:100, cal:60,  prot:2,   carb:6,   fat:3,   servingSize:150, servingLabel:"1 cup" },
  "poriyal":                      { name:"Poriyal (stir-fried veg, Tamil Nadu)",category:"Indian Curry", unit:"g", base:100, cal:90,  prot:2.5, carb:10,  fat:4.5, servingSize:100, servingLabel:"1 serving" },
  "thoran":                       { name:"Thoran (Kerala stir-fry with coconut)",category:"Indian Curry", unit:"g", base:100, cal:95,  prot:2.5, carb:10,  fat:5,   servingSize:100, servingLabel:"1 serving" },
  "mezhukkupuratti":              { name:"Mezhukkupuratti (Kerala stir-fry)",  category:"Indian Curry", unit:"g", base:100, cal:100, prot:2.5, carb:12,  fat:5,   servingSize:100, servingLabel:"1 serving" },
  "thoran raw banana":            { name:"Raw Banana Thoran",                  category:"Indian Curry", unit:"g", base:100, cal:105, prot:2,   carb:15,  fat:4.5, servingSize:100, servingLabel:"1 serving" },
  "fish curry nadan":             { name:"Nadan Fish Curry (Kerala red)",      category:"Indian Curry", unit:"g", base:100, cal:145, prot:14,  carb:5,   fat:8,   servingSize:200, servingLabel:"1 serving" },

  /* ── Egg Curries ───────────────────────────────────── */
  "egg curry":                    { name:"Egg Curry (Indian style)",           category:"Indian Curry", unit:"g", base:100, cal:145, prot:9,   carb:4,   fat:10,  servingSize:200, servingLabel:"1 serving" },
  "egg masala":                   { name:"Egg Masala Curry",                   category:"Indian Curry", unit:"g", base:100, cal:155, prot:9.5, carb:5,   fat:11,  servingSize:200, servingLabel:"1 serving" },
  "egg bhurji curry":             { name:"Egg Bhurji (dry + gravy)",           category:"Indian Curry", unit:"g", base:100, cal:165, prot:11,  carb:4.5, fat:11,  servingSize:150, servingLabel:"1 serving" },
  "egg pepper fry":               { name:"Egg Pepper Fry (South Indian)",      category:"Indian Curry", unit:"g", base:100, cal:185, prot:11,  carb:3,   fat:14,  servingSize:120, servingLabel:"2 eggs" },
  "egg kari":                     { name:"Muttai Kari / South Indian Egg Curry",category:"Indian Curry", unit:"g", base:100, cal:148, prot:9.5, carb:5,   fat:10,  servingSize:200, servingLabel:"1 serving" },

  /* ── Rice Dishes ───────────────────────────────────── */
  "biryani chicken":              { name:"Chicken Biryani",                    category:"Indian Rice", unit:"g", base:100, cal:185, prot:12,  carb:22,  fat:5.5, servingSize:350, servingLabel:"1 plate" },
  "biryani chicken hyderabadi":   { name:"Hyderabadi Chicken Biryani (dum)",   category:"Indian Rice", unit:"g", base:100, cal:195, prot:13,  carb:23,  fat:6,   servingSize:350, servingLabel:"1 plate" },
  "biryani mutton":               { name:"Mutton Biryani",                     category:"Indian Rice", unit:"g", base:100, cal:200, prot:13,  carb:22,  fat:7,   servingSize:350, servingLabel:"1 plate" },
  "biryani lamb hyderabadi":      { name:"Hyderabadi Mutton Biryani",          category:"Indian Rice", unit:"g", base:100, cal:205, prot:14,  carb:22,  fat:7.5, servingSize:350, servingLabel:"1 plate" },
  "biryani prawn":                { name:"Prawn Biryani",                      category:"Indian Rice", unit:"g", base:100, cal:180, prot:12,  carb:24,  fat:4.5, servingSize:300, servingLabel:"1 plate" },
  "biryani veg":                  { name:"Vegetable Biryani",                  category:"Indian Rice", unit:"g", base:100, cal:140, prot:4,   carb:26,  fat:3,   servingSize:300, servingLabel:"1 plate" },
  "biryani egg":                  { name:"Egg Biryani",                        category:"Indian Rice", unit:"g", base:100, cal:175, prot:8,   carb:26,  fat:5,   servingSize:300, servingLabel:"1 plate" },
  "biryani fish":                 { name:"Fish Biryani",                       category:"Indian Rice", unit:"g", base:100, cal:165, prot:11,  carb:23,  fat:3.5, servingSize:300, servingLabel:"1 plate" },
  "biryani paneer":               { name:"Paneer Biryani",                     category:"Indian Rice", unit:"g", base:100, cal:170, prot:6,   carb:24,  fat:5.5, servingSize:300, servingLabel:"1 plate" },
  "jeera rice":                   { name:"Jeera Rice (cumin rice)",            category:"Indian Rice", unit:"g", base:100, cal:160, prot:3.5, carb:30,  fat:4.5, servingSize:200, servingLabel:"1 cup" },
  "matar pulao":                  { name:"Matar Pulao (peas rice)",            category:"Indian Rice", unit:"g", base:100, cal:155, prot:4,   carb:29,  fat:3,   servingSize:200, servingLabel:"1 cup" },
  "veg pulao":                    { name:"Vegetable Pulao",                    category:"Indian Rice", unit:"g", base:100, cal:148, prot:3.5, carb:28,  fat:3,   servingSize:200, servingLabel:"1 cup" },
  "curd rice":                    { name:"Curd Rice / Thayir Sadam",           category:"Indian Rice", unit:"g", base:100, cal:100, prot:3.5, carb:18,  fat:2,   servingSize:200, servingLabel:"1 cup" },
  "lemon rice":                   { name:"Lemon Rice / Chitranna",             category:"Indian Rice", unit:"g", base:100, cal:160, prot:3.5, carb:30,  fat:4,   servingSize:200, servingLabel:"1 cup" },
  "tamarind rice puliyodharai":   { name:"Puliyodharai / Tamarind Rice",       category:"Indian Rice", unit:"g", base:100, cal:185, prot:3.5, carb:32,  fat:6,   servingSize:200, servingLabel:"1 cup" },
  "coconut rice":                 { name:"Coconut Rice (thengai sadam)",       category:"Indian Rice", unit:"g", base:100, cal:185, prot:3.5, carb:31,  fat:6,   servingSize:200, servingLabel:"1 cup" },
  "tomato rice":                  { name:"Tomato Rice",                        category:"Indian Rice", unit:"g", base:100, cal:158, prot:3,   carb:30,  fat:3.5, servingSize:200, servingLabel:"1 cup" },
  "methi rice":                   { name:"Methi Rice (fenugreek rice)",        category:"Indian Rice", unit:"g", base:100, cal:155, prot:3.5, carb:29,  fat:3.5, servingSize:200, servingLabel:"1 cup" },
  "sambar sadham":                { name:"Sambar Sadam (sambar rice)",         category:"Indian Rice", unit:"g", base:100, cal:120, prot:4,   carb:23,  fat:2,   servingSize:250, servingLabel:"1 bowl" },
  "bisi bele bath":               { name:"Bisibele Bath (Karnataka)",          category:"Indian Rice", unit:"g", base:100, cal:145, prot:5,   carb:26,  fat:3.5, servingSize:250, servingLabel:"1 bowl" },
  "khichdi plain":                { name:"Khichdi (rice + moong dal)",         category:"Indian Rice", unit:"g", base:100, cal:118, prot:4.5, carb:22,  fat:2,   servingSize:250, servingLabel:"1 bowl" },
  "khichdi masala":               { name:"Masala Khichdi (spiced, vegetable)", category:"Indian Rice", unit:"g", base:100, cal:140, prot:5,   carb:24,  fat:3.5, servingSize:250, servingLabel:"1 bowl" },
  "rice ghee dal":                { name:"Plain Rice + Dal + Ghee",            category:"Indian Rice", unit:"g", base:100, cal:145, prot:5,   carb:26,  fat:3,   servingSize:300, servingLabel:"1 plate" },
  "ghee rice":                    { name:"Ghee Rice (nei choru, Kerala)",      category:"Indian Rice", unit:"g", base:100, cal:195, prot:3.5, carb:32,  fat:7,   servingSize:200, servingLabel:"1 cup" },
  "mint rice":                    { name:"Mint Rice / Pudina Sadam",           category:"Indian Rice", unit:"g", base:100, cal:155, prot:3.5, carb:29,  fat:3.5, servingSize:200, servingLabel:"1 cup" },
  "capsicum rice":                { name:"Capsicum / Bell Pepper Rice",        category:"Indian Rice", unit:"g", base:100, cal:152, prot:3,   carb:28,  fat:3.5, servingSize:200, servingLabel:"1 cup" },
  "peas pulao matar":             { name:"Peas Pulao (restaurant style)",      category:"Indian Rice", unit:"g", base:100, cal:158, prot:4.5, carb:29,  fat:3.5, servingSize:200, servingLabel:"1 cup" },

  /* ── North Indian Curries — Vegetarian ─────────────── */
  "chana palak":                  { name:"Chana Palak (chickpeas + spinach)", category:"Indian Curry", unit:"g", base:100, cal:145, prot:7.5, carb:18,  fat:4.5, servingSize:200, servingLabel:"1 cup" },
  "dal palak":                    { name:"Dal Palak (lentils + spinach)",      category:"Indian Curry", unit:"g", base:100, cal:115, prot:6.5, carb:16,  fat:3,   servingSize:200, servingLabel:"1 cup" },
  "khoya matar":                  { name:"Khoya Matar",                        category:"Indian Curry", unit:"g", base:100, cal:220, prot:7.5, carb:16,  fat:15,  servingSize:150, servingLabel:"1 serving" },
  "paneer bhurji":                { name:"Paneer Bhurji (dry, crumbled)",      category:"Indian Curry", unit:"g", base:100, cal:240, prot:12,  carb:5,   fat:19,  servingSize:150, servingLabel:"1 serving" },
  "dhaba dal":                    { name:"Dhaba-style Dal (smoky, tempered)",  category:"Indian Curry", unit:"g", base:100, cal:130, prot:7.5, carb:18,  fat:4.5, servingSize:200, servingLabel:"1 cup" },
  "veg kolhapuri":                { name:"Veg Kolhapuri (spicy mixed veg)",    category:"Indian Curry", unit:"g", base:100, cal:160, prot:4.5, carb:14,  fat:9,   servingSize:200, servingLabel:"1 cup" },
  "rajasthani gatte ki sabzi":    { name:"Gatte ki Sabzi (besan dumplings in yogurt curry)", category:"Indian Curry", unit:"g", base:100, cal:195, prot:6, carb:18, fat:11, servingSize:200, servingLabel:"1 cup" },
  "rajasthani dal baati churma":  { name:"Dal Baati Churma (Rajasthani thali)", category:"Indian Curry", unit:"g", base:100, cal:310, prot:8,   carb:40,  fat:14,  servingSize:300, servingLabel:"1 serving" },
  "undhiyu":                      { name:"Undhiyu (Gujarati winter veg)",      category:"Indian Curry", unit:"g", base:100, cal:175, prot:5.5, carb:18,  fat:9,   servingSize:200, servingLabel:"1 cup" },
  "pav bhaji":                    { name:"Pav Bhaji",                          category:"Indian Curry", unit:"g", base:100, cal:190, prot:5,   carb:28,  fat:7,   servingSize:250, servingLabel:"1 plate" },
  "dahi batata puri":             { name:"Dahi Batata Puri Chaat",             category:"Indian Curry", unit:"g", base:100, cal:175, prot:4.5, carb:28,  fat:5,   servingSize:150, servingLabel:"1 serving" },














 /* ══════════════════════════════════════════════════════
     🥩  MEAT & POULTRY — COMPLETE SECTION
  ══════════════════════════════════════════════════════ */

  /* ── Chicken — Raw ─────────────────────────────────── */
  "chicken breast raw":           { name:"Chicken Breast (raw, boneless)",     category:"Meat", unit:"g", base:100, cal:120, prot:22,  carb:0,   fat:2.6, servingSize:150, servingLabel:"1 breast" },
  "chicken thigh raw":            { name:"Chicken Thigh (raw, boneless)",      category:"Meat", unit:"g", base:100, cal:177, prot:19,  carb:0,   fat:11,  servingSize:120, servingLabel:"1 thigh" },
  "chicken drumstick raw":        { name:"Chicken Drumstick (raw)",            category:"Meat", unit:"g", base:100, cal:132, prot:19,  carb:0,   fat:6,   servingSize:90,  servingLabel:"1 drumstick",   countable:{ unitName:"drumstick", gramsEach:90  } },
  "chicken wing raw":             { name:"Chicken Wing (raw)",                 category:"Meat", unit:"g", base:100, cal:203, prot:19,  carb:0,   fat:13,  servingSize:90,  servingLabel:"1 wing",        countable:{ unitName:"wing",      gramsEach:45  } },
  "chicken mince raw":            { name:"Chicken Mince / Ground Chicken (raw)",category:"Meat", unit:"g", base:100, cal:143, prot:17,  carb:0,   fat:8,   servingSize:100, servingLabel:"100g" },
  "chicken liver raw":            { name:"Chicken Liver (raw)",                category:"Meat", unit:"g", base:100, cal:116, prot:17,  carb:0.7, fat:4.8, servingSize:85,  servingLabel:"3 oz" },
  "chicken whole raw":            { name:"Whole Chicken (raw)",                category:"Meat", unit:"g", base:100, cal:215, prot:18,  carb:0,   fat:15,  servingSize:200, servingLabel:"1 serving" },

  /* ── Chicken — Cooked ──────────────────────────────── */
  "chicken breast cooked":        { name:"Chicken Breast (cooked, boneless)",  category:"Meat", unit:"g", base:100, cal:165, prot:31,  carb:0,   fat:3.6, servingSize:150, servingLabel:"1 breast" },
  "chicken breast grilled":       { name:"Chicken Breast (grilled, no skin)",  category:"Meat", unit:"g", base:100, cal:165, prot:31,  carb:0,   fat:3.6, servingSize:150, servingLabel:"1 breast" },
  "chicken breast baked":         { name:"Chicken Breast (baked)",             category:"Meat", unit:"g", base:100, cal:195, prot:29,  carb:0,   fat:8,   servingSize:150, servingLabel:"1 breast" },
  "chicken thigh cooked":         { name:"Chicken Thigh (cooked, boneless)",   category:"Meat", unit:"g", base:100, cal:209, prot:26,  carb:0,   fat:11,  servingSize:120, servingLabel:"1 thigh" },
  "chicken thigh skin on cooked": { name:"Chicken Thigh (cooked, skin-on)",    category:"Meat", unit:"g", base:100, cal:247, prot:25,  carb:0,   fat:16,  servingSize:130, servingLabel:"1 thigh" },
  "chicken drumstick cooked":     { name:"Chicken Drumstick (cooked)",         category:"Meat", unit:"g", base:100, cal:172, prot:28,  carb:0,   fat:6,   servingSize:90,  servingLabel:"1 drumstick",   countable:{ unitName:"drumstick", gramsEach:90  } },
  "chicken wing cooked":          { name:"Chicken Wing (cooked, plain)",       category:"Meat", unit:"g", base:100, cal:290, prot:27,  carb:0,   fat:19,  servingSize:45,  servingLabel:"1 wing",        countable:{ unitName:"wing",      gramsEach:45  } },
  "chicken wing buffalo":         { name:"Chicken Wing (buffalo / hot sauce)", category:"Meat", unit:"g", base:100, cal:310, prot:25,  carb:3,   fat:21,  servingSize:45,  servingLabel:"1 wing",        countable:{ unitName:"wing",      gramsEach:45  } },
  "chicken roasted whole":        { name:"Roast Chicken (skin removed)",       category:"Meat", unit:"g", base:100, cal:190, prot:29,  carb:0,   fat:7.5, servingSize:150, servingLabel:"1 serving" },
  "chicken rotisserie":           { name:"Rotisserie Chicken",                 category:"Meat", unit:"g", base:100, cal:239, prot:27,  carb:0,   fat:14,  servingSize:150, servingLabel:"1 serving" },
  "chicken liver cooked":         { name:"Chicken Liver (cooked, pan-fried)",  category:"Meat", unit:"g", base:100, cal:163, prot:24,  carb:0.9, fat:6.5, servingSize:85,  servingLabel:"3 oz" },
  "chicken poached":              { name:"Chicken Breast (poached)",           category:"Meat", unit:"g", base:100, cal:150, prot:30,  carb:0,   fat:2.5, servingSize:150, servingLabel:"1 breast" },

  /* ── Chicken — Fried & Processed ──────────────────── */
  "fried chicken kfc style":      { name:"Fried Chicken (KFC-style, with skin)", category:"Meat", unit:"g", base:100, cal:320, prot:21,  carb:17,  fat:20,  servingSize:150, servingLabel:"1 piece",       countable:{ unitName:"piece",     gramsEach:150 } },
  "fried chicken crispy":         { name:"Crispy Fried Chicken (homemade)",    category:"Meat", unit:"g", base:100, cal:298, prot:22,  carb:12,  fat:19,  servingSize:150, servingLabel:"1 piece",        countable:{ unitName:"piece",     gramsEach:150 } },
  "chicken nuggets":              { name:"Chicken Nuggets",                    category:"Meat", unit:"g", base:100, cal:297, prot:15,  carb:19,  fat:18,  servingSize:20,  servingLabel:"1 nugget",       countable:{ unitName:"nugget",    gramsEach:20  } },
  "chicken strips tenders":       { name:"Chicken Strips / Tenders",           category:"Meat", unit:"g", base:100, cal:285, prot:18,  carb:16,  fat:15,  servingSize:55,  servingLabel:"1 tender",       countable:{ unitName:"tender",    gramsEach:55  } },
  "chicken patty":                { name:"Chicken Patty (burger)",             category:"Meat", unit:"g", base:100, cal:250, prot:14,  carb:15,  fat:14,  servingSize:120, servingLabel:"1 patty",        countable:{ unitName:"patty",     gramsEach:120 } },
  "chicken sausage":              { name:"Chicken Sausage",                    category:"Meat", unit:"g", base:100, cal:216, prot:16,  carb:4,   fat:15,  servingSize:50,  servingLabel:"1 link",         countable:{ unitName:"sausage",   gramsEach:50  } },
  "chicken hot dog":              { name:"Chicken Hot Dog",                    category:"Meat", unit:"g", base:100, cal:160, prot:9,   carb:4,   fat:12,  servingSize:45,  servingLabel:"1 hot dog",      countable:{ unitName:"hot dog",   gramsEach:45  } },

  /* ── Indian Chicken Preparations ──────────────────── */
  "chicken tikka":                { name:"Chicken Tikka (marinated, grilled)", category:"Meat", unit:"g", base:100, cal:185, prot:25,  carb:4,   fat:7.5, servingSize:150, servingLabel:"1 serving" },
  "tandoori chicken":             { name:"Tandoori Chicken",                   category:"Meat", unit:"g", base:100, cal:195, prot:26,  carb:5,   fat:8,   servingSize:200, servingLabel:"1 serving" },
  "chicken seekh kebab":          { name:"Chicken Seekh Kebab",                category:"Meat", unit:"g", base:100, cal:220, prot:22,  carb:8,   fat:11,  servingSize:75,  servingLabel:"1 kebab",        countable:{ unitName:"kebab",     gramsEach:75  } },
  "chicken reshmi kebab":         { name:"Chicken Reshmi Kebab",               category:"Meat", unit:"g", base:100, cal:215, prot:23,  carb:4,   fat:12,  servingSize:75,  servingLabel:"1 kebab",        countable:{ unitName:"kebab",     gramsEach:75  } },
  "chicken malai tikka":          { name:"Chicken Malai Tikka",                category:"Meat", unit:"g", base:100, cal:230, prot:22,  carb:3,   fat:14,  servingSize:100, servingLabel:"1 serving" },
  "chicken 65":                   { name:"Chicken 65 (South Indian)",          category:"Meat", unit:"g", base:100, cal:295, prot:25,  carb:14,  fat:14,  servingSize:150, servingLabel:"1 serving" },
  "chicken lollipop":             { name:"Chicken Lollipop",                   category:"Meat", unit:"g", base:100, cal:240, prot:18,  carb:12,  fat:13,  servingSize:45,  servingLabel:"1 piece",        countable:{ unitName:"lollipop",  gramsEach:45  } },
  "chicken fry south indian":     { name:"Chicken Fry (South Indian, dry)",    category:"Meat", unit:"g", base:100, cal:260, prot:24,  carb:5,   fat:16,  servingSize:150, servingLabel:"1 serving" },
  "chicken kebab grilled":        { name:"Chicken Kebab (grilled, skewered)",  category:"Meat", unit:"g", base:100, cal:200, prot:22,  carb:5,   fat:10,  servingSize:100, servingLabel:"2 skewers",      countable:{ unitName:"skewer",    gramsEach:60  } },

  /* ── Turkey ────────────────────────────────────────── */
  "turkey breast cooked":         { name:"Turkey Breast (cooked, no skin)",    category:"Meat", unit:"g", base:100, cal:135, prot:30,  carb:0,   fat:1,   servingSize:85,  servingLabel:"3 oz" },
  "turkey breast roasted":        { name:"Turkey Breast (roasted, sliced)",    category:"Meat", unit:"g", base:100, cal:161, prot:30,  carb:0,   fat:3.5, servingSize:85,  servingLabel:"3 oz" },
  "turkey ground cooked":         { name:"Ground Turkey (cooked, lean)",       category:"Meat", unit:"g", base:100, cal:189, prot:27,  carb:0,   fat:9,   servingSize:100, servingLabel:"3.5 oz" },
  "turkey mince":                 { name:"Turkey Mince (lean, raw)",           category:"Meat", unit:"g", base:100, cal:135, prot:19,  carb:0,   fat:6,   servingSize:100, servingLabel:"3.5 oz" },
  "turkey deli sliced":           { name:"Turkey Deli / Lunch Meat (sliced)",  category:"Meat", unit:"g", base:100, cal:104, prot:17,  carb:2.2, fat:2.9, servingSize:56,  servingLabel:"2 oz",          countable:{ unitName:"slice",     gramsEach:28  } },

  /* ── Duck & Other Poultry ──────────────────────────── */
  "duck breast cooked":           { name:"Duck Breast (cooked, no skin)",      category:"Meat", unit:"g", base:100, cal:201, prot:28,  carb:0,   fat:9.7, servingSize:150, servingLabel:"1 breast" },
  "duck breast skin on":          { name:"Duck Breast (cooked, skin-on)",      category:"Meat", unit:"g", base:100, cal:337, prot:19,  carb:0,   fat:28,  servingSize:150, servingLabel:"1 breast" },
  "duck confit":                  { name:"Duck Confit (slow-cooked in fat)",   category:"Meat", unit:"g", base:100, cal:388, prot:24,  carb:0,   fat:32,  servingSize:150, servingLabel:"1 leg" },
  "goose roasted":                { name:"Goose (roasted)",                    category:"Meat", unit:"g", base:100, cal:305, prot:25,  carb:0,   fat:22,  servingSize:150, servingLabel:"1 serving" },
  "quail cooked":                 { name:"Quail (cooked)",                     category:"Meat", unit:"g", base:100, cal:234, prot:25,  carb:0,   fat:14,  servingSize:100, servingLabel:"1 quail",       countable:{ unitName:"quail",     gramsEach:100 } },
  "pheasant cooked":              { name:"Pheasant (cooked)",                  category:"Meat", unit:"g", base:100, cal:213, prot:32,  carb:0,   fat:9,   servingSize:150, servingLabel:"1 serving" },

  /* ── Beef — Raw ────────────────────────────────────── */
  "beef mince raw 80":            { name:"Ground Beef (80% lean, raw)",        category:"Meat", unit:"g", base:100, cal:254, prot:17,  carb:0,   fat:20,  servingSize:100, servingLabel:"3.5 oz" },
  "beef mince raw 90":            { name:"Ground Beef (90% lean, raw)",        category:"Meat", unit:"g", base:100, cal:176, prot:20,  carb:0,   fat:10,  servingSize:100, servingLabel:"3.5 oz" },
  "beef sirloin raw":             { name:"Beef Sirloin (raw)",                 category:"Meat", unit:"g", base:100, cal:207, prot:21,  carb:0,   fat:13,  servingSize:170, servingLabel:"6 oz steak" },
  "beef ribeye raw":              { name:"Beef Ribeye (raw)",                  category:"Meat", unit:"g", base:100, cal:291, prot:18,  carb:0,   fat:24,  servingSize:170, servingLabel:"6 oz steak" },
  "beef tenderloin raw":          { name:"Beef Tenderloin / Fillet (raw)",     category:"Meat", unit:"g", base:100, cal:219, prot:20,  carb:0,   fat:15,  servingSize:170, servingLabel:"6 oz steak" },

  /* ── Beef — Cooked ─────────────────────────────────── */
  "beef mince cooked":            { name:"Ground Beef (cooked, 80% lean)",     category:"Meat", unit:"g", base:100, cal:254, prot:26,  carb:0,   fat:17,  servingSize:100, servingLabel:"3.5 oz" },
  "beef sirloin cooked":          { name:"Beef Sirloin (cooked)",              category:"Meat", unit:"g", base:100, cal:207, prot:26,  carb:0,   fat:10,  servingSize:85,  servingLabel:"3 oz" },
  "beef ribeye cooked":           { name:"Beef Ribeye (cooked, grilled)",      category:"Meat", unit:"g", base:100, cal:291, prot:24,  carb:0,   fat:20,  servingSize:170, servingLabel:"6 oz steak" },
  "beef tenderloin cooked":       { name:"Beef Tenderloin (cooked, medium)",   category:"Meat", unit:"g", base:100, cal:219, prot:27,  carb:0,   fat:11,  servingSize:170, servingLabel:"6 oz steak" },
  "beef striploin":               { name:"Beef Striploin / NY Strip (cooked)", category:"Meat", unit:"g", base:100, cal:271, prot:27,  carb:0,   fat:17,  servingSize:200, servingLabel:"1 steak" },
  "beef t-bone":                  { name:"Beef T-Bone Steak (cooked)",         category:"Meat", unit:"g", base:100, cal:278, prot:26,  carb:0,   fat:18,  servingSize:250, servingLabel:"1 steak" },
  "beef brisket cooked":          { name:"Beef Brisket (slow-cooked)",         category:"Meat", unit:"g", base:100, cal:289, prot:28,  carb:0,   fat:18,  servingSize:120, servingLabel:"4 oz" },
  "beef short ribs cooked":       { name:"Beef Short Ribs (braised)",          category:"Meat", unit:"g", base:100, cal:337, prot:23,  carb:0,   fat:26,  servingSize:150, servingLabel:"1 serving" },
  "beef liver cooked":            { name:"Beef Liver (pan-fried)",             category:"Meat", unit:"g", base:100, cal:175, prot:26,  carb:3.9, fat:4.9, servingSize:85,  servingLabel:"3 oz" },
  "beef flank steak":             { name:"Beef Flank Steak (cooked)",          category:"Meat", unit:"g", base:100, cal:192, prot:28,  carb:0,   fat:8.5, servingSize:170, servingLabel:"6 oz" },
  "beef chuck roast":             { name:"Beef Chuck Roast (slow-cooked)",     category:"Meat", unit:"g", base:100, cal:255, prot:26,  carb:0,   fat:16,  servingSize:120, servingLabel:"4 oz" },
  "beef meatballs":               { name:"Beef Meatballs (cooked)",            category:"Meat", unit:"g", base:100, cal:250, prot:17,  carb:7,   fat:17,  servingSize:30,  servingLabel:"1 meatball",    countable:{ unitName:"meatball",  gramsEach:30  } },
  "beef burger patty":            { name:"Beef Burger Patty (cooked, 80/20)",  category:"Meat", unit:"g", base:100, cal:295, prot:25,  carb:0,   fat:21,  servingSize:113, servingLabel:"4 oz patty",    countable:{ unitName:"patty",     gramsEach:113 } },
  "beef steak well done":         { name:"Beef Steak (well done)",             category:"Meat", unit:"g", base:100, cal:260, prot:30,  carb:0,   fat:15,  servingSize:200, servingLabel:"1 steak" },
  "beef stew chunks":             { name:"Beef Stew Chunks (braised)",         category:"Meat", unit:"g", base:100, cal:245, prot:25,  carb:0,   fat:15,  servingSize:150, servingLabel:"1 serving" },
  "corned beef":                  { name:"Corned Beef (canned / cooked)",      category:"Meat", unit:"g", base:100, cal:251, prot:18,  carb:0,   fat:19,  servingSize:56,  servingLabel:"2 oz" },

  /* ── Pork ──────────────────────────────────────────── */
  "pork chop raw":                { name:"Pork Chop (raw, boneless)",          category:"Meat", unit:"g", base:100, cal:180, prot:19,  carb:0,   fat:11,  servingSize:120, servingLabel:"1 chop" },
  "pork chop cooked":             { name:"Pork Chop (cooked, grilled)",        category:"Meat", unit:"g", base:100, cal:231, prot:25,  carb:0,   fat:14,  servingSize:120, servingLabel:"1 chop",        countable:{ unitName:"chop",      gramsEach:120 } },
  "pork tenderloin cooked":       { name:"Pork Tenderloin (cooked, lean)",     category:"Meat", unit:"g", base:100, cal:143, prot:26,  carb:0,   fat:3.5, servingSize:85,  servingLabel:"3 oz" },
  "pork loin cooked":             { name:"Pork Loin (roasted)",                category:"Meat", unit:"g", base:100, cal:246, prot:24,  carb:0,   fat:16,  servingSize:120, servingLabel:"4 oz" },
  "pork belly cooked":            { name:"Pork Belly (roasted / braised)",     category:"Meat", unit:"g", base:100, cal:518, prot:9,   carb:0,   fat:53,  servingSize:85,  servingLabel:"3 oz" },
  "pork ribs baby back":          { name:"Baby Back Ribs (cooked)",            category:"Meat", unit:"g", base:100, cal:389, prot:26,  carb:0,   fat:31,  servingSize:150, servingLabel:"3 ribs",        countable:{ unitName:"rib",       gramsEach:50  } },
  "pork ribs spare":              { name:"Spare Ribs (cooked)",                category:"Meat", unit:"g", base:100, cal:397, prot:29,  carb:0,   fat:30,  servingSize:150, servingLabel:"2–3 ribs" },
  "pork mince cooked":            { name:"Ground Pork (cooked)",               category:"Meat", unit:"g", base:100, cal:263, prot:18,  carb:0,   fat:21,  servingSize:100, servingLabel:"3.5 oz" },
  "pork shoulder pulled":         { name:"Pulled Pork (slow-cooked shoulder)", category:"Meat", unit:"g", base:100, cal:255, prot:22,  carb:3,   fat:17,  servingSize:150, servingLabel:"1 serving" },
  "pork schnitzel":               { name:"Pork Schnitzel (breaded, fried)",    category:"Meat", unit:"g", base:100, cal:280, prot:22,  carb:13,  fat:15,  servingSize:150, servingLabel:"1 schnitzel",   countable:{ unitName:"schnitzel", gramsEach:150 } },
  "bacon streaky cooked":         { name:"Streaky Bacon (cooked / crispy)",    category:"Meat", unit:"g", base:100, cal:541, prot:37,  carb:1.4, fat:42,  servingSize:8,   servingLabel:"1 rasher",      countable:{ unitName:"rasher",    gramsEach:8   } },
  "bacon back cooked":            { name:"Back Bacon / Canadian Bacon (cooked)",category:"Meat", unit:"g", base:100, cal:185, prot:25,  carb:0.5, fat:9,   servingSize:23,  servingLabel:"1 slice",       countable:{ unitName:"slice",     gramsEach:23  } },
  "ham cooked sliced":            { name:"Ham (cooked, sliced)",               category:"Meat", unit:"g", base:100, cal:145, prot:21,  carb:1.5, fat:5.5, servingSize:28,  servingLabel:"1 slice",       countable:{ unitName:"slice",     gramsEach:28  } },
  "ham hock":                     { name:"Ham Hock (braised)",                 category:"Meat", unit:"g", base:100, cal:234, prot:25,  carb:0,   fat:15,  servingSize:100, servingLabel:"1 serving" },
  "pork sausage cooked":          { name:"Pork Sausage / Banger (cooked)",     category:"Meat", unit:"g", base:100, cal:325, prot:14,  carb:1.3, fat:29,  servingSize:50,  servingLabel:"1 sausage",     countable:{ unitName:"sausage",   gramsEach:50  } },
  "hot dog":                      { name:"Hot Dog / Frankfurter",              category:"Meat", unit:"g", base:100, cal:290, prot:11,  carb:2.9, fat:26,  servingSize:57,  servingLabel:"1 hot dog",     countable:{ unitName:"hot dog",   gramsEach:57  } },
  "chorizo cooked":               { name:"Chorizo (cooked / pan-fried)",       category:"Meat", unit:"g", base:100, cal:455, prot:24,  carb:1.9, fat:38,  servingSize:55,  servingLabel:"1 link",        countable:{ unitName:"link",      gramsEach:55  } },
  "pepperoni":                    { name:"Pepperoni",                          category:"Meat", unit:"g", base:100, cal:494, prot:20,  carb:2,   fat:45,  servingSize:14,  servingLabel:"7 slices",      countable:{ unitName:"slice",     gramsEach:2   } },
  "salami":                       { name:"Salami (cured, sliced)",             category:"Meat", unit:"g", base:100, cal:336, prot:20,  carb:1.2, fat:28,  servingSize:30,  servingLabel:"3 slices",      countable:{ unitName:"slice",     gramsEach:10  } },
  "prosciutto":                   { name:"Prosciutto (cured ham)",             category:"Meat", unit:"g", base:100, cal:235, prot:29,  carb:0,   fat:13,  servingSize:14,  servingLabel:"2 slices",      countable:{ unitName:"slice",     gramsEach:7   } },
  "pancetta":                     { name:"Pancetta (Italian cured pork belly)",category:"Meat", unit:"g", base:100, cal:471, prot:20,  carb:0,   fat:43,  servingSize:15,  servingLabel:"2 thin slices",  countable:{ unitName:"slice",     gramsEach:8   } },

  /* ── Lamb & Goat ───────────────────────────────────── */
  "lamb leg cooked":              { name:"Lamb Leg (roasted)",                 category:"Meat", unit:"g", base:100, cal:258, prot:25,  carb:0,   fat:17,  servingSize:85,  servingLabel:"3 oz" },
  "lamb chop cooked":             { name:"Lamb Chop (grilled)",                category:"Meat", unit:"g", base:100, cal:297, prot:25,  carb:0,   fat:21,  servingSize:120, servingLabel:"1 chop",        countable:{ unitName:"chop",      gramsEach:120 } },
  "lamb shoulder cooked":         { name:"Lamb Shoulder (slow-roasted)",       category:"Meat", unit:"g", base:100, cal:305, prot:24,  carb:0,   fat:22,  servingSize:120, servingLabel:"4 oz" },
  "lamb rack":                    { name:"Rack of Lamb (cooked)",              category:"Meat", unit:"g", base:100, cal:295, prot:23,  carb:0,   fat:22,  servingSize:85,  servingLabel:"2–3 ribs",      countable:{ unitName:"rib",       gramsEach:40  } },
  "lamb mince":                   { name:"Lamb Mince (cooked)",                category:"Meat", unit:"g", base:100, cal:235, prot:18,  carb:3,   fat:17,  servingSize:100, servingLabel:"3.5 oz" },
  "lamb shank braised":           { name:"Lamb Shank (braised)",               category:"Meat", unit:"g", base:100, cal:255, prot:26,  carb:0,   fat:16,  servingSize:200, servingLabel:"1 shank",       countable:{ unitName:"shank",     gramsEach:200 } },
  "lamb liver cooked":            { name:"Lamb Liver (pan-fried)",             category:"Meat", unit:"g", base:100, cal:139, prot:22,  carb:3.3, fat:4.3, servingSize:85,  servingLabel:"3 oz" },
  "goat meat cooked":             { name:"Goat Meat / Mutton (cooked, bone-in)",category:"Meat", unit:"g", base:100, cal:143, prot:27,  carb:0,   fat:3,   servingSize:150, servingLabel:"1 serving" },
  "goat mince keema":             { name:"Goat Keema / Minced Goat",           category:"Meat", unit:"g", base:100, cal:175, prot:19,  carb:3,   fat:9,   servingSize:100, servingLabel:"3.5 oz" },
  "lamb kofta":                   { name:"Lamb Kofta (skewered, grilled)",     category:"Meat", unit:"g", base:100, cal:250, prot:17,  carb:5,   fat:18,  servingSize:60,  servingLabel:"1 kofta",       countable:{ unitName:"kofta",     gramsEach:60  } },

  /* ── Veal ──────────────────────────────────────────── */
  "veal chop cooked":             { name:"Veal Chop (cooked)",                 category:"Meat", unit:"g", base:100, cal:196, prot:27,  carb:0,   fat:9.5, servingSize:140, servingLabel:"1 chop",        countable:{ unitName:"chop",      gramsEach:140 } },
  "veal schnitzel":               { name:"Veal Schnitzel (breaded, fried)",    category:"Meat", unit:"g", base:100, cal:255, prot:23,  carb:11,  fat:13,  servingSize:150, servingLabel:"1 schnitzel",   countable:{ unitName:"schnitzel", gramsEach:150 } },
  "veal mince cooked":            { name:"Ground Veal (cooked)",               category:"Meat", unit:"g", base:100, cal:196, prot:27,  carb:0,   fat:9.5, servingSize:100, servingLabel:"3.5 oz" },

  /* ── Game & Exotic Meats ───────────────────────────── */
  "venison deer cooked":          { name:"Venison / Deer (cooked)",            category:"Meat", unit:"g", base:100, cal:158, prot:30,  carb:0,   fat:3.2, servingSize:85,  servingLabel:"3 oz" },
  "bison cooked":                 { name:"Bison (cooked, lean)",               category:"Meat", unit:"g", base:100, cal:146, prot:28,  carb:0,   fat:3,   servingSize:85,  servingLabel:"3 oz" },
  "rabbit cooked":                { name:"Rabbit (cooked)",                    category:"Meat", unit:"g", base:100, cal:197, prot:29,  carb:0,   fat:8,   servingSize:100, servingLabel:"1 serving" },
  "wild boar cooked":             { name:"Wild Boar (cooked)",                 category:"Meat", unit:"g", base:100, cal:160, prot:28,  carb:0,   fat:4.4, servingSize:100, servingLabel:"3.5 oz" },
  "ostrich cooked":               { name:"Ostrich (cooked, ground)",           category:"Meat", unit:"g", base:100, cal:175, prot:29,  carb:0,   fat:5.5, servingSize:85,  servingLabel:"3 oz" },
  "kangaroo cooked":              { name:"Kangaroo (cooked)",                  category:"Meat", unit:"g", base:100, cal:143, prot:28,  carb:0,   fat:2.7, servingSize:100, servingLabel:"3.5 oz" },

  /* ── Organ Meats / Offal ───────────────────────────── */
  "beef kidney cooked":           { name:"Beef Kidney (cooked)",               category:"Meat", unit:"g", base:100, cal:132, prot:23,  carb:0.8, fat:3.9, servingSize:85,  servingLabel:"3 oz" },
  "lamb kidney cooked":           { name:"Lamb Kidney (cooked)",               category:"Meat", unit:"g", base:100, cal:141, prot:24,  carb:1,   fat:4.3, servingSize:60,  servingLabel:"1 kidney",      countable:{ unitName:"kidney",    gramsEach:60  } },
  "pork liver cooked":            { name:"Pork Liver (pan-fried)",             category:"Meat", unit:"g", base:100, cal:165, prot:26,  carb:3.8, fat:4.6, servingSize:85,  servingLabel:"3 oz" },
  "chicken gizzard cooked":       { name:"Chicken Gizzard (cooked)",           category:"Meat", unit:"g", base:100, cal:154, prot:27,  carb:0,   fat:4,   servingSize:85,  servingLabel:"3 oz" },
  "beef tongue cooked":           { name:"Beef Tongue (cooked)",               category:"Meat", unit:"g", base:100, cal:284, prot:19,  carb:0,   fat:23,  servingSize:85,  servingLabel:"3 oz" },
  "tripe beef cooked":            { name:"Beef Tripe (cooked)",                category:"Meat", unit:"g", base:100, cal:100, prot:14,  carb:0,   fat:5,   servingSize:85,  servingLabel:"3 oz" },

  /* ── Deli & Processed Meats ────────────────────────── */
  "deli turkey":                  { name:"Turkey Deli Meat (sliced)",          category:"Meat", unit:"g", base:100, cal:104, prot:17,  carb:2.2, fat:2.9, servingSize:28,  servingLabel:"1 slice",       countable:{ unitName:"slice",     gramsEach:28  } },
  "deli chicken":                 { name:"Chicken Deli Meat (sliced)",         category:"Meat", unit:"g", base:100, cal:104, prot:17,  carb:1.8, fat:3,   servingSize:28,  servingLabel:"1 slice",       countable:{ unitName:"slice",     gramsEach:28  } },
  "deli ham":                     { name:"Ham Deli Meat (sliced)",             category:"Meat", unit:"g", base:100, cal:107, prot:17,  carb:2,   fat:3.5, servingSize:28,  servingLabel:"1 slice",       countable:{ unitName:"slice",     gramsEach:28  } },
  "deli roast beef":              { name:"Roast Beef Deli (sliced)",           category:"Meat", unit:"g", base:100, cal:150, prot:22,  carb:0,   fat:6,   servingSize:28,  servingLabel:"1 slice",       countable:{ unitName:"slice",     gramsEach:28  } },
  "mortadella":                   { name:"Mortadella",                         category:"Meat", unit:"g", base:100, cal:311, prot:14,  carb:1.5, fat:28,  servingSize:28,  servingLabel:"1 slice",       countable:{ unitName:"slice",     gramsEach:28  } },
  "pastrami":                     { name:"Pastrami",                           category:"Meat", unit:"g", base:100, cal:139, prot:18,  carb:1.5, fat:6,   servingSize:28,  servingLabel:"1 slice",       countable:{ unitName:"slice",     gramsEach:28  } },
  "spam":                         { name:"Spam (canned pork)",                 category:"Meat", unit:"g", base:100, cal:292, prot:13,  carb:3.1, fat:25,  servingSize:56,  servingLabel:"2 oz" },











/* ══════════════════════════════════════════════════════
     🐟  SEAFOOD — COMPLETE SECTION
  ══════════════════════════════════════════════════════ */

  /* ── Salmon ────────────────────────────────────────── */
  "salmon fillet cooked":         { name:"Salmon Fillet (cooked)",             category:"Seafood", unit:"g", base:100, cal:208, prot:20,  carb:0,   fat:13,  servingSize:150, servingLabel:"1 fillet" },
  "salmon fillet raw":            { name:"Salmon Fillet (raw)",                category:"Seafood", unit:"g", base:100, cal:142, prot:20,  carb:0,   fat:6.3, servingSize:150, servingLabel:"1 fillet" },
  "salmon atlantic grilled":      { name:"Atlantic Salmon (grilled)",          category:"Seafood", unit:"g", base:100, cal:206, prot:22,  carb:0,   fat:13,  servingSize:150, servingLabel:"1 fillet" },
  "salmon chinook cooked":        { name:"Chinook / King Salmon (cooked)",     category:"Seafood", unit:"g", base:100, cal:231, prot:25,  carb:0,   fat:14,  servingSize:150, servingLabel:"1 fillet" },
  "salmon pink canned":           { name:"Pink Salmon (canned in water)",      category:"Seafood", unit:"g", base:100, cal:138, prot:20,  carb:0,   fat:5.8, servingSize:85,  servingLabel:"3 oz" },
  "salmon red sockeye cooked":    { name:"Sockeye / Red Salmon (cooked)",      category:"Seafood", unit:"g", base:100, cal:216, prot:27,  carb:0,   fat:11,  servingSize:150, servingLabel:"1 fillet" },
  "salmon smoked":                { name:"Smoked Salmon (cold-smoked, lox)",   category:"Seafood", unit:"g", base:100, cal:117, prot:18,  carb:0,   fat:4.3, servingSize:30,  servingLabel:"1 oz" },
  "salmon smoked hot":            { name:"Hot-Smoked Salmon",                  category:"Seafood", unit:"g", base:100, cal:183, prot:20,  carb:0,   fat:11,  servingSize:60,  servingLabel:"2 oz" },
  "salmon gravlax":               { name:"Gravlax (cured salmon)",             category:"Seafood", unit:"g", base:100, cal:152, prot:20,  carb:0.1, fat:7.5, servingSize:30,  servingLabel:"1 oz" },
  "salmon sashimi":               { name:"Salmon Sashimi",                     category:"Seafood", unit:"g", base:100, cal:142, prot:20,  carb:0,   fat:6.3, servingSize:30,  servingLabel:"1 piece",   countable:{ unitName:"piece",     gramsEach:30  } },

  /* ── Tuna ──────────────────────────────────────────── */
  "tuna canned water":            { name:"Tuna (canned in water, drained)",    category:"Seafood", unit:"g", base:100, cal:116, prot:26,  carb:0,   fat:1,   servingSize:85,  servingLabel:"3 oz" },
  "tuna canned oil":              { name:"Tuna (canned in oil, drained)",      category:"Seafood", unit:"g", base:100, cal:198, prot:29,  carb:0,   fat:9,   servingSize:85,  servingLabel:"3 oz" },
  "tuna steak cooked":            { name:"Tuna Steak (cooked, yellowfin)",     category:"Seafood", unit:"g", base:100, cal:184, prot:30,  carb:0,   fat:6,   servingSize:150, servingLabel:"1 steak" },
  "tuna steak raw":               { name:"Tuna Steak (raw, yellowfin)",        category:"Seafood", unit:"g", base:100, cal:109, prot:24,  carb:0,   fat:1,   servingSize:150, servingLabel:"1 steak" },
  "tuna bluefin cooked":          { name:"Bluefin Tuna (cooked)",              category:"Seafood", unit:"g", base:100, cal:184, prot:30,  carb:0,   fat:6.3, servingSize:150, servingLabel:"1 steak" },
  "tuna sashimi":                 { name:"Tuna Sashimi",                       category:"Seafood", unit:"g", base:100, cal:108, prot:24,  carb:0,   fat:0.5, servingSize:30,  servingLabel:"1 piece",   countable:{ unitName:"piece",     gramsEach:30  } },
  "tuna salad canned":            { name:"Tuna Salad (with mayo, homemade)",   category:"Seafood", unit:"g", base:100, cal:187, prot:16,  carb:4,   fat:11,  servingSize:100, servingLabel:"½ cup" },

  /* ── Cod & White Fish ──────────────────────────────── */
  "cod fillet cooked":            { name:"Cod Fillet (cooked, baked)",         category:"Seafood", unit:"g", base:100, cal:105, prot:23,  carb:0,   fat:0.9, servingSize:150, servingLabel:"1 fillet" },
  "cod fillet raw":               { name:"Cod Fillet (raw)",                   category:"Seafood", unit:"g", base:100, cal:82,  prot:18,  carb:0,   fat:0.7, servingSize:150, servingLabel:"1 fillet" },
  "cod battered fried":           { name:"Cod (battered, fried, fish & chips)",category:"Seafood", unit:"g", base:100, cal:247, prot:15,  carb:17,  fat:13,  servingSize:180, servingLabel:"1 fillet" },
  "haddock cooked":               { name:"Haddock (cooked)",                   category:"Seafood", unit:"g", base:100, cal:112, prot:24,  carb:0,   fat:1,   servingSize:150, servingLabel:"1 fillet" },
  "haddock smoked":               { name:"Smoked Haddock",                     category:"Seafood", unit:"g", base:100, cal:116, prot:25,  carb:0,   fat:0.9, servingSize:150, servingLabel:"1 fillet" },
  "halibut cooked":               { name:"Halibut (cooked)",                   category:"Seafood", unit:"g", base:100, cal:140, prot:27,  carb:0,   fat:2.9, servingSize:150, servingLabel:"1 fillet" },
  "sea bass cooked":              { name:"Sea Bass (cooked)",                  category:"Seafood", unit:"g", base:100, cal:124, prot:24,  carb:0,   fat:2.6, servingSize:150, servingLabel:"1 fillet" },
  "snapper cooked":               { name:"Red Snapper (cooked)",               category:"Seafood", unit:"g", base:100, cal:128, prot:26,  carb:0,   fat:1.7, servingSize:150, servingLabel:"1 fillet" },
  "tilapia cooked":               { name:"Tilapia (cooked)",                   category:"Seafood", unit:"g", base:100, cal:128, prot:26,  carb:0,   fat:2.7, servingSize:150, servingLabel:"1 fillet" },
  "pollock cooked":               { name:"Pollock (cooked)",                   category:"Seafood", unit:"g", base:100, cal:92,  prot:19,  carb:0,   fat:1,   servingSize:150, servingLabel:"1 fillet" },
  "flounder cooked":              { name:"Flounder / Sole (cooked)",           category:"Seafood", unit:"g", base:100, cal:117, prot:24,  carb:0,   fat:1.5, servingSize:150, servingLabel:"1 fillet" },
  "catfish cooked":               { name:"Catfish (cooked)",                   category:"Seafood", unit:"g", base:100, cal:144, prot:19,  carb:6.8, fat:5,   servingSize:100, servingLabel:"1 fillet" },
  "grouper cooked":               { name:"Grouper (cooked)",                   category:"Seafood", unit:"g", base:100, cal:118, prot:25,  carb:0,   fat:1.3, servingSize:150, servingLabel:"1 fillet" },
  "mahi mahi cooked":             { name:"Mahi Mahi / Dolphinfish (cooked)",   category:"Seafood", unit:"g", base:100, cal:109, prot:24,  carb:0,   fat:0.9, servingSize:150, servingLabel:"1 fillet" },
  "barramundi cooked":            { name:"Barramundi / Asian Sea Bass (cooked)",category:"Seafood", unit:"g", base:100, cal:130, prot:24,  carb:0,   fat:3,   servingSize:150, servingLabel:"1 fillet" },
  "basa pangasius cooked":        { name:"Basa / Pangasius (cooked)",          category:"Seafood", unit:"g", base:100, cal:90,  prot:15,  carb:0,   fat:3,   servingSize:150, servingLabel:"1 fillet" },

  /* ── Indian Fish ───────────────────────────────────── */
  "rohu fish cooked":             { name:"Rohu Fish (cooked)",                 category:"Seafood", unit:"g", base:100, cal:97,  prot:17,  carb:0,   fat:2.7, servingSize:150, servingLabel:"1 serving" },
  "katla fish cooked":            { name:"Katla Fish (cooked)",                category:"Seafood", unit:"g", base:100, cal:111, prot:18,  carb:0,   fat:3.6, servingSize:150, servingLabel:"1 serving" },
  "hilsa ilish cooked":           { name:"Hilsa / Ilish (cooked)",             category:"Seafood", unit:"g", base:100, cal:273, prot:21,  carb:0,   fat:20,  servingSize:120, servingLabel:"1 serving" },
  "surmai king fish cooked":      { name:"Surmai / King Fish (cooked)",        category:"Seafood", unit:"g", base:100, cal:140, prot:22,  carb:0,   fat:5.5, servingSize:150, servingLabel:"1 piece" },
  "rawas indian salmon":          { name:"Rawas / Indian Salmon (cooked)",     category:"Seafood", unit:"g", base:100, cal:150, prot:22,  carb:0,   fat:6.5, servingSize:150, servingLabel:"1 fillet" },
  "pomfret cooked":               { name:"Pomfret (cooked)",                   category:"Seafood", unit:"g", base:100, cal:120, prot:21,  carb:0,   fat:3.5, servingSize:150, servingLabel:"1 fillet" },
  "pomfret fried":                { name:"Pomfret (shallow-fried, spiced)",    category:"Seafood", unit:"g", base:100, cal:185, prot:21,  carb:4,   fat:9,   servingSize:150, servingLabel:"1 fillet" },
  "bangda mackerel cooked":       { name:"Bangda / Indian Mackerel (cooked)",  category:"Seafood", unit:"g", base:100, cal:205, prot:19,  carb:0,   fat:13,  servingSize:150, servingLabel:"1 fish" },
  "bangda fried":                 { name:"Bangda / Mackerel (fried, Goan)",    category:"Seafood", unit:"g", base:100, cal:240, prot:19,  carb:5,   fat:15,  servingSize:150, servingLabel:"1 fish" },
  "seer fish neimeen":            { name:"Seer Fish / Neimeen (cooked)",       category:"Seafood", unit:"g", base:100, cal:130, prot:22,  carb:0,   fat:4.5, servingSize:150, servingLabel:"1 piece" },
  "tilapia oreochromis cooked":   { name:"Tilapia / Jalebi Fish (cooked, Indian)", category:"Seafood", unit:"g", base:100, cal:128, prot:26, carb:0,   fat:2.7, servingSize:150, servingLabel:"1 fillet" },
  "karimeen pearl spot":          { name:"Karimeen / Pearl Spot (cooked)",     category:"Seafood", unit:"g", base:100, cal:122, prot:21,  carb:0,   fat:3.8, servingSize:150, servingLabel:"1 fish",    countable:{ unitName:"fish",      gramsEach:150 } },
  "vanjaram cooked":              { name:"Vanjaram / Indo-Pacific King Mackerel", category:"Seafood", unit:"g", base:100, cal:145, prot:22, carb:0,   fat:6,   servingSize:150, servingLabel:"1 piece" },
  "nethili anchovy":              { name:"Nethili / Anchovy (fried, South India)", category:"Seafood", unit:"g", base:100, cal:220, prot:20, carb:8,   fat:12,  servingSize:80,  servingLabel:"1 serving" },
  "squid calamari cooked":        { name:"Squid / Koonthal (cooked)",          category:"Seafood", unit:"g", base:100, cal:175, prot:18,  carb:8,   fat:7.4, servingSize:100, servingLabel:"1 serving" },

  /* ── Oily / Fatty Fish ─────────────────────────────── */
  "mackerel atlantic cooked":     { name:"Atlantic Mackerel (cooked)",         category:"Seafood", unit:"g", base:100, cal:205, prot:19,  carb:0,   fat:13,  servingSize:150, servingLabel:"1 fillet" },
  "mackerel canned":              { name:"Mackerel (canned in brine)",         category:"Seafood", unit:"g", base:100, cal:189, prot:19,  carb:0,   fat:12,  servingSize:85,  servingLabel:"3 oz" },
  "sardines canned":              { name:"Sardines (canned in tomato sauce)",  category:"Seafood", unit:"g", base:100, cal:208, prot:25,  carb:2,   fat:11,  servingSize:85,  servingLabel:"3 oz" },
  "sardines fresh cooked":        { name:"Sardines (fresh, grilled)",          category:"Seafood", unit:"g", base:100, cal:185, prot:21,  carb:0,   fat:11,  servingSize:85,  servingLabel:"3 oz",      countable:{ unitName:"sardine",   gramsEach:30  } },
  "herring cooked":               { name:"Herring (cooked)",                   category:"Seafood", unit:"g", base:100, cal:217, prot:25,  carb:0,   fat:12,  servingSize:100, servingLabel:"1 fillet" },
  "herring pickled":              { name:"Pickled Herring / Rollmops",         category:"Seafood", unit:"g", base:100, cal:262, prot:14,  carb:9,   fat:18,  servingSize:50,  servingLabel:"1 piece",   countable:{ unitName:"piece",     gramsEach:50  } },
  "trout rainbow cooked":         { name:"Rainbow Trout (cooked)",             category:"Seafood", unit:"g", base:100, cal:190, prot:26,  carb:0,   fat:8.5, servingSize:150, servingLabel:"1 fillet" },
  "trout smoked":                 { name:"Smoked Trout",                       category:"Seafood", unit:"g", base:100, cal:186, prot:24,  carb:0,   fat:9,   servingSize:60,  servingLabel:"2 oz" },
  "anchovy canned oil":           { name:"Anchovies (canned in oil)",          category:"Seafood", unit:"g", base:100, cal:210, prot:29,  carb:0,   fat:10,  servingSize:4,   servingLabel:"1 fillet",  countable:{ unitName:"fillet",    gramsEach:4   } },
  "eel cooked":                   { name:"Eel / Unagi (cooked)",               category:"Seafood", unit:"g", base:100, cal:236, prot:23,  carb:0,   fat:15,  servingSize:100, servingLabel:"1 serving" },
  "eel smoked":                   { name:"Smoked Eel",                         category:"Seafood", unit:"g", base:100, cal:290, prot:19,  carb:0,   fat:23,  servingSize:60,  servingLabel:"2 oz" },
  "swordfish cooked":             { name:"Swordfish (cooked, grilled)",        category:"Seafood", unit:"g", base:100, cal:172, prot:28,  carb:0,   fat:5.7, servingSize:150, servingLabel:"1 steak" },
  "marlin cooked":                { name:"Marlin (cooked)",                    category:"Seafood", unit:"g", base:100, cal:121, prot:27,  carb:0,   fat:0.7, servingSize:150, servingLabel:"1 serving" },

  /* ── Prawns & Shrimp ───────────────────────────────── */
  "prawns shrimp cooked":         { name:"Prawns / Shrimp (boiled / steamed)", category:"Seafood", unit:"g", base:100, cal:99,  prot:24,  carb:0.2, fat:0.3, servingSize:100, servingLabel:"10–12 medium" },
  "prawns large tiger cooked":    { name:"Tiger / King Prawns (cooked)",       category:"Seafood", unit:"g", base:100, cal:106, prot:22,  carb:0,   fat:1.5, servingSize:120, servingLabel:"4–5 large" },
  "prawns fried":                 { name:"Prawns (fried, battered)",           category:"Seafood", unit:"g", base:100, cal:240, prot:18,  carb:15,  fat:12,  servingSize:100, servingLabel:"1 serving" },
  "prawns garlic butter":         { name:"Garlic Butter Prawns",               category:"Seafood", unit:"g", base:100, cal:180, prot:18,  carb:2,   fat:11,  servingSize:150, servingLabel:"1 serving" },
  "shrimp cocktail":              { name:"Shrimp Cocktail",                    category:"Seafood", unit:"g", base:100, cal:105, prot:18,  carb:5,   fat:1.5, servingSize:120, servingLabel:"1 serving" },
  "dried shrimp":                 { name:"Dried Shrimp / Dried Prawns",        category:"Seafood", unit:"g", base:100, cal:306, prot:62,  carb:0,   fat:4.3, servingSize:10,  servingLabel:"1 tbsp" },

  /* ── Lobster, Crab & Shellfish ─────────────────────── */
  "lobster cooked":               { name:"Lobster (steamed / boiled)",         category:"Seafood", unit:"g", base:100, cal:98,  prot:21,  carb:0.5, fat:0.9, servingSize:150, servingLabel:"1 serving" },
  "lobster tail cooked":          { name:"Lobster Tail (cooked)",              category:"Seafood", unit:"g", base:100, cal:98,  prot:21,  carb:0.5, fat:0.9, servingSize:150, servingLabel:"1 tail",    countable:{ unitName:"tail",      gramsEach:150 } },
  "crab cooked":                  { name:"Crab (cooked)",                      category:"Seafood", unit:"g", base:100, cal:97,  prot:19,  carb:0,   fat:1.5, servingSize:100, servingLabel:"1 serving" },
  "crab leg cooked":              { name:"King Crab Leg (cooked)",             category:"Seafood", unit:"g", base:100, cal:97,  prot:19,  carb:0,   fat:1.5, servingSize:100, servingLabel:"1 leg" },
  "crab canned":                  { name:"Crab Meat (canned)",                 category:"Seafood", unit:"g", base:100, cal:83,  prot:18,  carb:0,   fat:1,   servingSize:85,  servingLabel:"3 oz" },
  "imitation crab":               { name:"Imitation Crab / Surimi",            category:"Seafood", unit:"g", base:100, cal:95,  prot:8,   carb:14,  fat:0.8, servingSize:85,  servingLabel:"3 oz" },
  "crayfish cooked":              { name:"Crayfish / Crawfish (cooked)",       category:"Seafood", unit:"g", base:100, cal:82,  prot:17,  carb:0,   fat:1.1, servingSize:85,  servingLabel:"3 oz" },
  "langoustine cooked":           { name:"Langoustine / Dublin Bay Prawn",     category:"Seafood", unit:"g", base:100, cal:90,  prot:19,  carb:0,   fat:1.2, servingSize:100, servingLabel:"4–5 pieces" },

  /* ── Molluscs ──────────────────────────────────────── */
  "clams cooked":                 { name:"Clams (steamed)",                    category:"Seafood", unit:"g", base:100, cal:148, prot:26,  carb:5.1, fat:2,   servingSize:85,  servingLabel:"3 oz" },
  "clams canned":                 { name:"Clams (canned, chopped)",            category:"Seafood", unit:"g", base:100, cal:74,  prot:13,  carb:3.4, fat:1,   servingSize:85,  servingLabel:"3 oz" },
  "oysters raw":                  { name:"Oysters (raw)",                      category:"Seafood", unit:"g", base:100, cal:68,  prot:7,   carb:3.9, fat:2.5, servingSize:14,  servingLabel:"1 oyster",  countable:{ unitName:"oyster",    gramsEach:14  } },
  "oysters cooked":               { name:"Oysters (cooked, steamed)",          category:"Seafood", unit:"g", base:100, cal:163, prot:18,  carb:10,  fat:5,   servingSize:14,  servingLabel:"1 oyster",  countable:{ unitName:"oyster",    gramsEach:14  } },
  "oysters smoked":               { name:"Smoked Oysters (canned)",            category:"Seafood", unit:"g", base:100, cal:180, prot:20,  carb:10,  fat:7,   servingSize:56,  servingLabel:"¼ can" },
  "mussels cooked":               { name:"Mussels (cooked, steamed)",          category:"Seafood", unit:"g", base:100, cal:172, prot:24,  carb:7.4, fat:4.5, servingSize:100, servingLabel:"1 serving" },
  "mussels in white wine":        { name:"Mussels in White Wine (moules)",     category:"Seafood", unit:"g", base:100, cal:130, prot:14,  carb:7,   fat:4,   servingSize:200, servingLabel:"1 bowl" },
  "scallops cooked":              { name:"Scallops (seared / cooked)",         category:"Seafood", unit:"g", base:100, cal:111, prot:20,  carb:5.4, fat:1.4, servingSize:30,  servingLabel:"1 large",   countable:{ unitName:"scallop",   gramsEach:30  } },
  "scallops raw":                 { name:"Scallops (raw)",                     category:"Seafood", unit:"g", base:100, cal:88,  prot:17,  carb:3.2, fat:0.8, servingSize:30,  servingLabel:"1 large",   countable:{ unitName:"scallop",   gramsEach:30  } },
  "squid raw":                    { name:"Squid (raw)",                        category:"Seafood", unit:"g", base:100, cal:92,  prot:16,  carb:3.1, fat:1.4, servingSize:100, servingLabel:"1 serving" },
  "squid fried calamari":         { name:"Calamari (fried, rings)",            category:"Seafood", unit:"g", base:100, cal:240, prot:15,  carb:20,  fat:11,  servingSize:100, servingLabel:"1 serving" },
  "octopus cooked":               { name:"Octopus (cooked / grilled)",         category:"Seafood", unit:"g", base:100, cal:164, prot:30,  carb:4.4, fat:2.1, servingSize:100, servingLabel:"1 serving" },
  "octopus raw":                  { name:"Octopus (raw)",                      category:"Seafood", unit:"g", base:100, cal:82,  prot:15,  carb:2.2, fat:1,   servingSize:100, servingLabel:"1 serving" },
  "abalone cooked":               { name:"Abalone (cooked)",                   category:"Seafood", unit:"g", base:100, cal:105, prot:17,  carb:6,   fat:0.8, servingSize:85,  servingLabel:"3 oz" },
  "whelks cooked":                { name:"Whelks (cooked)",                    category:"Seafood", unit:"g", base:100, cal:138, prot:24,  carb:4.7, fat:1.2, servingSize:85,  servingLabel:"3 oz" },
  "cockles cooked":               { name:"Cockles (cooked)",                   category:"Seafood", unit:"g", base:100, cal:53,  prot:9,   carb:2.5, fat:0.6, servingSize:85,  servingLabel:"3 oz" },
  "periwinkles cooked":           { name:"Periwinkles (cooked)",               category:"Seafood", unit:"g", base:100, cal:105, prot:19,  carb:4,   fat:1.4, servingSize:85,  servingLabel:"3 oz" },
  "limpets cooked":               { name:"Limpets (cooked)",                   category:"Seafood", unit:"g", base:100, cal:129, prot:23,  carb:4,   fat:2,   servingSize:85,  servingLabel:"3 oz" },

  /* ── Roe & Fish Eggs ───────────────────────────────── */
  "caviar black":                 { name:"Black Caviar (sturgeon roe)",        category:"Seafood", unit:"g", base:100, cal:264, prot:25,  carb:4,   fat:17,  servingSize:16,  servingLabel:"1 tbsp" },
  "caviar red salmon roe":        { name:"Red Caviar / Salmon Roe",            category:"Seafood", unit:"g", base:100, cal:250, prot:25,  carb:5,   fat:15,  servingSize:16,  servingLabel:"1 tbsp" },
  "tobiko flying fish roe":       { name:"Tobiko / Flying Fish Roe",           category:"Seafood", unit:"g", base:100, cal:209, prot:36,  carb:5,   fat:5.5, servingSize:15,  servingLabel:"1 tbsp" },
  "cod roe smoked":               { name:"Smoked Cod Roe (taramasalata base)", category:"Seafood", unit:"g", base:100, cal:166, prot:20,  carb:0,   fat:9,   servingSize:30,  servingLabel:"2 tbsp" },
  "taramasalata":                 { name:"Taramasalata",                       category:"Seafood", unit:"g", base:100, cal:446, prot:3,   carb:5,   fat:46,  servingSize:30,  servingLabel:"2 tbsp" },

  /* ── Seaweed & Sea Vegetables ──────────────────────── */
  "nori dried":                   { name:"Nori (dried seaweed sheets)",        category:"Seafood", unit:"g", base:100, cal:35,  prot:5.8, carb:5,   fat:0.3, servingSize:3,   servingLabel:"1 sheet",   countable:{ unitName:"sheet",     gramsEach:3   } },
  "wakame dried":                 { name:"Wakame (dried seaweed)",             category:"Seafood", unit:"g", base:100, cal:45,  prot:3,   carb:9,   fat:0.6, servingSize:5,   servingLabel:"2 tbsp (dry)" },
  "kelp kombu":                   { name:"Kelp / Kombu (dried)",               category:"Seafood", unit:"g", base:100, cal:43,  prot:1.7, carb:9.6, fat:0.6, servingSize:7,   servingLabel:"1 strip (dry)" },
  "dulse flakes":                 { name:"Dulse (dried seaweed flakes)",       category:"Seafood", unit:"g", base:100, cal:264, prot:22,  carb:47,  fat:3.2, servingSize:7,   servingLabel:"2 tbsp" },

  /* ── Fish Products & Processed ────────────────────── */
  "fish fingers":                 { name:"Fish Fingers / Fish Sticks (baked)", category:"Seafood", unit:"g", base:100, cal:228, prot:13,  carb:20,  fat:10,  servingSize:22,  servingLabel:"1 fish finger", countable:{ unitName:"finger",    gramsEach:22  } },
  "fish fingers fried":           { name:"Fish Fingers (fried)",               category:"Seafood", unit:"g", base:100, cal:290, prot:12,  carb:21,  fat:17,  servingSize:22,  servingLabel:"1 fish finger", countable:{ unitName:"finger",    gramsEach:22  } },
  "fish cake":                    { name:"Fish Cake / Patty (pan-fried)",      category:"Seafood", unit:"g", base:100, cal:185, prot:14,  carb:16,  fat:7,   servingSize:70,  servingLabel:"1 cake",    countable:{ unitName:"cake",      gramsEach:70  } },
  "fish pie filling":             { name:"Fish Pie (mixed fish, creamy)",      category:"Seafood", unit:"g", base:100, cal:143, prot:11,  carb:11,  fat:5.5, servingSize:250, servingLabel:"1 portion" },
  "prawn crackers":               { name:"Prawn Crackers (fried)",             category:"Seafood", unit:"g", base:100, cal:490, prot:3.5, carb:67,  fat:22,  servingSize:25,  servingLabel:"1 small pack" },
  "fish sauce":                   { name:"Fish Sauce (Nam Pla)",               category:"Seafood", unit:"ml", base:100, cal:35,  prot:5,   carb:3.6, fat:0,   servingSize:15,  servingLabel:"1 tbsp" },
  "anchovy paste":                { name:"Anchovy Paste",                      category:"Seafood", unit:"g", base:100, cal:285, prot:18,  carb:0,   fat:23,  servingSize:5,   servingLabel:"1 tsp" },
  "surimi fish paste":            { name:"Surimi / Fish Paste",                category:"Seafood", unit:"g", base:100, cal:99,  prot:15,  carb:7,   fat:0.9, servingSize:85,  servingLabel:"3 oz" },
















/* ══════════════════════════════════════════════════════
     🥚  EGGS & DAIRY — COMPLETE SECTION
  ══════════════════════════════════════════════════════ */

  /* ── Eggs — Raw ────────────────────────────────────── */
  "egg whole raw":                { name:"Whole Egg (raw)",                    category:"Eggs & Dairy", unit:"g", base:50,  cal:72,  prot:6.3, carb:0.4, fat:5,   servingSize:50,  servingLabel:"1 large egg",   countable:{ unitName:"egg",        gramsEach:50   } },
  "egg white raw":                { name:"Egg White (raw)",                    category:"Eggs & Dairy", unit:"g", base:33,  cal:17,  prot:3.6, carb:0.2, fat:0.1, servingSize:33,  servingLabel:"1 egg white",   countable:{ unitName:"egg white",  gramsEach:33   } },
  "egg yolk raw":                 { name:"Egg Yolk (raw)",                     category:"Eggs & Dairy", unit:"g", base:17,  cal:55,  prot:2.7, carb:0.6, fat:4.5, servingSize:17,  servingLabel:"1 egg yolk",    countable:{ unitName:"egg yolk",   gramsEach:17   } },
  "egg small raw":                { name:"Whole Egg (small, raw)",             category:"Eggs & Dairy", unit:"g", base:38,  cal:54,  prot:4.8, carb:0.3, fat:3.8, servingSize:38,  servingLabel:"1 small egg",   countable:{ unitName:"egg",        gramsEach:38   } },
  "egg large raw":                { name:"Whole Egg (large, raw)",             category:"Eggs & Dairy", unit:"g", base:50,  cal:72,  prot:6.3, carb:0.4, fat:5,   servingSize:50,  servingLabel:"1 large egg",   countable:{ unitName:"egg",        gramsEach:50   } },
  "egg jumbo raw":                { name:"Whole Egg (jumbo / extra-large)",    category:"Eggs & Dairy", unit:"g", base:63,  cal:90,  prot:7.9, carb:0.5, fat:6.3, servingSize:63,  servingLabel:"1 jumbo egg",   countable:{ unitName:"egg",        gramsEach:63   } },

  /* ── Eggs — Cooked ─────────────────────────────────── */
  "egg boiled hard":              { name:"Hard Boiled Egg",                    category:"Eggs & Dairy", unit:"g", base:50,  cal:78,  prot:6.3, carb:0.6, fat:5.3, servingSize:50,  servingLabel:"1 egg",          countable:{ unitName:"egg",        gramsEach:50   } },
  "egg boiled soft":              { name:"Soft Boiled Egg",                    category:"Eggs & Dairy", unit:"g", base:50,  cal:72,  prot:6,   carb:0.5, fat:5,   servingSize:50,  servingLabel:"1 egg",          countable:{ unitName:"egg",        gramsEach:50   } },
  "egg poached":                  { name:"Poached Egg",                        category:"Eggs & Dairy", unit:"g", base:50,  cal:72,  prot:6.1, carb:0.4, fat:5,   servingSize:50,  servingLabel:"1 egg",          countable:{ unitName:"egg",        gramsEach:50   } },
  "egg fried":                    { name:"Fried Egg (sunny side up)",          category:"Eggs & Dairy", unit:"g", base:46,  cal:90,  prot:6.3, carb:0.4, fat:7,   servingSize:46,  servingLabel:"1 fried egg",    countable:{ unitName:"egg",        gramsEach:46   } },
  "egg fried over easy":          { name:"Fried Egg (over easy)",              category:"Eggs & Dairy", unit:"g", base:46,  cal:90,  prot:6.3, carb:0.4, fat:7,   servingSize:46,  servingLabel:"1 egg",          countable:{ unitName:"egg",        gramsEach:46   } },
  "egg scrambled plain":          { name:"Scrambled Eggs (plain, no milk)",    category:"Eggs & Dairy", unit:"g", base:100, cal:149, prot:10,  carb:1,   fat:11,  servingSize:100, servingLabel:"2 eggs scrambled" },
  "egg scrambled with milk":      { name:"Scrambled Eggs (with milk & butter)",category:"Eggs & Dairy", unit:"g", base:100, cal:166, prot:10,  carb:1.5, fat:13,  servingSize:110, servingLabel:"2 eggs scrambled" },
  "omelette plain":               { name:"Omelette (plain, 2 eggs)",           category:"Eggs & Dairy", unit:"g", base:100, cal:154, prot:11,  carb:0.6, fat:12,  servingSize:100, servingLabel:"1 omelette",     countable:{ unitName:"omelette",   gramsEach:100  } },
  "omelette cheese":              { name:"Cheese Omelette",                    category:"Eggs & Dairy", unit:"g", base:100, cal:210, prot:13,  carb:1.5, fat:17,  servingSize:110, servingLabel:"1 omelette",     countable:{ unitName:"omelette",   gramsEach:110  } },
  "omelette veggie":              { name:"Vegetable Omelette",                 category:"Eggs & Dairy", unit:"g", base:100, cal:160, prot:11,  carb:3,   fat:11,  servingSize:120, servingLabel:"1 omelette",     countable:{ unitName:"omelette",   gramsEach:120  } },
  "egg deviled":                  { name:"Deviled Egg (half)",                 category:"Eggs & Dairy", unit:"g", base:32,  cal:63,  prot:3.7, carb:0.5, fat:5.2, servingSize:32,  servingLabel:"1 half",         countable:{ unitName:"half",       gramsEach:32   } },
  "egg benedict":                 { name:"Eggs Benedict (2 eggs + hollandaise)", category:"Eggs & Dairy", unit:"g", base:100, cal:265, prot:10,  carb:17,  fat:18,  servingSize:250, servingLabel:"1 serving" },

  /* ── Special Eggs ──────────────────────────────────── */
  "egg quail":                    { name:"Quail Egg (boiled)",                 category:"Eggs & Dairy", unit:"g", base:9,   cal:14,  prot:1.2, carb:0.04,fat:1,   servingSize:9,   servingLabel:"1 quail egg",    countable:{ unitName:"egg",        gramsEach:9    } },
  "egg duck":                     { name:"Duck Egg (boiled)",                  category:"Eggs & Dairy", unit:"g", base:70,  cal:130, prot:9,   carb:1,   fat:10,  servingSize:70,  servingLabel:"1 duck egg",     countable:{ unitName:"egg",        gramsEach:70   } },
  "egg goose":                    { name:"Goose Egg (boiled)",                 category:"Eggs & Dairy", unit:"g", base:144, cal:265, prot:20,  carb:1.9, fat:19,  servingSize:144, servingLabel:"1 goose egg",    countable:{ unitName:"egg",        gramsEach:144  } },
  "egg salted century":           { name:"Century / Salted Egg (preserved)",   category:"Eggs & Dairy", unit:"g", base:50,  cal:80,  prot:7,   carb:1,   fat:5.5, servingSize:50,  servingLabel:"1 egg",          countable:{ unitName:"egg",        gramsEach:50   } },
  "liquid egg whites":            { name:"Liquid Egg Whites (carton)",         category:"Eggs & Dairy", unit:"ml", base:100, cal:52, prot:11,  carb:0.7, fat:0.2, servingSize:120, servingLabel:"½ cup" },

  /* ── Milk — Animal ─────────────────────────────────── */
  "milk whole":                   { name:"Whole Milk (3.25–3.5% fat)",        category:"Eggs & Dairy", unit:"ml", base:100, cal:61,  prot:3.2, carb:4.8, fat:3.3, servingSize:240, servingLabel:"1 cup" },
  "milk skim":                    { name:"Skim / Fat-Free Milk (0%)",          category:"Eggs & Dairy", unit:"ml", base:100, cal:34,  prot:3.4, carb:5,   fat:0.1, servingSize:240, servingLabel:"1 cup" },
  "milk 1 percent":               { name:"Low-Fat Milk (1%)",                  category:"Eggs & Dairy", unit:"ml", base:100, cal:42,  prot:3.4, carb:5,   fat:1,   servingSize:240, servingLabel:"1 cup" },
  "milk 2 percent":               { name:"Reduced-Fat Milk (2%)",              category:"Eggs & Dairy", unit:"ml", base:100, cal:50,  prot:3.3, carb:4.9, fat:2,   servingSize:240, servingLabel:"1 cup" },
  "milk buffalo":                 { name:"Buffalo Milk",                       category:"Eggs & Dairy", unit:"ml", base:100, cal:97,  prot:3.8, carb:5.2, fat:6.9, servingSize:240, servingLabel:"1 cup" },
  "milk goat":                    { name:"Goat Milk",                          category:"Eggs & Dairy", unit:"ml", base:100, cal:69,  prot:3.6, carb:4.5, fat:4.1, servingSize:240, servingLabel:"1 cup" },
  "milk sheep":                   { name:"Sheep Milk",                         category:"Eggs & Dairy", unit:"ml", base:100, cal:108, prot:5.4, carb:5.4, fat:7,   servingSize:240, servingLabel:"1 cup" },
  "milk condensed sweetened":     { name:"Sweetened Condensed Milk",           category:"Eggs & Dairy", unit:"g",  base:100, cal:321, prot:8,   carb:54,  fat:8.7, servingSize:39,  servingLabel:"2 tbsp" },
  "milk evaporated":              { name:"Evaporated Milk (unsweetened)",      category:"Eggs & Dairy", unit:"ml", base:100, cal:135, prot:7,   carb:10,  fat:7.6, servingSize:62,  servingLabel:"¼ cup" },
  "milk powder full fat":         { name:"Full-Fat Milk Powder",               category:"Eggs & Dairy", unit:"g",  base:100, cal:496, prot:26,  carb:38,  fat:27,  servingSize:28,  servingLabel:"¼ cup" },
  "milk powder skim":             { name:"Skim Milk Powder",                   category:"Eggs & Dairy", unit:"g",  base:100, cal:362, prot:36,  carb:52,  fat:0.8, servingSize:28,  servingLabel:"¼ cup" },

  /* ── Yogurt ────────────────────────────────────────── */
  "yogurt plain whole milk":      { name:"Plain Yogurt (whole milk)",          category:"Eggs & Dairy", unit:"g",  base:100, cal:61,  prot:3.5, carb:4.7, fat:3.3, servingSize:200, servingLabel:"1 cup" },
  "yogurt plain low fat":         { name:"Plain Yogurt (low-fat)",             category:"Eggs & Dairy", unit:"g",  base:100, cal:38,  prot:3.8, carb:5.1, fat:0.2, servingSize:200, servingLabel:"1 cup" },
  "yogurt greek plain":           { name:"Greek Yogurt (plain, 0% fat)",       category:"Eggs & Dairy", unit:"g",  base:100, cal:59,  prot:10,  carb:3.6, fat:0.4, servingSize:200, servingLabel:"1 container" },
  "yogurt greek full fat":        { name:"Greek Yogurt (full-fat)",            category:"Eggs & Dairy", unit:"g",  base:100, cal:97,  prot:9,   carb:3.9, fat:5,   servingSize:200, servingLabel:"1 container" },
  "yogurt flavored fruit":        { name:"Flavoured Yogurt (fruit / vanilla)", category:"Eggs & Dairy", unit:"g",  base:100, cal:95,  prot:3.5, carb:17,  fat:1.5, servingSize:170, servingLabel:"1 container" },
  "yogurt skyr icelandic":        { name:"Skyr (Icelandic-style, plain)",      category:"Eggs & Dairy", unit:"g",  base:100, cal:63,  prot:11,  carb:4,   fat:0.2, servingSize:170, servingLabel:"1 container" },
  "dahi homemade":                { name:"Dahi / Homemade Curd (set)",         category:"Eggs & Dairy", unit:"g",  base:100, cal:61,  prot:3.5, carb:4.7, fat:3.3, servingSize:200, servingLabel:"1 cup" },
  "dahi buffalo":                 { name:"Buffalo Milk Dahi / Curd",           category:"Eggs & Dairy", unit:"g",  base:100, cal:98,  prot:3.5, carb:5,   fat:7,   servingSize:200, servingLabel:"1 cup" },
  "yogurt labneh strained":       { name:"Labneh (strained yogurt cheese)",    category:"Eggs & Dairy", unit:"g",  base:100, cal:175, prot:10,  carb:5,   fat:13,  servingSize:30,  servingLabel:"2 tbsp" },
  "kefir plain":                  { name:"Kefir (plain, whole milk)",          category:"Eggs & Dairy", unit:"ml", base:100, cal:61,  prot:3.8, carb:5.4, fat:3,   servingSize:240, servingLabel:"1 cup" },
  "kefir low fat":                { name:"Kefir (low-fat)",                    category:"Eggs & Dairy", unit:"ml", base:100, cal:41,  prot:3.9, carb:4.8, fat:1,   servingSize:240, servingLabel:"1 cup" },

  /* ── Paneer & Indian Fresh Cheese ─────────────────── */
  "paneer full fat":              { name:"Paneer (full-fat)",                  category:"Eggs & Dairy", unit:"g",  base:100, cal:265, prot:18,  carb:1.2, fat:21,  servingSize:100, servingLabel:"1 serving" },
  "paneer low fat":               { name:"Paneer (low-fat / toned milk)",      category:"Eggs & Dairy", unit:"g",  base:100, cal:190, prot:17,  carb:2,   fat:12,  servingSize:100, servingLabel:"1 serving" },
  "chenna fresh":                 { name:"Chenna / Fresh Unset Paneer",        category:"Eggs & Dairy", unit:"g",  base:100, cal:234, prot:15,  carb:3,   fat:18,  servingSize:100, servingLabel:"1 serving" },
  "khoya mawa":                   { name:"Khoya / Mawa (reduced milk solids)", category:"Eggs & Dairy", unit:"g",  base:100, cal:421, prot:19,  carb:22,  fat:30,  servingSize:50,  servingLabel:"1 serving" },
  "shrikhand":                    { name:"Shrikhand (sweetened strained curd)",category:"Eggs & Dairy", unit:"g",  base:100, cal:241, prot:6,   carb:37,  fat:8,   servingSize:100, servingLabel:"1 serving" },
  "rabri":                        { name:"Rabri (thickened sweetened milk)",   category:"Eggs & Dairy", unit:"g",  base:100, cal:250, prot:6,   carb:33,  fat:11,  servingSize:100, servingLabel:"1 serving" },
  "basundi":                      { name:"Basundi",                            category:"Eggs & Dairy", unit:"g",  base:100, cal:215, prot:6,   carb:28,  fat:9,   servingSize:100, servingLabel:"1 serving" },
  "mishti doi":                   { name:"Mishti Doi (Bengali sweet curd)",    category:"Eggs & Dairy", unit:"g",  base:100, cal:112, prot:4.5, carb:16,  fat:3.5, servingSize:100, servingLabel:"1 cup" },

  /* ── Hard & Semi-Hard Cheeses ──────────────────────── */
  "cheese cheddar":               { name:"Cheddar Cheese",                     category:"Eggs & Dairy", unit:"g",  base:100, cal:402, prot:25,  carb:1.3, fat:33,  servingSize:28,  servingLabel:"1 oz",          countable:{ unitName:"slice",      gramsEach:21   } },
  "cheese mozzarella full fat":   { name:"Mozzarella (full-fat)",              category:"Eggs & Dairy", unit:"g",  base:100, cal:280, prot:28,  carb:2.2, fat:17,  servingSize:28,  servingLabel:"1 oz" },
  "cheese mozzarella part skim":  { name:"Mozzarella (part-skim)",             category:"Eggs & Dairy", unit:"g",  base:100, cal:254, prot:25,  carb:2.7, fat:16,  servingSize:28,  servingLabel:"1 oz" },
  "cheese mozzarella fresh":      { name:"Fresh Mozzarella (ball / burrata-style)", category:"Eggs & Dairy", unit:"g", base:100, cal:300, prot:22, carb:2.2, fat:23, servingSize:57, servingLabel:"2 oz" },
  "cheese parmesan":              { name:"Parmesan / Parmigiano-Reggiano",     category:"Eggs & Dairy", unit:"g",  base:100, cal:431, prot:38,  carb:4.1, fat:29,  servingSize:15,  servingLabel:"1 tbsp grated" },
  "cheese swiss":                 { name:"Swiss / Emmental Cheese",            category:"Eggs & Dairy", unit:"g",  base:100, cal:380, prot:27,  carb:5.4, fat:28,  servingSize:28,  servingLabel:"1 oz",          countable:{ unitName:"slice",      gramsEach:21   } },
  "cheese gouda":                 { name:"Gouda Cheese",                       category:"Eggs & Dairy", unit:"g",  base:100, cal:356, prot:25,  carb:2.2, fat:27,  servingSize:28,  servingLabel:"1 oz" },
  "cheese edam":                  { name:"Edam Cheese",                        category:"Eggs & Dairy", unit:"g",  base:100, cal:357, prot:25,  carb:1.4, fat:28,  servingSize:28,  servingLabel:"1 oz" },
  "cheese gruyere":               { name:"Gruyère Cheese",                     category:"Eggs & Dairy", unit:"g",  base:100, cal:413, prot:30,  carb:0.4, fat:32,  servingSize:28,  servingLabel:"1 oz" },
  "cheese manchego":              { name:"Manchego Cheese",                    category:"Eggs & Dairy", unit:"g",  base:100, cal:395, prot:25,  carb:0.5, fat:32,  servingSize:28,  servingLabel:"1 oz" },
  "cheese provolone":             { name:"Provolone Cheese",                   category:"Eggs & Dairy", unit:"g",  base:100, cal:351, prot:26,  carb:2.1, fat:27,  servingSize:28,  servingLabel:"1 oz",          countable:{ unitName:"slice",      gramsEach:21   } },
  "cheese colby jack":            { name:"Colby-Jack Cheese",                  category:"Eggs & Dairy", unit:"g",  base:100, cal:394, prot:24,  carb:2.9, fat:32,  servingSize:28,  servingLabel:"1 oz" },
  "cheese halloumi":              { name:"Halloumi (grilled)",                 category:"Eggs & Dairy", unit:"g",  base:100, cal:316, prot:23,  carb:1.2, fat:24,  servingSize:50,  servingLabel:"2 slices" },
  "cheese pecorino romano":       { name:"Pecorino Romano",                    category:"Eggs & Dairy", unit:"g",  base:100, cal:387, prot:31,  carb:0,   fat:29,  servingSize:14,  servingLabel:"1 tbsp grated" },
  "cheese jarlsberg":             { name:"Jarlsberg",                          category:"Eggs & Dairy", unit:"g",  base:100, cal:354, prot:27,  carb:0.5, fat:27,  servingSize:28,  servingLabel:"1 oz" },
  "cheese american":              { name:"American Cheese (processed slice)",  category:"Eggs & Dairy", unit:"g",  base:100, cal:313, prot:16,  carb:8,   fat:25,  servingSize:21,  servingLabel:"1 slice",       countable:{ unitName:"slice",      gramsEach:21   } },

  /* ── Soft & Fresh Cheeses ──────────────────────────── */
  "cheese brie":                  { name:"Brie Cheese",                        category:"Eggs & Dairy", unit:"g",  base:100, cal:334, prot:21,  carb:0.5, fat:28,  servingSize:28,  servingLabel:"1 oz" },
  "cheese camembert":             { name:"Camembert Cheese",                   category:"Eggs & Dairy", unit:"g",  base:100, cal:300, prot:20,  carb:0.5, fat:24,  servingSize:28,  servingLabel:"1 oz" },
  "cheese feta":                  { name:"Feta Cheese",                        category:"Eggs & Dairy", unit:"g",  base:100, cal:264, prot:14,  carb:4,   fat:21,  servingSize:28,  servingLabel:"1 oz crumbled" },
  "cheese cream":                 { name:"Cream Cheese (regular)",             category:"Eggs & Dairy", unit:"g",  base:100, cal:342, prot:6,   carb:4,   fat:34,  servingSize:28,  servingLabel:"2 tbsp" },
  "cheese cream light":           { name:"Cream Cheese (light / reduced-fat)", category:"Eggs & Dairy", unit:"g",  base:100, cal:231, prot:8,   carb:6,   fat:20,  servingSize:28,  servingLabel:"2 tbsp" },
  "cheese ricotta whole milk":    { name:"Ricotta Cheese (whole milk)",        category:"Eggs & Dairy", unit:"g",  base:100, cal:174, prot:11,  carb:3,   fat:13,  servingSize:62,  servingLabel:"¼ cup" },
  "cheese ricotta part skim":     { name:"Ricotta Cheese (part-skim)",         category:"Eggs & Dairy", unit:"g",  base:100, cal:138, prot:11,  carb:5,   fat:8,   servingSize:62,  servingLabel:"¼ cup" },
  "cheese cottage full fat":      { name:"Cottage Cheese (full-fat, 4%)",      category:"Eggs & Dairy", unit:"g",  base:100, cal:98,  prot:11,  carb:3.4, fat:4.3, servingSize:113, servingLabel:"½ cup" },
  "cheese cottage low fat":       { name:"Cottage Cheese (low-fat, 1–2%)",     category:"Eggs & Dairy", unit:"g",  base:100, cal:72,  prot:12,  carb:2.7, fat:1,   servingSize:113, servingLabel:"½ cup" },
  "cheese mascarpone":            { name:"Mascarpone",                         category:"Eggs & Dairy", unit:"g",  base:100, cal:429, prot:4,   carb:3.5, fat:44,  servingSize:28,  servingLabel:"2 tbsp" },
  "cheese boursin":               { name:"Boursin / Herb & Garlic Cheese",     category:"Eggs & Dairy", unit:"g",  base:100, cal:344, prot:9,   carb:2,   fat:33,  servingSize:28,  servingLabel:"2 tbsp" },
  "cheese goat chevre":           { name:"Goat Cheese / Chèvre (soft)",        category:"Eggs & Dairy", unit:"g",  base:100, cal:364, prot:22,  carb:2,   fat:30,  servingSize:28,  servingLabel:"1 oz" },
  "cheese string":                { name:"String Cheese / Mozzarella Stick",   category:"Eggs & Dairy", unit:"g",  base:100, cal:280, prot:28,  carb:2.5, fat:17,  servingSize:28,  servingLabel:"1 stick",       countable:{ unitName:"stick",      gramsEach:28   } },
  "cheese blue":                  { name:"Blue Cheese (Gorgonzola / Roquefort)",category:"Eggs & Dairy", unit:"g", base:100, cal:353, prot:21,  carb:2.3, fat:29,  servingSize:28,  servingLabel:"1 oz crumbled" },
  "cheese danish havarti":        { name:"Havarti Cheese",                     category:"Eggs & Dairy", unit:"g",  base:100, cal:371, prot:23,  carb:2,   fat:30,  servingSize:28,  servingLabel:"1 oz" },

  /* ── Butter & Ghee ─────────────────────────────────── */
  "butter salted":                { name:"Butter (salted)",                    category:"Eggs & Dairy", unit:"g",  base:100, cal:717, prot:0.9, carb:0.1, fat:81,  servingSize:14,  servingLabel:"1 tbsp" },
  "butter unsalted":              { name:"Butter (unsalted)",                  category:"Eggs & Dairy", unit:"g",  base:100, cal:717, prot:0.9, carb:0.1, fat:81,  servingSize:14,  servingLabel:"1 tbsp" },
  "butter whipped":               { name:"Whipped Butter",                     category:"Eggs & Dairy", unit:"g",  base:100, cal:717, prot:0.9, carb:0.1, fat:81,  servingSize:9,   servingLabel:"1 tbsp" },
  "ghee clarified butter":        { name:"Ghee (clarified butter)",            category:"Eggs & Dairy", unit:"g",  base:100, cal:900, prot:0,   carb:0,   fat:100, servingSize:14,  servingLabel:"1 tbsp" },
  "butter cultured":              { name:"Cultured / European-style Butter",   category:"Eggs & Dairy", unit:"g",  base:100, cal:717, prot:0.9, carb:0.3, fat:81,  servingSize:14,  servingLabel:"1 tbsp" },
  "margarine":                    { name:"Margarine (regular)",                category:"Eggs & Dairy", unit:"g",  base:100, cal:719, prot:0.2, carb:0.9, fat:81,  servingSize:14,  servingLabel:"1 tbsp" },
  "margarine light":              { name:"Margarine (light / reduced-fat)",    category:"Eggs & Dairy", unit:"g",  base:100, cal:394, prot:0.1, carb:0.5, fat:44,  servingSize:14,  servingLabel:"1 tbsp" },

  /* ── Cream ─────────────────────────────────────────── */
  "cream heavy whipping":         { name:"Heavy / Whipping Cream",             category:"Eggs & Dairy", unit:"ml", base:100, cal:340, prot:2.5, carb:2.8, fat:36,  servingSize:30,  servingLabel:"2 tbsp" },
  "cream double":                 { name:"Double Cream (48% fat)",             category:"Eggs & Dairy", unit:"ml", base:100, cal:449, prot:1.6, carb:1.6, fat:48,  servingSize:30,  servingLabel:"2 tbsp" },
  "cream single":                 { name:"Single Cream (18% fat)",             category:"Eggs & Dairy", unit:"ml", base:100, cal:193, prot:3,   carb:4.1, fat:19,  servingSize:30,  servingLabel:"2 tbsp" },
  "cream sour":                   { name:"Sour Cream",                         category:"Eggs & Dairy", unit:"g",  base:100, cal:198, prot:2.4, carb:4.6, fat:19,  servingSize:30,  servingLabel:"2 tbsp" },
  "cream sour light":             { name:"Sour Cream (light / reduced-fat)",   category:"Eggs & Dairy", unit:"g",  base:100, cal:120, prot:2.9, carb:7,   fat:9.5, servingSize:30,  servingLabel:"2 tbsp" },
  "cream creme fraiche":          { name:"Crème Fraîche",                      category:"Eggs & Dairy", unit:"g",  base:100, cal:292, prot:2.4, carb:2.9, fat:30,  servingSize:30,  servingLabel:"2 tbsp" },
  "cream whipped":                { name:"Whipped Cream (from heavy cream)",   category:"Eggs & Dairy", unit:"g",  base:100, cal:257, prot:2.2, carb:3.7, fat:27,  servingSize:15,  servingLabel:"1 tbsp" },
  "cream half and half":          { name:"Half and Half (10% fat)",            category:"Eggs & Dairy", unit:"ml", base:100, cal:130, prot:3.4, carb:4.3, fat:11.5,servingSize:30,  servingLabel:"2 tbsp" },
  "cream coffee creamer":         { name:"Liquid Coffee Creamer (non-dairy)",  category:"Eggs & Dairy", unit:"ml", base:100, cal:200, prot:0.5, carb:26,  fat:10,  servingSize:15,  servingLabel:"1 tbsp" },
  "cream coffee creamer powder":  { name:"Powdered Coffee Creamer",            category:"Eggs & Dairy", unit:"g",  base:100, cal:509, prot:3,   carb:66,  fat:25,  servingSize:4,   servingLabel:"1 tsp" },

  /* ── Ice Cream & Frozen Dairy ──────────────────────── */
  "ice cream vanilla":            { name:"Vanilla Ice Cream",                  category:"Eggs & Dairy", unit:"g",  base:100, cal:207, prot:3.5, carb:24,  fat:11,  servingSize:66,  servingLabel:"1 scoop" },
  "ice cream chocolate":          { name:"Chocolate Ice Cream",                category:"Eggs & Dairy", unit:"g",  base:100, cal:216, prot:3.8, carb:28,  fat:11,  servingSize:66,  servingLabel:"1 scoop" },
  "ice cream strawberry":         { name:"Strawberry Ice Cream",               category:"Eggs & Dairy", unit:"g",  base:100, cal:192, prot:3,   carb:26,  fat:9,   servingSize:66,  servingLabel:"1 scoop" },
  "ice cream cookies cream":      { name:"Cookies & Cream Ice Cream",          category:"Eggs & Dairy", unit:"g",  base:100, cal:225, prot:3.5, carb:28,  fat:11,  servingSize:66,  servingLabel:"1 scoop" },
  "ice cream premium":            { name:"Premium Ice Cream (high-fat, e.g. Häagen-Dazs)", category:"Eggs & Dairy", unit:"g", base:100, cal:280, prot:4, carb:25,  fat:18,  servingSize:90,  servingLabel:"1 scoop (large)" },
  "ice cream gelato":             { name:"Gelato (Italian, lower fat)",        category:"Eggs & Dairy", unit:"g",  base:100, cal:170, prot:3.5, carb:24,  fat:7,   servingSize:90,  servingLabel:"1 scoop" },
  "ice cream kulfi":              { name:"Kulfi (Indian ice cream)",           category:"Eggs & Dairy", unit:"g",  base:100, cal:240, prot:5,   carb:25,  fat:14,  servingSize:60,  servingLabel:"1 stick",       countable:{ unitName:"stick",      gramsEach:60   } },
  "frozen yogurt":                { name:"Frozen Yogurt (regular)",            category:"Eggs & Dairy", unit:"g",  base:100, cal:127, prot:3.7, carb:24,  fat:1.8, servingSize:113, servingLabel:"½ cup" },
  "sorbet mango":                 { name:"Mango Sorbet (dairy-free)",          category:"Eggs & Dairy", unit:"g",  base:100, cal:100, prot:0.4, carb:26,  fat:0.1, servingSize:100, servingLabel:"1 scoop" },
  "ice cream sandwich":           { name:"Ice Cream Sandwich",                 category:"Eggs & Dairy", unit:"g",  base:100, cal:260, prot:3.5, carb:39,  fat:10,  servingSize:75,  servingLabel:"1 sandwich",    countable:{ unitName:"sandwich",   gramsEach:75   } },

  /* ── Puddings & Custard ────────────────────────────── */
  "custard homemade":             { name:"Egg Custard (homemade, baked)",      category:"Eggs & Dairy", unit:"g",  base:100, cal:122, prot:4.1, carb:16,  fat:4.5, servingSize:120, servingLabel:"½ cup" },
  "custard powder made up":       { name:"Custard (from powder, with whole milk)", category:"Eggs & Dairy", unit:"g", base:100, cal:101, prot:3.5, carb:16, fat:2.8, servingSize:120, servingLabel:"½ cup" },
  "milk pudding rice":            { name:"Rice Pudding (creamy, whole milk)",  category:"Eggs & Dairy", unit:"g",  base:100, cal:130, prot:3.5, carb:22,  fat:3.5, servingSize:200, servingLabel:"1 cup" },
  "milk pudding bread":          { name:"Bread & Butter Pudding",             category:"Eggs & Dairy", unit:"g",  base:100, cal:190, prot:5.5, carb:28,  fat:6.5, servingSize:150, servingLabel:"1 serving",    countable:{ unitName:"slice",      gramsEach:150  } },
  "panna cotta":                  { name:"Panna Cotta",                        category:"Eggs & Dairy", unit:"g",  base:100, cal:218, prot:3,   carb:22,  fat:14,  servingSize:120, servingLabel:"1 serving" },
  "mousse chocolate":             { name:"Chocolate Mousse",                   category:"Eggs & Dairy", unit:"g",  base:100, cal:243, prot:4.6, carb:21,  fat:17,  servingSize:90,  servingLabel:"1 serving" },
  "creme brulee":                 { name:"Crème Brûlée",                       category:"Eggs & Dairy", unit:"g",  base:100, cal:340, prot:4,   carb:34,  fat:21,  servingSize:150, servingLabel:"1 ramekin" },
  "flan creme caramel":           { name:"Flan / Crème Caramel",               category:"Eggs & Dairy", unit:"g",  base:100, cal:122, prot:3.5, carb:19,  fat:3.5, servingSize:120, servingLabel:"1 serving" },
  "tiramisu":                     { name:"Tiramisu",                           category:"Eggs & Dairy", unit:"g",  base:100, cal:240, prot:5,   carb:26,  fat:13,  servingSize:120, servingLabel:"1 slice",       countable:{ unitName:"slice",      gramsEach:120  } },











 /* ══════════════════════════════════════════════════════
     🫘  LEGUMES & PULSES — COMPLETE SECTION.
  ══════════════════════════════════════════════════════ */

  /* ── Lentils (Cooked) ──────────────────────────────── */
  "lentils brown cooked":         { name:"Brown Lentils (cooked)",             category:"Legumes", unit:"g", base:100, cal:116, prot:9,   carb:20,  fat:0.4, servingSize:198, servingLabel:"1 cup" },
  "lentils green cooked":         { name:"Green Lentils / Puy (cooked)",       category:"Legumes", unit:"g", base:100, cal:116, prot:9,   carb:20,  fat:0.4, servingSize:198, servingLabel:"1 cup" },
  "lentils red split cooked":     { name:"Red Split Lentils (cooked)",         category:"Legumes", unit:"g", base:100, cal:116, prot:9,   carb:20,  fat:0.4, servingSize:198, servingLabel:"1 cup" },
  "lentils black beluga cooked":  { name:"Black Beluga Lentils (cooked)",      category:"Legumes", unit:"g", base:100, cal:116, prot:9,   carb:20,  fat:0.4, servingSize:198, servingLabel:"1 cup" },
  "lentils yellow cooked":        { name:"Yellow Lentils / Moong Dal (cooked)",category:"Legumes", unit:"g", base:100, cal:105, prot:7.5, carb:17,  fat:0.4, servingSize:198, servingLabel:"1 cup" },
  "lentils french puy dry":       { name:"French Puy Lentils (dry)",           category:"Legumes", unit:"g", base:100, cal:352, prot:25,  carb:60,  fat:1.1, servingSize:50,  servingLabel:"¼ cup dry" },

  /* ── Chickpeas / Garbanzo ──────────────────────────── */
  "chickpeas cooked":             { name:"Chickpeas / Garbanzo (cooked)",      category:"Legumes", unit:"g", base:100, cal:164, prot:8.9, carb:27,  fat:2.6, servingSize:164, servingLabel:"1 cup" },
  "chickpeas canned":             { name:"Chickpeas (canned, drained)",        category:"Legumes", unit:"g", base:100, cal:139, prot:7.2, carb:23,  fat:2.3, servingSize:130, servingLabel:"½ cup" },
  "chickpeas roasted":            { name:"Roasted Chickpeas (crispy snack)",   category:"Legumes", unit:"g", base:100, cal:364, prot:19,  carb:61,  fat:6,   servingSize:30,  servingLabel:"¼ cup" },
  "hummus plain":                 { name:"Hummus (plain, homemade)",           category:"Legumes", unit:"g", base:100, cal:166, prot:7.9, carb:14,  fat:9.6, servingSize:60,  servingLabel:"¼ cup" },
  "hummus roasted garlic":        { name:"Hummus (roasted garlic)",            category:"Legumes", unit:"g", base:100, cal:175, prot:7.5, carb:14,  fat:10,  servingSize:60,  servingLabel:"¼ cup" },
  "hummus red pepper":            { name:"Hummus (roasted red pepper)",        category:"Legumes", unit:"g", base:100, cal:165, prot:7,   carb:15,  fat:9.5, servingSize:60,  servingLabel:"¼ cup" },

  /* ── Black Beans ───────────────────────────────────── */
  "black beans cooked":           { name:"Black Beans (cooked)",               category:"Legumes", unit:"g", base:100, cal:132, prot:8.9, carb:24,  fat:0.5, servingSize:172, servingLabel:"1 cup" },
  "black beans canned":           { name:"Black Beans (canned, drained)",      category:"Legumes", unit:"g", base:100, cal:109, prot:7.5, carb:20,  fat:0.4, servingSize:130, servingLabel:"½ cup" },

  /* ── Kidney Beans ──────────────────────────────────── */
  "kidney beans red cooked":      { name:"Red Kidney Beans (cooked)",          category:"Legumes", unit:"g", base:100, cal:127, prot:8.7, carb:23,  fat:0.5, servingSize:177, servingLabel:"1 cup" },
  "kidney beans red canned":      { name:"Red Kidney Beans (canned, drained)", category:"Legumes", unit:"g", base:100, cal:112, prot:7.7, carb:20,  fat:0.4, servingSize:130, servingLabel:"½ cup" },
  "kidney beans dark red cooked": { name:"Dark Red Kidney Beans (cooked)",     category:"Legumes", unit:"g", base:100, cal:127, prot:8.7, carb:23,  fat:0.5, servingSize:177, servingLabel:"1 cup" },
  "kidney beans white cannellini": { name:"Cannellini / White Kidney Beans (cooked)", category:"Legumes", unit:"g", base:100, cal:139, prot:10, carb:25,  fat:0.4, servingSize:180, servingLabel:"1 cup" },

  /* ── Pinto & Borlotti Beans ────────────────────────── */
  "pinto beans cooked":           { name:"Pinto Beans (cooked)",               category:"Legumes", unit:"g", base:100, cal:143, prot:9,   carb:27,  fat:0.7, servingSize:171, servingLabel:"1 cup" },
  "pinto beans canned":           { name:"Pinto Beans (canned, drained)",      category:"Legumes", unit:"g", base:100, cal:120, prot:7.7, carb:22,  fat:0.5, servingSize:130, servingLabel:"½ cup" },
  "borlotti beans cooked":        { name:"Borlotti / Cranberry Beans (cooked)",category:"Legumes", unit:"g", base:100, cal:136, prot:9,   carb:24,  fat:0.5, servingSize:177, servingLabel:"1 cup" },
  "refried beans":                { name:"Refried Beans (from pinto beans)",   category:"Legumes", unit:"g", base:100, cal:90,  prot:5.5, carb:15,  fat:0.9, servingSize:130, servingLabel:"½ cup" },

  /* ── Navy, Great Northern & Other White Beans ──────── */
  "navy beans cooked":            { name:"Navy / Haricot Beans (cooked)",      category:"Legumes", unit:"g", base:100, cal:140, prot:8,   carb:26,  fat:0.6, servingSize:182, servingLabel:"1 cup" },
  "great northern beans cooked":  { name:"Great Northern Beans (cooked)",      category:"Legumes", unit:"g", base:100, cal:118, prot:8.3, carb:21,  fat:0.5, servingSize:177, servingLabel:"1 cup" },
  "butter beans lima cooked":     { name:"Butter / Lima Beans (cooked)",       category:"Legumes", unit:"g", base:100, cal:115, prot:7.8, carb:21,  fat:0.4, servingSize:170, servingLabel:"1 cup" },
  "flageolet beans cooked":       { name:"Flageolet Beans (cooked)",           category:"Legumes", unit:"g", base:100, cal:125, prot:8,   carb:23,  fat:0.5, servingSize:180, servingLabel:"1 cup" },
  "baked beans canned":           { name:"Baked Beans (canned in tomato sauce)",category:"Legumes", unit:"g", base:100, cal:94,  prot:4.8, carb:16,  fat:0.4, servingSize:200, servingLabel:"½ can" },

  /* ── Fava / Broad Beans ────────────────────────────── */
  "fava beans broad cooked":      { name:"Fava / Broad Beans (cooked, shelled)",category:"Legumes", unit:"g", base:100, cal:110, prot:7.6, carb:20,  fat:0.4, servingSize:170, servingLabel:"1 cup" },
  "fava beans dried":             { name:"Fava Beans (dried, raw)",            category:"Legumes", unit:"g", base:100, cal:341, prot:26,  carb:58,  fat:1.5, servingSize:50,  servingLabel:"¼ cup dry" },
  "ful medames":                  { name:"Ful Medames (Egyptian stewed fava)", category:"Legumes", unit:"g", base:100, cal:90,  prot:5.5, carb:13,  fat:1.5, servingSize:200, servingLabel:"1 cup" },

  /* ── Soybean & Soy Products ────────────────────────── */
  "soybeans cooked":              { name:"Soybeans (cooked)",                  category:"Legumes", unit:"g", base:100, cal:173, prot:17,  carb:10,  fat:9,   servingSize:172, servingLabel:"1 cup" },
  "edamame shelled":              { name:"Edamame (shelled, cooked)",          category:"Legumes", unit:"g", base:100, cal:121, prot:11,  carb:9,   fat:5.2, servingSize:155, servingLabel:"1 cup" },
  "edamame in pod":               { name:"Edamame (in pod, steamed)",          category:"Legumes", unit:"g", base:100, cal:75,  prot:6.9, carb:5.7, fat:3.3, servingSize:100, servingLabel:"~12 pods" },
  "tofu firm":                    { name:"Firm Tofu",                          category:"Legumes", unit:"g", base:100, cal:144, prot:17,  carb:2.8, fat:8.7, servingSize:126, servingLabel:"½ cup" },
  "tofu silken":                  { name:"Silken Tofu",                        category:"Legumes", unit:"g", base:100, cal:55,  prot:5,   carb:2.7, fat:2.5, servingSize:85,  servingLabel:"3 oz" },
  "tofu extra firm":              { name:"Extra-Firm Tofu",                    category:"Legumes", unit:"g", base:100, cal:160, prot:19,  carb:2.5, fat:9,   servingSize:126, servingLabel:"½ cup" },
  "tofu soft":                    { name:"Soft Tofu",                          category:"Legumes", unit:"g", base:100, cal:61,  prot:6.6, carb:2.3, fat:2.7, servingSize:85,  servingLabel:"3 oz" },
  "tofu smoked":                  { name:"Smoked Tofu",                        category:"Legumes", unit:"g", base:100, cal:175, prot:19,  carb:2,   fat:10,  servingSize:100, servingLabel:"3.5 oz" },
  "tempeh":                       { name:"Tempeh (fermented soy)",             category:"Legumes", unit:"g", base:100, cal:193, prot:20,  carb:9.4, fat:11,  servingSize:85,  servingLabel:"3 oz" },
  "natto":                        { name:"Natto (fermented soybeans)",         category:"Legumes", unit:"g", base:100, cal:212, prot:17,  carb:14,  fat:11,  servingSize:85,  servingLabel:"3 oz" },
  "miso paste white":             { name:"White Miso Paste (shiro miso)",      category:"Legumes", unit:"g", base:100, cal:199, prot:12,  carb:27,  fat:6,   servingSize:17,  servingLabel:"1 tbsp" },
  "miso paste red":               { name:"Red Miso Paste (aka miso)",          category:"Legumes", unit:"g", base:100, cal:218, prot:14,  carb:27,  fat:6.5, servingSize:17,  servingLabel:"1 tbsp" },
  "soy milk unsweetened":         { name:"Soy Milk (unsweetened)",             category:"Legumes", unit:"ml", base:100, cal:33,  prot:3.3, carb:1.7, fat:1.8, servingSize:240, servingLabel:"1 cup" },

  /* ── Adzuki, Mung & Small Beans ────────────────────── */
  "adzuki beans cooked":          { name:"Adzuki / Red Mung Beans (cooked)",   category:"Legumes", unit:"g", base:100, cal:128, prot:7.5, carb:25,  fat:0.1, servingSize:230, servingLabel:"1 cup" },
  "mung beans green whole cooked":{ name:"Whole Green Moong / Mung Beans (cooked)", category:"Legumes", unit:"g", base:100, cal:105, prot:7,  carb:19,  fat:0.4, servingSize:202, servingLabel:"1 cup" },
  "mung bean sprouts raw":        { name:"Mung Bean Sprouts (raw)",            category:"Legumes", unit:"g", base:100, cal:30,  prot:3,   carb:6,   fat:0.2, servingSize:104, servingLabel:"1 cup" },
  "mung bean sprouts cooked":     { name:"Mung Bean Sprouts (stir-fried)",     category:"Legumes", unit:"g", base:100, cal:26,  prot:2.5, carb:5.1, fat:0.1, servingSize:100, servingLabel:"1 cup" },
  "urad dal black cooked":        { name:"Urad Dal / Black Gram (whole, cooked)", category:"Legumes", unit:"g", base:100, cal:105, prot:6,  carb:20,  fat:0.5, servingSize:200, servingLabel:"1 cup" },
  "toor dal pigeon pea cooked":   { name:"Toor / Pigeon Pea Dal (cooked)",     category:"Legumes", unit:"g", base:100, cal:105, prot:7,   carb:18,  fat:0.4, servingSize:200, servingLabel:"1 cup" },
  "chana dal split cooked":       { name:"Chana Dal / Split Chickpea (cooked)",category:"Legumes", unit:"g", base:100, cal:164, prot:9,   carb:27,  fat:2.7, servingSize:200, servingLabel:"1 cup" },
  "masoor dal red cooked":        { name:"Masoor / Red Lentil Dal (cooked)",   category:"Legumes", unit:"g", base:100, cal:116, prot:9,   carb:20,  fat:0.4, servingSize:200, servingLabel:"1 cup" },
  "cowpea lobia cooked":          { name:"Cowpea / Lobia (cooked)",            category:"Legumes", unit:"g", base:100, cal:116, prot:8,   carb:21,  fat:0.5, servingSize:172, servingLabel:"1 cup" },
  "black eyed peas cooked":       { name:"Black-Eyed Peas (cooked)",           category:"Legumes", unit:"g", base:100, cal:116, prot:8,   carb:21,  fat:0.5, servingSize:172, servingLabel:"1 cup" },
  "moth beans matki cooked":      { name:"Moth Beans / Matki (cooked)",        category:"Legumes", unit:"g", base:100, cal:143, prot:10,  carb:25,  fat:0.5, servingSize:200, servingLabel:"1 cup" },
  "horse gram kulthi cooked":     { name:"Horse Gram / Kulthi (cooked)",       category:"Legumes", unit:"g", base:100, cal:321, prot:22,  carb:57,  fat:0.5, servingSize:100, servingLabel:"½ cup" },
  "val field beans cooked":       { name:"Val / Field Beans (cooked)",         category:"Legumes", unit:"g", base:100, cal:130, prot:9,   carb:22,  fat:0.5, servingSize:200, servingLabel:"1 cup" },
  "lupini beans cooked":          { name:"Lupini Beans (cooked, drained)",     category:"Legumes", unit:"g", base:100, cal:119, prot:16,  carb:10,  fat:2.9, servingSize:85,  servingLabel:"3 oz" },

  /* ── Peas ──────────────────────────────────────────── */
  "green peas cooked":            { name:"Green Peas (cooked)",                category:"Legumes", unit:"g", base:100, cal:84,  prot:5.4, carb:16,  fat:0.2, servingSize:160, servingLabel:"1 cup" },
  "green peas frozen":            { name:"Green Peas (frozen)",                category:"Legumes", unit:"g", base:100, cal:77,  prot:5,   carb:14,  fat:0.4, servingSize:100, servingLabel:"½ cup" },
  "green peas canned":            { name:"Green Peas (canned, drained)",       category:"Legumes", unit:"g", base:100, cal:69,  prot:4.4, carb:12,  fat:0.5, servingSize:100, servingLabel:"½ cup" },
  "split peas yellow cooked":     { name:"Yellow Split Peas (cooked)",         category:"Legumes", unit:"g", base:100, cal:118, prot:8.3, carb:21,  fat:0.4, servingSize:196, servingLabel:"1 cup" },
  "split peas green cooked":      { name:"Green Split Peas (cooked)",          category:"Legumes", unit:"g", base:100, cal:118, prot:8.3, carb:21,  fat:0.4, servingSize:196, servingLabel:"1 cup" },
  "snow peas raw":                { name:"Snow Peas / Mangetout (raw)",        category:"Legumes", unit:"g", base:100, cal:42,  prot:2.8, carb:7.5, fat:0.2, servingSize:98,  servingLabel:"1 cup" },
  "snap peas sugar":              { name:"Sugar Snap Peas (raw)",              category:"Legumes", unit:"g", base:100, cal:42,  prot:2.8, carb:7.5, fat:0.2, servingSize:63,  servingLabel:"½ cup" },

  /* ── Specialty & Sprouted ──────────────────────────── */
  "lentil sprouts":               { name:"Lentil Sprouts (raw)",               category:"Legumes", unit:"g", base:100, cal:106, prot:9,   carb:22,  fat:0.5, servingSize:77,  servingLabel:"1 cup" },
  "chickpea sprouts":             { name:"Chickpea Sprouts (raw)",             category:"Legumes", unit:"g", base:100, cal:148, prot:8,   carb:27,  fat:2.5, servingSize:100, servingLabel:"½ cup" },
  "soy sprouts cooked":           { name:"Soybean Sprouts (cooked)",           category:"Legumes", unit:"g", base:100, cal:48,  prot:5.8, carb:3.7, fat:1.4, servingSize:94,  servingLabel:"1 cup" },
  "dal sprouts mixed":            { name:"Mixed Dal Sprouts (raw, salad)",     category:"Legumes", unit:"g", base:100, cal:95,  prot:7,   carb:16,  fat:0.5, servingSize:100, servingLabel:"½ cup" },

  /* ── Flour & Processed Legumes ─────────────────────── */
  "besan gram flour":             { name:"Besan / Gram / Chickpea Flour",      category:"Legumes", unit:"g", base:100, cal:387, prot:22,  carb:58,  fat:6,   servingSize:30,  servingLabel:"¼ cup" },
  "lentil flour":                 { name:"Lentil Flour (red lentil)",          category:"Legumes", unit:"g", base:100, cal:349, prot:26,  carb:60,  fat:1,   servingSize:30,  servingLabel:"¼ cup" },
  "soy flour defatted":           { name:"Soy Flour (defatted)",               category:"Legumes", unit:"g", base:100, cal:329, prot:47,  carb:35,  fat:1.2, servingSize:28,  servingLabel:"¼ cup" },
  "pea protein powder":           { name:"Pea Protein Powder (isolate)",       category:"Legumes", unit:"g", base:100, cal:370, prot:80,  carb:5,   fat:5,   servingSize:30,  servingLabel:"1 scoop",       countable:{ unitName:"scoop", gramsEach:30 } },
  "textured veg protein tvp dry": { name:"Textured Vegetable Protein / TVP (dry)", category:"Legumes", unit:"g", base:100, cal:333, prot:52, carb:35,  fat:1,   servingSize:28,  servingLabel:"¼ cup dry" },
  "textured veg protein cooked":  { name:"TVP / Soya Mince (cooked / rehydrated)", category:"Legumes", unit:"g", base:100, cal:90,  prot:14, carb:8,   fat:0.3, servingSize:100, servingLabel:"½ cup cooked" },
  "falafel":                      { name:"Falafel (fried chickpea balls)",     category:"Legumes", unit:"g", base:100, cal:333, prot:13,  carb:32,  fat:18,  servingSize:25,  servingLabel:"1 ball",        countable:{ unitName:"ball",  gramsEach:25 } },
  "falafel baked":                { name:"Falafel (baked, lower fat)",         category:"Legumes", unit:"g", base:100, cal:250, prot:12,  carb:33,  fat:9,   servingSize:25,  servingLabel:"1 ball",        countable:{ unitName:"ball",  gramsEach:25 } },
  "dal vada":                     { name:"Dal Vada / Masala Vada (fried)",     category:"Legumes", unit:"g", base:100, cal:315, prot:10,  carb:36,  fat:14,  servingSize:45,  servingLabel:"1 vada",        countable:{ unitName:"vada",  gramsEach:45 } },
  "moong dal chilla":             { name:"Moong Dal Cheela / Chilla",          category:"Legumes", unit:"g", base:100, cal:175, prot:8,   carb:24,  fat:5,   servingSize:60,  servingLabel:"1 cheela",      countable:{ unitName:"cheela",gramsEach:60 } },















 /* ══════════════════════════════════════════════════════
     🥦  VEGETABLES — COMPLETE SECTION
  ══════════════════════════════════════════════════════ */

  /* ── Leafy Greens ──────────────────────────────────── */
  "spinach raw":                  { name:"Spinach (raw)",                      category:"Vegetables", unit:"g", base:100, cal:23,  prot:2.9, carb:3.6, fat:0.4, servingSize:30,  servingLabel:"1 cup raw" },
  "spinach cooked":               { name:"Spinach / Palak (cooked)",           category:"Vegetables", unit:"g", base:100, cal:41,  prot:5.4, carb:4,   fat:0.5, servingSize:180, servingLabel:"1 cup cooked" },
  "kale raw":                     { name:"Kale (raw)",                         category:"Vegetables", unit:"g", base:100, cal:49,  prot:4.3, carb:9,   fat:0.9, servingSize:67,  servingLabel:"1 cup chopped" },
  "kale cooked":                  { name:"Kale (cooked, steamed)",             category:"Vegetables", unit:"g", base:100, cal:35,  prot:2.5, carb:7.3, fat:0.5, servingSize:130, servingLabel:"1 cup cooked" },
  "lettuce romaine":              { name:"Romaine Lettuce",                    category:"Vegetables", unit:"g", base:100, cal:17,  prot:1.2, carb:3.3, fat:0.3, servingSize:47,  servingLabel:"1 cup shredded" },
  "lettuce iceberg":              { name:"Iceberg Lettuce",                    category:"Vegetables", unit:"g", base:100, cal:14,  prot:0.9, carb:2.9, fat:0.1, servingSize:72,  servingLabel:"1 cup shredded" },
  "lettuce butter":               { name:"Butter / Butterhead Lettuce",        category:"Vegetables", unit:"g", base:100, cal:13,  prot:1.4, carb:2.2, fat:0.2, servingSize:55,  servingLabel:"1 cup" },
  "arugula rocket":               { name:"Arugula / Rocket (raw)",             category:"Vegetables", unit:"g", base:100, cal:25,  prot:2.6, carb:3.7, fat:0.7, servingSize:20,  servingLabel:"1 cup" },
  "swiss chard cooked":           { name:"Swiss Chard (cooked)",               category:"Vegetables", unit:"g", base:100, cal:20,  prot:1.9, carb:4.1, fat:0.1, servingSize:175, servingLabel:"1 cup cooked" },
  "collard greens cooked":        { name:"Collard Greens (cooked)",            category:"Vegetables", unit:"g", base:100, cal:33,  prot:2.7, carb:6.4, fat:0.7, servingSize:190, servingLabel:"1 cup cooked" },
  "bok choy cooked":              { name:"Bok Choy / Pak Choi (cooked)",       category:"Vegetables", unit:"g", base:100, cal:13,  prot:1.8, carb:2.2, fat:0.2, servingSize:170, servingLabel:"1 cup cooked" },
  "bok choy raw":                 { name:"Bok Choy (raw)",                     category:"Vegetables", unit:"g", base:100, cal:13,  prot:1.5, carb:2.2, fat:0.2, servingSize:70,  servingLabel:"1 cup chopped" },
  "watercress":                   { name:"Watercress (raw)",                   category:"Vegetables", unit:"g", base:100, cal:11,  prot:2.3, carb:1.3, fat:0.1, servingSize:34,  servingLabel:"1 cup" },
  "radicchio":                    { name:"Radicchio (raw)",                    category:"Vegetables", unit:"g", base:100, cal:23,  prot:1.4, carb:4.5, fat:0.3, servingSize:40,  servingLabel:"1 cup shredded" },
  "endive chicory":               { name:"Endive / Chicory (raw)",             category:"Vegetables", unit:"g", base:100, cal:17,  prot:1.3, carb:3.4, fat:0.2, servingSize:50,  servingLabel:"1 cup" },
  "fenugreek leaves methi":       { name:"Fenugreek Leaves / Methi (raw)",     category:"Vegetables", unit:"g", base:100, cal:49,  prot:4.4, carb:6,   fat:0.9, servingSize:30,  servingLabel:"1 cup" },
  "methi cooked":                 { name:"Methi / Fenugreek Leaves (cooked)",  category:"Vegetables", unit:"g", base:100, cal:55,  prot:4.5, carb:7,   fat:1,   servingSize:180, servingLabel:"1 cup cooked" },
  "amaranth leaves thotakura":    { name:"Amaranth Leaves / Thotakura",        category:"Vegetables", unit:"g", base:100, cal:23,  prot:2.5, carb:4,   fat:0.3, servingSize:132, servingLabel:"1 cup" },
  "drumstick moringa leaves":     { name:"Moringa / Drumstick Leaves",         category:"Vegetables", unit:"g", base:100, cal:64,  prot:9.4, carb:8.3, fat:1.4, servingSize:21,  servingLabel:"1 cup raw" },
  "curry leaves":                 { name:"Curry Leaves / Karivepilai",         category:"Vegetables", unit:"g", base:100, cal:108, prot:6.1, carb:19,  fat:1,   servingSize:5,   servingLabel:"1 sprig" },
  "microgreens mixed":            { name:"Microgreens (mixed)",                category:"Vegetables", unit:"g", base:100, cal:25,  prot:2.5, carb:3.5, fat:0.4, servingSize:25,  servingLabel:"1 oz" },
  "pea shoots":                   { name:"Pea Shoots (raw)",                   category:"Vegetables", unit:"g", base:100, cal:30,  prot:3,   carb:5,   fat:0.4, servingSize:50,  servingLabel:"1 cup" },

  /* ── Brassicas / Cruciferous ───────────────────────── */
  "broccoli raw":                 { name:"Broccoli (raw)",                     category:"Vegetables", unit:"g", base:100, cal:34,  prot:2.8, carb:7,   fat:0.4, servingSize:91,  servingLabel:"1 cup chopped" },
  "broccoli cooked":              { name:"Broccoli (cooked, steamed)",         category:"Vegetables", unit:"g", base:100, cal:35,  prot:2.4, carb:7.2, fat:0.4, servingSize:156, servingLabel:"1 cup cooked" },
  "broccolini":                   { name:"Broccolini / Baby Broccoli",         category:"Vegetables", unit:"g", base:100, cal:35,  prot:3,   carb:6.5, fat:0.5, servingSize:85,  servingLabel:"1 serving" },
  "broccoli rabe rapini":         { name:"Broccoli Rabe / Rapini (cooked)",    category:"Vegetables", unit:"g", base:100, cal:33,  prot:3.8, carb:3.1, fat:0.8, servingSize:85,  servingLabel:"1 serving" },
  "cauliflower raw":              { name:"Cauliflower (raw)",                  category:"Vegetables", unit:"g", base:100, cal:25,  prot:1.9, carb:5,   fat:0.3, servingSize:107, servingLabel:"1 cup" },
  "cauliflower cooked":           { name:"Cauliflower (cooked, steamed)",      category:"Vegetables", unit:"g", base:100, cal:23,  prot:1.8, carb:4.5, fat:0.3, servingSize:124, servingLabel:"1 cup cooked" },
  "cauliflower rice":             { name:"Cauliflower Rice (raw, grated)",     category:"Vegetables", unit:"g", base:100, cal:25,  prot:1.9, carb:5,   fat:0.3, servingSize:100, servingLabel:"1 cup" },
  "cabbage green raw":            { name:"Cabbage (green, raw)",               category:"Vegetables", unit:"g", base:100, cal:25,  prot:1.3, carb:6,   fat:0.1, servingSize:89,  servingLabel:"1 cup shredded" },
  "cabbage green cooked":         { name:"Cabbage (green, cooked)",            category:"Vegetables", unit:"g", base:100, cal:23,  prot:1.3, carb:5.5, fat:0.1, servingSize:150, servingLabel:"1 cup cooked" },
  "cabbage red raw":              { name:"Red Cabbage (raw)",                  category:"Vegetables", unit:"g", base:100, cal:31,  prot:1.4, carb:7.4, fat:0.2, servingSize:89,  servingLabel:"1 cup shredded" },
  "cabbage savoy":                { name:"Savoy Cabbage",                      category:"Vegetables", unit:"g", base:100, cal:27,  prot:2,   carb:5.9, fat:0.1, servingSize:70,  servingLabel:"1 cup shredded" },
  "cabbage napa chinese":         { name:"Napa / Chinese Cabbage",             category:"Vegetables", unit:"g", base:100, cal:16,  prot:1.2, carb:3.2, fat:0.2, servingSize:76,  servingLabel:"1 cup shredded" },
  "brussels sprouts raw":         { name:"Brussels Sprouts (raw)",             category:"Vegetables", unit:"g", base:100, cal:43,  prot:3.4, carb:9,   fat:0.3, servingSize:88,  servingLabel:"1 cup" },
  "brussels sprouts cooked":      { name:"Brussels Sprouts (cooked, boiled)", category:"Vegetables", unit:"g", base:100, cal:36,  prot:2.6, carb:7.1, fat:0.5, servingSize:156, servingLabel:"1 cup cooked" },
  "kohlrabi raw":                 { name:"Kohlrabi (raw)",                     category:"Vegetables", unit:"g", base:100, cal:27,  prot:1.7, carb:6.2, fat:0.1, servingSize:135, servingLabel:"1 cup" },
  "kohlrabi cooked":              { name:"Kohlrabi (cooked)",                  category:"Vegetables", unit:"g", base:100, cal:29,  prot:1.8, carb:6.7, fat:0.1, servingSize:165, servingLabel:"1 cup cooked" },
  "turnip raw":                   { name:"Turnip (raw)",                       category:"Vegetables", unit:"g", base:100, cal:28,  prot:0.9, carb:6.4, fat:0.1, servingSize:130, servingLabel:"1 cup cubed" },
  "turnip cooked":                { name:"Turnip (cooked, boiled)",            category:"Vegetables", unit:"g", base:100, cal:22,  prot:0.7, carb:5,   fat:0.1, servingSize:156, servingLabel:"1 cup cooked" },
  "rutabaga swede cooked":        { name:"Rutabaga / Swede (cooked)",          category:"Vegetables", unit:"g", base:100, cal:39,  prot:1.3, carb:8.7, fat:0.2, servingSize:170, servingLabel:"1 cup cooked" },
  "radish mooli raw":             { name:"Radish / Mooli (raw)",               category:"Vegetables", unit:"g", base:100, cal:16,  prot:0.7, carb:3.4, fat:0.1, servingSize:116, servingLabel:"1 cup sliced" },
  "wasabi":                       { name:"Wasabi (raw)",                       category:"Vegetables", unit:"g", base:100, cal:109, prot:4.8, carb:24,  fat:0.6, servingSize:5,   servingLabel:"1 tsp" },

  /* ── Alliums ───────────────────────────────────────── */
  "onion yellow raw":             { name:"Yellow / Brown Onion (raw)",         category:"Vegetables", unit:"g", base:100, cal:40,  prot:1.1, carb:9.3, fat:0.1, servingSize:110, servingLabel:"1 medium", countable:{ unitName:"onion", gramsEach:110 } },
  "onion red raw":                { name:"Red / Purple Onion (raw)",           category:"Vegetables", unit:"g", base:100, cal:40,  prot:1.1, carb:9.3, fat:0.1, servingSize:110, servingLabel:"1 medium", countable:{ unitName:"onion", gramsEach:110 } },
  "onion spring scallion":        { name:"Spring Onion / Scallion / Hara Pyaaz", category:"Vegetables", unit:"g", base:100, cal:32,  prot:1.8, carb:7.3, fat:0.2, servingSize:15,  servingLabel:"1 stalk",   countable:{ unitName:"stalk",  gramsEach:15  } },
  "onion cooked caramelised":     { name:"Caramelised Onion",                  category:"Vegetables", unit:"g", base:100, cal:78,  prot:1.5, carb:19,  fat:0.5, servingSize:50,  servingLabel:"3 tbsp" },
  "shallot":                      { name:"Shallot (raw)",                      category:"Vegetables", unit:"g", base:100, cal:72,  prot:2.5, carb:17,  fat:0.1, servingSize:30,  servingLabel:"2 small",   countable:{ unitName:"shallot", gramsEach:15  } },
  "garlic raw":                   { name:"Garlic (raw)",                       category:"Vegetables", unit:"g", base:100, cal:149, prot:6.4, carb:33,  fat:0.5, servingSize:9,   servingLabel:"3 cloves",  countable:{ unitName:"clove",   gramsEach:3   } },
  "garlic roasted":               { name:"Roasted Garlic",                     category:"Vegetables", unit:"g", base:100, cal:137, prot:5.8, carb:30,  fat:0.4, servingSize:9,   servingLabel:"3 cloves" },
  "garlic powder":                { name:"Garlic Powder",                      category:"Vegetables", unit:"g", base:100, cal:331, prot:17,  carb:73,  fat:0.7, servingSize:3,   servingLabel:"1 tsp" },
  "leek raw":                     { name:"Leek (raw)",                         category:"Vegetables", unit:"g", base:100, cal:61,  prot:1.5, carb:14,  fat:0.3, servingSize:89,  servingLabel:"1 cup" },
  "leek cooked":                  { name:"Leek (cooked, boiled)",              category:"Vegetables", unit:"g", base:100, cal:54,  prot:1.5, carb:12,  fat:0.3, servingSize:104, servingLabel:"1 cup cooked" },
  "chives":                       { name:"Chives (raw)",                       category:"Vegetables", unit:"g", base:100, cal:30,  prot:3.3, carb:4.4, fat:0.7, servingSize:3,   servingLabel:"1 tbsp" },
  "ginger raw":                   { name:"Ginger (raw)",                       category:"Vegetables", unit:"g", base:100, cal:80,  prot:1.8, carb:18,  fat:0.8, servingSize:6,   servingLabel:"1 tsp grated" },
  "ginger powder":                { name:"Ground Ginger",                      category:"Vegetables", unit:"g", base:100, cal:335, prot:8.9, carb:71,  fat:4.2, servingSize:2,   servingLabel:"½ tsp" },

  /* ── Root & Tuber Vegetables ───────────────────────── */
  "potato boiled":                { name:"Potato (boiled, with skin)",         category:"Vegetables", unit:"g", base:100, cal:87,  prot:1.9, carb:20,  fat:0.1, servingSize:150, servingLabel:"1 medium", countable:{ unitName:"potato", gramsEach:150 } },
  "potato baked":                 { name:"Potato (baked, with skin)",          category:"Vegetables", unit:"g", base:100, cal:93,  prot:2.5, carb:21,  fat:0.1, servingSize:173, servingLabel:"1 medium", countable:{ unitName:"potato", gramsEach:173 } },
  "potato mashed":                { name:"Mashed Potato (with butter & milk)", category:"Vegetables", unit:"g", base:100, cal:112, prot:2,   carb:17,  fat:4.2, servingSize:210, servingLabel:"1 cup" },
  "potato roasted":               { name:"Roasted Potatoes (with oil)",        category:"Vegetables", unit:"g", base:100, cal:149, prot:2.5, carb:26,  fat:4.5, servingSize:150, servingLabel:"1 cup" },
  "potato new baby":              { name:"Baby / New Potatoes (boiled)",       category:"Vegetables", unit:"g", base:100, cal:70,  prot:1.7, carb:16,  fat:0.1, servingSize:150, servingLabel:"1 cup", countable:{ unitName:"potato", gramsEach:50  } },
  "sweet potato cooked":          { name:"Sweet Potato (boiled / baked)",      category:"Vegetables", unit:"g", base:100, cal:86,  prot:1.6, carb:20,  fat:0.1, servingSize:130, servingLabel:"1 medium", countable:{ unitName:"sweet potato", gramsEach:130 } },
  "sweet potato mashed":          { name:"Mashed Sweet Potato",                category:"Vegetables", unit:"g", base:100, cal:90,  prot:1.7, carb:21,  fat:0.1, servingSize:200, servingLabel:"1 cup" },
  "yam cooked":                   { name:"Yam (cooked)",                       category:"Vegetables", unit:"g", base:100, cal:118, prot:1.5, carb:28,  fat:0.2, servingSize:136, servingLabel:"1 cup" },
  "taro arbi cooked":             { name:"Taro / Arbi (cooked)",               category:"Vegetables", unit:"g", base:100, cal:142, prot:0.5, carb:35,  fat:0.1, servingSize:132, servingLabel:"1 cup", countable:{ unitName:"piece", gramsEach:40  } },
  "cassava tapioca cooked":       { name:"Cassava / Tapioca (boiled)",         category:"Vegetables", unit:"g", base:100, cal:160, prot:1.4, carb:38,  fat:0.3, servingSize:206, servingLabel:"1 cup" },
  "parsnip cooked":               { name:"Parsnip (cooked)",                   category:"Vegetables", unit:"g", base:100, cal:78,  prot:1.3, carb:19,  fat:0.3, servingSize:156, servingLabel:"1 cup" },
  "celeriac cooked":              { name:"Celeriac / Celery Root (cooked)",    category:"Vegetables", unit:"g", base:100, cal:33,  prot:1,   carb:8,   fat:0.4, servingSize:155, servingLabel:"1 cup" },
  "beet raw":                     { name:"Beetroot (raw)",                     category:"Vegetables", unit:"g", base:100, cal:43,  prot:1.6, carb:10,  fat:0.2, servingSize:136, servingLabel:"1 medium", countable:{ unitName:"beet", gramsEach:82  } },
  "beet cooked":                  { name:"Beetroot (cooked, boiled)",          category:"Vegetables", unit:"g", base:100, cal:44,  prot:1.7, carb:10,  fat:0.2, servingSize:170, servingLabel:"1 cup sliced" },
  "beet canned":                  { name:"Beetroot (canned, sliced)",          category:"Vegetables", unit:"g", base:100, cal:36,  prot:0.9, carb:8,   fat:0.1, servingSize:123, servingLabel:"½ cup" },
  "carrot raw":                   { name:"Carrot (raw)",                       category:"Vegetables", unit:"g", base:100, cal:41,  prot:0.9, carb:10,  fat:0.2, servingSize:61,  servingLabel:"1 medium", countable:{ unitName:"carrot", gramsEach:61  } },
  "carrot cooked":                { name:"Carrot (cooked, boiled)",            category:"Vegetables", unit:"g", base:100, cal:35,  prot:0.8, carb:8.2, fat:0.2, servingSize:78,  servingLabel:"½ cup sliced" },
  "carrot baby":                  { name:"Baby Carrots",                       category:"Vegetables", unit:"g", base:100, cal:41,  prot:0.9, carb:10,  fat:0.2, servingSize:85,  servingLabel:"~10 carrots" },
  "salsify cooked":               { name:"Salsify (cooked)",                   category:"Vegetables", unit:"g", base:100, cal:82,  prot:3.3, carb:18,  fat:0.2, servingSize:135, servingLabel:"1 cup" },
  "jicama raw":                   { name:"Jicama / Yam Bean (raw)",            category:"Vegetables", unit:"g", base:100, cal:38,  prot:0.7, carb:9,   fat:0.1, servingSize:130, servingLabel:"1 cup sliced" },

  /* ── Tomatoes & Capsicums ──────────────────────────── */
  "tomato raw":                   { name:"Tomato (raw, medium)",               category:"Vegetables", unit:"g", base:100, cal:18,  prot:0.9, carb:3.9, fat:0.2, servingSize:123, servingLabel:"1 medium", countable:{ unitName:"tomato", gramsEach:123 } },
  "tomato cherry":                { name:"Cherry Tomatoes",                    category:"Vegetables", unit:"g", base:100, cal:18,  prot:0.9, carb:3.9, fat:0.2, servingSize:149, servingLabel:"1 cup", countable:{ unitName:"tomato", gramsEach:17  } },
  "tomato roma plum":             { name:"Roma / Plum Tomato",                 category:"Vegetables", unit:"g", base:100, cal:18,  prot:0.9, carb:3.9, fat:0.2, servingSize:62,  servingLabel:"1 tomato", countable:{ unitName:"tomato", gramsEach:62  } },
  "tomato cooked":                { name:"Tomato (cooked, stewed)",            category:"Vegetables", unit:"g", base:100, cal:35,  prot:1.6, carb:8,   fat:0.2, servingSize:240, servingLabel:"1 cup cooked" },
  "tomato canned whole":          { name:"Canned Whole Tomatoes",              category:"Vegetables", unit:"g", base:100, cal:24,  prot:1,   carb:5,   fat:0.1, servingSize:240, servingLabel:"1 cup" },
  "tomato sundried":              { name:"Sun-Dried Tomatoes (in oil)",        category:"Vegetables", unit:"g", base:100, cal:258, prot:14,  carb:56,  fat:3,   servingSize:14,  servingLabel:"3 pieces", countable:{ unitName:"piece", gramsEach:5   } },
  "bell pepper green":            { name:"Green Bell Pepper / Capsicum",       category:"Vegetables", unit:"g", base:100, cal:20,  prot:0.9, carb:4.6, fat:0.2, servingSize:119, servingLabel:"1 medium", countable:{ unitName:"pepper", gramsEach:119 } },
  "bell pepper red":              { name:"Red Bell Pepper / Capsicum",         category:"Vegetables", unit:"g", base:100, cal:31,  prot:1,   carb:7,   fat:0.3, servingSize:119, servingLabel:"1 medium", countable:{ unitName:"pepper", gramsEach:119 } },
  "bell pepper yellow":           { name:"Yellow Bell Pepper / Capsicum",      category:"Vegetables", unit:"g", base:100, cal:27,  prot:1,   carb:6.3, fat:0.2, servingSize:119, servingLabel:"1 medium", countable:{ unitName:"pepper", gramsEach:119 } },
  "bell pepper orange":           { name:"Orange Bell Pepper",                 category:"Vegetables", unit:"g", base:100, cal:31,  prot:1,   carb:7,   fat:0.3, servingSize:119, servingLabel:"1 medium", countable:{ unitName:"pepper", gramsEach:119 } },
  "chilli green":                 { name:"Green Chilli (raw)",                 category:"Vegetables", unit:"g", base:100, cal:40,  prot:2,   carb:9.5, fat:0.2, servingSize:10,  servingLabel:"1 chilli",  countable:{ unitName:"chilli",  gramsEach:10  } },
  "chilli red fresh":             { name:"Red Chilli / Lal Mirch (fresh)",     category:"Vegetables", unit:"g", base:100, cal:40,  prot:1.9, carb:8.8, fat:0.4, servingSize:10,  servingLabel:"1 chilli",  countable:{ unitName:"chilli",  gramsEach:10  } },
  "chilli dry red":               { name:"Dry Red Chilli / Lal Mirch",         category:"Vegetables", unit:"g", base:100, cal:282, prot:13,  carb:50,  fat:7,   servingSize:2,   servingLabel:"1 whole",   countable:{ unitName:"chilli",  gramsEach:2   } },
  "jalapeno":                     { name:"Jalapeño Pepper",                    category:"Vegetables", unit:"g", base:100, cal:29,  prot:0.9, carb:6.5, fat:0.4, servingSize:14,  servingLabel:"1 pepper",  countable:{ unitName:"jalapeño", gramsEach:14  } },
  "chilli habanero":              { name:"Habanero Chilli",                    category:"Vegetables", unit:"g", base:100, cal:36,  prot:1,   carb:8.8, fat:0.5, servingSize:5,   servingLabel:"½ pepper",  countable:{ unitName:"pepper",  gramsEach:5   } },

  /* ── Cucurbits / Gourds ────────────────────────────── */
  "cucumber raw":                 { name:"Cucumber (raw, with skin)",          category:"Vegetables", unit:"g", base:100, cal:15,  prot:0.7, carb:3.6, fat:0.1, servingSize:119, servingLabel:"1 cup sliced" },
  "cucumber english":             { name:"English / Seedless Cucumber",        category:"Vegetables", unit:"g", base:100, cal:15,  prot:0.7, carb:3.6, fat:0.1, servingSize:119, servingLabel:"1 cup" },
  "zucchini courgette raw":       { name:"Zucchini / Courgette (raw)",         category:"Vegetables", unit:"g", base:100, cal:17,  prot:1.2, carb:3.1, fat:0.3, servingSize:124, servingLabel:"1 cup sliced" },
  "zucchini cooked":              { name:"Zucchini (cooked, sautéed)",         category:"Vegetables", unit:"g", base:100, cal:27,  prot:1.4, carb:5,   fat:0.7, servingSize:180, servingLabel:"1 cup cooked" },
  "pumpkin cooked":               { name:"Pumpkin (cooked)",                   category:"Vegetables", unit:"g", base:100, cal:26,  prot:1,   carb:6.5, fat:0.1, servingSize:245, servingLabel:"1 cup" },
  "pumpkin canned":               { name:"Pumpkin (canned, purée)",            category:"Vegetables", unit:"g", base:100, cal:34,  prot:1.2, carb:8,   fat:0.1, servingSize:245, servingLabel:"1 cup" },
  "butternut squash cooked":      { name:"Butternut Squash (cooked, cubed)",   category:"Vegetables", unit:"g", base:100, cal:45,  prot:1,   carb:12,  fat:0.1, servingSize:205, servingLabel:"1 cup cooked" },
  "acorn squash cooked":          { name:"Acorn Squash (baked)",               category:"Vegetables", unit:"g", base:100, cal:56,  prot:1.1, carb:15,  fat:0.1, servingSize:205, servingLabel:"1 cup cooked" },
  "spaghetti squash cooked":      { name:"Spaghetti Squash (cooked)",          category:"Vegetables", unit:"g", base:100, cal:31,  prot:0.7, carb:7,   fat:0.6, servingSize:155, servingLabel:"1 cup cooked" },
  "eggplant brinjal raw":         { name:"Eggplant / Brinjal (raw)",           category:"Vegetables", unit:"g", base:100, cal:25,  prot:1,   carb:6,   fat:0.2, servingSize:82,  servingLabel:"1 cup cubed" },
  "eggplant cooked":              { name:"Eggplant / Brinjal (cooked, roasted)", category:"Vegetables", unit:"g", base:100, cal:35,  prot:0.8, carb:8.7, fat:0.2, servingSize:99,  servingLabel:"1 cup cooked" },
  "bottle gourd lauki":           { name:"Bottle Gourd / Lauki (raw)",         category:"Vegetables", unit:"g", base:100, cal:14,  prot:0.6, carb:3.4, fat:0,   servingSize:150, servingLabel:"1 cup" },
  "bitter gourd karela":          { name:"Bitter Gourd / Karela",              category:"Vegetables", unit:"g", base:100, cal:17,  prot:1,   carb:3.7, fat:0.2, servingSize:95,  servingLabel:"1 cup" },
  "ridge gourd turai":            { name:"Ridge Gourd / Turai / Luffa",        category:"Vegetables", unit:"g", base:100, cal:18,  prot:1,   carb:4,   fat:0.2, servingSize:150, servingLabel:"1 cup" },
  "snake gourd chichinda":        { name:"Snake Gourd / Chichinda",            category:"Vegetables", unit:"g", base:100, cal:18,  prot:0.9, carb:4,   fat:0.2, servingSize:150, servingLabel:"1 cup" },
  "ivy gourd tendli":             { name:"Ivy Gourd / Tendli / Kovakkai",      category:"Vegetables", unit:"g", base:100, cal:18,  prot:1.2, carb:3.9, fat:0.1, servingSize:100, servingLabel:"1 serving" },
  "ash gourd winter melon":       { name:"Ash Gourd / Winter Melon",           category:"Vegetables", unit:"g", base:100, cal:13,  prot:0.4, carb:3,   fat:0,   servingSize:150, servingLabel:"1 cup" },
  "tinda apple gourd":            { name:"Tinda / Apple Gourd (round gourd)",  category:"Vegetables", unit:"g", base:100, cal:21,  prot:1.2, carb:4.6, fat:0.2, servingSize:100, servingLabel:"1 serving" },

  /* ── Mushrooms ─────────────────────────────────────── */
  "mushroom white button raw":    { name:"White Button Mushroom (raw)",        category:"Vegetables", unit:"g", base:100, cal:22,  prot:3.1, carb:3.3, fat:0.3, servingSize:96,  servingLabel:"1 cup sliced" },
  "mushroom white cooked":        { name:"White Button Mushroom (cooked)",     category:"Vegetables", unit:"g", base:100, cal:26,  prot:3.6, carb:4.4, fat:0.4, servingSize:156, servingLabel:"1 cup cooked" },
  "mushroom portobello grilled":  { name:"Portobello Mushroom (grilled)",      category:"Vegetables", unit:"g", base:100, cal:26,  prot:2.1, carb:5,   fat:0.5, servingSize:121, servingLabel:"1 cap",         countable:{ unitName:"cap",     gramsEach:121 } },
  "mushroom shiitake cooked":     { name:"Shiitake Mushroom (cooked)",         category:"Vegetables", unit:"g", base:100, cal:56,  prot:1.6, carb:14,  fat:0.2, servingSize:145, servingLabel:"1 cup cooked" },
  "mushroom oyster cooked":       { name:"Oyster Mushroom (cooked)",           category:"Vegetables", unit:"g", base:100, cal:38,  prot:3.3, carb:6.5, fat:0.4, servingSize:86,  servingLabel:"1 cup cooked" },
  "mushroom king oyster":         { name:"King Oyster / Trumpet Mushroom",     category:"Vegetables", unit:"g", base:100, cal:35,  prot:2.9, carb:6.3, fat:0.4, servingSize:100, servingLabel:"1 serving" },
  "mushroom enoki":               { name:"Enoki Mushroom (raw)",               category:"Vegetables", unit:"g", base:100, cal:37,  prot:2.7, carb:7.6, fat:0.3, servingSize:100, servingLabel:"1 serving" },
  "mushroom cremini":             { name:"Cremini / Baby Bella Mushroom",      category:"Vegetables", unit:"g", base:100, cal:22,  prot:2.5, carb:4,   fat:0.4, servingSize:70,  servingLabel:"1 cup" },
  "mushroom chanterelle":         { name:"Chanterelle Mushroom (cooked)",      category:"Vegetables", unit:"g", base:100, cal:38,  prot:1.6, carb:7,   fat:0.7, servingSize:100, servingLabel:"1 serving" },
  "mushroom porcini":             { name:"Porcini / Cep Mushroom (cooked)",    category:"Vegetables", unit:"g", base:100, cal:35,  prot:3.9, carb:5.4, fat:0.5, servingSize:100, servingLabel:"1 serving" },
  "mushroom maitake":             { name:"Maitake / Hen of the Woods",         category:"Vegetables", unit:"g", base:100, cal:31,  prot:1.9, carb:6.9, fat:0.2, servingSize:70,  servingLabel:"1 cup" },
  "mushroom dried":               { name:"Dried Mixed Mushrooms (rehydrated)", category:"Vegetables", unit:"g", base:100, cal:30,  prot:3,   carb:5,   fat:0.5, servingSize:100, servingLabel:"½ cup rehydrated" },

  /* ── Corn, Peas & Beans (Pod) ──────────────────────── */
  "corn sweet cooked":            { name:"Sweet Corn (cooked)",                category:"Vegetables", unit:"g", base:100, cal:96,  prot:3.4, carb:21,  fat:1.5, servingSize:154, servingLabel:"1 cup", countable:{ unitName:"cob", gramsEach:90  } },
  "corn canned":                  { name:"Sweetcorn (canned, drained)",        category:"Vegetables", unit:"g", base:100, cal:86,  prot:2.7, carb:19,  fat:1.2, servingSize:154, servingLabel:"1 cup" },
  "corn baby":                    { name:"Baby Corn",                          category:"Vegetables", unit:"g", base:100, cal:26,  prot:1.9, carb:5.4, fat:0.2, servingSize:100, servingLabel:"5–6 pieces", countable:{ unitName:"piece", gramsEach:15  } },
  "green beans raw":              { name:"Green Beans / French Beans (raw)",   category:"Vegetables", unit:"g", base:100, cal:31,  prot:1.8, carb:7,   fat:0.1, servingSize:100, servingLabel:"1 cup" },
  "green beans cooked":           { name:"Green Beans (cooked, steamed)",      category:"Vegetables", unit:"g", base:100, cal:35,  prot:1.9, carb:8,   fat:0.1, servingSize:125, servingLabel:"1 cup cooked" },
  "green beans canned":           { name:"Green Beans (canned, drained)",      category:"Vegetables", unit:"g", base:100, cal:27,  prot:1.4, carb:6,   fat:0.2, servingSize:135, servingLabel:"1 cup" },
  "runner beans cooked":          { name:"Runner Beans (cooked)",              category:"Vegetables", unit:"g", base:100, cal:22,  prot:1.9, carb:3.7, fat:0.2, servingSize:100, servingLabel:"1 serving" },
  "long beans cowpeas cooked":    { name:"Long Beans / Yardlong Beans (cooked)", category:"Vegetables", unit:"g", base:100, cal:47,  prot:2.8, carb:8.4, fat:0.4, servingSize:100, servingLabel:"1 serving" },
  "snow peas raw":                { name:"Snow Peas / Mangetout (raw)",        category:"Vegetables", unit:"g", base:100, cal:42,  prot:2.8, carb:7.5, fat:0.2, servingSize:98,  servingLabel:"1 cup" },
  "snap peas sugar":              { name:"Sugar Snap Peas (raw)",              category:"Vegetables", unit:"g", base:100, cal:42,  prot:2.8, carb:7.5, fat:0.2, servingSize:63,  servingLabel:"½ cup" },
  "sem flat beans":               { name:"Sem / Flat Beans / Valor",           category:"Vegetables", unit:"g", base:100, cal:48,  prot:3.5, carb:9.5, fat:0.3, servingSize:100, servingLabel:"1 cup" },

  /* ── Stalks, Shoots & Others ───────────────────────── */
  "celery raw":                   { name:"Celery (raw)",                       category:"Vegetables", unit:"g", base:100, cal:16,  prot:0.7, carb:3,   fat:0.2, servingSize:120, servingLabel:"1 cup chopped", countable:{ unitName:"stalk", gramsEach:38  } },
  "asparagus raw":                { name:"Asparagus (raw)",                    category:"Vegetables", unit:"g", base:100, cal:20,  prot:2.2, carb:3.9, fat:0.1, servingSize:134, servingLabel:"1 cup",         countable:{ unitName:"spear",  gramsEach:20  } },
  "asparagus cooked":             { name:"Asparagus (cooked, steamed)",        category:"Vegetables", unit:"g", base:100, cal:22,  prot:2.4, carb:4.1, fat:0.2, servingSize:180, servingLabel:"1 cup cooked",  countable:{ unitName:"spear",  gramsEach:20  } },
  "artichoke cooked":             { name:"Globe Artichoke (cooked)",           category:"Vegetables", unit:"g", base:100, cal:53,  prot:2.8, carb:12,  fat:0.2, servingSize:120, servingLabel:"1 medium",      countable:{ unitName:"artichoke", gramsEach:120 } },
  "artichoke heart canned":       { name:"Artichoke Hearts (canned, drained)", category:"Vegetables", unit:"g", base:100, cal:45,  prot:3,   carb:9.8, fat:0.2, servingSize:84,  servingLabel:"½ cup" },
  "fennel bulb raw":              { name:"Fennel Bulb (raw)",                  category:"Vegetables", unit:"g", base:100, cal:31,  prot:1.2, carb:7.3, fat:0.2, servingSize:87,  servingLabel:"1 cup sliced" },
  "fennel cooked":                { name:"Fennel (cooked, braised)",           category:"Vegetables", unit:"g", base:100, cal:26,  prot:1.2, carb:5.8, fat:0.3, servingSize:87,  servingLabel:"½ cup" },
  "bamboo shoots cooked":         { name:"Bamboo Shoots (cooked)",             category:"Vegetables", unit:"g", base:100, cal:12,  prot:1.5, carb:2.3, fat:0.1, servingSize:120, servingLabel:"1 cup" },
  "bamboo shoots canned":         { name:"Bamboo Shoots (canned, drained)",    category:"Vegetables", unit:"g", base:100, cal:11,  prot:1,   carb:1.9, fat:0.2, servingSize:120, servingLabel:"1 cup" },
  "water chestnuts cooked":       { name:"Water Chestnuts (cooked)",           category:"Vegetables", unit:"g", base:100, cal:106, prot:1.4, carb:26,  fat:0.1, servingSize:62,  servingLabel:"½ cup" },
  "water chestnuts canned":       { name:"Water Chestnuts (canned)",           category:"Vegetables", unit:"g", base:100, cal:97,  prot:1.3, carb:24,  fat:0.1, servingSize:62,  servingLabel:"½ cup" },
  "lotus root cooked":            { name:"Lotus Root (cooked)",                category:"Vegetables", unit:"g", base:100, cal:66,  prot:1.6, carb:16,  fat:0.1, servingSize:89,  servingLabel:"½ cup" },
  "heart of palm canned":         { name:"Heart of Palm (canned)",             category:"Vegetables", unit:"g", base:100, cal:32,  prot:2.7, carb:5.7, fat:0.7, servingSize:146, servingLabel:"1 cup" },
  "drumstick moringa pods":       { name:"Drumstick / Moringa Pods",           category:"Vegetables", unit:"g", base:100, cal:37,  prot:2.1, carb:8.5, fat:0.2, servingSize:100, servingLabel:"1 serving" },
  "raw banana green":             { name:"Raw Banana / Kela (green, unripe)", category:"Vegetables", unit:"g", base:100, cal:89,  prot:1.3, carb:23,  fat:0.1, servingSize:100, servingLabel:"1 serving" },
  "raw papaya green":             { name:"Raw / Green Papaya",                 category:"Vegetables", unit:"g", base:100, cal:32,  prot:0.6, carb:8.3, fat:0.1, servingSize:140, servingLabel:"1 cup shredded" },
  "raw mango kacha aam":          { name:"Raw Mango / Kacha Aam (sour)",       category:"Vegetables", unit:"g", base:100, cal:60,  prot:0.5, carb:15,  fat:0.3, servingSize:100, servingLabel:"½ mango" },
  "raw jackfruit":                { name:"Raw Jackfruit / Kathal",             category:"Vegetables", unit:"g", base:100, cal:51,  prot:2,   carb:11,  fat:0.1, servingSize:150, servingLabel:"1 cup" },
  "okra bhindi raw":              { name:"Okra / Bhindi (raw)",                category:"Vegetables", unit:"g", base:100, cal:33,  prot:1.9, carb:7.5, fat:0.2, servingSize:100, servingLabel:"1 cup" },
  "okra cooked":                  { name:"Okra (cooked, boiled)",              category:"Vegetables", unit:"g", base:100, cal:33,  prot:2,   carb:7.6, fat:0.2, servingSize:100, servingLabel:"1 cup" },

  /* ── Fresh Herbs (used as vegetables / garnish) ────── */
  "coriander cilantro":           { name:"Coriander / Cilantro (fresh)",       category:"Vegetables", unit:"g", base:100, cal:23,  prot:2.1, carb:3.7, fat:0.5, servingSize:4,   servingLabel:"¼ cup" },
  "parsley fresh":                { name:"Parsley (fresh)",                    category:"Vegetables", unit:"g", base:100, cal:36,  prot:3,   carb:6.3, fat:0.8, servingSize:4,   servingLabel:"¼ cup" },
  "basil fresh":                  { name:"Basil (fresh leaves)",               category:"Vegetables", unit:"g", base:100, cal:23,  prot:3.2, carb:2.7, fat:0.6, servingSize:6,   servingLabel:"¼ cup" },
  "mint fresh pudina":            { name:"Mint / Pudina (fresh)",              category:"Vegetables", unit:"g", base:100, cal:44,  prot:3.3, carb:8.5, fat:0.7, servingSize:6,   servingLabel:"¼ cup" },
  "dill fresh":                   { name:"Dill (fresh)",                       category:"Vegetables", unit:"g", base:100, cal:43,  prot:3.5, carb:7,   fat:1.1, servingSize:4,   servingLabel:"¼ cup" },
  "lemongrass stalk":             { name:"Lemongrass (stalk, raw)",            category:"Vegetables", unit:"g", base:100, cal:99,  prot:1.8, carb:25,  fat:0.5, servingSize:20,  servingLabel:"1 stalk", countable:{ unitName:"stalk", gramsEach:20  } },










  /* ══════════════════════════════════════════════════════
     🍎  FRUITS — COMPLETE SECTION
     Replace your existing fruits block with this.
     Paste everything below into your FOOD_DB object.
  ══════════════════════════════════════════════════════ */

  /* ── Apples & Pears ────────────────────────────────── */
  "apple raw":                    { name:"Apple (raw, with skin)",             category:"Fruits", unit:"g", base:100, cal:52,  prot:0.3, carb:14,  fat:0.2, servingSize:182, servingLabel:"1 medium",     countable:{ unitName:"apple",  gramsEach:182 } },
  "apple green granny smith":     { name:"Granny Smith Apple (green, tart)",   category:"Fruits", unit:"g", base:100, cal:58,  prot:0.4, carb:15,  fat:0.2, servingSize:182, servingLabel:"1 medium",     countable:{ unitName:"apple",  gramsEach:182 } },
  "apple red delicious":          { name:"Red Delicious Apple",                category:"Fruits", unit:"g", base:100, cal:52,  prot:0.3, carb:14,  fat:0.2, servingSize:182, servingLabel:"1 medium",     countable:{ unitName:"apple",  gramsEach:182 } },
  "apple fuji":                   { name:"Fuji Apple",                         category:"Fruits", unit:"g", base:100, cal:55,  prot:0.3, carb:15,  fat:0.1, servingSize:182, servingLabel:"1 medium",     countable:{ unitName:"apple",  gramsEach:182 } },
  "apple sauce unsweetened":      { name:"Apple Sauce (unsweetened)",          category:"Fruits", unit:"g", base:100, cal:48,  prot:0.2, carb:13,  fat:0.1, servingSize:122, servingLabel:"½ cup" },
  "apple dried":                  { name:"Dried Apple Slices",                 category:"Fruits", unit:"g", base:100, cal:243, prot:0.9, carb:65,  fat:0.3, servingSize:30,  servingLabel:"¼ cup" },
  "pear raw":                     { name:"Pear (raw)",                         category:"Fruits", unit:"g", base:100, cal:57,  prot:0.4, carb:15,  fat:0.1, servingSize:166, servingLabel:"1 medium",     countable:{ unitName:"pear",   gramsEach:166 } },
  "pear asian":                   { name:"Asian Pear / Nashi",                 category:"Fruits", unit:"g", base:100, cal:42,  prot:0.5, carb:11,  fat:0.2, servingSize:122, servingLabel:"1 medium",     countable:{ unitName:"pear",   gramsEach:122 } },
  "quince":                       { name:"Quince (raw)",                       category:"Fruits", unit:"g", base:100, cal:57,  prot:0.4, carb:15.3,fat:0.1, servingSize:92,  servingLabel:"1 medium",     countable:{ unitName:"quince", gramsEach:92  } },

  /* ── Citrus ────────────────────────────────────────── */
  "orange raw":                   { name:"Orange (navel, raw)",                category:"Fruits", unit:"g", base:100, cal:47,  prot:0.9, carb:12,  fat:0.1, servingSize:131, servingLabel:"1 medium",     countable:{ unitName:"orange",     gramsEach:131 } },
  "orange blood":                 { name:"Blood Orange",                       category:"Fruits", unit:"g", base:100, cal:50,  prot:0.9, carb:11,  fat:0.3, servingSize:130, servingLabel:"1 medium",     countable:{ unitName:"orange",     gramsEach:130 } },
  "orange juice fresh":           { name:"Orange Juice (fresh squeezed)",      category:"Fruits", unit:"ml", base:100, cal:45,  prot:0.7, carb:10,  fat:0.2, servingSize:240, servingLabel:"1 glass" },
  "tangerine mandarin":           { name:"Tangerine / Mandarin Orange",        category:"Fruits", unit:"g", base:100, cal:53,  prot:0.8, carb:13,  fat:0.3, servingSize:88,  servingLabel:"1 medium",     countable:{ unitName:"mandarin",   gramsEach:88  } },
  "clementine":                   { name:"Clementine",                         category:"Fruits", unit:"g", base:100, cal:47,  prot:0.9, carb:12,  fat:0.1, servingSize:74,  servingLabel:"1 clementine", countable:{ unitName:"clementine", gramsEach:74  } },
  "grapefruit raw":               { name:"Grapefruit (raw)",                   category:"Fruits", unit:"g", base:100, cal:42,  prot:0.8, carb:11,  fat:0.1, servingSize:123, servingLabel:"½ grapefruit", countable:{ unitName:"half",       gramsEach:123 } },
  "lemon raw":                    { name:"Lemon (raw, with peel)",             category:"Fruits", unit:"g", base:100, cal:29,  prot:1.1, carb:9,   fat:0.3, servingSize:58,  servingLabel:"1 medium",     countable:{ unitName:"lemon",      gramsEach:58  } },
  "lemon juice fresh":            { name:"Lemon Juice (fresh squeezed)",       category:"Fruits", unit:"ml", base:100, cal:22,  prot:0.4, carb:6.9, fat:0.2, servingSize:47,  servingLabel:"3 tbsp" },
  "lime raw":                     { name:"Lime (raw)",                         category:"Fruits", unit:"g", base:100, cal:30,  prot:0.7, carb:11,  fat:0.2, servingSize:67,  servingLabel:"1 medium",     countable:{ unitName:"lime",       gramsEach:67  } },
  "lime juice fresh":             { name:"Lime Juice (fresh)",                 category:"Fruits", unit:"ml", base:100, cal:25,  prot:0.4, carb:8.4, fat:0.1, servingSize:47,  servingLabel:"3 tbsp" },
  "pomelo":                       { name:"Pomelo / Shaddock",                  category:"Fruits", unit:"g", base:100, cal:38,  prot:0.8, carb:9.6, fat:0,   servingSize:190, servingLabel:"1 cup",        countable:{ unitName:"wedge",      gramsEach:30  } },
  "kumquat":                      { name:"Kumquat",                            category:"Fruits", unit:"g", base:100, cal:71,  prot:1.9, carb:16,  fat:0.9, servingSize:19,  servingLabel:"1 kumquat",    countable:{ unitName:"kumquat",    gramsEach:19  } },
  "yuzu":                         { name:"Yuzu (juice)",                       category:"Fruits", unit:"ml", base:100, cal:20,  prot:0.5, carb:6,   fat:0.1, servingSize:30,  servingLabel:"2 tbsp" },

  /* ── Tropical Fruits ───────────────────────────────── */
  "banana raw":                   { name:"Banana (raw)",                       category:"Fruits", unit:"g", base:100, cal:89,  prot:1.1, carb:23,  fat:0.3, servingSize:118, servingLabel:"1 medium",     countable:{ unitName:"banana",  gramsEach:118 } },
  "banana overripe":              { name:"Banana (overripe, very sweet)",      category:"Fruits", unit:"g", base:100, cal:99,  prot:1.1, carb:26,  fat:0.3, servingSize:118, servingLabel:"1 medium",     countable:{ unitName:"banana",  gramsEach:118 } },
  "plantain ripe cooked":         { name:"Ripe Plantain (cooked)",             category:"Fruits", unit:"g", base:100, cal:122, prot:0.8, carb:32,  fat:0.2, servingSize:148, servingLabel:"1 cup sliced" },
  "plantain green raw":           { name:"Green Plantain (raw)",               category:"Fruits", unit:"g", base:100, cal:122, prot:1.3, carb:31,  fat:0.4, servingSize:148, servingLabel:"1 cup" },
  "mango alphonso":               { name:"Alphonso Mango (Hapus)",             category:"Fruits", unit:"g", base:100, cal:70,  prot:0.8, carb:17,  fat:0.4, servingSize:200, servingLabel:"1 mango",      countable:{ unitName:"mango",   gramsEach:200 } },
  "mango raw":                    { name:"Mango (raw, generic)",               category:"Fruits", unit:"g", base:100, cal:60,  prot:0.8, carb:15,  fat:0.4, servingSize:200, servingLabel:"1 mango",      countable:{ unitName:"mango",   gramsEach:200 } },
  "mango dried":                  { name:"Dried Mango",                        category:"Fruits", unit:"g", base:100, cal:319, prot:2.5, carb:78,  fat:1.2, servingSize:40,  servingLabel:"¼ cup" },
  "pineapple raw":                { name:"Pineapple (raw)",                    category:"Fruits", unit:"g", base:100, cal:50,  prot:0.5, carb:13,  fat:0.1, servingSize:165, servingLabel:"1 cup chunks" },
  "pineapple canned":             { name:"Pineapple (canned in juice)",        category:"Fruits", unit:"g", base:100, cal:60,  prot:0.4, carb:16,  fat:0.1, servingSize:165, servingLabel:"1 cup" },
  "papaya raw":                   { name:"Papaya (raw)",                       category:"Fruits", unit:"g", base:100, cal:43,  prot:0.5, carb:11,  fat:0.3, servingSize:145, servingLabel:"1 cup cubed" },
  "guava raw":                    { name:"Guava (raw)",                        category:"Fruits", unit:"g", base:100, cal:68,  prot:2.6, carb:14,  fat:1,   servingSize:55,  servingLabel:"1 medium",     countable:{ unitName:"guava",    gramsEach:55  } },
  "guava strawberry":             { name:"Strawberry Guava",                   category:"Fruits", unit:"g", base:100, cal:69,  prot:2.6, carb:14,  fat:1,   servingSize:55,  servingLabel:"1 medium",     countable:{ unitName:"guava",    gramsEach:55  } },
  "watermelon raw":               { name:"Watermelon (raw)",                   category:"Fruits", unit:"g", base:100, cal:30,  prot:0.6, carb:7.6, fat:0.2, servingSize:280, servingLabel:"2 cups" },
  "cantaloupe muskmelon":         { name:"Cantaloupe / Muskmelon",             category:"Fruits", unit:"g", base:100, cal:34,  prot:0.8, carb:8.2, fat:0.2, servingSize:177, servingLabel:"1 cup" },
  "honeydew melon":               { name:"Honeydew Melon",                     category:"Fruits", unit:"g", base:100, cal:36,  prot:0.5, carb:9.1, fat:0.1, servingSize:177, servingLabel:"1 cup" },
  "coconut flesh fresh":          { name:"Coconut (fresh flesh)",              category:"Fruits", unit:"g", base:100, cal:354, prot:3.3, carb:15,  fat:33,  servingSize:80,  servingLabel:"1 cup shredded" },
  "coconut water fresh":          { name:"Coconut Water (fresh, tender)",      category:"Fruits", unit:"ml", base:100, cal:19,  prot:0.7, carb:3.7, fat:0.2, servingSize:240, servingLabel:"1 glass" },
  "jackfruit ripe raw":           { name:"Ripe Jackfruit (raw)",               category:"Fruits", unit:"g", base:100, cal:95,  prot:1.7, carb:23,  fat:0.6, servingSize:165, servingLabel:"1 cup" },
  "durian raw":                   { name:"Durian (raw)",                       category:"Fruits", unit:"g", base:100, cal:147, prot:1.5, carb:27,  fat:5,   servingSize:243, servingLabel:"1 cup" },
  "dragon fruit pitaya white":    { name:"Dragon Fruit / Pitaya (white flesh)",category:"Fruits", unit:"g", base:100, cal:60,  prot:1.2, carb:13,  fat:0,   servingSize:200, servingLabel:"½ fruit" },
  "dragon fruit pitaya red":      { name:"Dragon Fruit (red flesh)",           category:"Fruits", unit:"g", base:100, cal:63,  prot:1.2, carb:13,  fat:0.4, servingSize:200, servingLabel:"½ fruit" },
  "passion fruit raw":            { name:"Passion Fruit (raw)",                category:"Fruits", unit:"g", base:100, cal:97,  prot:2.2, carb:23,  fat:0.7, servingSize:18,  servingLabel:"1 fruit",     countable:{ unitName:"fruit",     gramsEach:18  } },
  "star fruit carambola":         { name:"Star Fruit / Carambola",             category:"Fruits", unit:"g", base:100, cal:31,  prot:1,   carb:6.7, fat:0.3, servingSize:91,  servingLabel:"1 medium",    countable:{ unitName:"fruit",     gramsEach:91  } },
  "rambutan raw":                 { name:"Rambutan (raw, peeled)",             category:"Fruits", unit:"g", base:100, cal:82,  prot:0.9, carb:21,  fat:0.2, servingSize:9,   servingLabel:"1 rambutan",  countable:{ unitName:"rambutan",  gramsEach:9   } },
  "lychee raw":                   { name:"Lychee / Litchi (raw)",              category:"Fruits", unit:"g", base:100, cal:66,  prot:0.8, carb:17,  fat:0.4, servingSize:10,  servingLabel:"1 lychee",    countable:{ unitName:"lychee",    gramsEach:10  } },
  "longan raw":                   { name:"Longan (raw)",                       category:"Fruits", unit:"g", base:100, cal:60,  prot:1.3, carb:15,  fat:0.1, servingSize:10,  servingLabel:"1 longan",    countable:{ unitName:"longan",    gramsEach:10  } },
  "mangosteen raw":               { name:"Mangosteen (raw, peeled)",           category:"Fruits", unit:"g", base:100, cal:73,  prot:0.4, carb:18,  fat:0.6, servingSize:100, servingLabel:"2–3 fruits",  countable:{ unitName:"fruit",     gramsEach:35  } },
  "sapodilla chikoo":             { name:"Chikoo / Sapodilla",                 category:"Fruits", unit:"g", base:100, cal:83,  prot:0.4, carb:20,  fat:1.1, servingSize:100, servingLabel:"1 medium",    countable:{ unitName:"fruit",     gramsEach:100 } },
  "custard apple sitaphal":       { name:"Custard Apple / Sitaphal (sugar apple)", category:"Fruits", unit:"g", base:100, cal:101, prot:1.7, carb:25, fat:0.6, servingSize:100, servingLabel:"½ fruit" },
  "breadfruit cooked":            { name:"Breadfruit (cooked)",                category:"Fruits", unit:"g", base:100, cal:103, prot:1.1, carb:27,  fat:0.2, servingSize:220, servingLabel:"1 cup" },

  /* ── Stone Fruits ──────────────────────────────────── */
  "peach raw":                    { name:"Peach (raw)",                        category:"Fruits", unit:"g", base:100, cal:39,  prot:0.9, carb:10,  fat:0.3, servingSize:150, servingLabel:"1 medium",    countable:{ unitName:"peach",     gramsEach:150 } },
  "peach canned":                 { name:"Peach (canned in juice)",            category:"Fruits", unit:"g", base:100, cal:44,  prot:0.5, carb:12,  fat:0.1, servingSize:122, servingLabel:"½ cup" },
  "nectarine raw":                { name:"Nectarine (raw)",                    category:"Fruits", unit:"g", base:100, cal:44,  prot:1.1, carb:11,  fat:0.3, servingSize:150, servingLabel:"1 medium",    countable:{ unitName:"nectarine", gramsEach:150 } },
  "plum raw":                     { name:"Plum (raw)",                         category:"Fruits", unit:"g", base:100, cal:46,  prot:0.7, carb:11,  fat:0.3, servingSize:66,  servingLabel:"1 plum",      countable:{ unitName:"plum",      gramsEach:66  } },
  "prune dried":                  { name:"Prune / Dried Plum",                 category:"Fruits", unit:"g", base:100, cal:240, prot:2.2, carb:64,  fat:0.4, servingSize:9,   servingLabel:"1 prune",     countable:{ unitName:"prune",     gramsEach:9   } },
  "apricot raw":                  { name:"Apricot (raw)",                      category:"Fruits", unit:"g", base:100, cal:48,  prot:1.4, carb:11,  fat:0.4, servingSize:35,  servingLabel:"1 apricot",   countable:{ unitName:"apricot",   gramsEach:35  } },
  "apricot dried":                { name:"Apricot (dried)",                    category:"Fruits", unit:"g", base:100, cal:241, prot:3.4, carb:63,  fat:0.5, servingSize:7,   servingLabel:"1 half",      countable:{ unitName:"half",      gramsEach:7   } },
  "cherry sweet raw":             { name:"Sweet Cherry (raw)",                 category:"Fruits", unit:"g", base:100, cal:63,  prot:1.1, carb:16,  fat:0.2, servingSize:138, servingLabel:"1 cup",       countable:{ unitName:"cherry",    gramsEach:8   } },
  "cherry sour":                  { name:"Sour / Tart Cherry",                 category:"Fruits", unit:"g", base:100, cal:50,  prot:1,   carb:12,  fat:0.3, servingSize:138, servingLabel:"1 cup",       countable:{ unitName:"cherry",    gramsEach:8   } },
  "cherry maraschino":            { name:"Maraschino Cherry (jarred)",         category:"Fruits", unit:"g", base:100, cal:130, prot:0.3, carb:33,  fat:0.1, servingSize:8,   servingLabel:"1 cherry",    countable:{ unitName:"cherry",    gramsEach:8   } },
  "loquat raw":                   { name:"Loquat (raw)",                       category:"Fruits", unit:"g", base:100, cal:47,  prot:0.4, carb:12,  fat:0.2, servingSize:20,  servingLabel:"2 loquats",   countable:{ unitName:"loquat",    gramsEach:20  } },
  "persimmon raw":                { name:"Persimmon (raw)",                    category:"Fruits", unit:"g", base:100, cal:70,  prot:0.6, carb:19,  fat:0.2, servingSize:168, servingLabel:"1 medium",    countable:{ unitName:"persimmon", gramsEach:168 } },

  /* ── Berries ───────────────────────────────────────── */
  "strawberry raw":               { name:"Strawberries (raw)",                 category:"Fruits", unit:"g", base:100, cal:32,  prot:0.7, carb:7.7, fat:0.3, servingSize:152, servingLabel:"1 cup" },
  "strawberry frozen":            { name:"Strawberries (frozen, unsweetened)", category:"Fruits", unit:"g", base:100, cal:35,  prot:0.5, carb:9,   fat:0.1, servingSize:152, servingLabel:"1 cup" },
  "blueberry raw":                { name:"Blueberries (raw)",                  category:"Fruits", unit:"g", base:100, cal:57,  prot:0.7, carb:14,  fat:0.3, servingSize:148, servingLabel:"1 cup" },
  "blueberry frozen":             { name:"Blueberries (frozen)",               category:"Fruits", unit:"g", base:100, cal:51,  prot:0.6, carb:13,  fat:0.4, servingSize:148, servingLabel:"1 cup" },
  "raspberry raw":                { name:"Raspberries (raw)",                  category:"Fruits", unit:"g", base:100, cal:52,  prot:1.2, carb:12,  fat:0.7, servingSize:123, servingLabel:"1 cup" },
  "blackberry raw":               { name:"Blackberries (raw)",                 category:"Fruits", unit:"g", base:100, cal:43,  prot:1.4, carb:10,  fat:0.5, servingSize:144, servingLabel:"1 cup" },
  "cranberry raw":                { name:"Cranberries (raw)",                  category:"Fruits", unit:"g", base:100, cal:46,  prot:0.4, carb:12,  fat:0.1, servingSize:110, servingLabel:"1 cup" },
  "cranberry dried sweetened":    { name:"Dried Cranberries (sweetened)",      category:"Fruits", unit:"g", base:100, cal:308, prot:0.2, carb:82,  fat:1.4, servingSize:40,  servingLabel:"¼ cup" },
  "gooseberry raw":               { name:"Gooseberry (raw)",                   category:"Fruits", unit:"g", base:100, cal:44,  prot:0.9, carb:10,  fat:0.6, servingSize:150, servingLabel:"1 cup" },
  "elderberry raw":               { name:"Elderberry (raw)",                   category:"Fruits", unit:"g", base:100, cal:73,  prot:0.7, carb:18.4,fat:0.5, servingSize:145, servingLabel:"1 cup" },
  "mulberry raw":                 { name:"Mulberry (raw)",                     category:"Fruits", unit:"g", base:100, cal:43,  prot:1.4, carb:10,  fat:0.4, servingSize:140, servingLabel:"1 cup" },
  "boysenberry raw":              { name:"Boysenberry (raw)",                  category:"Fruits", unit:"g", base:100, cal:43,  prot:1,   carb:10,  fat:0.3, servingSize:144, servingLabel:"1 cup" },
  "currant black raw":            { name:"Black Currant (raw)",                category:"Fruits", unit:"g", base:100, cal:63,  prot:1.4, carb:15,  fat:0.4, servingSize:112, servingLabel:"1 cup" },
  "currant red raw":              { name:"Red Currant (raw)",                  category:"Fruits", unit:"g", base:100, cal:56,  prot:1.4, carb:14,  fat:0.2, servingSize:112, servingLabel:"1 cup" },
  "amla gooseberry indian":       { name:"Amla / Indian Gooseberry",           category:"Fruits", unit:"g", base:100, cal:44,  prot:0.9, carb:10,  fat:0.6, servingSize:20,  servingLabel:"2–3 amla",    countable:{ unitName:"amla",      gramsEach:20  } },
  "acai berry frozen":            { name:"Açaí Berry (frozen purée)",          category:"Fruits", unit:"g", base:100, cal:70,  prot:1.5, carb:4,   fat:5,   servingSize:100, servingLabel:"1 packet" },
  "goji berry dried":             { name:"Goji Berry (dried)",                 category:"Fruits", unit:"g", base:100, cal:349, prot:14,  carb:77,  fat:0.4, servingSize:28,  servingLabel:"¼ cup" },

  /* ── Grapes ────────────────────────────────────────── */
  "grapes green seedless":        { name:"Green Grapes (seedless, raw)",       category:"Fruits", unit:"g", base:100, cal:69,  prot:0.7, carb:18,  fat:0.2, servingSize:150, servingLabel:"1 cup" },
  "grapes red seedless":          { name:"Red / Purple Grapes (seedless)",     category:"Fruits", unit:"g", base:100, cal:69,  prot:0.7, carb:18,  fat:0.2, servingSize:150, servingLabel:"1 cup" },
  "grapes black concord":         { name:"Black / Concord Grapes",             category:"Fruits", unit:"g", base:100, cal:67,  prot:0.6, carb:17,  fat:0.4, servingSize:150, servingLabel:"1 cup" },
  "raisins":                      { name:"Raisins (dried grapes)",             category:"Fruits", unit:"g", base:100, cal:299, prot:3.1, carb:79,  fat:0.5, servingSize:43,  servingLabel:"¼ cup" },
  "sultanas golden raisins":      { name:"Sultanas / Golden Raisins",          category:"Fruits", unit:"g", base:100, cal:298, prot:3.1, carb:79,  fat:0.5, servingSize:43,  servingLabel:"¼ cup" },

  /* ── Avocado & Olive ───────────────────────────────── */
  "avocado hass":                 { name:"Avocado (Hass, raw)",                category:"Fruits", unit:"g", base:100, cal:160, prot:2,   carb:9,   fat:15,  servingSize:136, servingLabel:"½ avocado",   countable:{ unitName:"avocado",   gramsEach:136 } },
  "avocado florida":              { name:"Avocado (Florida, lower fat)",       category:"Fruits", unit:"g", base:100, cal:120, prot:2.2, carb:10,  fat:10,  servingSize:200, servingLabel:"½ avocado",   countable:{ unitName:"avocado",   gramsEach:200 } },
  "guacamole homemade":           { name:"Guacamole (homemade, plain)",        category:"Fruits", unit:"g", base:100, cal:160, prot:2,   carb:9,   fat:15,  servingSize:30,  servingLabel:"2 tbsp" },
  "olive black":                  { name:"Black Olives (pitted, canned)",      category:"Fruits", unit:"g", base:100, cal:115, prot:0.8, carb:6,   fat:11,  servingSize:15,  servingLabel:"5 olives",    countable:{ unitName:"olive",     gramsEach:3   } },
  "olive green":                  { name:"Green Olives (pitted, stuffed)",     category:"Fruits", unit:"g", base:100, cal:145, prot:1,   carb:3.8, fat:15,  servingSize:15,  servingLabel:"5 olives",    countable:{ unitName:"olive",     gramsEach:3   } },
  "olive kalamata":               { name:"Kalamata Olives",                    category:"Fruits", unit:"g", base:100, cal:145, prot:1,   carb:4,   fat:14,  servingSize:20,  servingLabel:"5 olives",    countable:{ unitName:"olive",     gramsEach:4   } },

  /* ── Dates, Figs & Dried Fruits ────────────────────── */
  "dates medjool":                { name:"Medjool Dates (raw)",                category:"Fruits", unit:"g", base:100, cal:277, prot:1.8, carb:75,  fat:0.2, servingSize:24,  servingLabel:"1 date",      countable:{ unitName:"date",      gramsEach:24  } },
  "dates deglet":                 { name:"Deglet Noor Dates (dry)",            category:"Fruits", unit:"g", base:100, cal:282, prot:2.5, carb:75,  fat:0.4, servingSize:8,   servingLabel:"1 date",      countable:{ unitName:"date",      gramsEach:8   } },
  "fig fresh":                    { name:"Fig (fresh)",                        category:"Fruits", unit:"g", base:100, cal:74,  prot:0.8, carb:19,  fat:0.3, servingSize:50,  servingLabel:"1 medium fig",countable:{ unitName:"fig",       gramsEach:50  } },
  "fig dried":                    { name:"Fig (dried)",                        category:"Fruits", unit:"g", base:100, cal:249, prot:3.3, carb:64,  fat:0.9, servingSize:13,  servingLabel:"1 dried fig", countable:{ unitName:"fig",       gramsEach:13  } },
  "tamarind pulp raw":            { name:"Tamarind (raw pulp)",                category:"Fruits", unit:"g", base:100, cal:239, prot:2.8, carb:63,  fat:0.6, servingSize:10,  servingLabel:"1 tbsp pulp" },
  "bael wood apple":              { name:"Bael / Wood Apple",                  category:"Fruits", unit:"g", base:100, cal:137, prot:1.8, carb:32,  fat:0.3, servingSize:100, servingLabel:"1 serving" },
  "kokum dried":                  { name:"Kokum (dried)",                      category:"Fruits", unit:"g", base:100, cal:150, prot:1.2, carb:37,  fat:0.2, servingSize:5,   servingLabel:"2–3 pieces" },
  "jackfruit seeds boiled":       { name:"Jackfruit Seeds (boiled)",           category:"Fruits", unit:"g", base:100, cal:184, prot:7,   carb:38,  fat:0.9, servingSize:50,  servingLabel:"handful" },

  /* ── Pomegranate, Kiwi & Others ────────────────────── */
  "pomegranate raw":              { name:"Pomegranate (arils, raw)",           category:"Fruits", unit:"g", base:100, cal:83,  prot:1.7, carb:19,  fat:1.2, servingSize:87,  servingLabel:"½ cup arils" },
  "pomegranate juice fresh":      { name:"Pomegranate Juice (fresh)",          category:"Fruits", unit:"ml", base:100, cal:54,  prot:0.2, carb:13,  fat:0.3, servingSize:240, servingLabel:"1 glass" },
  "kiwi green raw":               { name:"Kiwi (green, raw)",                  category:"Fruits", unit:"g", base:100, cal:61,  prot:1.1, carb:15,  fat:0.5, servingSize:76,  servingLabel:"1 kiwi",      countable:{ unitName:"kiwi",      gramsEach:76  } },
  "kiwi gold yellow":             { name:"Golden Kiwi (yellow flesh)",         category:"Fruits", unit:"g", base:100, cal:63,  prot:1,   carb:15,  fat:0.3, servingSize:76,  servingLabel:"1 kiwi",      countable:{ unitName:"kiwi",      gramsEach:76  } },
  "feijoa raw":                   { name:"Feijoa / Pineapple Guava",           category:"Fruits", unit:"g", base:100, cal:55,  prot:1.2, carb:13,  fat:0.8, servingSize:50,  servingLabel:"1 fruit",     countable:{ unitName:"feijoa",    gramsEach:50  } },
  "fig bar":                      { name:"Fig Bar / Fig Newton",               category:"Fruits", unit:"g", base:100, cal:358, prot:4,   carb:70,  fat:7,   servingSize:16,  servingLabel:"1 piece",     countable:{ unitName:"piece",     gramsEach:16  } },
  "rosehip raw":                  { name:"Rosehip (raw)",                      category:"Fruits", unit:"g", base:100, cal:162, prot:1.6, carb:38,  fat:0.3, servingSize:10,  servingLabel:"handful" },
  "physalis cape gooseberry":     { name:"Physalis / Cape Gooseberry",         category:"Fruits", unit:"g", base:100, cal:53,  prot:1.9, carb:11,  fat:0.7, servingSize:140, servingLabel:"1 cup",       countable:{ unitName:"berry",     gramsEach:6   } },
  "nance fruit":                  { name:"Nance / Yellow Cherry",              category:"Fruits", unit:"g", base:100, cal:32,  prot:0.4, carb:8,   fat:0.3, servingSize:100, servingLabel:"½ cup" },
  "salak snake fruit":            { name:"Salak / Snake Fruit",                category:"Fruits", unit:"g", base:100, cal:82,  prot:0.8, carb:21,  fat:0.4, servingSize:30,  servingLabel:"1 fruit",     countable:{ unitName:"fruit",     gramsEach:30  } },
  "wampee raw":                   { name:"Wampee (raw)",                       category:"Fruits", unit:"g", base:100, cal:74,  prot:1.6, carb:17,  fat:0.3, servingSize:25,  servingLabel:"3–4 fruits",  countable:{ unitName:"fruit",     gramsEach:8   } },

  /* ── Fruit Products & Preserved ───────────────────── */
  "fruit salad fresh":            { name:"Fruit Salad (fresh, mixed)",         category:"Fruits", unit:"g", base:100, cal:50,  prot:0.6, carb:13,  fat:0.2, servingSize:200, servingLabel:"1 cup" },
  "fruit salad canned":           { name:"Fruit Cocktail (canned in juice)",   category:"Fruits", unit:"g", base:100, cal:55,  prot:0.5, carb:14,  fat:0.1, servingSize:124, servingLabel:"½ cup" },
  "mixed frozen fruit":           { name:"Mixed Frozen Fruit (berries+mango)", category:"Fruits", unit:"g", base:100, cal:50,  prot:0.7, carb:12,  fat:0.3, servingSize:140, servingLabel:"1 cup frozen" },
  "fruit leather strip":          { name:"Fruit Leather / Fruit Roll-Up",      category:"Fruits", unit:"g", base:100, cal:347, prot:1,   carb:86,  fat:2,   servingSize:14,  servingLabel:"1 strip",     countable:{ unitName:"strip",     gramsEach:14  } },






/* ══════════════════════════════════════════════════════
     🥜  NUTS & SEEDS — COMPLETE SECTION
  ══════════════════════════════════════════════════════ */

  /* ── Almonds ───────────────────────────────────────── */
  "almonds raw":                  { name:"Almonds (raw)",                      category:"Nuts & Seeds", unit:"g", base:100, cal:579, prot:21,  carb:22,  fat:50,  servingSize:28,  servingLabel:"1 oz (~23 nuts)" },
  "almonds roasted dry":          { name:"Almonds (dry roasted, unsalted)",    category:"Nuts & Seeds", unit:"g", base:100, cal:598, prot:22,  carb:22,  fat:52,  servingSize:28,  servingLabel:"1 oz" },
  "almonds roasted salted":       { name:"Almonds (dry roasted, salted)",      category:"Nuts & Seeds", unit:"g", base:100, cal:598, prot:22,  carb:22,  fat:52,  servingSize:28,  servingLabel:"1 oz" },
  "almonds blanched":             { name:"Almonds (blanched, skin-off)",       category:"Nuts & Seeds", unit:"g", base:100, cal:590, prot:22,  carb:20,  fat:53,  servingSize:28,  servingLabel:"1 oz" },
  "almonds sliced flaked":        { name:"Sliced / Flaked Almonds",            category:"Nuts & Seeds", unit:"g", base:100, cal:590, prot:22,  carb:20,  fat:53,  servingSize:14,  servingLabel:"2 tbsp" },
  "almond butter raw":            { name:"Almond Butter (raw, unsalted)",      category:"Nuts & Seeds", unit:"g", base:100, cal:614, prot:21,  carb:19,  fat:56,  servingSize:32,  servingLabel:"2 tbsp" },
  "almond butter roasted":        { name:"Almond Butter (roasted)",            category:"Nuts & Seeds", unit:"g", base:100, cal:614, prot:21,  carb:19,  fat:56,  servingSize:32,  servingLabel:"2 tbsp" },
  "almond flour":                 { name:"Almond Flour (blanched, fine)",      category:"Nuts & Seeds", unit:"g", base:100, cal:571, prot:21,  carb:21,  fat:50,  servingSize:28,  servingLabel:"¼ cup" },
  "almond milk":                  { name:"Almond Milk (unsweetened)",          category:"Nuts & Seeds", unit:"ml", base:100, cal:15,  prot:0.6, carb:0.3, fat:1.2, servingSize:240, servingLabel:"1 cup" },

  /* ── Cashews ───────────────────────────────────────── */
  "cashews raw":                  { name:"Cashews (raw)",                      category:"Nuts & Seeds", unit:"g", base:100, cal:553, prot:18,  carb:30,  fat:44,  servingSize:28,  servingLabel:"1 oz (~18 nuts)" },
  "cashews roasted dry":          { name:"Cashews (dry roasted, unsalted)",    category:"Nuts & Seeds", unit:"g", base:100, cal:574, prot:15,  carb:32,  fat:47,  servingSize:28,  servingLabel:"1 oz" },
  "cashews roasted salted":       { name:"Cashews (dry roasted, salted)",      category:"Nuts & Seeds", unit:"g", base:100, cal:574, prot:15,  carb:32,  fat:47,  servingSize:28,  servingLabel:"1 oz" },
  "cashew butter":                { name:"Cashew Butter",                      category:"Nuts & Seeds", unit:"g", base:100, cal:587, prot:15,  carb:30,  fat:49,  servingSize:32,  servingLabel:"2 tbsp" },
  "cashew cream":                 { name:"Cashew Cream (soaked, blended)",     category:"Nuts & Seeds", unit:"g", base:100, cal:260, prot:7,   carb:14,  fat:21,  servingSize:60,  servingLabel:"¼ cup" },

  /* ── Peanuts ───────────────────────────────────────── */
  "peanuts raw":                  { name:"Peanuts (raw)",                      category:"Nuts & Seeds", unit:"g", base:100, cal:567, prot:26,  carb:16,  fat:49,  servingSize:28,  servingLabel:"1 oz" },
  "peanuts roasted dry":          { name:"Peanuts (dry roasted, unsalted)",    category:"Nuts & Seeds", unit:"g", base:100, cal:587, prot:24,  carb:21,  fat:50,  servingSize:28,  servingLabel:"1 oz" },
  "peanuts roasted salted":       { name:"Peanuts (dry roasted, salted)",      category:"Nuts & Seeds", unit:"g", base:100, cal:587, prot:24,  carb:21,  fat:50,  servingSize:28,  servingLabel:"1 oz" },
  "peanuts honey roasted":        { name:"Peanuts (honey roasted)",            category:"Nuts & Seeds", unit:"g", base:100, cal:583, prot:22,  carb:27,  fat:47,  servingSize:28,  servingLabel:"1 oz" },
  "peanut butter smooth":         { name:"Peanut Butter (smooth)",             category:"Nuts & Seeds", unit:"g", base:100, cal:588, prot:25,  carb:20,  fat:50,  servingSize:32,  servingLabel:"2 tbsp" },
  "peanut butter crunchy":        { name:"Peanut Butter (crunchy / chunky)",   category:"Nuts & Seeds", unit:"g", base:100, cal:588, prot:25,  carb:20,  fat:50,  servingSize:32,  servingLabel:"2 tbsp" },
  "peanut butter natural":        { name:"Natural Peanut Butter (no added oil)",category:"Nuts & Seeds", unit:"g", base:100, cal:598, prot:25,  carb:17,  fat:51,  servingSize:32,  servingLabel:"2 tbsp" },
  "peanut flour defatted":        { name:"Peanut Flour (defatted)",            category:"Nuts & Seeds", unit:"g", base:100, cal:327, prot:52,  carb:29,  fat:1.2, servingSize:28,  servingLabel:"¼ cup" },

  /* ── Walnuts ───────────────────────────────────────── */
  "walnuts raw":                  { name:"Walnuts (raw, halves & pieces)",     category:"Nuts & Seeds", unit:"g", base:100, cal:654, prot:15,  carb:14,  fat:65,  servingSize:28,  servingLabel:"1 oz (7 halves)" },
  "walnuts black":                { name:"Black Walnuts (raw)",                category:"Nuts & Seeds", unit:"g", base:100, cal:619, prot:24,  carb:10,  fat:59,  servingSize:28,  servingLabel:"1 oz" },
  "walnut oil":                   { name:"Walnut Oil",                         category:"Nuts & Seeds", unit:"ml", base:100, cal:884, prot:0,   carb:0,   fat:100, servingSize:14,  servingLabel:"1 tbsp" },

  /* ── Pistachios ────────────────────────────────────── */
  "pistachios raw":               { name:"Pistachios (raw, shelled)",          category:"Nuts & Seeds", unit:"g", base:100, cal:562, prot:20,  carb:28,  fat:45,  servingSize:28,  servingLabel:"1 oz (~49 nuts)" },
  "pistachios roasted salted":    { name:"Pistachios (roasted, salted)",       category:"Nuts & Seeds", unit:"g", base:100, cal:570, prot:21,  carb:28,  fat:46,  servingSize:28,  servingLabel:"1 oz" },
  "pistachio butter":             { name:"Pistachio Butter",                   category:"Nuts & Seeds", unit:"g", base:100, cal:580, prot:20,  carb:26,  fat:48,  servingSize:32,  servingLabel:"2 tbsp" },

  /* ── Hazelnuts ─────────────────────────────────────── */
  "hazelnuts raw":                { name:"Hazelnuts (raw)",                    category:"Nuts & Seeds", unit:"g", base:100, cal:628, prot:15,  carb:17,  fat:61,  servingSize:28,  servingLabel:"1 oz (~21 nuts)" },
  "hazelnuts roasted":            { name:"Hazelnuts (dry roasted)",            category:"Nuts & Seeds", unit:"g", base:100, cal:646, prot:15,  carb:17,  fat:63,  servingSize:28,  servingLabel:"1 oz" },
  "hazelnut butter":              { name:"Hazelnut Butter",                    category:"Nuts & Seeds", unit:"g", base:100, cal:627, prot:14,  carb:17,  fat:61,  servingSize:32,  servingLabel:"2 tbsp" },
  "nutella hazelnut choc":        { name:"Nutella / Hazelnut Chocolate Spread",category:"Nuts & Seeds", unit:"g", base:100, cal:539, prot:6,   carb:58,  fat:31,  servingSize:37,  servingLabel:"2 tbsp" },

  /* ── Macadamia ─────────────────────────────────────── */
  "macadamia raw":                { name:"Macadamia Nuts (raw)",               category:"Nuts & Seeds", unit:"g", base:100, cal:718, prot:8,   carb:14,  fat:76,  servingSize:28,  servingLabel:"1 oz (~11 nuts)" },
  "macadamia roasted salted":     { name:"Macadamia Nuts (roasted, salted)",   category:"Nuts & Seeds", unit:"g", base:100, cal:718, prot:8,   carb:14,  fat:76,  servingSize:28,  servingLabel:"1 oz" },
  "macadamia butter":             { name:"Macadamia Nut Butter",               category:"Nuts & Seeds", unit:"g", base:100, cal:730, prot:8,   carb:13,  fat:76,  servingSize:32,  servingLabel:"2 tbsp" },

  /* ── Pecans & Brazil Nuts ──────────────────────────── */
  "pecans raw":                   { name:"Pecans (raw)",                       category:"Nuts & Seeds", unit:"g", base:100, cal:691, prot:9,   carb:14,  fat:72,  servingSize:28,  servingLabel:"1 oz (~19 halves)" },
  "pecans roasted":               { name:"Pecans (dry roasted)",               category:"Nuts & Seeds", unit:"g", base:100, cal:710, prot:9,   carb:14,  fat:74,  servingSize:28,  servingLabel:"1 oz" },
  "brazil nuts raw":              { name:"Brazil Nuts (raw)",                  category:"Nuts & Seeds", unit:"g", base:100, cal:659, prot:14,  carb:12,  fat:67,  servingSize:28,  servingLabel:"1 oz (6 nuts)",    countable:{ unitName:"nut",   gramsEach:5   } },

  /* ── Pine Nuts & Others ────────────────────────────── */
  "pine nuts raw":                { name:"Pine Nuts / Pignoli (raw)",          category:"Nuts & Seeds", unit:"g", base:100, cal:673, prot:14,  carb:13,  fat:68,  servingSize:28,  servingLabel:"1 oz" },
  "pine nuts toasted":            { name:"Pine Nuts (toasted)",                category:"Nuts & Seeds", unit:"g", base:100, cal:692, prot:14,  carb:13,  fat:70,  servingSize:14,  servingLabel:"2 tbsp" },
  "chestnuts cooked":             { name:"Chestnuts (boiled / roasted)",       category:"Nuts & Seeds", unit:"g", base:100, cal:245, prot:3,   carb:53,  fat:2.7, servingSize:28,  servingLabel:"3–4 chestnuts",    countable:{ unitName:"chestnut", gramsEach:10  } },
  "chestnuts raw":                { name:"Chestnuts (raw)",                    category:"Nuts & Seeds", unit:"g", base:100, cal:213, prot:2.5, carb:46,  fat:2.3, servingSize:28,  servingLabel:"3–4 chestnuts" },
  "mixed nuts roasted":           { name:"Mixed Nuts (dry roasted)",           category:"Nuts & Seeds", unit:"g", base:100, cal:607, prot:15,  carb:22,  fat:55,  servingSize:28,  servingLabel:"1 oz" },
  "mixed nuts salted":            { name:"Mixed Nuts (salted, oil roasted)",   category:"Nuts & Seeds", unit:"g", base:100, cal:607, prot:15,  carb:22,  fat:55,  servingSize:28,  servingLabel:"1 oz" },
  "coconut chips toasted":        { name:"Coconut Chips / Flakes (toasted)",   category:"Nuts & Seeds", unit:"g", base:100, cal:660, prot:7,   carb:24,  fat:65,  servingSize:14,  servingLabel:"2 tbsp" },
  "coconut desiccated unsw":      { name:"Desiccated Coconut (unsweetened)",   category:"Nuts & Seeds", unit:"g", base:100, cal:660, prot:7,   carb:24,  fat:65,  servingSize:14,  servingLabel:"2 tbsp" },
  "coconut shredded sweetened":   { name:"Shredded Coconut (sweetened)",       category:"Nuts & Seeds", unit:"g", base:100, cal:452, prot:3.5, carb:45,  fat:30,  servingSize:28,  servingLabel:"¼ cup" },
  "tiger nuts raw":               { name:"Tiger Nuts / Chufa (raw)",           category:"Nuts & Seeds", unit:"g", base:100, cal:421, prot:5.5, carb:67,  fat:19,  servingSize:28,  servingLabel:"1 oz" },
  "peanuts indian groundnut":     { name:"Groundnut / Moongphali (Indian)",    category:"Nuts & Seeds", unit:"g", base:100, cal:567, prot:26,  carb:16,  fat:49,  servingSize:28,  servingLabel:"1 oz" },

  /* ── Sunflower Seeds ───────────────────────────────── */
  "sunflower seeds raw":          { name:"Sunflower Seeds (raw, hulled)",      category:"Nuts & Seeds", unit:"g", base:100, cal:584, prot:21,  carb:20,  fat:51,  servingSize:28,  servingLabel:"1 oz" },
  "sunflower seeds roasted":      { name:"Sunflower Seeds (dry roasted, salted)", category:"Nuts & Seeds", unit:"g", base:100, cal:600, prot:20, carb:20,  fat:52,  servingSize:28,  servingLabel:"1 oz" },
  "sunflower seed butter":        { name:"Sunflower Seed Butter (SunButter)",  category:"Nuts & Seeds", unit:"g", base:100, cal:617, prot:21,  carb:19,  fat:55,  servingSize:32,  servingLabel:"2 tbsp" },
  "sunflower seeds in shell":     { name:"Sunflower Seeds (in shell, salted)", category:"Nuts & Seeds", unit:"g", base:100, cal:584, prot:21,  carb:20,  fat:51,  servingSize:28,  servingLabel:"1 oz" },

  /* ── Pumpkin & Squash Seeds ────────────────────────── */
  "pumpkin seeds raw":            { name:"Pumpkin Seeds / Pepitas (raw)",      category:"Nuts & Seeds", unit:"g", base:100, cal:559, prot:30,  carb:11,  fat:49,  servingSize:28,  servingLabel:"1 oz" },
  "pumpkin seeds roasted":        { name:"Pumpkin Seeds (roasted, salted)",    category:"Nuts & Seeds", unit:"g", base:100, cal:574, prot:30,  carb:15,  fat:49,  servingSize:28,  servingLabel:"1 oz" },
  "pumpkin seed butter":          { name:"Pumpkin Seed Butter",                category:"Nuts & Seeds", unit:"g", base:100, cal:568, prot:28,  carb:17,  fat:49,  servingSize:32,  servingLabel:"2 tbsp" },

  /* ── Sesame Seeds & Tahini ─────────────────────────── */
  "sesame seeds raw white":       { name:"Sesame Seeds (white, raw)",          category:"Nuts & Seeds", unit:"g", base:100, cal:573, prot:18,  carb:23,  fat:50,  servingSize:9,   servingLabel:"1 tbsp" },
  "sesame seeds black":           { name:"Sesame Seeds (black)",               category:"Nuts & Seeds", unit:"g", base:100, cal:573, prot:18,  carb:23,  fat:50,  servingSize:9,   servingLabel:"1 tbsp" },
  "sesame seeds toasted":         { name:"Sesame Seeds (toasted)",             category:"Nuts & Seeds", unit:"g", base:100, cal:592, prot:17,  carb:26,  fat:51,  servingSize:9,   servingLabel:"1 tbsp" },
  "tahini sesame paste":          { name:"Tahini / Sesame Paste",              category:"Nuts & Seeds", unit:"g", base:100, cal:595, prot:17,  carb:21,  fat:53,  servingSize:15,  servingLabel:"1 tbsp" },
  "tahini hulled":                { name:"Tahini (hulled sesame, lighter)",    category:"Nuts & Seeds", unit:"g", base:100, cal:595, prot:17,  carb:21,  fat:53,  servingSize:15,  servingLabel:"1 tbsp" },
  "sesame oil toasted":           { name:"Toasted Sesame Oil",                 category:"Nuts & Seeds", unit:"ml", base:100, cal:884, prot:0,   carb:0,   fat:100, servingSize:14,  servingLabel:"1 tbsp" },
  "gingelly til":                 { name:"Gingelly / Til (Indian sesame seed)",category:"Nuts & Seeds", unit:"g", base:100, cal:573, prot:18,  carb:23,  fat:50,  servingSize:9,   servingLabel:"1 tbsp" },

  /* ── Flax Seeds ────────────────────────────────────── */
  "flaxseed whole":               { name:"Flaxseed / Linseed (whole)",         category:"Nuts & Seeds", unit:"g", base:100, cal:534, prot:18,  carb:29,  fat:42,  servingSize:10,  servingLabel:"1 tbsp" },
  "flaxseed ground":              { name:"Ground Flaxseed (milled linseed)",   category:"Nuts & Seeds", unit:"g", base:100, cal:534, prot:18,  carb:29,  fat:42,  servingSize:10,  servingLabel:"1 tbsp" },
  "flaxseed oil":                 { name:"Flaxseed / Linseed Oil",             category:"Nuts & Seeds", unit:"ml", base:100, cal:884, prot:0,   carb:0,   fat:100, servingSize:14,  servingLabel:"1 tbsp" },

  /* ── Chia Seeds ────────────────────────────────────── */
  "chia seeds dry":               { name:"Chia Seeds (dry)",                   category:"Nuts & Seeds", unit:"g", base:100, cal:486, prot:17,  carb:42,  fat:31,  servingSize:28,  servingLabel:"2 tbsp" },
  "chia seeds soaked":            { name:"Chia Seeds (soaked, gel)",           category:"Nuts & Seeds", unit:"g", base:100, cal:72,  prot:2.5, carb:6.2, fat:4.6, servingSize:100, servingLabel:"½ cup soaked" },
  "chia pudding":                 { name:"Chia Pudding (with almond milk)",    category:"Nuts & Seeds", unit:"g", base:100, cal:130, prot:4,   carb:13,  fat:7,   servingSize:150, servingLabel:"½ cup" },

  /* ── Hemp Seeds ────────────────────────────────────── */
  "hemp seeds raw":               { name:"Hemp Seeds / Hemp Hearts (raw)",     category:"Nuts & Seeds", unit:"g", base:100, cal:553, prot:32,  carb:8.7, fat:49,  servingSize:30,  servingLabel:"3 tbsp" },
  "hemp seed powder":             { name:"Hemp Protein Powder",                category:"Nuts & Seeds", unit:"g", base:100, cal:350, prot:50,  carb:17,  fat:11,  servingSize:30,  servingLabel:"3 tbsp",  countable:{ unitName:"scoop", gramsEach:30 } },

  /* ── Poppy Seeds ───────────────────────────────────── */
  "poppy seeds khuskhus":         { name:"Poppy Seeds / Khuskhus",             category:"Nuts & Seeds", unit:"g", base:100, cal:525, prot:18,  carb:28,  fat:42,  servingSize:9,   servingLabel:"1 tbsp" },

  /* ── Melon & Watermelon Seeds ──────────────────────── */
  "melon seeds charmagaz":        { name:"Melon Seeds / Charmagaz (dried)",    category:"Nuts & Seeds", unit:"g", base:100, cal:555, prot:34,  carb:10,  fat:46,  servingSize:14,  servingLabel:"1 tbsp" },
  "watermelon seeds roasted":     { name:"Watermelon Seeds (roasted)",         category:"Nuts & Seeds", unit:"g", base:100, cal:557, prot:28,  carb:15,  fat:47,  servingSize:28,  servingLabel:"1 oz" },
  "watermelon seeds raw":         { name:"Watermelon Seeds (raw)",             category:"Nuts & Seeds", unit:"g", base:100, cal:556, prot:28,  carb:15,  fat:47,  servingSize:28,  servingLabel:"1 oz" },

  /* ── Other Seeds ───────────────────────────────────── */
  "sacha inchi seeds":            { name:"Sacha Inchi Seeds (roasted)",        category:"Nuts & Seeds", unit:"g", base:100, cal:566, prot:28,  carb:19,  fat:46,  servingSize:28,  servingLabel:"1 oz" },
  "cacao nibs raw":               { name:"Cacao Nibs (raw)",                   category:"Nuts & Seeds", unit:"g", base:100, cal:481, prot:13,  carb:34,  fat:43,  servingSize:28,  servingLabel:"1 oz" },
  "cocoa powder unsweetened":     { name:"Cocoa Powder (unsweetened)",         category:"Nuts & Seeds", unit:"g", base:100, cal:228, prot:20,  carb:58,  fat:14,  servingSize:8,   servingLabel:"1 tbsp" },
  "cocoa powder dutch":           { name:"Dutch-Process Cocoa Powder",         category:"Nuts & Seeds", unit:"g", base:100, cal:228, prot:20,  carb:57,  fat:14,  servingSize:8,   servingLabel:"1 tbsp" },
  "caraway seeds":                { name:"Caraway Seeds",                      category:"Nuts & Seeds", unit:"g", base:100, cal:333, prot:20,  carb:50,  fat:15,  servingSize:3,   servingLabel:"1 tsp" },
  "fennel seeds":                 { name:"Fennel Seeds / Saunf",               category:"Nuts & Seeds", unit:"g", base:100, cal:345, prot:16,  carb:52,  fat:15,  servingSize:3,   servingLabel:"1 tsp" },
  "nigella seeds kalonji":        { name:"Nigella Seeds / Kalonji",            category:"Nuts & Seeds", unit:"g", base:100, cal:445, prot:18,  carb:52,  fat:22,  servingSize:3,   servingLabel:"1 tsp" },
  "mustard seeds":                { name:"Mustard Seeds (yellow / brown)",     category:"Nuts & Seeds", unit:"g", base:100, cal:508, prot:27,  carb:28,  fat:36,  servingSize:3,   servingLabel:"1 tsp" },
  "coriander seeds dhania":       { name:"Coriander Seeds / Dhania",           category:"Nuts & Seeds", unit:"g", base:100, cal:298, prot:12,  carb:55,  fat:18,  servingSize:3,   servingLabel:"1 tsp" },
  "cumin seeds jeera":            { name:"Cumin Seeds / Jeera",                category:"Nuts & Seeds", unit:"g", base:100, cal:375, prot:18,  carb:44,  fat:22,  servingSize:2,   servingLabel:"½ tsp" },
  "ajwain carom seeds":           { name:"Ajwain / Carom Seeds",               category:"Nuts & Seeds", unit:"g", base:100, cal:305, prot:16,  carb:43,  fat:25,  servingSize:2,   servingLabel:"½ tsp" },
  "basil seeds sabja":            { name:"Basil Seeds / Sabja / Falooda Seeds",category:"Nuts & Seeds", unit:"g", base:100, cal:442, prot:14,  carb:63,  fat:15,  servingSize:9,   servingLabel:"1 tbsp (dry)" },

  /* ── Nut & Seed Butters ────────────────────────────── */
  "seed butter mixed":            { name:"Mixed Seed Butter (sunflower+pumpkin)",category:"Nuts & Seeds", unit:"g", base:100, cal:590, prot:22,  carb:18,  fat:53,  servingSize:32,  servingLabel:"2 tbsp" },
  "tahini light roasted":         { name:"Tahini (light roasted)",             category:"Nuts & Seeds", unit:"g", base:100, cal:595, prot:17,  carb:21,  fat:53,  servingSize:15,  servingLabel:"1 tbsp" },
  "lotus seed makhana roasted":   { name:"Roasted Makhana / Lotus Seeds",      category:"Nuts & Seeds", unit:"g", base:100, cal:347, prot:9.7, carb:76,  fat:0.1, servingSize:30,  servingLabel:"1 cup puffed" },
  "lotus seed raw":               { name:"Lotus Seeds (raw, dried)",           category:"Nuts & Seeds", unit:"g", base:100, cal:332, prot:15,  carb:64,  fat:1.9, servingSize:28,  servingLabel:"1 oz" },
  "trail mix basic":              { name:"Trail Mix (nuts + raisins, basic)",  category:"Nuts & Seeds", unit:"g", base:100, cal:462, prot:10,  carb:47,  fat:29,  servingSize:30,  servingLabel:"¼ cup" },
  "trail mix chocolate":          { name:"Trail Mix (nuts + chocolate chips)", category:"Nuts & Seeds", unit:"g", base:100, cal:496, prot:10,  carb:52,  fat:30,  servingSize:30,  servingLabel:"¼ cup" },
  "nut butter mixed":             { name:"Mixed Nut Butter (almond + cashew)", category:"Nuts & Seeds", unit:"g", base:100, cal:606, prot:19,  carb:22,  fat:55,  servingSize:32,  servingLabel:"2 tbsp" },







 /* ══════════════════════════════════════════════════════
     🍝  PASTA & NOODLES — COMPLETE SECTION
  ══════════════════════════════════════════════════════ */

  /* ── Italian Pasta — Dry ───────────────────────────── */
  "spaghetti dry":                { name:"Spaghetti (dry)",                    category:"Pasta & Noodles", unit:"g", base:100, cal:371, prot:13,  carb:75,  fat:1.5, servingSize:85,  servingLabel:"3 oz dry (~2 cups cooked)" },
  "spaghetti cooked":             { name:"Spaghetti (cooked)",                 category:"Pasta & Noodles", unit:"g", base:100, cal:158, prot:5.8, carb:31,  fat:0.9, servingSize:180, servingLabel:"1 cup cooked" },
  "penne dry":                    { name:"Penne (dry)",                        category:"Pasta & Noodles", unit:"g", base:100, cal:371, prot:13,  carb:75,  fat:1.5, servingSize:85,  servingLabel:"3 oz dry" },
  "penne cooked":                 { name:"Penne (cooked)",                     category:"Pasta & Noodles", unit:"g", base:100, cal:158, prot:5.8, carb:31,  fat:0.9, servingSize:180, servingLabel:"1 cup cooked" },
  "fusilli dry":                  { name:"Fusilli / Rotini (dry)",             category:"Pasta & Noodles", unit:"g", base:100, cal:371, prot:13,  carb:75,  fat:1.5, servingSize:85,  servingLabel:"3 oz dry" },
  "fusilli cooked":               { name:"Fusilli / Rotini (cooked)",          category:"Pasta & Noodles", unit:"g", base:100, cal:158, prot:5.8, carb:31,  fat:0.9, servingSize:180, servingLabel:"1 cup cooked" },
  "rigatoni cooked":              { name:"Rigatoni (cooked)",                  category:"Pasta & Noodles", unit:"g", base:100, cal:158, prot:5.8, carb:31,  fat:0.9, servingSize:180, servingLabel:"1 cup cooked" },
  "farfalle bow tie cooked":      { name:"Farfalle / Bow-Tie Pasta (cooked)",  category:"Pasta & Noodles", unit:"g", base:100, cal:158, prot:5.8, carb:31,  fat:0.9, servingSize:180, servingLabel:"1 cup cooked" },
  "linguine cooked":              { name:"Linguine (cooked)",                  category:"Pasta & Noodles", unit:"g", base:100, cal:158, prot:5.8, carb:31,  fat:0.9, servingSize:180, servingLabel:"1 cup cooked" },
  "fettuccine cooked":            { name:"Fettuccine (cooked)",                category:"Pasta & Noodles", unit:"g", base:100, cal:158, prot:5.8, carb:31,  fat:0.9, servingSize:180, servingLabel:"1 cup cooked" },
  "tagliatelle cooked":           { name:"Tagliatelle (cooked)",               category:"Pasta & Noodles", unit:"g", base:100, cal:158, prot:5.8, carb:31,  fat:0.9, servingSize:180, servingLabel:"1 cup cooked" },
  "orzo cooked":                  { name:"Orzo / Risoni (cooked)",             category:"Pasta & Noodles", unit:"g", base:100, cal:158, prot:5.8, carb:31,  fat:0.9, servingSize:140, servingLabel:"¾ cup cooked" },
  "conchiglie shells cooked":     { name:"Conchiglie / Pasta Shells (cooked)", category:"Pasta & Noodles", unit:"g", base:100, cal:158, prot:5.8, carb:31,  fat:0.9, servingSize:180, servingLabel:"1 cup cooked" },
  "macaroni elbow cooked":        { name:"Macaroni / Elbow Pasta (cooked)",    category:"Pasta & Noodles", unit:"g", base:100, cal:158, prot:5.8, carb:31,  fat:0.9, servingSize:140, servingLabel:"¾ cup cooked" },
  "ditalini cooked":              { name:"Ditalini (small tubular pasta)",     category:"Pasta & Noodles", unit:"g", base:100, cal:158, prot:5.8, carb:31,  fat:0.9, servingSize:140, servingLabel:"¾ cup cooked" },
  "orecchiette cooked":           { name:"Orecchiette (little ears pasta)",    category:"Pasta & Noodles", unit:"g", base:100, cal:158, prot:5.8, carb:31,  fat:0.9, servingSize:180, servingLabel:"1 cup cooked" },
  "pappardelle cooked":           { name:"Pappardelle (wide ribbon pasta)",    category:"Pasta & Noodles", unit:"g", base:100, cal:158, prot:5.8, carb:31,  fat:0.9, servingSize:180, servingLabel:"1 cup cooked" },
  "vermicelli italian cooked":    { name:"Vermicelli (Italian, thin spaghetti)", category:"Pasta & Noodles", unit:"g", base:100, cal:158, prot:5.8, carb:31, fat:0.9, servingSize:180, servingLabel:"1 cup cooked" },
  "angel hair capellini cooked":  { name:"Angel Hair / Capellini (cooked)",    category:"Pasta & Noodles", unit:"g", base:100, cal:158, prot:5.8, carb:31,  fat:0.9, servingSize:180, servingLabel:"1 cup cooked" },
  "lasagne sheets dry":           { name:"Lasagne Sheets (dry)",               category:"Pasta & Noodles", unit:"g", base:100, cal:371, prot:13,  carb:75,  fat:1.5, servingSize:28,  servingLabel:"1 sheet",   countable:{ unitName:"sheet",   gramsEach:28  } },
  "lasagne sheets cooked":        { name:"Lasagne Sheets (cooked)",            category:"Pasta & Noodles", unit:"g", base:100, cal:135, prot:5,   carb:27,  fat:0.8, servingSize:56,  servingLabel:"1 sheet",   countable:{ unitName:"sheet",   gramsEach:56  } },
  "cannelloni tubes dry":         { name:"Cannelloni / Manicotti Tubes (dry)", category:"Pasta & Noodles", unit:"g", base:100, cal:371, prot:13,  carb:75,  fat:1.5, servingSize:28,  servingLabel:"1 tube",    countable:{ unitName:"tube",    gramsEach:28  } },

  /* ── Whole Wheat & High-Fibre Pasta ────────────────── */
  "spaghetti whole wheat cooked": { name:"Whole Wheat Spaghetti (cooked)",     category:"Pasta & Noodles", unit:"g", base:100, cal:124, prot:5,   carb:27,  fat:0.5, servingSize:180, servingLabel:"1 cup cooked" },
  "penne whole wheat cooked":     { name:"Whole Wheat Penne (cooked)",         category:"Pasta & Noodles", unit:"g", base:100, cal:124, prot:5,   carb:27,  fat:0.5, servingSize:180, servingLabel:"1 cup cooked" },
  "pasta whole wheat dry":        { name:"Whole Wheat Pasta (dry, any shape)", category:"Pasta & Noodles", unit:"g", base:100, cal:348, prot:15,  carb:71,  fat:2.5, servingSize:85,  servingLabel:"3 oz dry" },
  "pasta high protein lentil":    { name:"Red Lentil / Chickpea Pasta (cooked)", category:"Pasta & Noodles", unit:"g", base:100, cal:170, prot:11, carb:29,  fat:2.5, servingSize:180, servingLabel:"1 cup cooked" },
  "pasta gluten free cooked":     { name:"Gluten-Free Pasta (rice/corn, cooked)", category:"Pasta & Noodles", unit:"g", base:100, cal:150, prot:2.5, carb:34, fat:1,   servingSize:180, servingLabel:"1 cup cooked" },
  "pasta spinach cooked":         { name:"Spinach / Green Pasta (cooked)",     category:"Pasta & Noodles", unit:"g", base:100, cal:155, prot:6,   carb:31,  fat:0.9, servingSize:180, servingLabel:"1 cup cooked" },
  "pasta squid ink cooked":       { name:"Squid Ink Pasta (cooked)",           category:"Pasta & Noodles", unit:"g", base:100, cal:155, prot:6,   carb:30,  fat:0.9, servingSize:180, servingLabel:"1 cup cooked" },

  /* ── Stuffed Pasta ─────────────────────────────────── */
  "ravioli cheese cooked":        { name:"Cheese Ravioli (cooked)",            category:"Pasta & Noodles", unit:"g", base:100, cal:185, prot:8,   carb:27,  fat:5.5, servingSize:113, servingLabel:"½ cup (5 pieces)", countable:{ unitName:"piece", gramsEach:22  } },
  "ravioli meat cooked":          { name:"Meat Ravioli (cooked)",              category:"Pasta & Noodles", unit:"g", base:100, cal:195, prot:10,  carb:26,  fat:6,   servingSize:113, servingLabel:"5 pieces",          countable:{ unitName:"piece", gramsEach:22  } },
  "tortellini cheese cooked":     { name:"Cheese Tortellini (cooked)",         category:"Pasta & Noodles", unit:"g", base:100, cal:227, prot:10,  carb:38,  fat:4.5, servingSize:108, servingLabel:"¾ cup cooked" },
  "tortellini meat cooked":       { name:"Meat Tortellini (cooked)",           category:"Pasta & Noodles", unit:"g", base:100, cal:245, prot:12,  carb:37,  fat:6,   servingSize:108, servingLabel:"¾ cup cooked" },
  "gnocchi cooked":               { name:"Gnocchi (potato, cooked)",           category:"Pasta & Noodles", unit:"g", base:100, cal:170, prot:4,   carb:36,  fat:1,   servingSize:140, servingLabel:"1 cup cooked" },

  /* ── Egg Noodles ───────────────────────────────────── */
  "egg noodles cooked":           { name:"Egg Noodles (cooked)",               category:"Pasta & Noodles", unit:"g", base:100, cal:138, prot:4.5, carb:25,  fat:2.1, servingSize:160, servingLabel:"1 cup cooked" },
  "egg noodles dry":              { name:"Egg Noodles (dry)",                  category:"Pasta & Noodles", unit:"g", base:100, cal:384, prot:13,  carb:72,  fat:4.6, servingSize:55,  servingLabel:"2 oz dry" },
  "egg noodles wide cooked":      { name:"Wide Egg Noodles (cooked)",          category:"Pasta & Noodles", unit:"g", base:100, cal:140, prot:4.5, carb:26,  fat:2.2, servingSize:160, servingLabel:"1 cup cooked" },

  /* ── Ramen & Instant Noodles ───────────────────────── */
  "ramen noodles dry":            { name:"Ramen Noodles (dry, block)",         category:"Pasta & Noodles", unit:"g", base:100, cal:436, prot:11,  carb:64,  fat:17,  servingSize:85,  servingLabel:"1 block dry" },
  "ramen noodles cooked":         { name:"Ramen Noodles (cooked, in broth)",   category:"Pasta & Noodles", unit:"g", base:100, cal:138, prot:4.6, carb:26,  fat:2,   servingSize:240, servingLabel:"1 cup cooked" },
  "instant noodles maggi":        { name:"Instant Noodles (Maggi / 2-minute)", category:"Pasta & Noodles", unit:"g", base:100, cal:436, prot:11,  carb:60,  fat:17,  servingSize:70,  servingLabel:"1 packet dry" },
  "instant noodles with soup":    { name:"Instant Noodle Soup (cooked)",       category:"Pasta & Noodles", unit:"g", base:100, cal:96,  prot:2.8, carb:13,  fat:3.8, servingSize:300, servingLabel:"1 bowl" },
  "cup noodles":                  { name:"Cup Noodles (small cup, prepared)",  category:"Pasta & Noodles", unit:"g", base:100, cal:430, prot:9,   carb:58,  fat:18,  servingSize:64,  servingLabel:"1 small cup dry" },

  /* ── Udon, Soba & Asian Wheat Noodles ──────────────── */
  "udon noodles cooked":          { name:"Udon Noodles (cooked)",              category:"Pasta & Noodles", unit:"g", base:100, cal:103, prot:2.8, carb:22,  fat:0.5, servingSize:200, servingLabel:"1 serving" },
  "udon noodles dry":             { name:"Udon Noodles (dry)",                 category:"Pasta & Noodles", unit:"g", base:100, cal:351, prot:11,  carb:74,  fat:1.2, servingSize:85,  servingLabel:"3 oz dry" },
  "soba noodles cooked":          { name:"Soba Noodles (buckwheat, cooked)",   category:"Pasta & Noodles", unit:"g", base:100, cal:99,  prot:5,   carb:21,  fat:0.1, servingSize:200, servingLabel:"1 cup cooked" },
  "soba noodles dry":             { name:"Soba Noodles (dry)",                 category:"Pasta & Noodles", unit:"g", base:100, cal:348, prot:14,  carb:70,  fat:0.8, servingSize:85,  servingLabel:"3 oz dry" },
  "somen noodles cooked":         { name:"Somen Noodles (thin wheat, cooked)", category:"Pasta & Noodles", unit:"g", base:100, cal:119, prot:3.7, carb:24,  fat:0.4, servingSize:200, servingLabel:"1 serving" },
  "yakisoba noodles cooked":      { name:"Yakisoba Noodles (cooked)",          category:"Pasta & Noodles", unit:"g", base:100, cal:148, prot:4.5, carb:29,  fat:1.5, servingSize:200, servingLabel:"1 serving" },
  "lo mein noodles cooked":       { name:"Lo Mein / Chow Mein Noodles (cooked)", category:"Pasta & Noodles", unit:"g", base:100, cal:148, prot:4.5, carb:28, fat:1.5, servingSize:200, servingLabel:"1 serving" },
  "wonton noodles cooked":        { name:"Wonton Noodles / Hong Kong Noodles", category:"Pasta & Noodles", unit:"g", base:100, cal:145, prot:5,   carb:28,  fat:1.5, servingSize:150, servingLabel:"1 serving" },

  /* ── Rice Noodles ──────────────────────────────────── */
  "rice noodles cooked":          { name:"Rice Noodles (flat, cooked)",        category:"Pasta & Noodles", unit:"g", base:100, cal:109, prot:1.8, carb:25,  fat:0.2, servingSize:176, servingLabel:"1 cup cooked" },
  "rice noodles dry":             { name:"Rice Noodles (dry, flat)",           category:"Pasta & Noodles", unit:"g", base:100, cal:364, prot:6.1, carb:83,  fat:0.6, servingSize:55,  servingLabel:"2 oz dry" },
  "rice vermicelli cooked":       { name:"Rice Vermicelli / Sevai (cooked)",   category:"Pasta & Noodles", unit:"g", base:100, cal:108, prot:1.6, carb:24,  fat:0.2, servingSize:180, servingLabel:"1 cup cooked" },
  "rice vermicelli dry":          { name:"Rice Vermicelli (dry)",              category:"Pasta & Noodles", unit:"g", base:100, cal:364, prot:6,   carb:83,  fat:0.6, servingSize:55,  servingLabel:"2 oz dry" },
  "pad thai noodles cooked":      { name:"Pad Thai Rice Noodles (cooked)",     category:"Pasta & Noodles", unit:"g", base:100, cal:109, prot:1.8, carb:25,  fat:0.2, servingSize:176, servingLabel:"1 cup cooked" },
  "banh pho rice noodles":        { name:"Pho / Bánh Phở Rice Noodles (cooked)", category:"Pasta & Noodles", unit:"g", base:100, cal:108, prot:2, carb:25,  fat:0.2, servingSize:200, servingLabel:"1 bowl portion" },

  /* ── Cellophane / Glass Noodles ────────────────────── */
  "glass noodles cooked":         { name:"Glass / Cellophane Noodles (cooked)", category:"Pasta & Noodles", unit:"g", base:100, cal:93, prot:0.1, carb:23,  fat:0,   servingSize:150, servingLabel:"1 cup cooked" },
  "glass noodles dry":            { name:"Glass Noodles / Mung Bean Noodles (dry)", category:"Pasta & Noodles", unit:"g", base:100, cal:351, prot:0.2, carb:87, fat:0, servingSize:50, servingLabel:"2 oz dry" },
  "kelp noodles":                 { name:"Kelp Noodles (raw, low-cal)",        category:"Pasta & Noodles", unit:"g", base:100, cal:6,   prot:0,   carb:1,   fat:0,   servingSize:113, servingLabel:"¼ pack" },
  "shirataki konjac cooked":      { name:"Shirataki / Konjac Noodles",         category:"Pasta & Noodles", unit:"g", base:100, cal:9,   prot:0.2, carb:2,   fat:0.1, servingSize:200, servingLabel:"1 serving (drained)" },

  /* ── Indian Noodles ────────────────────────────────── */
  "semiya vermicelli cooked":     { name:"Semiya / Wheat Vermicelli (cooked)", category:"Pasta & Noodles", unit:"g", base:100, cal:148, prot:4.5, carb:30,  fat:0.9, servingSize:180, servingLabel:"1 cup cooked" },
  "semiya dry":                   { name:"Semiya / Wheat Vermicelli (dry)",    category:"Pasta & Noodles", unit:"g", base:100, cal:371, prot:13,  carb:75,  fat:1.5, servingSize:55,  servingLabel:"2 oz dry" },
  "hakka noodles cooked":         { name:"Hakka Noodles (Indo-Chinese, cooked)", category:"Pasta & Noodles", unit:"g", base:100, cal:150, prot:5.5, carb:29, fat:1.5, servingSize:200, servingLabel:"1 plate" },
  "maggi noodles plain":          { name:"Maggi 2-Minute Noodles (masala)",    category:"Pasta & Noodles", unit:"g", base:100, cal:436, prot:11,  carb:60,  fat:17,  servingSize:70,  servingLabel:"1 packet dry" },
  "rice noodles appam style":     { name:"Idiyappam / Rice String Hoppers",    category:"Pasta & Noodles", unit:"g", base:100, cal:155, prot:3,   carb:34,  fat:0.5, servingSize:70,  servingLabel:"1 piece",   countable:{ unitName:"piece", gramsEach:70  } },
  "aloo sev bhujia":              { name:"Sev / Bhujia (fried chickpea noodle)", category:"Pasta & Noodles", unit:"g", base:100, cal:545, prot:12, carb:56,  fat:31,  servingSize:15,  servingLabel:"1 handful" },

  /* ── Pasta Dishes ──────────────────────────────────── */
  "pasta bolognese":              { name:"Spaghetti Bolognese",                category:"Pasta & Noodles", unit:"g", base:100, cal:135, prot:8,   carb:16,  fat:4.5, servingSize:400, servingLabel:"1 plate" },
  "pasta carbonara":              { name:"Pasta Carbonara",                    category:"Pasta & Noodles", unit:"g", base:100, cal:220, prot:10,  carb:25,  fat:9,   servingSize:300, servingLabel:"1 plate" },
  "pasta pesto":                  { name:"Pasta with Basil Pesto",             category:"Pasta & Noodles", unit:"g", base:100, cal:225, prot:7,   carb:30,  fat:9,   servingSize:250, servingLabel:"1 plate" },
  "pasta arrabiata":              { name:"Pasta Arrabiata (tomato + chilli)",  category:"Pasta & Noodles", unit:"g", base:100, cal:155, prot:5.5, carb:28,  fat:3,   servingSize:300, servingLabel:"1 plate" },
  "pasta aglio olio":             { name:"Pasta Aglio e Olio",                 category:"Pasta & Noodles", unit:"g", base:100, cal:210, prot:5.5, carb:30,  fat:8.5, servingSize:250, servingLabel:"1 plate" },
  "mac and cheese homemade":      { name:"Mac and Cheese (homemade)",          category:"Pasta & Noodles", unit:"g", base:100, cal:195, prot:9,   carb:24,  fat:7,   servingSize:250, servingLabel:"1 cup" },
  "mac and cheese boxed":         { name:"Mac and Cheese (boxed, prepared)",   category:"Pasta & Noodles", unit:"g", base:100, cal:175, prot:6.5, carb:26,  fat:5.5, servingSize:250, servingLabel:"1 cup" },
  "lasagna meat baked":           { name:"Meat Lasagna (baked)",               category:"Pasta & Noodles", unit:"g", base:100, cal:195, prot:11,  carb:18,  fat:8.5, servingSize:250, servingLabel:"1 piece", countable:{ unitName:"piece", gramsEach:250 } },
  "lasagna vegetable":            { name:"Vegetable Lasagna (baked)",          category:"Pasta & Noodles", unit:"g", base:100, cal:155, prot:7.5, carb:18,  fat:6,   servingSize:250, servingLabel:"1 piece", countable:{ unitName:"piece", gramsEach:250 } },
  "pasta bake":                   { name:"Pasta Bake (cheesy, baked)",         category:"Pasta & Noodles", unit:"g", base:100, cal:180, prot:8.5, carb:22,  fat:6.5, servingSize:250, servingLabel:"1 serving" },
  "canned pasta spaghetti hoops": { name:"Canned Pasta / Spaghetti Hoops",     category:"Pasta & Noodles", unit:"g", base:100, cal:62,  prot:1.9, carb:12,  fat:0.5, servingSize:200, servingLabel:"½ can" },

  /* ── Asian Noodle Dishes ───────────────────────────── */
  "pad thai dish":                { name:"Pad Thai (with shrimp/tofu)",        category:"Pasta & Noodles", unit:"g", base:100, cal:145, prot:8,   carb:18,  fat:4.5, servingSize:350, servingLabel:"1 plate" },
  "pad see ew":                   { name:"Pad See Ew (thick rice noodles)",    category:"Pasta & Noodles", unit:"g", base:100, cal:155, prot:8,   carb:22,  fat:4.5, servingSize:300, servingLabel:"1 plate" },
  "drunken noodles pad kee mao":  { name:"Drunken Noodles / Pad Kee Mao",     category:"Pasta & Noodles", unit:"g", base:100, cal:160, prot:7,   carb:23,  fat:5,   servingSize:300, servingLabel:"1 plate" },
  "pho beef noodle":              { name:"Beef Pho (noodle soup)",             category:"Pasta & Noodles", unit:"g", base:100, cal:65,  prot:5,   carb:8,   fat:1,   servingSize:500, servingLabel:"1 large bowl" },
  "laksa noodle soup":            { name:"Laksa (coconut milk noodle soup)",   category:"Pasta & Noodles", unit:"g", base:100, cal:115, prot:5,   carb:12,  fat:5.5, servingSize:500, servingLabel:"1 bowl" },
  "chow mein stir fried":         { name:"Chow Mein (stir-fried noodles)",     category:"Pasta & Noodles", unit:"g", base:100, cal:172, prot:7,   carb:22,  fat:6,   servingSize:250, servingLabel:"1 plate" },
  "lo mein dish":                 { name:"Lo Mein (tossed noodles, restaurant)", category:"Pasta & Noodles", unit:"g", base:100, cal:165, prot:6, carb:25,  fat:5,   servingSize:300, servingLabel:"1 plate" },
  "ramen bowl":                   { name:"Ramen Bowl (broth + noodles + toppings)", category:"Pasta & Noodles", unit:"g", base:100, cal:95, prot:6, carb:12,  fat:2.5, servingSize:500, servingLabel:"1 bowl" },
  "noodles stir fried hakka":     { name:"Hakka Noodles (Indo-Chinese stir-fried)", category:"Pasta & Noodles", unit:"g", base:100, cal:178, prot:6, carb:27, fat:5.5, servingSize:250, servingLabel:"1 plate" },
  "maggi noodles cooked":         { name:"Maggi Noodles (cooked, as dish)",    category:"Pasta & Noodles", unit:"g", base:100, cal:155, prot:4.5, carb:22,  fat:6,   servingSize:200, servingLabel:"1 plate" },






 /* ══════════════════════════════════════════════════════
     🍕  FAST FOOD & STREET FOOD — COMPLETE SECTION
  ══════════════════════════════════════════════════════ */

  /* ── Pizza ─────────────────────────────────────────── */
  "pizza margherita slice":       { name:"Margherita Pizza (1 slice)",         category:"Fast Food", unit:"g", base:100, cal:248, prot:10,  carb:32,  fat:8.5, servingSize:107, servingLabel:"1 slice",   countable:{ unitName:"slice",    gramsEach:107 } },
  "pizza cheese slice":           { name:"Cheese Pizza (extra cheese, 1 slice)", category:"Fast Food", unit:"g", base:100, cal:266, prot:11, carb:33,  fat:10,  servingSize:107, servingLabel:"1 slice",   countable:{ unitName:"slice",    gramsEach:107 } },
  "pizza pepperoni slice":        { name:"Pepperoni Pizza (1 slice)",          category:"Fast Food", unit:"g", base:100, cal:298, prot:13,  carb:31,  fat:13,  servingSize:107, servingLabel:"1 slice",   countable:{ unitName:"slice",    gramsEach:107 } },
  "pizza veg slice":              { name:"Veg Supreme Pizza (1 slice)",        category:"Fast Food", unit:"g", base:100, cal:245, prot:9,   carb:34,  fat:8,   servingSize:107, servingLabel:"1 slice",   countable:{ unitName:"slice",    gramsEach:107 } },
  "pizza bbq chicken slice":      { name:"BBQ Chicken Pizza (1 slice)",        category:"Fast Food", unit:"g", base:100, cal:280, prot:14,  carb:32,  fat:11,  servingSize:107, servingLabel:"1 slice",   countable:{ unitName:"slice",    gramsEach:107 } },
  "pizza hawaiian slice":         { name:"Hawaiian Pizza / Pineapple + Ham (1 slice)", category:"Fast Food", unit:"g", base:100, cal:258, prot:11, carb:33, fat:9.5, servingSize:107, servingLabel:"1 slice",   countable:{ unitName:"slice",    gramsEach:107 } },
  "pizza paneer tikka slice":     { name:"Paneer Tikka Pizza (India, 1 slice)",category:"Fast Food", unit:"g", base:100, cal:270, prot:10,  carb:33,  fat:11,  servingSize:107, servingLabel:"1 slice",   countable:{ unitName:"slice",    gramsEach:107 } },
  "pizza personal whole":         { name:"Personal Pizza (6-inch, whole)",     category:"Fast Food", unit:"g", base:100, cal:255, prot:10,  carb:32,  fat:9.5, servingSize:300, servingLabel:"1 personal pizza" },
  "pizza stuffed crust slice":    { name:"Stuffed Crust Pizza (1 slice)",      category:"Fast Food", unit:"g", base:100, cal:290, prot:12,  carb:34,  fat:13,  servingSize:120, servingLabel:"1 slice",   countable:{ unitName:"slice",    gramsEach:120 } },
  "pizza thin crust slice":       { name:"Thin Crust Pizza (1 slice)",         category:"Fast Food", unit:"g", base:100, cal:235, prot:10,  carb:29,  fat:9,   servingSize:95,  servingLabel:"1 slice",   countable:{ unitName:"slice",    gramsEach:95  } },
  "pizza pan deep dish slice":    { name:"Deep Dish / Pan Pizza (1 slice)",    category:"Fast Food", unit:"g", base:100, cal:310, prot:12,  carb:35,  fat:15,  servingSize:130, servingLabel:"1 slice",   countable:{ unitName:"slice",    gramsEach:130 } },
  "pizza white slice":            { name:"White Pizza (no tomato, 1 slice)",   category:"Fast Food", unit:"g", base:100, cal:270, prot:11,  carb:30,  fat:12,  servingSize:107, servingLabel:"1 slice",   countable:{ unitName:"slice",    gramsEach:107 } },

  /* ── Burgers ───────────────────────────────────────── */
  "burger beef plain":            { name:"Beef Burger (plain, no extras)",     category:"Fast Food", unit:"g", base:100, cal:295, prot:15,  carb:24,  fat:14,  servingSize:200, servingLabel:"1 burger",  countable:{ unitName:"burger",   gramsEach:200 } },
  "burger beef double":           { name:"Beef Double Burger / Double Patty",  category:"Fast Food", unit:"g", base:100, cal:310, prot:18,  carb:23,  fat:17,  servingSize:280, servingLabel:"1 burger",  countable:{ unitName:"burger",   gramsEach:280 } },
  "burger cheeseburger":          { name:"Cheeseburger",                       category:"Fast Food", unit:"g", base:100, cal:305, prot:16,  carb:25,  fat:16,  servingSize:220, servingLabel:"1 burger",  countable:{ unitName:"burger",   gramsEach:220 } },
  "burger chicken grilled":       { name:"Grilled Chicken Burger",             category:"Fast Food", unit:"g", base:100, cal:235, prot:14,  carb:26,  fat:8,   servingSize:200, servingLabel:"1 burger",  countable:{ unitName:"burger",   gramsEach:200 } },
  "burger chicken crispy":        { name:"Crispy Fried Chicken Burger",        category:"Fast Food", unit:"g", base:100, cal:295, prot:15,  carb:32,  fat:12,  servingSize:210, servingLabel:"1 burger",  countable:{ unitName:"burger",   gramsEach:210 } },
  "burger veggie":                { name:"Veggie Burger / Bean Patty",         category:"Fast Food", unit:"g", base:100, cal:218, prot:10,  carb:30,  fat:6.5, servingSize:170, servingLabel:"1 burger",  countable:{ unitName:"burger",   gramsEach:170 } },
  "burger veg aloo tikki":        { name:"Aloo Tikki Burger (McAloo, India)",  category:"Fast Food", unit:"g", base:100, cal:260, prot:6,   carb:38,  fat:10,  servingSize:150, servingLabel:"1 burger",  countable:{ unitName:"burger",   gramsEach:150 } },
  "burger mcspicy":               { name:"McSpicy / Spicy Chicken Burger",     category:"Fast Food", unit:"g", base:100, cal:310, prot:17,  carb:31,  fat:14,  servingSize:220, servingLabel:"1 burger",  countable:{ unitName:"burger",   gramsEach:220 } },
  "burger fish fillet":           { name:"Fish Fillet Burger",                 category:"Fast Food", unit:"g", base:100, cal:265, prot:14,  carb:29,  fat:11,  servingSize:200, servingLabel:"1 burger",  countable:{ unitName:"burger",   gramsEach:200 } },
  "burger baconator":             { name:"Bacon Cheese Burger / Baconator",    category:"Fast Food", unit:"g", base:100, cal:355, prot:22,  carb:25,  fat:20,  servingSize:300, servingLabel:"1 burger",  countable:{ unitName:"burger",   gramsEach:300 } },
  "burger slider mini":           { name:"Slider / Mini Burger",               category:"Fast Food", unit:"g", base:100, cal:285, prot:14,  carb:26,  fat:14,  servingSize:80,  servingLabel:"1 slider",  countable:{ unitName:"slider",   gramsEach:80  } },

  /* ── Fries & Potato Sides ──────────────────────────── */
  "french fries small":           { name:"French Fries (small serving)",       category:"Fast Food", unit:"g", base:100, cal:312, prot:3.4, carb:41,  fat:15,  servingSize:71,  servingLabel:"small" },
  "french fries medium":          { name:"French Fries (medium serving)",      category:"Fast Food", unit:"g", base:100, cal:312, prot:3.4, carb:41,  fat:15,  servingSize:117, servingLabel:"medium" },
  "french fries large":           { name:"French Fries (large serving)",       category:"Fast Food", unit:"g", base:100, cal:312, prot:3.4, carb:41,  fat:15,  servingSize:154, servingLabel:"large" },
  "curly fries":                  { name:"Curly Fries (seasoned)",             category:"Fast Food", unit:"g", base:100, cal:360, prot:4,   carb:44,  fat:18,  servingSize:100, servingLabel:"1 serving" },
  "steak fries thick cut":        { name:"Steak Fries / Thick-Cut Chips",      category:"Fast Food", unit:"g", base:100, cal:285, prot:3.5, carb:40,  fat:13,  servingSize:140, servingLabel:"1 serving" },
  "waffle fries":                 { name:"Waffle Fries",                       category:"Fast Food", unit:"g", base:100, cal:340, prot:3.5, carb:42,  fat:17,  servingSize:110, servingLabel:"1 serving" },
  "sweet potato fries":           { name:"Sweet Potato Fries (oven/fried)",    category:"Fast Food", unit:"g", base:100, cal:295, prot:2.5, carb:43,  fat:13,  servingSize:100, servingLabel:"1 serving" },
  "onion rings fried":            { name:"Onion Rings (fried, battered)",      category:"Fast Food", unit:"g", base:100, cal:411, prot:5,   carb:44,  fat:24,  servingSize:70,  servingLabel:"~8 rings",  countable:{ unitName:"ring",     gramsEach:9   } },
  "potato wedges":                { name:"Potato Wedges (seasoned, baked/fried)", category:"Fast Food", unit:"g", base:100, cal:265, prot:3.5, carb:38, fat:11,  servingSize:140, servingLabel:"1 serving" },
  "hash brown patty":             { name:"Hash Brown Patty",                   category:"Fast Food", unit:"g", base:100, cal:273, prot:2.6, carb:31,  fat:15,  servingSize:55,  servingLabel:"1 patty",   countable:{ unitName:"patty",    gramsEach:55  } },
  "tater tots":                   { name:"Tater Tots",                         category:"Fast Food", unit:"g", base:100, cal:290, prot:3,   carb:39,  fat:14,  servingSize:84,  servingLabel:"9 pieces",  countable:{ unitName:"tot",      gramsEach:9   } },
  "loaded fries":                 { name:"Loaded Fries (cheese + bacon + sauce)", category:"Fast Food", unit:"g", base:100, cal:380, prot:8, carb:38,  fat:21,  servingSize:200, servingLabel:"1 serving" },

  /* ── Fried Chicken ─────────────────────────────────── */
  "fried chicken piece":          { name:"Fried Chicken Piece (KFC-style)",    category:"Fast Food", unit:"g", base:100, cal:320, prot:21,  carb:17,  fat:20,  servingSize:150, servingLabel:"1 piece",   countable:{ unitName:"piece",    gramsEach:150 } },
  "fried chicken strips":         { name:"Chicken Strips / Tenders (fried)",   category:"Fast Food", unit:"g", base:100, cal:285, prot:18,  carb:16,  fat:15,  servingSize:55,  servingLabel:"1 strip",   countable:{ unitName:"strip",    gramsEach:55  } },
  "chicken nuggets fast food":    { name:"Chicken Nuggets (fast food)",        category:"Fast Food", unit:"g", base:100, cal:297, prot:15,  carb:19,  fat:18,  servingSize:20,  servingLabel:"1 nugget",  countable:{ unitName:"nugget",   gramsEach:20  } },
  "chicken wings buffalo":        { name:"Buffalo Chicken Wings",              category:"Fast Food", unit:"g", base:100, cal:310, prot:25,  carb:3,   fat:21,  servingSize:45,  servingLabel:"1 wing",    countable:{ unitName:"wing",     gramsEach:45  } },
  "popcorn chicken":              { name:"Popcorn Chicken (bite-sized)",       category:"Fast Food", unit:"g", base:100, cal:305, prot:16,  carb:18,  fat:18,  servingSize:100, servingLabel:"1 serving" },
  "chicken sandwich crispy":      { name:"Crispy Chicken Sandwich",            category:"Fast Food", unit:"g", base:100, cal:270, prot:14,  carb:28,  fat:11,  servingSize:220, servingLabel:"1 sandwich",countable:{ unitName:"sandwich", gramsEach:220 } },

  /* ── Hot Dogs & Sandwiches ─────────────────────────── */
  "hot dog with bun":             { name:"Hot Dog (frankfurter in bun)",       category:"Fast Food", unit:"g", base:100, cal:250, prot:9,   carb:25,  fat:13,  servingSize:100, servingLabel:"1 hot dog", countable:{ unitName:"hot dog",  gramsEach:100 } },
  "hot dog chilli cheese":        { name:"Chilli Cheese Hot Dog",              category:"Fast Food", unit:"g", base:100, cal:295, prot:11,  carb:26,  fat:17,  servingSize:130, servingLabel:"1 hot dog", countable:{ unitName:"hot dog",  gramsEach:130 } },
  "corn dog":                     { name:"Corn Dog (fried batter dog)",        category:"Fast Food", unit:"g", base:100, cal:280, prot:9,   carb:33,  fat:12,  servingSize:90,  servingLabel:"1 corn dog",countable:{ unitName:"corn dog", gramsEach:90  } },
  "sub sandwich turkey":          { name:"Turkey Sub / Sandwich (6-inch)",     category:"Fast Food", unit:"g", base:100, cal:190, prot:12,  carb:24,  fat:5,   servingSize:200, servingLabel:"6-inch sub" },
  "sub sandwich bmt":             { name:"BMT / Italian Sub (6-inch)",         category:"Fast Food", unit:"g", base:100, cal:240, prot:12,  carb:25,  fat:9.5, servingSize:200, servingLabel:"6-inch sub" },
  "club sandwich":                { name:"Club Sandwich (triple decker)",      category:"Fast Food", unit:"g", base:100, cal:230, prot:12,  carb:23,  fat:10,  servingSize:250, servingLabel:"1 sandwich",countable:{ unitName:"sandwich", gramsEach:250 } },
  "grilled cheese sandwich":      { name:"Grilled Cheese Sandwich",            category:"Fast Food", unit:"g", base:100, cal:310, prot:11,  carb:31,  fat:17,  servingSize:120, servingLabel:"1 sandwich",countable:{ unitName:"sandwich", gramsEach:120 } },
  "philly cheesesteak":           { name:"Philly Cheesesteak",                 category:"Fast Food", unit:"g", base:100, cal:284, prot:17,  carb:25,  fat:12,  servingSize:250, servingLabel:"1 sandwich",countable:{ unitName:"sandwich", gramsEach:250 } },
  "blt sandwich":                 { name:"BLT Sandwich (bacon, lettuce, tomato)", category:"Fast Food", unit:"g", base:100, cal:280, prot:12, carb:25,  fat:14,  servingSize:180, servingLabel:"1 sandwich",countable:{ unitName:"sandwich", gramsEach:180 } },

  /* ── Wraps & Burritos ──────────────────────────────── */
  "burrito chicken":              { name:"Chicken Burrito",                    category:"Fast Food", unit:"g", base:100, cal:175, prot:10,  carb:22,  fat:5,   servingSize:300, servingLabel:"1 burrito",  countable:{ unitName:"burrito",  gramsEach:300 } },
  "burrito beef":                 { name:"Beef Burrito",                       category:"Fast Food", unit:"g", base:100, cal:195, prot:11,  carb:22,  fat:8,   servingSize:300, servingLabel:"1 burrito",  countable:{ unitName:"burrito",  gramsEach:300 } },
  "burrito bean cheese":          { name:"Bean & Cheese Burrito",              category:"Fast Food", unit:"g", base:100, cal:165, prot:7.5, carb:24,  fat:5,   servingSize:250, servingLabel:"1 burrito",  countable:{ unitName:"burrito",  gramsEach:250 } },
  "burrito bowl":                 { name:"Burrito Bowl (Chipotle-style)",      category:"Fast Food", unit:"g", base:100, cal:145, prot:8.5, carb:18,  fat:4.5, servingSize:450, servingLabel:"1 bowl" },
  "quesadilla chicken":           { name:"Chicken Quesadilla",                 category:"Fast Food", unit:"g", base:100, cal:285, prot:15,  carb:25,  fat:13,  servingSize:150, servingLabel:"1 quesadilla", countable:{ unitName:"quesadilla", gramsEach:150 } },
  "quesadilla cheese":            { name:"Cheese Quesadilla",                  category:"Fast Food", unit:"g", base:100, cal:350, prot:13,  carb:29,  fat:21,  servingSize:120, servingLabel:"1 quesadilla", countable:{ unitName:"quesadilla", gramsEach:120 } },
  "taco beef hard shell":         { name:"Beef Taco (hard shell)",             category:"Fast Food", unit:"g", base:100, cal:228, prot:11,  carb:21,  fat:11,  servingSize:100, servingLabel:"1 taco",    countable:{ unitName:"taco",     gramsEach:100 } },
  "taco chicken soft":            { name:"Chicken Taco (soft shell)",          category:"Fast Food", unit:"g", base:100, cal:205, prot:12,  carb:23,  fat:7,   servingSize:110, servingLabel:"1 taco",    countable:{ unitName:"taco",     gramsEach:110 } },
  "nachos with cheese":           { name:"Nachos with Cheese Sauce",           category:"Fast Food", unit:"g", base:100, cal:346, prot:7,   carb:37,  fat:19,  servingSize:100, servingLabel:"1 serving" },
  "nachos loaded":                { name:"Nachos (loaded: cheese, jalapeño, sour cream)", category:"Fast Food", unit:"g", base:100, cal:380, prot:8, carb:38, fat:22, servingSize:150, servingLabel:"1 serving" },

  /* ── Indian Street Food ────────────────────────────── */
  "samosa fried":                 { name:"Samosa (fried, potato & pea)",       category:"Indian Street Food", unit:"g", base:100, cal:263, prot:5, carb:30, fat:14, servingSize:50, servingLabel:"1 samosa", countable:{ unitName:"samosa", gramsEach:50  } },
  "samosa baked":                 { name:"Samosa (baked, healthier)",          category:"Indian Street Food", unit:"g", base:100, cal:195, prot:5, carb:30, fat:7,  servingSize:50, servingLabel:"1 samosa", countable:{ unitName:"samosa", gramsEach:50  } },
  "vada pav":                     { name:"Vada Pav",                           category:"Indian Street Food", unit:"g", base:100, cal:286, prot:6, carb:42, fat:11, servingSize:130, servingLabel:"1 vada pav", countable:{ unitName:"vada pav", gramsEach:130 } },
  "pav bhaji":                    { name:"Pav Bhaji",                          category:"Indian Street Food", unit:"g", base:100, cal:190, prot:5, carb:28, fat:7,  servingSize:250, servingLabel:"1 plate" },
  "pani puri":                    { name:"Pani Puri / Golgappa",               category:"Indian Street Food", unit:"g", base:100, cal:365, prot:6, carb:55, fat:13, servingSize:13,  servingLabel:"1 puri",   countable:{ unitName:"puri",    gramsEach:13  } },
  "bhel puri":                    { name:"Bhel Puri",                          category:"Indian Street Food", unit:"g", base:100, cal:166, prot:4, carb:29, fat:4.5, servingSize:120, servingLabel:"1 serving" },
  "sev puri":                     { name:"Sev Puri",                           category:"Indian Street Food", unit:"g", base:100, cal:310, prot:6, carb:45, fat:12, servingSize:100, servingLabel:"1 serving" },
  "dahi puri":                    { name:"Dahi Puri",                          category:"Indian Street Food", unit:"g", base:100, cal:175, prot:5, carb:28, fat:5,  servingSize:120, servingLabel:"1 serving", countable:{ unitName:"puri",    gramsEach:20  } },
  "aloo tikki chaat":             { name:"Aloo Tikki Chaat",                   category:"Indian Street Food", unit:"g", base:100, cal:190, prot:4.5, carb:28, fat:7, servingSize:150, servingLabel:"1 plate" },
  "chole bhature":                { name:"Chole Bhature",                      category:"Indian Street Food", unit:"g", base:100, cal:280, prot:8, carb:37, fat:12, servingSize:300, servingLabel:"2 bhaturas + chole", countable:{ unitName:"bhatura", gramsEach:80  } },
  "ragda pattice":                { name:"Ragda Pattice",                      category:"Indian Street Food", unit:"g", base:100, cal:190, prot:7, carb:30, fat:5,  servingSize:250, servingLabel:"1 plate" },
  "dabeli":                       { name:"Dabeli",                             category:"Indian Street Food", unit:"g", base:100, cal:210, prot:5, carb:32, fat:7.5, servingSize:120, servingLabel:"1 dabeli", countable:{ unitName:"dabeli",  gramsEach:120 } },
  "kathi roll chicken":           { name:"Kathi Roll (chicken)",               category:"Indian Street Food", unit:"g", base:100, cal:235, prot:12, carb:27, fat:9, servingSize:150, servingLabel:"1 roll",   countable:{ unitName:"roll",    gramsEach:150 } },
  "kathi roll egg":               { name:"Kathi Roll (egg)",                   category:"Indian Street Food", unit:"g", base:100, cal:220, prot:9, carb:27, fat:9,  servingSize:130, servingLabel:"1 roll",   countable:{ unitName:"roll",    gramsEach:130 } },
  "frankie veg":                  { name:"Veg Frankie",                        category:"Indian Street Food", unit:"g", base:100, cal:200, prot:5, carb:31, fat:7,  servingSize:130, servingLabel:"1 roll",   countable:{ unitName:"roll",    gramsEach:130 } },
  "pakora bhajiya":               { name:"Mixed Pakora / Bhajiya",             category:"Indian Street Food", unit:"g", base:100, cal:296, prot:7, carb:32, fat:15, servingSize:20,  servingLabel:"1 piece",  countable:{ unitName:"pakora",  gramsEach:20  } },
  "momos veg steamed":            { name:"Veg Momos (steamed)",                category:"Indian Street Food", unit:"g", base:100, cal:155, prot:5, carb:26, fat:3,  servingSize:40,  servingLabel:"1 momo",   countable:{ unitName:"momo",    gramsEach:40  } },
  "momos chicken fried":          { name:"Chicken Momos (fried)",              category:"Indian Street Food", unit:"g", base:100, cal:265, prot:12, carb:22, fat:14, servingSize:40, servingLabel:"1 momo",   countable:{ unitName:"momo",    gramsEach:40  } },
  "bread omelette":               { name:"Bread Omelette (Mumbai street)",     category:"Indian Street Food", unit:"g", base:100, cal:235, prot:9, carb:22, fat:13, servingSize:150, servingLabel:"1 serving" },
  "masala corn":                  { name:"Masala Corn (boiled corn + butter)",  category:"Indian Street Food", unit:"g", base:100, cal:130, prot:3.5, carb:25, fat:3, servingSize:100, servingLabel:"1 cup" },
  "chaat papdi":                  { name:"Papdi Chaat",                        category:"Indian Street Food", unit:"g", base:100, cal:280, prot:5.5, carb:38, fat:11, servingSize:100, servingLabel:"1 serving" },
  "misal pav":                    { name:"Misal Pav",                          category:"Indian Street Food", unit:"g", base:100, cal:180, prot:7, carb:28, fat:5,  servingSize:250, servingLabel:"1 plate" },
  "popcorn masala": { name:"Masala Popcorn (Indian style)", category:"Indian Street Food", unit:"g", base:100, cal:430, prot:8, carb:68, fat:16, servingSize:28, servingLabel:"1 oz" },

  /* ── Chinese & Indo-Chinese ────────────────────────── */
  "fried rice chinese":           { name:"Chinese Fried Rice",                 category:"Chinese", unit:"g", base:100, cal:163, prot:4.6, carb:27, fat:4.4, servingSize:250, servingLabel:"1 bowl" },
  "veg fried rice indo chinese":  { name:"Veg Fried Rice (Indo-Chinese)",      category:"Chinese", unit:"g", base:100, cal:155, prot:4, carb:27, fat:4,   servingSize:250, servingLabel:"1 bowl" },
  "egg fried rice":               { name:"Egg Fried Rice",                     category:"Chinese", unit:"g", base:100, cal:170, prot:5.5, carb:27, fat:5, servingSize:250, servingLabel:"1 bowl" },
  "noodles stir fry":             { name:"Stir-Fried Noodles (veg)",           category:"Chinese", unit:"g", base:100, cal:148, prot:4.5, carb:24, fat:4, servingSize:250, servingLabel:"1 plate" },
  "spring roll fried":            { name:"Spring Roll (fried)",                category:"Chinese", unit:"g", base:100, cal:276, prot:6, carb:35, fat:12, servingSize:70, servingLabel:"1 roll",   countable:{ unitName:"roll",    gramsEach:70  } },
  "spring roll fresh":            { name:"Fresh / Vietnamese Spring Roll",     category:"Chinese", unit:"g", base:100, cal:130, prot:5, carb:20, fat:3, servingSize:75, servingLabel:"1 roll",    countable:{ unitName:"roll",    gramsEach:75  } },
  "dim sum dumpling steamed":     { name:"Dim Sum / Steamed Dumpling (har gow)", category:"Chinese", unit:"g", base:100, cal:195, prot:9, carb:24, fat:6.5, servingSize:40, servingLabel:"1 piece", countable:{ unitName:"dumpling", gramsEach:40  } },
  "siu mai pork dumpling":        { name:"Siu Mai (pork & shrimp dumpling)",   category:"Chinese", unit:"g", base:100, cal:210, prot:12, carb:20, fat:8.5, servingSize:30, servingLabel:"1 piece",  countable:{ unitName:"dumpling", gramsEach:30  } },
  "egg roll":                     { name:"Egg Roll (deep fried, US-style)",    category:"Chinese", unit:"g", base:100, cal:265, prot:7, carb:32, fat:12, servingSize:85, servingLabel:"1 roll",    countable:{ unitName:"roll",    gramsEach:85  } },
  "chow mein stir fried":         { name:"Chow Mein",                          category:"Chinese", unit:"g", base:100, cal:172, prot:7, carb:22, fat:6, servingSize:250, servingLabel:"1 plate" },
  "kung pao chicken":             { name:"Kung Pao Chicken",                   category:"Chinese", unit:"g", base:100, cal:175, prot:14, carb:11, fat:8, servingSize:250, servingLabel:"1 plate" },
  "sweet sour chicken":           { name:"Sweet & Sour Chicken",               category:"Chinese", unit:"g", base:100, cal:195, prot:12, carb:24, fat:5.5, servingSize:250, servingLabel:"1 plate" },
  "szechuan chicken":             { name:"Szechuan / Sichuan Chicken",         category:"Chinese", unit:"g", base:100, cal:180, prot:15, carb:9, fat:10, servingSize:250, servingLabel:"1 plate" },
  "manchurian veg":               { name:"Veg Manchurian (Indo-Chinese)",      category:"Chinese", unit:"g", base:100, cal:165, prot:4, carb:22, fat:7, servingSize:200, servingLabel:"1 plate" },
  "manchurian chicken":           { name:"Chicken Manchurian",                 category:"Chinese", unit:"g", base:100, cal:200, prot:16, carb:16, fat:8, servingSize:200, servingLabel:"1 plate" },
  "peking duck pancake":          { name:"Peking Duck (with pancake & hoisin)",category:"Chinese", unit:"g", base:100, cal:290, prot:16, carb:20, fat:16, servingSize:80, servingLabel:"1 wrap",   countable:{ unitName:"pancake", gramsEach:80  } },

  /* ── Middle Eastern & Mediterranean ───────────────── */
  "shawarma chicken wrap":        { name:"Chicken Shawarma Wrap",              category:"Middle Eastern", unit:"g", base:100, cal:225, prot:14, carb:22, fat:8, servingSize:280, servingLabel:"1 wrap", countable:{ unitName:"wrap",    gramsEach:280 } },
  "shawarma lamb wrap":           { name:"Lamb Shawarma Wrap",                 category:"Middle Eastern", unit:"g", base:100, cal:245, prot:14, carb:21, fat:11, servingSize:280, servingLabel:"1 wrap", countable:{ unitName:"wrap",    gramsEach:280 } },
  "doner kebab pita":             { name:"Döner Kebab (in pita)",              category:"Middle Eastern", unit:"g", base:100, cal:242, prot:14, carb:22, fat:10, servingSize:280, servingLabel:"1 kebab",countable:{ unitName:"kebab",  gramsEach:280 } },
  "falafel wrap":                 { name:"Falafel Wrap",                       category:"Middle Eastern", unit:"g", base:100, cal:265, prot:10, carb:35, fat:10, servingSize:250, servingLabel:"1 wrap",  countable:{ unitName:"wrap",    gramsEach:250 } },
  "falafel ball":                 { name:"Falafel Ball (fried)",               category:"Middle Eastern", unit:"g", base:100, cal:333, prot:13, carb:32, fat:18, servingSize:25, servingLabel:"1 ball",   countable:{ unitName:"ball",    gramsEach:25  } },
  "gyros pita":                   { name:"Gyros (in pita, with tzatziki)",     category:"Middle Eastern", unit:"g", base:100, cal:215, prot:14, carb:20, fat:8, servingSize:250, servingLabel:"1 wrap",   countable:{ unitName:"wrap",    gramsEach:250 } },
  "hummus pita plate":            { name:"Hummus with Pita (mezze plate)",     category:"Middle Eastern", unit:"g", base:100, cal:228, prot:8, carb:31, fat:9, servingSize:120, servingLabel:"1 serving" },
  "kebab grilled plate":          { name:"Grilled Kebab Plate (with rice)",    category:"Middle Eastern", unit:"g", base:100, cal:195, prot:14, carb:19, fat:7, servingSize:350, servingLabel:"1 plate" },
  "kofta grilled":                { name:"Kofta (grilled, skewered)",          category:"Middle Eastern", unit:"g", base:100, cal:250, prot:17, carb:5, fat:18, servingSize:60, servingLabel:"1 kofta",   countable:{ unitName:"kofta",   gramsEach:60  } },

  /* ── Japanese Fast Food ────────────────────────────── */
  "sushi roll 6 pieces":          { name:"Sushi Roll (6 pieces)",              category:"Japanese", unit:"g", base:100, cal:143, prot:5, carb:28, fat:1.5, servingSize:180, servingLabel:"6 pieces", countable:{ unitName:"piece",    gramsEach:30  } },
  "sushi nigiri":                 { name:"Nigiri Sushi (1 piece)",             category:"Japanese", unit:"g", base:100, cal:145, prot:6, carb:22, fat:2.5, servingSize:30, servingLabel:"1 piece",   countable:{ unitName:"piece",    gramsEach:30  } },
  "onigiri rice ball":            { name:"Onigiri / Rice Ball",                category:"Japanese", unit:"g", base:100, cal:157, prot:3.9, carb:34, fat:0.5, servingSize:100, servingLabel:"1 rice ball", countable:{ unitName:"onigiri", gramsEach:100 } },
  "tempura prawn":                { name:"Prawn Tempura",                      category:"Japanese", unit:"g", base:100, cal:213, prot:11, carb:21, fat:9, servingSize:20, servingLabel:"1 piece",    countable:{ unitName:"piece",    gramsEach:20  } },
  "katsu chicken":                { name:"Chicken Katsu (breaded, fried)",     category:"Japanese", unit:"g", base:100, cal:250, prot:19, carb:16, fat:11, servingSize:150, servingLabel:"1 serving" },
  "katsu curry":                  { name:"Chicken Katsu Curry (with rice)",    category:"Japanese", unit:"g", base:100, cal:165, prot:9, carb:22, fat:5, servingSize:400, servingLabel:"1 plate" },
  "takoyaki":                     { name:"Takoyaki (octopus balls)",           category:"Japanese", unit:"g", base:100, cal:215, prot:8, carb:26, fat:8.5, servingSize:20, servingLabel:"1 ball",    countable:{ unitName:"ball",     gramsEach:20  } },
  "mochi":                        { name:"Mochi (rice cake, sweet filled)",    category:"Japanese", unit:"g", base:100, cal:235, prot:3.6, carb:52, fat:1.5, servingSize:45, servingLabel:"1 piece",  countable:{ unitName:"piece",    gramsEach:45  } },

  /* ── Korean Street Food ────────────────────────────── */
  "tteokbokki":                   { name:"Tteokbokki (spicy rice cakes)",      category:"Korean", unit:"g", base:100, cal:155, prot:3.5, carb:30, fat:3, servingSize:200, servingLabel:"1 serving" },
  "korean fried chicken":         { name:"Korean Fried Chicken (double-fried)",category:"Korean", unit:"g", base:100, cal:330, prot:21, carb:19, fat:19, servingSize:150, servingLabel:"1 serving" },
  "bibimbap":                     { name:"Bibimbap (rice + veg + egg + gochujang)", category:"Korean", unit:"g", base:100, cal:124, prot:5.5, carb:19, fat:3, servingSize:450, servingLabel:"1 bowl" },
  "kimchi jeon":                  { name:"Kimchi Pancake / Kimchi Jeon",       category:"Korean", unit:"g", base:100, cal:200, prot:6.5, carb:26, fat:8, servingSize:100, servingLabel:"1 serving", countable:{ unitName:"pancake", gramsEach:60  } },

  /* ── Thai Street Food ──────────────────────────────── */
  "pad thai":                     { name:"Pad Thai",                           category:"Thai", unit:"g", base:100, cal:145, prot:8, carb:18, fat:4.5, servingSize:350, servingLabel:"1 plate" },
  "pad see ew thai":              { name:"Pad See Ew",                         category:"Thai", unit:"g", base:100, cal:155, prot:8, carb:22, fat:4.5, servingSize:300, servingLabel:"1 plate" },
  "green curry chicken":          { name:"Thai Green Curry (chicken)",         category:"Thai", unit:"g", base:100, cal:135, prot:10, carb:7, fat:8, servingSize:250, servingLabel:"1 serving" },
  "red curry chicken":            { name:"Thai Red Curry (chicken)",           category:"Thai", unit:"g", base:100, cal:140, prot:10, carb:7, fat:9, servingSize:250, servingLabel:"1 serving" },
  "massaman curry":               { name:"Massaman Curry (beef/chicken)",      category:"Thai", unit:"g", base:100, cal:165, prot:10, carb:12, fat:9, servingSize:250, servingLabel:"1 serving" },
  "tom yum soup":                 { name:"Tom Yum Soup",                       category:"Thai", unit:"ml", base:100, cal:33, prot:2.5, carb:3.5, fat:1, servingSize:240, servingLabel:"1 cup" },
  "mango sticky rice":            { name:"Mango Sticky Rice (khao niao mamuang)", category:"Thai", unit:"g", base:100, cal:175, prot:2.5, carb:37, fat:3, servingSize:200, servingLabel:"1 serving" },

  /* ── Vietnamese Street Food ────────────────────────── */
  "pho beef":                     { name:"Beef Pho (bun pho bo)",              category:"Vietnamese", unit:"g", base:100, cal:65, prot:5, carb:8, fat:1, servingSize:500, servingLabel:"1 large bowl" },
  "banh mi":                      { name:"Bánh Mì (Vietnamese sandwich)",      category:"Vietnamese", unit:"g", base:100, cal:245, prot:12, carb:31, fat:7.5, servingSize:200, servingLabel:"1 sandwich", countable:{ unitName:"sandwich", gramsEach:200 } },
  "goi cuon fresh rolls":         { name:"Gỏi Cuốn / Vietnamese Fresh Rolls", category:"Vietnamese", unit:"g", base:100, cal:100, prot:5, carb:14, fat:2, servingSize:75, servingLabel:"1 roll",    countable:{ unitName:"roll",    gramsEach:75  } },
  "bun cha":                      { name:"Bún Chả (grilled pork + noodles)",   category:"Vietnamese", unit:"g", base:100, cal:130, prot:8, carb:14, fat:4.5, servingSize:350, servingLabel:"1 serving" },

  /* ── Western Fast Food Sides & Extras ──────────────── */
  "mozzarella sticks fried":      { name:"Mozzarella Sticks (fried)",          category:"Fast Food", unit:"g", base:100, cal:325, prot:14, carb:26, fat:18, servingSize:45, servingLabel:"1 stick",    countable:{ unitName:"stick",    gramsEach:45  } },
  "mac bites":                    { name:"Mac Bites / Mac Snack Wrap",         category:"Fast Food", unit:"g", base:100, cal:290, prot:9, carb:30, fat:15, servingSize:80, servingLabel:"1 serving" },
  "apple pie fast food":          { name:"Apple Pie (fast food, fried/baked)", category:"Fast Food", unit:"g", base:100, cal:295, prot:2.5, carb:40, fat:14, servingSize:77, servingLabel:"1 pie",      countable:{ unitName:"pie",      gramsEach:77  } },
  "mcflurry":                     { name:"McFlurry / Soft Serve Mix (medium)", category:"Fast Food", unit:"g", base:100, cal:180, prot:4, carb:29, fat:5.5, servingSize:210, servingLabel:"1 medium" },
  "soft serve cone":              { name:"Soft Serve Ice Cream Cone",          category:"Fast Food", unit:"g", base:100, cal:230, prot:4, carb:35, fat:8.5, servingSize:90, servingLabel:"1 small cone", countable:{ unitName:"cone",     gramsEach:90  } },
  "chicken wrap fast food":       { name:"Chicken Wrap (fast food)",           category:"Fast Food", unit:"g", base:100, cal:248, prot:13, carb:28, fat:9, servingSize:190, servingLabel:"1 wrap",       countable:{ unitName:"wrap",     gramsEach:190 } },
  "fish chips portion":           { name:"Fish & Chips (1 portion)",           category:"Fast Food", unit:"g", base:100, cal:235, prot:10, carb:25, fat:11, servingSize:350, servingLabel:"1 portion" },
  "coleslaw fast food":           { name:"Coleslaw (fast food side)",          category:"Fast Food", unit:"g", base:100, cal:153, prot:1.5, carb:12, fat:11, servingSize:113, servingLabel:"½ cup" },
  "corn on cob fast food":        { name:"Corn on the Cob (fast food side)",   category:"Fast Food", unit:"g", base:100, cal:86, prot:3.2, carb:19, fat:1.2, servingSize:100, servingLabel:"1 cob",        countable:{ unitName:"cob",      gramsEach:100 } },
  "side salad fast food":         { name:"Side Salad (no dressing)",           category:"Fast Food", unit:"g", base:100, cal:20, prot:1.5, carb:3.5, fat:0.3, servingSize:113, servingLabel:"1 serving" },






/* ══════════════════════════════════════════════════════
     🍰  DESSERTS & SWEETS — COMPLETE SECTION
  ══════════════════════════════════════════════════════ */

  /* ── Indian Sweets — Milk-Based ────────────────────── */
  "gulab jamun":                  { name:"Gulab Jamun",                        category:"Indian Sweets", unit:"g", base:100, cal:387, prot:4,   carb:64,  fat:13,  servingSize:50,  servingLabel:"1 piece",   countable:{ unitName:"piece",   gramsEach:50  } },
  "gulab jamun dry rasogolla":    { name:"Gulab Jamun (dry / khoya-based)",    category:"Indian Sweets", unit:"g", base:100, cal:410, prot:5,   carb:62,  fat:15,  servingSize:50,  servingLabel:"1 piece",   countable:{ unitName:"piece",   gramsEach:50  } },
  "rasgulla":                     { name:"Rasgulla (Bengali)",                 category:"Indian Sweets", unit:"g", base:100, cal:186, prot:5,   carb:37,  fat:2,   servingSize:60,  servingLabel:"1 piece",   countable:{ unitName:"piece",   gramsEach:60  } },
  "ras malai":                    { name:"Ras Malai",                          category:"Indian Sweets", unit:"g", base:100, cal:185, prot:6,   carb:27,  fat:6,   servingSize:80,  servingLabel:"1 piece",   countable:{ unitName:"piece",   gramsEach:80  } },
  "cham cham":                    { name:"Cham Cham",                          category:"Indian Sweets", unit:"g", base:100, cal:260, prot:6,   carb:44,  fat:7,   servingSize:70,  servingLabel:"1 piece",   countable:{ unitName:"piece",   gramsEach:70  } },
  "sandesh":                      { name:"Sandesh (Bengali, fresh cheese)",    category:"Indian Sweets", unit:"g", base:100, cal:285, prot:10,  carb:37,  fat:11,  servingSize:40,  servingLabel:"1 piece",   countable:{ unitName:"piece",   gramsEach:40  } },
  "mishti doi":                   { name:"Mishti Doi (Bengali sweet curd)",    category:"Indian Sweets", unit:"g", base:100, cal:112, prot:4.5, carb:16,  fat:3.5, servingSize:100, servingLabel:"1 cup" },
  "kheer rice pudding":           { name:"Kheer / Chawal ki Kheer",            category:"Indian Sweets", unit:"g", base:100, cal:150, prot:4,   carb:24,  fat:4.5, servingSize:150, servingLabel:"1 cup" },
  "kheer vermicelli sevaiyan":    { name:"Sevaiyan / Vermicelli Kheer",        category:"Indian Sweets", unit:"g", base:100, cal:165, prot:4,   carb:26,  fat:5.5, servingSize:150, servingLabel:"1 cup" },
  "kheer sheer korma":            { name:"Sheer Korma (Eid vermicelli kheer)", category:"Indian Sweets", unit:"g", base:100, cal:195, prot:5,   carb:28,  fat:7.5, servingSize:150, servingLabel:"1 cup" },
  "phirni":                       { name:"Phirni (ground rice pudding)",       category:"Indian Sweets", unit:"g", base:100, cal:145, prot:4,   carb:23,  fat:4.5, servingSize:150, servingLabel:"1 earthen cup" },
  "basundi":                      { name:"Basundi (thickened sweetened milk)", category:"Indian Sweets", unit:"g", base:100, cal:215, prot:6,   carb:28,  fat:9,   servingSize:100, servingLabel:"1 serving" },
  "rabri":                        { name:"Rabri (clotted sweet cream)",        category:"Indian Sweets", unit:"g", base:100, cal:250, prot:6,   carb:33,  fat:11,  servingSize:100, servingLabel:"1 serving" },
  "shrikhand":                    { name:"Shrikhand (strained yogurt, saffron)",category:"Indian Sweets", unit:"g", base:100, cal:241, prot:6,  carb:37,  fat:8,   servingSize:100, servingLabel:"1 serving" },
  "kulfi plain":                  { name:"Kulfi (plain milk ice cream)",       category:"Indian Sweets", unit:"g", base:100, cal:240, prot:5,   carb:25,  fat:14,  servingSize:60,  servingLabel:"1 stick",   countable:{ unitName:"stick",   gramsEach:60  } },
  "kulfi pista":                  { name:"Kulfi (pistachio / pista)",          category:"Indian Sweets", unit:"g", base:100, cal:255, prot:5.5, carb:26,  fat:15,  servingSize:60,  servingLabel:"1 stick",   countable:{ unitName:"stick",   gramsEach:60  } },
  "kulfi mango":                  { name:"Kulfi (mango)",                      category:"Indian Sweets", unit:"g", base:100, cal:235, prot:4.5, carb:28,  fat:13,  servingSize:60,  servingLabel:"1 stick",   countable:{ unitName:"stick",   gramsEach:60  } },
  "falooda":                      { name:"Falooda (rose milk + sabja + jelly)",category:"Indian Sweets", unit:"ml", base:100, cal:95, prot:2.5, carb:16,  fat:3,   servingSize:350, servingLabel:"1 tall glass" },
  "rabri falooda":                { name:"Rabri Falooda",                      category:"Indian Sweets", unit:"ml", base:100, cal:145, prot:4,  carb:22,  fat:5.5, servingSize:350, servingLabel:"1 tall glass" },

  /* ── Indian Sweets — Halwa ─────────────────────────── */
  "halwa sooji sheera":           { name:"Sooji Halwa / Sheera (semolina)",    category:"Indian Sweets", unit:"g", base:100, cal:260, prot:4,   carb:45,  fat:8,   servingSize:100, servingLabel:"1 cup" },
  "halwa atta wheat":             { name:"Atta Halwa (wheat flour)",           category:"Indian Sweets", unit:"g", base:100, cal:370, prot:5,   carb:55,  fat:15,  servingSize:80,  servingLabel:"1 serving" },
  "halwa gajar carrot":           { name:"Gajar Halwa (carrot halwa)",         category:"Indian Sweets", unit:"g", base:100, cal:245, prot:4,   carb:35,  fat:10,  servingSize:150, servingLabel:"1 cup" },
  "halwa moong dal":              { name:"Moong Dal Halwa",                    category:"Indian Sweets", unit:"g", base:100, cal:295, prot:7,   carb:42,  fat:11,  servingSize:80,  servingLabel:"1 serving" },
  "halwa badam almond":           { name:"Badam Halwa (almond)",               category:"Indian Sweets", unit:"g", base:100, cal:440, prot:8,   carb:55,  fat:23,  servingSize:80,  servingLabel:"1 serving" },
  "halwa ashtami":                { name:"Halwa (Navami / Suji Halwa sweet)",  category:"Indian Sweets", unit:"g", base:100, cal:280, prot:4,   carb:46,  fat:9.5, servingSize:100, servingLabel:"1 serving" },
  "halwa bread":                  { name:"Bread Halwa",                        category:"Indian Sweets", unit:"g", base:100, cal:310, prot:5,   carb:48,  fat:11,  servingSize:80,  servingLabel:"1 serving" },
  "banana halwa":                 { name:"Banana Halwa",                       category:"Indian Sweets", unit:"g", base:100, cal:255, prot:2.5, carb:45,  fat:8,   servingSize:80,  servingLabel:"1 serving" },

  /* ── Indian Sweets — Barfi & Ladoo ─────────────────── */
  "barfi milk plain":             { name:"Milk Barfi / Burfi (plain)",         category:"Indian Sweets", unit:"g", base:100, cal:410, prot:8,   carb:56,  fat:18,  servingSize:30,  servingLabel:"1 piece",   countable:{ unitName:"piece",   gramsEach:30  } },
  "barfi chocolate":              { name:"Chocolate Barfi",                    category:"Indian Sweets", unit:"g", base:100, cal:430, prot:7.5, carb:58,  fat:20,  servingSize:30,  servingLabel:"1 piece",   countable:{ unitName:"piece",   gramsEach:30  } },
  "kaju katli cashew":            { name:"Kaju Katli / Cashew Barfi",          category:"Indian Sweets", unit:"g", base:100, cal:468, prot:9,   carb:60,  fat:23,  servingSize:10,  servingLabel:"1 piece",   countable:{ unitName:"piece",   gramsEach:10  } },
  "ladoo besan":                  { name:"Besan Ladoo",                        category:"Indian Sweets", unit:"g", base:100, cal:440, prot:8,   carb:55,  fat:21,  servingSize:30,  servingLabel:"1 ladoo",   countable:{ unitName:"ladoo",   gramsEach:30  } },
  "ladoo motichur":               { name:"Motichur Ladoo",                     category:"Indian Sweets", unit:"g", base:100, cal:430, prot:6,   carb:62,  fat:18,  servingSize:30,  servingLabel:"1 ladoo",   countable:{ unitName:"ladoo",   gramsEach:30  } },
  "ladoo coconut":                { name:"Coconut Ladoo",                      category:"Indian Sweets", unit:"g", base:100, cal:420, prot:5,   carb:56,  fat:20,  servingSize:30,  servingLabel:"1 ladoo",   countable:{ unitName:"ladoo",   gramsEach:30  } },
  "ladoo rava sooji":             { name:"Rava / Sooji Ladoo",                 category:"Indian Sweets", unit:"g", base:100, cal:420, prot:6,   carb:57,  fat:18,  servingSize:30,  servingLabel:"1 ladoo",   countable:{ unitName:"ladoo",   gramsEach:30  } },
  "ladoo til sesame":             { name:"Til / Sesame Ladoo",                 category:"Indian Sweets", unit:"g", base:100, cal:460, prot:8,   carb:55,  fat:24,  servingSize:25,  servingLabel:"1 ladoo",   countable:{ unitName:"ladoo",   gramsEach:25  } },
  "peda":                         { name:"Peda (milk sweet)",                  category:"Indian Sweets", unit:"g", base:100, cal:396, prot:8,   carb:60,  fat:14,  servingSize:25,  servingLabel:"1 peda",    countable:{ unitName:"peda",    gramsEach:25  } },
  "mysore pak":                   { name:"Mysore Pak",                         category:"Indian Sweets", unit:"g", base:100, cal:480, prot:8,   carb:54,  fat:26,  servingSize:30,  servingLabel:"1 piece",   countable:{ unitName:"piece",   gramsEach:30  } },
  "mohanthal":                    { name:"Mohanthal (Gujarat besan sweet)",    category:"Indian Sweets", unit:"g", base:100, cal:460, prot:8,   carb:57,  fat:22,  servingSize:40,  servingLabel:"1 piece",   countable:{ unitName:"piece",   gramsEach:40  } },

  /* ── Indian Sweets — Fried ─────────────────────────── */
  "jalebi":                       { name:"Jalebi",                             category:"Indian Sweets", unit:"g", base:100, cal:450, prot:3,   carb:82,  fat:13,  servingSize:30,  servingLabel:"1 piece",   countable:{ unitName:"piece",   gramsEach:30  } },
  "imarti":                       { name:"Imarti / Amriti",                    category:"Indian Sweets", unit:"g", base:100, cal:455, prot:4,   carb:80,  fat:13,  servingSize:40,  servingLabel:"1 piece",   countable:{ unitName:"piece",   gramsEach:40  } },
  "malpua":                       { name:"Malpua",                             category:"Indian Sweets", unit:"g", base:100, cal:340, prot:5,   carb:55,  fat:12,  servingSize:50,  servingLabel:"1 piece",   countable:{ unitName:"piece",   gramsEach:50  } },
  "balushahi":                    { name:"Balushahi / Badushahi",              category:"Indian Sweets", unit:"g", base:100, cal:420, prot:4.5, carb:54,  fat:21,  servingSize:40,  servingLabel:"1 piece",   countable:{ unitName:"piece",   gramsEach:40  } },
  "churros indian":               { name:"Churros (Indian fair style)",        category:"Indian Sweets", unit:"g", base:100, cal:400, prot:5,   carb:55,  fat:18,  servingSize:20,  servingLabel:"1 piece",   countable:{ unitName:"piece",   gramsEach:20  } },
  "gujiya":                       { name:"Gujiya (fried sweet dumpling)",      category:"Indian Sweets", unit:"g", base:100, cal:370, prot:6,   carb:50,  fat:16,  servingSize:60,  servingLabel:"1 piece",   countable:{ unitName:"piece",   gramsEach:60  } },
  "khaja":                        { name:"Khaja (flaky sweet pastry, Odisha)", category:"Indian Sweets", unit:"g", base:100, cal:420, prot:5,   carb:57,  fat:19,  servingSize:35,  servingLabel:"1 piece",   countable:{ unitName:"piece",   gramsEach:35  } },

  /* ── Indian Sweets — Others ────────────────────────── */
  "chikki peanut":                { name:"Peanut / Groundnut Chikki",          category:"Indian Sweets", unit:"g", base:100, cal:460, prot:11,  carb:58,  fat:22,  servingSize:30,  servingLabel:"1 piece",   countable:{ unitName:"piece",   gramsEach:30  } },
  "chikki til sesame":            { name:"Til / Sesame Chikki",                category:"Indian Sweets", unit:"g", base:100, cal:500, prot:10,  carb:57,  fat:28,  servingSize:25,  servingLabel:"1 piece",   countable:{ unitName:"piece",   gramsEach:25  } },
  "gajak":                        { name:"Gajak (sesame jaggery slab)",        category:"Indian Sweets", unit:"g", base:100, cal:490, prot:10,  carb:58,  fat:26,  servingSize:30,  servingLabel:"1 piece",   countable:{ unitName:"piece",   gramsEach:30  } },
  "paneer kheer":                 { name:"Paneer Kheer",                       category:"Indian Sweets", unit:"g", base:100, cal:185, prot:7,   carb:22,  fat:8,   servingSize:150, servingLabel:"1 cup" },
  "mawa cake":                    { name:"Mawa / Khoya Cake",                  category:"Indian Sweets", unit:"g", base:100, cal:360, prot:7,   carb:47,  fat:17,  servingSize:80,  servingLabel:"1 slice",   countable:{ unitName:"slice",   gramsEach:80  } },
  "kalakand":                     { name:"Kalakand (milk cake)",               category:"Indian Sweets", unit:"g", base:100, cal:330, prot:9,   carb:43,  fat:14,  servingSize:50,  servingLabel:"1 piece",   countable:{ unitName:"piece",   gramsEach:50  } },
  "dharwad peda":                 { name:"Dharwad Peda",                       category:"Indian Sweets", unit:"g", base:100, cal:405, prot:8,   carb:60,  fat:15,  servingSize:25,  servingLabel:"1 peda",    countable:{ unitName:"peda",    gramsEach:25  } },
  "puttu kadala sweet":           { name:"Sweet Puttu (with banana & jaggery)",category:"Indian Sweets", unit:"g", base:100, cal:210, prot:3.5, carb:42,  fat:3,   servingSize:100, servingLabel:"1 serving" },
  "payasam moong":                { name:"Moong Dal Payasam",                  category:"Indian Sweets", unit:"g", base:100, cal:165, prot:4.5, carb:26,  fat:5,   servingSize:150, servingLabel:"1 cup" },
  "payasam ada pradaman":         { name:"Ada Pradaman (Kerala rice flakes payasam)", category:"Indian Sweets", unit:"g", base:100, cal:200, prot:3,  carb:34,  fat:6.5, servingSize:150, servingLabel:"1 cup" },
  "ariselu":                      { name:"Ariselu / Adhirasam",               category:"Indian Sweets", unit:"g", base:100, cal:420, prot:4,   carb:65,  fat:16,  servingSize:30,  servingLabel:"1 piece",   countable:{ unitName:"piece",   gramsEach:30  } },
  "unniyappam":                   { name:"Unniyappam (Kerala rice sweet)",     category:"Indian Sweets", unit:"g", base:100, cal:255, prot:3.5, carb:40,  fat:9,   servingSize:25,  servingLabel:"1 piece",   countable:{ unitName:"piece",   gramsEach:25  } },

  /* ── Cakes & Bakes ─────────────────────────────────── */
  "cake chocolate slice":         { name:"Chocolate Cake (slice)",             category:"Desserts", unit:"g", base:100, cal:371, prot:5,   carb:52,  fat:16,  servingSize:90,  servingLabel:"1 slice",   countable:{ unitName:"slice",   gramsEach:90  } },
  "cake vanilla sponge":          { name:"Vanilla Sponge Cake (slice)",        category:"Desserts", unit:"g", base:100, cal:350, prot:5,   carb:54,  fat:13,  servingSize:80,  servingLabel:"1 slice",   countable:{ unitName:"slice",   gramsEach:80  } },
  "cake red velvet":              { name:"Red Velvet Cake (slice)",            category:"Desserts", unit:"g", base:100, cal:362, prot:4.5, carb:48,  fat:17,  servingSize:95,  servingLabel:"1 slice",   countable:{ unitName:"slice",   gramsEach:95  } },
  "cake carrot":                  { name:"Carrot Cake with Cream Cheese Frosting", category:"Desserts", unit:"g", base:100, cal:373, prot:4, carb:47,  fat:20,  servingSize:95,  servingLabel:"1 slice",   countable:{ unitName:"slice",   gramsEach:95  } },
  "cake lemon":                   { name:"Lemon Drizzle Cake (slice)",         category:"Desserts", unit:"g", base:100, cal:370, prot:5,   carb:57,  fat:15,  servingSize:65,  servingLabel:"1 slice",   countable:{ unitName:"slice",   gramsEach:65  } },
  "cake black forest":            { name:"Black Forest Cake (slice)",          category:"Desserts", unit:"g", base:100, cal:335, prot:4.5, carb:42,  fat:17,  servingSize:110, servingLabel:"1 slice",   countable:{ unitName:"slice",   gramsEach:110 } },
  "cake cheese new york":         { name:"New York Cheesecake (slice)",        category:"Desserts", unit:"g", base:100, cal:321, prot:5,   carb:26,  fat:23,  servingSize:80,  servingLabel:"1 slice",   countable:{ unitName:"slice",   gramsEach:80  } },
  "cake cheese baked":            { name:"Baked Cheesecake (slice)",           category:"Desserts", unit:"g", base:100, cal:310, prot:5.5, carb:27,  fat:20,  servingSize:90,  servingLabel:"1 slice",   countable:{ unitName:"slice",   gramsEach:90  } },
  "cake pound loaf":              { name:"Pound Cake / Loaf Cake (slice)",     category:"Desserts", unit:"g", base:100, cal:395, prot:5,   carb:52,  fat:19,  servingSize:60,  servingLabel:"1 slice",   countable:{ unitName:"slice",   gramsEach:60  } },
  "cake coffee walnut":           { name:"Coffee & Walnut Cake (slice)",       category:"Desserts", unit:"g", base:100, cal:380, prot:5,   carb:48,  fat:19,  servingSize:90,  servingLabel:"1 slice",   countable:{ unitName:"slice",   gramsEach:90  } },
  "cake strawberry shortcake":    { name:"Strawberry Shortcake (slice)",       category:"Desserts", unit:"g", base:100, cal:280, prot:4.5, carb:42,  fat:11,  servingSize:120, servingLabel:"1 slice",   countable:{ unitName:"slice",   gramsEach:120 } },
  "cupcake frosted":              { name:"Cupcake with Frosting",              category:"Desserts", unit:"g", base:100, cal:387, prot:3.5, carb:56,  fat:17,  servingSize:57,  servingLabel:"1 cupcake", countable:{ unitName:"cupcake", gramsEach:57  } },
  "cupcake chocolate":            { name:"Chocolate Cupcake with Buttercream", category:"Desserts", unit:"g", base:100, cal:400, prot:3.5, carb:58,  fat:18,  servingSize:60,  servingLabel:"1 cupcake", countable:{ unitName:"cupcake", gramsEach:60  } },
  "brownie chocolate":            { name:"Chocolate Brownie",                  category:"Desserts", unit:"g", base:100, cal:466, prot:5,   carb:62,  fat:22,  servingSize:60,  servingLabel:"1 square",  countable:{ unitName:"brownie", gramsEach:60  } },
  "brownie walnut":               { name:"Walnut Brownie",                     category:"Desserts", unit:"g", base:100, cal:480, prot:6,   carb:60,  fat:24,  servingSize:60,  servingLabel:"1 square",  countable:{ unitName:"brownie", gramsEach:60  } },

  /* ── Pastries & Tarts ──────────────────────────────── */
  "donut glazed":                 { name:"Glazed Doughnut",                    category:"Desserts", unit:"g", base:100, cal:452, prot:4.9, carb:59,  fat:22,  servingSize:57,  servingLabel:"1 donut",   countable:{ unitName:"donut",   gramsEach:57  } },
  "donut filled jam":             { name:"Jam-Filled Doughnut",                category:"Desserts", unit:"g", base:100, cal:393, prot:5.5, carb:55,  fat:17,  servingSize:75,  servingLabel:"1 donut",   countable:{ unitName:"donut",   gramsEach:75  } },
  "donut chocolate iced":         { name:"Chocolate Iced Doughnut",            category:"Desserts", unit:"g", base:100, cal:460, prot:5,   carb:60,  fat:22,  servingSize:57,  servingLabel:"1 donut",   countable:{ unitName:"donut",   gramsEach:57  } },
  "croissant plain":              { name:"Croissant (plain, butter)",          category:"Desserts", unit:"g", base:100, cal:406, prot:8.2, carb:46,  fat:21,  servingSize:57,  servingLabel:"1 croissant", countable:{ unitName:"croissant", gramsEach:57 } },
  "pain au chocolat":             { name:"Pain au Chocolat",                   category:"Desserts", unit:"g", base:100, cal:450, prot:7.5, carb:50,  fat:25,  servingSize:65,  servingLabel:"1 piece",   countable:{ unitName:"piece",   gramsEach:65  } },
  "eclair chocolate":             { name:"Chocolate Éclair",                   category:"Desserts", unit:"g", base:100, cal:296, prot:5.6, carb:34,  fat:16,  servingSize:65,  servingLabel:"1 éclair",  countable:{ unitName:"éclair",  gramsEach:65  } },
  "macaron french":               { name:"French Macaron",                     category:"Desserts", unit:"g", base:100, cal:420, prot:6,   carb:62,  fat:17,  servingSize:15,  servingLabel:"1 macaron", countable:{ unitName:"macaron", gramsEach:15  } },
  "profiterole":                  { name:"Profiterole / Cream Puff",           category:"Desserts", unit:"g", base:100, cal:262, prot:4.5, carb:28,  fat:15,  servingSize:30,  servingLabel:"1 profiterole", countable:{ unitName:"piece", gramsEach:30 } },
  "danish pastry fruit":          { name:"Danish Pastry (fruit / custard)",    category:"Desserts", unit:"g", base:100, cal:374, prot:7,   carb:52,  fat:16,  servingSize:65,  servingLabel:"1 pastry",  countable:{ unitName:"pastry",  gramsEach:65  } },
  "cinnamon roll":                { name:"Cinnamon Roll",                      category:"Desserts", unit:"g", base:100, cal:380, prot:6.5, carb:60,  fat:13,  servingSize:90,  servingLabel:"1 roll",    countable:{ unitName:"roll",    gramsEach:90  } },
  "fruit tart":                   { name:"Fruit Tart",                         category:"Desserts", unit:"g", base:100, cal:260, prot:4,   carb:38,  fat:11,  servingSize:100, servingLabel:"1 small tart", countable:{ unitName:"tart",  gramsEach:100 } },
  "pie apple slice":              { name:"Apple Pie (slice)",                  category:"Desserts", unit:"g", base:100, cal:237, prot:2,   carb:35,  fat:11,  servingSize:125, servingLabel:"1 slice",   countable:{ unitName:"slice",   gramsEach:125 } },
  "pie pumpkin slice":            { name:"Pumpkin Pie (slice)",                category:"Desserts", unit:"g", base:100, cal:211, prot:3.5, carb:30,  fat:9,   servingSize:109, servingLabel:"1 slice",   countable:{ unitName:"slice",   gramsEach:109 } },
  "pie key lime":                 { name:"Key Lime Pie (slice)",               category:"Desserts", unit:"g", base:100, cal:270, prot:4.5, carb:39,  fat:11,  servingSize:113, servingLabel:"1 slice",   countable:{ unitName:"slice",   gramsEach:113 } },
  "baklava":                      { name:"Baklava",                            category:"Desserts", unit:"g", base:100, cal:429, prot:6.7, carb:51,  fat:24,  servingSize:43,  servingLabel:"1 piece",   countable:{ unitName:"piece",   gramsEach:43  } },
  "churros classic":              { name:"Churros (fried, sugar & cinnamon)",  category:"Desserts", unit:"g", base:100, cal:403, prot:5,   carb:55,  fat:19,  servingSize:20,  servingLabel:"1 churro",  countable:{ unitName:"churro",  gramsEach:20  } },

  /* ── Puddings & Custards ───────────────────────────── */
  "tiramisu":                     { name:"Tiramisu",                           category:"Desserts", unit:"g", base:100, cal:240, prot:5,   carb:26,  fat:13,  servingSize:120, servingLabel:"1 slice",   countable:{ unitName:"slice",   gramsEach:120 } },
  "creme brulee":                 { name:"Crème Brûlée",                       category:"Desserts", unit:"g", base:100, cal:340, prot:4,   carb:34,  fat:21,  servingSize:150, servingLabel:"1 ramekin" },
  "panna cotta":                  { name:"Panna Cotta (vanilla / berry)",      category:"Desserts", unit:"g", base:100, cal:218, prot:3,   carb:22,  fat:14,  servingSize:120, servingLabel:"1 serving" },
  "bread pudding":                { name:"Bread Pudding",                      category:"Desserts", unit:"g", base:100, cal:289, prot:7,   carb:45,  fat:9.5, servingSize:150, servingLabel:"1 serving", countable:{ unitName:"slice",   gramsEach:150 } },
  "rice pudding western":         { name:"Rice Pudding (Western, creamy)",     category:"Desserts", unit:"g", base:100, cal:130, prot:3.5, carb:22,  fat:3.5, servingSize:200, servingLabel:"1 cup" },
  "chocolate mousse":             { name:"Chocolate Mousse",                   category:"Desserts", unit:"g", base:100, cal:243, prot:4.6, carb:21,  fat:17,  servingSize:90,  servingLabel:"1 serving" },
  "sticky toffee pudding":        { name:"Sticky Toffee Pudding",              category:"Desserts", unit:"g", base:100, cal:340, prot:4,   carb:54,  fat:13,  servingSize:120, servingLabel:"1 serving",  countable:{ unitName:"serving", gramsEach:120 } },
  "flan creme caramel":           { name:"Flan / Crème Caramel",               category:"Desserts", unit:"g", base:100, cal:122, prot:3.5, carb:19,  fat:3.5, servingSize:120, servingLabel:"1 serving" },
  "eton mess":                    { name:"Eton Mess (meringue + cream + strawberry)", category:"Desserts", unit:"g", base:100, cal:220, prot:2.5, carb:28, fat:11, servingSize:150, servingLabel:"1 serving" },
  "trifle":                       { name:"English Trifle",                     category:"Desserts", unit:"g", base:100, cal:175, prot:3.5, carb:24,  fat:7.5, servingSize:200, servingLabel:"1 cup" },
  "custard egg english":          { name:"English Egg Custard (poured)",       category:"Desserts", unit:"g", base:100, cal:101, prot:3.5, carb:16,  fat:2.8, servingSize:120, servingLabel:"½ cup" },
  "christmas pudding":            { name:"Christmas Pudding (steamed)",        category:"Desserts", unit:"g", base:100, cal:295, prot:3.5, carb:54,  fat:7.5, servingSize:100, servingLabel:"1 slice",   countable:{ unitName:"slice",   gramsEach:100 } },

  /* ── Ice Cream & Frozen ────────────────────────────── */
  "ice cream vanilla scoop":      { name:"Vanilla Ice Cream (scoop)",          category:"Desserts", unit:"g", base:100, cal:207, prot:3.5, carb:24,  fat:11,  servingSize:66,  servingLabel:"1 scoop" },
  "ice cream chocolate scoop":    { name:"Chocolate Ice Cream (scoop)",        category:"Desserts", unit:"g", base:100, cal:216, prot:3.8, carb:28,  fat:11,  servingSize:66,  servingLabel:"1 scoop" },
  "ice cream strawberry scoop":   { name:"Strawberry Ice Cream (scoop)",       category:"Desserts", unit:"g", base:100, cal:192, prot:3,   carb:26,  fat:9,   servingSize:66,  servingLabel:"1 scoop" },
  "ice cream premium haagen":     { name:"Premium Ice Cream (Häagen-Dazs style)", category:"Desserts", unit:"g", base:100, cal:280, prot:4, carb:25,  fat:18,  servingSize:90,  servingLabel:"1 large scoop" },
  "gelato vanilla italian":       { name:"Gelato (vanilla, Italian)",          category:"Desserts", unit:"g", base:100, cal:170, prot:3.5, carb:24,  fat:7,   servingSize:90,  servingLabel:"1 scoop" },
  "gelato pistachio":             { name:"Pistachio Gelato",                   category:"Desserts", unit:"g", base:100, cal:185, prot:4,   carb:23,  fat:9,   servingSize:90,  servingLabel:"1 scoop" },
  "sorbet lemon":                 { name:"Lemon Sorbet",                       category:"Desserts", unit:"g", base:100, cal:93,  prot:0.3, carb:24,  fat:0,   servingSize:100, servingLabel:"1 scoop" },
  "sorbet mango":                 { name:"Mango Sorbet",                       category:"Desserts", unit:"g", base:100, cal:100, prot:0.4, carb:26,  fat:0.1, servingSize:100, servingLabel:"1 scoop" },
  "frozen yogurt scoop":          { name:"Frozen Yogurt",                      category:"Desserts", unit:"g", base:100, cal:127, prot:3.7, carb:24,  fat:1.8, servingSize:113, servingLabel:"½ cup" },
  "sundae hot fudge":             { name:"Hot Fudge Sundae",                   category:"Desserts", unit:"g", base:100, cal:255, prot:4,   carb:37,  fat:11,  servingSize:220, servingLabel:"1 medium sundae" },
  "ice cream float":              { name:"Ice Cream Float (cola + vanilla)",   category:"Desserts", unit:"ml", base:100, cal:78, prot:1.5, carb:14,  fat:3,   servingSize:400, servingLabel:"1 large float" },
  "popsicle fruit":               { name:"Fruit Ice Lolly / Popsicle",         category:"Desserts", unit:"g", base:100, cal:73,  prot:0.3, carb:18,  fat:0.1, servingSize:80,  servingLabel:"1 lolly",   countable:{ unitName:"popsicle", gramsEach:80  } },

  /* ── Chocolate & Candy ─────────────────────────────── */
  "dark chocolate bar":           { name:"Dark Chocolate (70–85%)",            category:"Desserts", unit:"g", base:100, cal:598, prot:8,   carb:46,  fat:43,  servingSize:28,  servingLabel:"2 squares" },
  "milk chocolate bar":           { name:"Milk Chocolate Bar",                 category:"Desserts", unit:"g", base:100, cal:535, prot:8,   carb:60,  fat:30,  servingSize:28,  servingLabel:"1 oz" },
  "white chocolate bar":          { name:"White Chocolate Bar",                category:"Desserts", unit:"g", base:100, cal:539, prot:5.9, carb:59,  fat:32,  servingSize:28,  servingLabel:"1 oz" },
  "toffee slab":                  { name:"Toffee",                             category:"Desserts", unit:"g", base:100, cal:420, prot:1.5, carb:77,  fat:12,  servingSize:17,  servingLabel:"1 piece",   countable:{ unitName:"piece",   gramsEach:17  } },
  "fudge chocolate":              { name:"Chocolate Fudge",                    category:"Desserts", unit:"g", base:100, cal:411, prot:2.8, carb:76,  fat:11,  servingSize:30,  servingLabel:"1 piece",   countable:{ unitName:"piece",   gramsEach:30  } },
  "nougat":                       { name:"Nougat",                             category:"Desserts", unit:"g", base:100, cal:406, prot:4,   carb:72,  fat:13,  servingSize:28,  servingLabel:"1 oz" },
  "peanut brittle":               { name:"Peanut Brittle",                     category:"Desserts", unit:"g", base:100, cal:450, prot:8.5, carb:69,  fat:18,  servingSize:28,  servingLabel:"1 oz" },
  "halva sesame western":         { name:"Halva (sesame, Middle Eastern)",     category:"Desserts", unit:"g", base:100, cal:469, prot:12,  carb:57,  fat:24,  servingSize:28,  servingLabel:"1 oz" },
  "cotton candy":                 { name:"Cotton Candy / Candy Floss",         category:"Desserts", unit:"g", base:100, cal:394, prot:0,   carb:99,  fat:0,   servingSize:15,  servingLabel:"1 bag" },
  "candyfloss stick":             { name:"Toffee Apple",                       category:"Desserts", unit:"g", base:100, cal:220, prot:0.4, carb:55,  fat:2.5, servingSize:100, servingLabel:"1 toffee apple", countable:{ unitName:"apple",  gramsEach:100 } },

  /* ── Waffles, Pancakes & Crepes ────────────────────── */
  "waffle belgian":               { name:"Belgian Waffle (with toppings)",     category:"Desserts", unit:"g", base:100, cal:320, prot:7.5, carb:40,  fat:15,  servingSize:130, servingLabel:"1 waffle",  countable:{ unitName:"waffle",  gramsEach:130 } },
  "pancake stack":                { name:"Pancake Stack (3 pancakes + syrup)", category:"Desserts", unit:"g", base:100, cal:225, prot:5.5, carb:38,  fat:7,   servingSize:200, servingLabel:"3 pancakes" },
  "crepe sweet nutella":          { name:"Sweet Crêpe (Nutella / banana)",     category:"Desserts", unit:"g", base:100, cal:280, prot:5.5, carb:41,  fat:11,  servingSize:80,  servingLabel:"1 crêpe",   countable:{ unitName:"crêpe",   gramsEach:80  } },
  "french toast dessert":         { name:"French Toast (dessert style, powdered sugar)", category:"Desserts", unit:"g", base:100, cal:250, prot:8, carb:30, fat:11, servingSize:65, servingLabel:"1 slice", countable:{ unitName:"slice",   gramsEach:65  } },
  "waffle ice cream":             { name:"Waffle Cone with Ice Cream",         category:"Desserts", unit:"g", base:100, cal:265, prot:4.5, carb:38,  fat:11,  servingSize:150, servingLabel:"1 medium",  countable:{ unitName:"cone",    gramsEach:150 } },

  /* ── Scoopable Desserts & Mousse ───────────────────── */
  "lava cake molten chocolate":   { name:"Molten Lava Cake / Fondant",         category:"Desserts", unit:"g", base:100, cal:365, prot:5.5, carb:42,  fat:20,  servingSize:85,  servingLabel:"1 individual cake", countable:{ unitName:"cake", gramsEach:85  } },
  "cheesecake slice plain":       { name:"Plain Cheesecake (slice)",           category:"Desserts", unit:"g", base:100, cal:321, prot:5,   carb:26,  fat:23,  servingSize:80,  servingLabel:"1 slice",   countable:{ unitName:"slice",   gramsEach:80  } },
  "banoffee pie":                 { name:"Banoffee Pie (slice)",               category:"Desserts", unit:"g", base:100, cal:335, prot:3.5, carb:41,  fat:18,  servingSize:110, servingLabel:"1 slice",   countable:{ unitName:"slice",   gramsEach:110 } },
  "pavlova meringue":             { name:"Pavlova (meringue + cream + fruit)", category:"Desserts", unit:"g", base:100, cal:205, prot:2.5, carb:34,  fat:7,   servingSize:120, servingLabel:"1 slice",   countable:{ unitName:"slice",   gramsEach:120 } },
  "meringue kisses":              { name:"Meringue Kisses",                    category:"Desserts", unit:"g", base:100, cal:381, prot:3.6, carb:95,  fat:0,   servingSize:10,  servingLabel:"2 pieces",  countable:{ unitName:"piece",   gramsEach:5   } },
  "profiterole tower":            { name:"Profiterole Tower (cream + choc sauce)", category:"Desserts", unit:"g", base:100, cal:320, prot:5, carb:35, fat:18, servingSize:90, servingLabel:"3 pieces",   countable:{ unitName:"piece",   gramsEach:30  } },
  "affogato dessert":             { name:"Affogato (espresso over gelato)",    category:"Desserts", unit:"g", base:100, cal:130, prot:3,   carb:14,  fat:7.5, servingSize:120, servingLabel:"1 serving" },








  /* ══════════════════════════════════════════════════════
     ☕  BEVERAGES — COMPLETE SECTION
  ══════════════════════════════════════════════════════ */

  /* ── Water & Plain ─────────────────────────────────── */
  "water plain":                  { name:"Water (plain)",                      category:"Beverages", unit:"ml", base:100, cal:0,   prot:0,   carb:0,   fat:0,   servingSize:250, servingLabel:"1 glass" },
  "sparkling water":              { name:"Sparkling / Carbonated Water",       category:"Beverages", unit:"ml", base:100, cal:0,   prot:0,   carb:0,   fat:0,   servingSize:355, servingLabel:"1 can" },
  "tonic water":                  { name:"Tonic Water",                        category:"Beverages", unit:"ml", base:100, cal:34,  prot:0,   carb:8.8, fat:0,   servingSize:355, servingLabel:"1 can" },
  "coconut water":                { name:"Coconut Water (tender, fresh)",      category:"Beverages", unit:"ml", base:100, cal:19,  prot:0.7, carb:3.7, fat:0.2, servingSize:240, servingLabel:"1 glass" },
  "coconut water packaged":       { name:"Coconut Water (packaged, unsweetened)", category:"Beverages", unit:"ml", base:100, cal:19, prot:0.7, carb:3.7, fat:0.2, servingSize:330, servingLabel:"1 can" },

  /* ── Coffee ──────────────────────────────────────────── */
  "coffee black":                 { name:"Black Coffee (filter/drip)",         category:"Beverages", unit:"ml", base:240, cal:5,   prot:0.3, carb:0,   fat:0,   servingSize:240, servingLabel:"1 cup" },
  "coffee espresso single":       { name:"Espresso (single shot)",             category:"Beverages", unit:"ml", base:30,  cal:3,   prot:0.2, carb:0.5, fat:0.1, servingSize:30,  servingLabel:"1 shot" },
  "coffee espresso double":       { name:"Espresso (double shot)",             category:"Beverages", unit:"ml", base:60,  cal:6,   prot:0.4, carb:1,   fat:0.2, servingSize:60,  servingLabel:"2 shots" },
  "coffee americano":             { name:"Americano",                          category:"Beverages", unit:"ml", base:240, cal:15,  prot:0.5, carb:2,   fat:0,   servingSize:240, servingLabel:"8 oz cup" },
  "coffee latte whole milk":      { name:"Latte (whole milk)",                 category:"Beverages", unit:"ml", base:240, cal:120, prot:6,   carb:10,  fat:6,   servingSize:240, servingLabel:"8 oz cup" },
  "coffee latte skim milk":       { name:"Latte (skim milk)",                  category:"Beverages", unit:"ml", base:240, cal:80,  prot:7,   carb:11,  fat:0.2, servingSize:240, servingLabel:"8 oz cup" },
  "coffee latte oat milk":        { name:"Latte (oat milk)",                   category:"Beverages", unit:"ml", base:240, cal:100, prot:3.5, carb:15,  fat:3.5, servingSize:240, servingLabel:"8 oz cup" },
  "coffee cappuccino":            { name:"Cappuccino",                         category:"Beverages", unit:"ml", base:180, cal:80,  prot:4,   carb:6.5, fat:4,   servingSize:180, servingLabel:"6 oz cup" },
  "coffee flat white":            { name:"Flat White",                         category:"Beverages", unit:"ml", base:180, cal:110, prot:6.5, carb:9,   fat:5.5, servingSize:180, servingLabel:"6 oz" },
  "coffee mocha":                 { name:"Mocha (whole milk, chocolate)",      category:"Beverages", unit:"ml", base:240, cal:175, prot:6,   carb:25,  fat:6.5, servingSize:240, servingLabel:"8 oz cup" },
  "coffee macchiato":             { name:"Macchiato (espresso + foam)",        category:"Beverages", unit:"ml", base:60,  cal:15,  prot:0.8, carb:1.5, fat:0.5, servingSize:60,  servingLabel:"2 oz" },
  "coffee cortado":               { name:"Cortado",                            category:"Beverages", unit:"ml", base:90,  cal:40,  prot:2.2, carb:3,   fat:2,   servingSize:90,  servingLabel:"3 oz" },
  "coffee cold brew":             { name:"Cold Brew Coffee",                   category:"Beverages", unit:"ml", base:240, cal:10,  prot:0.5, carb:2,   fat:0.1, servingSize:240, servingLabel:"8 oz" },
  "coffee nitro cold brew":       { name:"Nitro Cold Brew",                    category:"Beverages", unit:"ml", base:240, cal:10,  prot:0.5, carb:2,   fat:0,   servingSize:240, servingLabel:"8 oz" },
  "coffee frappuccino":           { name:"Frappuccino / Iced Blended Coffee",  category:"Beverages", unit:"ml", base:350, cal:240, prot:4,   carb:45,  fat:5,   servingSize:350, servingLabel:"12 oz" },
  "coffee iced latte":            { name:"Iced Latte (whole milk)",            category:"Beverages", unit:"ml", base:240, cal:100, prot:5,   carb:9,   fat:5,   servingSize:240, servingLabel:"8 oz" },
  "coffee instant black":         { name:"Instant Coffee (black, no milk)",    category:"Beverages", unit:"ml", base:240, cal:4,   prot:0.2, carb:0.7, fat:0,   servingSize:240, servingLabel:"1 cup" },
  "coffee instant with milk":     { name:"Instant Coffee (milk + sugar)",      category:"Beverages", unit:"ml", base:240, cal:70,  prot:2.5, carb:12,  fat:1.5, servingSize:240, servingLabel:"1 cup" },
  "coffee dalgona":               { name:"Dalgona / Whipped Coffee",           category:"Beverages", unit:"ml", base:240, cal:120, prot:3.5, carb:18,  fat:4,   servingSize:240, servingLabel:"1 glass" },
  "coffee vietnamese iced":       { name:"Vietnamese Iced Coffee (ca phe sua da)", category:"Beverages", unit:"ml", base:240, cal:200, prot:3.5, carb:32, fat:7, servingSize:240, servingLabel:"1 glass" },
  "coffee turkish":               { name:"Turkish Coffee",                     category:"Beverages", unit:"ml", base:60,  cal:5,   prot:0.1, carb:1,   fat:0,   servingSize:60,  servingLabel:"1 small cup" },
  "coffee south indian filter":   { name:"South Indian Filter Coffee",         category:"Beverages", unit:"ml", base:200, cal:90,  prot:3,   carb:10,  fat:4,   servingSize:200, servingLabel:"1 tumbler" },
  "coffee filter tumbler":        { name:"Filter Coffee (davara tumbler)",     category:"Beverages", unit:"ml", base:150, cal:75,  prot:2.5, carb:9,   fat:3.5, servingSize:150, servingLabel:"1 tumbler" },
  "coffee bulletproof":           { name:"Bulletproof Coffee (butter + MCT)",  category:"Beverages", unit:"ml", base:240, cal:230, prot:0.5, carb:0,   fat:25,  servingSize:240, servingLabel:"1 cup" },
  "coffee affogato":              { name:"Affogato (espresso over ice cream)",  category:"Beverages", unit:"ml", base:120, cal:130, prot:3,   carb:14,  fat:7.5, servingSize:120, servingLabel:"1 serving" },
  "coffee irish":                 { name:"Irish Coffee (whisky + cream)",       category:"Beverages", unit:"ml", base:240, cal:200, prot:1.5, carb:12,  fat:8,   servingSize:240, servingLabel:"1 mug" },

  /* ── Tea ─────────────────────────────────────────────── */
  "tea black plain":              { name:"Black Tea (plain)",                  category:"Beverages", unit:"ml", base:240, cal:2,   prot:0,   carb:0.5, fat:0,   servingSize:240, servingLabel:"1 cup" },
  "tea black with milk":          { name:"Black Tea (with milk, no sugar)",    category:"Beverages", unit:"ml", base:240, cal:30,  prot:1.5, carb:3,   fat:1,   servingSize:240, servingLabel:"1 cup" },
  "tea black milk sugar":         { name:"Black Tea (milk + sugar)",           category:"Beverages", unit:"ml", base:240, cal:60,  prot:1.5, carb:10,  fat:1,   servingSize:240, servingLabel:"1 cup" },
  "tea masala chai":              { name:"Masala Chai (milk + spices + sugar)",category:"Beverages", unit:"ml", base:200, cal:100, prot:3,   carb:15,  fat:3.5, servingSize:200, servingLabel:"1 cup" },
  "tea masala no milk":           { name:"Masala Tea (no milk)",               category:"Beverages", unit:"ml", base:240, cal:15,  prot:0.2, carb:3.5, fat:0,   servingSize:240, servingLabel:"1 cup" },
  "tea kadak":                    { name:"Kadak Chai (strong, sweet)",         category:"Beverages", unit:"ml", base:150, cal:65,  prot:2,   carb:9,   fat:2.5, servingSize:150, servingLabel:"1 small cup" },
  "tea kashmir noon chai":        { name:"Noon Chai / Kashmiri Pink Tea",      category:"Beverages", unit:"ml", base:200, cal:85,  prot:3,   carb:9,   fat:4,   servingSize:200, servingLabel:"1 cup" },
  "tea green plain":              { name:"Green Tea (plain)",                  category:"Beverages", unit:"ml", base:240, cal:2,   prot:0,   carb:0.5, fat:0,   servingSize:240, servingLabel:"1 cup" },
  "tea green lemon honey":        { name:"Green Tea (lemon + honey)",          category:"Beverages", unit:"ml", base:240, cal:35,  prot:0.1, carb:9,   fat:0,   servingSize:240, servingLabel:"1 cup" },
  "tea white":                    { name:"White Tea",                          category:"Beverages", unit:"ml", base:240, cal:2,   prot:0,   carb:0.4, fat:0,   servingSize:240, servingLabel:"1 cup" },
  "tea oolong":                   { name:"Oolong Tea",                         category:"Beverages", unit:"ml", base:240, cal:2,   prot:0,   carb:0.3, fat:0,   servingSize:240, servingLabel:"1 cup" },
  "tea chamomile":                { name:"Chamomile Tea",                      category:"Beverages", unit:"ml", base:240, cal:2,   prot:0,   carb:0.5, fat:0,   servingSize:240, servingLabel:"1 cup" },
  "tea peppermint":               { name:"Peppermint Tea",                     category:"Beverages", unit:"ml", base:240, cal:2,   prot:0,   carb:0.4, fat:0,   servingSize:240, servingLabel:"1 cup" },
  "tea ginger plain":             { name:"Ginger Tea (fresh ginger + water)",  category:"Beverages", unit:"ml", base:240, cal:5,   prot:0.1, carb:1,   fat:0,   servingSize:240, servingLabel:"1 cup" },
  "tea ginger lemon honey":       { name:"Ginger Lemon Honey Tea",             category:"Beverages", unit:"ml", base:240, cal:45,  prot:0.1, carb:11,  fat:0,   servingSize:240, servingLabel:"1 cup" },
  "tea hibiscus":                 { name:"Hibiscus / Roselle Tea",             category:"Beverages", unit:"ml", base:240, cal:5,   prot:0,   carb:1.5, fat:0,   servingSize:240, servingLabel:"1 cup" },
  "tea lavender":                 { name:"Lavender Tea",                       category:"Beverages", unit:"ml", base:240, cal:2,   prot:0,   carb:0.4, fat:0,   servingSize:240, servingLabel:"1 cup" },
  "tea rooibos":                  { name:"Rooibos / Redbush Tea",              category:"Beverages", unit:"ml", base:240, cal:2,   prot:0,   carb:0.3, fat:0,   servingSize:240, servingLabel:"1 cup" },
  "tea tulsi":                    { name:"Tulsi / Holy Basil Tea",             category:"Beverages", unit:"ml", base:240, cal:3,   prot:0,   carb:0.7, fat:0,   servingSize:240, servingLabel:"1 cup" },
  "tea lemongrass":               { name:"Lemongrass Tea",                     category:"Beverages", unit:"ml", base:240, cal:3,   prot:0,   carb:0.8, fat:0,   servingSize:240, servingLabel:"1 cup" },
  "tea echinacea":                { name:"Echinacea Tea",                      category:"Beverages", unit:"ml", base:240, cal:2,   prot:0,   carb:0.5, fat:0,   servingSize:240, servingLabel:"1 cup" },
  "tea licorice root":            { name:"Licorice Root Tea",                  category:"Beverages", unit:"ml", base:240, cal:5,   prot:0,   carb:1.3, fat:0,   servingSize:240, servingLabel:"1 cup" },
  "tea iced sweet":               { name:"Sweet Iced Tea",                     category:"Beverages", unit:"ml", base:240, cal:84,  prot:0,   carb:22,  fat:0,   servingSize:355, servingLabel:"12 oz glass" },
  "tea iced lemon unsweetened":   { name:"Iced Lemon Tea (unsweetened)",       category:"Beverages", unit:"ml", base:240, cal:8,   prot:0,   carb:2,   fat:0,   servingSize:355, servingLabel:"12 oz glass" },
  "tea bubble boba":              { name:"Bubble Tea / Boba (milk tea)",       category:"Beverages", unit:"ml", base:480, cal:340, prot:4.5, carb:65,  fat:7,   servingSize:480, servingLabel:"1 large cup" },
  "tea matcha plain":             { name:"Matcha (whisked, no milk)",          category:"Beverages", unit:"ml", base:240, cal:10,  prot:1,   carb:1.5, fat:0.3, servingSize:240, servingLabel:"1 cup" },
  "tea matcha latte":             { name:"Matcha Latte (whole milk)",          category:"Beverages", unit:"ml", base:240, cal:140, prot:7,   carb:16,  fat:5.5, servingSize:240, servingLabel:"8 oz cup" },
  "tea chai latte spiced":        { name:"Chai Latte (spiced, with milk)",     category:"Beverages", unit:"ml", base:350, cal:240, prot:8,   carb:42,  fat:4.5, servingSize:350, servingLabel:"12 oz" },

  /* ── Indian Traditional Drinks ──────────────────────── */
  "lassi sweet":                  { name:"Sweet Lassi",                        category:"Beverages", unit:"ml", base:100, cal:80,  prot:3.5, carb:13,  fat:1.5, servingSize:240, servingLabel:"1 glass" },
  "lassi plain salted":           { name:"Plain Lassi (salted / namkeen)",     category:"Beverages", unit:"ml", base:100, cal:49,  prot:3.3, carb:5,   fat:2,   servingSize:240, servingLabel:"1 glass" },
  "lassi mango":                  { name:"Mango Lassi",                        category:"Beverages", unit:"ml", base:100, cal:88,  prot:3,   carb:16,  fat:1.8, servingSize:300, servingLabel:"1 large glass" },
  "lassi strawberry":             { name:"Strawberry Lassi",                   category:"Beverages", unit:"ml", base:100, cal:78,  prot:3,   carb:14,  fat:1.5, servingSize:240, servingLabel:"1 glass" },
  "lassi rose":                   { name:"Rose Lassi",                         category:"Beverages", unit:"ml", base:100, cal:82,  prot:3,   carb:14,  fat:1.5, servingSize:240, servingLabel:"1 glass" },
  "buttermilk chaas plain":       { name:"Buttermilk / Chaas (thin, salted)",  category:"Beverages", unit:"ml", base:100, cal:35,  prot:2.5, carb:4,   fat:0.8, servingSize:300, servingLabel:"1 large glass" },
  "buttermilk masala chaas":      { name:"Masala Chaas (spiced buttermilk)",   category:"Beverages", unit:"ml", base:100, cal:38,  prot:2.5, carb:4.5, fat:0.9, servingSize:300, servingLabel:"1 large glass" },
  "nimbu pani":                   { name:"Nimbu Pani / Lemonade (sweet)",      category:"Beverages", unit:"ml", base:100, cal:22,  prot:0.1, carb:5.5, fat:0,   servingSize:250, servingLabel:"1 glass" },
  "nimbu pani kala namak":        { name:"Nimbu Pani (kala namak, salted)",    category:"Beverages", unit:"ml", base:100, cal:18,  prot:0.1, carb:4.5, fat:0,   servingSize:250, servingLabel:"1 glass" },
  "jaljeera":                     { name:"Jaljeera",                           category:"Beverages", unit:"ml", base:100, cal:25,  prot:0.3, carb:6,   fat:0.1, servingSize:240, servingLabel:"1 glass" },
  "aam panna":                    { name:"Aam Panna (raw mango drink)",        category:"Beverages", unit:"ml", base:100, cal:55,  prot:0.3, carb:14,  fat:0.1, servingSize:200, servingLabel:"1 glass" },
  "sugarcane juice":              { name:"Sugarcane Juice (fresh)",            category:"Beverages", unit:"ml", base:100, cal:54,  prot:0.3, carb:14,  fat:0.2, servingSize:300, servingLabel:"1 large glass" },
  "kokum sherbet":                { name:"Kokum Sherbet",                      category:"Beverages", unit:"ml", base:100, cal:38,  prot:0.2, carb:9.5, fat:0,   servingSize:240, servingLabel:"1 glass" },
  "rose milk":                    { name:"Rose Milk (with whole milk)",        category:"Beverages", unit:"ml", base:100, cal:72,  prot:2.8, carb:12,  fat:1.5, servingSize:240, servingLabel:"1 glass" },
  "badam milk":                   { name:"Badam / Almond Milk (sweetened)",    category:"Beverages", unit:"ml", base:100, cal:85,  prot:2.5, carb:11,  fat:3.5, servingSize:240, servingLabel:"1 glass" },
  "thandai":                      { name:"Thandai",                            category:"Beverages", unit:"ml", base:100, cal:110, prot:3,   carb:14,  fat:5,   servingSize:240, servingLabel:"1 glass" },
  "sharbat rooh afza":            { name:"Rooh Afza Sharbat",                  category:"Beverages", unit:"ml", base:100, cal:55,  prot:0,   carb:14,  fat:0,   servingSize:240, servingLabel:"1 glass" },
  "nannari syrup drink":          { name:"Nannari / Sarasaparilla Drink",      category:"Beverages", unit:"ml", base:100, cal:40,  prot:0,   carb:10,  fat:0,   servingSize:240, servingLabel:"1 glass" },
  "panakam":                      { name:"Panakam (jaggery + lemon drink)",    category:"Beverages", unit:"ml", base:100, cal:45,  prot:0.1, carb:11,  fat:0,   servingSize:200, servingLabel:"1 glass" },
  "sattu sharbat sweet":          { name:"Sattu Sharbat (sweet)",              category:"Beverages", unit:"ml", base:100, cal:60,  prot:2.5, carb:12,  fat:0.5, servingSize:250, servingLabel:"1 glass" },
  "sattu sharbat salted":         { name:"Sattu Sharbat (salted / namkeen)",   category:"Beverages", unit:"ml", base:100, cal:40,  prot:2.5, carb:7,   fat:0.3, servingSize:250, servingLabel:"1 glass" },
  "kanji fermented":              { name:"Kanji (fermented carrot/beetroot)",  category:"Beverages", unit:"ml", base:100, cal:22,  prot:0.5, carb:5,   fat:0.1, servingSize:300, servingLabel:"1 glass" },
  "falooda":                      { name:"Falooda (rose milk + basil + vermicelli)", category:"Beverages", unit:"ml", base:100, cal:95, prot:2.5, carb:16, fat:3, servingSize:350, servingLabel:"1 tall glass" },
  "mango milkshake":              { name:"Mango Milkshake",                    category:"Beverages", unit:"ml", base:100, cal:82,  prot:2.5, carb:15,  fat:2,   servingSize:300, servingLabel:"1 glass" },
  "banana milkshake":             { name:"Banana Milkshake",                   category:"Beverages", unit:"ml", base:100, cal:78,  prot:2.8, carb:14,  fat:1.8, servingSize:300, servingLabel:"1 glass" },
  "chikoo milkshake":             { name:"Chikoo / Sapodilla Milkshake",       category:"Beverages", unit:"ml", base:100, cal:90,  prot:2.5, carb:17,  fat:2,   servingSize:300, servingLabel:"1 glass" },
  "papaya milkshake":             { name:"Papaya Milkshake",                   category:"Beverages", unit:"ml", base:100, cal:70,  prot:2.5, carb:13,  fat:1.5, servingSize:300, servingLabel:"1 glass" },
  "strawberry milkshake":         { name:"Strawberry Milkshake",               category:"Beverages", unit:"ml", base:100, cal:72,  prot:2.8, carb:13,  fat:1.8, servingSize:300, servingLabel:"1 glass" },
  "avocado milkshake":            { name:"Avocado Milkshake",                  category:"Beverages", unit:"ml", base:100, cal:105, prot:2.5, carb:10,  fat:6.5, servingSize:300, servingLabel:"1 glass" },
  "horlicks":                     { name:"Horlicks / Malt Drink (with milk)",  category:"Beverages", unit:"ml", base:240, cal:150, prot:6,   carb:24,  fat:3,   servingSize:240, servingLabel:"1 glass" },
  "bournvita milo":               { name:"Bournvita / Milo (with milk)",       category:"Beverages", unit:"ml", base:240, cal:155, prot:6,   carb:25,  fat:3,   servingSize:240, servingLabel:"1 glass" },
  "boost complan":                { name:"Boost / Complan (with milk)",        category:"Beverages", unit:"ml", base:240, cal:145, prot:7,   carb:22,  fat:3,   servingSize:240, servingLabel:"1 glass" },

  /* ── Fruit Juices ────────────────────────────────────── */
  "orange juice fresh":           { name:"Orange Juice (fresh squeezed)",      category:"Beverages", unit:"ml", base:100, cal:45,  prot:0.7, carb:10,  fat:0.2, servingSize:240, servingLabel:"1 glass" },
  "orange juice packaged":        { name:"Orange Juice (packaged / carton)",   category:"Beverages", unit:"ml", base:100, cal:47,  prot:0.7, carb:11,  fat:0.1, servingSize:240, servingLabel:"1 glass" },
  "apple juice":                  { name:"Apple Juice",                        category:"Beverages", unit:"ml", base:100, cal:46,  prot:0.1, carb:11,  fat:0.1, servingSize:240, servingLabel:"1 glass" },
  "mango juice":                  { name:"Mango Juice / Nectar",               category:"Beverages", unit:"ml", base:100, cal:60,  prot:0.4, carb:15,  fat:0.1, servingSize:240, servingLabel:"1 glass" },
  "grape juice":                  { name:"Grape Juice (unsweetened)",          category:"Beverages", unit:"ml", base:100, cal:60,  prot:0.4, carb:15,  fat:0.1, servingSize:240, servingLabel:"1 glass" },
  "pineapple juice":              { name:"Pineapple Juice (unsweetened)",      category:"Beverages", unit:"ml", base:100, cal:50,  prot:0.4, carb:12,  fat:0.1, servingSize:240, servingLabel:"1 glass" },
  "cranberry juice":              { name:"Cranberry Juice (unsweetened)",      category:"Beverages", unit:"ml", base:100, cal:46,  prot:0.4, carb:12,  fat:0.1, servingSize:240, servingLabel:"1 glass" },
  "pomegranate juice":            { name:"Pomegranate Juice",                  category:"Beverages", unit:"ml", base:100, cal:54,  prot:0.2, carb:13,  fat:0.3, servingSize:240, servingLabel:"1 glass" },
  "watermelon juice":             { name:"Watermelon Juice (fresh)",           category:"Beverages", unit:"ml", base:100, cal:30,  prot:0.6, carb:7.5, fat:0.2, servingSize:300, servingLabel:"1 large glass" },
  "guava juice":                  { name:"Guava Juice / Nectar",               category:"Beverages", unit:"ml", base:100, cal:50,  prot:0.4, carb:12,  fat:0.1, servingSize:240, servingLabel:"1 glass" },
  "papaya juice":                 { name:"Papaya Juice (fresh)",               category:"Beverages", unit:"ml", base:100, cal:38,  prot:0.4, carb:9.4, fat:0.2, servingSize:240, servingLabel:"1 glass" },
  "lychee juice":                 { name:"Lychee Juice / Nectar",              category:"Beverages", unit:"ml", base:100, cal:64,  prot:0.4, carb:16,  fat:0,   servingSize:240, servingLabel:"1 glass" },
  "passion fruit juice":          { name:"Passion Fruit Juice",                category:"Beverages", unit:"ml", base:100, cal:53,  prot:0.4, carb:13,  fat:0.1, servingSize:240, servingLabel:"1 glass" },
  "grapefruit juice":             { name:"Grapefruit Juice (unsweetened)",     category:"Beverages", unit:"ml", base:100, cal:39,  prot:0.5, carb:9.2, fat:0.1, servingSize:240, servingLabel:"1 glass" },
  "cherry juice tart":            { name:"Cherry Juice (tart, unsweetened)",   category:"Beverages", unit:"ml", base:100, cal:50,  prot:0.3, carb:12,  fat:0.1, servingSize:240, servingLabel:"1 glass" },
  "peach nectar":                 { name:"Peach Nectar",                       category:"Beverages", unit:"ml", base:100, cal:54,  prot:0.3, carb:14,  fat:0.1, servingSize:240, servingLabel:"1 glass" },
  "lemon juice fresh":            { name:"Lemon Juice (fresh squeezed)",       category:"Beverages", unit:"ml", base:100, cal:22,  prot:0.4, carb:6.9, fat:0.2, servingSize:47,  servingLabel:"3 tbsp" },
  "lime juice fresh":             { name:"Lime Juice (fresh)",                 category:"Beverages", unit:"ml", base:100, cal:25,  prot:0.4, carb:8.4, fat:0.1, servingSize:47,  servingLabel:"3 tbsp" },
  "noni juice":                   { name:"Noni Juice",                         category:"Beverages", unit:"ml", base:100, cal:47,  prot:0.3, carb:11,  fat:0.2, servingSize:30,  servingLabel:"2 tbsp (concentrate)" },
  "aloe vera juice":              { name:"Aloe Vera Juice",                    category:"Beverages", unit:"ml", base:100, cal:8,   prot:0.1, carb:2,   fat:0,   servingSize:240, servingLabel:"1 glass" },
  "amla juice":                   { name:"Amla / Indian Gooseberry Juice",     category:"Beverages", unit:"ml", base:100, cal:25,  prot:0.3, carb:6,   fat:0.1, servingSize:30,  servingLabel:"2 tbsp" },
  "maaza mango drink":            { name:"Maaza / Slice (packaged mango drink)",category:"Beverages", unit:"ml", base:100, cal:62,  prot:0.1, carb:16,  fat:0,   servingSize:250, servingLabel:"1 small bottle" },
  "frooti":                       { name:"Frooti / Packaged Mango Drink",      category:"Beverages", unit:"ml", base:100, cal:58,  prot:0.1, carb:14,  fat:0,   servingSize:200, servingLabel:"1 tetra pack" },
  "mixed fruit juice":            { name:"Mixed Fruit Juice (packaged)",       category:"Beverages", unit:"ml", base:100, cal:55,  prot:0.3, carb:13,  fat:0.1, servingSize:240, servingLabel:"1 glass" },

  /* ── Vegetable Juices ────────────────────────────────── */
  "tomato juice":                 { name:"Tomato Juice",                       category:"Beverages", unit:"ml", base:100, cal:17,  prot:0.8, carb:3.5, fat:0.1, servingSize:240, servingLabel:"1 glass" },
  "carrot juice":                 { name:"Carrot Juice",                       category:"Beverages", unit:"ml", base:100, cal:40,  prot:0.9, carb:9.3, fat:0.2, servingSize:240, servingLabel:"1 glass" },
  "beetroot juice":               { name:"Beetroot Juice (fresh)",             category:"Beverages", unit:"ml", base:100, cal:43,  prot:1.6, carb:10,  fat:0.2, servingSize:240, servingLabel:"1 glass" },
  "cucumber juice":               { name:"Cucumber Juice (fresh)",             category:"Beverages", unit:"ml", base:100, cal:12,  prot:0.6, carb:2.2, fat:0.1, servingSize:240, servingLabel:"1 glass" },
  "spinach juice":                { name:"Spinach Juice",                      category:"Beverages", unit:"ml", base:100, cal:18,  prot:2,   carb:2.5, fat:0.3, servingSize:100, servingLabel:"small glass" },
  "wheatgrass shot":              { name:"Wheatgrass Shot",                    category:"Beverages", unit:"ml", base:30,  cal:10,  prot:1,   carb:1.5, fat:0.1, servingSize:30,  servingLabel:"1 shot" },
  "ash gourd juice":              { name:"Ash Gourd / Winter Melon Juice",     category:"Beverages", unit:"ml", base:100, cal:13,  prot:0.4, carb:3,   fat:0,   servingSize:240, servingLabel:"1 glass" },
  "lauki juice":                  { name:"Lauki / Bottle Gourd Juice",         category:"Beverages", unit:"ml", base:100, cal:12,  prot:0.4, carb:2.5, fat:0,   servingSize:240, servingLabel:"1 glass" },
  "karela juice":                 { name:"Karela / Bitter Gourd Juice",        category:"Beverages", unit:"ml", base:100, cal:15,  prot:0.5, carb:3.3, fat:0.1, servingSize:100, servingLabel:"small cup" },
  "v8 vegetable juice":           { name:"V8 / Mixed Vegetable Juice",         category:"Beverages", unit:"ml", base:100, cal:17,  prot:0.8, carb:3.6, fat:0.1, servingSize:240, servingLabel:"1 glass" },

  /* ── Smoothies ───────────────────────────────────────── */
  "green smoothie":               { name:"Green Smoothie (spinach + banana)",  category:"Beverages", unit:"ml", base:100, cal:45,  prot:1.2, carb:9.5, fat:0.4, servingSize:350, servingLabel:"1 large glass" },
  "detox green juice":            { name:"Detox Green Juice (cucumber+celery+spinach)", category:"Beverages", unit:"ml", base:100, cal:18, prot:0.8, carb:3.5, fat:0.1, servingSize:300, servingLabel:"1 glass" },
  "berry smoothie":               { name:"Berry Smoothie (mixed berries + yogurt)", category:"Beverages", unit:"ml", base:100, cal:65, prot:2, carb:13, fat:1, servingSize:350, servingLabel:"1 large glass" },
  "mango banana smoothie":        { name:"Mango Banana Smoothie (with milk)",  category:"Beverages", unit:"ml", base:100, cal:72,  prot:2,   carb:15,  fat:1.2, servingSize:350, servingLabel:"1 large glass" },
  "protein smoothie":             { name:"Protein Smoothie (whey + banana)",   category:"Beverages", unit:"ml", base:100, cal:75,  prot:6,   carb:11,  fat:1,   servingSize:400, servingLabel:"1 large glass" },
  "avocado smoothie":             { name:"Avocado Smoothie (milk + honey)",     category:"Beverages", unit:"ml", base:100, cal:110, prot:2.5, carb:10,  fat:7,   servingSize:300, servingLabel:"1 glass" },
  "peanut butter smoothie":       { name:"Peanut Butter Banana Smoothie",      category:"Beverages", unit:"ml", base:100, cal:95,  prot:4,   carb:12,  fat:4.5, servingSize:350, servingLabel:"1 large glass" },
  "acai smoothie":                { name:"Acai Smoothie",                      category:"Beverages", unit:"ml", base:100, cal:70,  prot:1.5, carb:8,   fat:4,   servingSize:300, servingLabel:"1 glass" },

  /* ── Milk & Plant-Based Milks ───────────────────────── */
  "whole milk":                   { name:"Whole Milk (3.5% fat)",              category:"Beverages", unit:"ml", base:100, cal:61,  prot:3.2, carb:4.8, fat:3.3, servingSize:240, servingLabel:"1 cup" },
  "skim milk":                    { name:"Skim / Fat-Free Milk",               category:"Beverages", unit:"ml", base:100, cal:34,  prot:3.4, carb:5,   fat:0.1, servingSize:240, servingLabel:"1 cup" },
  "low fat milk 1%":              { name:"Low-Fat Milk (1%)",                  category:"Beverages", unit:"ml", base:100, cal:42,  prot:3.4, carb:5,   fat:1,   servingSize:240, servingLabel:"1 cup" },
  "reduced fat milk 2%":          { name:"Reduced Fat Milk (2%)",              category:"Beverages", unit:"ml", base:100, cal:50,  prot:3.3, carb:4.9, fat:2,   servingSize:240, servingLabel:"1 cup" },
  "soy milk unsweetened":         { name:"Soy Milk (unsweetened)",             category:"Beverages", unit:"ml", base:100, cal:33,  prot:3.3, carb:1.7, fat:1.8, servingSize:240, servingLabel:"1 cup" },
  "soy milk sweetened":           { name:"Soy Milk (sweetened)",               category:"Beverages", unit:"ml", base:100, cal:54,  prot:3.3, carb:6.2, fat:2,   servingSize:240, servingLabel:"1 cup" },
  "almond milk unsweetened":      { name:"Almond Milk (unsweetened)",          category:"Beverages", unit:"ml", base:100, cal:15,  prot:0.6, carb:0.3, fat:1.2, servingSize:240, servingLabel:"1 cup" },
  "almond milk sweetened":        { name:"Almond Milk (sweetened, vanilla)",   category:"Beverages", unit:"ml", base:100, cal:37,  prot:0.6, carb:6,   fat:1.2, servingSize:240, servingLabel:"1 cup" },
  "oat milk unsweetened":         { name:"Oat Milk (unsweetened)",             category:"Beverages", unit:"ml", base:100, cal:47,  prot:1,   carb:8,   fat:1.5, servingSize:240, servingLabel:"1 cup" },
  "oat milk sweetened":           { name:"Oat Milk (sweetened)",               category:"Beverages", unit:"ml", base:100, cal:55,  prot:1,   carb:10,  fat:1.5, servingSize:240, servingLabel:"1 cup" },
  "coconut milk beverage":        { name:"Coconut Milk Beverage (carton)",     category:"Beverages", unit:"ml", base:100, cal:45,  prot:0.5, carb:2,   fat:4.5, servingSize:240, servingLabel:"1 cup" },
  "rice milk":                    { name:"Rice Milk",                          category:"Beverages", unit:"ml", base:100, cal:49,  prot:0.3, carb:9.2, fat:1,   servingSize:240, servingLabel:"1 cup" },
  "cashew milk":                  { name:"Cashew Milk (unsweetened)",          category:"Beverages", unit:"ml", base:100, cal:25,  prot:0.5, carb:1.5, fat:2,   servingSize:240, servingLabel:"1 cup" },
  "hemp milk":                    { name:"Hemp Milk (unsweetened)",            category:"Beverages", unit:"ml", base:100, cal:35,  prot:2,   carb:0.4, fat:3,   servingSize:240, servingLabel:"1 cup" },
  "pea milk":                     { name:"Pea Protein Milk",                   category:"Beverages", unit:"ml", base:100, cal:50,  prot:3.5, carb:4.5, fat:2.5, servingSize:240, servingLabel:"1 cup" },
  "kefir plain":                  { name:"Kefir (plain, whole milk)",          category:"Beverages", unit:"ml", base:100, cal:61,  prot:3.8, carb:5.4, fat:3,   servingSize:240, servingLabel:"1 cup" },
  "hot chocolate":                { name:"Hot Chocolate (cocoa + whole milk)", category:"Beverages", unit:"ml", base:240, cal:190, prot:6,   carb:30,  fat:6,   servingSize:240, servingLabel:"1 mug" },
  "chocolate milk":               { name:"Chocolate Milk (store-bought)",      category:"Beverages", unit:"ml", base:240, cal:208, prot:7.4, carb:31,  fat:6,   servingSize:240, servingLabel:"1 cup" },
  "golden milk turmeric":         { name:"Turmeric / Golden Milk",             category:"Beverages", unit:"ml", base:240, cal:115, prot:4,   carb:13,  fat:5,   servingSize:240, servingLabel:"1 cup" },
  "strawberry milk":              { name:"Strawberry Milk",                    category:"Beverages", unit:"ml", base:240, cal:185, prot:7,   carb:27,  fat:5,   servingSize:240, servingLabel:"1 cup" },

  /* ── Fizzy / Carbonated Drinks ──────────────────────── */
  "cola regular":                 { name:"Cola (regular, e.g. Coke/Pepsi)",    category:"Beverages", unit:"ml", base:100, cal:41,  prot:0,   carb:11,  fat:0,   servingSize:355, servingLabel:"1 can" },
  "cola diet zero":               { name:"Diet Cola / Zero Sugar",             category:"Beverages", unit:"ml", base:100, cal:1,   prot:0.1, carb:0.1, fat:0,   servingSize:355, servingLabel:"1 can" },
  "sprite 7up lemon":             { name:"Sprite / 7UP (lemon-lime soda)",     category:"Beverages", unit:"ml", base:100, cal:41,  prot:0,   carb:10,  fat:0,   servingSize:355, servingLabel:"1 can" },
  "sprite zero":                  { name:"Sprite Zero / Sugar-Free Lemon Soda",category:"Beverages", unit:"ml", base:100, cal:0,   prot:0,   carb:0.1, fat:0,   servingSize:355, servingLabel:"1 can" },
  "fanta orange":                 { name:"Fanta Orange",                       category:"Beverages", unit:"ml", base:100, cal:45,  prot:0,   carb:11,  fat:0,   servingSize:355, servingLabel:"1 can" },
  "ginger ale":                   { name:"Ginger Ale",                         category:"Beverages", unit:"ml", base:100, cal:34,  prot:0,   carb:8.9, fat:0,   servingSize:355, servingLabel:"1 can" },
  "root beer":                    { name:"Root Beer",                          category:"Beverages", unit:"ml", base:100, cal:41,  prot:0,   carb:10,  fat:0,   servingSize:355, servingLabel:"1 can" },
  "cream soda":                   { name:"Cream Soda",                         category:"Beverages", unit:"ml", base:100, cal:51,  prot:0,   carb:13,  fat:0,   servingSize:355, servingLabel:"1 can" },
  "grape soda":                   { name:"Grape Soda",                         category:"Beverages", unit:"ml", base:100, cal:42,  prot:0,   carb:11,  fat:0,   servingSize:355, servingLabel:"1 can" },
  "mountain dew":                 { name:"Mountain Dew",                       category:"Beverages", unit:"ml", base:100, cal:46,  prot:0,   carb:12,  fat:0,   servingSize:355, servingLabel:"1 can" },
  "limca":                        { name:"Limca / Lemon Soda (India)",         category:"Beverages", unit:"ml", base:100, cal:43,  prot:0,   carb:11,  fat:0,   servingSize:300, servingLabel:"1 bottle" },
  "thums up":                     { name:"Thums Up / Indian Cola",             category:"Beverages", unit:"ml", base:100, cal:44,  prot:0,   carb:11,  fat:0,   servingSize:300, servingLabel:"1 bottle" },
  "dr pepper":                    { name:"Dr Pepper",                          category:"Beverages", unit:"ml", base:100, cal:43,  prot:0,   carb:11,  fat:0,   servingSize:355, servingLabel:"1 can" },
  "san pellegrino":               { name:"San Pellegrino (sparkling mineral)", category:"Beverages", unit:"ml", base:100, cal:0,   prot:0,   carb:0,   fat:0,   servingSize:500, servingLabel:"1 bottle" },
  "soda water club":              { name:"Club Soda / Soda Water",             category:"Beverages", unit:"ml", base:100, cal:0,   prot:0,   carb:0,   fat:0,   servingSize:355, servingLabel:"1 can" },
  "tonic water regular":          { name:"Tonic Water (regular, quinine)",     category:"Beverages", unit:"ml", base:100, cal:34,  prot:0,   carb:8.8, fat:0,   servingSize:355, servingLabel:"1 can" },

  /* ── Energy & Sports Drinks ─────────────────────────── */
  "red bull regular":             { name:"Red Bull (original, regular)",       category:"Beverages", unit:"ml", base:100, cal:45,  prot:0,   carb:11,  fat:0,   servingSize:250, servingLabel:"1 can (250ml)" },
  "red bull sugar free":          { name:"Red Bull (sugar-free)",              category:"Beverages", unit:"ml", base:100, cal:7,   prot:0.4, carb:0.4, fat:0,   servingSize:250, servingLabel:"1 can (250ml)" },
  "monster energy original":      { name:"Monster Energy (original)",          category:"Beverages", unit:"ml", base:100, cal:46,  prot:0,   carb:11,  fat:0,   servingSize:473, servingLabel:"1 large can" },
  "monster zero ultra":           { name:"Monster Zero Ultra (sugar-free)",    category:"Beverages", unit:"ml", base:100, cal:5,   prot:0,   carb:0.7, fat:0,   servingSize:473, servingLabel:"1 large can" },
  "gatorade original":            { name:"Gatorade / Sports Drink (original)", category:"Beverages", unit:"ml", base:100, cal:26,  prot:0,   carb:6.9, fat:0,   servingSize:591, servingLabel:"1 bottle" },
  "gatorade zero":                { name:"Gatorade Zero",                      category:"Beverages", unit:"ml", base:100, cal:3,   prot:0,   carb:0.6, fat:0,   servingSize:591, servingLabel:"1 bottle" },
  "powerade":                     { name:"Powerade",                           category:"Beverages", unit:"ml", base:100, cal:25,  prot:0,   carb:6.7, fat:0,   servingSize:591, servingLabel:"1 bottle" },
  "celsius energy":               { name:"Celsius Energy Drink",               category:"Beverages", unit:"ml", base:100, cal:6,   prot:0,   carb:1,   fat:0,   servingSize:355, servingLabel:"1 can" },
  "sting energy":                 { name:"Sting Energy Drink (India)",         category:"Beverages", unit:"ml", base:100, cal:47,  prot:0,   carb:12,  fat:0,   servingSize:250, servingLabel:"1 can" },
  "electrolyte water":            { name:"Electrolyte / Enhanced Water",       category:"Beverages", unit:"ml", base:100, cal:2,   prot:0,   carb:0.5, fat:0,   servingSize:500, servingLabel:"1 bottle" },
  "ors oral rehydration":         { name:"ORS / Oral Rehydration Solution",    category:"Beverages", unit:"ml", base:100, cal:10,  prot:0,   carb:2.5, fat:0,   servingSize:240, servingLabel:"1 cup" },

  /* ── Kombucha & Fermented ────────────────────────────── */
  "kombucha plain":               { name:"Kombucha (plain, unflavoured)",      category:"Beverages", unit:"ml", base:100, cal:13,  prot:0,   carb:3,   fat:0,   servingSize:240, servingLabel:"1 cup" },
  "kombucha ginger lemon":        { name:"Kombucha (ginger + lemon)",          category:"Beverages", unit:"ml", base:100, cal:16,  prot:0,   carb:3.8, fat:0,   servingSize:240, servingLabel:"1 cup" },
  "water kefir":                  { name:"Water Kefir",                        category:"Beverages", unit:"ml", base:100, cal:30,  prot:0,   carb:7,   fat:0,   servingSize:240, servingLabel:"1 cup" },

  /* ── Alcohol — Beer ──────────────────────────────────── */
  "beer regular lager":           { name:"Beer (regular lager, 5% ABV)",       category:"Beverages", unit:"ml", base:100, cal:43,  prot:0.5, carb:3.6, fat:0,   servingSize:355, servingLabel:"1 can" },
  "beer light":                   { name:"Light Beer (3.5–4% ABV)",            category:"Beverages", unit:"ml", base:100, cal:29,  prot:0.3, carb:1.6, fat:0,   servingSize:355, servingLabel:"1 can" },
  "beer ipa":                     { name:"IPA (India Pale Ale, ~6% ABV)",      category:"Beverages", unit:"ml", base:100, cal:58,  prot:0.5, carb:5.5, fat:0,   servingSize:355, servingLabel:"1 can" },
  "beer stout":                   { name:"Stout / Guinness (~4.2% ABV)",       category:"Beverages", unit:"ml", base:100, cal:40,  prot:0.5, carb:3.5, fat:0,   servingSize:355, servingLabel:"1 pint" },
  "beer wheat":                   { name:"Wheat Beer / Hefeweizen",            category:"Beverages", unit:"ml", base:100, cal:43,  prot:0.6, carb:4.1, fat:0,   servingSize:355, servingLabel:"1 can" },
  "beer kingfisher":              { name:"Kingfisher Beer (India, 4.8% ABV)",  category:"Beverages", unit:"ml", base:100, cal:43,  prot:0.4, carb:3.8, fat:0,   servingSize:330, servingLabel:"1 bottle" },
  "beer non alcoholic":           { name:"Non-Alcoholic Beer (0.5%)",          category:"Beverages", unit:"ml", base:100, cal:21,  prot:0.3, carb:4.6, fat:0,   servingSize:355, servingLabel:"1 can" },
  "hard cider apple":             { name:"Hard Cider (apple, ~5% ABV)",        category:"Beverages", unit:"ml", base:100, cal:48,  prot:0,   carb:5.9, fat:0,   servingSize:355, servingLabel:"1 can" },

  /* ── Alcohol — Wine ──────────────────────────────────── */
  "wine red dry":                 { name:"Red Wine (dry, e.g. Cabernet)",      category:"Beverages", unit:"ml", base:100, cal:85,  prot:0.1, carb:2.6, fat:0,   servingSize:148, servingLabel:"5 oz glass" },
  "wine white dry":               { name:"White Wine (dry, e.g. Sauvignon Blanc)", category:"Beverages", unit:"ml", base:100, cal:82, prot:0.1, carb:2.6, fat:0,   servingSize:148, servingLabel:"5 oz glass" },
  "wine rose":                    { name:"Rose Wine",                          category:"Beverages", unit:"ml", base:100, cal:83,  prot:0.1, carb:3,   fat:0,   servingSize:148, servingLabel:"5 oz glass" },
  "wine sparkling champagne":     { name:"Champagne / Sparkling Wine",         category:"Beverages", unit:"ml", base:100, cal:76,  prot:0.3, carb:2.8, fat:0,   servingSize:148, servingLabel:"5 oz flute" },
  "wine prosecco":                { name:"Prosecco",                           category:"Beverages", unit:"ml", base:100, cal:80,  prot:0.2, carb:3.4, fat:0,   servingSize:148, servingLabel:"5 oz flute" },
  "wine port":                    { name:"Port Wine (fortified, sweet)",        category:"Beverages", unit:"ml", base:100, cal:162, prot:0.2, carb:13,  fat:0,   servingSize:59,  servingLabel:"2 oz" },
  "wine sangria":                 { name:"Sangria (wine + fruit + brandy)",    category:"Beverages", unit:"ml", base:100, cal:76,  prot:0.2, carb:8.5, fat:0,   servingSize:240, servingLabel:"1 glass" },
  "wine mulled hot":              { name:"Mulled Wine (hot, spiced)",           category:"Beverages", unit:"ml", base:100, cal:95,  prot:0.2, carb:9,   fat:0,   servingSize:200, servingLabel:"1 mug" },

  /* ── Alcohol — Spirits ───────────────────────────────── */
  "vodka":                        { name:"Vodka (40% ABV)",                    category:"Beverages", unit:"ml", base:100, cal:231, prot:0,   carb:0,   fat:0,   servingSize:44,  servingLabel:"1.5 oz shot" },
  "whisky scotch":                { name:"Scotch / Whisky (40% ABV)",          category:"Beverages", unit:"ml", base:100, cal:250, prot:0,   carb:0.1, fat:0,   servingSize:44,  servingLabel:"1.5 oz shot" },
  "whisky bourbon":               { name:"Bourbon Whiskey",                    category:"Beverages", unit:"ml", base:100, cal:231, prot:0,   carb:0,   fat:0,   servingSize:44,  servingLabel:"1.5 oz shot" },
  "rum dark":                     { name:"Dark Rum (40% ABV)",                 category:"Beverages", unit:"ml", base:100, cal:231, prot:0,   carb:0,   fat:0,   servingSize:44,  servingLabel:"1.5 oz shot" },
  "rum white":                    { name:"White Rum",                          category:"Beverages", unit:"ml", base:100, cal:231, prot:0,   carb:0,   fat:0,   servingSize:44,  servingLabel:"1.5 oz shot" },
  "gin":                          { name:"Gin (40% ABV)",                      category:"Beverages", unit:"ml", base:100, cal:263, prot:0,   carb:0,   fat:0,   servingSize:44,  servingLabel:"1.5 oz shot" },
  "tequila":                      { name:"Tequila (40% ABV)",                  category:"Beverages", unit:"ml", base:100, cal:231, prot:0,   carb:0,   fat:0,   servingSize:44,  servingLabel:"1.5 oz shot" },
  "brandy cognac":                { name:"Brandy / Cognac (40% ABV)",          category:"Beverages", unit:"ml", base:100, cal:231, prot:0,   carb:0.5, fat:0,   servingSize:44,  servingLabel:"1.5 oz shot" },
  "sake":                         { name:"Sake (rice wine, ~15% ABV)",         category:"Beverages", unit:"ml", base:100, cal:134, prot:0.5, carb:5,   fat:0,   servingSize:90,  servingLabel:"3 oz" },
  "soju":                         { name:"Soju (Korean, ~20–25% ABV)",         category:"Beverages", unit:"ml", base:100, cal:143, prot:0,   carb:5,   fat:0,   servingSize:50,  servingLabel:"1 shot glass" },
  "absinthe":                     { name:"Absinthe (~68% ABV)",                category:"Beverages", unit:"ml", base:100, cal:400, prot:0,   carb:0,   fat:0,   servingSize:30,  servingLabel:"1 oz" },
  "mezcal":                       { name:"Mezcal (40% ABV)",                   category:"Beverages", unit:"ml", base:100, cal:231, prot:0,   carb:0,   fat:0,   servingSize:44,  servingLabel:"1.5 oz" },

  /* ── Cocktails & Mixed Drinks ────────────────────────── */
  "cocktail margarita":           { name:"Margarita",                          category:"Beverages", unit:"ml", base:100, cal:153, prot:0.1, carb:12,  fat:0,   servingSize:250, servingLabel:"1 cocktail" },
  "cocktail mojito":              { name:"Mojito",                             category:"Beverages", unit:"ml", base:100, cal:100, prot:0.2, carb:14,  fat:0,   servingSize:240, servingLabel:"1 cocktail" },
  "cocktail pina colada":         { name:"Pina Colada",                        category:"Beverages", unit:"ml", base:100, cal:199, prot:0.9, carb:23,  fat:8.5, servingSize:250, servingLabel:"1 cocktail" },
  "cocktail gin tonic":           { name:"Gin & Tonic",                        category:"Beverages", unit:"ml", base:100, cal:90,  prot:0,   carb:7,   fat:0,   servingSize:240, servingLabel:"1 cocktail" },
  "cocktail vodka soda":          { name:"Vodka Soda",                         category:"Beverages", unit:"ml", base:100, cal:50,  prot:0,   carb:0,   fat:0,   servingSize:240, servingLabel:"1 cocktail" },
  "cocktail rum coke":            { name:"Rum & Coke (Cuba Libre)",            category:"Beverages", unit:"ml", base:100, cal:92,  prot:0,   carb:9.5, fat:0,   servingSize:300, servingLabel:"1 cocktail" },
  "cocktail whisky sour":         { name:"Whisky Sour",                        category:"Beverages", unit:"ml", base:100, cal:155, prot:0.5, carb:14,  fat:0,   servingSize:100, servingLabel:"1 cocktail" },
  "cocktail cosmopolitan":        { name:"Cosmopolitan",                       category:"Beverages", unit:"ml", base:100, cal:165, prot:0,   carb:15,  fat:0,   servingSize:100, servingLabel:"1 cocktail" },
  "cocktail tequila sunrise":     { name:"Tequila Sunrise",                    category:"Beverages", unit:"ml", base:100, cal:128, prot:0.3, carb:15,  fat:0,   servingSize:250, servingLabel:"1 cocktail" },
  "cocktail mai tai":             { name:"Mai Tai",                            category:"Beverages", unit:"ml", base:100, cal:165, prot:0,   carb:16,  fat:0,   servingSize:250, servingLabel:"1 cocktail" },
  "cocktail long island iced tea":{ name:"Long Island Iced Tea",               category:"Beverages", unit:"ml", base:100, cal:176, prot:0,   carb:11,  fat:0,   servingSize:350, servingLabel:"1 cocktail" },
  "cocktail aperol spritz":       { name:"Aperol Spritz",                      category:"Beverages", unit:"ml", base:100, cal:75,  prot:0.1, carb:8.5, fat:0,   servingSize:240, servingLabel:"1 glass" },
  "cocktail moscow mule":         { name:"Moscow Mule",                        category:"Beverages", unit:"ml", base:100, cal:105, prot:0,   carb:9,   fat:0,   servingSize:300, servingLabel:"1 copper mug" },
  "cocktail bloody mary":         { name:"Bloody Mary",                        category:"Beverages", unit:"ml", base:100, cal:80,  prot:0.8, carb:5.5, fat:0,   servingSize:300, servingLabel:"1 cocktail" },
  "cocktail daiquiri":            { name:"Daiquiri",                           category:"Beverages", unit:"ml", base:100, cal:150, prot:0.1, carb:14,  fat:0,   servingSize:100, servingLabel:"1 cocktail" },
  "cocktail negroni":             { name:"Negroni",                            category:"Beverages", unit:"ml", base:100, cal:225, prot:0,   carb:11,  fat:0,   servingSize:90,  servingLabel:"1 cocktail" },
  "cocktail old fashioned":       { name:"Old Fashioned",                      category:"Beverages", unit:"ml", base:100, cal:215, prot:0,   carb:5,   fat:0,   servingSize:90,  servingLabel:"1 cocktail" },
  "cocktail paloma":              { name:"Paloma (tequila + grapefruit soda)", category:"Beverages", unit:"ml", base:100, cal:100, prot:0.1, carb:9.5, fat:0,   servingSize:250, servingLabel:"1 cocktail" },
  "cocktail shandy":              { name:"Shandy (beer + lemon/lime soda)",    category:"Beverages", unit:"ml", base:100, cal:28,  prot:0.3, carb:5.5, fat:0,   servingSize:355, servingLabel:"1 glass" },
  "cocktail screwdriver":         { name:"Screwdriver (vodka + OJ)",           category:"Beverages", unit:"ml", base:100, cal:95,  prot:0.3, carb:8,   fat:0,   servingSize:240, servingLabel:"1 cocktail" },
  "cocktail sex on beach":        { name:"Sex on the Beach",                   category:"Beverages", unit:"ml", base:100, cal:118, prot:0.2, carb:14,  fat:0,   servingSize:250, servingLabel:"1 cocktail" },
  "cocktail martini":             { name:"Dry Martini",                        category:"Beverages", unit:"ml", base:100, cal:220, prot:0,   carb:0.3, fat:0,   servingSize:75,  servingLabel:"1 cocktail" },
  "cocktail espresso martini":    { name:"Espresso Martini",                   category:"Beverages", unit:"ml", base:100, cal:190, prot:0.5, carb:13,  fat:0,   servingSize:90,  servingLabel:"1 cocktail" },
  "cocktail blue lagoon":         { name:"Blue Lagoon",                        category:"Beverages", unit:"ml", base:100, cal:115, prot:0.1, carb:13,  fat:0,   servingSize:250, servingLabel:"1 cocktail" },

  /* ── Health, Supplement & Functional Drinks ─────────── */
  "whey protein shake":           { name:"Whey Protein Shake (1 scoop + water)", category:"Beverages", unit:"g", base:30, cal:120, prot:25, carb:3, fat:1.5, servingSize:30, servingLabel:"1 scoop", countable:{ unitName:"scoop", gramsEach:30 } },
  "casein protein shake":         { name:"Casein Protein Shake (1 scoop)",     category:"Beverages", unit:"g", base:34, cal:120, prot:24, carb:4, fat:1, servingSize:34, servingLabel:"1 scoop", countable:{ unitName:"scoop", gramsEach:34 } },
  "plant protein shake":          { name:"Plant Protein Shake (1 scoop)",      category:"Beverages", unit:"g", base:30, cal:110, prot:21, carb:5, fat:2, servingSize:30, servingLabel:"1 scoop", countable:{ unitName:"scoop", gramsEach:30 } },
  "mass gainer shake":            { name:"Mass Gainer Shake (1 serving)",      category:"Beverages", unit:"g", base:100, cal:400, prot:24,  carb:70,  fat:5,   servingSize:100, servingLabel:"1 serving" },
  "apple cider vinegar drink":    { name:"Apple Cider Vinegar Drink (diluted)",category:"Beverages", unit:"ml", base:100, cal:3,   prot:0,   carb:0.5, fat:0,   servingSize:240, servingLabel:"1 glass (1 tbsp ACV)" },
  "turmeric golden milk":         { name:"Turmeric / Golden Milk Latte",       category:"Beverages", unit:"ml", base:240, cal:115, prot:4,   carb:13,  fat:5,   servingSize:240, servingLabel:"1 cup" },
  "ashwagandha latte":            { name:"Ashwagandha Latte (with milk)",      category:"Beverages", unit:"ml", base:240, cal:100, prot:4,   carb:12,  fat:3.5, servingSize:240, servingLabel:"1 cup" },
  "moringa drink":                { name:"Moringa / Drumstick Leaf Drink",     category:"Beverages", unit:"ml", base:240, cal:20,  prot:1.5, carb:3,   fat:0.2, servingSize:240, servingLabel:"1 glass" },
  "turmeric shot":                { name:"Turmeric Shot (ginger + lemon)",     category:"Beverages", unit:"ml", base:60,  cal:20,  prot:0.3, carb:4.5, fat:0.2, servingSize:60,  servingLabel:"1 shot" },
  "ginger shot":                  { name:"Ginger Shot (concentrated)",         category:"Beverages", unit:"ml", base:30,  cal:10,  prot:0.1, carb:2.2, fat:0,   servingSize:30,  servingLabel:"1 shot" },
  "collagen drink":               { name:"Collagen Peptide Drink",             category:"Beverages", unit:"g", base:10, cal:35,   prot:9,   carb:0,   fat:0,   servingSize:10,  servingLabel:"1 scoop" },
  "nutritional yeast drink":      { name:"Nutritional Yeast in Water",         category:"Beverages", unit:"g", base:100, cal:325, prot:52,  carb:37,  fat:4,   servingSize:15,  servingLabel:"2 tbsp" },
  
  
  








/* ══════════════════════════════════════════════════════
     🫒  OILS, FATS & CONDIMENTS — COMPLETE SECTION
  ══════════════════════════════════════════════════════ */

  /* ── Cooking Oils ──────────────────────────────────── */
  "olive oil extra virgin":       { name:"Olive Oil (extra virgin)",           category:"Oils & Fats", unit:"ml", base:100, cal:884, prot:0,   carb:0,   fat:100, servingSize:14, servingLabel:"1 tbsp" },
  "olive oil light":              { name:"Olive Oil (light / refined)",        category:"Oils & Fats", unit:"ml", base:100, cal:884, prot:0,   carb:0,   fat:100, servingSize:14, servingLabel:"1 tbsp" },
  "coconut oil refined":          { name:"Coconut Oil (refined)",              category:"Oils & Fats", unit:"ml", base:100, cal:892, prot:0,   carb:0,   fat:100, servingSize:14, servingLabel:"1 tbsp" },
  "coconut oil virgin":           { name:"Coconut Oil (virgin / cold-pressed)",category:"Oils & Fats", unit:"ml", base:100, cal:892, prot:0,   carb:0,   fat:100, servingSize:14, servingLabel:"1 tbsp" },
  "sunflower oil":                { name:"Sunflower Oil",                      category:"Oils & Fats", unit:"ml", base:100, cal:884, prot:0,   carb:0,   fat:100, servingSize:14, servingLabel:"1 tbsp" },
  "mustard oil":                  { name:"Mustard Oil",                        category:"Oils & Fats", unit:"ml", base:100, cal:884, prot:0,   carb:0,   fat:100, servingSize:14, servingLabel:"1 tbsp" },
  "groundnut peanut oil":         { name:"Groundnut / Peanut Oil",             category:"Oils & Fats", unit:"ml", base:100, cal:884, prot:0,   carb:0,   fat:100, servingSize:14, servingLabel:"1 tbsp" },
  "sesame oil toasted":           { name:"Sesame Oil (toasted)",               category:"Oils & Fats", unit:"ml", base:100, cal:884, prot:0,   carb:0,   fat:100, servingSize:14, servingLabel:"1 tbsp" },
  "sesame oil light":             { name:"Sesame Oil (light / untoasted)",     category:"Oils & Fats", unit:"ml", base:100, cal:884, prot:0,   carb:0,   fat:100, servingSize:14, servingLabel:"1 tbsp" },
  "rice bran oil":                { name:"Rice Bran Oil",                      category:"Oils & Fats", unit:"ml", base:100, cal:884, prot:0,   carb:0,   fat:100, servingSize:14, servingLabel:"1 tbsp" },
  "canola rapeseed oil":          { name:"Canola / Rapeseed Oil",              category:"Oils & Fats", unit:"ml", base:100, cal:884, prot:0,   carb:0,   fat:100, servingSize:14, servingLabel:"1 tbsp" },
  "vegetable oil":                { name:"Vegetable Oil (generic blend)",      category:"Oils & Fats", unit:"ml", base:100, cal:884, prot:0,   carb:0,   fat:100, servingSize:14, servingLabel:"1 tbsp" },
  "corn oil":                     { name:"Corn Oil",                           category:"Oils & Fats", unit:"ml", base:100, cal:884, prot:0,   carb:0,   fat:100, servingSize:14, servingLabel:"1 tbsp" },
  "soybean oil":                  { name:"Soybean Oil",                        category:"Oils & Fats", unit:"ml", base:100, cal:884, prot:0,   carb:0,   fat:100, servingSize:14, servingLabel:"1 tbsp" },
  "grapeseed oil":                { name:"Grapeseed Oil",                      category:"Oils & Fats", unit:"ml", base:100, cal:884, prot:0,   carb:0,   fat:100, servingSize:14, servingLabel:"1 tbsp" },
  "avocado oil":                  { name:"Avocado Oil",                        category:"Oils & Fats", unit:"ml", base:100, cal:884, prot:0,   carb:0,   fat:100, servingSize:14, servingLabel:"1 tbsp" },
  "flaxseed linseed oil":         { name:"Flaxseed / Linseed Oil",             category:"Oils & Fats", unit:"ml", base:100, cal:884, prot:0,   carb:0,   fat:100, servingSize:14, servingLabel:"1 tbsp" },
  "walnut oil":                   { name:"Walnut Oil",                         category:"Oils & Fats", unit:"ml", base:100, cal:884, prot:0,   carb:0,   fat:100, servingSize:14, servingLabel:"1 tbsp" },
  "almond oil":                   { name:"Almond Oil",                         category:"Oils & Fats", unit:"ml", base:100, cal:884, prot:0,   carb:0,   fat:100, servingSize:14, servingLabel:"1 tbsp" },
  "palm oil red":                 { name:"Red Palm Oil",                       category:"Oils & Fats", unit:"ml", base:100, cal:884, prot:0,   carb:0,   fat:100, servingSize:14, servingLabel:"1 tbsp" },
  "mcct oil":                     { name:"MCT Oil (medium-chain triglyceride)","category":"Oils & Fats", unit:"ml", base:100, cal:865, prot:0,   carb:0,   fat:100, servingSize:14, servingLabel:"1 tbsp" },
  "ghee clarified":               { name:"Ghee (clarified butter)",            category:"Oils & Fats", unit:"g",  base:100, cal:900, prot:0,   carb:0,   fat:100, servingSize:14, servingLabel:"1 tbsp" },
  "butter salted cooking":        { name:"Butter (salted, for cooking)",       category:"Oils & Fats", unit:"g",  base:100, cal:717, prot:0.9, carb:0.1, fat:81,  servingSize:14, servingLabel:"1 tbsp" },
  "lard pork fat":                { name:"Lard / Pork Fat",                    category:"Oils & Fats", unit:"g",  base:100, cal:902, prot:0,   carb:0,   fat:100, servingSize:13, servingLabel:"1 tbsp" },
  "spray oil cooking":            { name:"Cooking Spray Oil (per 1 second)",   category:"Oils & Fats", unit:"g",  base:0.3, cal:3,   prot:0,   carb:0,   fat:0.3, servingSize:0.3,servingLabel:"1 spray",  countable:{ unitName:"spray",  gramsEach:0.3 } },

  /* ── Butter & Margarine ────────────────────────────── */
  "butter unsalted":              { name:"Butter (unsalted)",                  category:"Condiments", unit:"g",  base:100, cal:717, prot:0.9, carb:0.1, fat:81,  servingSize:14, servingLabel:"1 tbsp" },
  "butter salted":                { name:"Butter (salted)",                    category:"Condiments", unit:"g",  base:100, cal:717, prot:0.9, carb:0.1, fat:81,  servingSize:14, servingLabel:"1 tbsp" },
  "butter whipped":               { name:"Whipped Butter",                     category:"Condiments", unit:"g",  base:100, cal:717, prot:0.9, carb:0.1, fat:81,  servingSize:9,  servingLabel:"1 tbsp" },
  "butter peanut cooking":        { name:"Peanut Butter (cooking use)",        category:"Condiments", unit:"g",  base:100, cal:588, prot:25,  carb:20,  fat:50,  servingSize:32, servingLabel:"2 tbsp" },
  "margarine regular":            { name:"Margarine (regular)",                category:"Condiments", unit:"g",  base:100, cal:719, prot:0.2, carb:0.9, fat:81,  servingSize:14, servingLabel:"1 tbsp" },
  "margarine light":              { name:"Margarine (light / reduced-fat)",    category:"Condiments", unit:"g",  base:100, cal:394, prot:0.1, carb:0.5, fat:44,  servingSize:14, servingLabel:"1 tbsp" },
  "spread light dairy":           { name:"Dairy Spread (low-fat, e.g. Flora)", category:"Condiments", unit:"g",  base:100, cal:383, prot:0.4, carb:1,   fat:42,  servingSize:10, servingLabel:"1 tsp" },

  /* ── Tomato-Based Sauces ───────────────────────────── */
  "ketchup tomato":               { name:"Ketchup / Tomato Sauce",             category:"Condiments", unit:"g",  base:100, cal:112, prot:1.4, carb:27,  fat:0.1, servingSize:17, servingLabel:"1 tbsp" },
  "ketchup reduced sugar":        { name:"Ketchup (reduced sugar / no-added-sugar)", category:"Condiments", unit:"g", base:100, cal:75, prot:2, carb:17,  fat:0.1, servingSize:17, servingLabel:"1 tbsp" },
  "tomato paste":                 { name:"Tomato Paste / Purée",               category:"Condiments", unit:"g",  base:100, cal:82,  prot:4.3, carb:19,  fat:0.5, servingSize:16, servingLabel:"1 tbsp" },
  "tomato sauce marinara":        { name:"Marinara / Tomato Pasta Sauce",      category:"Condiments", unit:"g",  base:100, cal:54,  prot:1.7, carb:9.5, fat:1.5, servingSize:130, servingLabel:"½ cup" },
  "pizza sauce":                  { name:"Pizza Sauce",                        category:"Condiments", unit:"g",  base:100, cal:45,  prot:1.5, carb:8,   fat:1,   servingSize:30, servingLabel:"2 tbsp" },
  "tomato salsa jar":             { name:"Salsa (tomato, jar)",                category:"Condiments", unit:"g",  base:100, cal:36,  prot:1.5, carb:7.5, fat:0.4, servingSize:30, servingLabel:"2 tbsp" },
  "pico de gallo":                { name:"Pico de Gallo (fresh salsa)",        category:"Condiments", unit:"g",  base:100, cal:25,  prot:1,   carb:5,   fat:0.2, servingSize:60, servingLabel:"¼ cup" },
  "sun dried tomato pesto":       { name:"Sun-Dried Tomato Pesto",             category:"Condiments", unit:"g",  base:100, cal:395, prot:6,   carb:22,  fat:32,  servingSize:30, servingLabel:"2 tbsp" },
  "arrabiata sauce":              { name:"Arrabiata Sauce (spicy tomato)",     category:"Condiments", unit:"g",  base:100, cal:60,  prot:1.8, carb:10,  fat:2,   servingSize:130, servingLabel:"½ cup" },

  /* ── Asian Sauces & Condiments ─────────────────────── */
  "soy sauce regular":            { name:"Soy Sauce (regular / shoyu)",        category:"Condiments", unit:"ml", base:100, cal:53,  prot:8,   carb:5,   fat:0.1, servingSize:16, servingLabel:"1 tbsp" },
  "soy sauce low sodium":         { name:"Soy Sauce (low sodium / lite)",      category:"Condiments", unit:"ml", base:100, cal:46,  prot:7.7, carb:4.5, fat:0.1, servingSize:16, servingLabel:"1 tbsp" },
  "soy sauce dark":               { name:"Dark Soy Sauce",                     category:"Condiments", unit:"ml", base:100, cal:90,  prot:8,   carb:16,  fat:0.3, servingSize:16, servingLabel:"1 tbsp" },
  "tamari gluten free soy":       { name:"Tamari (gluten-free soy sauce)",     category:"Condiments", unit:"ml", base:100, cal:60,  prot:10,  carb:5,   fat:0.1, servingSize:16, servingLabel:"1 tbsp" },
  "coconut aminos":               { name:"Coconut Aminos (soy-free)",          category:"Condiments", unit:"ml", base:100, cal:90,  prot:1,   carb:22,  fat:0,   servingSize:16, servingLabel:"1 tbsp" },
  "oyster sauce":                 { name:"Oyster Sauce",                       category:"Condiments", unit:"g",  base:100, cal:105, prot:1.7, carb:18,  fat:1.8, servingSize:16, servingLabel:"1 tbsp" },
  "hoisin sauce":                 { name:"Hoisin Sauce",                       category:"Condiments", unit:"g",  base:100, cal:220, prot:3.9, carb:42,  fat:3,   servingSize:16, servingLabel:"1 tbsp" },
  "teriyaki sauce":               { name:"Teriyaki Sauce",                     category:"Condiments", unit:"ml", base:100, cal:90,  prot:5,   carb:17,  fat:0.1, servingSize:15, servingLabel:"1 tbsp" },
  "fish sauce nam pla":           { name:"Fish Sauce (Nam Pla)",               category:"Condiments", unit:"ml", base:100, cal:35,  prot:5,   carb:3.6, fat:0,   servingSize:15, servingLabel:"1 tbsp" },
  "sweet chilli sauce":           { name:"Sweet Chilli Sauce",                 category:"Condiments", unit:"g",  base:100, cal:180, prot:0.5, carb:45,  fat:0.1, servingSize:15, servingLabel:"1 tbsp" },
  "plum sauce":                   { name:"Plum / Duck Sauce",                  category:"Condiments", unit:"g",  base:100, cal:224, prot:0.4, carb:56,  fat:0.1, servingSize:15, servingLabel:"1 tbsp" },
  "ponzu sauce":                  { name:"Ponzu Sauce (citrus soy)",           category:"Condiments", unit:"ml", base:100, cal:45,  prot:3.5, carb:7,   fat:0,   servingSize:15, servingLabel:"1 tbsp" },
  "mirin sweet sake":             { name:"Mirin (Japanese sweet rice wine)",   category:"Condiments", unit:"ml", base:100, cal:218, prot:0.4, carb:43,  fat:0,   servingSize:15, servingLabel:"1 tbsp" },
  "rice wine vinegar":            { name:"Rice Wine Vinegar",                  category:"Condiments", unit:"ml", base:100, cal:18,  prot:0,   carb:1,   fat:0,   servingSize:15, servingLabel:"1 tbsp" },
  "chinkiang black vinegar":      { name:"Chinkiang Black Vinegar",            category:"Condiments", unit:"ml", base:100, cal:35,  prot:0.5, carb:8,   fat:0,   servingSize:15, servingLabel:"1 tbsp" },
  "sambal oelek":                 { name:"Sambal Oelek (chilli paste)",        category:"Condiments", unit:"g",  base:100, cal:35,  prot:1.5, carb:6.5, fat:0.5, servingSize:10, servingLabel:"1 tsp" },
  "gochujang korean chilli":      { name:"Gochujang (Korean chilli paste)",    category:"Condiments", unit:"g",  base:100, cal:235, prot:5,   carb:46,  fat:3.5, servingSize:15, servingLabel:"1 tbsp" },
  "doenjang korean soy paste":    { name:"Doenjang (Korean fermented soy paste)", category:"Condiments", unit:"g", base:100, cal:188, prot:12, carb:27,  fat:5,   servingSize:17, servingLabel:"1 tbsp" },
  "gochugaru korean chilli flakes": { name:"Gochugaru (Korean chilli flakes)", category:"Condiments", unit:"g",  base:100, cal:315, prot:12,  carb:52,  fat:9,   servingSize:3,  servingLabel:"1 tsp" },
  "tahini sesame paste cond":     { name:"Tahini / Sesame Paste",              category:"Condiments", unit:"g",  base:100, cal:595, prot:17,  carb:21,  fat:53,  servingSize:15, servingLabel:"1 tbsp" },
  "miso paste white cond":        { name:"White Miso Paste",                   category:"Condiments", unit:"g",  base:100, cal:199, prot:12,  carb:27,  fat:6,   servingSize:17, servingLabel:"1 tbsp" },

  /* ── Hot Sauces & Chilli Condiments ────────────────── */
  "sriracha":                     { name:"Sriracha Hot Sauce",                 category:"Condiments", unit:"g",  base:100, cal:93,  prot:1.5, carb:19,  fat:0.4, servingSize:6,  servingLabel:"1 tsp" },
  "tabasco hot sauce":            { name:"Tabasco (original red pepper sauce)",category:"Condiments", unit:"ml", base:100, cal:12,  prot:0.5, carb:2.5, fat:0,   servingSize:5,  servingLabel:"1 tsp" },
  "frank red hot":                { name:"Frank's Red Hot Sauce",              category:"Condiments", unit:"ml", base:100, cal:25,  prot:0.6, carb:5.5, fat:0,   servingSize:5,  servingLabel:"1 tsp" },
  "harissa paste":                { name:"Harissa (North African chilli paste)",category:"Condiments", unit:"g", base:100, cal:100, prot:3,   carb:10,  fat:6,   servingSize:15, servingLabel:"1 tbsp" },
  "peri peri sauce":              { name:"Peri-Peri / Piri Piri Sauce",        category:"Condiments", unit:"g",  base:100, cal:85,  prot:1.5, carb:10,  fat:4.5, servingSize:15, servingLabel:"1 tbsp" },
  "chipotle sauce":               { name:"Chipotle Sauce",                     category:"Condiments", unit:"g",  base:100, cal:180, prot:1.5, carb:16,  fat:12,  servingSize:15, servingLabel:"1 tbsp" },
  "chilli garlic sauce":          { name:"Chilli Garlic Sauce",                category:"Condiments", unit:"g",  base:100, cal:80,  prot:2,   carb:14,  fat:2,   servingSize:10, servingLabel:"1 tsp" },
  "schezwan sauce":               { name:"Schezwan / Sichuan Sauce",           category:"Condiments", unit:"g",  base:100, cal:140, prot:2.5, carb:18,  fat:6.5, servingSize:15, servingLabel:"1 tbsp" },
  "chilli sauce red indian":      { name:"Red Chilli Sauce (Indian style)",    category:"Condiments", unit:"g",  base:100, cal:65,  prot:1.5, carb:13,  fat:1,   servingSize:15, servingLabel:"1 tbsp" },
  "green chutney mint coriander": { name:"Green Chutney (mint + coriander)",   category:"Condiments", unit:"g",  base:100, cal:70,  prot:2,   carb:11,  fat:2,   servingSize:20, servingLabel:"1 tbsp" },
  "tamarind chutney sweet":       { name:"Tamarind / Imli Chutney (sweet)",    category:"Condiments", unit:"g",  base:100, cal:185, prot:0.8, carb:46,  fat:0.3, servingSize:20, servingLabel:"1 tbsp" },
  "coconut chutney":              { name:"Coconut Chutney (fresh ground)",     category:"Condiments", unit:"g",  base:100, cal:185, prot:2,   carb:10,  fat:16,  servingSize:30, servingLabel:"2 tbsp" },
  "mango chutney sweet":          { name:"Mango Chutney (sweet, jarred)",      category:"Condiments", unit:"g",  base:100, cal:195, prot:0.5, carb:48,  fat:0.2, servingSize:20, servingLabel:"1 tbsp" },
  "tomato chutney":               { name:"Tomato Chutney",                     category:"Condiments", unit:"g",  base:100, cal:85,  prot:1.5, carb:14,  fat:3,   servingSize:30, servingLabel:"2 tbsp" },
  "tamarind paste":               { name:"Tamarind Paste / Pulp",              category:"Condiments", unit:"g",  base:100, cal:239, prot:2.8, carb:62,  fat:0.6, servingSize:6,  servingLabel:"1 tsp" },
  "pickled lime achar":           { name:"Lime Pickle / Nimbu Achar",          category:"Condiments", unit:"g",  base:100, cal:120, prot:0.8, carb:14,  fat:6.5, servingSize:10, servingLabel:"1 tsp" },
  "mango pickle aam achar":       { name:"Mango Pickle / Aam ka Achar",        category:"Condiments", unit:"g",  base:100, cal:150, prot:1.2, carb:15,  fat:9.5, servingSize:10, servingLabel:"1 tsp" },
  "mixed vegetable pickle":       { name:"Mixed Veg Pickle (achaar)",          category:"Condiments", unit:"g",  base:100, cal:135, prot:1,   carb:13,  fat:8.5, servingSize:10, servingLabel:"1 tsp" },

  /* ── Mustards ──────────────────────────────────────── */
  "mustard yellow prepared":      { name:"Yellow Mustard (prepared)",          category:"Condiments", unit:"g",  base:100, cal:60,  prot:4,   carb:6,   fat:3,   servingSize:5,  servingLabel:"1 tsp" },
  "mustard dijon":                { name:"Dijon Mustard",                      category:"Condiments", unit:"g",  base:100, cal:66,  prot:4.1, carb:5.3, fat:3.5, servingSize:5,  servingLabel:"1 tsp" },
  "mustard wholegrain":           { name:"Wholegrain Mustard",                 category:"Condiments", unit:"g",  base:100, cal:85,  prot:5,   carb:6,   fat:5,   servingSize:5,  servingLabel:"1 tsp" },
  "mustard english hot":          { name:"English / Hot Mustard",              category:"Condiments", unit:"g",  base:100, cal:90,  prot:5.5, carb:6.5, fat:5,   servingSize:5,  servingLabel:"1 tsp" },
  "mustard honey":                { name:"Honey Mustard",                      category:"Condiments", unit:"g",  base:100, cal:130, prot:2,   carb:22,  fat:4,   servingSize:15, servingLabel:"1 tbsp" },

  /* ── Mayonnaise & Creamy Sauces ────────────────────── */
  "mayonnaise full fat":          { name:"Mayonnaise (full-fat)",               category:"Condiments", unit:"g",  base:100, cal:680, prot:1,   carb:0.6, fat:75,  servingSize:14, servingLabel:"1 tbsp" },
  "mayonnaise light":             { name:"Mayonnaise (light / reduced-fat)",   category:"Condiments", unit:"g",  base:100, cal:300, prot:1.5, carb:10,  fat:28,  servingSize:15, servingLabel:"1 tbsp" },
  "mayonnaise vegan":             { name:"Vegan Mayonnaise (egg-free)",        category:"Condiments", unit:"g",  base:100, cal:620, prot:0.5, carb:3,   fat:67,  servingSize:14, servingLabel:"1 tbsp" },
  "aioli garlic mayo":            { name:"Aioli / Garlic Mayonnaise",          category:"Condiments", unit:"g",  base:100, cal:690, prot:1.5, carb:1.5, fat:76,  servingSize:14, servingLabel:"1 tbsp" },
  "ranch dressing":               { name:"Ranch Dressing",                     category:"Condiments", unit:"g",  base:100, cal:321, prot:1.6, carb:5.5, fat:32,  servingSize:30, servingLabel:"2 tbsp" },
  "caesar dressing":              { name:"Caesar Dressing",                    category:"Condiments", unit:"g",  base:100, cal:350, prot:3.5, carb:7,   fat:35,  servingSize:30, servingLabel:"2 tbsp" },
  "blue cheese dressing":         { name:"Blue Cheese Dressing",               category:"Condiments", unit:"g",  base:100, cal:357, prot:3.5, carb:4.5, fat:36,  servingSize:30, servingLabel:"2 tbsp" },
  "thousand island dressing":     { name:"Thousand Island Dressing",           category:"Condiments", unit:"g",  base:100, cal:310, prot:0.9, carb:15,  fat:28,  servingSize:30, servingLabel:"2 tbsp" },
  "french dressing":              { name:"French Dressing (vinaigrette)",      category:"Condiments", unit:"ml", base:100, cal:270, prot:0.2, carb:14,  fat:24,  servingSize:30, servingLabel:"2 tbsp" },
  "balsamic vinaigrette":         { name:"Balsamic Vinaigrette",               category:"Condiments", unit:"ml", base:100, cal:170, prot:0.2, carb:13,  fat:13,  servingSize:30, servingLabel:"2 tbsp" },
  "honey mustard dressing":       { name:"Honey Mustard Dressing",             category:"Condiments", unit:"g",  base:100, cal:290, prot:1,   carb:20,  fat:23,  servingSize:30, servingLabel:"2 tbsp" },
  "tzatziki dip":                 { name:"Tzatziki",                           category:"Condiments", unit:"g",  base:100, cal:72,  prot:3.5, carb:3.5, fat:5,   servingSize:60, servingLabel:"¼ cup" },
  "hollandaise sauce":            { name:"Hollandaise Sauce",                  category:"Condiments", unit:"g",  base:100, cal:400, prot:4,   carb:2,   fat:42,  servingSize:30, servingLabel:"2 tbsp" },
  "bearnaise sauce":              { name:"Béarnaise Sauce",                    category:"Condiments", unit:"g",  base:100, cal:385, prot:3.5, carb:2,   fat:41,  servingSize:30, servingLabel:"2 tbsp" },
  "bechamel white sauce":         { name:"Béchamel / White Sauce",             category:"Condiments", unit:"g",  base:100, cal:125, prot:3.5, carb:10,  fat:8,   servingSize:60, servingLabel:"¼ cup" },
  "tartar sauce":                 { name:"Tartare Sauce",                      category:"Condiments", unit:"g",  base:100, cal:310, prot:1.5, carb:7,   fat:31,  servingSize:30, servingLabel:"2 tbsp" },
  "raita cucumber":               { name:"Cucumber Raita",                     category:"Condiments", unit:"g",  base:100, cal:42,  prot:3,   carb:4,   fat:1.5, servingSize:100, servingLabel:"½ cup" },
  "boondi raita":                 { name:"Boondi Raita",                       category:"Condiments", unit:"g",  base:100, cal:98,  prot:4.5, carb:11,  fat:4,   servingSize:100, servingLabel:"½ cup" },

  /* ── BBQ & Steak Sauces ────────────────────────────── */
  "bbq sauce smoky":              { name:"BBQ Sauce (smoky / classic)",        category:"Condiments", unit:"g",  base:100, cal:172, prot:1.5, carb:40,  fat:1,   servingSize:30, servingLabel:"2 tbsp" },
  "bbq sauce honey":              { name:"Honey BBQ Sauce",                    category:"Condiments", unit:"g",  base:100, cal:195, prot:1.5, carb:47,  fat:0.5, servingSize:30, servingLabel:"2 tbsp" },
  "steak sauce worcestershire":   { name:"Worcestershire Sauce",               category:"Condiments", unit:"ml", base:100, cal:78,  prot:0,   carb:20,  fat:0,   servingSize:5,  servingLabel:"1 tsp" },
  "steak sauce hp":               { name:"HP Sauce / Brown Sauce",             category:"Condiments", unit:"g",  base:100, cal:99,  prot:1.2, carb:23,  fat:0.1, servingSize:17, servingLabel:"1 tbsp" },
  "a1 steak sauce":               { name:"A1 Steak Sauce",                     category:"Condiments", unit:"g",  base:100, cal:94,  prot:1.5, carb:22,  fat:0.5, servingSize:17, servingLabel:"1 tbsp" },

  /* ── Vinegars ──────────────────────────────────────── */
  "vinegar white distilled":      { name:"White / Distilled Vinegar",          category:"Condiments", unit:"ml", base:100, cal:18,  prot:0,   carb:0,   fat:0,   servingSize:15, servingLabel:"1 tbsp" },
  "vinegar apple cider":          { name:"Apple Cider Vinegar (ACV)",          category:"Condiments", unit:"ml", base:100, cal:21,  prot:0,   carb:0.9, fat:0,   servingSize:15, servingLabel:"1 tbsp" },
  "vinegar balsamic":             { name:"Balsamic Vinegar (Modena)",          category:"Condiments", unit:"ml", base:100, cal:88,  prot:0.5, carb:17,  fat:0,   servingSize:14, servingLabel:"1 tbsp" },
  "vinegar red wine":             { name:"Red Wine Vinegar",                   category:"Condiments", unit:"ml", base:100, cal:19,  prot:0.1, carb:0.3, fat:0,   servingSize:15, servingLabel:"1 tbsp" },
  "vinegar sherry":               { name:"Sherry Vinegar",                     category:"Condiments", unit:"ml", base:100, cal:40,  prot:0.1, carb:1.2, fat:0,   servingSize:15, servingLabel:"1 tbsp" },
  "vinegar malt":                 { name:"Malt Vinegar",                       category:"Condiments", unit:"ml", base:100, cal:14,  prot:0,   carb:1,   fat:0,   servingSize:15, servingLabel:"1 tbsp" },

  /* ── Sweeteners & Syrups ───────────────────────────── */
  "sugar white":                  { name:"White Granulated Sugar",             category:"Condiments", unit:"g",  base:100, cal:387, prot:0,   carb:100, fat:0,   servingSize:12, servingLabel:"1 tbsp" },
  "sugar brown":                  { name:"Brown Sugar (soft)",                 category:"Condiments", unit:"g",  base:100, cal:380, prot:0,   carb:98,  fat:0,   servingSize:12, servingLabel:"1 tbsp" },
  "sugar powdered icing":         { name:"Powdered / Icing Sugar",             category:"Condiments", unit:"g",  base:100, cal:389, prot:0,   carb:100, fat:0,   servingSize:8,  servingLabel:"1 tbsp" },
  "jaggery gur":                  { name:"Jaggery / Gur",                      category:"Condiments", unit:"g",  base:100, cal:383, prot:0.4, carb:98,  fat:0.1, servingSize:20, servingLabel:"1 tbsp" },
  "honey raw":                    { name:"Honey (raw / pure)",                 category:"Condiments", unit:"g",  base:100, cal:304, prot:0.3, carb:82,  fat:0,   servingSize:21, servingLabel:"1 tbsp" },
  "honey manuka":                 { name:"Manuka Honey",                       category:"Condiments", unit:"g",  base:100, cal:300, prot:0.4, carb:82,  fat:0,   servingSize:21, servingLabel:"1 tbsp" },
  "maple syrup pure":             { name:"Pure Maple Syrup",                   category:"Condiments", unit:"g",  base:100, cal:260, prot:0,   carb:67,  fat:0.1, servingSize:20, servingLabel:"1 tbsp" },
  "agave nectar":                 { name:"Agave Nectar / Syrup",               category:"Condiments", unit:"g",  base:100, cal:310, prot:0.1, carb:76,  fat:0.5, servingSize:21, servingLabel:"1 tbsp" },
  "golden syrup treacle":         { name:"Golden Syrup / Treacle",             category:"Condiments", unit:"g",  base:100, cal:325, prot:0.3, carb:83,  fat:0,   servingSize:21, servingLabel:"1 tbsp" },
  "molasses":                     { name:"Molasses (blackstrap)",              category:"Condiments", unit:"g",  base:100, cal:290, prot:3.3, carb:75,  fat:0.1, servingSize:20, servingLabel:"1 tbsp" },
  "stevia powder":                { name:"Stevia Powder",                      category:"Condiments", unit:"g",  base:1,   cal:0,   prot:0,   carb:0.5, fat:0,   servingSize:1,  servingLabel:"1 packet" },
  "stevia liquid":                { name:"Liquid Stevia (drops)",              category:"Condiments", unit:"ml", base:100, cal:0,   prot:0,   carb:0.5, fat:0,   servingSize:1,  servingLabel:"a few drops" },
  "corn syrup light":             { name:"Corn Syrup (light)",                 category:"Condiments", unit:"g",  base:100, cal:282, prot:0,   carb:76,  fat:0,   servingSize:21, servingLabel:"1 tbsp" },
  "date syrup":                   { name:"Date Syrup",                         category:"Condiments", unit:"g",  base:100, cal:310, prot:1.5, carb:78,  fat:0,   servingSize:21, servingLabel:"1 tbsp" },

  /* ── Jams, Spreads & Preserves ─────────────────────── */
  "jam strawberry":               { name:"Strawberry Jam",                     category:"Condiments", unit:"g",  base:100, cal:278, prot:0.4, carb:69,  fat:0.1, servingSize:20, servingLabel:"1 tbsp" },
  "jam raspberry":                { name:"Raspberry Jam",                      category:"Condiments", unit:"g",  base:100, cal:261, prot:0.4, carb:66,  fat:0.2, servingSize:20, servingLabel:"1 tbsp" },
  "jam apricot":                  { name:"Apricot Jam",                        category:"Condiments", unit:"g",  base:100, cal:266, prot:0.5, carb:66,  fat:0.2, servingSize:20, servingLabel:"1 tbsp" },
  "jam marmalade orange":         { name:"Orange Marmalade",                   category:"Condiments", unit:"g",  base:100, cal:260, prot:0.3, carb:67,  fat:0,   servingSize:20, servingLabel:"1 tbsp" },
  "jam mixed fruit":              { name:"Mixed Fruit Jam",                    category:"Condiments", unit:"g",  base:100, cal:270, prot:0.4, carb:68,  fat:0.1, servingSize:20, servingLabel:"1 tbsp" },
  "peanut butter jar":            { name:"Peanut Butter (smooth, jarred)",     category:"Condiments", unit:"g",  base:100, cal:588, prot:25,  carb:20,  fat:50,  servingSize:32, servingLabel:"2 tbsp" },
  "almond butter jar":            { name:"Almond Butter",                      category:"Condiments", unit:"g",  base:100, cal:614, prot:21,  carb:19,  fat:56,  servingSize:32, servingLabel:"2 tbsp" },
  "nutella spread":               { name:"Nutella / Hazelnut Chocolate Spread",category:"Condiments", unit:"g",  base:100, cal:539, prot:6,   carb:58,  fat:31,  servingSize:37, servingLabel:"2 tbsp" },
  "vegemite marmite":             { name:"Vegemite / Marmite (yeast extract)", category:"Condiments", unit:"g",  base:100, cal:185, prot:24,  carb:20,  fat:0.5, servingSize:4,  servingLabel:"1 tsp" },

  /* ── Pesto & Herb Sauces ───────────────────────────── */
  "pesto basil classic":          { name:"Basil Pesto (classic)",              category:"Condiments", unit:"g",  base:100, cal:444, prot:7.5, carb:7,   fat:45,  servingSize:30, servingLabel:"2 tbsp" },
  "pesto red pepper":             { name:"Red Pepper Pesto",                   category:"Condiments", unit:"g",  base:100, cal:385, prot:6,   carb:13,  fat:36,  servingSize:30, servingLabel:"2 tbsp" },
  "pesto rocket walnut":          { name:"Rocket & Walnut Pesto",              category:"Condiments", unit:"g",  base:100, cal:430, prot:7,   carb:6,   fat:43,  servingSize:30, servingLabel:"2 tbsp" },
  "chimichurri sauce":            { name:"Chimichurri",                        category:"Condiments", unit:"g",  base:100, cal:215, prot:1.5, carb:5,   fat:21,  servingSize:30, servingLabel:"2 tbsp" },
  "romesco sauce":                { name:"Romesco Sauce (roasted pepper + almond)", category:"Condiments", unit:"g", base:100, cal:225, prot:4, carb:10,  fat:19,  servingSize:30, servingLabel:"2 tbsp" },
  "guacamole dip":                { name:"Guacamole",                          category:"Condiments", unit:"g",  base:100, cal:160, prot:2,   carb:9,   fat:15,  servingSize:30, servingLabel:"2 tbsp" },
  "hummus plain dip":             { name:"Hummus (plain)",                     category:"Condiments", unit:"g",  base:100, cal:166, prot:7.9, carb:14,  fat:9.6, servingSize:60, servingLabel:"¼ cup" },
  "baba ganoush":                 { name:"Baba Ganoush",                       category:"Condiments", unit:"g",  base:100, cal:105, prot:3,   carb:9,   fat:7,   servingSize:60, servingLabel:"¼ cup" },

  /* ── Miscellaneous Condiments ──────────────────────── */
  "gravy beef":                   { name:"Beef / Brown Gravy (from powder/drippings)", category:"Condiments", unit:"ml", base:100, cal:40, prot:2.5, carb:5, fat:1.5, servingSize:60, servingLabel:"¼ cup" },
  "gravy chicken":                { name:"Chicken Gravy",                      category:"Condiments", unit:"ml", base:100, cal:35,  prot:2,   carb:5,   fat:1,   servingSize:60, servingLabel:"¼ cup" },
  "yeast extract spread":         { name:"Yeast Extract / Nutritional Yeast Spread", category:"Condiments", unit:"g", base:100, cal:185, prot:24, carb:20,  fat:0.5, servingSize:4,  servingLabel:"1 tsp" },
  "soy sauce tamari blend":       { name:"Liquid Aminos (Bragg's style)",      category:"Condiments", unit:"ml", base:100, cal:40,  prot:7,   carb:3,   fat:0,   servingSize:16, servingLabel:"1 tbsp" },
  "hot pepper flakes":            { name:"Red Pepper / Chilli Flakes",         category:"Condiments", unit:"g",  base:100, cal:282, prot:13,  carb:50,  fat:14,  servingSize:2,  servingLabel:"½ tsp" },
  "salt table":                   { name:"Table Salt (iodized)",               category:"Condiments", unit:"g",  base:100, cal:0,   prot:0,   carb:0,   fat:0,   servingSize:6,  servingLabel:"1 tsp" },
  "salt sea flakes":              { name:"Sea Salt Flakes (Maldon style)",     category:"Condiments", unit:"g",  base:100, cal:0,   prot:0,   carb:0,   fat:0,   servingSize:3,  servingLabel:"generous pinch" },
  "salt pink himalayan":          { name:"Pink Himalayan Salt",                category:"Condiments", unit:"g",  base:100, cal:0,   prot:0,   carb:0,   fat:0,   servingSize:6,  servingLabel:"1 tsp" },
  "black salt kala namak":        { name:"Black Salt / Kala Namak",            category:"Condiments", unit:"g",  base:100, cal:0,   prot:0,   carb:0,   fat:0,   servingSize:3,  servingLabel:"½ tsp" },
  "msg monosodium glutamate":     { name:"MSG / Ajinomoto",                    category:"Condiments", unit:"g",  base:100, cal:0,   prot:0,   carb:0,   fat:0,   servingSize:1,  servingLabel:"¼ tsp" },
  "cream of tartar":              { name:"Cream of Tartar",                    category:"Condiments", unit:"g",  base:100, cal:236, prot:0,   carb:62,  fat:0,   servingSize:3,  servingLabel:"½ tsp" },
  "baking powder":                { name:"Baking Powder",                      category:"Condiments", unit:"g",  base:100, cal:55,  prot:0,   carb:28,  fat:0,   servingSize:4.6,servingLabel:"1 tsp" },
  "baking soda":                  { name:"Baking Soda / Bicarbonate of Soda",  category:"Condiments", unit:"g",  base:100, cal:0,   prot:0,   carb:0,   fat:0,   servingSize:3,  servingLabel:"½ tsp" },
  "vanilla extract":              { name:"Vanilla Extract (pure)",             category:"Condiments", unit:"ml", base:100, cal:288, prot:0.1, carb:13,  fat:0.1, servingSize:4,  servingLabel:"1 tsp" },
  "cocoa powder baking":          { name:"Cocoa Powder (unsweetened, baking)", category:"Condiments", unit:"g",  base:100, cal:228, prot:20,  carb:58,  fat:14,  servingSize:8,  servingLabel:"1 tbsp" },
  
  













  
/* ══════════════════════════════════════════════════════
     🍱  INTERNATIONAL DISHES — COMPLETE SECTION
  ══════════════════════════════════════════════════════ */

  /* ── Japanese ──────────────────────────────────────── */
  "sushi roll":                   { name:"Sushi Roll (6 pieces)",              category:"Japanese", unit:"g", base:100, cal:143, prot:5,   carb:28,  fat:1.5, servingSize:180, servingLabel:"6 pieces",   countable:{ unitName:"piece",    gramsEach:30  } },
  "sushi nigiri":                 { name:"Nigiri Sushi",                       category:"Japanese", unit:"g", base:100, cal:145, prot:6,   carb:22,  fat:2.5, servingSize:30,  servingLabel:"1 piece",    countable:{ unitName:"piece",    gramsEach:30  } },
  "sushi temaki hand roll":       { name:"Temaki / Hand Roll",                 category:"Japanese", unit:"g", base:100, cal:155, prot:6,   carb:24,  fat:3,   servingSize:100, servingLabel:"1 hand roll",countable:{ unitName:"roll",     gramsEach:100 } },
  "sushi california roll":        { name:"California Roll (6 pieces)",         category:"Japanese", unit:"g", base:100, cal:160, prot:6,   carb:28,  fat:3.5, servingSize:180, servingLabel:"6 pieces" },
  "sushi spicy tuna roll":        { name:"Spicy Tuna Roll (6 pieces)",         category:"Japanese", unit:"g", base:100, cal:175, prot:8,   carb:24,  fat:5,   servingSize:180, servingLabel:"6 pieces" },
  "sushi salmon avocado roll":    { name:"Salmon Avocado Roll",                category:"Japanese", unit:"g", base:100, cal:185, prot:7,   carb:24,  fat:7,   servingSize:180, servingLabel:"6 pieces" },
  "sashimi plate":                { name:"Sashimi (assorted, 5 pieces)",       category:"Japanese", unit:"g", base:100, cal:130, prot:22,  carb:0,   fat:4,   servingSize:120, servingLabel:"5 pieces",   countable:{ unitName:"piece",    gramsEach:25  } },
  "miso soup":                    { name:"Miso Soup",                          category:"Japanese", unit:"ml", base:100, cal:25, prot:2,   carb:2.5, fat:1,   servingSize:240, servingLabel:"1 cup" },
  "ramen bowl full":              { name:"Ramen Bowl (broth + noodles + toppings)", category:"Japanese", unit:"g", base:100, cal:95, prot:6, carb:12,  fat:2.5, servingSize:500, servingLabel:"1 bowl" },
  "tonkotsu ramen":               { name:"Tonkotsu Ramen",                    category:"Japanese", unit:"g", base:100, cal:120, prot:7,   carb:13,  fat:4,   servingSize:500, servingLabel:"1 bowl" },
  "chicken ramen":                { name:"Chicken Ramen (shoyu / shio)",       category:"Japanese", unit:"g", base:100, cal:90,  prot:6,   carb:12,  fat:2,   servingSize:500, servingLabel:"1 bowl" },
  "udon soup bowl":               { name:"Udon Soup (broth + noodles)",        category:"Japanese", unit:"g", base:100, cal:80,  prot:3.5, carb:15,  fat:1,   servingSize:400, servingLabel:"1 bowl" },
  "soba noodle bowl":             { name:"Soba Noodle Bowl (cold / hot)",      category:"Japanese", unit:"g", base:100, cal:90,  prot:4.5, carb:18,  fat:0.5, servingSize:350, servingLabel:"1 bowl" },
  "donburi chicken":              { name:"Chicken Donburi / Oyakodon",         category:"Japanese", unit:"g", base:100, cal:155, prot:10,  carb:20,  fat:4,   servingSize:400, servingLabel:"1 bowl" },
  "donburi beef":                 { name:"Beef Donburi / Gyudon",              category:"Japanese", unit:"g", base:100, cal:180, prot:10,  carb:22,  fat:6,   servingSize:400, servingLabel:"1 bowl" },
  "katsu curry full":             { name:"Katsu Curry with Rice",              category:"Japanese", unit:"g", base:100, cal:165, prot:9,   carb:22,  fat:5,   servingSize:400, servingLabel:"1 plate" },
  "teriyaki chicken rice":        { name:"Teriyaki Chicken with Rice",         category:"Japanese", unit:"g", base:100, cal:170, prot:11,  carb:22,  fat:4.5, servingSize:350, servingLabel:"1 plate" },
  "onigiri rice ball":            { name:"Onigiri / Rice Ball",                category:"Japanese", unit:"g", base:100, cal:157, prot:3.9, carb:34,  fat:0.5, servingSize:100, servingLabel:"1 rice ball", countable:{ unitName:"onigiri", gramsEach:100 } },
  "edamame salted":               { name:"Edamame (salted, in pod)",           category:"Japanese", unit:"g", base:100, cal:75,  prot:6.9, carb:5.7, fat:3.3, servingSize:100, servingLabel:"~12 pods" },
  "gyoza dumplings pan fried":    { name:"Gyoza (pan-fried potstickers)",      category:"Japanese", unit:"g", base:100, cal:230, prot:9,   carb:25,  fat:9,   servingSize:30,  servingLabel:"1 gyoza",    countable:{ unitName:"gyoza",    gramsEach:30  } },
  "tempura mixed":                { name:"Mixed Tempura (veg + prawn)",        category:"Japanese", unit:"g", base:100, cal:205, prot:9,   carb:21,  fat:9,   servingSize:100, servingLabel:"1 serving" },
  "yakitori chicken skewer":      { name:"Yakitori (grilled chicken skewer)",  category:"Japanese", unit:"g", base:100, cal:195, prot:18,  carb:8,   fat:9,   servingSize:40,  servingLabel:"1 skewer",   countable:{ unitName:"skewer",   gramsEach:40  } },
  "takoyaki octopus balls":       { name:"Takoyaki (octopus balls)",           category:"Japanese", unit:"g", base:100, cal:215, prot:8,   carb:26,  fat:8.5, servingSize:20,  servingLabel:"1 ball",     countable:{ unitName:"ball",     gramsEach:20  } },

  /* ── Chinese ───────────────────────────────────────── */
  "fried rice chinese":           { name:"Chinese Fried Rice",                 category:"Chinese", unit:"g", base:100, cal:163, prot:4.6, carb:27,  fat:4.4, servingSize:250, servingLabel:"1 bowl" },
  "egg fried rice":               { name:"Egg Fried Rice",                     category:"Chinese", unit:"g", base:100, cal:170, prot:5.5, carb:27,  fat:5,   servingSize:250, servingLabel:"1 bowl" },
  "noodles stir fry":             { name:"Stir-Fried Noodles (veg)",           category:"Chinese", unit:"g", base:100, cal:148, prot:4.5, carb:24,  fat:4,   servingSize:250, servingLabel:"1 plate" },
  "spring roll":                  { name:"Spring Roll (fried)",                category:"Chinese", unit:"g", base:100, cal:276, prot:6,   carb:35,  fat:12,  servingSize:70,  servingLabel:"1 roll",     countable:{ unitName:"roll",     gramsEach:70  } },
  "dim sum dumpling":             { name:"Dim Sum / Steamed Dumpling (har gow)", category:"Chinese", unit:"g", base:100, cal:195, prot:9,  carb:24,  fat:6.5, servingSize:40,  servingLabel:"1 piece",    countable:{ unitName:"dumpling", gramsEach:40  } },
  "siu mai dumpling":             { name:"Siu Mai (pork & shrimp)",            category:"Chinese", unit:"g", base:100, cal:210, prot:12,  carb:20,  fat:8.5, servingSize:30,  servingLabel:"1 piece",    countable:{ unitName:"dumpling", gramsEach:30  } },
  "potsticker dumpling pan":      { name:"Potsticker / Pan-Fried Dumpling",    category:"Chinese", unit:"g", base:100, cal:230, prot:9,   carb:26,  fat:9.5, servingSize:30,  servingLabel:"1 piece",    countable:{ unitName:"dumpling", gramsEach:30  } },
  "char siu bbq pork":            { name:"Char Siu (BBQ Roast Pork)",          category:"Chinese", unit:"g", base:100, cal:280, prot:24,  carb:18,  fat:11,  servingSize:100, servingLabel:"1 serving" },
  "kung pao chicken":             { name:"Kung Pao Chicken",                   category:"Chinese", unit:"g", base:100, cal:175, prot:14,  carb:11,  fat:8,   servingSize:250, servingLabel:"1 plate" },
  "sweet sour pork":              { name:"Sweet & Sour Pork",                  category:"Chinese", unit:"g", base:100, cal:195, prot:11,  carb:23,  fat:7.5, servingSize:250, servingLabel:"1 plate" },
  "mapo tofu":                    { name:"Mapo Tofu",                          category:"Chinese", unit:"g", base:100, cal:125, prot:6.5, carb:8,   fat:7.5, servingSize:250, servingLabel:"1 bowl" },
  "peking duck":                  { name:"Peking Duck (with pancake & hoisin)", category:"Chinese", unit:"g", base:100, cal:290, prot:16,  carb:20,  fat:16,  servingSize:80,  servingLabel:"1 pancake wrap", countable:{ unitName:"pancake", gramsEach:80  } },
  "hot and sour soup":            { name:"Hot & Sour Soup",                    category:"Chinese", unit:"ml", base:100, cal:50,  prot:3,   carb:7,   fat:1.5, servingSize:240, servingLabel:"1 cup" },
  "wonton soup":                  { name:"Wonton Soup",                        category:"Chinese", unit:"g", base:100, cal:65,  prot:4,   carb:8,   fat:2,   servingSize:350, servingLabel:"1 bowl" },
  "congee rice porridge":         { name:"Congee / Rice Porridge",             category:"Chinese", unit:"g", base:100, cal:50,  prot:1.2, carb:11,  fat:0.2, servingSize:350, servingLabel:"1 bowl" },
  "dan dan noodles":              { name:"Dan Dan Noodles (Sichuan)",          category:"Chinese", unit:"g", base:100, cal:190, prot:8,   carb:24,  fat:7,   servingSize:300, servingLabel:"1 bowl" },
  "lo mein chicken":              { name:"Chicken Lo Mein",                    category:"Chinese", unit:"g", base:100, cal:165, prot:9,   carb:22,  fat:5,   servingSize:300, servingLabel:"1 plate" },
  "general tso chicken":          { name:"General Tso's Chicken",              category:"Chinese", unit:"g", base:100, cal:245, prot:14,  carb:24,  fat:10,  servingSize:250, servingLabel:"1 plate" },
  "mongolian beef":               { name:"Mongolian Beef",                     category:"Chinese", unit:"g", base:100, cal:210, prot:16,  carb:15,  fat:9,   servingSize:250, servingLabel:"1 plate" },
  "beef broccoli stir fry":       { name:"Beef & Broccoli Stir-Fry",           category:"Chinese", unit:"g", base:100, cal:155, prot:12,  carb:9,   fat:7.5, servingSize:250, servingLabel:"1 plate" },
  "chinese bbq duck roast":       { name:"Chinese Roast Duck",                 category:"Chinese", unit:"g", base:100, cal:340, prot:19,  carb:1,   fat:29,  servingSize:150, servingLabel:"1 serving" },

  /* ── Korean ────────────────────────────────────────── */
  "bibimbap":                     { name:"Bibimbap (rice + veg + egg + gochujang)", category:"Korean", unit:"g", base:100, cal:124, prot:5.5, carb:19, fat:3,   servingSize:450, servingLabel:"1 bowl" },
  "korean fried chicken":         { name:"Korean Fried Chicken (double-fried)", category:"Korean", unit:"g", base:100, cal:330, prot:21,  carb:19,  fat:19,  servingSize:150, servingLabel:"1 serving" },
  "tteokbokki spicy rice cakes":  { name:"Tteokbokki (spicy rice cakes)",      category:"Korean", unit:"g", base:100, cal:155, prot:3.5, carb:30,  fat:3,   servingSize:200, servingLabel:"1 serving" },
  "japchae glass noodles":        { name:"Japchae (glass noodles + veg)",      category:"Korean", unit:"g", base:100, cal:140, prot:3.5, carb:22,  fat:4.5, servingSize:250, servingLabel:"1 plate" },
  "kimchi":                       { name:"Kimchi (fermented cabbage)",         category:"Korean", unit:"g", base:100, cal:15,  prot:1.1, carb:2.9, fat:0.5, servingSize:60,  servingLabel:"¼ cup side" },
  "doenjang jjigae stew":         { name:"Doenjang Jjigae (soybean paste stew)", category:"Korean", unit:"ml", base:100, cal:50, prot:4,  carb:4.5, fat:2,   servingSize:300, servingLabel:"1 bowl" },
  "sundubu jjigae soft tofu":     { name:"Sundubu Jjigae (soft tofu stew)",    category:"Korean", unit:"ml", base:100, cal:70,  prot:5,   carb:5,   fat:3,   servingSize:350, servingLabel:"1 bowl" },
  "bulgogi beef":                 { name:"Bulgogi (marinated grilled beef)",   category:"Korean", unit:"g", base:100, cal:195, prot:16,  carb:10,  fat:9,   servingSize:150, servingLabel:"1 serving" },
  "galbi short ribs":             { name:"Galbi / Kalbi (Korean short ribs)",  category:"Korean", unit:"g", base:100, cal:285, prot:22,  carb:6,   fat:19,  servingSize:150, servingLabel:"1 serving" },
  "kimbap seaweed rice roll":     { name:"Kimbap (seaweed rice roll)",         category:"Korean", unit:"g", base:100, cal:160, prot:5,   carb:28,  fat:3,   servingSize:180, servingLabel:"1 roll",     countable:{ unitName:"piece",    gramsEach:30  } },
  "samgyeopsal pork belly":       { name:"Samgyeopsal (grilled pork belly)",   category:"Korean", unit:"g", base:100, cal:350, prot:14,  carb:0,   fat:32,  servingSize:100, servingLabel:"1 serving" },

  /* ── Thai ──────────────────────────────────────────── */
  "pad thai":                     { name:"Pad Thai",                           category:"Thai", unit:"g", base:100, cal:145, prot:8,   carb:18,  fat:4.5, servingSize:350, servingLabel:"1 plate" },
  "pad see ew":                   { name:"Pad See Ew (wide rice noodles)",     category:"Thai", unit:"g", base:100, cal:155, prot:8,   carb:22,  fat:4.5, servingSize:300, servingLabel:"1 plate" },
  "drunken noodles":              { name:"Drunken Noodles / Pad Kee Mao",      category:"Thai", unit:"g", base:100, cal:160, prot:7,   carb:23,  fat:5,   servingSize:300, servingLabel:"1 plate" },
  "green curry":                  { name:"Thai Green Curry (chicken)",         category:"Thai", unit:"g", base:100, cal:135, prot:10,  carb:7,   fat:8,   servingSize:250, servingLabel:"1 serving" },
  "red curry":                    { name:"Thai Red Curry (chicken)",           category:"Thai", unit:"g", base:100, cal:140, prot:10,  carb:7,   fat:9,   servingSize:250, servingLabel:"1 serving" },
  "yellow curry thai":            { name:"Thai Yellow Curry",                  category:"Thai", unit:"g", base:100, cal:145, prot:9,   carb:9,   fat:9,   servingSize:250, servingLabel:"1 serving" },
  "massaman curry":               { name:"Massaman Curry (beef / chicken)",    category:"Thai", unit:"g", base:100, cal:165, prot:10,  carb:12,  fat:9,   servingSize:250, servingLabel:"1 serving" },
  "tom yum soup":                 { name:"Tom Yum Soup",                       category:"Thai", unit:"ml", base:100, cal:33,  prot:2.5, carb:3.5, fat:1,   servingSize:240, servingLabel:"1 cup" },
  "tom kha gai soup":             { name:"Tom Kha Gai (coconut chicken soup)", category:"Thai", unit:"ml", base:100, cal:80,  prot:5,   carb:4,   fat:5.5, servingSize:240, servingLabel:"1 cup" },
  "som tam papaya salad":         { name:"Som Tam (green papaya salad)",       category:"Thai", unit:"g", base:100, cal:60,  prot:2.5, carb:12,  fat:1,   servingSize:150, servingLabel:"1 serving" },
  "mango sticky rice":            { name:"Mango Sticky Rice (khao niao mamuang)", category:"Thai", unit:"g", base:100, cal:175, prot:2.5, carb:37, fat:3,   servingSize:200, servingLabel:"1 serving" },
  "thai basil chicken":           { name:"Thai Basil Chicken (pad kra pao)",   category:"Thai", unit:"g", base:100, cal:175, prot:16,  carb:7,   fat:9,   servingSize:250, servingLabel:"1 serving" },
  "satay chicken peanut":         { name:"Chicken Satay with Peanut Sauce",    category:"Thai", unit:"g", base:100, cal:210, prot:17,  carb:10,  fat:11,  servingSize:40,  servingLabel:"1 skewer",   countable:{ unitName:"skewer",   gramsEach:40  } },
  "larb thai salad":              { name:"Larb (Thai minced meat salad)",      category:"Thai", unit:"g", base:100, cal:145, prot:14,  carb:6,   fat:6.5, servingSize:200, servingLabel:"1 serving" },

  /* ── Vietnamese ────────────────────────────────────── */
  "pho beef":                     { name:"Beef Pho (bun pho bo)",              category:"Vietnamese", unit:"g", base:100, cal:65,  prot:5,   carb:8,   fat:1,   servingSize:500, servingLabel:"1 large bowl" },
  "pho chicken":                  { name:"Chicken Pho",                        category:"Vietnamese", unit:"g", base:100, cal:55,  prot:5,   carb:7,   fat:0.8, servingSize:500, servingLabel:"1 large bowl" },
  "banh mi sandwich":             { name:"Bánh Mì (Vietnamese sandwich)",      category:"Vietnamese", unit:"g", base:100, cal:245, prot:12,  carb:31,  fat:7.5, servingSize:200, servingLabel:"1 sandwich", countable:{ unitName:"sandwich", gramsEach:200 } },
  "fresh spring rolls goi cuon":  { name:"Gỏi Cuốn / Fresh Spring Rolls",      category:"Vietnamese", unit:"g", base:100, cal:100, prot:5,   carb:14,  fat:2,   servingSize:75,  servingLabel:"1 roll",     countable:{ unitName:"roll",     gramsEach:75  } },
  "bun cha grilled pork":         { name:"Bún Chả (grilled pork + noodles)",   category:"Vietnamese", unit:"g", base:100, cal:130, prot:8,   carb:14,  fat:4.5, servingSize:350, servingLabel:"1 serving" },
  "com tam broken rice":          { name:"Cơm Tấm (broken rice with pork chop)", category:"Vietnamese", unit:"g", base:100, cal:170, prot:9,  carb:22,  fat:5,   servingSize:400, servingLabel:"1 plate" },

  /* ── Middle Eastern ────────────────────────────────── */
  "shawarma":                     { name:"Shawarma / Wrap (chicken)",          category:"Middle Eastern", unit:"g", base:100, cal:225, prot:14,  carb:22,  fat:8,   servingSize:280, servingLabel:"1 wrap",     countable:{ unitName:"wrap",     gramsEach:280 } },
  "falafel":                      { name:"Falafel (fried)",                    category:"Middle Eastern", unit:"g", base:100, cal:333, prot:13,  carb:32,  fat:18,  servingSize:25,  servingLabel:"1 ball",     countable:{ unitName:"ball",     gramsEach:25  } },
  "hummus":                       { name:"Hummus (plain)",                     category:"Middle Eastern", unit:"g", base:100, cal:166, prot:7.9, carb:14,  fat:9.6, servingSize:60,  servingLabel:"¼ cup" },
  "doner kebab":                  { name:"Döner Kebab (in pita)",              category:"Middle Eastern", unit:"g", base:100, cal:242, prot:14,  carb:22,  fat:10,  servingSize:280, servingLabel:"1 kebab",    countable:{ unitName:"kebab",    gramsEach:280 } },
  "falafel wrap":                 { name:"Falafel Wrap",                       category:"Middle Eastern", unit:"g", base:100, cal:265, prot:10,  carb:35,  fat:10,  servingSize:250, servingLabel:"1 wrap",     countable:{ unitName:"wrap",     gramsEach:250 } },
  "kofta grilled skewer":         { name:"Kofta (grilled, skewered)",          category:"Middle Eastern", unit:"g", base:100, cal:250, prot:17,  carb:5,   fat:18,  servingSize:60,  servingLabel:"1 kofta",    countable:{ unitName:"kofta",    gramsEach:60  } },
  "baba ganoush dip":             { name:"Baba Ganoush",                       category:"Middle Eastern", unit:"g", base:100, cal:105, prot:3,   carb:9,   fat:7,   servingSize:60,  servingLabel:"¼ cup" },
  "fattoush salad":               { name:"Fattoush Salad",                     category:"Middle Eastern", unit:"g", base:100, cal:75,  prot:2,   carb:11,  fat:3,   servingSize:200, servingLabel:"1 bowl" },
  "tabbouleh":                    { name:"Tabbouleh (bulgur + parsley)",       category:"Middle Eastern", unit:"g", base:100, cal:95,  prot:2.5, carb:15,  fat:3,   servingSize:150, servingLabel:"1 serving" },
  "pita with mezze":              { name:"Pita with Mezze (hummus + falafel)", category:"Middle Eastern", unit:"g", base:100, cal:228, prot:8,   carb:31,  fat:9,   servingSize:120, servingLabel:"1 serving" },
  "kibbeh":                       { name:"Kibbeh (meat & bulgur, fried)",      category:"Middle Eastern", unit:"g", base:100, cal:295, prot:14,  carb:23,  fat:15,  servingSize:60,  servingLabel:"1 piece",    countable:{ unitName:"piece",    gramsEach:60  } },
  "manakish zaatar baked":        { name:"Manakish / Za'atar Flatbread",       category:"Middle Eastern", unit:"g", base:100, cal:320, prot:8.5, carb:48,  fat:11,  servingSize:100, servingLabel:"1 piece",    countable:{ unitName:"piece",    gramsEach:100 } },

  /* ── Mediterranean & European ──────────────────────── */
  "greek salad":                  { name:"Greek Salad",                        category:"Mediterranean", unit:"g", base:100, cal:97,  prot:3,   carb:7,   fat:6.5, servingSize:200, servingLabel:"1 bowl" },
  "caesar salad":                 { name:"Caesar Salad",                       category:"Mediterranean", unit:"g", base:100, cal:190, prot:5,   carb:9,   fat:16,  servingSize:300, servingLabel:"1 large bowl" },
  "caprese salad":                { name:"Caprese Salad (tomato + mozzarella)",category:"Mediterranean", unit:"g", base:100, cal:165, prot:8,   carb:4,   fat:13,  servingSize:200, servingLabel:"1 serving" },
  "niçoise salad":                { name:"Salade Niçoise",                     category:"Mediterranean", unit:"g", base:100, cal:110, prot:8,   carb:7,   fat:5.5, servingSize:250, servingLabel:"1 bowl" },
  "spanakopita":                  { name:"Spanakopita (spinach & feta pie)",   category:"Mediterranean", unit:"g", base:100, cal:280, prot:8,   carb:22,  fat:18,  servingSize:80,  servingLabel:"1 piece",    countable:{ unitName:"piece",    gramsEach:80  } },
  "moussaka":                     { name:"Moussaka",                           category:"Mediterranean", unit:"g", base:100, cal:190, prot:9,   carb:11,  fat:12,  servingSize:250, servingLabel:"1 serving" },
  "risotto mushroom":             { name:"Mushroom Risotto",                   category:"Mediterranean", unit:"g", base:100, cal:155, prot:4.5, carb:25,  fat:4,   servingSize:300, servingLabel:"1 bowl" },
  "risotto chicken":              { name:"Chicken Risotto",                    category:"Mediterranean", unit:"g", base:100, cal:170, prot:9,   carb:24,  fat:4.5, servingSize:300, servingLabel:"1 bowl" },
  "osso buco":                    { name:"Osso Buco (braised veal shank)",     category:"Mediterranean", unit:"g", base:100, cal:195, prot:18,  carb:5,   fat:11,  servingSize:350, servingLabel:"1 serving" },
  "paella spanish":               { name:"Paella (chicken + seafood)",         category:"Mediterranean", unit:"g", base:100, cal:175, prot:10,  carb:24,  fat:4.5, servingSize:350, servingLabel:"1 plate" },
  "gazpacho cold soup":           { name:"Gazpacho (cold tomato soup)",        category:"Mediterranean", unit:"ml", base:100, cal:28, prot:1,   carb:5.5, fat:0.5, servingSize:240, servingLabel:"1 cup" },
  "gyros pita":                   { name:"Gyros (pork / chicken + tzatziki)",  category:"Mediterranean", unit:"g", base:100, cal:215, prot:14,  carb:20,  fat:8,   servingSize:250, servingLabel:"1 wrap",     countable:{ unitName:"wrap",     gramsEach:250 } },
  "french onion soup":            { name:"French Onion Soup (with crouton)",   category:"Mediterranean", unit:"ml", base:100, cal:55, prot:2.5, carb:7,   fat:2,   servingSize:350, servingLabel:"1 bowl" },
  "bouillabaisse":                { name:"Bouillabaisse (Provençal fish stew)",category:"Mediterranean", unit:"ml", base:100, cal:70,  prot:7,   carb:4,   fat:2.5, servingSize:400, servingLabel:"1 bowl" },
  "croque monsieur":              { name:"Croque Monsieur (ham & cheese toast)", category:"Mediterranean", unit:"g", base:100, cal:310, prot:14, carb:25,  fat:17,  servingSize:150, servingLabel:"1 sandwich", countable:{ unitName:"sandwich", gramsEach:150 } },
  "steak frites":                 { name:"Steak Frites (steak + fries)",       category:"Mediterranean", unit:"g", base:100, cal:265, prot:16,  carb:16,  fat:15,  servingSize:400, servingLabel:"1 plate" },
  "coq au vin":                   { name:"Coq au Vin (French braised chicken)",category:"Mediterranean", unit:"g", base:100, cal:175, prot:15,  carb:5,   fat:9,   servingSize:300, servingLabel:"1 serving" },

  /* ── Soups ─────────────────────────────────────────── */
  "soup chicken broth":           { name:"Chicken Broth / Stock",              category:"Soups", unit:"ml", base:100, cal:14,  prot:1.8, carb:0.5, fat:0.5, servingSize:240, servingLabel:"1 cup" },
  "soup chicken noodle":          { name:"Chicken Noodle Soup",                category:"Soups", unit:"ml", base:100, cal:55,  prot:4,   carb:7,   fat:1.5, servingSize:240, servingLabel:"1 cup" },
  "soup tomato":                  { name:"Tomato Soup (cream of)",             category:"Soups", unit:"ml", base:100, cal:60,  prot:1.6, carb:9,   fat:2,   servingSize:240, servingLabel:"1 cup" },
  "soup tomato fresh":            { name:"Tomato Soup (fresh, homemade)",      category:"Soups", unit:"ml", base:100, cal:46,  prot:1.6, carb:9,   fat:0.5, servingSize:240, servingLabel:"1 cup" },
  "soup lentil":                  { name:"Lentil Soup",                        category:"Soups", unit:"ml", base:100, cal:71,  prot:5,   carb:12,  fat:0.5, servingSize:240, servingLabel:"1 cup" },
  "soup lentil red dal":          { name:"Red Lentil Soup (dal-style)",        category:"Soups", unit:"ml", base:100, cal:75,  prot:5,   carb:12,  fat:1,   servingSize:300, servingLabel:"1 large cup" },
  "soup minestrone":              { name:"Minestrone Soup",                    category:"Soups", unit:"ml", base:100, cal:55,  prot:2.5, carb:9,   fat:1.5, servingSize:240, servingLabel:"1 cup" },
  "soup butternut squash":        { name:"Butternut Squash Soup",              category:"Soups", unit:"ml", base:100, cal:55,  prot:1.5, carb:11,  fat:1.5, servingSize:240, servingLabel:"1 cup" },
  "soup pumpkin cream":           { name:"Pumpkin Soup (creamy)",              category:"Soups", unit:"ml", base:100, cal:65,  prot:1.5, carb:10,  fat:2.5, servingSize:240, servingLabel:"1 cup" },
  "soup mushroom cream":          { name:"Cream of Mushroom Soup",             category:"Soups", unit:"ml", base:100, cal:85,  prot:2.5, carb:7,   fat:5.5, servingSize:240, servingLabel:"1 cup" },
  "soup broccoli cheddar":        { name:"Broccoli Cheddar Soup",              category:"Soups", unit:"ml", base:100, cal:115, prot:5,   carb:8,   fat:7.5, servingSize:240, servingLabel:"1 cup" },
  "soup french onion":            { name:"French Onion Soup",                  category:"Soups", unit:"ml", base:100, cal:55,  prot:2.5, carb:7,   fat:2,   servingSize:350, servingLabel:"1 bowl" },
  "soup clam chowder":            { name:"Clam Chowder (New England, cream)",  category:"Soups", unit:"ml", base:100, cal:95,  prot:4.5, carb:9,   fat:5,   servingSize:240, servingLabel:"1 cup" },
  "soup corn chowder":            { name:"Corn Chowder",                       category:"Soups", unit:"ml", base:100, cal:88,  prot:3,   carb:13,  fat:3.5, servingSize:240, servingLabel:"1 cup" },
  "soup gazpacho":                { name:"Gazpacho (cold, Spanish)",           category:"Soups", unit:"ml", base:100, cal:28,  prot:1,   carb:5.5, fat:0.5, servingSize:240, servingLabel:"1 cup" },
  "soup vietnamese pho":          { name:"Vietnamese Pho Broth",               category:"Soups", unit:"ml", base:100, cal:25,  prot:2,   carb:2,   fat:0.8, servingSize:500, servingLabel:"1 large bowl" },
  "soup ramen broth":             { name:"Ramen Broth (miso / shoyu)",         category:"Soups", unit:"ml", base:100, cal:30,  prot:2.5, carb:3,   fat:1,   servingSize:400, servingLabel:"1 bowl" },
  "soup rasam":                   { name:"Rasam (South Indian pepper broth)",  category:"Soups", unit:"ml", base:100, cal:20,  prot:0.8, carb:4,   fat:0.5, servingSize:200, servingLabel:"1 cup" },
  "soup mulligatawny":            { name:"Mulligatawny Soup",                  category:"Soups", unit:"ml", base:100, cal:75,  prot:4,   carb:9,   fat:2.5, servingSize:240, servingLabel:"1 cup" },
  "soup black bean":              { name:"Black Bean Soup",                    category:"Soups", unit:"ml", base:100, cal:90,  prot:5.5, carb:15,  fat:1,   servingSize:240, servingLabel:"1 cup" },
  "soup split pea":               { name:"Split Pea Soup",                     category:"Soups", unit:"ml", base:100, cal:83,  prot:5.5, carb:13,  fat:0.5, servingSize:240, servingLabel:"1 cup" },
  "soup miso japanese":           { name:"Miso Soup (Japanese, with tofu)",    category:"Soups", unit:"ml", base:100, cal:25,  prot:2,   carb:2.5, fat:1,   servingSize:240, servingLabel:"1 cup" },

  /* ── Salads ────────────────────────────────────────── */
  "salad caesar":                 { name:"Caesar Salad",                       category:"Salads", unit:"g", base:100, cal:190, prot:5,   carb:9,   fat:16,  servingSize:300, servingLabel:"1 large bowl" },
  "salad greek":                  { name:"Greek Salad (choriatiki)",           category:"Salads", unit:"g", base:100, cal:97,  prot:3,   carb:7,   fat:6.5, servingSize:200, servingLabel:"1 bowl" },
  "salad garden side":            { name:"Garden / Side Salad (mixed greens)", category:"Salads", unit:"g", base:100, cal:20,  prot:1.5, carb:3.5, fat:0.3, servingSize:85,  servingLabel:"1 side" },
  "salad cobb":                   { name:"Cobb Salad",                         category:"Salads", unit:"g", base:100, cal:200, prot:12,  carb:5,   fat:16,  servingSize:330, servingLabel:"1 large bowl" },
  "salad nicoise":                { name:"Salade Niçoise",                     category:"Salads", unit:"g", base:100, cal:110, prot:8,   carb:7,   fat:5.5, servingSize:250, servingLabel:"1 bowl" },
  "salad caprese":                { name:"Caprese Salad",                      category:"Salads", unit:"g", base:100, cal:165, prot:8,   carb:4,   fat:13,  servingSize:200, servingLabel:"1 serving" },
  "salad waldorf":                { name:"Waldorf Salad",                      category:"Salads", unit:"g", base:100, cal:145, prot:1.5, carb:14,  fat:10,  servingSize:150, servingLabel:"1 serving" },
  "salad coleslaw":               { name:"Coleslaw (with mayo dressing)",      category:"Salads", unit:"g", base:100, cal:153, prot:1.5, carb:12,  fat:11,  servingSize:113, servingLabel:"½ cup" },
  "salad tabbouleh":              { name:"Tabbouleh",                          category:"Salads", unit:"g", base:100, cal:95,  prot:2.5, carb:15,  fat:3,   servingSize:150, servingLabel:"1 serving" },
  "salad pasta":                  { name:"Pasta Salad (with Italian dressing)","category":"Salads", unit:"g", base:100, cal:168, prot:4.5, carb:24, fat:6,   servingSize:180, servingLabel:"1 cup" },
  "salad potato":                 { name:"Potato Salad (with mayo)",           category:"Salads", unit:"g", base:100, cal:140, prot:2,   carb:14,  fat:9,   servingSize:180, servingLabel:"¾ cup" },
  "salad bean three":             { name:"Three Bean Salad",                   category:"Salads", unit:"g", base:100, cal:95,  prot:4.5, carb:17,  fat:2,   servingSize:130, servingLabel:"½ cup" },
  "salad quinoa":                 { name:"Quinoa Salad (with veg)",            category:"Salads", unit:"g", base:100, cal:125, prot:5,   carb:19,  fat:4,   servingSize:200, servingLabel:"1 cup" },
  "salad chickpea":               { name:"Chickpea Salad",                     category:"Salads", unit:"g", base:100, cal:140, prot:6,   carb:20,  fat:4.5, servingSize:180, servingLabel:"1 cup" },
  "salad fattoush":               { name:"Fattoush (Lebanese bread salad)",    category:"Salads", unit:"g", base:100, cal:75,  prot:2,   carb:11,  fat:3,   servingSize:200, servingLabel:"1 bowl" },
  "salad kachumber":              { name:"Kachumber (Indian raw salad)",       category:"Salads", unit:"g", base:100, cal:28,  prot:1.2, carb:5.5, fat:0.3, servingSize:100, servingLabel:"½ cup" },

  /* ── Latin American ────────────────────────────────── */
  "tacos chicken soft":           { name:"Chicken Tacos (soft shell)",         category:"Latin American", unit:"g", base:100, cal:205, prot:12,  carb:23,  fat:7,   servingSize:110, servingLabel:"1 taco",    countable:{ unitName:"taco",    gramsEach:110 } },
  "tacos fish":                   { name:"Fish Tacos (crispy)",                category:"Latin American", unit:"g", base:100, cal:225, prot:12,  carb:24,  fat:9,   servingSize:110, servingLabel:"1 taco",    countable:{ unitName:"taco",    gramsEach:110 } },
  "burrito chicken":              { name:"Chicken Burrito",                    category:"Latin American", unit:"g", base:100, cal:175, prot:10,  carb:22,  fat:5,   servingSize:300, servingLabel:"1 burrito",  countable:{ unitName:"burrito",  gramsEach:300 } },
  "quesadilla chicken":           { name:"Chicken Quesadilla",                 category:"Latin American", unit:"g", base:100, cal:285, prot:15,  carb:25,  fat:13,  servingSize:150, servingLabel:"1 quesadilla", countable:{ unitName:"quesadilla", gramsEach:150 } },
  "enchiladas chicken":           { name:"Chicken Enchiladas (with sauce)",    category:"Latin American", unit:"g", base:100, cal:180, prot:11,  carb:18,  fat:7,   servingSize:200, servingLabel:"2 enchiladas", countable:{ unitName:"enchilada", gramsEach:100 } },
  "tamales corn":                 { name:"Tamales (corn, pork / chicken)",     category:"Latin American", unit:"g", base:100, cal:208, prot:6.5, carb:23,  fat:10,  servingSize:125, servingLabel:"1 tamale",  countable:{ unitName:"tamale",   gramsEach:125 } },
  "ceviche shrimp":               { name:"Shrimp Ceviche",                     category:"Latin American", unit:"g", base:100, cal:80,  prot:11,  carb:7,   fat:1.5, servingSize:150, servingLabel:"1 serving" },
  "empanadas baked":              { name:"Empanadas (baked, meat)",            category:"Latin American", unit:"g", base:100, cal:298, prot:10,  carb:32,  fat:15,  servingSize:90,  servingLabel:"1 empanada", countable:{ unitName:"empanada", gramsEach:90  } },
  "rice beans latin":             { name:"Rice & Beans (Cuban / Caribbean)",   category:"Latin American", unit:"g", base:100, cal:130, prot:4.5, carb:25,  fat:1.5, servingSize:250, servingLabel:"1 cup" },
  "arepa corn cake":              { name:"Arepa (Venezuelan / Colombian)",     category:"Latin American", unit:"g", base:100, cal:210, prot:4,   carb:34,  fat:6,   servingSize:100, servingLabel:"1 arepa",   countable:{ unitName:"arepa",    gramsEach:100 } },

  /* ── African ───────────────────────────────────────── */
  "jollof rice nigerian":         { name:"Jollof Rice (Nigerian / West African)", category:"African", unit:"g", base:100, cal:165, prot:3.5, carb:30, fat:4,   servingSize:250, servingLabel:"1 cup" },
  "injera ethiopian":             { name:"Injera (Ethiopian teff flatbread)",  category:"African", unit:"g", base:100, cal:124, prot:3.8, carb:26,  fat:0.7, servingSize:110, servingLabel:"1 piece",    countable:{ unitName:"piece",    gramsEach:110 } },
  "doro wat chicken stew":        { name:"Doro Wat (Ethiopian chicken stew)",  category:"African", unit:"g", base:100, cal:155, prot:13,  carb:5,   fat:9,   servingSize:250, servingLabel:"1 serving" },
  "tagine moroccan lamb":         { name:"Moroccan Lamb Tagine",               category:"African", unit:"g", base:100, cal:165, prot:14,  carb:9,   fat:8,   servingSize:300, servingLabel:"1 serving" },
  "bobotie south african":        { name:"Bobotie (South African mince bake)", category:"African", unit:"g", base:100, cal:210, prot:13,  carb:11,  fat:13,  servingSize:200, servingLabel:"1 serving" },
  "egusi soup":                   { name:"Egusi Soup (West African)",          category:"African", unit:"g", base:100, cal:155, prot:6,   carb:5.5, fat:12,  servingSize:200, servingLabel:"1 serving" },
  "fufu cassava":                 { name:"Fufu (cassava / yam, boiled dough)", category:"African", unit:"g", base:100, cal:160, prot:1.4, carb:38,  fat:0.3, servingSize:200, servingLabel:"1 serving" },
  "suya grilled beef":            { name:"Suya (West African spiced grilled beef)", category:"African", unit:"g", base:100, cal:285, prot:22, carb:6,   fat:19,  servingSize:100, servingLabel:"1 skewer",   countable:{ unitName:"skewer",   gramsEach:60  } },


/* ══════════════════════════════════════════════════════
     🥗  SALADS & PREPARED DISHES — COMPLETE SECTION
  ══════════════════════════════════════════════════════ */

  /* ── Western / Global Salads ───────────────────────── */
  "caesar salad":                 { name:"Caesar Salad (with dressing & croutons)", category:"Salads", unit:"g", base:100, cal:180, prot:7,   carb:9,   fat:14,  servingSize:200, servingLabel:"1 bowl" },
  "caesar salad no croutons":     { name:"Caesar Salad (no croutons)",        category:"Salads", unit:"g", base:100, cal:145, prot:6.5, carb:4,   fat:12,  servingSize:180, servingLabel:"1 bowl" },
  "greek salad":                  { name:"Greek Salad (horiatiki)",            category:"Salads", unit:"g", base:100, cal:110, prot:3.5, carb:7,   fat:8,   servingSize:200, servingLabel:"1 plate" },
  "caprese salad":                { name:"Caprese Salad (tomato + mozzarella)",category:"Salads", unit:"g", base:100, cal:148, prot:7,   carb:3.5, fat:12,  servingSize:200, servingLabel:"1 plate" },
  "waldorf salad":                { name:"Waldorf Salad",                      category:"Salads", unit:"g", base:100, cal:175, prot:1.8, carb:14,  fat:13,  servingSize:200, servingLabel:"1 bowl" },
  "nicoise salad":                { name:"Salade Niçoise (tuna + egg + olive)",category:"Salads", unit:"g", base:100, cal:135, prot:9,   carb:7,   fat:8.5, servingSize:250, servingLabel:"1 plate" },
  "cobb salad":                   { name:"Cobb Salad (chicken + bacon + egg)", category:"Salads", unit:"g", base:100, cal:165, prot:11,  carb:5,   fat:12,  servingSize:300, servingLabel:"1 large bowl" },
  "garden side salad":            { name:"Garden Side Salad (lettuce + tomato + cucumber)", category:"Salads", unit:"g", base:100, cal:18, prot:1, carb:3.5, fat:0.3, servingSize:100, servingLabel:"1 side salad" },
  "coleslaw classic":             { name:"Coleslaw (creamy, classic)",         category:"Salads", unit:"g", base:100, cal:153, prot:1.5, carb:12,  fat:11,  servingSize:113, servingLabel:"½ cup" },
  "coleslaw vinegar":             { name:"Coleslaw (vinegar-based, lighter)",  category:"Salads", unit:"g", base:100, cal:60,  prot:1.2, carb:11,  fat:1.5, servingSize:113, servingLabel:"½ cup" },
  "pasta salad":                  { name:"Pasta Salad (cold, with vegetables)",category:"Salads", unit:"g", base:100, cal:170, prot:4.5, carb:23,  fat:7,   servingSize:200, servingLabel:"1 cup" },
  "potato salad":                 { name:"Potato Salad (mayo-based)",          category:"Salads", unit:"g", base:100, cal:180, prot:3,   carb:21,  fat:10,  servingSize:200, servingLabel:"1 cup" },
  "potato salad mustard":         { name:"Potato Salad (mustard / German style)", category:"Salads", unit:"g", base:100, cal:125, prot:2.5, carb:20, fat:4.5, servingSize:200, servingLabel:"1 cup" },
  "egg salad":                    { name:"Egg Salad (with mayo)",              category:"Salads", unit:"g", base:100, cal:185, prot:11,  carb:2,   fat:15,  servingSize:100, servingLabel:"½ cup" },
  "tuna salad":                   { name:"Tuna Salad (with mayo)",             category:"Salads", unit:"g", base:100, cal:187, prot:16,  carb:4,   fat:11,  servingSize:100, servingLabel:"½ cup" },
  "chicken salad":                { name:"Chicken Salad (with mayo)",          category:"Salads", unit:"g", base:100, cal:205, prot:17,  carb:3,   fat:14,  servingSize:100, servingLabel:"½ cup" },
  "bean salad three":             { name:"Three-Bean Salad",                   category:"Salads", unit:"g", base:100, cal:130, prot:5.5, carb:22,  fat:3,   servingSize:130, servingLabel:"½ cup" },
  "lentil salad":                 { name:"Lentil Salad (with herbs & vinaigrette)", category:"Salads", unit:"g", base:100, cal:130, prot:8.5, carb:19, fat:3,   servingSize:180, servingLabel:"1 cup" },
  "quinoa salad":                 { name:"Quinoa Salad (with roasted veg)",    category:"Salads", unit:"g", base:100, cal:140, prot:5,   carb:22,  fat:4.5, servingSize:200, servingLabel:"1 bowl" },
  "tabbouleh":                    { name:"Tabbouleh (bulgur + parsley + tomato)", category:"Salads", unit:"g", base:100, cal:105, prot:2.7, carb:17, fat:4,   servingSize:130, servingLabel:"½ cup" },
  "fattoush":                     { name:"Fattoush (Lebanese bread salad)",    category:"Salads", unit:"g", base:100, cal:100, prot:2.5, carb:14,  fat:4,   servingSize:150, servingLabel:"1 serving" },
  "panzanella":                   { name:"Panzanella (Italian bread & tomato)",category:"Salads", unit:"g", base:100, cal:145, prot:4,   carb:20,  fat:6,   servingSize:200, servingLabel:"1 bowl" },
  "insalata mista":               { name:"Insalata Mista (Italian mixed salad)",category:"Salads", unit:"g", base:100, cal:30,  prot:1.2, carb:4,   fat:1.5, servingSize:150, servingLabel:"1 side" },
  "fattoush lebanese":            { name:"Lebanese Fattoush",                  category:"Salads", unit:"g", base:100, cal:100, prot:2.5, carb:14,  fat:4,   servingSize:150, servingLabel:"1 serving" },
  "couscous salad":               { name:"Couscous Salad (with herbs & lemon)",category:"Salads", unit:"g", base:100, cal:148, prot:4.5, carb:28,  fat:3,   servingSize:200, servingLabel:"1 bowl" },
  "watermelon feta salad":        { name:"Watermelon & Feta Salad",            category:"Salads", unit:"g", base:100, cal:68,  prot:2.5, carb:8,   fat:3.5, servingSize:200, servingLabel:"1 serving" },
  "spinach strawberry salad":     { name:"Spinach & Strawberry Salad",         category:"Salads", unit:"g", base:100, cal:55,  prot:2,   carb:7,   fat:2.5, servingSize:150, servingLabel:"1 bowl" },
  "arugula parmesan salad":       { name:"Arugula & Parmesan Salad",           category:"Salads", unit:"g", base:100, cal:95,  prot:5,   carb:4,   fat:7,   servingSize:100, servingLabel:"1 side" },
  "beet goat cheese salad":       { name:"Beetroot & Goat Cheese Salad",       category:"Salads", unit:"g", base:100, cal:120, prot:4.5, carb:12,  fat:6.5, servingSize:150, servingLabel:"1 serving" },
  "kale salad massaged":          { name:"Massaged Kale Salad",                category:"Salads", unit:"g", base:100, cal:85,  prot:3.5, carb:9,   fat:4.5, servingSize:150, servingLabel:"1 bowl" },
  "asian slaw":                   { name:"Asian Slaw (cabbage + sesame + ginger)", category:"Salads", unit:"g", base:100, cal:80, prot:2, carb:10,  fat:4,   servingSize:150, servingLabel:"1 serving" },
  "mexican street corn salad":    { name:"Mexican Street Corn Salad (esquites)", category:"Salads", unit:"g", base:100, cal:165, prot:4.5, carb:20, fat:8,   servingSize:150, servingLabel:"1 serving" },
  "gado gado":                    { name:"Gado Gado (Indonesian peanut salad)",category:"Salads", unit:"g", base:100, cal:160, prot:7,   carb:14,  fat:9,   servingSize:250, servingLabel:"1 plate" },
  "larb thai minced meat":        { name:"Larb (Thai minced meat salad)",      category:"Salads", unit:"g", base:100, cal:135, prot:12,  carb:7,   fat:6.5, servingSize:200, servingLabel:"1 plate" },
  "papaya salad som tum":         { name:"Som Tum / Green Papaya Salad",       category:"Salads", unit:"g", base:100, cal:55,  prot:2.5, carb:10,  fat:1,   servingSize:150, servingLabel:"1 serving" },
  "corn salad":                   { name:"Corn Salad (sweet corn + peppers)",  category:"Salads", unit:"g", base:100, cal:100, prot:2.5, carb:18,  fat:3,   servingSize:130, servingLabel:"½ cup" },
  "chickpea salad":               { name:"Chickpea Salad",                     category:"Salads", unit:"g", base:100, cal:155, prot:7,   carb:22,  fat:5,   servingSize:150, servingLabel:"1 serving" },
  "poke bowl":                    { name:"Poke Bowl (tuna/salmon, rice, veg)", category:"Salads", unit:"g", base:100, cal:130, prot:9,   carb:17,  fat:3,   servingSize:400, servingLabel:"1 bowl" },
  "buddha bowl":                  { name:"Buddha Bowl (grain + veg + sauce)",  category:"Salads", unit:"g", base:100, cal:140, prot:6,   carb:20,  fat:5,   servingSize:400, servingLabel:"1 bowl" },

  /* ── Indian Salads & Raitas ────────────────────────── */
  "kachumber salad":              { name:"Kachumber Salad (onion, tomato, cucumber)", category:"Salads", unit:"g", base:100, cal:30, prot:1.2, carb:6,  fat:0.4, servingSize:100, servingLabel:"1 serving" },
  "carrot kosambari":             { name:"Carrot Kosambari (South Indian salad)", category:"Salads", unit:"g", base:100, cal:65, prot:2.5, carb:9,  fat:2.5, servingSize:100, servingLabel:"1 small bowl" },
  "moong sprout salad":           { name:"Moong Sprout Salad",                 category:"Salads", unit:"g", base:100, cal:75,  prot:5,   carb:12,  fat:0.5, servingSize:150, servingLabel:"1 bowl" },
  "mixed sprout salad":           { name:"Mixed Sprout Chaat",                 category:"Salads", unit:"g", base:100, cal:95,  prot:6,   carb:15,  fat:1.5, servingSize:150, servingLabel:"1 bowl" },
  "raita cucumber":               { name:"Cucumber Raita",                     category:"Salads", unit:"g", base:100, cal:42,  prot:3,   carb:4,   fat:1.5, servingSize:100, servingLabel:"½ cup" },
  "raita boondi":                 { name:"Boondi Raita",                       category:"Salads", unit:"g", base:100, cal:98,  prot:4.5, carb:11,  fat:4,   servingSize:100, servingLabel:"½ cup" },
  "raita onion tomato":           { name:"Onion Tomato Raita",                 category:"Salads", unit:"g", base:100, cal:50,  prot:3,   carb:5,   fat:1.8, servingSize:100, servingLabel:"½ cup" },
  "raita pineapple":              { name:"Pineapple Raita",                    category:"Salads", unit:"g", base:100, cal:65,  prot:2.5, carb:9,   fat:2,   servingSize:100, servingLabel:"½ cup" },
  "raita mixed veg":              { name:"Mixed Veg Raita",                    category:"Salads", unit:"g", base:100, cal:55,  prot:3,   carb:6,   fat:2,   servingSize:100, servingLabel:"½ cup" },
  "raita burani garlic":          { name:"Burani Raita (garlic, smoky)",        category:"Salads", unit:"g", base:100, cal:58,  prot:3,   carb:5.5, fat:2.5, servingSize:100, servingLabel:"½ cup" },
  "pyaaz salad":                  { name:"Pyaaz Salad (sliced onion, salt, lemon)", category:"Salads", unit:"g", base:100, cal:28, prot:0.8, carb:6.5, fat:0.1, servingSize:50, servingLabel:"1 side" },
  "kosambari lentil:":            { name:"Kosambari (moong dal + coconut, Karnataka)", category:"Salads", unit:"g", base:100, cal:85, prot:5, carb:11, fat:2.5, servingSize:100, servingLabel:"1 small bowl" },
  "gujarati kachumber":           { name:"Gujarati Kachumber (with peanuts)",  category:"Salads", unit:"g", base:100, cal:80,  prot:3.5, carb:8,   fat:4,   servingSize:100, servingLabel:"1 serving" },
  "onion cucumber salad raita":   { name:"Onion Cucumber Salad (South Indian thali side)", category:"Salads", unit:"g", base:100, cal:22, prot:0.9, carb:4.5, fat:0.2, servingSize:80, servingLabel:"1 side" },

  /* ── Prepared / Ready Dishes ───────────────────────── */
  "soup tomato homemade":         { name:"Tomato Soup (homemade)",             category:"Prepared Dishes", unit:"ml", base:100, cal:62, prot:1.5, carb:9,  fat:2.5, servingSize:240, servingLabel:"1 cup" },
  "soup tomato canned":           { name:"Tomato Soup (canned, condensed + water)", category:"Prepared Dishes", unit:"ml", base:100, cal:45, prot:1.3, carb:8.5, fat:0.9, servingSize:240, servingLabel:"1 cup" },
  "soup lentil red":              { name:"Red Lentil Soup",                    category:"Prepared Dishes", unit:"ml", base:100, cal:80,  prot:5,   carb:12,  fat:1.5, servingSize:250, servingLabel:"1 bowl" },
  "soup minestrone":              { name:"Minestrone Soup",                    category:"Prepared Dishes", unit:"ml", base:100, cal:55,  prot:2.5, carb:8.5, fat:1.5, servingSize:250, servingLabel:"1 bowl" },
  "soup chicken noodle":          { name:"Chicken Noodle Soup",                category:"Prepared Dishes", unit:"ml", base:100, cal:65,  prot:4.5, carb:7,   fat:1.5, servingSize:250, servingLabel:"1 bowl" },
  "soup pumpkin":                 { name:"Pumpkin Soup (creamy)",              category:"Prepared Dishes", unit:"ml", base:100, cal:72,  prot:1.5, carb:9,   fat:3.5, servingSize:250, servingLabel:"1 bowl" },
  "soup french onion":            { name:"French Onion Soup",                  category:"Prepared Dishes", unit:"ml", base:100, cal:80,  prot:3.5, carb:9,   fat:3.5, servingSize:300, servingLabel:"1 bowl" },
  "soup mushroom cream":          { name:"Cream of Mushroom Soup",             category:"Prepared Dishes", unit:"ml", base:100, cal:90,  prot:2,   carb:8,   fat:5.5, servingSize:250, servingLabel:"1 bowl" },
  "soup miso":                    { name:"Miso Soup",                          category:"Prepared Dishes", unit:"ml", base:100, cal:25,  prot:2,   carb:2.5, fat:1,   servingSize:240, servingLabel:"1 cup" },
  "soup rasam":                   { name:"Rasam (South Indian pepper broth)",  category:"Prepared Dishes", unit:"ml", base:100, cal:20,  prot:0.8, carb:4,   fat:0.5, servingSize:200, servingLabel:"1 cup" },
  "soup dal shorba":              { name:"Dal Shorba (Indian lentil soup)",    category:"Prepared Dishes", unit:"ml", base:100, cal:55,  prot:3.5, carb:8,   fat:1,   servingSize:240, servingLabel:"1 cup" },
  "soup mulligatawny":            { name:"Mulligatawny Soup",                  category:"Prepared Dishes", unit:"ml", base:100, cal:75,  prot:4,   carb:9,   fat:3,   servingSize:250, servingLabel:"1 bowl" },
  "stew beef irish":              { name:"Irish Beef Stew",                    category:"Prepared Dishes", unit:"g",  base:100, cal:115, prot:9,   carb:9,   fat:4.5, servingSize:300, servingLabel:"1 bowl" },
  "stew chicken":                 { name:"Chicken Stew",                       category:"Prepared Dishes", unit:"g",  base:100, cal:100, prot:9,   carb:8,   fat:3.5, servingSize:300, servingLabel:"1 bowl" },
  "stew vegetable":               { name:"Vegetable Stew",                     category:"Prepared Dishes", unit:"g",  base:100, cal:65,  prot:2.5, carb:10,  fat:2,   servingSize:250, servingLabel:"1 bowl" },
  "curry thai green chicken":     { name:"Thai Green Curry (chicken)",         category:"Prepared Dishes", unit:"g",  base:100, cal:135, prot:10,  carb:7,   fat:8,   servingSize:250, servingLabel:"1 serving" },
  "fried rice veg":               { name:"Vegetable Fried Rice",               category:"Prepared Dishes", unit:"g",  base:100, cal:160, prot:4,   carb:29,  fat:4,   servingSize:250, servingLabel:"1 bowl" },
  "fried rice chicken":           { name:"Chicken Fried Rice",                 category:"Prepared Dishes", unit:"g",  base:100, cal:175, prot:8,   carb:27,  fat:5,   servingSize:250, servingLabel:"1 bowl" },
  "congee plain":                 { name:"Congee / Rice Porridge (plain)",     category:"Prepared Dishes", unit:"g",  base:100, cal:50,  prot:1.2, carb:11,  fat:0.2, servingSize:300, servingLabel:"1 bowl" },
  "risotto mushroom":             { name:"Mushroom Risotto",                   category:"Prepared Dishes", unit:"g",  base:100, cal:165, prot:4.5, carb:25,  fat:5.5, servingSize:300, servingLabel:"1 bowl" },
  "risotto seafood":              { name:"Seafood Risotto",                    category:"Prepared Dishes", unit:"g",  base:100, cal:155, prot:8,   carb:23,  fat:4,   servingSize:300, servingLabel:"1 bowl" },
  "shakshuka":                    { name:"Shakshuka (eggs poached in tomato sauce)", category:"Prepared Dishes", unit:"g", base:100, cal:95, prot:5.5, carb:7, fat:5.5, servingSize:250, servingLabel:"1 serving" },
  "omelette french":              { name:"French Omelette (plain, butter)",    category:"Prepared Dishes", unit:"g",  base:100, cal:170, prot:11,  carb:0.5, fat:13,  servingSize:100, servingLabel:"1 omelette",   countable:{ unitName:"omelette", gramsEach:100 } },
  "frittata vegetable":           { name:"Vegetable Frittata",                 category:"Prepared Dishes", unit:"g",  base:100, cal:155, prot:10,  carb:5,   fat:11,  servingSize:120, servingLabel:"1 slice",       countable:{ unitName:"slice",    gramsEach:120 } },
  "quiche lorraine":              { name:"Quiche Lorraine (slice)",            category:"Prepared Dishes", unit:"g",  base:100, cal:290, prot:10,  carb:18,  fat:20,  servingSize:100, servingLabel:"1 slice",       countable:{ unitName:"slice",    gramsEach:100 } },
  "stuffed pepper":               { name:"Stuffed Bell Pepper (rice & meat)",  category:"Prepared Dishes", unit:"g",  base:100, cal:115, prot:7,   carb:12,  fat:4,   servingSize:200, servingLabel:"1 pepper",      countable:{ unitName:"pepper",   gramsEach:200 } },
  "stuffed cabbage rolls":        { name:"Stuffed Cabbage Rolls (golabki)",    category:"Prepared Dishes", unit:"g",  base:100, cal:120, prot:7.5, carb:11,  fat:4.5, servingSize:120, servingLabel:"1 roll",        countable:{ unitName:"roll",     gramsEach:120 } },
  "moussaka":                     { name:"Moussaka (Greek eggplant + lamb)",   category:"Prepared Dishes", unit:"g",  base:100, cal:185, prot:9,   carb:9,   fat:12,  servingSize:250, servingLabel:"1 slice",       countable:{ unitName:"slice",    gramsEach:250 } },
  "shepherd's pie":               { name:"Shepherd's Pie / Cottage Pie",       category:"Prepared Dishes", unit:"g",  base:100, cal:155, prot:8.5, carb:14,  fat:7,   servingSize:250, servingLabel:"1 serving",     countable:{ unitName:"serving",  gramsEach:250 } },
  "fish pie":                     { name:"Fish Pie (white fish + mash)",       category:"Prepared Dishes", unit:"g",  base:100, cal:140, prot:11,  carb:11,  fat:5.5, servingSize:250, servingLabel:"1 serving" },
  "beef stew dumplings":          { name:"Beef Stew with Dumplings",           category:"Prepared Dishes", unit:"g",  base:100, cal:165, prot:9,   carb:15,  fat:7,   servingSize:300, servingLabel:"1 bowl" },
  "chilli con carne":             { name:"Chilli Con Carne",                   category:"Prepared Dishes", unit:"g",  base:100, cal:150, prot:11,  carb:12,  fat:6,   servingSize:250, servingLabel:"1 cup" },
  "chilli veg three bean":        { name:"Veggie Chilli (three-bean)",         category:"Prepared Dishes", unit:"g",  base:100, cal:100, prot:5.5, carb:15,  fat:2,   servingSize:250, servingLabel:"1 cup" },
  "cottage cheese scramble":      { name:"Paneer / Cottage Cheese Scramble",   category:"Prepared Dishes", unit:"g",  base:100, cal:180, prot:12,  carb:5,   fat:12,  servingSize:150, servingLabel:"1 serving" },
  "ratatouille":                  { name:"Ratatouille",                        category:"Prepared Dishes", unit:"g",  base:100, cal:55,  prot:1.5, carb:7.5, fat:2.5, servingSize:200, servingLabel:"1 cup" },
  "bibimbap":                     { name:"Bibimbap (rice + veg + egg + gochujang)", category:"Prepared Dishes", unit:"g", base:100, cal:124, prot:5.5, carb:19, fat:3, servingSize:450, servingLabel:"1 bowl" },
  "meal prep chicken rice broccoli": { name:"Meal Prep: Chicken + Rice + Broccoli", category:"Prepared Dishes", unit:"g", base:100, cal:135, prot:12, carb:15, fat:2.5, servingSize:350, servingLabel:"1 container" },
  "meal prep salmon sweet potato": { name:"Meal Prep: Salmon + Sweet Potato",  category:"Prepared Dishes", unit:"g",  base:100, cal:155, prot:11,  carb:14,  fat:6,   servingSize:350, servingLabel:"1 container" },
  "mixed thali south indian":     { name:"South Indian Thali (full plate)",    category:"Prepared Dishes", unit:"g",  base:100, cal:128, prot:4.5, carb:22,  fat:3.5, servingSize:500, servingLabel:"1 thali" },
  "mixed thali north indian":     { name:"North Indian Thali (full plate)",    category:"Prepared Dishes", unit:"g",  base:100, cal:160, prot:6,   carb:25,  fat:5,   servingSize:600, servingLabel:"1 thali" },





  /* ══════════════════════════════════════════════════════
     ☕  BEVERAGES
  ══════════════════════════════════════════════════════ */

  "water":                         { name:"Water",                          category:"Beverages", unit:"ml", base:100, cal:0,  prot:0,   carb:0,   fat:0,   servingSize:250, servingLabel:"1 glass" },

  "tea plain":                     { name:"Tea (plain, no sugar)",          category:"Beverages", unit:"ml", base:100, cal:1,  prot:0,   carb:0.2, fat:0,   servingSize:150, servingLabel:"1 cup" },
  "tea milk":                      { name:"Milk Tea (no sugar)",            category:"Beverages", unit:"ml", base:100, cal:30, prot:1,   carb:3,   fat:1.5, servingSize:150, servingLabel:"1 cup" },
  "tea milk sugar":                { name:"Milk Tea (with sugar)",          category:"Beverages", unit:"ml", base:100, cal:45, prot:1,   carb:6,   fat:1.5, servingSize:150, servingLabel:"1 cup" },

  "coffee black":                  { name:"Black Coffee",                   category:"Beverages", unit:"ml", base:100, cal:2,  prot:0.3, carb:0,   fat:0,   servingSize:150, servingLabel:"1 cup" },
  "coffee milk":                   { name:"Coffee with Milk (no sugar)",    category:"Beverages", unit:"ml", base:100, cal:35, prot:1.5, carb:3,   fat:1.5, servingSize:150, servingLabel:"1 cup" },
  "coffee milk sugar":             { name:"Coffee with Milk & Sugar",       category:"Beverages", unit:"ml", base:100, cal:50, prot:1.5, carb:6,   fat:1.5, servingSize:150, servingLabel:"1 cup" },

  "filter coffee":                 { name:"South Indian Filter Coffee",     category:"Beverages", unit:"ml", base:100, cal:60, prot:2,   carb:7,   fat:2,   servingSize:150, servingLabel:"1 tumbler" },

  "buttermilk":                    { name:"Buttermilk / Chaas",              category:"Beverages", unit:"ml", base:100, cal:40, prot:2,   carb:4,   fat:1,   servingSize:200, servingLabel:"1 glass" },

  "lassi sweet":                   { name:"Sweet Lassi",                     category:"Beverages", unit:"ml", base:100, cal:90, prot:3,   carb:12,  fat:3,   servingSize:250, servingLabel:"1 glass" },
  "lassi salted":                  { name:"Salted Lassi",                    category:"Beverages", unit:"ml", base:100, cal:60, prot:3,   carb:5,   fat:3,   servingSize:250, servingLabel:"1 glass" },

  "coconut water":                 { name:"Coconut Water",                   category:"Beverages", unit:"ml", base:100, cal:19, prot:0.7, carb:4,   fat:0.2, servingSize:250, servingLabel:"1 glass" },

  "lemon juice":                   { name:"Lemon Juice (no sugar)",          category:"Beverages", unit:"ml", base:100, cal:10, prot:0.2, carb:3,   fat:0,   servingSize:200, servingLabel:"1 glass" },
  "lemon juice sugar":             { name:"Lemon Juice (with sugar)",        category:"Beverages", unit:"ml", base:100, cal:40, prot:0.2, carb:10,  fat:0,   servingSize:200, servingLabel:"1 glass" },










  /* ══════════════════════════════════════════════════════
     🍿  SNACKS — GLOBAL & INDIAN

  ══════════════════════════════════════════════════════ */

  /* ── Indian Fried & Savory Snacks ─────────────────── */
  "samosa veg":                   { name:"Samosa (fried, veg)",               category:"Snacks", unit:"g", base:100, cal:263, prot:5,   carb:30,  fat:14,  servingSize:50,  servingLabel:"1 samosa",            countable:{ unitName:"samosa",     gramsEach:50  } },
  "samosa chicken":               { name:"Chicken Samosa",                    category:"Snacks", unit:"g", base:100, cal:275, prot:8,   carb:28,  fat:14,  servingSize:55,  servingLabel:"1 samosa",            countable:{ unitName:"samosa",     gramsEach:55  } },
  "pakora onion":                 { name:"Onion Pakora / Bhajiya",            category:"Snacks", unit:"g", base:100, cal:310, prot:6,   carb:33,  fat:17,  servingSize:20,  servingLabel:"1 piece",             countable:{ unitName:"pakora",     gramsEach:20  } },
  "pakora paneer":                { name:"Paneer Pakora",                     category:"Snacks", unit:"g", base:100, cal:325, prot:10,  carb:27,  fat:19,  servingSize:30,  servingLabel:"1 piece",             countable:{ unitName:"pakora",     gramsEach:30  } },
  "pakora palak":                 { name:"Palak / Spinach Pakora",            category:"Snacks", unit:"g", base:100, cal:265, prot:5.5, carb:30,  fat:13,  servingSize:20,  servingLabel:"1 piece",             countable:{ unitName:"pakora",     gramsEach:20  } },
  "pakora aloo":                  { name:"Aloo Pakora",                       category:"Snacks", unit:"g", base:100, cal:290, prot:5,   carb:35,  fat:14,  servingSize:25,  servingLabel:"1 piece",             countable:{ unitName:"pakora",     gramsEach:25  } },
  "pakora mirchi":                { name:"Mirchi / Chilli Pakora",            category:"Snacks", unit:"g", base:100, cal:280, prot:4.5, carb:31,  fat:15,  servingSize:30,  servingLabel:"1 piece",             countable:{ unitName:"pakora",     gramsEach:30  } },
  "pakora bread":                 { name:"Bread Pakora",                      category:"Snacks", unit:"g", base:100, cal:310, prot:7,   carb:39,  fat:14,  servingSize:80,  servingLabel:"1 piece",             countable:{ unitName:"piece",      gramsEach:80  } },
  "pakora corn":                  { name:"Corn Pakora",                       category:"Snacks", unit:"g", base:100, cal:295, prot:5,   carb:34,  fat:15,  servingSize:25,  servingLabel:"1 piece",             countable:{ unitName:"pakora",     gramsEach:25  } },
  "vada pav":                     { name:"Vada Pav",                          category:"Snacks", unit:"g", base:100, cal:286, prot:6,   carb:42,  fat:11,  servingSize:130, servingLabel:"1 vada pav",          countable:{ unitName:"vada pav",   gramsEach:130 } },
  "medu vada":                    { name:"Medu Vada",                         category:"Snacks", unit:"g", base:100, cal:322, prot:9,   carb:40,  fat:14,  servingSize:60,  servingLabel:"1 vada",              countable:{ unitName:"vada",       gramsEach:60  } },
  "dahi vada":                    { name:"Dahi Vada",                         category:"Snacks", unit:"g", base:100, cal:165, prot:6,   carb:22,  fat:6,   servingSize:80,  servingLabel:"1 piece",             countable:{ unitName:"vada",       gramsEach:80  } },
  "pani puri golgappa":           { name:"Pani Puri / Golgappa",              category:"Snacks", unit:"g", base:100, cal:365, prot:6,   carb:55,  fat:13,  servingSize:13,  servingLabel:"1 puri",              countable:{ unitName:"puri",       gramsEach:13  } },
  "dahi puri":                    { name:"Dahi Puri",                         category:"Snacks", unit:"g", base:100, cal:175, prot:5,   carb:28,  fat:5,   servingSize:20,  servingLabel:"1 puri",              countable:{ unitName:"puri",       gramsEach:20  } },
  "sev puri":                     { name:"Sev Puri",                          category:"Snacks", unit:"g", base:100, cal:310, prot:6,   carb:45,  fat:12,  servingSize:100, servingLabel:"1 serving" },
  "bhel puri":                    { name:"Bhel Puri",                         category:"Snacks", unit:"g", base:100, cal:166, prot:4,   carb:29,  fat:4.5, servingSize:120, servingLabel:"1 serving" },
  "ragda pattice":                { name:"Ragda Pattice",                     category:"Snacks", unit:"g", base:100, cal:190, prot:7,   carb:30,  fat:5,   servingSize:250, servingLabel:"1 plate" },
  "pav bhaji snack":              { name:"Pav Bhaji",                         category:"Snacks", unit:"g", base:100, cal:190, prot:5,   carb:28,  fat:7,   servingSize:250, servingLabel:"1 plate" },
  "kachori plain":                { name:"Kachori (plain)",                   category:"Snacks", unit:"g", base:100, cal:390, prot:7,   carb:45,  fat:20,  servingSize:50,  servingLabel:"1 kachori",           countable:{ unitName:"kachori",    gramsEach:50  } },
  "kachori dal":                  { name:"Dal Kachori",                       category:"Snacks", unit:"g", base:100, cal:405, prot:8,   carb:46,  fat:21,  servingSize:60,  servingLabel:"1 kachori",           countable:{ unitName:"kachori",    gramsEach:60  } },
  "kachori mawa":                 { name:"Mawa Kachori (sweet)",              category:"Snacks", unit:"g", base:100, cal:450, prot:7,   carb:55,  fat:23,  servingSize:60,  servingLabel:"1 kachori",           countable:{ unitName:"kachori",    gramsEach:60  } },
  "dabeli":                       { name:"Dabeli",                            category:"Snacks", unit:"g", base:100, cal:210, prot:5,   carb:32,  fat:7.5, servingSize:120, servingLabel:"1 dabeli",            countable:{ unitName:"dabeli",     gramsEach:120 } },
  "misal pav":                    { name:"Misal Pav",                         category:"Snacks", unit:"g", base:100, cal:180, prot:7,   carb:28,  fat:5,   servingSize:250, servingLabel:"1 plate" },
  "namkeen mixture":              { name:"Namkeen / Chivda Mixture",          category:"Snacks", unit:"g", base:100, cal:480, prot:9,   carb:56,  fat:24,  servingSize:30,  servingLabel:"1 small handful" },
  "poha chivda":                  { name:"Poha Chivda (dry snack)",           category:"Snacks", unit:"g", base:100, cal:420, prot:8,   carb:62,  fat:16,  servingSize:30,  servingLabel:"1 handful" },
  "murukku":                      { name:"Murukku",                           category:"Snacks", unit:"g", base:100, cal:498, prot:7,   carb:62,  fat:24,  servingSize:20,  servingLabel:"1 piece",             countable:{ unitName:"murukku",    gramsEach:20  } },
  "chakli":                       { name:"Chakli",                            category:"Snacks", unit:"g", base:100, cal:495, prot:7,   carb:65,  fat:23,  servingSize:10,  servingLabel:"1 piece",             countable:{ unitName:"piece",      gramsEach:10  } },
  "thattai":                      { name:"Thattai (rice crackers)",           category:"Snacks", unit:"g", base:100, cal:490, prot:8,   carb:62,  fat:22,  servingSize:10,  servingLabel:"1 piece",             countable:{ unitName:"piece",      gramsEach:10  } },
  "mathri":                       { name:"Mathri",                            category:"Snacks", unit:"g", base:100, cal:470, prot:8,   carb:63,  fat:21,  servingSize:10,  servingLabel:"1 piece",             countable:{ unitName:"piece",      gramsEach:10  } },
  "khakra plain":                 { name:"Khakra (plain)",                    category:"Snacks", unit:"g", base:100, cal:404, prot:11,  carb:72,  fat:8.5, servingSize:20,  servingLabel:"1 khakra",            countable:{ unitName:"khakra",     gramsEach:20  } },
  "khakra methi":                 { name:"Khakra (methi / fenugreek)",        category:"Snacks", unit:"g", base:100, cal:398, prot:11,  carb:70,  fat:9,   servingSize:20,  servingLabel:"1 khakra",            countable:{ unitName:"khakra",     gramsEach:20  } },
  "khakra masala":                { name:"Khakra (masala / spiced)",          category:"Snacks", unit:"g", base:100, cal:410, prot:10,  carb:71,  fat:10,  servingSize:20,  servingLabel:"1 khakra",            countable:{ unitName:"khakra",     gramsEach:20  } },
  "dalmoth":                      { name:"Dal Moth / Moong Dal Namkeen",      category:"Snacks", unit:"g", base:100, cal:460, prot:18,  carb:52,  fat:21,  servingSize:30,  servingLabel:"1 handful" },
  "roasted chana":                { name:"Roasted Chana / Bhuna Chana",       category:"Snacks", unit:"g", base:100, cal:364, prot:19,  carb:61,  fat:6,   servingSize:30,  servingLabel:"¼ cup" },
  "roasted makhana":              { name:"Roasted Makhana / Fox Nuts",        category:"Snacks", unit:"g", base:100, cal:347, prot:9.7, carb:76,  fat:0.1, servingSize:30,  servingLabel:"1 cup puffed" },
  "groundnut chikki":             { name:"Peanut / Groundnut Chikki",         category:"Snacks", unit:"g", base:100, cal:460, prot:11,  carb:58,  fat:22,  servingSize:30,  servingLabel:"1 piece",             countable:{ unitName:"piece",      gramsEach:30  } },
  "til chikki":                   { name:"Til / Sesame Chikki",               category:"Snacks", unit:"g", base:100, cal:500, prot:10,  carb:57,  fat:28,  servingSize:25,  servingLabel:"1 piece",             countable:{ unitName:"piece",      gramsEach:25  } },
  "gajak":                        { name:"Gajak (sesame-jaggery bar)",        category:"Snacks", unit:"g", base:100, cal:490, prot:10,  carb:58,  fat:26,  servingSize:30,  servingLabel:"1 piece",             countable:{ unitName:"piece",      gramsEach:30  } },
  "sev plain":                    { name:"Sev (plain thin)",                  category:"Snacks", unit:"g", base:100, cal:545, prot:12,  carb:56,  fat:31,  servingSize:15,  servingLabel:"1 handful" },
  "gathiya thick sev":            { name:"Gathiya / Thick Sev",               category:"Snacks", unit:"g", base:100, cal:520, prot:12,  carb:57,  fat:28,  servingSize:20,  servingLabel:"1 handful" },
  "chana jor garam":              { name:"Chana Jor Garam",                   category:"Snacks", unit:"g", base:100, cal:370, prot:16,  carb:60,  fat:7,   servingSize:30,  servingLabel:"1 small pack" },
  "bhutta boiled":                { name:"Corn on the Cob / Bhutta (boiled)", category:"Snacks", unit:"g", base:100, cal:96,  prot:3.4, carb:21,  fat:1.5, servingSize:100, servingLabel:"½ cob",               countable:{ unitName:"cob",        gramsEach:100 } },
  "bhutta roasted":               { name:"Roasted Corn / Bhutta (grilled)",   category:"Snacks", unit:"g", base:100, cal:110, prot:3.5, carb:23,  fat:2,   servingSize:100, servingLabel:"½ cob",               countable:{ unitName:"cob",        gramsEach:100 } },
  "papdi crisps":                 { name:"Papdi (fried flour crisps)",        category:"Snacks", unit:"g", base:100, cal:480, prot:7.5, carb:62,  fat:22,  servingSize:5,   servingLabel:"1 piece",             countable:{ unitName:"papdi",      gramsEach:5   } },
  "fafda":                        { name:"Fafda",                             category:"Snacks", unit:"g", base:100, cal:490, prot:10,  carb:62,  fat:23,  servingSize:30,  servingLabel:"2–3 strips" },
  "khaman dhokla":                { name:"Khaman Dhokla",                     category:"Snacks", unit:"g", base:100, cal:160, prot:6,   carb:27,  fat:3.5, servingSize:60,  servingLabel:"1 piece",             countable:{ unitName:"piece",      gramsEach:60  } },
  "dhokla steamed":               { name:"Steamed Dhokla (white)",            category:"Snacks", unit:"g", base:100, cal:135, prot:5,   carb:25,  fat:2.5, servingSize:60,  servingLabel:"1 piece",             countable:{ unitName:"piece",      gramsEach:60  } },
  "handvo":                       { name:"Handvo",                            category:"Snacks", unit:"g", base:100, cal:230, prot:7,   carb:35,  fat:7,   servingSize:80,  servingLabel:"1 slice",             countable:{ unitName:"slice",      gramsEach:80  } },
  "khandvi":                      { name:"Khandvi",                           category:"Snacks", unit:"g", base:100, cal:155, prot:6,   carb:22,  fat:5,   servingSize:15,  servingLabel:"1 roll",              countable:{ unitName:"roll",       gramsEach:15  } },
  "muthia steamed":               { name:"Steamed Muthia",                    category:"Snacks", unit:"g", base:100, cal:175, prot:5.5, carb:29,  fat:4,   servingSize:30,  servingLabel:"1 piece",             countable:{ unitName:"piece",      gramsEach:30  } },
  "aloo tikki":                   { name:"Aloo Tikki",                        category:"Snacks", unit:"g", base:100, cal:195, prot:4,   carb:28,  fat:8,   servingSize:60,  servingLabel:"1 tikki",             countable:{ unitName:"tikki",      gramsEach:60  } },
  "dahi aloo tikki":              { name:"Dahi Aloo Tikki Chaat",             category:"Snacks", unit:"g", base:100, cal:155, prot:5,   carb:24,  fat:5,   servingSize:150, servingLabel:"1 serving" },
  "paneer tikka snack":           { name:"Paneer Tikka",                      category:"Snacks", unit:"g", base:100, cal:225, prot:13,  carb:7,   fat:16,  servingSize:150, servingLabel:"1 serving" },
  "seekh kebab snack":            { name:"Seekh Kebab",                       category:"Snacks", unit:"g", base:100, cal:235, prot:20,  carb:8,   fat:14,  servingSize:75,  servingLabel:"1 kebab",             countable:{ unitName:"kebab",      gramsEach:75  } },
  "chicken 65":                   { name:"Chicken 65",                        category:"Snacks", unit:"g", base:100, cal:295, prot:25,  carb:14,  fat:14,  servingSize:150, servingLabel:"1 serving" },
  "chicken lollipop":             { name:"Chicken Lollipop",                  category:"Snacks", unit:"g", base:100, cal:240, prot:18,  carb:12,  fat:13,  servingSize:45,  servingLabel:"1 piece",             countable:{ unitName:"piece",      gramsEach:45  } },
  "fish fry snack":               { name:"Fish Fry (spiced, shallow-fried)",  category:"Snacks", unit:"g", base:100, cal:200, prot:22,  carb:4,   fat:11,  servingSize:100, servingLabel:"1 piece",             countable:{ unitName:"piece",      gramsEach:100 } },
  "prawn fry":                    { name:"Prawn Fry",                         category:"Snacks", unit:"g", base:100, cal:185, prot:19,  carb:7,   fat:9,   servingSize:80,  servingLabel:"1 serving" },
  "egg roll snack":               { name:"Egg Roll (Indian street style)",    category:"Snacks", unit:"g", base:100, cal:255, prot:9,   carb:31,  fat:10,  servingSize:120, servingLabel:"1 roll",              countable:{ unitName:"roll",       gramsEach:120 } },
  "kathi roll":                   { name:"Kathi Roll (chicken)",              category:"Snacks", unit:"g", base:100, cal:235, prot:12,  carb:27,  fat:9,   servingSize:150, servingLabel:"1 roll",              countable:{ unitName:"roll",       gramsEach:150 } },
  "corn cheese balls":            { name:"Corn Cheese Balls (fried)",         category:"Snacks", unit:"g", base:100, cal:330, prot:8,   carb:30,  fat:19,  servingSize:20,  servingLabel:"1 ball",              countable:{ unitName:"ball",       gramsEach:20  } },
  "spring roll indian":           { name:"Veg Spring Roll (Indian, fried)",   category:"Snacks", unit:"g", base:100, cal:270, prot:5.5, carb:34,  fat:12,  servingSize:70,  servingLabel:"1 roll",              countable:{ unitName:"roll",       gramsEach:70  } },
  "momos veg steamed":            { name:"Veg Momos (steamed)",               category:"Snacks", unit:"g", base:100, cal:155, prot:5,   carb:26,  fat:3,   servingSize:40,  servingLabel:"1 piece",             countable:{ unitName:"momo",       gramsEach:40  } },
  "momos chicken fried":          { name:"Chicken Momos (fried)",             category:"Snacks", unit:"g", base:100, cal:265, prot:12,  carb:22,  fat:14,  servingSize:40,  servingLabel:"1 piece",             countable:{ unitName:"momo",       gramsEach:40  } },
  "puri snack":                   { name:"Puri (fried, plain)",               category:"Snacks", unit:"g", base:100, cal:403, prot:8,   carb:55,  fat:17,  servingSize:30,  servingLabel:"1 puri",              countable:{ unitName:"puri",       gramsEach:30  } },

  /* ── Puffed & Popped Snacks ────────────────────────── */
  "puffed rice murmura":          { name:"Puffed Rice / Murmura (plain)",     category:"Snacks", unit:"g", base:100, cal:402, prot:6.3, carb:90,  fat:0.5, servingSize:15,  servingLabel:"1 cup" },
  "murmura chivda":               { name:"Murmura Chivda (spiced puffed rice)",category:"Snacks", unit:"g", base:100, cal:410, prot:6,   carb:82,  fat:8,   servingSize:30,  servingLabel:"1 cup" },
  "puffed wheat":                 { name:"Puffed Wheat",                      category:"Snacks", unit:"g", base:100, cal:357, prot:15,  carb:78,  fat:1.5, servingSize:15,  servingLabel:"1 cup" },
  "puffed jowar":                 { name:"Puffed Jowar / Sorghum",            category:"Snacks", unit:"g", base:100, cal:350, prot:10,  carb:74,  fat:2.5, servingSize:20,  servingLabel:"1 cup" },
  "puffed bajra":                 { name:"Puffed Bajra",                      category:"Snacks", unit:"g", base:100, cal:360, prot:11,  carb:73,  fat:4,   servingSize:20,  servingLabel:"1 cup" },
  "popcorn air popped":           { name:"Popcorn (air-popped)",              category:"Snacks", unit:"g", base:100, cal:387, prot:13,  carb:78,  fat:4.5, servingSize:14,  servingLabel:"1 cup" },
  "popcorn buttered":             { name:"Popcorn (buttered)",                category:"Snacks", unit:"g", base:100, cal:535, prot:7,   carb:53,  fat:34,  servingSize:14,  servingLabel:"1 cup" },
  "popcorn caramel":              { name:"Caramel Popcorn",                   category:"Snacks", unit:"g", base:100, cal:480, prot:4,   carb:77,  fat:17,  servingSize:28,  servingLabel:"1 oz" },
  "popcorn cheese":               { name:"Cheese Popcorn",                    category:"Snacks", unit:"g", base:100, cal:510, prot:9,   carb:58,  fat:28,  servingSize:28,  servingLabel:"1 oz" },
  "popcorn kettle":               { name:"Kettle Corn (sweet & salty)",       category:"Snacks", unit:"g", base:100, cal:455, prot:7,   carb:68,  fat:18,  servingSize:28,  servingLabel:"1 oz" },
  "corn puffs":                   { name:"Corn Puffs (plain)",                category:"Snacks", unit:"g", base:100, cal:483, prot:7,   carb:77,  fat:17,  servingSize:28,  servingLabel:"1 oz" },

  /* ── Chips & Crisps ────────────────────────────────── */
  "potato chips salted":          { name:"Potato Chips / Crisps (salted)",    category:"Snacks", unit:"g", base:100, cal:536, prot:7,   carb:53,  fat:34,  servingSize:28,  servingLabel:"1 oz" },
  "potato chips masala":          { name:"Potato Chips (masala / spiced)",    category:"Snacks", unit:"g", base:100, cal:530, prot:6.5, carb:55,  fat:32,  servingSize:28,  servingLabel:"1 small pack" },
  "potato chips sour cream":      { name:"Potato Chips (sour cream & onion)", category:"Snacks", unit:"g", base:100, cal:534, prot:7,   carb:54,  fat:33,  servingSize:28,  servingLabel:"1 oz" },
  "potato chips bbq":             { name:"Potato Chips (BBQ flavour)",        category:"Snacks", unit:"g", base:100, cal:528, prot:6.5, carb:56,  fat:32,  servingSize:28,  servingLabel:"1 oz" },
  "lays classic":                 { name:"Lay's Classic (salted)",            category:"Snacks", unit:"g", base:100, cal:536, prot:7,   carb:55,  fat:34,  servingSize:28,  servingLabel:"1 small pack" },
  "pringles original":            { name:"Pringles (original)",               category:"Snacks", unit:"g", base:100, cal:524, prot:5.5, carb:55,  fat:33,  servingSize:28,  servingLabel:"14 crisps" },
  "pringles sour cream":          { name:"Pringles (sour cream & onion)",     category:"Snacks", unit:"g", base:100, cal:530, prot:6,   carb:55,  fat:34,  servingSize:28,  servingLabel:"14 crisps" },
  "tortilla chips plain":         { name:"Tortilla Chips (plain / salted)",   category:"Snacks", unit:"g", base:100, cal:489, prot:8,   carb:63,  fat:23,  servingSize:28,  servingLabel:"~12 chips" },
  "doritos nacho cheese":         { name:"Doritos (nacho cheese)",            category:"Snacks", unit:"g", base:100, cal:503, prot:7,   carb:64,  fat:25,  servingSize:28,  servingLabel:"1 oz" },
  "doritos cool ranch":           { name:"Doritos (cool ranch / cool american)",category:"Snacks",unit:"g", base:100, cal:495, prot:7,   carb:63,  fat:24,  servingSize:28,  servingLabel:"1 oz" },
  "cheetos puffs":                { name:"Cheetos Puffs",                     category:"Snacks", unit:"g", base:100, cal:545, prot:7,   carb:56,  fat:33,  servingSize:28,  servingLabel:"1 oz" },
  "cheetos crunchy":              { name:"Cheetos Crunchy",                   category:"Snacks", unit:"g", base:100, cal:560, prot:7.5, carb:53,  fat:37,  servingSize:28,  servingLabel:"1 oz" },
  "funyuns onion rings":          { name:"Funyuns / Onion Ring Snack",        category:"Snacks", unit:"g", base:100, cal:500, prot:6,   carb:65,  fat:24,  servingSize:28,  servingLabel:"1 oz" },
  "takis chips":                  { name:"Takis (rolled tortilla chips)",     category:"Snacks", unit:"g", base:100, cal:490, prot:7,   carb:62,  fat:24,  servingSize:28,  servingLabel:"1 oz" },
  "veggie chips":                 { name:"Veggie Chips (mixed)",              category:"Snacks", unit:"g", base:100, cal:450, prot:4,   carb:62,  fat:21,  servingSize:28,  servingLabel:"1 oz" },
  "sweet potato chips baked":     { name:"Sweet Potato Chips (baked)",        category:"Snacks", unit:"g", base:100, cal:420, prot:4,   carb:68,  fat:15,  servingSize:28,  servingLabel:"1 oz" },
  "banana chips fried":           { name:"Banana Chips (fried, salted)",      category:"Snacks", unit:"g", base:100, cal:519, prot:2.3, carb:64,  fat:28,  servingSize:28,  servingLabel:"1 oz" },
  "jackfruit chips snack":        { name:"Jackfruit Chips (fried)",           category:"Snacks", unit:"g", base:100, cal:520, prot:2.5, carb:65,  fat:27,  servingSize:28,  servingLabel:"1 small pack" },
  "tapioca chips":                { name:"Tapioca / Kappa Chips",             category:"Snacks", unit:"g", base:100, cal:530, prot:1.5, carb:68,  fat:27,  servingSize:28,  servingLabel:"1 small pack" },
  "beetroot chips baked":         { name:"Beetroot Chips (baked)",            category:"Snacks", unit:"g", base:100, cal:390, prot:5,   carb:66,  fat:13,  servingSize:28,  servingLabel:"1 oz" },
  "kale chips baked":             { name:"Kale Chips (baked, salted)",        category:"Snacks", unit:"g", base:100, cal:390, prot:12,  carb:47,  fat:19,  servingSize:20,  servingLabel:"1 oz" },
  "rice crackers plain":          { name:"Rice Crackers (plain)",             category:"Snacks", unit:"g", base:100, cal:392, prot:7,   carb:83,  fat:3,   servingSize:5,   servingLabel:"1 cracker",           countable:{ unitName:"cracker",    gramsEach:5   } },
  "multigrain crackers":          { name:"Multigrain Crackers",               category:"Snacks", unit:"g", base:100, cal:430, prot:9,   carb:66,  fat:14,  servingSize:4,   servingLabel:"1 cracker",           countable:{ unitName:"cracker",    gramsEach:4   } },
  "wheat crackers":               { name:"Wheat / Cream Crackers",            category:"Snacks", unit:"g", base:100, cal:448, prot:9,   carb:68,  fat:15,  servingSize:4,   servingLabel:"1 cracker",           countable:{ unitName:"cracker",    gramsEach:4   } },
  "rice cakes plain":             { name:"Rice Cakes (plain)",                category:"Snacks", unit:"g", base:100, cal:392, prot:8,   carb:82,  fat:2.8, servingSize:9,   servingLabel:"1 rice cake",         countable:{ unitName:"cake",       gramsEach:9   } },
  "rice cakes caramel":           { name:"Rice Cakes (caramel flavour)",      category:"Snacks", unit:"g", base:100, cal:390, prot:7,   carb:83,  fat:2.5, servingSize:9,   servingLabel:"1 rice cake",         countable:{ unitName:"cake",       gramsEach:9   } },
  "pretzels hard":                { name:"Pretzels (hard, salted)",           category:"Snacks", unit:"g", base:100, cal:381, prot:9,   carb:80,  fat:3,   servingSize:28,  servingLabel:"1 oz" },
  "soft pretzel":                 { name:"Soft Pretzel",                      category:"Snacks", unit:"g", base:100, cal:275, prot:8,   carb:55,  fat:2.5, servingSize:115, servingLabel:"1 pretzel",           countable:{ unitName:"pretzel",    gramsEach:115 } },
  "breadstick grissini":          { name:"Breadstick / Grissini",             category:"Snacks", unit:"g", base:100, cal:427, prot:11,  carb:74,  fat:9.5, servingSize:10,  servingLabel:"1 breadstick",        countable:{ unitName:"breadstick", gramsEach:10  } },
  "cheese puffs":                 { name:"Cheese Puffs / Kurkure-style",      category:"Snacks", unit:"g", base:100, cal:524, prot:6,   carb:58,  fat:29,  servingSize:28,  servingLabel:"1 oz" },
  "pork rinds":                   { name:"Pork Rinds / Chicharrones",         category:"Snacks", unit:"g", base:100, cal:544, prot:61,  carb:0,   fat:31,  servingSize:28,  servingLabel:"1 oz" },

  /* ── Savory Biscuits & Crackers ────────────────────── */
  "digestive biscuit":            { name:"Digestive Biscuit",                 category:"Snacks", unit:"g", base:100, cal:471, prot:6.5, carb:67,  fat:20,  servingSize:14,  servingLabel:"1 biscuit",           countable:{ unitName:"biscuit",    gramsEach:14  } },
  "marie biscuit":                { name:"Marie Biscuit",                     category:"Snacks", unit:"g", base:100, cal:422, prot:7,   carb:74,  fat:11,  servingSize:7,   servingLabel:"1 biscuit",           countable:{ unitName:"biscuit",    gramsEach:7   } },
  "parle g":                      { name:"Parle-G Biscuit",                   category:"Snacks", unit:"g", base:100, cal:452, prot:6.7, carb:77,  fat:12,  servingSize:9,   servingLabel:"1 biscuit",           countable:{ unitName:"biscuit",    gramsEach:9   } },
  "good day biscuit":             { name:"Good Day / Cashew Biscuit",         category:"Snacks", unit:"g", base:100, cal:480, prot:7,   carb:66,  fat:21,  servingSize:12,  servingLabel:"1 biscuit",           countable:{ unitName:"biscuit",    gramsEach:12  } },
  "oreo cookie":                  { name:"Oreo Cookie",                       category:"Snacks", unit:"g", base:100, cal:471, prot:5,   carb:70,  fat:19,  servingSize:11,  servingLabel:"1 cookie",            countable:{ unitName:"cookie",     gramsEach:11  } },
  "ritz cracker":                 { name:"Ritz Cracker",                      category:"Snacks", unit:"g", base:100, cal:500, prot:6,   carb:63,  fat:25,  servingSize:5,   servingLabel:"1 cracker",           countable:{ unitName:"cracker",    gramsEach:5   } },
  "graham cracker":               { name:"Graham Cracker",                    category:"Snacks", unit:"g", base:100, cal:424, prot:6.8, carb:76,  fat:10,  servingSize:14,  servingLabel:"1 cracker",           countable:{ unitName:"cracker",    gramsEach:14  } },
  "wasa crispbread":              { name:"Wasa Crispbread / Rye Cracker",     category:"Snacks", unit:"g", base:100, cal:335, prot:11,  carb:71,  fat:1.5, servingSize:11,  servingLabel:"1 crispbread",        countable:{ unitName:"crispbread", gramsEach:11  } },
  "cream cracker":                { name:"Cream Cracker",                     category:"Snacks", unit:"g", base:100, cal:440, prot:8.5, carb:68,  fat:15,  servingSize:7,   servingLabel:"1 cracker",           countable:{ unitName:"cracker",    gramsEach:7   } },

  /* ── Sweet Cookies & Biscuits ──────────────────────── */
  "chocolate chip cookie":        { name:"Chocolate Chip Cookie",             category:"Snacks", unit:"g", base:100, cal:480, prot:5,   carb:63,  fat:24,  servingSize:16,  servingLabel:"1 cookie",            countable:{ unitName:"cookie",     gramsEach:16  } },
  "oatmeal raisin cookie":        { name:"Oatmeal Raisin Cookie",             category:"Snacks", unit:"g", base:100, cal:430, prot:6,   carb:67,  fat:16,  servingSize:25,  servingLabel:"1 cookie",            countable:{ unitName:"cookie",     gramsEach:25  } },
  "peanut butter cookie":         { name:"Peanut Butter Cookie",              category:"Snacks", unit:"g", base:100, cal:490, prot:9,   carb:57,  fat:26,  servingSize:16,  servingLabel:"1 cookie",            countable:{ unitName:"cookie",     gramsEach:16  } },
  "shortbread cookie":            { name:"Shortbread Cookie",                 category:"Snacks", unit:"g", base:100, cal:498, prot:5,   carb:62,  fat:26,  servingSize:14,  servingLabel:"1 cookie",            countable:{ unitName:"cookie",     gramsEach:14  } },
  "sugar cookie":                 { name:"Sugar Cookie",                      category:"Snacks", unit:"g", base:100, cal:462, prot:5,   carb:69,  fat:19,  servingSize:20,  servingLabel:"1 cookie",            countable:{ unitName:"cookie",     gramsEach:20  } },
  "snickerdoodle":                { name:"Snickerdoodle Cookie",              category:"Snacks", unit:"g", base:100, cal:455, prot:5,   carb:68,  fat:18,  servingSize:16,  servingLabel:"1 cookie",            countable:{ unitName:"cookie",     gramsEach:16  } },
  "biscotti":                     { name:"Biscotti",                          category:"Snacks", unit:"g", base:100, cal:430, prot:8,   carb:72,  fat:13,  servingSize:30,  servingLabel:"1 biscotti",          countable:{ unitName:"biscotti",   gramsEach:30  } },
  "vanilla wafer":                { name:"Vanilla Wafer",                     category:"Snacks", unit:"g", base:100, cal:450, prot:5,   carb:70,  fat:17,  servingSize:8,   servingLabel:"1 wafer",             countable:{ unitName:"wafer",      gramsEach:8   } },
  "bourbon biscuit":              { name:"Bourbon Biscuit",                   category:"Snacks", unit:"g", base:100, cal:460, prot:5.5, carb:67,  fat:19,  servingSize:12,  servingLabel:"1 biscuit",           countable:{ unitName:"biscuit",    gramsEach:12  } },
  "hide and seek biscuit":        { name:"Hide & Seek Chocolate Chip Biscuit",category:"Snacks", unit:"g", base:100, cal:495, prot:6,   carb:67,  fat:22,  servingSize:10,  servingLabel:"1 biscuit",           countable:{ unitName:"biscuit",    gramsEach:10  } },
  "custard cream biscuit":        { name:"Custard Cream Biscuit",             category:"Snacks", unit:"g", base:100, cal:488, prot:5.5, carb:70,  fat:20,  servingSize:12,  servingLabel:"1 biscuit",           countable:{ unitName:"biscuit",    gramsEach:12  } },
  "fig roll":                     { name:"Fig Roll / Fig Newton",             category:"Snacks", unit:"g", base:100, cal:358, prot:4,   carb:70,  fat:7,   servingSize:16,  servingLabel:"1 piece",             countable:{ unitName:"piece",      gramsEach:16  } },
  "nice biscuit":                 { name:"Nice Biscuit (coconut)",            category:"Snacks", unit:"g", base:100, cal:476, prot:6,   carb:68,  fat:20,  servingSize:9,   servingLabel:"1 biscuit",           countable:{ unitName:"biscuit",    gramsEach:9   } },
  "butter cookie":                { name:"Butter Cookie / Danish Cookie",     category:"Snacks", unit:"g", base:100, cal:512, prot:6,   carb:62,  fat:28,  servingSize:14,  servingLabel:"1 cookie",            countable:{ unitName:"cookie",     gramsEach:14  } },
  "waffle cone":                  { name:"Waffle Cone",                       category:"Snacks", unit:"g", base:100, cal:412, prot:7.5, carb:77,  fat:8.5, servingSize:28,  servingLabel:"1 cone",              countable:{ unitName:"cone",       gramsEach:28  } },

  /* ── Chocolate & Candy ─────────────────────────────── */
  "dark chocolate 70":            { name:"Dark Chocolate (70–85%)",           category:"Snacks", unit:"g", base:100, cal:598, prot:8,   carb:46,  fat:43,  servingSize:28,  servingLabel:"2 squares" },
  "milk chocolate":               { name:"Milk Chocolate Bar",                category:"Snacks", unit:"g", base:100, cal:535, prot:8,   carb:60,  fat:30,  servingSize:28,  servingLabel:"1 oz" },
  "white chocolate":              { name:"White Chocolate",                   category:"Snacks", unit:"g", base:100, cal:539, prot:5.9, carb:59,  fat:32,  servingSize:28,  servingLabel:"1 oz" },
  "snickers":                     { name:"Snickers Bar",                      category:"Snacks", unit:"g", base:100, cal:488, prot:8,   carb:58,  fat:25,  servingSize:52,  servingLabel:"1 bar",               countable:{ unitName:"bar",        gramsEach:52  } },
  "twix":                         { name:"Twix Bar",                          category:"Snacks", unit:"g", base:100, cal:495, prot:5,   carb:63,  fat:25,  servingSize:50,  servingLabel:"1 bar",               countable:{ unitName:"bar",        gramsEach:50  } },
  "mars bar":                     { name:"Mars Bar",                          category:"Snacks", unit:"g", base:100, cal:456, prot:4.5, carb:68,  fat:19,  servingSize:51,  servingLabel:"1 bar",               countable:{ unitName:"bar",        gramsEach:51  } },
  "cadbury dairy milk":           { name:"Cadbury Dairy Milk",                category:"Snacks", unit:"g", base:100, cal:533, prot:8,   carb:57,  fat:30,  servingSize:45,  servingLabel:"1 bar",               countable:{ unitName:"bar",        gramsEach:45  } },
  "kitkat":                       { name:"KitKat (2-finger)",                 category:"Snacks", unit:"g", base:100, cal:516, prot:7.4, carb:60,  fat:27,  servingSize:21,  servingLabel:"2 fingers",           countable:{ unitName:"finger",     gramsEach:10.5} },
  "bounty bar":                   { name:"Bounty Bar",                        category:"Snacks", unit:"g", base:100, cal:473, prot:4,   carb:58,  fat:25,  servingSize:57,  servingLabel:"1 bar",               countable:{ unitName:"bar",        gramsEach:57  } },
  "ferrero rocher":               { name:"Ferrero Rocher",                    category:"Snacks", unit:"g", base:100, cal:568, prot:7.5, carb:50,  fat:38,  servingSize:13,  servingLabel:"1 piece",             countable:{ unitName:"piece",      gramsEach:13  } },
  "reese cups":                   { name:"Reese's Peanut Butter Cups",        category:"Snacks", unit:"g", base:100, cal:517, prot:9,   carb:54,  fat:30,  servingSize:21,  servingLabel:"1 cup",               countable:{ unitName:"cup",        gramsEach:21  } },
  "m&ms milk chocolate":          { name:"M&M's (milk chocolate)",            category:"Snacks", unit:"g", base:100, cal:500, prot:5,   carb:67,  fat:22,  servingSize:42,  servingLabel:"1 pack" },
  "m&ms peanut":                  { name:"M&M's (peanut)",                    category:"Snacks", unit:"g", base:100, cal:513, prot:9,   carb:61,  fat:26,  servingSize:42,  servingLabel:"1 pack" },
  "butterfinger":                 { name:"Butterfinger Bar",                  category:"Snacks", unit:"g", base:100, cal:468, prot:7,   carb:67,  fat:20,  servingSize:61,  servingLabel:"1 bar",               countable:{ unitName:"bar",        gramsEach:61  } },
  "crunchie bar":                 { name:"Crunchie / Honeycomb Bar",          category:"Snacks", unit:"g", base:100, cal:467, prot:3.5, carb:72,  fat:18,  servingSize:40,  servingLabel:"1 bar",               countable:{ unitName:"bar",        gramsEach:40  } },
  "toblerone":                    { name:"Toblerone",                         category:"Snacks", unit:"g", base:100, cal:523, prot:7,   carb:59,  fat:29,  servingSize:30,  servingLabel:"2–3 triangles",       countable:{ unitName:"triangle",   gramsEach:10  } },
  "nutella":                      { name:"Nutella / Choc-Hazelnut Spread",    category:"Snacks", unit:"g", base:100, cal:539, prot:6,   carb:58,  fat:31,  servingSize:37,  servingLabel:"2 tbsp" },
  "chocolate covered almonds":    { name:"Chocolate-Covered Almonds",         category:"Snacks", unit:"g", base:100, cal:536, prot:10,  carb:50,  fat:34,  servingSize:40,  servingLabel:"10 pieces",           countable:{ unitName:"piece",      gramsEach:4   } },
  "chocolate covered raisins":    { name:"Chocolate-Covered Raisins",         category:"Snacks", unit:"g", base:100, cal:393, prot:4.5, carb:72,  fat:12,  servingSize:40,  servingLabel:"1 oz" },
  "chocolate truffle":            { name:"Chocolate Truffle",                 category:"Snacks", unit:"g", base:100, cal:490, prot:4,   carb:50,  fat:31,  servingSize:15,  servingLabel:"1 truffle",           countable:{ unitName:"truffle",    gramsEach:15  } },
  "cacao nibs":                   { name:"Cacao Nibs",                        category:"Snacks", unit:"g", base:100, cal:481, prot:13,  carb:34,  fat:43,  servingSize:28,  servingLabel:"1 oz" },
  "halva sesame":                 { name:"Halva (sesame-based)",              category:"Snacks", unit:"g", base:100, cal:469, prot:12,  carb:57,  fat:24,  servingSize:28,  servingLabel:"1 oz" },
  "peanut brittle":               { name:"Peanut Brittle",                    category:"Snacks", unit:"g", base:100, cal:450, prot:8.5, carb:69,  fat:18,  servingSize:28,  servingLabel:"1 oz" },
  "fudge":                        { name:"Fudge",                             category:"Snacks", unit:"g", base:100, cal:411, prot:2.8, carb:76,  fat:11,  servingSize:30,  servingLabel:"1 piece",             countable:{ unitName:"piece",      gramsEach:30  } },
  "toffee hard candy":            { name:"Toffee / Hard Candy",               category:"Snacks", unit:"g", base:100, cal:394, prot:0.1, carb:98,  fat:0.3, servingSize:11,  servingLabel:"1 piece",             countable:{ unitName:"piece",      gramsEach:11  } },

  /* ── Gummies & Soft Candy ──────────────────────────── */
  "gummy bears":                  { name:"Gummy Bears",                       category:"Snacks", unit:"g", base:100, cal:333, prot:6.9, carb:77,  fat:0,   servingSize:28,  servingLabel:"~17 gummies" },
  "gummy worms":                  { name:"Gummy Worms",                       category:"Snacks", unit:"g", base:100, cal:330, prot:6,   carb:78,  fat:0,   servingSize:28,  servingLabel:"1 oz" },
  "sour patch kids":              { name:"Sour Patch Kids",                   category:"Snacks", unit:"g", base:100, cal:354, prot:0,   carb:88,  fat:0,   servingSize:15,  servingLabel:"~6 pieces" },
  "haribo gold bears":            { name:"Haribo Gold Bears",                 category:"Snacks", unit:"g", base:100, cal:343, prot:6.9, carb:77,  fat:0,   servingSize:25,  servingLabel:"½ pack" },
  "jelly beans":                  { name:"Jelly Beans",                       category:"Snacks", unit:"g", base:100, cal:375, prot:0,   carb:96,  fat:0.1, servingSize:28,  servingLabel:"~35 beans" },
  "marshmallow":                  { name:"Marshmallow",                       category:"Snacks", unit:"g", base:100, cal:318, prot:1.8, carb:81,  fat:0,   servingSize:7,   servingLabel:"1 large",             countable:{ unitName:"marshmallow",gramsEach:7   } },
  "fruit gummies":                { name:"Fruit Gummies / Fruit Snacks Pack", category:"Snacks", unit:"g", base:100, cal:340, prot:2,   carb:84,  fat:0,   servingSize:23,  servingLabel:"1 pack" },
  "licorice":                     { name:"Liquorice / Licorice",              category:"Snacks", unit:"g", base:100, cal:345, prot:3.6, carb:78,  fat:0.5, servingSize:40,  servingLabel:"4 pieces" },
  "nougat bar":                   { name:"Nougat Bar",                        category:"Snacks", unit:"g", base:100, cal:406, prot:4,   carb:72,  fat:13,  servingSize:40,  servingLabel:"1 bar",               countable:{ unitName:"bar",        gramsEach:40  } },
  "lollipop":                     { name:"Lollipop",                          category:"Snacks", unit:"g", base:100, cal:394, prot:0,   carb:98,  fat:0,   servingSize:17,  servingLabel:"1 lollipop",          countable:{ unitName:"lollipop",   gramsEach:17  } },
  "chewing gum":                  { name:"Chewing Gum",                       category:"Snacks", unit:"g", base:100, cal:296, prot:0,   carb:80,  fat:0,   servingSize:3,   servingLabel:"1 stick",             countable:{ unitName:"piece",      gramsEach:3   } },
  "fruit leather":                { name:"Fruit Leather / Fruit Roll-Up",     category:"Snacks", unit:"g", base:100, cal:347, prot:1,   carb:86,  fat:2,   servingSize:14,  servingLabel:"1 strip",             countable:{ unitName:"strip",      gramsEach:14  } },

  /* ── Energy & Protein Bars ─────────────────────────── */
  "protein bar":                  { name:"Protein Bar (average)",             category:"Snacks", unit:"g", base:100, cal:405, prot:31,  carb:43,  fat:10,  servingSize:60,  servingLabel:"1 bar",               countable:{ unitName:"bar",        gramsEach:60  } },
  "energy bar":                   { name:"Energy / Cereal Bar",               category:"Snacks", unit:"g", base:100, cal:395, prot:8,   carb:67,  fat:11,  servingSize:40,  servingLabel:"1 bar",               countable:{ unitName:"bar",        gramsEach:40  } },
  "granola bar":                  { name:"Granola Bar",                       category:"Snacks", unit:"g", base:100, cal:454, prot:9,   carb:63,  fat:20,  servingSize:47,  servingLabel:"1 bar",               countable:{ unitName:"bar",        gramsEach:47  } },
  "kind bar":                     { name:"Kind Bar (nuts & honey)",           category:"Snacks", unit:"g", base:100, cal:489, prot:9,   carb:45,  fat:33,  servingSize:40,  servingLabel:"1 bar",               countable:{ unitName:"bar",        gramsEach:40  } },
  "larabar":                      { name:"Larabar (date & nut)",              category:"Snacks", unit:"g", base:100, cal:430, prot:7,   carb:57,  fat:22,  servingSize:48,  servingLabel:"1 bar",               countable:{ unitName:"bar",        gramsEach:48  } },
  "clif bar":                     { name:"Clif Bar (oats & chocolate chip)",  category:"Snacks", unit:"g", base:100, cal:390, prot:10,  carb:67,  fat:9,   servingSize:68,  servingLabel:"1 bar",               countable:{ unitName:"bar",        gramsEach:68  } },
  "questbar":                     { name:"Quest Bar (high protein)",          category:"Snacks", unit:"g", base:100, cal:362, prot:40,  carb:25,  fat:11,  servingSize:60,  servingLabel:"1 bar",               countable:{ unitName:"bar",        gramsEach:60  } },
  "rxbar":                        { name:"RXBAR (egg white protein)",         category:"Snacks", unit:"g", base:100, cal:367, prot:22,  carb:43,  fat:10,  servingSize:52,  servingLabel:"1 bar",               countable:{ unitName:"bar",        gramsEach:52  } },
  "nakd bar":                     { name:"Nakd Bar (fruit & nut)",            category:"Snacks", unit:"g", base:100, cal:390, prot:7,   carb:55,  fat:17,  servingSize:35,  servingLabel:"1 bar",               countable:{ unitName:"bar",        gramsEach:35  } },
  "rice krispie treat":           { name:"Rice Krispie Treat",                category:"Snacks", unit:"g", base:100, cal:411, prot:2.5, carb:80,  fat:9,   servingSize:33,  servingLabel:"1 bar",               countable:{ unitName:"bar",        gramsEach:33  } },

  /* ── Dried Fruit Snacks ────────────────────────────── */
  "raisins snack":                { name:"Raisins",                           category:"Snacks", unit:"g", base:100, cal:299, prot:3.1, carb:79,  fat:0.5, servingSize:43,  servingLabel:"¼ cup (small box)" },
  "dried mango slices":           { name:"Dried Mango",                       category:"Snacks", unit:"g", base:100, cal:319, prot:2.5, carb:78,  fat:1.2, servingSize:40,  servingLabel:"¼ cup" },
  "dried apricot snack":          { name:"Dried Apricots",                    category:"Snacks", unit:"g", base:100, cal:241, prot:3.4, carb:63,  fat:0.5, servingSize:7,   servingLabel:"1 half",              countable:{ unitName:"half",       gramsEach:7   } },
  "medjool dates snack":          { name:"Medjool Dates",                     category:"Snacks", unit:"g", base:100, cal:277, prot:1.8, carb:75,  fat:0.2, servingSize:24,  servingLabel:"2 dates",             countable:{ unitName:"date",       gramsEach:24  } },
  "dried cranberries":            { name:"Dried Cranberries (sweetened)",     category:"Snacks", unit:"g", base:100, cal:308, prot:0.2, carb:82,  fat:1.4, servingSize:40,  servingLabel:"¼ cup" },
  "dried figs snack":             { name:"Dried Figs",                        category:"Snacks", unit:"g", base:100, cal:249, prot:3.3, carb:64,  fat:0.9, servingSize:13,  servingLabel:"1 fig",               countable:{ unitName:"fig",        gramsEach:13  } },
  "prunes snack":                 { name:"Prunes / Dried Plums",              category:"Snacks", unit:"g", base:100, cal:240, prot:2.2, carb:64,  fat:0.4, servingSize:9,   servingLabel:"1 prune",             countable:{ unitName:"prune",      gramsEach:9   } },
  "dried pineapple":              { name:"Dried Pineapple",                   category:"Snacks", unit:"g", base:100, cal:349, prot:1.4, carb:88,  fat:0.5, servingSize:40,  servingLabel:"¼ cup" },
  "dried blueberries":            { name:"Dried Blueberries",                 category:"Snacks", unit:"g", base:100, cal:317, prot:1,   carb:80,  fat:1.1, servingSize:40,  servingLabel:"¼ cup" },
  "trail mix":                    { name:"Trail Mix (nuts + dried fruit)",    category:"Snacks", unit:"g", base:100, cal:462, prot:10,  carb:47,  fat:29,  servingSize:30,  servingLabel:"¼ cup" },
  "apple slices dried":           { name:"Dried Apple Slices",                category:"Snacks", unit:"g", base:100, cal:243, prot:0.9, carb:65,  fat:0.3, servingSize:30,  servingLabel:"¼ cup" },

  /* ── Nut Snacks ────────────────────────────────────── */
  "almonds roasted salted":       { name:"Almonds (dry roasted, salted)",     category:"Snacks", unit:"g", base:100, cal:598, prot:22,  carb:22,  fat:52,  servingSize:28,  servingLabel:"1 oz (~23 almonds)" },
  "cashews roasted salted":       { name:"Cashews (dry roasted, salted)",     category:"Snacks", unit:"g", base:100, cal:574, prot:15,  carb:32,  fat:47,  servingSize:28,  servingLabel:"1 oz (~18 cashews)" },
  "peanuts roasted":              { name:"Peanuts (dry roasted, salted)",     category:"Snacks", unit:"g", base:100, cal:587, prot:24,  carb:21,  fat:50,  servingSize:28,  servingLabel:"1 oz" },
  "mixed nuts roasted":           { name:"Mixed Nuts (dry roasted)",          category:"Snacks", unit:"g", base:100, cal:607, prot:15,  carb:22,  fat:55,  servingSize:28,  servingLabel:"1 oz" },
  "pistachios roasted":           { name:"Pistachios (roasted, salted)",      category:"Snacks", unit:"g", base:100, cal:570, prot:21,  carb:28,  fat:46,  servingSize:28,  servingLabel:"1 oz (~49 nuts)" },
  "walnuts snack":                { name:"Walnuts (raw)",                     category:"Snacks", unit:"g", base:100, cal:654, prot:15,  carb:14,  fat:65,  servingSize:28,  servingLabel:"1 oz (7 halves)" },
  "macadamia nuts roasted":       { name:"Macadamia Nuts (roasted)",          category:"Snacks", unit:"g", base:100, cal:718, prot:8,   carb:14,  fat:76,  servingSize:28,  servingLabel:"1 oz" },
  "edamame salted":               { name:"Edamame (shelled, salted snack)",   category:"Snacks", unit:"g", base:100, cal:121, prot:11,  carb:9,   fat:5.2, servingSize:155, servingLabel:"1 cup" },
  "sunflower seeds roasted":      { name:"Sunflower Seeds (roasted, salted)", category:"Snacks", unit:"g", base:100, cal:600, prot:20,  carb:20,  fat:52,  servingSize:28,  servingLabel:"1 oz" },
  "pumpkin seeds roasted":        { name:"Pumpkin Seeds (roasted)",           category:"Snacks", unit:"g", base:100, cal:574, prot:30,  carb:15,  fat:49,  servingSize:28,  servingLabel:"1 oz" },
  "coconut chips":                { name:"Coconut Chips (toasted)",           category:"Snacks", unit:"g", base:100, cal:660, prot:7,   carb:24,  fat:65,  servingSize:14,  servingLabel:"2 tbsp" },

  /* ── Frozen Snacks ─────────────────────────────────── */
  "popsicle fruit":               { name:"Fruit Popsicle / Ice Lolly",        category:"Snacks", unit:"g", base:100, cal:73,  prot:0.3, carb:18,  fat:0.1, servingSize:80,  servingLabel:"1 popsicle",          countable:{ unitName:"popsicle",   gramsEach:80  } },
  "ice cream bar choc":           { name:"Chocolate Ice Cream Bar",           category:"Snacks", unit:"g", base:100, cal:280, prot:3.5, carb:30,  fat:17,  servingSize:60,  servingLabel:"1 bar",               countable:{ unitName:"bar",        gramsEach:60  } },
  "ice cream sandwich":           { name:"Ice Cream Sandwich",                category:"Snacks", unit:"g", base:100, cal:260, prot:3.5, carb:39,  fat:10,  servingSize:75,  servingLabel:"1 sandwich",          countable:{ unitName:"sandwich",   gramsEach:75  } },
  "frozen yogurt snack":          { name:"Frozen Yogurt",                     category:"Snacks", unit:"g", base:100, cal:127, prot:3.7, carb:24,  fat:1.8, servingSize:113, servingLabel:"½ cup" },
  "kulfi snack":                  { name:"Kulfi",                             category:"Snacks", unit:"g", base:100, cal:240, prot:5,   carb:25,  fat:14,  servingSize:60,  servingLabel:"1 stick",             countable:{ unitName:"stick",      gramsEach:60  } },

  /* ── Dips & Spreads (snack use) ────────────────────── */
  "hummus dip":                   { name:"Hummus",                            category:"Snacks", unit:"g", base:100, cal:166, prot:7.9, carb:14,  fat:9.6, servingSize:60,  servingLabel:"¼ cup" },
  "guacamole dip":                { name:"Guacamole",                         category:"Snacks", unit:"g", base:100, cal:160, prot:2,   carb:9,   fat:15,  servingSize:30,  servingLabel:"2 tbsp" },
  "salsa dip":                    { name:"Tomato Salsa",                      category:"Snacks", unit:"g", base:100, cal:36,  prot:1.5, carb:7.5, fat:0.4, servingSize:30,  servingLabel:"2 tbsp" },
  "tzatziki dip":                 { name:"Tzatziki",                          category:"Snacks", unit:"g", base:100, cal:72,  prot:3.5, carb:3.5, fat:5,   servingSize:60,  servingLabel:"¼ cup" },
  "cheese dip nacho":             { name:"Nacho Cheese Dip",                  category:"Snacks", unit:"g", base:100, cal:198, prot:4.5, carb:11,  fat:15,  servingSize:30,  servingLabel:"2 tbsp" },
  "french onion dip":             { name:"French Onion Dip",                  category:"Snacks", unit:"g", base:100, cal:163, prot:2.5, carb:6.5, fat:14,  servingSize:30,  servingLabel:"2 tbsp" },
  "spinach artichoke dip":        { name:"Spinach Artichoke Dip",             category:"Snacks", unit:"g", base:100, cal:198, prot:5,   carb:8,   fat:17,  servingSize:60,  servingLabel:"¼ cup" },
  "baba ganoush dip":             { name:"Baba Ganoush",                      category:"Snacks", unit:"g", base:100, cal:105, prot:3,   carb:9,   fat:7,   servingSize:60,  servingLabel:"¼ cup" },
  "peanut butter snack":          { name:"Peanut Butter (snack portion)",     category:"Snacks", unit:"g", base:100, cal:588, prot:25,  carb:20,  fat:50,  servingSize:32,  servingLabel:"2 tbsp" },
  "nutella spread":               { name:"Nutella / Hazelnut-Choc Spread",    category:"Snacks", unit:"g", base:100, cal:539, prot:6,   carb:58,  fat:31,  servingSize:37,  servingLabel:"2 tbsp" },
  "cream cheese dip":             { name:"Cream Cheese (as dip/spread)",      category:"Snacks", unit:"g", base:100, cal:342, prot:6,   carb:4,   fat:34,  servingSize:28,  servingLabel:"2 tbsp" },

  /* ── Spices (still needed for macro tracking) ────────── */
  "turmeric powder":              { name:"Turmeric Powder / Haldi",           category:"Spices", unit:"g", base:100, cal:312, prot:10,  carb:68,  fat:3,   servingSize:3,   servingLabel:"1 tsp" },
  "cumin seeds jeera":            { name:"Cumin Seeds / Jeera",               category:"Spices", unit:"g", base:100, cal:375, prot:18,  carb:44,  fat:22,  servingSize:2,   servingLabel:"½ tsp" },
  "coriander powder dhania":      { name:"Coriander Powder / Dhania",         category:"Spices", unit:"g", base:100, cal:298, prot:12,  carb:55,  fat:17,  servingSize:3,   servingLabel:"1 tsp" },
  "garam masala":                 { name:"Garam Masala",                      category:"Spices", unit:"g", base:100, cal:379, prot:14,  carb:58,  fat:15,  servingSize:3,   servingLabel:"1 tsp" },
  "chilli powder red":            { name:"Red Chilli Powder / Lal Mirch",     category:"Spices", unit:"g", base:100, cal:282, prot:13,  carb:50,  fat:14,  servingSize:2,   servingLabel:"½ tsp" },
  "cinnamon dalchini":            { name:"Cinnamon / Dalchini",               category:"Spices", unit:"g", base:100, cal:247, prot:4,   carb:81,  fat:1.2, servingSize:3,   servingLabel:"1 tsp" },
  "cardamom elaichi":             { name:"Cardamom / Elaichi",                category:"Spices", unit:"g", base:100, cal:311, prot:11,  carb:68,  fat:7,   servingSize:2,   servingLabel:"2 pods",              countable:{ unitName:"pod",        gramsEach:1   } },
  "black pepper":                 { name:"Black Pepper / Kali Mirch",         category:"Spices", unit:"g", base:100, cal:251, prot:10,  carb:64,  fat:3.3, servingSize:2,   servingLabel:"½ tsp" },
  "cloves laung":                 { name:"Cloves / Laung",                    category:"Spices", unit:"g", base:100, cal:274, prot:6,   carb:66,  fat:13,  servingSize:1,   servingLabel:"5 cloves",            countable:{ unitName:"clove",      gramsEach:0.2 } },
  "salt":                         { name:"Table Salt",                        category:"Spices", unit:"g", base:100, cal:0,   prot:0,   carb:0,   fat:0,   servingSize:6,   servingLabel:"1 tsp" },

  /* ── Supplements ───────────────────────────────────── */
  "yeast nutritional":            { name:"Nutritional Yeast",                 category:"Supplements", unit:"g", base:100, cal:325, prot:52,  carb:37,  fat:4,   servingSize:15,  servingLabel:"2 tbsp" },
};

export default FOOD_DB;

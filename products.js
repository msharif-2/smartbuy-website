// SmartBuy Home Outlet — Product Catalog
// PRODUCTS are defined inline so the site works locally.
// When hosted on Netlify, loadCatalog() fetches products.json (edited via /admin).

let PRODUCTS = [

  // ══════════════════ REFRIGERATORS ══════════════════
  { id:1,  name:"LG 26 cu. ft. Smart wi-fi Enabled French Door Refrigerator", brand:"LG", sku:"LFXS26973D", price:1599, was:2899, image:"https://appliances4lessbristol.com/wp-content/uploads/2022/08/LFXS26973D.jpg", categories:["refrigerators","featured"], badge:"sale", description:"26 cu. ft. Smart wi-fi enabled French Door refrigerator. Door-in-Door® access. Craft Ice Maker." },
  { id:2,  name:"LG 24 cu. ft. Smart wi-fi Enabled Door-in-Door® Counter-Depth Refrigerator with Craft Ice Maker", brand:"LG", sku:"LRFDC2406S", price:2349, was:4199, image:"https://appliances4lessbristol.com/wp-content/uploads/2022/07/LRFDC2406S.jpg", categories:["refrigerators","top-sellers"], badge:"sale", description:"24 cu. ft. counter-depth French Door with Craft Ice Maker and Door-in-Door® storage." },
  { id:3,  name:"LG 24 cu. ft. Smart wi-fi Enabled InstaView® Door-in-Door® Counter-Depth Refrigerator with Craft Ice Maker", brand:"LG", sku:"LRFVC2406S", price:2499, was:4499, image:"https://appliances4lessbristol.com/wp-content/uploads/2022/07/LRFVC2406S.jpg", categories:["refrigerators"], badge:"sale", description:"24 cu. ft. InstaView® Door-in-Door® counter-depth refrigerator. Craft Ice Maker. Smart wi-fi." },
  { id:4,  name:"LG 22 cu. ft. Two-Door French Door Refrigerator", brand:"LG", sku:"LFCC22426S", price:749, was:1299, image:"https://appliances4lessbristol.com/wp-content/uploads/2022/08/LFCC22426S.jpg", categories:["refrigerators","featured"], badge:"sale", description:"22 cu. ft. Two-Door French Door refrigerator. Stainless steel finish. Door-in-Door® access." },
  { id:5,  name:"LG 22 cu ft. Smart Counter Depth Double Freezer Refrigerator", brand:"LG", sku:"LFCS22520D", price:549, was:999, image:"https://appliances4lessbristol.com/wp-content/uploads/2022/07/LFCS22520D.jpg", categories:["refrigerators","top-sellers"], badge:"sale", description:"22 cu. ft. Smart Counter-Depth Double Freezer refrigerator. Linear Compressor. ENERGY STAR®." },
  { id:6,  name:"LG 22 cu. ft. Smart wi-fi Enabled French Door Counter-Depth Refrigerator", brand:"LG", sku:"LFXC22526D", price:1649, was:2999, image:"https://appliances4lessbristol.com/wp-content/uploads/2022/07/LFXC22526D.jpg", categories:["refrigerators"], badge:"sale", description:"22 cu. ft. Smart wi-fi enabled French Door counter-depth refrigerator. InstaView® window." },
  { id:7,  name:"LG 22 cu. ft. Smart wi-fi Enabled InstaView® Door-in-Door® Counter-Depth Refrigerator", brand:"LG", sku:"LFXC22596S", price:1949, was:3499, image:"https://appliances4lessbristol.com/wp-content/uploads/2022/07/LFXC22596S.jpg", categories:["refrigerators"], badge:"sale", description:"22 cu. ft. Smart InstaView® Door-in-Door® counter-depth refrigerator." },
  { id:8,  name:"LG 22 cu. ft. French Door Refrigerator", brand:"LG", sku:"LMXC22626D", price:1199, was:2099, image:"https://appliances4lessbristol.com/wp-content/uploads/2022/07/LMXC22626D.jpg", categories:["refrigerators"], badge:"sale", description:"22 cu. ft. French Door refrigerator with Smart Cooling® System. PrintProof™ finish." },
  { id:9,  name:"LG 22 cu. ft. Smart wi-fi Enabled French Door Counter-Depth Refrigerator (Stainless)", brand:"LG", sku:"LMXC22626S", price:1649, was:2999, image:"https://appliances4lessbristol.com/wp-content/uploads/2022/07/LMXC22626S.jpg", categories:["refrigerators","top-sellers"], badge:"sale", description:"22 cu. ft. Smart wi-fi French Door counter-depth. PrintProof™ stainless steel." },
  { id:10, name:"Samsung 23 cu. ft. 3-Door French Door Counter Depth Refrigerator with CoolSelect Pantry™ in Black Stainless Steel", brand:"Samsung", sku:"RF23R6201SG", price:1649, was:2999, image:"https://appliances4lessbristol.com/wp-content/uploads/2022/08/RF23R6201SG_AA.jpg", categories:["refrigerators","featured"], badge:"sale", description:"23 cu. ft. 3-Door French Door counter-depth. CoolSelect Pantry™. Black stainless steel." },

  // ══════════════════ FREEZERS ══════════════════
  { id:11, name:"LG 2.4 cu.ft. Top Freezer Refrigerator", brand:"LG", sku:"LRTLS2403S", price:649, was:1165, image:"https://appliances4lessbristol.com/wp-content/uploads/2022/08/LRTLS2403S.jpg", categories:["freezers","featured"], badge:"sale", description:"2.4 cu. ft. compact top freezer refrigerator. Perfect for offices, dorms, or small spaces." },
  { id:12, name:"LG 20 cu. ft. Top Freezer Refrigerator", brand:"LG", sku:"LTCS20020S", price:499, was:888, image:"https://appliances4lessbristol.com/wp-content/uploads/2022/07/LTCS20020S.jpg", categories:["freezers","top-sellers"], badge:"sale", description:"20 cu. ft. top freezer refrigerator. Multi-Air Flow Cooling. Humidity Crisper Drawers." },
  { id:13, name:"LG 26 cu. ft. Bottom Freezer Refrigerator", brand:"LG", sku:"LRDCS2603S", price:999, was:1799, image:"https://appliances4lessbristol.com/wp-content/uploads/2022/08/LRDCS2603S-430x537.jpg", categories:["freezers"], badge:"sale", description:"26 cu. ft. bottom freezer refrigerator. Door cooling+. Linear Compressor. ENERGY STAR®." },

  // ══════════════════ WASHERS ══════════════════
  { id:14, name:"LG 2.4 cu.ft. Smart wi-fi Enabled Compact Front Load Washer with Built-In Intelligence", brand:"LG", sku:"WM1455HWA", price:599, was:1099, image:"https://appliances4lessbristol.com/wp-content/uploads/2022/07/WM1455HWA.jpg", categories:["washers","washers-dryers","featured"], badge:"sale", description:"2.4 cu.ft. Smart Compact Front Load Washer. AI-powered smart sensors. Built-In Intelligence." },
  { id:15, name:"Samsung 5.0 cu. ft. Top Load Washer with Super Speed in Black Stainless Steel", brand:"Samsung", sku:"WA50R5400AV", price:699, was:1249, image:"https://appliances4lessbristol.com/wp-content/uploads/2022/08/WA50R5400AV-US_001.jpg", categories:["washers","washers-dryers","top-sellers"], badge:"sale", description:"5.0 cu. ft. Top Load Washer. Super Speed. Active WaterJet. Black stainless steel." },

  // ══════════════════ DRYERS ══════════════════
  { id:16, name:"LG 7.4 cu. ft. Ultra Large Capacity Smart Front Load Electric Dryer with TurboSteam™ — White", brand:"LG", sku:"DLEX4000W", price:649, was:1149, image:"https://appliances4lessbristol.com/wp-content/uploads/2022/08/DLEX4000W.jpg", categories:["dryers","washers-dryers","featured"], badge:"sale", description:"7.4 cu. ft. Ultra Large Smart Front Load Electric Dryer. TurboSteam™. Sensor Dry. White." },
  { id:17, name:"LG 7.4 cu. ft. Ultra Large Capacity Smart Front Load Electric Dryer with TurboSteam™ — Black", brand:"LG", sku:"DLEX4000B", price:649, was:1149, image:"https://appliances4lessbristol.com/wp-content/uploads/2022/08/DLEX4000B.jpg", categories:["dryers","washers-dryers","top-sellers"], badge:"sale", description:"7.4 cu. ft. Ultra Large Smart Front Load Electric Dryer. TurboSteam™. Sensor Dry. Black stainless." },

  // ══════════════════ WASHER-DRYER COMBOS ══════════════════
  { id:18, name:"LG WashTower™ — Front Load Washer & Dryer Set", brand:"LG", sku:"WKEX200HBA", price:1299, was:2299, image:"https://appliances4lessbristol.com/wp-content/uploads/2022/06/LG_STUDIO_WashTower_Styler11-scaled.jpg", categories:["washers-dryers-combos","washers-dryers","featured"], badge:"sale", description:"LG WashTower™ all-in-one washer & dryer combo. AI-powered sensors. Center Control™ panel." },
  { id:19, name:"LG Front Load Washer & Dryer Pair — White", brand:"LG", sku:"WM-DLEX-SET-W", price:1199, was:2199, image:"https://appliances4lessbristol.com/wp-content/uploads/2022/05/best-washing-machine-stands-and-kits-section-1-1.jpg", categories:["washers-dryers-combos","washers-dryers","top-sellers"], badge:"sale", description:"Matching LG front load washer & dryer pair. TurboWash™ 360°. Built-In Intelligence technology." },
  { id:20, name:"Samsung Front Load Washer & Dryer Combo Set", brand:"Samsung", sku:"SAM-WD-SET", price:1099, was:1999, image:"https://appliances4lessbristol.com/wp-content/uploads/2022/05/samsung-washing-machine-pedestal-para-lavasecadora-lg-1616974.jpg", categories:["washers-dryers-combos","washers-dryers"], badge:"sale", description:"Samsung matching front load washer and dryer set. Steam wash. VRT Plus vibration reduction." },

  // ══════════════════ STOVES ══════════════════
  { id:21, name:"LG 5.8 cu ft. Smart Wi-Fi Enabled Fan Convection Gas Slide-in Range with Air Fry", brand:"LG", sku:"LSG4511ST", price:1049, was:1849, image:"https://appliances4lessbristol.com/wp-content/uploads/2022/05/LSG4511ST-2-430x573.jpg", categories:["stoves","featured"], badge:"sale", description:"5.8 cu. ft. Gas Slide-in Range. Fan Convection. Air Fry. ProBake Convection®. Smart wi-fi." },
  { id:22, name:"LG 6.3 cu ft. Smart wi-fi Enabled ProBake Convection® InstaView® Electric Slide-in Range", brand:"LG", sku:"LREL6323S", price:1199, was:2099, image:"https://appliances4lessbristol.com/wp-content/uploads/2022/08/LREL6323S-430x537.jpg", categories:["stoves","top-sellers"], badge:"sale", description:"6.3 cu. ft. Electric Slide-in Range. ProBake Convection®. InstaView® window. Air Fry & Sous Vide." },
  { id:23, name:"LG 6.3 cu. ft. Gas Single Oven Slide-in Range with ProBake Convection® and InstaView®", brand:"LG", sku:"LRGL5823S", price:999, was:1799, image:"https://appliances4lessbristol.com/wp-content/uploads/2022/08/LRGL5823S-430x537.jpg", categories:["stoves"], badge:"sale", description:"6.3 cu. ft. Gas Slide-in Range with InstaView® window. ProBake Convection®. Air Fry." },
  { id:24, name:"LG 7.3 cu. ft. Electric Double Oven Range with ProBake Convection® and EasyClean®", brand:"LG", sku:"LDE4413ST", price:949, was:1699, image:"https://appliances4lessbristol.com/wp-content/uploads/2022/08/LDE4413ST-430x537.jpg", categories:["stoves","featured"], badge:"sale", description:"7.3 cu. ft. Electric Double Oven range. ProBake Convection®. EasyClean® oven. 5-element cooktop." },

  // ══════════════════ DISHWASHERS ══════════════════
  { id:25, name:"LG Front Control Dishwasher with QuadWash™", brand:"LG", sku:"LDFN3432T", price:449, was:799, image:"https://appliances4lessbristol.com/wp-content/uploads/2022/07/LDFN3432T.jpg", categories:["dishwashers","featured"], badge:"sale", description:"Front Control Dishwasher with QuadWash™. TrueSteam®. LoDecibel™ Quiet Operation." },
  { id:26, name:"LG Front Control Dishwasher with QuadWash™ and EasyRack™ Plus", brand:"LG", sku:"LDFN4542D", price:499, was:849, image:"https://appliances4lessbristol.com/wp-content/uploads/2022/07/LDFN4542D.jpg", categories:["dishwashers"], badge:"sale", description:"Front Control Dishwasher. QuadWash™. EasyRack™ Plus adjustable upper rack. TrueSteam®." },
  { id:27, name:"LG Front Control Dishwasher with QuadWash™ and 3rd Rack", brand:"LG", sku:"LDFN454HT", price:549, was:949, image:"https://appliances4lessbristol.com/wp-content/uploads/2022/07/LDFN454HT.jpg", categories:["dishwashers","top-sellers"], badge:"sale", description:"Front Control Dishwasher with QuadWash™. 3rd Rack. TrueSteam®. 44 dBA ultra-quiet operation." },
  { id:28, name:"LG Top Control Smart Dishwasher with QuadWash™ and Dynamic Dry™", brand:"LG", sku:"LDTS5552D", price:599, was:1049, image:"https://appliances4lessbristol.com/wp-content/uploads/2022/07/LDTS5552D.jpg", categories:["dishwashers"], badge:"sale", description:"Top Control Smart Dishwasher. QuadWash™. Dynamic Dry™. TrueSteam®. Smart Diagnosis™." },
  { id:29, name:"LG Top Control Smart Dishwasher with QuadWash™ — Stainless", brand:"LG", sku:"LDTS5552S", price:599, was:1049, image:"https://appliances4lessbristol.com/wp-content/uploads/2022/07/LDTS5552S.jpg", categories:["dishwashers"], badge:"sale", description:"Top Control Smart Dishwasher. QuadWash™. TrueSteam®. Stainless steel tub. 44 dBA." },

  // ══════════════════ FURNITURE ══════════════════
  { id:30, name:"3-Piece Sectional Sofa", brand:"SmartBuy", sku:"SB-SECT-3PC", price:699, was:1299, image:"https://placehold.co/430x537/ede9fe/2e1a5e?text=3-Piece+Sectional+Sofa", categories:["furniture","featured"], badge:"sale", description:"L-shaped sectional. Comfortable foam cushions. Multiple color options." },
  { id:31, name:"Queen Bedroom Set (5-Piece)", brand:"SmartBuy", sku:"SB-BED-QUEEN-5", price:599, was:999, image:"https://placehold.co/430x537/ede9fe/2e1a5e?text=Queen+Bedroom+Set", categories:["furniture","top-sellers"], badge:"sale", description:"Includes bed frame, headboard, footboard, 2 nightstands & dresser." },
  { id:32, name:"5-Piece Dining Set", brand:"SmartBuy", sku:"SB-DINING-5PC", price:449, was:799, image:"https://placehold.co/430x537/ede9fe/2e1a5e?text=5-Piece+Dining+Set", categories:["furniture"], badge:"sale", description:"Solid wood table with 4 matching chairs. Various finishes available." },
  { id:33, name:"Reclining Sofa & Loveseat Set", brand:"SmartBuy", sku:"SB-RECL-SET", price:799, was:1499, image:"https://placehold.co/430x537/ede9fe/2e1a5e?text=Reclining+Sofa+Set", categories:["furniture"], badge:"sale", description:"Manual reclining. Bonded leather. Cup holders. USB charging ports." },

  // ══════════════════ SCRATCH & DENT ══════════════════
  { id:34, name:"LG 26 cu. ft. French Door Refrigerator (Scratch & Dent)", brand:"LG", sku:"SD-LFXS26973D", price:799, was:2899, image:"https://appliances4lessbristol.com/wp-content/uploads/2022/08/LFXS26973D.jpg", categories:["scratch-dent","featured"], badge:"scratch-dent", description:"Minor cosmetic scratch on side panel. 100% functional — all features tested and working." },
  { id:35, name:"LG 7.4 cu. ft. Electric Dryer (Scratch & Dent) — Black", brand:"LG", sku:"SD-DLEX4000B", price:349, was:1149, image:"https://appliances4lessbristol.com/wp-content/uploads/2022/08/DLEX4000B.jpg", categories:["scratch-dent","top-sellers"], badge:"scratch-dent", description:"Small dent on top panel. All cycles tested and working perfectly. TurboSteam™ verified." },
  { id:36, name:"LG Electric Double Oven Range (Scratch & Dent)", brand:"LG", sku:"SD-LDE4413ST", price:499, was:1699, image:"https://appliances4lessbristol.com/wp-content/uploads/2022/08/LDE4413ST-430x537.jpg", categories:["scratch-dent"], badge:"scratch-dent", description:"Surface scratch on back panel. ProBake Convection® and EasyClean® fully functional." },
  { id:37, name:"LG Front Load Washer (Scratch & Dent)", brand:"LG", sku:"SD-WM1455HWA", price:299, was:1099, image:"https://appliances4lessbristol.com/wp-content/uploads/2022/07/WM1455HWA.jpg", categories:["scratch-dent"], badge:"scratch-dent", description:"Cosmetic blemish on lid. Smart wi-fi and Built-In Intelligence features all working." }
];

const CATEGORIES = [
  { slug:"featured",              label:"Featured",            icon:"⭐", color:"#f59e0b", image:"https://appliances4lessbristol.com/wp-content/uploads/2024/06/A4L-Bristol-24-800x800.jpg" },
  { slug:"top-sellers",           label:"Top Sellers",         icon:"🔥", color:"#ef4444", image:"https://appliances4lessbristol.com/wp-content/uploads/2022/08/LFXS26973D.jpg" },
  { slug:"refrigerators",         label:"Refrigerators",       icon:"🧊", color:"#3b82f6", image:"https://appliances4lessbristol.com/wp-content/uploads/2022/05/refrigerators-category.jpg" },
  { slug:"freezers",              label:"Freezers",            icon:"❄️", color:"#06b6d4", image:"https://appliances4lessbristol.com/wp-content/uploads/2022/05/freezers-category.jpg" },
  { slug:"stoves",                label:"Stoves & Ranges",     icon:"🍳", color:"#f59e0b", image:"https://appliances4lessbristol.com/wp-content/uploads/2022/05/stoves-category.jpg" },
  { slug:"washers-dryers-combos", label:"Washer-Dryer Combos", icon:"🔄", color:"#8b5cf6", image:"https://appliances4lessbristol.com/wp-content/uploads/2022/05/washer-dryer-combos-category.jpg" },
  { slug:"washers",               label:"Washers",             icon:"👕", color:"#6366f1", image:"https://appliances4lessbristol.com/wp-content/uploads/2022/05/washers-category.jpg" },
  { slug:"dryers",                label:"Dryers",              icon:"💨", color:"#7c3aed", image:"https://appliances4lessbristol.com/wp-content/uploads/2022/05/dryers-category.jpg" },
  { slug:"dishwashers",           label:"Dishwashers",         icon:"🍽️", color:"#10b981", image:"https://appliances4lessbristol.com/wp-content/uploads/2022/05/dishwashers-category.jpg" },
  { slug:"furniture",             label:"Furniture",           icon:"🛋️", color:"#6366f1", image:"https://placehold.co/500x500/ede9fe/2e1a5e?text=Furniture" },
  { slug:"scratch-dent",          label:"Scratch & Dent",      icon:"🏷️", color:"#CC1100", image:"https://appliances4lessbristol.com/wp-content/uploads/2022/05/8c16bdc5.jpg" },
  { slug:"washers-dryers",        label:"Washers & Dryers",    icon:"👕", color:"#8b5cf6", image:"https://appliances4lessbristol.com/wp-content/uploads/2022/05/washers-category.jpg", hidden:true }
];

// ── Load from products.json when hosted (silently falls back to inline data if local) ──
async function loadCatalog() {
  try {
    if (window.location.protocol === 'file:') return; // running locally — use inline data
    const res = await fetch('products.json');
    if (!res.ok) return;
    const data = await res.json();
    if (data.products && data.products.length > 0) PRODUCTS = data.products;
  } catch(e) {
    // fetch failed — inline data already loaded above, nothing to do
  }
}

// ── Helpers ──
function getProductsByCategory(slug) {
  if (!slug) return PRODUCTS;
  return PRODUCTS.filter(p => p.categories.includes(slug));
}

function formatPrice(n) {
  return '$' + n.toLocaleString('en-US', { minimumFractionDigits: 0 });
}

function savingsPercent(p) {
  return Math.round((1 - p.price / p.was) * 100);
}

function productCardHTML(p) {
  const badgeMap = {
    'sale':         '<span class="badge badge-sale">SALE</span>',
    'featured':     '<span class="badge badge-featured">FEATURED</span>',
    'scratch-dent': '<span class="badge badge-sd">SCRATCH &amp; DENT</span>',
    'new':          '<span class="badge badge-featured">NEW</span>',
  };
  const badge = badgeMap[p.badge] || '';
  const savings = savingsPercent(p);
  return `
    <div class="product-card" onclick="viewProduct(${p.id})">
      <div class="product-img-wrap">
        ${badge}
        <div class="savings-pill">-${savings}%</div>
        <img src="${p.image}" alt="${p.name}" loading="lazy" onerror="this.src='https://placehold.co/430x430/f1f3f7/374151?text=Image+Coming+Soon'" />
      </div>
      <div class="product-body">
        <div class="product-brand">${p.brand}</div>
        <h3 class="product-name">${p.name}</h3>
        <div class="product-price">
          <span class="price-sale">${formatPrice(p.price)}</span>
          <span class="price-was">${formatPrice(p.was)}</span>
        </div>
        <button class="btn-addcart" onclick="event.stopPropagation(); window.location.href='tel:5185990070'">
          📞 Call to Order
        </button>
      </div>
    </div>`;
}

function viewProduct(id) {
  const p = PRODUCTS.find(x => x.id === id);
  if (!p) return;
  alert(`${p.name}\n\nOur Price: ${formatPrice(p.price)}\nOriginal Retail: ${formatPrice(p.was)}\nYou Save: ${savingsPercent(p)}% (${formatPrice(p.was - p.price)})\n\n${p.description}\n\nCall us to order:\n(518) 599-0070`);
}

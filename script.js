/* ================================================================
   PVR GROUPS LTD — script.js
   ================================================================ */
'use strict';

/* ── Config ─────────────────────────────────────────────────── */
const CONFIG = {
  DIRECT_BOOKING_URL: 'https://pvrgroupsltd.bookeddirectly.host/',
  WHATSAPP_NUMBER:    '447459150439',
  UPLISTING_PROXY:    'https://pvr-uplisting-proxy.shop-cdb.workers.dev',
  CLIENT_ID:          'fe0c7bd0-26d4-013f-ce8b-52311bdffb21',
};

/* ── Properties — exact names from Uplisting API ─────────────── */
const PROPERTIES = [
  {
    id:           'flat-308-e14',
    uplisting_id: '172979',
    slug:         '12edc0',
    /* EXACT name from Uplisting: */
    name:         'Modern Riverside 1BR • Balcony • Canary Wharf – Book Now!',
    /* Short card name — no street address, neighbourhood only */
    displayName:  'Modern Riverside 1BR · Balcony',
    /* Neighbourhood, not full address */
    location:     'Poplar, Canary Wharf, East London',
    city:         'London',
    postcode:     'E14 0YW',
    bedrooms:     1,
    bathrooms:    1,
    guests:       3,
    beds:         2,
    type:         'Apartment',
    badge:        'Featured',
    badgeClass:   'badge-gold',
    img:          'https://djts5lg061pqs.cloudfront.net/b1a909ab-9507-4e3c-a851-eff211e5d614.jpg?width=800',
    photos: [
      'https://djts5lg061pqs.cloudfront.net/b1a909ab-9507-4e3c-a851-eff211e5d614.jpg?width=1200',
      'https://djts5lg061pqs.cloudfront.net/b1a909ab-9507-4e3c-a851-eff211e5d614.jpg?width=1200',
      'https://djts5lg061pqs.cloudfront.net/b1a909ab-9507-4e3c-a851-eff211e5d614.jpg?width=1200',
      'https://djts5lg061pqs.cloudfront.net/48d1fba1-e654-417a-9740-663467c437ec.jpg?width=1200',
      'https://djts5lg061pqs.cloudfront.net/bf2ea91e-404e-44dd-a243-591827d94062.jpg?width=1200',
      'https://djts5lg061pqs.cloudfront.net/b2f68781-0ea9-415e-9fbd-8919511fccc7.jpg?width=1200',
      'https://djts5lg061pqs.cloudfront.net/4b17dd72-e79c-4ba0-871f-37773342b634.jpg?width=1200',
      'https://djts5lg061pqs.cloudfront.net/1b8ac6cc-0f0c-4ec1-a961-2834cdeb1888.jpg?width=1200',
      'https://djts5lg061pqs.cloudfront.net/284d549a-2ed1-41db-8622-40dd897a8681.jpg?width=1200',
    ],
    tags:     ['Self Check-in', 'Near DLR', 'Balcony', 'Corporate-Ready'],
    bookUrl:  'https://pvrgroupsltd.bookeddirectly.host/properties/12edc0',
    checkIn:  '15:00', checkOut: '10:00', deposit: 150,
    description: `Stylish riverside apartment with a private balcony, just moments from Canary Wharf — ideal for business travellers, couples and city explorers.\n\nThe apartment features a spacious double bedroom with premium bedding, a modern bathroom stocked with fresh towels and essentials, and a bright open-plan living area with Smart TV and dining space. The fully equipped kitchen has all modern appliances for home-style cooking.\n\nStay connected with ultra-fast Wi-Fi throughout, and keep cool with portable air conditioning units.\n\n🔑 Self Check-In via KeyNest. Mon–Sat: 06:00–23:00 / Sun: 09:00–23:00\n\nProfessionally cleaned before every stay with hotel-style linen provided.`,
    amenities: [
      {icon:'🍳',name:'Full Kitchen'},{icon:'📶',name:'Ultra-Fast Wi-Fi'},
      {icon:'❄️',name:'Air Conditioning'},{icon:'📺',name:'Smart TV'},
      {icon:'🌿',name:'Private Balcony'},{icon:'🧺',name:'Washing Machine'},
      {icon:'💨',name:'Clothes Dryer'},{icon:'🛗',name:'Elevator'},
      {icon:'🔑',name:'Self Check-In'},{icon:'🛏',name:'Linens Provided'},
      {icon:'🪮',name:'Hair Dryer'},{icon:'👕',name:'Iron & Board'},
      {icon:'🔥',name:'Smoke Detector'},{icon:'🔕',name:'CO Detector'},
    ],
    transport: [
      {icon:'🚆',text:'11 mins to Bank via DLR'},
      {icon:'🎵',text:'5–10 mins to The O2 via Jubilee Line'},
      {icon:'🏢',text:'9–13 mins to ExCeL London via DLR'},
      {icon:'✈️',text:'Quick links to London City Airport'},
      {icon:'🛍️',text:'Walk to Canary Wharf shops & restaurants'},
    ],
    rules: [
      {icon:'🚭',text:'No Smoking'},{icon:'🐾',text:'No Pets'},
      {icon:'🎉',text:'No Parties'},{icon:'🔇',text:'Quiet Hours 10 PM'},
      {icon:'💳',text:'£150 Refundable Deposit'},{icon:'🗝️',text:'£100 Lost Key Fee'},
      {icon:'⏰',text:'Late checkout: £85 fee'},{icon:'✅',text:'Long Stays Welcome'},
    ],
  },
  {
    id:           'old-trafford-2br',
    uplisting_id: '195566',
    slug:         '2e1725',
    name:         'Stylish 2BR Apartment Near Old Trafford | Free Parking',
    /* Neighbourhood from map: Manchester Road, M16 — Old Trafford area */
    displayName:  'Stylish 2BR · Free Parking',
    location:     'Manchester, England',
    city:         'Manchester',
    postcode:     'M16 0ED',
    bedrooms:     2,
    bathrooms:    1,
    guests:       8,
    beds:         5,
    type:         'Apartment',
    badge:        'Available',
    badgeClass:   'badge-teal',
    img:          'https://djts5lg061pqs.cloudfront.net/73be506d-8b70-4fe3-b10a-9df61ec992c1.png?width=800',
    photos: [
      'https://djts5lg061pqs.cloudfront.net/73be506d-8b70-4fe3-b10a-9df61ec992c1.png?width=1200',
      'https://djts5lg061pqs.cloudfront.net/3fab2b75-82b6-4727-b60a-ac9b8f7591a4.jpg?width=1200',
      'https://djts5lg061pqs.cloudfront.net/badc9c3d-9eff-465c-9671-9de6d21165c6.jpg?width=1200',
      'https://djts5lg061pqs.cloudfront.net/a07a0e70-087b-4434-ba16-6af26bb47a86.jpg?width=1200',
      'https://djts5lg061pqs.cloudfront.net/d2ba39a7-4f14-45f6-82c7-e3b64e466af9.jpg?width=1200',
      'https://djts5lg061pqs.cloudfront.net/9cc22d2b-4268-4de2-b5d7-92756839c198.jpg?width=1200',
      'https://djts5lg061pqs.cloudfront.net/fa15ece2-f70e-47e2-9334-61c4153e4a79.jpg?width=1200',
      'https://djts5lg061pqs.cloudfront.net/6fb0c970-c21b-4c46-892a-255439da6c63.jpg?width=1200',
    ],
    tags:     ['Free Parking','Walk to Old Trafford','Family Friendly','Self Check-in'],
    bookUrl:  'https://pvrgroupsltd.bookeddirectly.host/properties/2e1725',
    checkIn:  '15:00', checkOut: '10:00', deposit: 150,
    description: `Modern ground-floor flat with free dedicated parking — a short walk from Old Trafford Stadium.\n\nPerfect for families, groups, football fans, contractors, NHS staff and business travellers. Two comfortable bedrooms with quality bedding, a bright living space with Smart TV and sofa bed, and a fully equipped kitchen with all appliances.\n\n🚗 Free private parking right outside — no charges.\n🔐 Easy self check-in via secure lockbox.\n\nHotel-standard cleaning before every stay. Professionally managed by PVR Groups Ltd.`,
    amenities: [
      {icon:'🚗',name:'Free Parking'},{icon:'📶',name:'Fast Wi-Fi'},
      {icon:'📺',name:'Smart TV'},{icon:'🍳',name:'Full Kitchen'},
      {icon:'🧺',name:'Washing Machine'},{icon:'🛏',name:'Linens & Towels'},
      {icon:'👕',name:'Iron & Board'},{icon:'💨',name:'Hair Dryer'},
      {icon:'👶',name:'Children Welcome'},{icon:'🔑',name:'Self Check-In'},
      {icon:'🧹',name:'Professionally Cleaned'},{icon:'🔥',name:'Smoke Detector'},
    ],
    transport: [
      {icon:'⚽',text:'Walk to Old Trafford Stadium'},
      {icon:'🎭',text:'Easy access to MediaCity UK & Salford Quays'},
      {icon:'🚌',text:'Bus links to Manchester City Centre'},
      {icon:'🛍️',text:'Trafford Centre shopping 5 mins away'},
    ],
    rules: [
      {icon:'🚭',text:'No Smoking'},{icon:'🐾',text:'No Pets'},
      {icon:'🎉',text:'No Parties'},{icon:'🔇',text:'Quiet Hours 10 PM'},
      {icon:'💳',text:'£150 Refundable Deposit'},{icon:'🗝️',text:'£100 Lost Key Fee'},
      {icon:'⏰',text:'Late checkout: £85 fee'},{icon:'✅',text:'Long Stays Welcome'},
    ],
  },
  {
    id:           'castlefield-canal',
    uplisting_id: '255289',
    slug:         'e8f52c',
    name:         'Canal-Side Apartment with Private Balcony - Castlefield - Business & Long Stays',
    /* Neighbourhood from map: Excelsior Works, Hulme Hall Rd, M15 — Castlefield/Hulme */
    displayName:  'Canal-Side 1BR · Private Balcony',
    location:     'Greater Manchester, England',
    city:         'Manchester',
    postcode:     'M15 4LY',
    bedrooms:     1,
    bathrooms:    1,
    guests:       3,
    beds:         1,
    type:         'Apartment',
    badge:        'New',
    badgeClass:   'badge-gold',
    img:          'https://djts5lg061pqs.cloudfront.net/bcc5e418-d5a8-4650-a269-d2a4b18102e7.jpg?width=800',
    photos: [
      'https://djts5lg061pqs.cloudfront.net/bcc5e418-d5a8-4650-a269-d2a4b18102e7.jpg?width=1200',
      'https://djts5lg061pqs.cloudfront.net/57108d69-0fe1-440f-bcb1-87bf009f1a01.jpg?width=1200',
      'https://djts5lg061pqs.cloudfront.net/6a85f32d-83be-4373-bd47-b53451e30866.jpg?width=1200',
      'https://djts5lg061pqs.cloudfront.net/146850f2-c81c-4217-bfb6-187257dbf2c6.jpg?width=1200',
      'https://djts5lg061pqs.cloudfront.net/7e6e820c-7fd5-46b5-b272-a35ba76992d1.jpg?width=1200',
      'https://djts5lg061pqs.cloudfront.net/c5472470-5947-461b-98c8-27a1daa45d01.jpg?width=1200',
      'https://djts5lg061pqs.cloudfront.net/65868bba-5640-4020-ba20-3dae2f9385de.png?width=1200',
      'https://djts5lg061pqs.cloudfront.net/80973d65-a862-4722-ab2d-5ee1894620b4.png?width=1200',
    ],
    tags:     ['Private Balcony','Canal Views','Long Stays Welcome','Business Friendly'],
    bookUrl:  'https://pvrgroupsltd.bookeddirectly.host/properties/e8f52c',
    checkIn:  '15:00', checkOut: '11:00', deposit: 150,
    description: `Modern canal-side apartment in one of Manchester's most desirable addresses — Castlefield — with a private Balcony perfect for relaxing after a day in the city.\n\nBright open-plan living with both comfort and practicality in mind. Ultra-fast Wi-Fi ideal for remote work or streaming. Fully equipped kitchen with integrated appliances. Spacious double bedroom with ample storage. Modern bathroom with bath and overhead shower.\n\nSteps from Deansgate restaurants, bars and independent cafés. Excellent transport links to MediaCity and Manchester Piccadilly.\n\nIdeal for business travellers, couples and extended stays.`,
    amenities: [
      {icon:'🌿',name:'Private Balcony'},{icon:'📶',name:'Fast Wi-Fi'},
      {icon:'📺',name:'Smart TV'},{icon:'🍳',name:'Full Kitchen'},
      {icon:'🛁',name:'Bath & Shower'},{icon:'🧺',name:'Washing Machine'},
      {icon:'🛏',name:'Linens & Towels'},{icon:'🔑',name:'Self Check-In'},
      {icon:'🧹',name:'Professionally Cleaned'},{icon:'🔥',name:'Smoke Detector'},
      {icon:'🔕',name:'CO Detector'},{icon:'🧯',name:'Fire Extinguisher'},
    ],
    transport: [
      {icon:'🍽️',text:'Deansgate restaurants & bars — 5 min walk'},
      {icon:'🚆',text:'Manchester Piccadilly — 10 min via Metrolink'},
      {icon:'📡',text:'MediaCity UK — direct Metrolink connection'},
      {icon:'✈️',text:'Manchester Airport — 25 min by train'},
    ],
    rules: [
      {icon:'🚭',text:'No Smoking'},{icon:'🐾',text:'No Pets'},
      {icon:'🎉',text:'No Parties'},{icon:'🔇',text:'Quiet Hours 10 PM'},
      {icon:'💳',text:'£150 Refundable Deposit'},{icon:'🗝️',text:'£100 Lost Key Fee'},
      {icon:'⏰',text:'Late checkout: £85 fee'},{icon:'✅',text:'Extended Stays Welcome'},
    ],
  },
];

/* expose globally so property.html can reuse */
window.PVR_PROPERTIES = PROPERTIES;
window.PVR_CONFIG     = CONFIG;

/* ── Navigation ──────────────────────────────────────────────── */
(function initNav() {
  const nav = document.getElementById('nav');
  if (!nav) return;
  window.addEventListener('scroll', () => {
    nav.classList.toggle('scrolled', window.scrollY > 60);
  }, {passive:true});

  const hamburger = document.getElementById('hamburger');
  const mobNav    = document.getElementById('mobNav');
  const mobClose  = document.getElementById('mobClose');
  if (hamburger && mobNav) {
    hamburger.addEventListener('click', () => { mobNav.classList.add('open'); hamburger.setAttribute('aria-expanded','true'); });
    mobClose?.addEventListener('click', () => { mobNav.classList.remove('open'); hamburger.setAttribute('aria-expanded','false'); });
    mobNav.addEventListener('click', e => { if (e.target === mobNav) mobNav.classList.remove('open'); });
    mobNav.querySelectorAll('a').forEach(a => a.addEventListener('click', () => mobNav.classList.remove('open')));
  }

  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-menu a[href^="#"]');
  const io = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        navLinks.forEach(a => a.classList.toggle('active', a.getAttribute('href') === `#${entry.target.id}`));
      }
    });
  }, {rootMargin:'-40% 0px -55% 0px'});
  sections.forEach(s => io.observe(s));
})();

/* ── Render Property Cards ───────────────────────────────────── */
function renderPropertyCards(container, props) {
  if (!container) return;
  container.innerHTML = props.map(p => `
    <a href="${p.url || ('property.html?id='+p.slug)}" class="prop-card fade-up" id="prop-${p.id}">
      <div class="prop-img">
        <img src="${p.img}" alt="${p.displayName}" loading="lazy"
             onerror="this.src='https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&q=80'">
        <span class="prop-badge ${p.badgeClass}">${p.badge}</span>
        <button class="prop-save" aria-label="Save property" onclick="event.preventDefault();this.textContent=this.textContent==='♡'?'♥':'♡'">♡</button>
      </div>
      <div class="prop-body">
        <div class="prop-loc">📍 ${p.location}</div>
        <h3>${p.name}</h3>
        <div class="prop-meta">
          <span>🛏 ${p.bedrooms} Bed${p.bedrooms>1?'s':''}</span>
          <span>🚿 ${p.bathrooms} Bath</span>
          <span>👤 Up to ${p.guests}</span>
          <span>🏠 ${p.type}</span>
        </div>
        <div class="prop-tags">${p.tags.slice(0,3).map(t=>`<span class="prop-tag">${t}</span>`).join('')}</div>
        <div class="prop-price">
          <span class="prop-price-from">From</span>
          <span class="prop-price-amount" data-prop-id="${p.id}" data-uplisting-id="${p.uplisting_id}">
            <span style="font-size:.8rem;color:var(--muted);font-family:var(--font-b)">Checking…</span>
          </span>
          <span class="prop-price-note">/ night</span>
        </div>
        <div class="prop-actions">
          <span class="btn btn-gold btn-sm" style="flex:1;justify-content:center;pointer-events:none">View Property</span>
          <span class="btn btn-outline btn-sm" style="flex:1;justify-content:center;pointer-events:none">Check Dates</span>
        </div>
      </div>
    </a>
  `).join('');
}

document.addEventListener('DOMContentLoaded', () => {
  const grid = document.getElementById('propsGrid');
  if (grid) {
    renderPropertyCards(grid, PROPERTIES);
    initObserver();
  }
});

/* ── Location Filter ─────────────────────────────────────────── */
(function initLocationFilter() {
  document.querySelectorAll('.loc-filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.loc-filter-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const filter = btn.dataset.city;
      const grid   = document.getElementById('propsGrid');
      renderPropertyCards(grid, filter === 'all' ? PROPERTIES : PROPERTIES.filter(p => p.city === filter));
      initObserver();
    });
  });
})();

/* ── Intersection Observer (Animations) ──────────────────────── */
function initObserver() {
  const io = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) { entry.target.classList.add('visible'); io.unobserve(entry.target); }
    });
  }, {threshold:0.08, rootMargin:'0px 0px -30px 0px'});
  document.querySelectorAll('.fade-up, .fade-in').forEach((el, i) => {
    const siblings = el.parentElement?.children;
    if (siblings) {
      const idx = Array.from(siblings).indexOf(el);
      if (idx < 6) el.style.transitionDelay = `${idx * 0.07}s`;
    }
    io.observe(el);
  });
}
document.addEventListener('DOMContentLoaded', initObserver);

/* ── Search Bar ──────────────────────────────────────────────── */
(function initSearch() {
  const sciEl = document.getElementById('sci');
  const scoEl = document.getElementById('sco');
  const sBtn  = document.getElementById('searchBtn');
  if (!sciEl || !scoEl) return;
  const today = new Date().toISOString().split('T')[0];
  sciEl.min = today; scoEl.min = today;
  sciEl.addEventListener('change', () => {
    const next = new Date(sciEl.value);
    next.setDate(next.getDate()+1);
    scoEl.min = next.toISOString().split('T')[0];
    if (scoEl.value && scoEl.value <= sciEl.value) scoEl.value = '';
  });
  sBtn?.addEventListener('click', () => {
    const city   = document.getElementById('sProp')?.value;
    const ci     = sciEl.value;
    const co     = scoEl.value;
    const guests = document.getElementById('sGuests')?.value || 2;
    const params = new URLSearchParams();
    if (ci)                 params.set('check_in',  ci);
    if (co)                 params.set('check_out', co);
    if (guests)             params.set('guests',    guests);
    if (city && city!=='any') params.set('location', city);
    const qs = params.toString();
    window.open(qs ? `${CONFIG.DIRECT_BOOKING_URL}?${qs}` : CONFIG.DIRECT_BOOKING_URL, '_blank');
  });
})();

/* ── Income Calculator ───────────────────────────────────────── */
(function initCalculator() {
  const calcBtn = document.getElementById('calcBtn');
  if (!calcBtn) return;
  calcBtn.addEventListener('click', calculateIncome);
})();

function calculateIncome() {
  const location    = document.getElementById('cLocation')?.value || '';
  const currentRent = parseFloat(document.getElementById('cCurrentRent')?.value || 0);
  const beds        = document.getElementById('cBeds')?.value || '2';
  const type        = document.getElementById('cType')?.value || 'apartment';
  if (!location) { alert('Please select a location.'); return; }
  if (!currentRent || currentRent < 300) { alert('Please enter your current monthly rent (min £300).'); return; }
  const locMult = {london:2.8,edinburgh:2.5,manchester:2.2,bristol:1.9,birmingham:1.75}[location] || 2.0;
  const bedsMult= {studio:.75,'1':1,'2':1.4,'3':1.8,'4':2.2,'5':2.6}[beds] || 1.4;
  const typeMult= {apartment:1,studio:.75,Balconyd:1.08,house:1.15,detached:1.25}[type] || 1;
  const saGross = Math.round(currentRent * locMult * (typeMult*.5+.5) * (bedsMult*.3+.7));
  const mgmtFee = Math.round(saGross * .15);
  const saNet   = saGross - mgmtFee;
  const uplift  = Math.round(((saNet - currentRent) / currentRent) * 100);
  const fmt = n => '£' + n.toLocaleString('en-GB');
  const setVal = (id, val) => { const el = document.getElementById(id); if (el) el.textContent = val; };
  setVal('crCurrentRent', fmt(currentRent));
  setVal('crSaGross',     fmt(saGross));
  setVal('crMgmt',        fmt(mgmtFee));
  setVal('crSaNet',       fmt(saNet));
  setVal('crUplift',      `+${uplift}% more than your current let`);
  const results = document.getElementById('calcResults');
  if (results) {
    results.style.display = 'block';
    setTimeout(() => results.scrollIntoView({behavior:'smooth',block:'nearest'}), 80);
  }
  document.querySelectorAll('#calcResults .crr-value').forEach(el => {
    el.style.opacity='0'; el.style.transform='translateY(8px)';
    setTimeout(() => { el.style.transition='all .4s ease'; el.style.opacity='1'; el.style.transform='translateY(0)'; }, 80);
  });
}

/* ── Events Tabs ─────────────────────────────────────────────── */
const EVENTS = {
  london: [
    {cat:'Music',    name:'Canary Wharf Jazz Festival',   date:'June 2025',       venue:'Crossrail Place, Canary Wharf'},
    {cat:'Festival', name:'Winter Lights Festival',       date:'January 2026',    venue:'Canary Wharf Estate'},
    {cat:'Conf.',    name:'London Tech Week at ExCeL',    date:'June 2025',       venue:'ExCeL London, Royal Docks'},
    {cat:'Culture',  name:'Frieze London Art Fair',       date:'October 2025',    venue:'Regent\'s Park'},
    {cat:'Sport',    name:'London Marathon',              date:'April 2026',      venue:'Various, Central London'},
    {cat:'Dining',   name:'London Restaurant Festival',  date:'October 2025',    venue:'Various restaurants'},
  ],
  manchester: [
    {cat:'Sport',   name:'Old Trafford Match Days',       date:'Weekly (season)', venue:'Old Trafford Stadium'},
    {cat:'Food',    name:'Manchester Food & Drink Fest',  date:'September 2025',  venue:'Manchester City Centre'},
    {cat:'Market',  name:'Manchester Christmas Markets',  date:'Nov–Dec 2025',    venue:'Albert Square & beyond'},
    {cat:'Music',   name:'Co-op Live Arena Shows',        date:'Year-round',      venue:'Co-op Live, Manchester'},
    {cat:'Culture', name:'Manchester International Fest.',date:'July 2025',       venue:'Various venues'},
    {cat:'Conf.',   name:'MIPIM UK & Property Events',   date:'Various 2025',    venue:'Manchester Central'},
  ]
};
function renderEvents(city) {
  const grid = document.getElementById('eventsGrid');
  if (!grid) return;
  grid.innerHTML = (EVENTS[city]||[]).map(ev => `
    <div class="event-card fade-up">
      <div class="event-cat">${ev.cat}</div>
      <h4>${ev.name}</h4>
      <p>${ev.date}</p>
      <div class="event-venue">📍 ${ev.venue}</div>
    </div>`).join('');
  initObserver();
}
(function initEventsTabs() {
  document.querySelectorAll('.events-tab').forEach(tab => {
    tab.addEventListener('click', () => {
      document.querySelectorAll('.events-tab').forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      renderEvents(tab.dataset.city);
    });
  });
  renderEvents('london');
})();

/* ── Forms ───────────────────────────────────────────────────── */
(function initForms() {
  function handleForm(formId, successId) {
    const form = document.getElementById(formId);
    const suc  = document.getElementById(successId);
    if (!form) return;
    form.addEventListener('submit', e => {
      e.preventDefault();
      const btn = form.querySelector('[type=submit]');
      if (btn) { btn.textContent='Sending…'; btn.disabled=true; }
      setTimeout(() => { form.style.display='none'; if(suc) suc.style.display='block'; }, 900);
    });
  }
  ['contactForm','landlordForm','agentForm','corporateForm','enquiryForm'].forEach((id,i) =>
    handleForm(id, id.replace('Form','Success')));
})();

/* =========================================================
   PVR UNIVERSAL WHATSAPP + EXIT POPUP
   Shows every time user tries to leave
========================================================= */
(function () {
  const WA_NUMBER = "447459150439";

  function openWhatsApp(message) {
    const text = encodeURIComponent(
      message || "Hello PVR Groups Ltd, I would like to make an enquiry."
    );
    window.open(`https://wa.me/${WA_NUMBER}?text=${text}`, "_blank");
  }

  document.addEventListener("click", function (e) {
    const waLink = e.target.closest("[data-whatsapp], .wa-btn");
    if (!waLink) return;

    e.preventDefault();

    const message =
      waLink.getAttribute("data-whatsapp") ||
      "Hello PVR Groups Ltd, I would like to make an enquiry.";

    openWhatsApp(message);
  });

  function createExitPopup() {
    if (document.getElementById("pvrExitPopup")) return;

    const style = document.createElement("style");
    style.innerHTML = `
      #pvrExitPopup{
        position:fixed;inset:0;z-index:999999;
        background:rgba(14,14,18,.82);
        backdrop-filter:blur(10px);
        display:none;align-items:center;justify-content:center;
        padding:1.2rem;
      }
      #pvrExitPopup.show{display:flex;}
      .pvr-exit-box{
        width:min(560px,100%);
        background:#141419;color:#fff;
        border:1px solid rgba(200,150,42,.35);
        border-radius:18px;padding:2.2rem;
        position:relative;text-align:center;
        box-shadow:0 25px 80px rgba(0,0,0,.55);
      }
      .pvr-exit-close{
        position:absolute;top:1rem;right:1rem;
        background:none;border:none;color:rgba(255,255,255,.55);
        font-size:2rem;cursor:pointer;
      }
      .pvr-exit-label{
        display:inline-block;color:#dea93a;
        border:1px solid rgba(200,150,42,.45);
        border-radius:50px;padding:.35rem 1rem;
        font-size:.7rem;letter-spacing:.16em;
        text-transform:uppercase;font-weight:700;
        margin-bottom:1rem;
      }
      .pvr-exit-box h3{
        font-family:'Playfair Display',Georgia,serif;
        font-size:clamp(1.6rem,3vw,2.1rem);
        margin-bottom:.8rem;line-height:1.15;
      }
      .pvr-exit-box p{
        color:rgba(255,255,255,.65);
        line-height:1.7;margin-bottom:1.4rem;
      }
      .pvr-exit-wa{
        width:100%;border:none;border-radius:8px;
        background:linear-gradient(135deg,#c8962a,#dea93a);
        color:#fff;padding:1rem 1.2rem;
        font-weight:800;cursor:pointer;font-size:1rem;
      }
      .pvr-exit-skip{
        margin-top:1rem;background:none;border:none;
        color:rgba(255,255,255,.5);
        cursor:pointer;font-weight:600;
      }
    `;
    document.head.appendChild(style);

    const popup = document.createElement("div");
    popup.id = "pvrExitPopup";
    popup.innerHTML = `
      <div class="pvr-exit-box">
        <button class="pvr-exit-close" type="button">×</button>
        <div class="pvr-exit-label">Before You Go</div>
        <h3>Need Help With Stays, Property or Investment?</h3>
        <p>
          Speak directly with PVR Groups Ltd for accommodation, company lets,
          landlord services, property management or investor partnerships.
        </p>
        <button class="pvr-exit-wa" type="button">Message Us on WhatsApp →</button>
        <button class="pvr-exit-skip" type="button">Continue browsing</button>
      </div>
    `;
    document.body.appendChild(popup);

    popup.querySelector(".pvr-exit-close").onclick = closePopup;
    popup.querySelector(".pvr-exit-skip").onclick = closePopup;

    popup.querySelector(".pvr-exit-wa").onclick = function () {
      openWhatsApp("Hello PVR Groups Ltd, I was viewing your website and would like to speak with someone.");
      closePopup();
    };

    popup.addEventListener("click", function (e) {
      if (e.target === popup) closePopup();
    });
  }

  function showPopup() {
    createExitPopup();
    const popup = document.getElementById("pvrExitPopup");
    if (popup && !popup.classList.contains("show")) {
      popup.classList.add("show");
    }
  }

  function closePopup() {
    const popup = document.getElementById("pvrExitPopup");
    if (popup) popup.classList.remove("show");
  }

  document.addEventListener("mouseleave", function (e) {
    if (e.clientY <= 0) {
      showPopup();
    }
  });

  document.addEventListener("DOMContentLoaded", createExitPopup);
})();
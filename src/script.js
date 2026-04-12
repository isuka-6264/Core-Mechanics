/* main.js */

'use strict';

// FOOTER
document.body.insertAdjacentHTML('beforeend', `
    <footer class="footer">
        <div class="container footer-inner">
            <div class="footer-brand">
                <span class="logo">CORE<span>MECHANICS</span></span>
                <p>Premium auto parts & performance upgrades. Not a dealership -- a garage.</p>
            </div>
            <div></div>
            <div class="footer-links">
                <h4>Navigation</h4>
                <ul>
                    <li><a href="index.html">Home</a></li>
                    <li><a href="catalog.html">Catalog</a></li>
                    <li><a href="catalog-item.html">Featured Item</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </div>
            <div class="footer-links">
                <h4>Policy</h4>
                <ul>
                    <li><a href="#">Privacy Policy</a></li>
                    <li><a href="#">Terms of Use</a></li>
                    <li><a href="#">Shipping Info</a></li>
                    <li><a href="#">Returns</a></li>
                </ul>
            </div>
        </div>
        <div class="footer-bottom">
            <p>&copy; 2026 CORE MECHANICS. All rights reserved.</p>
        </div>
    </footer>
`);


/* PRODUCT */
const products = [
  {
    id: 'p01',
    name: 'Garrett GT3582R Turbocharger',
    brand: 'Garrett',
    category: 'engine',
    price: 1249,
    emoji: '🌀',
    description: 'Ball bearing turbocharger, 700whp capable, T3/T4 divided housing.'
  },
  {
    id: 'p02',
    name: 'HKS Hi-Power Exhaust System',
    brand: 'HKS',
    category: 'exhaust',
    price: 689,
    emoji: '💨',
    description: 'Stainless 76mm cat-back system with polished dual tips.'
  },
  {
    id: 'p03',
    name: 'KW Coilover Kit V3',
    brand: 'KW Suspension',
    category: 'suspension',
    price: 1850,
    emoji: '⚙️',
    description: 'Fully adjustable compression & rebound, 50–100mm lowering range.'
  },
  {
    id: 'p04',
    name: 'Voltex Type-5 Front Splitter',
    brand: 'Voltex',
    category: 'bodykit',
    price: 520,
    emoji: '🚗',
    description: 'Carbon fibre aero splitter with adjustable lip. Aggressive downforce.'
  },
  {
    id: 'p05',
    name: 'Brembo GT Big Brake Kit',
    brand: 'Brembo',
    category: 'brakes',
    price: 1380,
    emoji: '🛑',
    description: '6-piston front calipers, 380mm cross-drilled rotors. Track ready.'
  },
  {
    id: 'p06',
    name: 'Hondata FlashPro ECU Tune',
    brand: 'Hondata',
    category: 'tuning',
    price: 695,
    emoji: '📊',
    description: 'Full ECU remapping solution, live data logging, boost control.'
  },
  {
    id: 'p07',
    name: 'Tomei Expreme Ti Catback',
    brand: 'Tomei',
    category: 'exhaust',
    price: 890,
    emoji: '💨',
    description: 'Titanium cat-back exhaust, ultra-light, raw motorsport tone.'
  },
  {
    id: 'p08',
    name: 'BC Racing BR Series Coilovers',
    brand: 'BC Racing',
    category: 'suspension',
    price: 750,
    emoji: '⚙️',
    description: 'Monotube design, 30-way adjustable damping, street & track capable.'
  },
  {
    id: 'p09',
    name: 'Varis Carbon Rear Wing',
    brand: 'Varis',
    category: 'bodykit',
    price: 960,
    emoji: '🏎️',
    description: 'Dry carbon GT wing, adjustable angle, full hardware included.'
  },
  {
    id: 'p10',
    name: 'AEM Cold Air Intake System',
    brand: 'AEM',
    category: 'engine',
    price: 285,
    emoji: '🔧',
    description: 'Mandrel-bent aluminium intake tube, high-flow DryFlow filter.'
  },
  {
    id: 'p11',
    name: 'Wilwood Brake Pad Set — Track',
    brand: 'Wilwood',
    category: 'brakes',
    price: 120,
    emoji: '🛑',
    description: 'High-temp compound, zero fade up to 800°C, fits most big brake kits.'
  },
  {
    id: 'p12',
    name: 'Haltech Elite 2500 ECU',
    brand: 'Haltech',
    category: 'tuning',
    price: 1720,
    emoji: '📊',
    description: 'Standalone engine management, 8-cylinder support, full sensor suite.'
  },
  {
    id: 'p13',
    name: 'Mishimoto Intercooler Kit',
    brand: 'Mishimoto',
    category: 'engine',
    price: 490,
    emoji: '❄️',
    description: 'Bar-and-plate front mount intercooler, 2.5" inlet/outlet, bolt-on.'
  },
  {
    id: 'p14',
    name: 'Whiteline Sway Bar Kit',
    brand: 'Whiteline',
    category: 'suspension',
    price: 340,
    emoji: '⚙️',
    description: 'Adjustable front & rear sway bars, reduces body roll by 30%.'
  },
  {
    id: 'p15',
    name: 'TurboSmart Boost Controller',
    brand: 'TurboSmart',
    category: 'tuning',
    price: 210,
    emoji: '📊',
    description: 'Manual boost controller, 1–40 PSI range, compact universal fit.'
  },
  {
    id: 'p16',
    name: 'Rocket Bunny Wide Body Kit',
    brand: 'Rocket Bunny',
    category: 'bodykit',
    price: 2400,
    emoji: '🚘',
    description: 'Full wide-body conversion: fenders, side skirts, front/rear diffusers.'
  }
];

let cart = [];

/* RENDERING */
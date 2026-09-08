/* ============================================================
   FOTOS Y LOGO — REALES (el usuario las dejó en fotos/ el 08-09-2026)
   ============================================================
   - logo-real.jpg: logo oficial (ilustración de taza + libro abierto +
     wordmark "Tsiluba · Cafetería Literaria").
   - interior-vitrina.jpg: foto real del interior, vitrina de pastelería
     y helados, pizarras de Pastelería/Café/Jugos de Temporada.
   - rincon-literario.jpg: foto real del "Rincón Literario" — la
     estantería con libros para leer en el local (parte de un post real
     de Instagram, "Renovamos nuestro rincón literario").
   Ambas capturas de pantalla se comprimieron a JPG ~70% antes de usarlas
   (pesaban ~450-950KB originalmente). */
const LOGO_SRC = 'fotos/logo-real.jpg';
const HERO_SRC = 'fotos/interior-vitrina.jpg';
const GAL_UNO_SRC = 'fotos/interior-vitrina.jpg';
const GAL_DOS_SRC = 'fotos/rincon-literario.jpg';

document.getElementById('logoNav').src = LOGO_SRC;
document.getElementById('logoFooter').src = LOGO_SRC;
document.getElementById('heroPhoto').src = HERO_SRC;
document.getElementById('galUno').src = GAL_UNO_SRC;
document.getElementById('galDos').src = GAL_DOS_SRC;

/* ============================================================
   CARTA — precios reales, sacados de la foto oficial del menú del
   local que el usuario dejó en fotos/ (menú "Cafetería Tsiluba",
   con el mismo horario actualizado impreso al pie). Coinciden con
   los mismos productos (a veces con formato/precio algo distinto,
   por el recargo de la plataforma) que aparecen en su tienda de
   PedidosYa (https://www.pedidosya.cl/restaurantes/santiago/cafe-tsiluba-menu).
   Se usan los precios del menú físico del local, que es el que
   corresponde a consumo en el local.
   ============================================================ */
const MENU = {
  'Café': [
    { n: 'Espresso', p: '$1.800', d: 'Doble $2.700' },
    { n: 'Americano', p: '$2.000', d: 'Doble $3.000' },
    { n: 'Café Latte', p: '$3.400', d: 'Doble $4.300' },
    { n: 'Café Mocca', p: '$3.990', d: 'Doble $4.990' },
    { n: 'Capuccino', p: '$2.890', d: 'Doble $4.000' },
    { n: 'Capuccino Cream / Esencia', p: '$3.400', d: 'Doble $4.300' },
    { n: 'Cortado', p: '$2.490', d: 'Doble $2.990' },
    { n: 'Chocolate caliente', p: '$3.990', d: '' },
    { n: 'Tetera (té)', p: '$2.490', d: 'Doble $3.000' },
  ],
  'Ice / Bebidas frías': [
    { n: 'Ice Americano', p: '$3.000', d: 'Café espresso doble servido con hielo y agua fría.' },
    { n: 'Ice Latte', p: '$3.500', d: 'Espresso combinado con leche fría y hielo.' },
    { n: 'Ice Latte Esencia', p: '$4.000', d: 'Toque de vainilla, caramelo o avellana.' },
    { n: 'Ice Mocca', p: '$4.500', d: 'Espresso, chocolate y leche fría con hielo.' },
    { n: 'Vanilla Ice', p: '$4.000', d: '' },
    { n: 'Café helado', p: '$4.500', d: '' },
    { n: 'Batido', p: '$4.500', d: '' },
    { n: 'Malteada', p: '$4.500', d: '' },
    { n: 'Limonada', p: '$3.500', d: '' },
    { n: 'Jugo natural', p: '$2.990', d: '' },
    { n: 'Afogato', p: '$3.000', d: '' },
  ],
  'Helados': [
    { n: 'Helado simple', p: '$1.650', d: '' },
    { n: 'Helado doble', p: '$3.000', d: '' },
    { n: 'Helado familiar', p: '$7.000', d: '6 sabores a elección.' },
    { n: 'Copa', p: '$4.500', d: '' },
    { n: 'Brownie + helado', p: '$4.990', d: '' },
  ],
  'Pastelería': [
    { n: 'Torta Reina Ana', p: '$3.600', d: '' },
    { n: 'Torta Sacher', p: '$4.000', d: '' },
    { n: 'Torta Holandesa', p: '$3.600', d: '' },
    { n: 'Torta Tres Leches', p: '$3.600', d: '' },
    { n: 'Torta Cachito', p: '$3.600', d: '"La más rica de todas", según una reseña real de Google.' },
    { n: 'Tiramisú', p: '$3.600', d: '' },
    { n: 'Cheesecake', p: '$3.800', d: '' },
    { n: 'Panqueque Naranja Chocolate', p: '$3.600', d: '' },
    { n: 'Carrot Cake', p: '$3.600', d: '' },
    { n: 'Kuchen de Manzana', p: '$2.900', d: '' },
    { n: 'Kuchen Frutos Rojos', p: '$2.900', d: '' },
    { n: 'Kuchen de Nuez', p: '$2.900', d: '' },
    { n: 'Pie de Limón', p: '$2.900', d: '' },
  ],
  'Sándwiches': [
    { n: 'Mechada Luchin', p: '$5.500', d: 'Carne mechada y doble queso.' },
    { n: 'Mechada Vicente', p: '$5.500', d: 'Carne mechada, champiñón y queso.' },
    { n: 'Pollo Javito', p: '$5.500', d: 'Pollo desmenuzado y mayonesa.' },
    { n: 'Pollo de Franco', p: '$5.500', d: 'Pollo desmenuzado, mayonesa y pimentón rojo.' },
    { n: 'Pollo Simone', p: '$5.500', d: 'Pollo desmenuzado, mayonesa y palta.' },
    { n: 'Cabrito Gabriel', p: '$5.500', d: 'Queso de cabra, tomate y albahaca.' },
  ],
  'Bollería': [
    { n: 'Brownie Vegano', p: '$2.000', d: '' },
    { n: 'Mendocino', p: '$1.500', d: '' },
    { n: 'Maicena', p: '$1.500', d: '' },
  ],
};

const menuTabsEl = document.getElementById('menuTabs');
const menuPanelsEl = document.getElementById('menuPanels');
const categorias = Object.keys(MENU);

categorias.forEach((cat, i) => {
  const tabBtn = document.createElement('button');
  tabBtn.className = 'menu-tab-btn' + (i === 0 ? ' active' : '');
  tabBtn.textContent = cat;
  tabBtn.addEventListener('click', () => {
    document.querySelectorAll('.menu-tab-btn').forEach(b => b.classList.remove('active'));
    document.querySelectorAll('.menu-panel').forEach(p => p.classList.remove('active'));
    tabBtn.classList.add('active');
    document.getElementById('panel-' + i).classList.add('active');
  });
  menuTabsEl.appendChild(tabBtn);

  const panel = document.createElement('div');
  panel.className = 'menu-panel' + (i === 0 ? ' active' : '');
  panel.id = 'panel-' + i;
  const grid = document.createElement('div');
  grid.className = 'menu-grid';
  MENU[cat].forEach(item => {
    const row = document.createElement('div');
    row.className = 'menu-item';
    row.innerHTML = `
      <div class="menu-item-text">
        <p class="menu-item-name">${item.n}</p>
        ${item.d ? `<p class="menu-item-desc">${item.d}</p>` : ''}
      </div>
      <span class="menu-item-price">${item.p}</span>
    `;
    grid.appendChild(row);
  });
  panel.appendChild(grid);
  menuPanelsEl.appendChild(panel);
});

/* ============================================================
   HORARIO EN VIVO — real, actualizado según el menú/story oficial
   del local (el horario cambió recientemente, la ficha de Google
   aún no lo reflejaba). Lunes a sábado 12:00-21:00, Domingo y
   festivos 15:00-21:00.
   ============================================================ */
(function () {
  const now = new Date();
  const day = now.getDay(); // 0 = domingo
  const minutes = now.getHours() * 60 + now.getMinutes();
  const openMin = day === 0 ? 15 * 60 : 12 * 60;
  const closeMin = 21 * 60;
  const isOpen = minutes >= openMin && minutes < closeMin;

  const statusDot = document.getElementById('statusDot');
  const statusText = document.getElementById('statusText');
  const visitStatus = document.getElementById('visit-status');
  const openHour = day === 0 ? '15:00' : '12:00';

  if (isOpen) {
    statusDot.classList.remove('closed');
    statusText.textContent = 'Abierto ahora · cierra 21:00';
    visitStatus.textContent = 'Abierto ahora — cierra a las 21:00';
  } else {
    statusDot.classList.add('closed');
    statusText.textContent = `Cerrado ahora · abre ${openHour}`;
    visitStatus.textContent = `Cerrado ahora — abre a las ${openHour}`;
  }
})();

/* ============================================================
   NAVEGACIÓN SPA POR PESTAÑAS
   ============================================================ */
function goToTab(tabName) {
  document.querySelectorAll('.tab-panel').forEach(p => p.classList.remove('active'));
  document.querySelectorAll('.nav-link').forEach(b => b.classList.remove('active'));
  const panel = document.querySelector(`[data-tab-panel="${tabName}"]`);
  const link = document.querySelector(`.nav-link[data-tab="${tabName}"]`);
  if (panel) panel.classList.add('active');
  if (link) link.classList.add('active');
  window.scrollTo({ top: 0, behavior: 'instant' in window ? 'instant' : 'auto' });
  runReveal();
}

document.querySelectorAll('[data-tab]').forEach(el => {
  el.addEventListener('click', (e) => {
    e.preventDefault();
    goToTab(el.getAttribute('data-tab'));
    navLinks.classList.remove('open');
  });
});

/* ---------- Menú hamburguesa ---------- */
const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');
navToggle.addEventListener('click', () => {
  navLinks.classList.toggle('open');
});

/* ---------- Scroll reveal (con red de seguridad por si IntersectionObserver no dispara) ---------- */
function runReveal() {
  const els = document.querySelectorAll('.reveal:not(.in)');
  const io = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in');
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  els.forEach(el => io.observe(el));
  setTimeout(() => {
    document.querySelectorAll('.reveal:not(.in)').forEach(el => {
      const r = el.getBoundingClientRect();
      if (r.top < window.innerHeight) el.classList.add('in');
    });
  }, 1200);
}
runReveal();

/* ---------- Loader breve ---------- */
window.addEventListener('load', () => {
  setTimeout(() => {
    document.getElementById('loader').classList.add('hidden');
  }, 350);
});

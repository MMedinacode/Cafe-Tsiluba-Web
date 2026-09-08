/* ============================================================
   FOTOS Y LOGO — PENDIENTES (placeholder temporal)
   ============================================================
   El usuario aún no ha dejado fotos reales en fotos/. Mientras tanto
   se usan fotos de stock de Unsplash con temática cafetería/libros
   (nunca fotos reales de otra cafetería del portafolio). Reemplazar
   por las reales apenas lleguen. */
const LOGO_SRC = 'https://images.unsplash.com/photo-1481833761820-0509d3217039?w=200&h=200&fit=crop&q=80';
const HERO_SRC = 'https://images.unsplash.com/photo-1481833761820-0509d3217039?w=1600&q=80';
const GAL_UNO_SRC = 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=800&q=80';
const GAL_DOS_SRC = 'https://images.unsplash.com/photo-1521017432531-fbd92d768814?w=800&q=80';
const GAL_TRES_SRC = 'https://images.unsplash.com/photo-1521017432531-fbd92d768814?w=800&q=80';

document.getElementById('logoNav').src = LOGO_SRC;
document.getElementById('logoFooter').src = LOGO_SRC;
document.getElementById('heroPhoto').src = HERO_SRC;
document.getElementById('galUno').src = GAL_UNO_SRC;
document.getElementById('galDos').src = GAL_DOS_SRC;
document.getElementById('galTres').src = GAL_TRES_SRC;

/* ============================================================
   CARTA — productos reales (mencionados en reseñas de Google y en
   las propias redes sociales de Café Tsiluba). Sin carta con precios
   publicada en ningún canal — todo "Consultar", nunca inventado.
   ============================================================ */
const MENU = {
  'Café': [
    { n: 'Capuchino con arte latte', d: 'Mencionado por su nombre real en una reseña de Google.' },
    { n: 'Espresso / Americano', d: '' },
    { n: 'Chocolate caliente', d: 'Producto real destacado en su Instagram.' },
  ],
  'Pastelería': [
    { n: 'Torta cachito', d: '"La más rica de todas", según una reseña real de Google.' },
    { n: 'Pastelería y tortas del día', d: 'Variedad real mencionada en reseñas — "pasteles frescos".' },
    { n: 'Brownie', d: 'Producto real destacado en su Instagram.' },
  ],
  'Para compartir': [
    { n: 'Tabla para compartir', d: 'Real, promocionada en su propio Instagram ("¿vendrás por tu tablita?").' },
  ],
  'Bebidas frías': [
    { n: 'Bebidas frías de temporada', d: 'Variedad real mencionada en su Instagram.' },
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
      <span class="menu-item-price">Consultar</span>
    `;
    grid.appendChild(row);
  });
  panel.appendChild(grid);
  menuPanelsEl.appendChild(panel);
});

/* ============================================================
   HORARIO EN VIVO — real, verificado en el panel de Google (más
   confiable que posts viejos de redes sociales).
   Lunes a sábado 12:30-20:30, Domingo 15:30-20:30.
   ============================================================ */
(function () {
  const now = new Date();
  const day = now.getDay(); // 0 = domingo
  const minutes = now.getHours() * 60 + now.getMinutes();
  const openMin = day === 0 ? 15 * 60 + 30 : 12 * 60 + 30;
  const closeMin = 20 * 60 + 30;
  const isOpen = minutes >= openMin && minutes < closeMin;

  const statusDot = document.getElementById('statusDot');
  const statusText = document.getElementById('statusText');
  const visitStatus = document.getElementById('visit-status');
  const openHour = day === 0 ? '15:30' : '12:30';

  if (isOpen) {
    statusDot.classList.remove('closed');
    statusText.textContent = 'Abierto ahora · cierra 20:30';
    visitStatus.textContent = 'Abierto ahora — cierra a las 20:30';
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

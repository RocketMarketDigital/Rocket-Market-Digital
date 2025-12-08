/* ========== DADOS INICIAIS - substitua affiliate pelos links da Kiwify ========== */
const PRODUCTS = [
  /* ===== TEMPLATES ===== */
    {id:1,title:'Pacote RocketMarketDigital',category:'Outros',price:'R$49,90',desc:'(PROMOÇÃO FIM DE ANO) Tenha acesso vitalício de todos os produtos e sistemas faz lucrar no automático de até 100 clientes por dia.',thumb:'https://i.postimg.cc/JzgJQw5G/marca2.png',affiliate:'https://pay.kiwify.com.br/iic9l8i'},
];


/* DOM refs */
const categoriesEl = document.getElementById('categories');
const gridEl = document.getElementById('grid');
const searchEl = document.getElementById('search');
const yearEl = document.getElementById('year');
const modal = document.getElementById('modal');
const modalTitle = document.getElementById('modalTitle');
const modalThumb = document.getElementById('modalThumb');
const modalDesc = document.getElementById('modalDesc');
const modalPrice = document.getElementById('modalPrice');
const buyNow = document.getElementById('buyNow');
const goToProduct = document.getElementById('goToProduct');
const closeModal = document.getElementById('closeModal');

let state = { products: [...PRODUCTS], category: 'Todas', query: '' };

/* UTIL: unique categories */
function uniqueCategories(list){
  const s = new Set(list.map(p=>p.category));
  return ['Todas',...Array.from(s)];
}


/* RENDER CATEGORIES */
function renderCategories(){
  categoriesEl.innerHTML = '';
  uniqueCategories(state.products).forEach(c=>{
    const btn = document.createElement('button');
    btn.className = 'cat' + (c===state.category ? ' active' : '');
    btn.textContent = c;
    btn.onclick = ()=>{ state.category = c; render(); };
    categoriesEl.appendChild(btn);
  });
}

/* RENDER GRID */
function renderGrid(){
  gridEl.innerHTML = '';
  const q = state.query.trim().toLowerCase();
  const filtered = state.products.filter(p=>{
    const sameCat = state.category === 'Todas' || p.category === state.category;
    const matchQ = !q || p.title.toLowerCase().includes(q) || p.desc.toLowerCase().includes(q);
    return sameCat && matchQ;
  });
  if(filtered.length===0){
    gridEl.innerHTML = '<div class="muted">Nenhum produto encontrado.</div>';
    return;
  }
  filtered.forEach(p=>{
    const card = document.createElement('article');
    card.className = 'card reveal';
    card.innerHTML = `
      <div class="thumb" style="background-image:url(${p.thumb})" role="img" aria-label="${p.title}"></div>
      <div class="meta"><div class="title">${p.title}</div><div class="price">${p.price}</div></div>
      <div class="desc">${p.desc}</div>
      <div class="actions">
        <button class="btn view-btn" data-id="${p.id}">Ver</button>
        <a class="btn accent" href="${p.affiliate}" target="_blank" rel="noopener noreferrer">Comprar</a>
      </div>
    `;
    gridEl.appendChild(card);
  });

  document.querySelectorAll('.view-btn').forEach(b=>{
    b.addEventListener('click', (e)=>{
      const id = Number(e.currentTarget.getAttribute('data-id'));
      openModal(id);
    });
  });

  initReveal();
}

/* MODAL */
function openModal(id){
  const p = state.products.find(x=>x.id===id);
  if(!p) return;
  modalTitle.textContent = p.title;
  modalThumb.style.backgroundImage = `url(${p.thumb})`;
  modalDesc.textContent = p.desc;
  modalPrice.textContent = p.price;
  buyNow.href = p.affiliate;
  goToProduct.onclick = ()=> window.location.href = `product.html?id=${p.id}`;
  modal.classList.add('open'); modal.setAttribute('aria-hidden','false');
}
closeModal.onclick = ()=> { modal.classList.remove('open'); modal.setAttribute('aria-hidden','true'); }
modal.addEventListener('click', (e)=> { if(e.target===modal){ modal.classList.remove('open'); modal.setAttribute('aria-hidden','true'); } });

/* BUSCA */
searchEl.addEventListener('input', (e)=> { state.query = e.target.value; renderGrid(); });

/* INIT */
function render(){ renderCategories(); renderGrid(); }
render();
yearEl.textContent = new Date().getFullYear();

/* CAPTURE (form) */
const captureForm = document.getElementById('captureForm');
const captureMsg = document.getElementById('captureMsg');
captureForm.addEventListener('submit', async (ev)=>{
  ev.preventDefault();
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  if(!email || !email.includes('@')){ captureMsg.textContent = 'Digite um e-mail válido.'; captureMsg.style.color = '#ff6b6b'; return; }
  captureMsg.textContent = 'Enviando...'; captureMsg.style.color = '#9aa4b2';

  // === OPÇÃO 1: enviar para webhook (descomente e troque a URL) ===
/*
  try {
    await fetch('https://getform.io/f/aroxlvgb', {
      method:'POST',
      headers:{'Content-Type':'application/json'},
      body: JSON.stringify({name, email, source: 'RocketMarket', datetime: new Date().toISOString()})
    });
    captureMsg.textContent = 'Obrigado! Verifique seu e-mail.';
    captureForm.reset();
    return;
  } catch(err){
    captureMsg.textContent = 'Erro no envio (webhook). Salvando localmente.';
  }
*/
  // === Fallback: salvar localmente (teste) ===
  const leads = JSON.parse(localStorage.getItem('rocket_leads')||'[]');
  leads.push({name, email, datetime: new Date().toISOString()});
  localStorage.setItem('rocket_leads', JSON.stringify(leads));
  captureMsg.textContent = 'Cadastro salvo (teste). Integre seu webhook para enviar automaticamente.';
  captureMsg.style.color = '#8ef27c';
  captureForm.reset();
});

/* THEME: detect + toggle */
const themeBtn = document.getElementById('themeBtn');
const root = document.documentElement;
function applyTheme(saved){
  if(saved === 'light') root.classList.add('light');
  else if(saved === 'dark') root.classList.remove('light');
  else {
    const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    if(prefersDark) root.classList.remove('light'); else root.classList.add('light');
  }
}
const savedTheme = localStorage.getItem('rocket_theme');
applyTheme(savedTheme);
themeBtn.addEventListener('click', ()=>{
  const isLight = root.classList.contains('light');
  if(isLight){ root.classList.remove('light'); localStorage.setItem('rocket_theme','dark'); }
  else { root.classList.add('light'); localStorage.setItem('rocket_theme','light'); }
});

/* REVEAL (IntersectionObserver) */
function initReveal(){
  const reveals = document.querySelectorAll('.reveal');
  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if(entry.isIntersecting){
        entry.target.style.transform = 'translateY(0)';
        entry.target.style.opacity = '1';
        entry.target.style.transition = 'opacity .6s ease, transform .6s ease';
        obs.unobserve(entry.target);
      }
    });
  }, {threshold:0.12});
  reveals.forEach(r => { r.style.transform='translateY(14px)'; r.style.opacity='0'; observer.observe(r); });
}

/* PRODUCT PAGE BUILDER (product.html must include this app.js) */
(function prepareProductPage(){
  const root = document.getElementById('product-root');
  if(!root) return;
  const params = new URLSearchParams(location.search);
  const id = Number(params.get('id'));
  const p = PRODUCTS.find(x=>x.id===id);
  if(!p){ root.innerHTML = '<p>Produto não encontrado.</p>'; return; }
  root.innerHTML = `
    <div class="product-page">
      <div class="product-left">
        <div class="thumb" style="background-image:url(${p.thumb});height:340px;border-radius:10px;background-size:cover"></div>
      </div>
      <div class="product-right">
        <h1>${p.title}</h1>
        <div class="price">${p.price}</div>
        <p class="muted">${p.desc}</p>
        <div style="margin-top:12px;display:flex;gap:8px">
          <a class="btn accent" href="${p.affiliate}" target="_blank" rel="noopener">Comprar Agora</a>
          <button class="btn" onclick="window.history.back()">Voltar</button>
        </div>
      </div>
    </div>
  `;
})();

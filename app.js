/* ========== DADOS INICIAIS - substitua affiliate pelos links da Kiwify ========== */
const PRODUCTS = [
  /* ===== TEMPLATES ===== */
  {id:1,title:'E-book Alimento Saudável',category:'Saúde',price:'R$19,90',desc:'Descubra como transformar sua alimentação com dicas práticas, receitas nutritivas e escolhas saudáveis para o dia a dia.',thumb:'https://i.postimg.cc/3xSqMn3C/Alimentacao-saudavel.png',affiliate:'https://pay.kiwify.com.br/mbVmaUR'},
  {id:2,title:'Bem-Estar Feminino',category:'Saúde',price:'R$19,90',desc:'Guia completo para o bem-estar da mulher: cuidados com corpo, mente e emoções para uma vida equilibrada e saudável.',thumb:'https://i.postimg.cc/bJQLvTfW/bemestar-feminino.png',affiliate:'https://pay.kiwify.com.br/nOhholR'},
  {id:3,title:'Estilo de vida saudável e minimalista',category:'Saúde',price:'R$19,90',desc:'Aprenda a viver de forma simples e saudável, combinando hábitos equilibrados, organização e bem-estar no dia a dia.',thumb:'https://i.postimg.cc/sX99zg57/estilo-de-vida.png',affiliate:'https://pay.kiwify.com.br/eODiYxy'},
  {id:4,title:'Fitness e performance',category:'Saúde',price:'R$19,90',desc:'Aprenda estratégias de treino, nutrição e hábitos para melhorar sua performance física e alcançar resultados reais.',thumb:'https://i.postimg.cc/KjjKWGf1/fitness.png',affiliate:'https://pay.kiwify.com.br/Yz8SXdc'},
  {id:5,title:'Longevidade e saúde preventiva',category:'Saúde',price:'R$19,90',desc:'Descubra hábitos, dicas e estratégias para viver mais e melhor, cuidando da saúde antes que os problemas apareçam.',thumb:'https://i.postimg.cc/1zy3TR5Q/longividade.png',affiliate:'https://pay.kiwify.com.br/7LADysl'},
  {id:6,title:'Nutrição para públicos específicos',category:'Saúde',price:'R$19,90',desc:'Guia completo de nutrição adaptada a diferentes necessidades, oferecendo dicas e planos para cada público de forma personalizada.',thumb:'https://i.postimg.cc/Xv2BkBcV/nutricao.png',affiliate:'https://pay.kiwify.com.br/8gDvM7e'},
  {id:7,title:'Saúde mental e emocional',category:'Saúde',price:'R$19,90',desc:'Descubra técnicas e hábitos para cuidar da mente, equilibrar emoções e viver de forma mais plena e saudável.',thumb:'https://i.postimg.cc/1tnX0C3G/Gemini-Generated-Image-xlee36xlee36xlee.png',affiliate:'https://pay.kiwify.com.br/pb30zMU'},
  {id:8,title:'Saúde natural e terapias',category:'Saúde',price:'R$19,90',desc:'Explore métodos naturais e terapias alternativas para melhorar a saúde, equilibrar corpo e mente de forma segura e eficaz.',thumb:'https://i.postimg.cc/B6KZPjmM/saudenatural.png',affiliate:'https://pay.kiwify.com.br/A8xLgy6'},
  {id:9,title:'Pare de Fumar ainda esse Mês',category:'Saúde',price:'R$19,90',desc:'Este e-book foi feito especialmente para você! Em Como Parar de Fumar Ainda Este Mês você vai descobrir estratégias práticas, simples e comprovadas para abandonar o cigarro de forma definitiva — sem sofrimento e sem precisar de medicamentos caros.',thumb:'https://i.postimg.cc/xCvDSMx0/paradefumar.png',affiliate:'https://pay.kiwify.com.br/nRam2vz'},
  {id:10,title:'120 Receitas Caseiras gerais',category:'Saúde',price:'R$19,90',desc:'O e-book 120 Receitas Caseiras de Saúde Gerais traz soluções naturais e eficazes para fortalecer a imunidade, aliviar dores, melhorar o sono e cuidar do corpo com ingredientes simples do dia a dia. Prático, completo e fácil de usar — seu guia natural de bem-estar!',thumb:'https://i.postimg.cc/3x4qT2Nm/120receitas.png',affiliate:'https://pay.kiwify.com.br/ybE9ISE'},
  {id:11,title:'Emagreça em poucos dias',category:'Saúde',price:'R$19,90',desc:'Aqui você vai descobrir estratégias simples para desinchar, acelerar o metabolismo, aumentar energia e controlar a mente. Transforme seu corpo e sua rotina com passos que realmente funcionam!',thumb:'https://i.postimg.cc/TwC0mPhw/emagrecimento.png',affiliate:'https://pay.kiwify.com.br/mUh5XPG'},

  /* ===== PETS ===== */

  {id:12,title:'Guia para Pets',category:'Pets',price:'R$19,90',desc:'Guia completo para cuidar de cães e gatos: alimentação, higiene, exercícios, saúde e bem-estar. Dicas práticas para pets felizes e saudáveis!',thumb:'https://i.postimg.cc/7PGcjfYf/Capa.png',affiliate:'https://pay.kiwify.com.br/uFgS5TP'},

    /* ===== Receitas ===== */

    {id:13,title:'Sobremesas Rápida',category:'Receitas',price:'R$9,90',desc:'Sobremesas rápidas, práticas e deliciosas. Receitas simples para adoçar seu dia em poucos minutos.',thumb:'https://i.postimg.cc/YSw414nD/Chat-GPT-Image-7-de-dez-de-2025-01-16-49.png',affiliate:'https://pay.kiwify.com.br/diRUCfT'},

    /* ===== Outros ===== */

    {id:14,title:'Como ganhar dinheiro na internet do zero',category:'Outros',price:'R$47,00',desc:'Aprenda estratégias simples e práticas para mudar sua mente, eliminar hábitos ruins e criar disciplina. Um guia rápido para transformar sua rotina e evoluir todos os dias.',thumb:'https://i.postimg.cc/FHVC4SLG/livro.png',affiliate:'https://pay.kiwify.com.br/6UyPJ0n'},
    {id:14,title:'Pacote RocketMarketDigital',category:'Outros',price:'R$49,90',desc:'(PROMOÇÃO FIM DE ANO) Tenha acesso vitalício de todos os produtos e sistemas faz lucrar no automático de até 100 clientes por dia.',thumb:'https://i.postimg.cc/JzgJQw5G/marca2.png',affiliate:'https://pay.kiwify.com.br/iic9l8i'},
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

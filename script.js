const style = document.createElement('style');
style.textContent = `.hero{min-height:calc(100vh - 10px);padding:108px 0 48px}.hero-visual>img{height:min(430px,52vh)}.hero h1{font-size:clamp(2.35rem,5vw,4rem)}.hero .lead{font-size:1.05rem}.context-specific{display:grid;grid-template-columns:1fr 1fr;gap:18px;margin:0 0 58px}.context-specific article{border:1px solid #dfe6ee;border-radius:6px;padding:22px;background:#fff}.context-specific article:nth-child(3){grid-column:1/-1;background:#0a2540;color:#fff}.context-specific h3{margin-bottom:8px}.context-specific p{color:#667587;font-size:.92rem;margin:0}.context-specific article:nth-child(3) p{color:#b9c8d8}.specific-kicker{font-size:.72rem;letter-spacing:.18em;font-weight:700;color:#1e5fa8;margin:0 0 18px}.proof-strip{display:grid;grid-template-columns:repeat(4,1fr);gap:1px;background:#dfe6ee;border:1px solid #dfe6ee;margin:0 0 70px}.proof-strip article{background:#fff;padding:22px}.proof-strip strong{display:block;font:800 2.1rem Manrope;color:#0a2540}.proof-strip span{display:block;color:#667587;font-size:.78rem;line-height:1.3;margin-top:6px}.deliverables{display:grid;grid-template-columns:repeat(2,1fr);gap:16px;margin-top:38px}.deliverables article{border:1px solid #dfe6ee;border-radius:6px;padding:22px;background:#fff}.deliverables h3{display:flex;gap:10px;align-items:center}.deliverables h3 span{display:grid;place-items:center;width:30px;height:30px;border-radius:50%;background:#dce9f5;color:#1e5fa8;font-size:.85rem}.deliverables p{color:#667587;font-size:.9rem;margin:0}.fit-grid{display:grid;grid-template-columns:1fr 1fr;gap:20px;margin-top:38px}.fit-card{padding:28px;border-radius:6px}.fit-card.good{background:#eaf3ee}.fit-card.bad{background:#f8eeee}.fit-card h3{margin-bottom:16px}.fit-card ul{margin:0;padding-left:20px;color:#526477}.fit-card li{margin:9px 0}.data-note{font-size:.76rem;color:#8492a2;margin-top:20px}.promise-grid article{position:relative;overflow:hidden;border-radius:6px;background:#fff;padding:25px 18px 18px;box-shadow:0 8px 24px #0a254012}.promise-grid article:after{content:'✓';position:absolute;right:18px;top:18px;width:30px;height:30px;border-radius:50%;display:grid;place-items:center;background:#f3d89f;color:#0a2540;font-weight:800}.promise-grid article:nth-child(2):after{background:#dce9f5;color:#1e5fa8}.promise-grid article:nth-child(3):after{background:#d8e9df;color:#247451}.icon{display:grid;place-items:center;width:44px;height:44px;border-radius:50%;font-size:1.65rem;color:#0a2540;background:#f3d89f;margin-bottom:20px;font-weight:700}.promise-grid article:nth-child(2) .icon{background:#dce9f5;color:#1e5fa8}.promise-grid article:nth-child(3) .icon{background:#d8e9df;color:#247451}.promise-grid article:before{content:'';display:block;height:120px;margin:-25px -18px 20px;background-size:cover;background-position:center;opacity:.95}.promise-grid article:nth-child(1):before{background-image:linear-gradient(0deg,#0a2540aa,#0a254000),url('context-diagnostico.png')}.promise-grid article:nth-child(2):before{background-image:linear-gradient(0deg,#0a2540aa,#0a254000),url('context-equipe.png')}.promise-grid article:nth-child(3):before{background-image:linear-gradient(0deg,#0a2540aa,#0a254000),url('hero-marcelo.png')}.testimonials blockquote{position:relative}.testimonials blockquote:before{content:'“';position:absolute;right:20px;top:4px;font:800 3.5rem Manrope;color:#dbe6f0}.steps article{position:relative}.steps article:before{content:'✓';display:grid;place-items:center;width:28px;height:28px;border-radius:50%;background:#f3d89f;color:#0a2540;font-weight:800;position:absolute;left:-14px;top:0}.context-image-note{display:grid;grid-template-columns:1fr 1fr;gap:18px;margin:0 0 38px}.context-image-note figure{margin:0;position:relative;overflow:hidden;border-radius:6px;background:#0a2540}.context-image-note img{display:block;width:100%;height:190px;object-fit:cover}.context-image-note figcaption{position:absolute;bottom:0;left:0;right:0;padding:30px 14px 12px;color:#fff;font-size:.78rem;font-weight:700;background:linear-gradient(transparent,#0a2540)}@media(max-width:800px){.hero{min-height:auto;padding:105px 0 60px}.hero-visual>img{height:420px}.context-specific,.context-image-note,.deliverables,.fit-grid{grid-template-columns:1fr}.context-specific article:nth-child(3){grid-column:auto}.promise-grid article:before{height:150px}.proof-strip{grid-template-columns:1fr 1fr}}`;
document.head.appendChild(style);
const heading = document.querySelector('.promise h2');
if (heading) { const note = document.createElement('div'); note.className = 'context-image-note'; note.innerHTML = '<figure><img src="context-diagnostico.png" alt="Dono de indústria analisando resultados com um consultor" loading="lazy"><figcaption>Decisão baseada no que acontece no seu negócio.</figcaption></figure><figure><img src="context-equipe.png" alt="Equipe comercial alinhando metas em uma empresa tradicional" loading="lazy"><figcaption>Time alinhado para executar o próximo passo.</figcaption></figure>'; heading.after(note); }
const processHeading = document.querySelector('.process h2');
if (processHeading) {
  const specifics = document.createElement('div');
  specifics.className = 'context-specific';
  specifics.innerHTML = '<article><div class="specific-kicker">01 · ONDE ESTÁ O GARGALO</div><h3>Comercial e vendas</h3><p>Oferta, abordagem, conversão, rotina do time e previsibilidade da receita.</p></article><article><div class="specific-kicker">02 · ONDE A MARGEM SOME</div><h3>Preço e operação</h3><p>Mix de produtos, descontos, custos invisíveis e decisões que pressionam o caixa.</p></article><article><div class="specific-kicker" style="color:#e8a73c">03 · O QUE VOCÊ LEVA</div><h3>Uma prioridade clara para os próximos 90 dias</h3><p>Você sai com um mapa objetivo: o que atacar primeiro, o que parar e onde acompanhar resultado.</p></article>';
  processHeading.after(specifics);
}
const proof = document.querySelector('.proof .container');
if (proof) {
  const strip = document.createElement('div');
  strip.className = 'proof-strip';
  strip.innerHTML = '<article><strong>+25</strong><span>empresas destravadas</span></article><article><strong>+20</strong><span>anos de experiência em empresas tradicionais</span></article><article><strong>90</strong><span>dias para organizar prioridades e execução</span></article><article><strong>30 min</strong><span>para identificar o próximo gargalo</span></article>';
  proof.insertBefore(strip, proof.querySelector('.testimonials'));
  const note = document.createElement('p');
  note.className = 'data-note';
  note.textContent = 'Os indicadores acima são dados do posicionamento. Resultados de clientes devem entrar com autorização e fonte verificável.';
  strip.after(note);
}
const authority = document.querySelector('.authority .authority-grid');
if (authority) {
  const deliverables = document.createElement('div');
  deliverables.className = 'deliverables';
  deliverables.innerHTML = '<article><h3><span>01</span>Leitura do cenário</h3><p>Onde a receita trava, quais sinais importam e o que não merece mais energia.</p></article><article><h3><span>02</span>Mapa de margem</h3><p>Quais decisões de preço, mix, custo e desconto pressionam o resultado.</p></article><article><h3><span>03</span>Prioridade comercial</h3><p>Qual ajuste vem primeiro para o time vender melhor e com menos improviso.</p></article><article><h3><span>04</span>Próximo passo</h3><p>Uma recomendação objetiva: o que fazer, em que ordem e como acompanhar.</p></article>';
  authority.querySelector('.bio').after(deliverables);
}
const faq = document.querySelector('.faq .faq-grid');
if (faq) {
  const fit = document.createElement('div');
  fit.className = 'fit-grid';
  fit.innerHTML = '<div class="fit-card good"><h3>Faz sentido se você:</h3><ul><li>Tem operação real e vendas estagnadas.</li><li>Já tentou ações isoladas sem consistência.</li><li>Quer decidir com números, não com opinião.</li></ul></div><div class="fit-card bad"><h3>Não é para você se:</h3><ul><li>Busca uma fórmula rápida ou promessa garantida.</li><li>Não pretende mudar rotina e decisões.</li><li>Ainda não tem negócio validado.</li></ul></div>';
  faq.appendChild(fit);
}
document.querySelector('#lead-form').addEventListener('submit', function (event) {
  event.preventDefault();
  const status = this.querySelector('.form-status');
  status.textContent = 'Recebi seus dados. Em breve, você receberá o link para escolher o melhor horário.';
  this.reset();
});

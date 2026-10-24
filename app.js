'use strict';
(function(){
  const toggle=document.getElementById('mobileToggle');
  const nav=document.getElementById('primaryNav');
  const links=[...nav.querySelectorAll('a[href^="#"]')];
  const top=document.querySelector('.go-top');
  const reduce=window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  function closeMenu(){nav.classList.remove('open');toggle.setAttribute('aria-expanded','false');toggle.setAttribute('aria-label','Buka menu navigasi')}
  toggle.addEventListener('click',()=>{const isOpen=nav.classList.toggle('open');toggle.setAttribute('aria-expanded',String(isOpen));toggle.setAttribute('aria-label',isOpen?'Tutup menu':'Buka menu navigasi')});
  links.forEach(a=>a.addEventListener('click',closeMenu));
  document.addEventListener('keydown',e=>{if(e.key==='Escape')closeMenu()});
  document.addEventListener('click',e=>{if(nav.classList.contains('open')&&!nav.contains(e.target)&&!toggle.contains(e.target))closeMenu()});
  const sections=['beranda','profil','potensi','kegiatan','galeri'].map(id=>document.getElementById(id));
  if('IntersectionObserver' in window){
    const spy=new IntersectionObserver(entries=>{let hits=entries.filter(x=>x.isIntersecting).sort((a,b)=>b.intersectionRatio-a.intersectionRatio);if(hits.length){const id=hits[0].target.id;links.forEach(a=>a.classList.toggle('active',a.hash==='#'+id))}},{rootMargin:'-22% 0px -62% 0px',threshold:[0,.1,.4,1]});sections.forEach(s=>spy.observe(s));
  }
  function updateScroll(){top.classList.toggle('visible',window.scrollY>450)}window.addEventListener('scroll',updateScroll,{passive:true});updateScroll();
  // Foto milik pemegang hak; pengelola dapat mengganti dengan screenshot/foto yang telah diizinkan.
  // Prioritaskan gambar lokal; jika tidak tersedia, muat foto arsip online dari Wakangka.
  document.querySelectorAll('img[data-photo-file]').forEach(img=>{
    const local='images/'+img.dataset.photoFile;
    const remote=img.dataset.remote;
    let phase=0;
    img.addEventListener('error',()=>{if(phase===0){phase=1;img.src=remote;}else{img.closest('[data-photo]')?.classList.add('no-photo');img.removeAttribute('src');}});
    img.addEventListener('load',()=>img.closest('[data-photo]')?.classList.remove('no-photo'));
    img.src=local;
  });
  // Menautkan langsung menu Layanan ke folder Google Drive publik yang telah disetel.
  // Tanpa link resmi, tombol tidak diarahkan ke Drive pribadi milik pengunjung.
  const url = String(window.WAKANGKA_CONFIG?.GOOGLE_DRIVE_LAYANAN_URL || '').trim();
  const isValidDriveUrl = (() => {
    try {
      const parsed = new URL(url);
      return parsed.protocol === 'https:' &&
        ((parsed.hostname === 'drive.google.com' && /^(\/drive\/(?:u\/\d+\/)?folders\/|\/file\/d\/|\/open\?)/.test(parsed.pathname + parsed.search)) ||
         (parsed.hostname === 'docs.google.com' && /^\/(?:document|spreadsheets|presentation|forms)\/d\//.test(parsed.pathname)));
    } catch (_) { return false; }
  })();
  document.querySelectorAll('[data-drive-link]').forEach(link => {
    if (isValidDriveUrl) {
      link.href = url;
      link.target = '_blank';
      link.rel = 'noopener noreferrer';
      link.removeAttribute('aria-disabled');
    } else {
      link.removeAttribute('target');
      link.removeAttribute('rel');
      link.setAttribute('aria-disabled', 'true');
      link.title = 'Tautan Google Drive layanan belum tersedia';
      link.addEventListener('click', event => event.preventDefault());
    }
  });
  document.getElementById('year').textContent=new Date().getFullYear();
})();

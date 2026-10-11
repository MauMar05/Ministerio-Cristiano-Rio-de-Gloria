// Año actual en el pie de página (textContent: nunca inserta HTML)
document.getElementById('year').textContent = new Date().getFullYear();

// Sombra extra en la navegación al hacer scroll (clase CSS, sin estilos en línea)
const nav = document.querySelector('nav');
const onScroll = () => nav.classList.toggle('scrolled', window.scrollY > 40);
window.addEventListener('scroll', onScroll, { passive: true });
onScroll();

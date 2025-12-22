const splash = document.getElementById('splash');
const pageContent = document.getElementById('page-content');

function hideSplash() {
    splash.style.transform = 'translateY(-100%)';
    splash.style.opacity = '0';
    setTimeout(() => {
        splash.style.display = 'none';
        pageContent.style.display = 'block';
    }, 1000);
}

// Clic o scroll
splash.addEventListener('click', hideSplash);
window.addEventListener('scroll', hideSplash);

// Móvil: deslizar hacia arriba
let touchStartY = 0;
let touchEndY = 0;
splash.addEventListener('touchstart', (e) => { touchStartY = e.changedTouches[0].screenY; });
splash.addEventListener('touchend', (e) => {
    touchEndY = e.changedTouches[0].screenY;
    if (touchStartY - touchEndY > 50) hideSplash();
});

// REGISTRO CLIENTES
const form = document.getElementById('registerForm');
const status = document.getElementById('status');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    status.textContent = '¡Registro exitoso!';
    status.style.color = 'green';
    form.reset();
});
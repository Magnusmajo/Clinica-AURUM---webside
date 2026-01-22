// ===============================================================
// Funcionalidades de interacción y animaciones de la clínica
// Mantiene el comportamiento original pero añade mejoras, como
// cerrar el menú móvil al seleccionar una opción.
// ===============================================================

// Menú responsivo
const toggle = document.getElementById('menu-toggle');
const nav = document.getElementById('nav-menu');
toggle.addEventListener('click', () => {
    nav.classList.toggle('show');
});

// Cerrar el menú al hacer clic en un enlace (modo móvil)
document.querySelectorAll('#nav-menu a').forEach(link => {
    link.addEventListener('click', () => {
        if (nav.classList.contains('show')) {
            nav.classList.remove('show');
        }
    });
});

// Cambiar fondo del encabezado al hacer scroll
window.addEventListener('scroll', () => {
    const header = document.getElementById('header');
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// Observador de intersección para animaciones al hacer scroll
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }
    });
}, { threshold: 0.2 });

// Observar elementos con la clase .animate y otros que aparecen gradualmente
document.querySelectorAll('.animate, .benefit, .service, .member, .odontologia-card, .hero-content, form, .contact-map').forEach(el => {
    observer.observe(el);
});

// Carrusel automático de testimonios
const slider = document.getElementById('testimonial-slider');
const slides = slider ? slider.children : [];
let testimonialIndex = 0;
if (slides.length > 0) {
    setInterval(() => {
        slider.style.transform = `translateX(-${testimonialIndex * 100}%)`;
        testimonialIndex = (testimonialIndex + 1) % slides.length;
    }, 4000);
}

// Envío del formulario de contacto
const form = document.getElementById('contact-form');
if (form) {
    form.addEventListener('submit', e => {
        e.preventDefault();
        alert('Gracias por tu solicitud. Nos pondremos en contacto pronto.');
        form.reset();
    });
}

// Animación secuencial de beneficios al cargar
document.addEventListener('DOMContentLoaded', () => {
    const benefits = document.querySelectorAll('.benefit');
    benefits.forEach((benefit, index) => {
        setTimeout(() => {
            benefit.classList.add('show');
        }, index * 300);
    });
});

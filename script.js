// Menú responsivo
const toggle = document.getElementById('menu-toggle');
const nav = document.getElementById('nav-menu');
toggle.addEventListener('click', () => {
    nav.classList.toggle('show');
});

// Header color on scroll
window.addEventListener('scroll', () => {
    const header = document.getElementById('header');
    if(window.scrollY > 50) header.classList.add('scrolled');
    else header.classList.remove('scrolled');
});

// Animaciones scroll (fade-in)
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if(entry.isIntersecting){
            entry.target.classList.add('show');
        }
    });
}, { threshold: 0.2 });

document.querySelectorAll('.animate, .benefit, .service, .member, .hero-content').forEach(el => observer.observe(el));

// Slider automático testimonios
let slider = document.getElementById('testimonial-slider');
let slides = slider.children;
let index = 0;
setInterval(() => {
    slider.style.transform = `translateX(-${index*100}%)`;
    index = (index + 1) % slides.length;
}, 4000);

// Formulario contacto
const form = document.getElementById('contact-form');
form.addEventListener('submit', e => {
    e.preventDefault();
    alert('Gracias por tu solicitud. Nos pondremos en contacto pronto!');
    form.reset();
});
// Animación secuencial de beneficios
document.addEventListener('DOMContentLoaded', () => {
    const benefits = document.querySelectorAll('.benefit');
    
    benefits.forEach((benefit, index) => {
        setTimeout(() => {
            benefit.classList.add('show');
        }, index * 300); // 300ms de retraso entre cada tarjeta
    });
});

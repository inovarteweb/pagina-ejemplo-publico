gsap.registerPlugin(ScrollTrigger);

gsap.from('.about-content', {
    scrollTrigger: {
        trigger: '.about',
        start: 'top center'
    },
    y: 50,
    opacity: 0,
    duration: 1
});

gsap.from('.gallery-item', {
    scrollTrigger: {
        trigger: '.gallery',
        start: 'top center'
    },
    y: 50,
    opacity: 0,
    duration: 1,
    stagger: 0.2
});

gsap.from('.contact-form, .contact-info-item', {
    scrollTrigger: {
        trigger: '.contact',
        start: 'top center'
    },
    y: 50,
    opacity: 0,
    duration: 1,
    stagger: 0.2
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    // Aquí iría la lógica para procesar el formulario
    alert('¡Gracias por tu mensaje! Nos pondremos en contacto contigo pronto.');
    this.reset();
});

// Carga del mapa con la ubicación correcta
setTimeout(() => {
    document.getElementById('map').innerHTML = '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3827.4760989456384!2d-71.4558893!3d-16.4079083!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x91424a9a1636afe5%3A0x38865c4b7b21abb0!2sCharacato%2004012%2C%20Peru!5e0!3m2!1sen!2sus!4v1623344918097!5m2!1sen!2sus" width="100%" height="100%" style="border:0;" allowfullscreen="" loading="lazy"></iframe>';
}, 1000);
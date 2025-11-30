/**
 * Lógica para el carrusel de imágenes.
 * Muestra las diapositivas una a una y permite navegar entre ellas.
 */

// Estado: índice de la diapositiva que se está mostrando actualmente
let currentSlideIndex = 0;
let slides = []; // Almacenará todos los elementos con la clase 'slide'

// Se ejecuta cuando el HTML está completamente cargado
document.addEventListener('DOMContentLoaded', function() {
    // 1. Carga los elementos del carrusel una vez
    slides = document.querySelectorAll('.carousel-content .slide');

    // 2. Si hay diapositivas, arranca mostrando la primera
    if (slides.length > 0) {
        showSlide(currentSlideIndex);
    }
});

/**
 * Función principal: Oculta todas las diapositivas y muestra solo la actual.
 * @param {number} n - El índice de la diapositiva a mostrar.
 */
function showSlide(n) {
    if (slides.length === 0) return;

    if (n >= slides.length) {
        currentSlideIndex = 0;
    } else if (n < 0) {
        currentSlideIndex = slides.length - 1;
    } else {
        currentSlideIndex = n;
    }

    const carouselContent = document.querySelector('.carousel-content');
    carouselContent.style.transform = `translateX(-${currentSlideIndex * 100}%)`;
}


/**
 * Función pública: Es llamada por los botones del HTML (onclick) para navegar.
 * @param {number} direction - La dirección del movimiento (+1 para avanzar, -1 para retroceder).
 */
function moveSlide(direction) {
    showSlide(currentSlideIndex + direction);
}

// Hace que la función 'moveSlide' esté disponible globalmente para el HTML
window.moveSlide = moveSlide;
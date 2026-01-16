// Mobile menu toggle
function toggleMenu() {
    const navMenu = document.querySelector('.nav-menu');
    navMenu.classList.toggle('active');
}

// Carousel functionality
let currentSlide = 0;
const slides = document.querySelectorAll('.slide');

function showSlide(n) {
    slides.forEach(slide => slide.classList.remove('active'));
    currentSlide = (n + slides.length) % slides.length;
    if (slides[currentSlide]) {
        slides[currentSlide].classList.add('active');
    }
}

function changeSlide(direction) {
    showSlide(currentSlide + direction);
}

// Auto-advance carousel
function autoSlide() {
    changeSlide(1);
}

// Initialize carousel if slides exist
if (slides.length > 0) {
    setInterval(autoSlide, 5000);
}

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', () => {
        document.querySelector('.nav-menu').classList.remove('active');
    });
});

// Close mobile menu when clicking outside
document.addEventListener('click', (e) => {
    const navMenu = document.querySelector('.nav-menu');
    const hamburger = document.querySelector('.hamburger');
    
    if (!navMenu.contains(e.target) && !hamburger.contains(e.target)) {
        navMenu.classList.remove('active');
    }
});

// Script for Image section
// Light box script
// Lightbox Functionality
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const closeBtn = document.querySelector('.close');
const galleryImages = document.querySelectorAll('.gallery-grid img');

galleryImages.forEach(img => {
    img.addEventListener('click', () => {
        lightbox.style.display = 'block';
        lightboxImg.src = img.src;
        lightboxImg.alt = img.alt;
    });
});

closeBtn.addEventListener('click', () => {
    lightbox.style.display = 'none';
});

lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) {
        lightbox.style.display = 'none';
    }
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Add loading animation for images
document.addEventListener('DOMContentLoaded', function() {
    const images = document.querySelectorAll('img');
    images.forEach(img => {
        img.addEventListener('load', function() {
            this.style.opacity = '1';
        });
    });
});
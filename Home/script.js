
// Variables for menu icon, navigation links, navbar, and hero section
const menuIcon = document.getElementById('menu-icon');
const navLinks = document.getElementById('nav-links');
const navbar = document.querySelector('.navbar');
const heroSection = document.querySelector('.hero-section');

menuIcon.addEventListener('click', () => {
    navbar.classList.toggle('active');
    navLinks.classList.toggle('active');

    setTimeout(() => {
        heroSection.classList.toggle('active');
    }, 200);
});


// Array of images with their sources and titles for the slider

const images = [
    {
        src: 'img1.png',
        title: 'Cappuccino'
    },
    {
        src: 'img2.png',
        title: 'Latte'
    },
    {
        src: 'img3.png',
        title: 'Mocha'
    },
    {
        src: 'img4.png',
        title: 'Espresso'
    }
    ];

let currentIndex = 0;
const sliderContainer = document.querySelector('.slider-container');
const imageTitle = document.getElementById('image-title');
const leftArrow = document.getElementById('left-arrow');
const rightArrow = document.getElementById('right-arrow');

function updateSlider() {
    sliderContainer.style.transform = `translateX(-${currentIndex * 100}%)`; 
    imageTitle.textContent = images[currentIndex].title;
}

rightArrow.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % images.length;
    updateSlider();
});


leftArrow.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    updateSlider();
});




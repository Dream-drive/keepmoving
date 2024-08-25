

// Handle slide show functionality
let currentSlide = 0;

function showSlide(index) {
    const slides = document.querySelectorAll('.slide');
    if (slides.length === 0) {
        console.error("No slides found.");
        return;
    }
    
    if (index >= slides.length) {
        currentSlide = 0;
    } else if (index < 0) {
        currentSlide = slides.length - 1;
    } else {
        currentSlide = index;
    }
    
    const slider = document.querySelector('.slider');
    if (slider) {
        slider.style.transform = `translateX(-${currentSlide * 100}%)`;
    } else {
        console.error("Slider element not found.");
    }
}

function changeSlide(step) {
    showSlide(currentSlide + step);
}

// Initialize the slider
showSlide(currentSlide);

// Function to open a tab with an image
function opentab(imageId) {
    const tab = document.getElementById("tab");
    const tabImg = document.getElementById("tabImg");

    if (tab && tabImg) {
        tab.style.display = "block";
        tabImg.src = document.getElementById(imageId).src;
    } else {
        console.error("Tab or tab image element not found.");
    }
}

// Handle hamburger menu toggle
const hamburger = document.querySelector('.hamburger');
const overlay = document.querySelector('.overlay');
const body = document.body;

if (hamburger && overlay) {
    hamburger.addEventListener('click', () => {
        overlay.classList.toggle('active');
        body.classList.toggle('no-scroll');
        hamburger.classList.toggle('active'); // To handle animation
    });

    // Close the menu when clicking outside the overlay
    overlay.addEventListener('click', (e) => {
        if (e.target === overlay) {
            overlay.classList.remove('active');
            body.classList.remove('no-scroll');
        }
    });
} else {
    console.error("Hamburger or overlay element not found.");
}



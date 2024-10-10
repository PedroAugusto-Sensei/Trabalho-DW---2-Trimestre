let slideIndex = 0;
let slideInterval;

// Function to show the slides
function showSlides(n) {
    let slides = document.querySelectorAll(".slide");

    if (n >= slides.length) {
        slideIndex = 0;
    }

    if (n < 0) {
        slideIndex = slides.length - 1;
    }

    slides.forEach((slide, index) => {
        slide.style.display = (index === slideIndex) ? "block" : "none";
    });
}

// Function to move the slides
function moveSlide(n) {
    showSlides(slideIndex += n);
    resetInterval(); // Reset the timer on manual navigation
}

// Function to reset the interval for auto-sliding
function resetInterval() {
    clearInterval(slideInterval); // Clear existing interval
    slideInterval = setInterval(() => {
        moveSlide(1); // Move to the next slide automatically
    }, 3000); // Change 3000 to your desired time in milliseconds
}

// Start the automatic slide show
resetInterval();

// Carousel functionality for home page
document.addEventListener('DOMContentLoaded', function() {
    let currentSlide = 0;
    const slides = document.querySelectorAll('.Ransomware .list .item');
    const thumbnails = document.querySelectorAll('.thumbnail .item');
    const totalSlides = slides.length;
    
    // Auto-advance timer
    let slideTimer = setInterval(nextSlide, 5000);

    // Next slide function
    function nextSlide() {
        currentSlide = (currentSlide + 1) % totalSlides;
        updateSlider();
    }

    // Previous slide function
    function prevSlide() {
        currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
        updateSlider();
    }

    // Update slider display
    function updateSlider() {
        // Reset timer
        clearInterval(slideTimer);
        slideTimer = setInterval(nextSlide, 5000);

        // Update slides
        slides.forEach((slide, index) => {
            if (index === currentSlide) {
                slide.style.opacity = '1';
                slide.style.zIndex = '1';
            } else {
                slide.style.opacity = '0';
                slide.style.zIndex = '0';
            }
        });

        // Update thumbnails
        thumbnails.forEach((thumb, index) => {
            if (index === currentSlide) {
                thumb.classList.add('active');
            } else {
                thumb.classList.remove('active');
            }
        });

        // Animate content
        const currentContent = slides[currentSlide].querySelector('.content');
        currentContent.classList.add('animate');
        setTimeout(() => currentContent.classList.remove('animate'), 1000);
    }

    // Add click handlers for thumbnails
    thumbnails.forEach((thumb, index) => {
        thumb.addEventListener('click', () => {
            currentSlide = index;
            updateSlider();
        });
    });

    // Add keyboard navigation
    document.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowRight') nextSlide();
        if (e.key === 'ArrowLeft') prevSlide();
    });
}); 
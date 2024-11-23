// IMAGE SLIDER SYSTEM
document.addEventListener('DOMContentLoaded', function() {
    const container = document.querySelector('.teacherCards');
    const cards = document.querySelectorAll('.teacherCard');
    const prevBtn = document.querySelector('.prev');
    const nextBtn = document.querySelector('.next');
    let currentIndex = 1;

    function updateSlider() {
        const cardWidth = cards[0].offsetWidth + 20;
        container.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
        
        prevBtn.classList.toggle('visible', currentIndex > 0);
        nextBtn.classList.toggle('visible', currentIndex < cards.length - 3);
    }

    prevBtn.addEventListener('click', () => {
        if (currentIndex > 0) {
            currentIndex--;
            updateSlider();
        }
    });

    nextBtn.addEventListener('click', () => {
        if (currentIndex < cards.length - 3) {
            currentIndex++;
            updateSlider();
        }
    });

    updateSlider();

    window.addEventListener('resize', updateSlider);
});

// FAQ SYSTEM
document.querySelectorAll('.faqItem').forEach(item => {
    item.addEventListener('click', (e) => {
        e.preventDefault();
        document.querySelectorAll('.faqItem').forEach(otherItem => {
            if (otherItem !== item && otherItem.classList.contains('active')) {
                otherItem.classList.remove('active');
            }
        });
        item.classList.toggle('active');
    });
});
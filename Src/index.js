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

// PLAN PRICES CHANGE
function changePeriod(period) {
    const basePrice = 40;
    let price, periodText, discount;
    
    // Remove active class from all buttons
    document.querySelectorAll('.payment-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    
    // Add active class to clicked button
    event.target.classList.add('active');
    
    if (period === 'month') {
        price = basePrice;
        periodText = '/mėn';
        discount = '';
    } else if (period === 'halfYear') {
        price = Math.round(basePrice * 6 * 0.9 / 6);
        periodText = '/mėn';
        discount = 'Sutaupote 10%';
    } else if (period === 'year') {
        price = Math.round(basePrice * 12 * 0.8 / 12);
        periodText = '/mėn';
        discount = 'Sutaupote 20%';
    }
    
    // Update prices and periods for all plans
    ['basic', 'medium', 'advanced'].forEach(plan => {
        document.getElementById(`${plan}-price`).textContent = price + '€';
        document.getElementById(`${plan}-period`).textContent = periodText;
        document.getElementById(`${plan}-discount`).textContent = discount;
    });
}
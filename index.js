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

// PLAN PRICES SYSTEM
function changePeriod(period) {
    const basePrices = {
        basic: 25,
        medium: 40,
        advanced: 60
    };
    let periodText, discount;
    
    document.querySelectorAll('.payment-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    
    event.target.classList.add('active');
    
    if (period === 'month') {
        periodText = '/month';
        discount = '';
    } else if (period === 'halfYear') {
        periodText = '/month';
        discount = 'Save 10%';
    } else if (period === 'year') {
        periodText = '/month';
        discount = 'Save 20%';
    }
    
    ['basic', 'medium', 'advanced'].forEach(plan => {
        let price = basePrices[plan];
        if (period === 'halfYear') {
            price = Math.round(price * 6 * 0.9 / 6);
        } else if (period === 'year') {
            price = Math.round(price * 12 * 0.8 / 12);
        }
        document.getElementById(`${plan}-price`).textContent = price + '€';
        document.getElementById(`${plan}-period`).textContent = periodText;
        document.getElementById(`${plan}-discount`).textContent = discount;
    });
}
// STATISTICS ANIMATION 
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const numbers = document.querySelectorAll('.successNum');
            numbers.forEach(num => {
                const target = parseFloat(num.getAttribute('dataTarget'));
                const duration = 1500;
                const steps = 50;
                const increment = target / steps;
                let current = 0;
                const timer = setInterval(() => {
                    current += increment;
                    if (current >= target) {
                        num.textContent = target + (num.getAttribute('dataTarget') === '4.9' ? '' : '+');
                        clearInterval(timer);
                    } else {
                        num.textContent = current.toFixed(1) + (num.getAttribute('dataTarget') === '4.9' ? '' : '+');
                    }
                }, duration / steps);
            });
            observer.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

observer.observe(document.querySelector('#successSection'));

// Burger menu
const burgerMenu = document.querySelector('.burgerMenu');
const navLinks = document.querySelector('.navLinks');

burgerMenu.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});
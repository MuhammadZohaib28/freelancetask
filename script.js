document.addEventListener("DOMContentLoaded", function() {
    const sliderRow1 = document.getElementById('slider-row-1');
    const sliderRow2 = document.getElementById('slider-row-2');

    // Clone the cards to create a seamless loop
    if (sliderRow1 && sliderRow2) {
        const originalContent1 = sliderRow1.innerHTML;
        const originalContent2 = sliderRow2.innerHTML;
        
        // Duplicate content multiple times for seamless scrolling
        sliderRow1.innerHTML = originalContent1 + originalContent1 + originalContent1;
        sliderRow2.innerHTML = originalContent2 + originalContent2 + originalContent2;
    }
});

// JavaScript for Basit Technologies website

// Mobile menu toggle
document.addEventListener('DOMContentLoaded', function() {
    // Add any interactive functionality here
    console.log('Basit Technologies website loaded');
});

// Smooth scrolling for anchor links
function smoothScroll(target) {
    const element = document.querySelector(target);
    if (element) {
        window.scrollTo({
            top: element.offsetTop - 100,
            behavior: 'smooth'
        });
    }
}

// Form validation for quote requests
function validateQuoteForm(form) {
    const inputs = form.querySelectorAll('input[required], textarea[required]');
    let isValid = true;
    
    inputs.forEach(input => {
        if (!input.value.trim()) {
            input.classList.add('is-invalid');
            isValid = false;
        } else {
            input.classList.remove('is-invalid');
        }
    });
    
    return isValid;
}

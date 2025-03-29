// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Form submission
const contactForm = document.getElementById('contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const formData = new FormData(this);
        
        // Here you would typically send the form data to your server
        // For demonstration, we'll just show an alert
        alert('Thank you for your message! We will contact you soon.');
        this.reset();
    });
}

// Mobile menu toggle (for smaller screens)
const mobileMenuToggle = document.createElement('div');
mobileMenuToggle.className = 'mobile-menu-toggle';
mobileMenuToggle.innerHTML = '<i class="fas fa-bars"></i>';
document.querySelector('header .container').appendChild(mobileMenuToggle);

mobileMenuToggle.addEventListener('click', function() {
    const nav = document.querySelector('nav');
    nav.classList.toggle('active');
});

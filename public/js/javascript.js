const burgerMenu = document.querySelector('.burger-menu');
const navMenu = document.querySelector('.nav-menu');

// Toggle the nav menu and burger menu
burgerMenu.addEventListener('click', () => {
    navMenu.classList.toggle('active'); // Toggle nav menu visibility
    burgerMenu.classList.toggle('active'); // Optionally toggle styling for active state
});

// Smooth scrolling for in-page anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        document.getElementById(targetId)?.scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Smooth reset to top when clicking on logo/title button
document.getElementById('logo-title-button').addEventListener('click', (e) => {
    e.preventDefault();
    if (window.location.pathname === '/') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
        window.location.href = '/';
    }
});
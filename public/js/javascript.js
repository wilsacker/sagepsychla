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
        // Scroll to top if already on home page
        window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
        // Navigate to home page if not on home page
        window.location.href = '/';
    }
});
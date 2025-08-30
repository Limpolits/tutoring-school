// Smooth scroll (optional for single-page links)
document.querySelectorAll('.toolbar a').forEach(link => {
    link.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        if(href.startsWith('#')) {
            e.preventDefault();
            const target = document.querySelector(href);
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});
document.addEventListener('DOMContentLoaded', function() {
    // Capture all anchor clicks
    document.querySelectorAll('a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            console.log('Clicked element:', this);
        });
    });

    // Add some interactivity/animation
    document.querySelectorAll('.read-more').forEach(link => {
        link.addEventListener('mouseover', function() {
            this.style.textDecoration = 'underline';
        });
        link.addEventListener('mouseout', function() {
            this.style.textDecoration = 'none';
        });
    });
});
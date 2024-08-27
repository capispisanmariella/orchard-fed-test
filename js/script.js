document.addEventListener('DOMContentLoaded', function() {
    // Capture all anchor clicks
    document.querySelectorAll('a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            console.log('Clicked element:', this);
        });
    });

    // Modal functionality
    const modal = document.getElementById('modal');
    const modalImg = document.getElementById('modal-img');
    const closeBtn = document.querySelector('.close');

    document.querySelectorAll('.modal-image').forEach(img => {
        img.addEventListener('click', function() {
            modal.style.display = 'flex';
            modalImg.src = this.src;
        });
    });
    
    closeBtn.onclick = function() {
        modal.style.display = 'none';
    }
    
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    }

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
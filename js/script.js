import '../scss/styles.scss';
import img1 from '../assets/component-01/Image-01.jpg';
import img2 from '../assets/component-01/Image-02.jpg';
import img3 from '../assets/component-01/Image-03.jpg';
import img4 from '../assets/component-02/Image-01.jpg';
import img5 from '../assets/component-02/Image-02.jpg';
import img6 from '../assets/component-02/Image-03.jpg';

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

    document.querySelectorAll('.modal-image').forEach((img, index) => {
        img.src = [img1, img2, img3][index];
        img.addEventListener('click', function() {
            modal.style.display = 'flex';
            modalImg.src = this.src;
        });
    });

    document.querySelectorAll('.aeg-img').forEach((img, index) => {
        img.src = [img4, img5, img6][index];
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
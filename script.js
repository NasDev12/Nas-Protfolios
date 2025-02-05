// Intersection Observer for fade-in animations
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, {
    threshold: 0.1
});

document.querySelectorAll('section').forEach(section => {
    observer.observe(section);
});

// Handle review form submission
document.getElementById('reviewForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const name = document.getElementById('name').value;
    const review = document.getElementById('review').value;
    
    // Create new review card
    const reviewsGrid = document.querySelector('.reviews .grid');
    const newReview = document.createElement('div');
    newReview.className = 'card animate-fade-up';
    newReview.innerHTML = `
        <p>"${review}"</p>
        <p class="author">- ${name}</p>
    `;
    
    // Add new review to the grid
    reviewsGrid.appendChild(newReview);
    
    // Reset form
    this.reset();
    
    // Show success message
    const submitBtn = document.querySelector('.submit-btn');
    const originalText = submitBtn.textContent;
    submitBtn.textContent = 'Review Added!';
    submitBtn.style.background = '#10B981';
    
    setTimeout(() => {
        submitBtn.textContent = originalText;
        submitBtn.style.background = '';
    }, 2000);
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
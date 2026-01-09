// Mobile menu toggle
const mobileMenu = document.getElementById('mobile-menu');
const navLinks = document.querySelector('.nav-links');

mobileMenu.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Contact form submission
document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault(); // stop page reload

    // Collect form data
    const contactData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        message: document.getElementById('message').value
    };

    // Send data to backend API
    fetch('https://portfolio-backend-9nb7.onrender.com/api/contact', {
   // <-- backend URL
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(contactData)
    })
    .then(res => res.json())
    .then(data => {
        if(data.success){
            alert('Thank you for reaching out! I will get back to you soon.');
            this.reset(); // clear form
        } else {
            alert('Something went wrong. Please try again.');
        }
    })
    .catch(err => {
        console.error('Error:', err);
        alert('Could not send message. Please try again later.');
    });
});

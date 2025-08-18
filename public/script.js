// Initialize AOS (Animate On Scroll)
AOS.init({
    duration: 1000, // values from 0 to 3000, with step 50ms
    once: true,     // whether animation should happen only once - while scrolling down
});

// Simple contact form submission handler
const contactForm = document.getElementById('contact-form');

if (contactForm) {
  contactForm.addEventListener('submit', function(e) {
      // Prevent the default form submission
      e.preventDefault();

      // In a real application, you would send this data to a server.
      // For this demonstration, we'll just show an alert.
      alert('Thank you for your message! I will get back to you soon.');

      // Clear the form fields after submission
      contactForm.reset();
  });
}
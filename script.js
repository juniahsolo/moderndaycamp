document.addEventListener('DOMContentLoaded', function() {
  // Mobile Menu Toggle
  const mobileMenuBtn = document.createElement('button');
  mobileMenuBtn.className = 'mobile-menu-btn';
  mobileMenuBtn.innerHTML = '☰';
  document.querySelector('header').appendChild(mobileMenuBtn);
  
  const mobileMenu = document.createElement('div');
  mobileMenu.className = 'mobile-menu';
  const navLinks = document.querySelector('nav').cloneNode(true);
  mobileMenu.appendChild(navLinks);
  document.querySelector('header').appendChild(mobileMenu);
  
  mobileMenuBtn.addEventListener('click', function() {
    mobileMenu.classList.toggle('active');
  });
  
  // Smooth scrolling for all links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;
      
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 80,
          behavior: 'smooth'
        });
        
        // Close mobile menu if open
        mobileMenu.classList.remove('active');
      }
    });
  });
  
  // Scroll animations
  const sections = document.querySelectorAll('.section');
  
  function checkScroll() {
    sections.forEach(section => {
      const sectionTop = section.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;
      
      if (sectionTop < windowHeight - 100) {
        section.classList.add('visible');
      }
    });
    
    // Back to top button
    const backToTop = document.querySelector('.back-to-top');
    if (window.pageYOffset > 300) {
      backToTop.classList.add('visible');
    } else {
      backToTop.classList.remove('visible');
    }
  }
  
  // Initialize scroll animations
  sections.forEach(section => {
    section.classList.add('section');
  });
  
  window.addEventListener('scroll', checkScroll);
  window.addEventListener('load', checkScroll);
  
  // Back to top button
  const backToTopBtn = document.createElement('div');
  backToTopBtn.className = 'back-to-top';
  backToTopBtn.innerHTML = '↑';
  backToTopBtn.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
  document.body.appendChild(backToTopBtn);
  
  // Team card hover effects
  const teamCards = document.querySelectorAll('.team-card');
  teamCards.forEach(card => {
    card.addEventListener('mouseenter', () => {
      const image = card.querySelector('.team-image');
      image.style.transform = 'scale(1.05)';
    });
    
    card.addEventListener('mouseleave', () => {
      const image = card.querySelector('.team-image');
      image.style.transform = 'scale(1)';
    });
  });
  
  // Add contact form (optional)
  const contactForm = `
    <section id="contact" class="content-section section">
      <h2>Contact Us</h2>
      <form class="contact-form">
        <div class="form-group">
          <label for="name">Name</label>
          <input type="text" id="name" required>
        </div>
        <div class="form-group">
          <label for="email">Email</label>
          <input type="email" id="email" required>
        </div>
        <div class="form-group">
          <label for="message">Message</label>
          <textarea id="message" required></textarea>
        </div>
        <button type="submit" class="form-submit">Send Message</button>
      </form>
    </section>
  `;
  
  // Insert contact form before footer (or wherever appropriate)
  document.querySelector('.team-section').insertAdjacentHTML('afterend', contactForm);
  
  // Form validation
  const form = document.querySelector('.contact-form');
  if (form) {
    form.addEventListener('submit', function(e) {
      e.preventDefault();
      
      // Simple validation
      const name = document.getElementById('name').value;
      const email = document.getElementById('email').value;
      const message = document.getElementById('message').value;
      
      if (name && email && message) {
        alert('Thank you for your message! We will get back to you soon.');
        form.reset();
      } else {
        alert('Please fill in all fields.');
      }
    });
  }
});
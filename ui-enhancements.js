// Animation and UI Enhancement Functions
document.addEventListener('DOMContentLoaded', function() {
  // Add animation classes to elements
  animateElements();
  
  // Initialize gallery functionality if gallery exists
  initializeGallery();
  
  // Initialize contact form validation if form exists
  initializeContactForm();
});

// Add animation classes to elements when they come into view
function animateElements() {
  // Add animation classes to headings
  document.querySelectorAll('h1, h2').forEach(el => {
    el.classList.add('animate-fade');
  });
  
  // Add animation classes to cards with slight delay for each
  const cards = document.querySelectorAll('.card');
  cards.forEach((card, index) => {
    setTimeout(() => {
      card.classList.add('animate-slide');
    }, 100 * index);
  });
  
  // Add animation to hero section if it exists
  const hero = document.querySelector('.hero');
  if (hero) {
    hero.classList.add('animate-fade');
  }
}

// Initialize gallery functionality
function initializeGallery() {
  const galleryItems = document.querySelectorAll('.gallery-item');
  if (galleryItems.length > 0) {
    galleryItems.forEach(item => {
      item.addEventListener('click', function() {
        // Get image source and caption
        const imgSrc = this.querySelector('img').src;
        const caption = this.querySelector('.gallery-caption').textContent;
        
        // Create modal for full-size image view
        showImageModal(imgSrc, caption);
      });
    });
  }
}

// Show modal with full-size image
function showImageModal(imgSrc, caption) {
  // Create modal elements
  const modal = document.createElement('div');
  modal.className = 'image-modal';
  
  const modalContent = document.createElement('div');
  modalContent.className = 'image-modal-content';
  
  const img = document.createElement('img');
  img.src = imgSrc;
  
  const captionEl = document.createElement('div');
  captionEl.className = 'image-modal-caption';
  captionEl.textContent = caption;
  
  const closeBtn = document.createElement('span');
  closeBtn.className = 'image-modal-close';
  closeBtn.innerHTML = '&times;';
  closeBtn.addEventListener('click', function() {
    document.body.removeChild(modal);
  });
  
  // Assemble modal
  modalContent.appendChild(closeBtn);
  modalContent.appendChild(img);
  modalContent.appendChild(captionEl);
  modal.appendChild(modalContent);
  
  // Add modal to body
  document.body.appendChild(modal);
  
  // Close modal when clicking outside the image
  modal.addEventListener('click', function(e) {
    if (e.target === modal) {
      document.body.removeChild(modal);
    }
  });
}

// Initialize contact form validation
function initializeContactForm() {
  const contactForm = document.querySelector('.contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      // Simple validation
      let isValid = true;
      const requiredFields = contactForm.querySelectorAll('[required]');
      
      requiredFields.forEach(field => {
        if (!field.value.trim()) {
          isValid = false;
          field.classList.add('error');
        } else {
          field.classList.remove('error');
        }
      });
      
      // Email validation if email field exists
      const emailField = contactForm.querySelector('input[type="email"]');
      if (emailField && emailField.value) {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(emailField.value)) {
          isValid = false;
          emailField.classList.add('error');
        }
      }
      
      if (isValid) {
        // Show success message (in real app would submit to server)
        const successMsg = document.createElement('div');
        successMsg.className = 'success-message';
        successMsg.textContent = 'تم إرسال رسالتك بنجاح! سنتواصل معك قريباً.';
        
        // Replace form with success message
        contactForm.innerHTML = '';
        contactForm.appendChild(successMsg);
      }
    });
  }
}

// Enhanced Buttons and Interactive Elements
document.addEventListener('DOMContentLoaded', function() {
  // Initialize enhanced buttons
  initializeEnhancedButtons();
  
  // Initialize ripple effect for buttons
  initializeRippleEffect();
  
  // Initialize hover effects
  initializeHoverEffects();
  
  // Initialize floating action buttons if they exist
  initializeFloatingActionButtons();
});

// Initialize enhanced button styles and behaviors
function initializeEnhancedButtons() {
  // Add icon buttons class to buttons with only SVG content
  document.querySelectorAll('button').forEach(button => {
    if (button.querySelector('svg') && button.textContent.trim() === '') {
      button.classList.add('btn-icon');
    }
  });
  
  // Add pulse animation to primary action buttons
  document.querySelectorAll('.btn-primary-action').forEach(button => {
    button.classList.add('btn-pulse');
  });
  
  // Add gradient effect to featured buttons
  document.querySelectorAll('.btn-featured').forEach(button => {
    button.classList.add('btn-gradient');
  });
}

// Initialize ripple effect for buttons and interactive elements
function initializeRippleEffect() {
  const elements = document.querySelectorAll('.btn, .card-interactive, .nav a, .social-icon');
  
  elements.forEach(element => {
    element.addEventListener('click', function(e) {
      const rect = element.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      const ripple = document.createElement('span');
      ripple.className = 'ripple-effect';
      ripple.style.left = `${x}px`;
      ripple.style.top = `${y}px`;
      
      element.appendChild(ripple);
      
      setTimeout(() => {
        ripple.remove();
      }, 600); // Match the CSS animation duration
    });
  });
}

// Initialize hover effects for cards and interactive elements
function initializeHoverEffects() {
  // Add tilt effect to project cards
  document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('mousemove', function(e) {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      
      const tiltX = (y - centerY) / 10;
      const tiltY = (centerX - x) / 10;
      
      card.style.transform = `perspective(1000px) rotateX(${tiltX}deg) rotateY(${tiltY}deg)`;
    });
    
    card.addEventListener('mouseleave', function() {
      card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0)';
    });
  });
  
  // Add scale effect to feature icons
  document.querySelectorAll('.feature-icon').forEach(icon => {
    icon.addEventListener('mouseenter', function() {
      icon.classList.add('scale-effect');
    });
    
    icon.addEventListener('mouseleave', function() {
      icon.classList.remove('scale-effect');
    });
  });
}

// Initialize floating action buttons
function initializeFloatingActionButtons() {
  const fab = document.querySelector('.floating-action-button');
  if (fab) {
    // Show/hide FAB based on scroll position
    window.addEventListener('scroll', function() {
      if (window.scrollY > 300) {
        fab.classList.add('visible');
      } else {
        fab.classList.remove('visible');
      }
    });
    
    // Handle FAB click (scroll to top by default)
    fab.addEventListener('click', function() {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }
  
  // Initialize FAB menu if it exists
  const fabMenu = document.querySelector('.fab-menu');
  if (fabMenu) {
    const fabToggle = fabMenu.querySelector('.fab-toggle');
    if (fabToggle) {
      fabToggle.addEventListener('click', function() {
        fabMenu.classList.toggle('open');
      });
    }
  }
}

// Add animated button styles to the document
function addAnimatedButtonStyles() {
  const styleElement = document.createElement('style');
  styleElement.textContent = `
    /* Ripple Effect */
    .ripple-effect {
      position: absolute;
      border-radius: 50%;
      background-color: rgba(255, 255, 255, 0.4);
      transform: scale(0);
      animation: ripple 0.6s linear;
      pointer-events: none;
    }
    
    @keyframes ripple {
      to {
        transform: scale(4);
        opacity: 0;
      }
    }
    
    /* Pulse Animation */
    .btn-pulse {
      animation: pulse 2s infinite;
    }
    
    @keyframes pulse {
      0% {
        box-shadow: 0 0 0 0 rgba(var(--primary-color-rgb), 0.4);
      }
      70% {
        box-shadow: 0 0 0 10px rgba(var(--primary-color-rgb), 0);
      }
      100% {
        box-shadow: 0 0 0 0 rgba(var(--primary-color-rgb), 0);
      }
    }
    
    /* Gradient Button */
    .btn-gradient {
      background: linear-gradient(45deg, var(--primary-color), var(--secondary-color));
      background-size: 200% 200%;
      animation: gradient-shift 3s ease infinite;
    }
    
    @keyframes gradient-shift {
      0% {
        background-position: 0% 50%;
      }
      50% {
        background-position: 100% 50%;
      }
      100% {
        background-position: 0% 50%;
      }
    }
    
    /* Scale Effect */
    .scale-effect {
      animation: scale 0.3s ease forwards;
    }
    
    @keyframes scale {
      to {
        transform: scale(1.2);
      }
    }
    
    /* Floating Action Button */
    .floating-action-button {
      position: fixed;
      bottom: 30px;
      right: 30px;
      width: 56px;
      height: 56px;
      border-radius: 50%;
      background-color: var(--primary-color);
      color: white;
      display: flex;
      align-items: center;
      justify-content: center;
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
      cursor: pointer;
      z-index: 100;
      opacity: 0;
      transform: translateY(20px);
      transition: all 0.3s ease;
    }
    
    .floating-action-button.visible {
      opacity: 1;
      transform: translateY(0);
    }
    
    .floating-action-button:hover {
      background-color: var(--primary-dark);
      box-shadow: 0 6px 12px rgba(0, 0, 0, 0.3);
    }
    
    /* FAB Menu */
    .fab-menu {
      position: fixed;
      bottom: 30px;
      right: 30px;
      z-index: 100;
    }
    
    .fab-menu .fab-toggle {
      width: 56px;
      height: 56px;
      border-radius: 50%;
      background-color: var(--primary-color);
      color: white;
      display: flex;
      align-items: center;
      justify-content: center;
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
      cursor: pointer;
      z-index: 101;
      transition: all 0.3s ease;
    }
    
    .fab-menu .fab-toggle:hover {
      background-color: var(--primary-dark);
    }
    
    .fab-menu .fab-items {
      position: absolute;
      bottom: 70px;
      right: 8px;
      display: flex;
      flex-direction: column;
      gap: 16px;
      opacity: 0;
      pointer-events: none;
      transition: all 0.3s ease;
    }
    
    .fab-menu.open .fab-items {
      opacity: 1;
      pointer-events: auto;
    }
    
    .fab-menu .fab-item {
      width: 40px;
      height: 40px;
      border-radius: 50%;
      background-color: var(--secondary-color);
      color: white;
      display: flex;
      align-items: center;
      justify-content: center;
      box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
      cursor: pointer;
      transform: scale(0);
      transition: all 0.3s ease;
    }
    
    .fab-menu.open .fab-item {
      transform: scale(1);
    }
    
    .fab-menu .fab-item:hover {
      transform: scale(1.1);
    }
    
    .fab-menu .fab-label {
      position: absolute;
      right: 50px;
      background-color: var(--bg-color);
      color: var(--text-color);
      padding: 4px 8px;
      border-radius: 4px;
      font-size: 14px;
      white-space: nowrap;
      box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
      opacity: 0;
      pointer-events: none;
      transition: all 0.2s ease;
    }
    
    .fab-menu .fab-item:hover .fab-label {
      opacity: 1;
    }
  `;
  
  document.head.appendChild(styleElement);
}

// Call to add the styles when the script loads
addAnimatedButtonStyles();

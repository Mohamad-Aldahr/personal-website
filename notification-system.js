// Notification System for New Posts
document.addEventListener('DOMContentLoaded', function() {
  // Check if browser supports notifications
  if ('Notification' in window) {
    setupNotificationSystem();
  }
  
  // Setup subscription form listeners
  setupSubscriptionForms();
});

// Setup notification permission and subscription system
function setupNotificationSystem() {
  const subscribeButtons = document.querySelectorAll('.notification-subscribe');
  
  subscribeButtons.forEach(button => {
    button.addEventListener('click', function(e) {
      e.preventDefault();
      
      // Request notification permission
      Notification.requestPermission().then(permission => {
        if (permission === 'granted') {
          // Save subscription in local storage
          saveSubscription(button.dataset.topic || 'all');
          
          // Show success message
          showSubscriptionSuccess(button);
          
          // Send test notification
          sendTestNotification(button.dataset.topic || 'all');
        } else {
          // Show permission denied message
          showPermissionDenied(button);
        }
      });
    });
  });
  
  // Check existing subscriptions and update UI
  updateSubscriptionUI();
}

// Save subscription to local storage
function saveSubscription(topic) {
  const subscriptions = JSON.parse(localStorage.getItem('subscriptions') || '{}');
  subscriptions[topic] = true;
  localStorage.setItem('subscriptions', JSON.stringify(subscriptions));
}

// Remove subscription from local storage
function removeSubscription(topic) {
  const subscriptions = JSON.parse(localStorage.getItem('subscriptions') || '{}');
  delete subscriptions[topic];
  localStorage.setItem('subscriptions', JSON.stringify(subscriptions));
}

// Update UI based on current subscriptions
function updateSubscriptionUI() {
  const subscriptions = JSON.parse(localStorage.getItem('subscriptions') || '{}');
  const subscribeButtons = document.querySelectorAll('.notification-subscribe');
  
  subscribeButtons.forEach(button => {
    const topic = button.dataset.topic || 'all';
    
    if (subscriptions[topic]) {
      button.classList.add('subscribed');
      button.textContent = 'إلغاء الاشتراك';
      button.dataset.subscribed = 'true';
    } else {
      button.classList.remove('subscribed');
      button.textContent = 'اشتراك للإشعارات';
      button.dataset.subscribed = 'false';
    }
  });
}

// Show subscription success message
function showSubscriptionSuccess(button) {
  const successMessage = document.createElement('div');
  successMessage.className = 'subscription-message success';
  successMessage.textContent = 'تم الاشتراك بنجاح! ستصلك إشعارات عند نشر محتوى جديد.';
  
  // Insert message after button
  button.parentNode.insertBefore(successMessage, button.nextSibling);
  
  // Remove message after 3 seconds
  setTimeout(() => {
    successMessage.remove();
  }, 3000);
}

// Show permission denied message
function showPermissionDenied(button) {
  const errorMessage = document.createElement('div');
  errorMessage.className = 'subscription-message error';
  errorMessage.textContent = 'لم يتم منح إذن الإشعارات. يرجى تمكين الإشعارات في إعدادات المتصفح.';
  
  // Insert message after button
  button.parentNode.insertBefore(errorMessage, button.nextSibling);
  
  // Remove message after 3 seconds
  setTimeout(() => {
    errorMessage.remove();
  }, 3000);
}

// Send test notification
function sendTestNotification(topic) {
  const topicNames = {
    'all': 'جميع المنشورات',
    'articles': 'المقالات',
    'projects': 'المشاريع'
  };
  
  const notification = new Notification('تم الاشتراك بنجاح!', {
    body: `ستصلك إشعارات عند نشر محتوى جديد في ${topicNames[topic] || topic}.`,
    icon: '/personal-website/images/notification-icon.png'
  });
  
  // Close notification after 5 seconds
  setTimeout(() => {
    notification.close();
  }, 5000);
}

// Setup email subscription forms
function setupSubscriptionForms() {
  const subscriptionForms = document.querySelectorAll('.subscription-form');
  
  subscriptionForms.forEach(form => {
    form.addEventListener('submit', function(e) {
      e.preventDefault();
      
      // Get email input
      const emailInput = form.querySelector('input[type="email"]');
      const email = emailInput.value.trim();
      
      // Simple validation
      if (!email || !isValidEmail(email)) {
        showFormError(form, 'يرجى إدخال بريد إلكتروني صحيح.');
        return;
      }
      
      // Save email subscription (in real app would send to server)
      saveEmailSubscription(email, form.dataset.topic || 'all');
      
      // Show success message
      showFormSuccess(form);
      
      // Clear form
      form.reset();
    });
  });
}

// Validate email format
function isValidEmail(email) {
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailPattern.test(email);
}

// Save email subscription (in real app would send to server)
function saveEmailSubscription(email, topic) {
  // In a real app, this would send the data to a server
  // For now, just save to local storage for demonstration
  const emailSubscriptions = JSON.parse(localStorage.getItem('emailSubscriptions') || '{}');
  
  if (!emailSubscriptions[topic]) {
    emailSubscriptions[topic] = [];
  }
  
  if (!emailSubscriptions[topic].includes(email)) {
    emailSubscriptions[topic].push(email);
  }
  
  localStorage.setItem('emailSubscriptions', JSON.stringify(emailSubscriptions));
}

// Show form error message
function showFormError(form, message) {
  // Remove any existing messages
  const existingMessages = form.querySelectorAll('.form-message');
  existingMessages.forEach(msg => msg.remove());
  
  // Create error message
  const errorMessage = document.createElement('div');
  errorMessage.className = 'form-message error';
  errorMessage.textContent = message;
  
  // Insert message after form
  form.appendChild(errorMessage);
}

// Show form success message
function showFormSuccess(form) {
  // Remove any existing messages
  const existingMessages = form.querySelectorAll('.form-message');
  existingMessages.forEach(msg => msg.remove());
  
  // Create success message
  const successMessage = document.createElement('div');
  successMessage.className = 'form-message success';
  successMessage.textContent = 'تم الاشتراك بنجاح! ستصلك آخر التحديثات عبر البريد الإلكتروني.';
  
  // Insert message after form
  form.appendChild(successMessage);
}

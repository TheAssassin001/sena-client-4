// Cookie Consent Banner
(function() {
  'use strict';

  // Check if consent has already been given
  if (localStorage.getItem('cookieConsent') === 'accepted') {
    return; // Don't show banner if already accepted
  }

  // Create banner HTML
  const bannerHTML = `
    <div class="cookie-banner" id="cookieBanner">
      <div class="container cookie-banner-content">
        <p>This website uses essential cookies for basic functionality.</p>
        <button class="cookie-accept-btn" id="acceptCookies">Accept</button>
      </div>
    </div>
  `;

  // Insert banner into page when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', insertBanner);
  } else {
    insertBanner();
  }

  function insertBanner() {
    // Insert banner at end of body
    document.body.insertAdjacentHTML('beforeend', bannerHTML);
    
    const banner = document.getElementById('cookieBanner');
    const acceptBtn = document.getElementById('acceptCookies');

    // Show banner with animation after a short delay
    setTimeout(() => {
      banner.classList.add('show');
    }, 500);

    // Handle accept button click
    acceptBtn.addEventListener('click', function() {
      // Store consent in localStorage
      localStorage.setItem('cookieConsent', 'accepted');
      
      // Hide banner with animation
      banner.classList.remove('show');
      
      // Remove banner from DOM after animation completes
      setTimeout(() => {
        banner.remove();
      }, 400);
    });
  }
})();

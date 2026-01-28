// Cookie Consent Banner
(function () {
  'use strict';

  // Check if consent has already been given
  const existingConsent = localStorage.getItem('cookieConsent');
  if (existingConsent === 'all' || existingConsent === 'essential') {
    return; // Don't show banner if consent already exists
  }

  // Create banner HTML with exact wording and hyperlinks
  const bannerHTML = `
    <div class="cookie-banner" id="cookieBanner">
      <div class="container cookie-banner-content">
        <p>We use cookies to ensure that you get the best experience and that our site gives you the most meaningful information. By continuing to use this site you are consenting to the use and settings of cookies in accordance with our <a href="privacy.html" class="cookie-link">Privacy Policy</a> and our <a href="terms.html" class="cookie-link">Terms of Use</a>.</p>
        <div class="cookie-buttons">
          <button class="cookie-accept-btn cookie-btn-primary" id="acceptAll">Accept All</button>
          <button class="cookie-accept-btn cookie-btn-secondary" id="acceptEssential">Accept Essential Cookies Only</button>
        </div>
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
    const acceptAllBtn = document.getElementById('acceptAll');
    const acceptEssentialBtn = document.getElementById('acceptEssential');

    // Show banner with animation after a short delay
    setTimeout(() => {
      banner.classList.add('show');
    }, 500);

    // Handle "Accept All" button click
    acceptAllBtn.addEventListener('click', function () {
      localStorage.setItem('cookieConsent', 'all');
      hideBanner(banner);
    });

    // Handle "Accept Essential Cookies Only" button click
    acceptEssentialBtn.addEventListener('click', function () {
      localStorage.setItem('cookieConsent', 'essential');
      hideBanner(banner);
    });
  }

  function hideBanner(banner) {
    // Hide banner with animation
    banner.classList.remove('show');

    // Remove banner from DOM after animation completes
    setTimeout(() => {
      banner.remove();
    }, 400);
  }
})();

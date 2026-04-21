// SmartBuy Albany — Google Analytics 4
// Paste your GA4 Measurement ID below (format: G-XXXXXXXXXX) to activate.
// While this is empty, no tracking fires and no network requests are made.
window.GA4_MEASUREMENT_ID = '';

(function () {
  var id = window.GA4_MEASUREMENT_ID;
  if (!id || !/^G-[A-Z0-9]+$/.test(id)) return;
  var s = document.createElement('script');
  s.async = true;
  s.src = 'https://www.googletagmanager.com/gtag/js?id=' + id;
  document.head.appendChild(s);
  window.dataLayer = window.dataLayer || [];
  window.gtag = function () { window.dataLayer.push(arguments); };
  window.gtag('js', new Date());
  window.gtag('config', id, { anonymize_ip: true });
})();

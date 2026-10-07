/**
 * FormSubmit AJAX: stay on page, show thank-you banner, no FormSubmit interstitial.
 */
(function () {
  function showBanner(banner, text, ok) {
    if (!banner) return;
    banner.hidden = false;
    banner.textContent = text;
    banner.setAttribute('role', 'status');
    banner.classList.toggle('form-banner--error', !ok);
    banner.classList.toggle('form-banner--ok', ok);
    banner.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  }

  function bind(form) {
    if (form.dataset.formAjaxBound === '1') return;
    form.dataset.formAjaxBound = '1';

    form.addEventListener('submit', async function (e) {
      e.preventDefault();

      var ajaxUrl = form.getAttribute('data-ajax-action');
      if (!ajaxUrl) return;

      var banner = document.getElementById(form.getAttribute('data-banner') || 'form-success-banner');
      var okMsg = form.getAttribute('data-ok-message') || 'Спасибо! В ближайшее время наши менеджеры свяжутся с вами!';
      var errMsg = form.getAttribute('data-error-message') || 'Не удалось отправить заявку.';
      var btn = form.querySelector('[type="submit"]');
      var prevLabel = btn ? btn.textContent : '';

      if (btn) {
        btn.disabled = true;
        btn.textContent = form.getAttribute('data-sending-label') || 'Отправка…';
      }

      try {
        var data = new FormData(form);
        // Honeypot filled → pretend success, do not send
        if ((data.get('_honey') || '').toString().trim()) {
          showBanner(banner, okMsg, true);
          form.reset();
          return;
        }

        var res = await fetch(ajaxUrl, {
          method: 'POST',
          body: data,
          headers: { Accept: 'application/json' },
        });

        if (!res.ok) throw new Error('HTTP ' + res.status);

        showBanner(banner, okMsg, true);
        form.reset();
        form.dispatchEvent(new CustomEvent('form:sent', { bubbles: true }));
      } catch (err) {
        showBanner(banner, errMsg, false);
      } finally {
        if (btn) {
          btn.disabled = false;
          btn.textContent = prevLabel;
        }
      }
    });
  }

  function init() {
    document.querySelectorAll('form[data-ajax-action]').forEach(bind);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();

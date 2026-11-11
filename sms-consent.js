/* SMS consent: fills the hidden consent fields when an inquiry form is submitted.
   It never blocks, delays or changes how the form itself is sent. */
(function () {
  function pad(n) { return (n < 10 ? '0' : '') + n; }

  // Local date and time with the visitor's time zone offset, e.g. 2026-11-11T10:15:30-08:00
  function isoWithOffset(d) {
    var off = -d.getTimezoneOffset();
    var sign = off >= 0 ? '+' : '-';
    off = Math.abs(off);
    return d.getFullYear() + '-' + pad(d.getMonth() + 1) + '-' + pad(d.getDate()) +
      'T' + pad(d.getHours()) + ':' + pad(d.getMinutes()) + ':' + pad(d.getSeconds()) +
      sign + pad(Math.floor(off / 60)) + ':' + pad(off % 60);
  }

  document.querySelectorAll('form').forEach(function (form) {
    var box = form.querySelector('input[name="sms_consent"]');
    if (!box) return;
    form.addEventListener('submit', function () {
      var stamp = form.querySelector('input[name="sms_consent_timestamp"]');
      var source = form.querySelector('input[name="sms_consent_source"]');
      var nameField = form.querySelector('input[name="form-name"]');
      var formName = nameField ? nameField.value : (form.getAttribute('name') || '');
      if (source) source.value = formName + ' | ' + window.location.pathname;
      if (stamp) stamp.value = box.checked ? isoWithOffset(new Date()) : '';
    });
  });
})();

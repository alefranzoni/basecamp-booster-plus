document.addEventListener('DOMContentLoaded', function () {
  browser.storage.local.get(['maxLength', 'delay']).then((result) => {
    document.getElementById('max-length').value = result.maxLength || 100;
    document.getElementById('delay').value = result.delay || 500;
  });
});

document.getElementById('save').addEventListener('click', function () {
  let maxLength = document.getElementById('max-length').value;
  let delay = document.getElementById('delay').value;

  if (maxLength) {
    browser.storage.local.set({ maxLength: maxLength });
  }

  if (delay) {
    browser.storage.local.set({ delay: delay });
  }

  this.textContent = "Saved";
  this.style.backgroundColor = "#bf9cf0";

  setTimeout(function () {
    window.close();
  }, 300);
});

document.addEventListener('DOMContentLoaded', function () {
  chrome.storage.local.get(['maxLength', 'delay'], function(result) {
    document.getElementById('max-length').value = result.maxLength || 100;
    document.getElementById('delay').value = result.delay || 500;
  });
});

document.getElementById('save').addEventListener('click', function () {
  let maxLength = document.getElementById('max-length').value;
  let delay = document.getElementById('delay').value;

  if (maxLength) {
    chrome.storage.local.set({ maxLength: maxLength });
  }

  if (delay) {
    chrome.storage.local.set({ delay: delay });
  }

  this.textContent = "Saved";
  this.style.backgroundColor = "#bf9cf0";

  setTimeout(function () {
    window.close();
  }, 300);
});

const form = document.getElementById('search-form');
const inputField = document.getElementById('location-entry-field');

form.addEventListener('submit', function(event) {
  event.preventDefault();

  const inputValue = inputField.value.trim();
  const redirectUrl = `https://namemc.com/search?q=${encodeURIComponent(inputValue)}`;

  window.location.href = redirectUrl;
});

const btnPlay = document.getElementById('btn-play');
const serverAddress = 'akyto.club';

btnPlay.addEventListener('click', async function() {
  try {
    await navigator.clipboard.writeText(serverAddress);
    showMessage('Copied to pasteboard!');
  } catch (error) {
    console.error('Error copying IP to clipboard:', error);
    showMessage('Failed to copy IP. Please copy it manually.');
  }
});

function showMessage(message) {
  const toast = document.createElement('div');
  toast.classList.add('toast-message');
  toast.textContent = message;
  document.body.appendChild(toast);

  setTimeout(() => {
    toast.remove();
  }, 3000);
}
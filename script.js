// Keyboard Page
if (window.location.pathname.includes('keyboard.html')) {
  const textBox = document.getElementById('text-box');
  const keyboard = document.getElementById('keyboard');

  const keys = [
    '1', '2', '3', '4', '5', '6', '7', '8', '9', '0',
    'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P',
    'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', ';',
    'Z', 'X', 'C', 'V', 'B', 'N', 'M', ',', '.', '/',
    'Space', 'Backspace'
  ];

  keys.forEach(key => {
    const button = document.createElement('button');
    button.textContent = key;
    button.classList.add('btn', 'btn-outline-secondary');
    button.addEventListener('click', () => {
      if (key === 'Space') {
        textBox.value += ' ';
      } else if (key === 'Backspace') {
        textBox.value = textBox.value.slice(0, -1);
      } else {
        textBox.value += key;
      }
    });
    keyboard.appendChild(button);
  });
}

// Text Sharing Page
if (window.location.pathname.includes('text-sharing.html')) {
  const textInput = document.getElementById('text-input');
  const generateLinkButton = document.getElementById('generate-link');
  const linkDisplay = document.getElementById('link-display');
  const textDisplay = document.getElementById('text-display');

  generateLinkButton.addEventListener('click', () => {
    const text = textInput.value.trim();
    if (text) {
      const link = `${window.location.origin}/imrat/${encodeURIComponent(text)}`;
      linkDisplay.innerHTML = `<a href="${link}" target="_blank">${link}</a>`;
      localStorage.setItem(text, text);
    }
  });

  const path = window.location.pathname.split('/').pop();
  if (path) {
    const text = localStorage.getItem(decodeURIComponent(path));
    if (text) {
      textDisplay.textContent = text;
    }
  }
}

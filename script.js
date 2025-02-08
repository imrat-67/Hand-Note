console.log("Script loaded!");

// Keyboard Page
if (window.location.pathname.includes('keyboard.html')) {
  console.log("Keyboard page detected!");
  const textBox = document.getElementById('text-box');
  const keyboard = document.getElementById('keyboard');
  const copyButton = document.getElementById('copy-button');

  // Standard laptop keyboard layout
  const keys = [
    '`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace',
    'Tab', 'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', '[', ']', '\\',
    'Caps', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', ';', "'", 'Enter',
    'Shift', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', ',', '.', '/', 'Shift',
    'Ctrl', 'Alt', 'Space', 'Alt', 'Ctrl'
  ];

  console.log("Creating keyboard buttons...");
  keys.forEach(key => {
    const button = document.createElement('button');
    button.textContent = key;
    button.classList.add('btn', 'btn-outline-secondary');

    if (key === 'Space') {
      button.classList.add('space');
    } else if (key === 'Backspace') {
      button.classList.add('backspace');
    }

    button.addEventListener('click', () => {
      if (key === 'Space') {
        textBox.value += ' ';
      } else if (key === 'Backspace') {
        textBox.value = textBox.value.slice(0, -1);
      } else if (key === 'Enter') {
        textBox.value += '\n';
      } else if (key === 'Tab') {
        textBox.value += '\t';
      } else {
        textBox.value += key;
      }
    });

    keyboard.appendChild(button);
  });

  console.log("Keyboard buttons created!");

  // Copy Text Button
  copyButton.addEventListener('click', () => {
    textBox.select();
    document.execCommand('copy');
    alert('Text copied to clipboard!');
  });
}

const unreleasedBoxes = document.querySelectorAll('.box:not(.released)');

function randomDigit() {
  return Math.floor(Math.random() * 30 + 1);
}

function shuffleDigits() {
  unreleasedBoxes.forEach(box => {
    const slot = box.querySelector('.slot');
    slot.textContent = randomDigit();
  });
}

setInterval(shuffleDigits, 150); // change speed if needed

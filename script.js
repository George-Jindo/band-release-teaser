document.addEventListener("DOMContentLoaded", () => {
  const boxes = document.querySelectorAll(".box");

  boxes.forEach(box => {
    const numberSpan = box.querySelector(".number");

    // Skip the release box (it has a fixed number)
    if (!box.classList.contains("release")) {
      setInterval(() => {
        const rand = String(Math.floor(Math.random() * 31) + 1).padStart(2, "0");
        numberSpan.textContent = rand;
      }, 100);
    }
  });

  // Mobile fallback for .hover-card
  const isTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0;

  if (isTouch) {
    document.querySelectorAll('.box.release').forEach(box => {
      box.addEventListener('click', () => {
        const card = box.querySelector('.hover-card');
        const isVisible = card.classList.contains('visible');
        // Hide all cards
        document.querySelectorAll('.hover-card').forEach(c => c.classList.remove('visible'));
        if (!isVisible) card.classList.add('visible');
      });
    });
  }
});


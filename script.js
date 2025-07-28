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
});

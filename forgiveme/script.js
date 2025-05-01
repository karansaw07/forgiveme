let currentUI = 1;

const uis = {
  1: document.getElementById("ui1"),
  2: document.getElementById("ui2"),
  3: document.getElementById("ui3"),
  4: document.getElementById("ui4"),
};

const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");

function showUI(num) {
  Object.values(uis).forEach(ui => ui.classList.remove("active"));
  uis[num].classList.add("active");
  currentUI = num;
}

function moveRandom(button) {
  const padding = 20;
  const maxX = window.innerWidth - button.offsetWidth - padding;
  const maxY = window.innerHeight - button.offsetHeight - padding;
  const x = Math.floor(Math.random() * maxX);
  const y = Math.floor(Math.random() * maxY);
  button.style.left = `${x}px`;
  button.style.top = `${y}px`;
}

// No Button Logic
noBtn.addEventListener("click", () => {
  if (currentUI === 1) showUI(2); // From UI1 to UI2
  else if (currentUI === 2) showUI(3); // From UI2 to UI3
  else if (currentUI === 3) moveRandom(noBtn); // In UI3, move No button randomly
});

// Yes Button Logic
yesBtn.addEventListener("click", () => {
  showUI(4); // Yes button leads to UI4 from any UI
});


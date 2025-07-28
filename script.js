let yesBtn = document.getElementById('yes-btn');
let noBtn = document.getElementById('no-btn');
let yesFontSize = 1.2;

noBtn.addEventListener('click', () => {
  yesFontSize += 1;
  yesBtn.style.fontSize = `${yesFontSize}rem`;
  yesBtn.classList.add('grow');
  setTimeout(() => yesBtn.classList.remove('grow'), 400);
});

// Sound and confetti
yesBtn.addEventListener('click', () => {
  // Play sound
  let audio = new Audio('https://www.myinstants.com/media/sounds/pop.mp3');
  audio.play();

  // Replace page content
  document.body.innerHTML = "<h1>Yay! I can't wait! 💖</h1>";

  // Confetti
  confetti();

  // Hearts!
  for (let i = 0; i < 20; i++) {
    createHeart();
  }
});

// Floating heart generator
function createHeart() {
  const heart = document.createElement('div');
  heart.className = 'heart';
  heart.innerText = '💖';
  heart.style.left = Math.random() * window.innerWidth + 'px';
  document.body.appendChild(heart);
  setTimeout(() => heart.remove(), 2000);
}

// Confetti from CDN
function confetti() {
  window.confetti({
    particleCount: 200,
    spread: 100,
    origin: { y: 0.6 },
  });
}


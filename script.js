let yesBtn = document.getElementById('yes-btn');
let noBtn = document.getElementById('no-btn');

let yesFontSize = 1.2; // starting size in rem

noBtn.addEventListener('click', () => {
  yesFontSize += 1;
  yesBtn.style.fontSize = `${yesFontSize}rem`;
});

yesBtn.addEventListener('click', () => {
  document.body.innerHTML = "<h1>Yay! I can't wait! 💖</h1>";
});

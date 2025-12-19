const fotoCasal = document.getElementById("foto-casal");
const startScreen = document.getElementById("start-screen");
const music = document.getElementById("bg-music");
const heartLayer = document.getElementById("heart-layer");

fotoCasal.addEventListener("click", () => {

  console.log("CLICOU NA FOTO"); // debug (pode remover depois)

  // toca música
  music.volume = 0.5;
  music.play().catch(() => {});

  // cria MUITOS corações
  for (let i = 0; i < 40; i++) {
    criarCoracaoPNG();
  }

  // some a tela inicial
  startScreen.style.transition = "opacity 0.8s ease";
  startScreen.style.opacity = "0";

  setTimeout(() => {
    startScreen.style.display = "none";
  }, 800);
});

function criarCoracaoPNG() {
  const heart = document.createElement("img");
  heart.src = "heart.png";
  heart.className = "heart-fly";

  heart.style.left = Math.random() * window.innerWidth + "px";
  heart.style.top = window.innerHeight * 0.6 + "px";
  heart.style.width = 20 + Math.random() * 25 + "px";

  heartLayer.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 2500);
}

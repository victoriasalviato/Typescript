
const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");
const card = document.getElementById("card");

noBtn.addEventListener("mouseover", () => {
  const cardRect = card.getBoundingClientRect();
  const maxX = cardRect.width - noBtn.offsetWidth;
  const maxY = cardRect.height - noBtn.offsetHeight;
  const randomX = Math.random() * maxX;
  const randomY = Math.random() * maxY;
  noBtn.style.left = randomX + "px";
  noBtn.style.top = randomY + "px";
});

yesBtn.addEventListener("click", () => {
  card.innerHTML = `
    <h1 style="font-size:64px;color:#ff1493;">YAAAYY 🎉💖</h1>
    <img src="assets/comemoracao.gif" class="gif" alt="Comemoração">
    <p style="font-size:22px;color:#d63384;">Agora é oficial 😎💘</p>
  `;
});

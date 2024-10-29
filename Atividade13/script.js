const windowImage = document.getElementById("window-image");
const statusText = document.getElementById("status-text");

// URLs das imagens (substitua com os URLs reais das imagens)
const closedWindow = "src/img/janela-fechada.png";
const openWindow = "src/img/janela-aberta.png";
const brokenWindow = "src/img/janela-quebrada.jpg";

// Variável para controlar o estado da janela
let isMouseOver = false;
let isBroken = false;

// Função para abrir a janela ao passar o mouse
windowImage.addEventListener("mouseover", () => {
  if (!isMouseOver && !isBroken) {
    windowImage.src = openWindow;
    statusText.textContent = "Janela Aberta";
    isMouseOver = true;
  }
});

// Função para fechar a janela ao sair o mouse
windowImage.addEventListener("mouseout", () => {
  if (isMouseOver && !isBroken) {
    windowImage.src = closedWindow;
    statusText.textContent = "Janela Fechada";
    isMouseOver = false;
  }
});

// Função para quebrar a janela ao clicar
windowImage.addEventListener("click", () => {
  if (!isBroken) {
    windowImage.src = brokenWindow;
    statusText.textContent = "Janela Quebrada";
    isBroken = true;
    windowImage.style.pointerEvents = "none"; // Desativa mais eventos após quebrar
  }
});

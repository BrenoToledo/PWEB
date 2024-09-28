// Define as possibilidades do jogo
const choices = ['rock', 'paper', 'scissors'];

// Define os ícones para cada escolha
const icons = { 'rock': '🪨', 'paper': '📄', 'scissors': '✂️' };

// Define os resultados do jogo
const results = {
  'rock-scissors': 'Você venceu!',
  'paper-rock': 'Você venceu!',
  'scissors-paper': 'Você venceu!',
  'scissors-rock': 'Você perdeu!',
  'rock-paper': 'Você perdeu!',
  'paper-scissors': 'Você perdeu!',
  'rock-rock': 'Empate!',
  'paper-paper': 'Empate!',
  'scissors-scissors': 'Empate!',
};

// Função para gerar uma escolha aleatória do computador
function getComputerChoice() {
  return choices[Math.floor(Math.random() * choices.length)];
}

// Função principal do jogo
function play(playerChoice) {
  // Adiciona a classe de loading à área de escolha do computador
  document.getElementById('computer-choice').classList.add('loading');
  // Muda o texto da área de escolha do computador para "⏳"
  document.getElementById('computer-choice').textContent = '⏳';
  // Muda o texto do resultado para "Carregando..."
  document.getElementById('result').textContent = 'Carregando...';

  // Simula o tempo de carregamento da "roda" com um setTimeout
  setTimeout(() => {
    // Gera uma escolha aleatória do computador
    const computerChoice = getComputerChoice();
    // Remove a classe de loading da área de escolha do computador
    document.getElementById('computer-choice').classList.remove('loading');
    // Muda o texto da área de escolha do computador para o ícone da escolha do computador
    document.getElementById('computer-choice').textContent = icons[computerChoice];
    // Define o resultado do jogo
    const result = results[`${playerChoice}-${computerChoice}`];
    // Muda o texto do resultado para o resultado do jogo
    document.getElementById('result').textContent = result;
  }, 1000);
}

// Adiciona atalhos de teclado
document.addEventListener('keydown', (event) => {
  // Verifica se a tecla pressionada é R, P ou S
  const key = event.key.toLowerCase();
  if (key === 'r') play('rock');
  if (key === 'p') play('paper');
  if (key === 's') play('scissors');
});
function Retangulo(x, y) {
  this.base = x;
  this.altura = y;

  // Método para calcular a área do retângulo
  this.calculaArea = function () {
    return this.base * this.altura;
  };
}

// Recebendo valores do usuário
const base = parseFloat(prompt("Digite a base do retângulo:"));
const altura = parseFloat(prompt("Digite a altura do retângulo:"));

// Criando o objeto Retângulo e calculando a área
const retangulo = new Retangulo(base, altura);
alert("A área do retângulo é: " + retangulo.calculaArea());

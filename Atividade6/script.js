function media() {
  var nome = prompt("Digite o nome do aluno: ");
  var nota1 = prompt("Digite a primeira nota: ");
  var nota2 = prompt("Digite a segunda nota: ");
  var nota3 = prompt("Digite a terceira nota: ");
  var nota4 = prompt("Digite a quarta nota: ");
  var media =
    (parseFloat(nota1) +
      parseFloat(nota2) +
      parseFloat(nota3) +
      parseFloat(nota4)) /4;

  alert("A media do " + nome + " é " + media);
}

function operacoes() {
  var numero1 = prompt("Digite o primeiro numero !");
  var numero2 = prompt("Digite o segundo numero !");

  var soma = parseFloat(numero1) + parseFloat(numero2);
  var produto = parseFloat(numero1) * parseFloat(numero2);
  var divisao = parseFloat(numero1) / parseFloat(numero2);
  var resto = parseFloat(numero1) % parseFloat(numero2);

  alert("A soma é: " + soma.toFixed(2));
  alert("O produto é: " + produto.toFixed(2));
  alert("A divisao é: " + divisao.toFixed(2));
  alert("O resto é: " + resto.toFixed(2));
}

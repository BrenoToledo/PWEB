// Importa o módulo prompt-sync
const prompt = require('prompt-sync')();

// Função de saudação que recebe um nome e exibe uma mensagem personalizada
function saudacao(nome) {
  console.log('OI ' + nome);
}

// Função para entrada de nome que chama um callback com o nome digitado
function entradaNome(callback) {
  var nome = prompt('Digite seu nome: ');
  callback(nome); // Chama a função callback com o nome inserido
}

// Chama a função entradaNome e passa saudacao como callback
entradaNome(saudacao);

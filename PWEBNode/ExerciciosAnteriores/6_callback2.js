// Função que exibe uma mensagem e, em seguida, chama uma função de callback
function exibeMensagensNaOrdem(mensagem, callback) { 
  console.log(mensagem); 
  callback(); 
} 

// Executando a função e passando outra função como callback
exibeMensagensNaOrdem('Essa é a primeira mensagem exibida na ordem', function() { 
  console.log('Essa é a segunda mensagem exibida na ordem'); 
});

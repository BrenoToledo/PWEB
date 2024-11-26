document.getElementById("form").onsubmit = function(event) {
  event.preventDefault(); // Prevent form submission for validation

  var name = document.getElementById("nome").value;
  var email = document.getElementById("email").value;
  var comment = document.getElementById("comentario").value;
  var pesquisa = document.querySelector('input[name="pesquisa"]:checked');

  // Validar Nome
  if (name.length < 10) {
      alert("O nome deve ter pelo menos 10 caracteres.");
      return false;
  }

  // Validar E-mail
  var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
      alert("Por favor, insira um endereço de e-mail válido.");
      return false;
  }

  // Validar Comentário
  if (comment.length < 20) {
      alert("O comentário deve ter pelo menos 20 caracteres.");
      return false;
  }

  // Validar Pesquisa
  if (!pesquisa) {
      alert("Por favor, selecione uma opção de pesquisa.");
      return false;
  } else {
      var mensagem = pesquisa.value === "Sim" ? "Volte sempre à está página!" : "Que bom que você voltou a visitar esta página!";
      alert(mensagem);
  }

  // Se todas as validações forem bem-sucedidas
  alert("Formulário enviado com sucesso!");
  return true;
};

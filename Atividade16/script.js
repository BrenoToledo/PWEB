function abrirCurso() {
  // Obtém o valor selecionado
  var curso = document.getElementById("curso").value;

  // Verifica se um curso foi selecionado
  if (curso) {
      // Confirma se o usuário deseja ver as informações do curso
      var confirmacao = confirm("Você deseja abrir informações sobre o curso " + curso + "?");

      // Se o usuário clicar em "OK", abre o modal com as informações
      if (confirmacao) {
          mostrarModal(curso);
      }
  }
}

function mostrarModal(curso) {
  // Definir as informações dos cursos
  var infoCurso = {
      "Analise de Sistemas": "Análise e Desenvolvimento de Sistemas - Este curso forma profissionais para o desenvolvimento de sistemas computacionais.",
      "Gestao Empresarial": "Gestão Empresarial - O curso forma gestores e empreendedores com visão crítica sobre os negócios.",
      "Logistica": "Logística - Curso que prepara profissionais para o gerenciamento da cadeia de suprimentos e processos logísticos.",
      "Sistemas para Internet": "Sistemas para Internet - Focado no desenvolvimento de sistemas e aplicações para a web, abordando front-end e back-end."
  };

  // Seleciona o corpo do modal e insere as informações do curso
  var modalBody = document.getElementById("modalBody");
  modalBody.innerHTML = "<h4>" + curso + "</h4><p>" + infoCurso[curso] + "</p>";

  // Exibe o modal
  var modal = new bootstrap.Modal(document.getElementById('cursoModal'));
  modal.show();
}

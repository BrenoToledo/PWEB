// Forma 1: Notação literal de objeto
const funcionario1 = {
  matricula: 123,
  nome: "Carlos Silva",
  funcao: "Analista de Sistemas"
};

console.log(funcionario1);

// Forma 2: Função construtora
function Funcionario(matricula, nome, funcao) {
  this.matricula = matricula;
  this.nome = nome;
  this.funcao = funcao;
}

const funcionario2 = new Funcionario(456, "Ana Souza", "Desenvolvedora Frontend");
console.log(funcionario2);

// Forma 3: Classe ES6
class FuncionarioClasse {
  constructor(matricula, nome, funcao) {
      this.matricula = matricula;
      this.nome = nome;
      this.funcao = funcao;
  }
}

const funcionario3 = new FuncionarioClasse(789, "João Pedro", "Engenheiro de Software");
console.log(funcionario3);

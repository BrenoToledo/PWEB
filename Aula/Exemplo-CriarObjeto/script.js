// Criando Objetos com a função Object
var aluno1 = new Object();  // Utilizando o construtor Object para criar um objeto
aluno1.ra = "00001234";  // Definindo propriedades do objeto
aluno1.nome = "João";
alert(`ra=${aluno1.ra} nome=${aluno1.nome}`);  // Exibindo as propriedades do objeto

// Criando Objetos utilizando notação literal (forma mais comum e direta)
var aluno2 = {};  // Notação literal para criação de objeto
aluno2.ra = "00001235";  // Definindo propriedades usando a notação de ponto
aluno2["nome"] = "Leo";  // Usando colchetes para acessar e definir propriedades
alert("ra=" + aluno2.ra + " nome=" + aluno2.nome);
aluno2["email do aluno"] = "leo@gmail.com";  // Propriedade com nome complexo (com espaços)
alert(aluno2["email do aluno"]);

// Criando Objetos de forma literal com todas as propriedades inicializadas
var aluno3 = {
  ra: "00001236",  // Inicializando propriedades no momento da criação
  nome: "Maria"
};
alert("ra=" + aluno3.ra + " nome=" + aluno3.nome);

// Usando uma função construtora para criar objetos dinâmicos
function Aluno(ra, nome) {
  this.ra = ra;  // Propriedade pública
  this.nome = nome;  // Propriedade pública

  // Método público que retorna os dados do aluno
  this.MostrarDados = function () {
    return "ra=" + this.ra + " nome=" + this.nome;
  };
}

// Criando um objeto a partir da função construtora
var aluno4 = new Aluno("00001237", "Pedro");
alert(aluno4.MostrarDados());  // Chamando o método para mostrar os dados
alert(aluno4.ra);  // Acessando diretamente a propriedade pública

// Criando objeto com propriedades dinâmicas
var aluno5 = {};
var nome_propiedade = "ra";  // Nome da propriedade dinâmicamente definido
aluno5[nome_propiedade] = "00001238";  // Definindo propriedade com nome dinâmico
aluno5["nome"] = "David";  // Definindo outra propriedade
alert(aluno5.ra + " " + aluno5.nome);  // Exibindo as propriedades

// Construtor sem parâmetros (definindo propriedades e métodos manualmente)
function Aluno2() {
  var ra;  // Propriedade privada
  var nome;  // Propriedade privada

  // Método para definir o valor de ra
  this.setRa = function (value) {
    this.ra = value;
  };

  // Método para retornar o valor de ra
  this.getRa = function () {
    return this.ra;
  };

  // Método para definir o valor de nome
  this.setNome = function (value) {
    this.nome = value;
  };

  // Método para retornar o valor de nome
  this.getNome = function () {
    return this.nome;
  };
}

// Criando objeto com o construtor Aluno2 e acessando suas propriedades através de métodos
var aluno6 = new Aluno2();
aluno6.setNome("André");
aluno6.setRa("00001239");
alert("ra=" + aluno6.getRa() + " nome=" + aluno6.getNome());

// Herança: Criando um construtor que herda de outro
function AlunoADS() {
  var numLab;  // Propriedade privada

  // Método para definir valor de numLab
  this.setnumLab = function (value) {
    this.numLab = value;
  };

  // Método para retornar valor de numLab
  this.getnumLab = function () {
    return this.numLab;
  };
}

// Configurando herança para AlunoADS, herdando de Aluno2
AlunoADS.prototype = new Aluno2();  // AlunoADS herda de Aluno2
var aluno7 = new AlunoADS();
aluno7.setNome("Breno");
aluno7.setRa("00001240");
aluno7.setnumLab("123");  // Definindo propriedade específica de AlunoADS
alert(aluno7.getNome() + " " + aluno7.getnumLab());  // Exibindo dados herdados e próprios

// Usando uma classe ES6 para criar objetos com encapsulamento mais moderno
class Aluno1 {
  constructor() {
    this._ra;  // Propriedade privada
    this._nome;  // Propriedade privada
  }

  // Método para definir nome
  setNome(value) {
    this._nome = value;
  }

  // Método para retornar nome
  getNome() {
    return this._nome;
  }

  // Método para retornar ra
  getRa() {
    return this._ra;
  }
}

// Criando objeto da classe Aluno1
var objAluno = new Aluno1();
objAluno.setNome("Breno");
objAluno.setRa("00001241");
alert(`nome=${objAluno.getNome()}\nra=${objAluno.getRa()}`);  // Exibindo os dados

// Criando classe que herda de Aluno1 (Herança com classes ES6)
class AlunoADS1 extends Aluno1 {
  constructor() {
    super();  // Chamando o construtor da classe pai
    this._numLab;  // Nova propriedade específica da classe AlunoADS1
  }

  // Método para definir numLab
  setnumLab(value) {
    this._numLab = value;
  }

  // Método para retornar numLab
  getnumLab() {
    return this._numLab;
  }
}


// Criando objeto da classe AlunoADS1 que herda de Aluno1
var objAluno2 = new AlunoADS1();
objAluno2.setNome("Breno");
objAluno2.setRa("00001242");
objAluno2.setnumLab("123");
alert(`nome=${objAluno2.getNome()}\nra=${objAluno2.getRa()}\nnumLab=${objAluno2.getnumLab()}`);  // Exibindo os dados

// Versão ES10

const arr = [['código', 1], ['nome', "João"], ['idade', 23]];
const obj = Object.fromEntries(arr);

alert(JSON.stringify(obj));


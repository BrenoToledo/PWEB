// Classe Conta
class Conta {
  constructor(nomeCorrentista, banco, numeroConta, saldo) {
    this.nomeCorrentista = nomeCorrentista;
    this.banco = banco;
    this.numeroConta = numeroConta;
    this.saldo = saldo;
  }

  // Getters e Setters para as propriedades
  getNomeCorrentista() {
    return this.nomeCorrentista;
  }

  setNomeCorrentista(nome) {
    this.nomeCorrentista = nome;
  }

  getBanco() {
    return this.banco;
  }

  setBanco(banco) {
    this.banco = banco;
  }

  getNumeroConta() {
    return this.numeroConta;
  }

  setNumeroConta(numero) {
    this.numeroConta = numero;
  }

  getSaldo() {
    return this.saldo;
  }

  setSaldo(saldo) {
    this.saldo = saldo;
  }
}

// Classe Corrente com saldo especial e juros
class Corrente extends Conta {
  constructor(
    nomeCorrentista,
    banco,
    numeroConta,
    saldo,
    saldoEspecial,
    juros
  ) {
    super(nomeCorrentista, banco, numeroConta, saldo);
    this.saldoEspecial = saldoEspecial;
    this.juros = juros;
  }

  getSaldoEspecial() {
    return this.saldoEspecial;
  }

  setSaldoEspecial(saldoEspecial) {
    this.saldoEspecial = saldoEspecial;
  }

  getJuros() {
    return this.juros;
  }

  setJuros(juros) {
    this.juros = juros;
  }
}

// Classe Poupanca com data de vencimento
class Poupanca extends Conta {
  constructor(nomeCorrentista, banco, numeroConta, saldo, dataVencimento) {
    super(nomeCorrentista, banco, numeroConta, saldo);
    this.dataVencimento = dataVencimento;
  }

  getDataVencimento() {
    return this.dataVencimento;
  }

  setDataVencimento(dataVencimento) {
    this.dataVencimento = dataVencimento;
  }
}

// Recebendo dados para a Conta Corrente
const nomeCorrente = prompt("Digite o nome do correntista (Conta Corrente):");
const bancoCorrente = prompt("Digite o banco (Conta Corrente):");
const numeroContaCorrente = prompt(
  "Digite o número da conta (Conta Corrente):"
);
const saldoCorrente = parseFloat(prompt("Digite o saldo (Conta Corrente):"));
const saldoEspecial = parseFloat(
  prompt("Digite o saldo especial (Conta Corrente):")
);
const jurosCorrente = parseFloat(prompt("Digite os juros (Conta Corrente):"));

// Criando o objeto Conta Corrente
const contaCorrente = new Corrente(
  nomeCorrente,
  bancoCorrente,
  numeroContaCorrente,
  saldoCorrente,
  saldoEspecial,
  jurosCorrente
);
alert(`Conta Corrente: 
Nome do Correntista: ${contaCorrente.getNomeCorrentista()}
Banco: ${contaCorrente.getBanco()}
Número da Conta: ${contaCorrente.getNumeroConta()}
Saldo: ${contaCorrente.getSaldo()}
Saldo Especial: ${contaCorrente.getSaldoEspecial()}
Juros: ${contaCorrente.getJuros()}`);

// Recebendo dados para a Conta Poupança
const nomePoupanca = prompt("Digite o nome do correntista (Conta Poupança):");
const bancoPoupanca = prompt("Digite o banco (Conta Poupança):");
const numeroContaPoupanca = prompt(
  "Digite o número da conta (Conta Poupança):"
);
const saldoPoupanca = parseFloat(prompt("Digite o saldo (Conta Poupança):"));
const dataVencimento = prompt("Digite a data de vencimento (Conta Poupança):");

// Criando o objeto Conta Poupança
const contaPoupanca = new Poupanca(
  nomePoupanca,
  bancoPoupanca,
  numeroContaPoupanca,
  saldoPoupanca,
  dataVencimento
);
alert(`Conta Poupança: 
Nome do Correntista: ${contaPoupanca.getNomeCorrentista()}
Banco: ${contaPoupanca.getBanco()}
Número da Conta: ${contaPoupanca.getNumeroConta()}
Saldo: ${contaPoupanca.getSaldo()}
Data de Vencimento: ${contaPoupanca.getDataVencimento()}`);

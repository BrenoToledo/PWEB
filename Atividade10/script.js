class CalculadoraIMC {
  constructor() {
    this.peso;
    this.altura;
  }

  setPeso(value) {
    this.peso = value;
  }

  getPeso() {
    return this.peso;
  }

  setAltura(value) {
    this.altura = value;
  }

  getAltura() {
    return this.altura;
  }

  calcularIMC() {
    return this.peso / (this.altura * this.altura);
  }

  classificarIMC() {
    const imc = this.calcularIMC();
    if (imc < 18.5) {
      return "Abaixo do peso";
    } else if (imc < 25) {
      return "Peso normal";
    } else if (imc < 30) {
      return "Sobrepeso";
    } else if (imc < 35) {
      return "Obesidade grau 1";
    } else if (imc < 40) {
      return "Obesidade grau 2";
    } else {
      return "Obesidade grau 3";
    }
  }
}

const calculadora = new CalculadoraIMC();

function calcularIMC(event) {
  event.preventDefault();  // Previne o recarregamento da página
  const peso = parseFloat(document.getElementById('peso').value);
  const altura = parseFloat(document.getElementById('altura').value);
  calculadora.setPeso(peso);
  calculadora.setAltura(altura);
  const imc = calculadora.calcularIMC();
  const classificacao = calculadora.classificarIMC();
  const resultado = document.getElementById('resultado');
  resultado.innerText += `\nIMC: ${imc.toFixed(2)} - ${classificacao}`;
}

function resetar(event) {
  event.preventDefault();
  const resultado = document.getElementById('resultado');
  resultado.innerText = '';
  document.getElementById('peso').value = '';
  document.getElementById('altura').value = '';
}

// const calculadora = new CalculadoraIMC();
// calculadora.setPeso(70);
// calculadora.setAltura(1.75);
// alert(`IMC: ${calculadora.calcularIMC().toFixed(2)} - ${calculadora.classificarIMC()}`);
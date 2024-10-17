// 1. Função para encontrar o maior de três números
function encontrarMaior() {
  const num1 = parseFloat(document.getElementById("num1").value);
  const num2 = parseFloat(document.getElementById("num2").value);
  const num3 = parseFloat(document.getElementById("num3").value);

  const maior = Math.max(num1, num2, num3);
  document.getElementById("maior-resultado").innerText = `O maior número é: ${maior}`;
}

// 2. Função para ordenar três números em ordem crescente
function ordenarNumeros() {
  const num1 = parseFloat(document.getElementById("num1-ordem").value);
  const num2 = parseFloat(document.getElementById("num2-ordem").value);
  const num3 = parseFloat(document.getElementById("num3-ordem").value);

  const numeros = [num1, num2, num3].sort((a, b) => a - b);
  document.getElementById("ordem-resultado").innerText = `Números em ordem crescente: ${numeros.join(", ")}`;
}

// 3. Função para verificar se uma string é um palíndromo
function verificarPalindromo() {
  const str = document.getElementById("palindromo").value.toUpperCase();
  const strReversa = str.split('').reverse().join('');
  const resultado = (str === strReversa) ? "É um palíndromo" : "Não é um palíndromo";
  
  document.getElementById("palindromo-resultado").innerText = resultado;
}

// 4. Função para verificar se três lados formam um triângulo e qual tipo de triângulo é
function verificarTriangulo() {
  const lado1 = parseFloat(document.getElementById("lado1").value);
  const lado2 = parseFloat(document.getElementById("lado2").value);
  const lado3 = parseFloat(document.getElementById("lado3").value);

  if (lado1 + lado2 > lado3 && lado1 + lado3 > lado2 && lado2 + lado3 > lado1) {
      if (lado1 === lado2 && lado2 === lado3) {
          document.getElementById("triangulo-resultado").innerText = "Os lados formam um triângulo equilátero.";
      } else if (lado1 === lado2 || lado1 === lado3 || lado2 === lado3) {
          document.getElementById("triangulo-resultado").innerText = "Os lados formam um triângulo isósceles.";
      } else {
          document.getElementById("triangulo-resultado").innerText = "Os lados formam um triângulo escaleno.";
      }
  } else {
      document.getElementById("triangulo-resultado").innerText = "Os valores não formam um triângulo.";
  }
}

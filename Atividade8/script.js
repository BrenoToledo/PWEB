let respondents = [];

// Função para armazenar dados de cada respondente
function storeData(event) {
  event.preventDefault(); // Impede o comportamento padrão de envio do formulário
  let idade = document.getElementById("idade").value;
  let sexo = document.getElementById("sexo").value;
  let opniao = document.getElementById("opniao").value;

  // Verificar se os campos estão preenchidos
  if (idade && sexo && opniao) {
      respondents.push({ idade, sexo, opniao });
      updateResults();
  }
}



// Função para calcular média de idade
function calculateAverageAge() {
    if (respondents.length === 0) {
        return 0;
    }
    let sum = 0;
    for (let i = 0; i < respondents.length; i++) {
        sum += parseInt(respondents[i].idade);
    }
    let averageAge = sum / respondents.length;
    return averageAge;
}

// Função para encontrar a pessoa mais velha e mais nova
function findOldestAndYoungestPerson() {
    let oldestAge = 0;
    let youngestAge = Infinity;
    let oldestPerson;
    let youngestPerson;
    for (let i = 0; i < respondents.length; i++) {
        if (parseInt(respondents[i].idade) > oldestAge) {
            oldestAge = parseInt(respondents[i].idade);
            oldestPerson = respondents[i];
        }
        if (parseInt(respondents[i].idade) < youngestAge) {
            youngestAge = parseInt(respondents[i].idade);
            youngestPerson = respondents[i];
        }
    }
    return { oldestPerson, youngestPerson };
}

// Função para contar a quantidade de pessoas que responderam péssimo
function countPessimo() {
    let count = 0;
    for (let i = 0; i < respondents.length; i++) {
        if (respondents[i].opniao === "1") {
            count++;
        }
    }
    return count;
}

// Função para calcular a porcentagem de pessoas que achou ótimo
function calculateOtimoPercentage() {
    let count = 0;
    for (let i = 0; i < respondents.length; i++) {
        if (respondents[i].opniao === "4") {
            count++;
        }
    }
    return (count / respondents.length) * 100;
}

// Função para contar a quantidade de pessoas que achou bom
function countBom() {
    let count = 0;
    for (let i = 0; i < respondents.length; i++) {
        if (respondents[i].opniao === "3") {
            count++;
        }
    }
    return count;
}

// Função para contar a quantidade de homens e mulheres
function countHomensEMulheres() {
    let homens = 0;
    let mulheres = 0;
    for (let i = 0; i < respondents.length; i++) {
        if (respondents[i].sexo === "Masculino") {
            homens++;
        } else {
            mulheres++;
        }
    }
    return { homens, mulheres };
}

// Função para atualizar os resultados
function updateResults() {
  let averageAge = calculateAverageAge();
  let { oldestPerson, youngestPerson } = findOldestAndYoungestPerson();
  let pessimoCount = countPessimo();
  let otimoPercentage = calculateOtimoPercentage();
  let bomCount = countBom();
  let { homens, mulheres } = countHomensEMulheres();
  let progress = (respondents.length / 45) * 100;
  document.getElementById("media-idade").innerHTML = `A média de idade é: ${averageAge.toFixed(2)} anos`;
  document.getElementById("mais-velha").innerHTML = `A pessoa mais velha tem: ${oldestPerson ? oldestPerson.idade : 0} anos`;
  document.getElementById("mais-nova").innerHTML = `A pessoa mais nova tem: ${youngestPerson ? youngestPerson.idade : 0} anos`;
  document.getElementById("pessimo-count").innerHTML = `Quantidade de pessoas que responderam péssimo: ${pessimoCount}`;
  document.getElementById("otimo-percentage").innerHTML = `Porcentagem de pessoas que achou ótimo: ${otimoPercentage.toFixed(2)}%`;
  document.getElementById("bom-count").innerHTML = `Quantidade de pessoas que achou bom: ${bomCount}`;
  document.getElementById("homens-count").innerHTML = `Quantidade de homens: ${homens}`;
  document.getElementById("mulheres-count").innerHTML = `Quantidade de mulheres: ${mulheres}`;
  document.getElementById("progress").style.width = `${progress}%`;
  document.getElementById("respondents-count").innerHTML = `${respondents.length} de 45 respondentes`;
}

// Event listener para o botão de envio
document.getElementById("btn").addEventListener("click", storeData);

// Event listener para os campos de idade, sexo e opinião

document.getElementById("idade").addEventListener("input", updateResults);
document.getElementById("sexo").addEventListener("change", updateResults);
document.getElementById("opniao").addEventListener("change", updateResults);

// Event listener para o botão de envio
document.getElementById("btn").addEventListener("click", storeData);
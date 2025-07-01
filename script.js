function jogoNumeroSecreto() {
  let numeroSecreto = Math.floor(Math.random() * 10) + 1;
  let tentativa;

  do {
    tentativa = parseInt(prompt("Adivinhe o número entre 1 e 10:"));

    if (isNaN(tentativa)) {
      alert("Por favor, digite um número válido.");
    } else if (tentativa < numeroSecreto) {
      alert("O número secreto é maior que " + tentativa);
    } else if (tentativa > numeroSecreto) {
      alert("O número secreto é menor que " + tentativa);
    } else {
      alert("Parabéns! Você acertou o número secreto: " + numeroSecreto);
    }

  } while (tentativa !== numeroSecreto);
}


function calculoMedia() {
  let quantidade = parseInt(prompt("Quantos números você quer digitar?"));
  
  if (!Number.isInteger(quantidade) || quantidade <= 0) {
    alert("Número inválido!");
    return;
  }

  let soma = 0;
  for (let i = 1; i <= quantidade; i++) {
    let numero = parseFloat(prompt("Digite o " + i + "º número:"));
    if (!isNaN(numero)) {
      soma += numero;
    } else {
      alert("Número inválido. Ignorado.");
    }
  }

  let media = soma / quantidade;
  alert("A média dos números é: " + media.toFixed(2));
}


function somaNumeros() {
  let n1 = parseFloat(prompt("Digite o primeiro número:"));
  let n2 = parseFloat(prompt("Digite o segundo número:"));

  if (isNaN(n1) || isNaN(n2)) {
    alert("Número inválido.");
    return;
  }

  let resultado = n1 + n2;
  alert("A soma é: " + resultado);
}


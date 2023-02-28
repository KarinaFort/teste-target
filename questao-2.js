//Questão 2: Dado a sequência de Fibonacci, onde se inicia por 0 e 1 e o próximo valor sempre será a soma dos 2 valores anteriores (exemplo: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34...), escreva um programa na linguagem que desejar onde, informado um número, ele calcule a sequência de Fibonacci e retorne uma mensagem avisando se o número informado pertence ou não a sequência.
const num = parseInt(prompt("Digite um número: "));
const fibonacci = [0, 1];

//o while fica repetindo até que o numero pertencente a lista de fibonacci seja maior ou igual ao numero digitado pelo usuario. Calculando o proximo numero da sequencia somando os 2 ultimos numeros da lista e adicionando eles ao final da lista.
function fibonaccii() {
    while (fibonacci[fibonacci.length - 1] < num) {
  const nextNum = fibonacci[fibonacci.length - 1] + fibonacci[fibonacci.length - 2];
  fibonacci.push(nextNum);

}

//Verifica se o numero digitado pelo usuário pertence ou nao a sequencia de numeros
if (fibonacci.includes(num)) {
  alert(num + " pertence à sequência de Fibonacci!");
} else {
  alert(num + " não pertence à sequência de Fibonacci!!");
}
}

//chamada da função 
fibonaccii();
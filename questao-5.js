//Questão 5:Escreva um programa que inverta os caracteres de um string. IMPORTANTE: a) Essa string pode ser informada através de qualquer entrada de sua preferência ou pode ser previamente definida no código; b) Evite usar funções prontas, como, por exemplo, reverse;
// o Usuário insere o que queremos inverter
let string = prompt("Digite uma frase ou uma palavra: ");

// Cria uma string para substituir na inversão
let inverterString = "";

// Adiciona cada caractere à nova string de traz para frente
for (let i = string.length - 1; i >= 0; i--) {
  inverterString += string[i];
}

// imprime a string invertida
console.log(inverterString);

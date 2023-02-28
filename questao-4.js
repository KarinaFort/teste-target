//Questão 4: Dado o valor de faturamento mensal de uma distribuidora, detalhado por estado: SP – R$67.836,43 RJ – R$36.678,66 MG – R$29.229,88 ES – R$27.165,48 Outros – R$19.849,53 Escreva um programa na linguagem que desejar onde calcule o percentual de representação que cada estado teve dentro do valor total mensal da distribuidora.   
const valorFaturamentoMensal = {
	SP:67.83643,
	RJ:36.67866, 
	MG:29.22988,
	ES:27.16548, 
	Outros:19.84953
};

//faz o calculo do total do faturamento 
const totalDoFaturamento = Object.values(valorFaturamentoMensal).reduce((acc, cur) => acc + cur, 0);

//faz o calculo do percentual do faturamento de cada estado
const percentualEstado = {};
for  (let estado in valorFaturamentoMensal) {
	const percentual = ((valorFaturamentoMensal[estado]/totalDoFaturamento)*100).toFixed(2);
	percentualEstado[estado] = `${percentual}$`
}

//imprime no console o resultado 
console.log(percentualEstado);
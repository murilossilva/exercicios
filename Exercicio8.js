/*Um	caixa	precisa	de	um	programa	que	o	auxilie	no	fornecimento	de	valores	com	o	mínimo	
de	cédulas/moedas	possíveis.	Monte	um	programa	que	seja	fornecido	o	valor	(inteiro)	a	
ser	fornecido	e	tenha	como	saída	o	total	de	cédulas	utilizadas,	nos	valores	de	100,	50,	20,	
10,	5,	2	e	1.*/

var troco, nota_de_100 = 0, nota_de_50 = 0, nota_de_20 = 0, 
nota_de_10 = 0, nota_de_5 = 0, nota_de_2 = 0, nota_de_1 = 0;

troco = prompt('Informe a quantidade de troco')

while (troco >= 100) {
    nota_de_100 = nota_de_100 + 1
    troco = troco - 100
}

while (troco >= 50) {
    nota_de_50 = nota_de_50 + 1
    troco = troco - 50
}

while (troco >= 20) {
    nota_de_20 = nota_de_20 + 1
    troco = troco - 20
}

while (troco >= 10) {
    nota_de_10 = nota_de_10 + 1
    troco = troco - 10
}

while (troco >= 5) {
    nota_de_5 = nota_de_5 + 1 
    troco = troco - 5
}

while (troco >= 2) {
    nota_de_2 = nota_de_2 + 1
    troco = troco - 2
}

while (troco >= 1) {
    nota_de_1 = nota_de_1 + 1
    troco = troco - 1
}

alert("Notas de 100: " + nota_de_100 + "\nNotas de 50: " + nota_de_50 + "\nNotas de 20: " + nota_de_20 +
"\nNotas de 10: " + nota_de_10 + "\nNotas de 5: " + nota_de_5 + "\nNotas de 2: " + nota_de_2 + 
"\nNotas de 1: " + nota_de_1);

console.clear()
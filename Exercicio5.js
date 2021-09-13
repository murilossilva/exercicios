var ano; 
var nascimento;
var pode_votar = 0;

ano = prompt("Informe o ano atual: ");
ano = parseInt(ano);
nascimento = prompt("Informe o seu ano de nascimento: ");
nascimento = parseInt(nascimento);

pode_votar = ano - nascimento;
pode_votar = parseInt(pode_votar);

if (pode_votar >= 18) {
    alert("Você pode e tem o dever de votar!");
}
else {
    alert("Você ainda não pode votar, volte aqui depois de algum tempo");
}
console.clear();
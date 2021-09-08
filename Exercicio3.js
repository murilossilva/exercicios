var ano;

ano = prompt("Informe o ano que você gostaria de saber se é bissexto: ");

if(ano % 4 == 0){
    alert("O ano é bissexto");
}
else{
    alert("Esse ano não é bissexto. Tente novamente!");
}
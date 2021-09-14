var imc, sexo, peso, altura, risco;

peso = prompt('Informe o seu peso');
peso = parseFloat(peso);
altura = prompt('Informe a sua altura');
altura = parseFloat(altura);
sexo = prompt('Você é homem ou mulher? [h/m]')

imc = peso / (altura * altura)

if (sexo == 'm') {
    if (imc < 19){
        alert("Você está abaixo do peso ideal!");
    }
    if (imc <= 23.9 && imc >= 19){
        alert("Você está no IMC ideal!");
    }
    if (imc <= 28.9 && imc >= 24){
        alert("Você está com sobrepeso!");
    }
    if (imc <= 38.9 && imc >= 29){
        alert("Você está obesa!");
    }
    if (imc > 39){
        alert("Você está com obesidade mórbida!");
    }
}
if (sexo == 'h') {
    if (imc < 20){
        alert("Você está abaixo do peso ideal!");
    }
    if (imc <= 24.9 && imc >= 20){
        alert("Você está no IMC ideal!");
    }
    if (imc <= 29.9 && imc >= 25){
        alert("Você está com sobrepeso!");
    }
    if (imc <= 39.9 && imc >= 30){
        alert("Você está obesa!");
    }
    if (imc > 43){
        alert("Você está com obesidade mórbida!");
    }
}
console.clear()
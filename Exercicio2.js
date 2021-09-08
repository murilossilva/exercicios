var number = [];
var i;

for (i=0; i<10; i++){
    number[i] = prompt("Insira um número inteiro: ")
}

var max = number.reduce(function(a, b){
    return Math.max(a,b)
});
var min = number.reduce(function(a, b){
    return Math.min(a,b)
});
alert("O valor máximo da sua lista é " + max);
alert("O valor mínimo da sua lista é " + min);
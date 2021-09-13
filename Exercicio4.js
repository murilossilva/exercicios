var nota;

nota = prompt("Digite a nota do aluno");
nota = parseFloat(nota);

if (nota > 6.0) {
    alert("O aluno está aprovado");
    console.clear
}
if (nota < 6.0 && nota >= 5.0) {
    alert("O aluno precisará fazer a prova de recuperação");
    console.clear
}
if (nota < 5.0) {
    alert("O aluno está reprovado");
    console.clear
}
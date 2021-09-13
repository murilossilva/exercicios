function novamente(){
    var preco_alcool = prompt ("Informe o preço do álcool: ");
    var preco_gasolina = prompt ("Informe o preço da gasolina: ");

    var preco_alcool = parseFloat(preco_alcool);
    var preco_gasolina = parseFloat(preco_gasolina);

    var valor = preco_alcool/preco_gasolina;

    if (valor > 0.7) {
        alert("É melhor abastecer com gasolina!");
    }

    if (valor < 0.7) {
        alert("É mais vantajoso abastecer o seu veículo com álcool!");
    }

    if (valor == 0.7) {
        alert("Pode abastacer com qualquer um dos dois combustíveis!");
    } 
}
var op;
do{
    novamente();
    op = prompt ("Gostaria de calcular novamente? [s/n]")
        if (op == "s"){
            alert("Ok, vamos lá!")
        }
        if (op == "n"){
            alert ("Obrigado. Volte sempre!");
            console.clear();
        }
}while (op == "s");
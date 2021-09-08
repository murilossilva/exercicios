var preco_alcool, preco_gasolina, valor;

preco_alcool = prompt ("Informe o preço do álcool: ");
preco_gasolina = prompt ("Informe o preço da gasolina: ");

preco_alcool = parseFloat(preco_alcool);
preco_gasolina = parseFloat(preco_gasolina);

valor = preco_alcool/preco_gasolina;

if (valor > 0.7) {
    alert("É melhor abastecer com gasolina!");
}

if (valor < 0.7) {
    alert("É mais vantajoso abastecer o seu veículo com álcool!");
}

if (valor == 0.7) {
    alert("Pode abastacer com qualquer um dos dois combustíveis!")
}
var candidato_1, candidato_2, candidato_3, brancos, nulos, porcentagem_1, porcentagem_2, porcentagem_3,
porcentagem_brancos, porcentagem_nulos, total;

candidato_1 = prompt("Insira o número de votos do primeiro candidato");
candidato_1 = parseInt(candidato_1);
candidato_2 = prompt("Insira o número de votos do segundo candidato");
candidato_2 = parseInt(candidato_2);
candidato_3 = prompt("Insira o número de votos do terceiro candidato");
candidato_3 = parseInt(candidato_3);
brancos = prompt("Insira o número de votos brancos");
brancos = parseInt(brancos);
nulos = prompt("Insira o número de votos nulos");
nulos = parseInt(nulos);

total = candidato_1 + candidato_2 + candidato_3 + brancos + nulos;

porcentagem_1 = (candidato_1 / total) * 100;
porcentagem_2 = (candidato_2 / total) * 100;
porcentagem_3 = (candidato_3 / total) * 100;
porcentagem_brancos = (brancos / total) * 100;
porcentagem_nulos = (nulos / total) * 100;

alert("Foram computados ao todo " + total + "votos");
alert("Candidato 1: " + porcentagem_1 + "%\nCandidato 2: " + porcentagem_2 + "%\nCandidato 3: " + porcentagem_3 + 
"%\nBrancos: " + porcentagem_brancos + "%\nNulos: " + porcentagem_nulos + "%");
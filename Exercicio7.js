var Celsius = 0, Fahrenheit = 0;

Fahrenheit = prompt("Informe a temperatura em Fahrenheit a ser convertida para Celsius" );
Fahrenheit = parseFloat(Fahrenheit);

Celsius = (Fahrenheit - 32) * (5/9);
Celsius = parseFloat(Celsius.toFixed(2))

alert("A temperatura em graus Celsius corresponde à " + Celsius + "°C.");
console.clear();
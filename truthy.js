console.log("Alguns valores truthy")
true ? console.log("truthy") : console.log("falsy")  // true é truthy
({}) ? console.log("truthy") : console.log("falsy") // objeto vazio é truthy
([]) ? console.log("truthy") : console.log("falsy") // array vazio é truthy
1n ? console.log("truthy") : console.log("falsy") // 1n é truthy
17 ? console.log("truthy") : console.log("falsy") // número !== de 0 é truthy
new Date() ? console.log("truthy") : console.log("falsy") // objeto é truthy
3.4 ? console.log("truthy") : console.log("falsy") // número decimal é truthy
-99 ? console.log("truthy") : console.log("falsy") // número negativo é truthy
Infinity ? console.log("truthy") : console.log("falsy") // infinito positivo é truthy
-Infinity ? console.log("truthy") : console.log("falsy") // infinito negativo é truthy
"Rocketseat" ? console.log("truthy") : console.log("falsy") // String com valor é truthy
"🚀 💺" ? console.log("truthy") : console.log("falsy") // Mesmo exemplo de cima!
" " ? console.log("truthy") : console.log("falsy") // String com espaço em branco é truthy (cuidado)!
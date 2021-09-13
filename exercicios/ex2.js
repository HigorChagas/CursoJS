const nome = 'Higor Nascimento';
const sobrenome = 'Chagas';
const idade = 25;
const peso = 84;
const altura = 1.95;
const anoAtual = 2021;
let imc; // peso / (altura * altura)
let anoNascimento;

imc = peso / (altura * altura);
anoNascimento = anoAtual - idade;

//Template strings.
console.log(`Meu nome é ${nome} das ${sobrenome}. Tenho ${idade} anos de idade. Meu peso é: ${peso}Kg e meu IMC é: ${imc}. Eu nasci no ano de ${anoNascimento}`);

const nome = 'Carlos Mozart';
const sobrenome = 'Bandeira';
const idade = '31';
const peso = '95';
const alturaEmMetros = 1.74;
let imc = peso / (alturaEmMetros^2); // peso / (altura * altura)
let anoNascimento = 2022 - idade;
console.log(`${nome} ${sobrenome} tem ${idade} anos, e pesa ${peso} kilos e tem ${alturaEmMetros} m de altura e seu IMC é de ${imc}`);
console.log(`${nome} nasceu em ${anoNascimento}`);
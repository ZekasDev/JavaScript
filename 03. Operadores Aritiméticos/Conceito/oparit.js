var num1 = prompt('Digite o valor de um número: ');
var num2 = prompt('Digite o valor de outro número: ');

num1 = parseInt(num1)
num2 = parseInt(num2)

document.write("A soma entre " + num1 + " e " + num2 + " é : " + (num1 + num2) + '<br />'); 
document.write("A subtração entre " + num1 + " e " + num2 + " é : " + (num1 - num2) + '<br />'); 
document.write("O produto entre " + num1 + " e " + num2 + " é : " + (num1 * num2) + '<br />'); 
document.write("O quociente entre " + num1 + " e " + num2 + " é : " + (num1 / num2) + '<br />'); 
document.write("O módulo entre " + num1 + " e " + num2 + " é : " + (num1 % num2) + '<br />');
document.write("O incremento de " + num1 + " é : " + (++num1) + '<br />'); 
document.write("O decremento de " + --num1 + " é : " + (--num1) + '<br />'); 

// sem o parêntese da operação de precedência de soma entre num1 e num2, haverá uma concatenação

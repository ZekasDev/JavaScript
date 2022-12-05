// Solicitar o nome da pessoa;
// Solicitar a altura da pessoa em centímetros;
// Solicitar o peso da pessoa em kg;
// Transformar as informações em "FLOAT"
// Converter a altura em 'metro' (dividir o valor recebido para ALTURA por 100)
// Calcular o IMC da pessoa (IMC = peso / altura * altura)
// Após identificar o IMC, o sistema deverá classificar em faixas utilizando os critérios:
/* 
    IMC < 16 / Baixo peso muito grave
    IMC entre 16 e 16.99 / Baixo peso grave
    IMC entre 17 e 18.49 / Baixo peso
    IMC entre 18.50 e 24.99 / Peso normal
    IMC entre 25 e 29.99 / Sobrepeso
    IMC entre 30 e 34.99 / Obesidade grau I
    IMC entre 35 e 39.99 / Obesidade grau II
    IMC maior que 40 / Obesidade grau III
*/

// Ao término, imprimir a seguinte expressão:

// "<NOME> possui Índice de Massa Corporal igual a <IMC>, sendo classificado como <CLASSIFICACAO>."

var nome = prompt('Digite aqui seu nome: ')
var altura = prompt('Digite aqui sua altura em centímetros: ')
var peso = prompt('Digite aqui seu peso em Kg: ')

altura = parseFloat(altura)
peso = parseFloat(peso)

altura /= 100

var IMC = peso / (altura * altura)
var resultado

if (IMC < 16) {
    resultado = 'baixo peso muito grave'
} else if (IMC > 16 && IMC < 16.99) {
    resultado = 'baixo peso grave'
} else if (IMC > 17 && IMC < 18.49) {
    resultado = 'baixo peso'
} else if (IMC > 18.50 && IMC < 24.99) {
    resultado = 'peso normal'
} else if (IMC > 25 && IMC < 29.99) {
    resultado = 'sobrepeso'
} else if (IMC > 30 && IMC < 34.99) {
    resultado = 'obesidade grau I'
} else if (IMC > 35 && IMC < 39.99) {
    resultado = 'obesidade grau II'
} else {
    resultado = 'obesidade grau III'
}

document.write(nome + ' possui Índice de Massa Corporal: ' + IMC.toFixed(2) + ' , sendo classificado como: ' + resultado)
var num1 = prompt('Digite aqui um número: ')
var num2 = prompt('Digite outro número')
var operacao = prompt('Digite soma ou subtração')


function resposta(num1, num2, operacao) {
    if(operacao == 'soma') {
        return (num1 + num2)
    } else {
        return (num1 - num2)
    }
     
}


document.write('O resultado é: ' + resposta(parseInt(num1), parseInt(num2), operacao))
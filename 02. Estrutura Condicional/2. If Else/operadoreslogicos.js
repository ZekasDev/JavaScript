

// true && true = true
// true && true && false = false
// true || true || false = true
// false || false || false = false
// !true = false || !false = true
/* 

if (2 == 2 || 3 >= 1 || 'a' == 'b') {
    document.write('Verdadeiro')
} else {
    document.write('Falso')
} 

*/

var nota = prompt('Digite a nota do aluno: ')
var faltas = prompt('Digite a quantidade de faltas: ')
var media = 7
var faltas_maximas = 15

/*
if (nota >= media && faltas <= faltas_maximas) {
    document.write('Aprovado')
} else {
    document.write('Reprovado')
}
*/

var resultado = (nota >= media && faltas <= faltas_maximas) ? 'Aprovado' : 'Reprovado'
document.write(resultado)
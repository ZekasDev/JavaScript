
/* 
var lista_frutas = ['Banana', 'Maçã']

// Incluir elemento no final do Array
lista_frutas.push('Uva')

// Incluir elemento no início do Array
lista_frutas.unshift('Morango')

// Excluir elemento no inicio/final do Array

lista_frutas.pop()/lista_frutas.shift()

// Vai printar o estado inicial do Array

console.log(lista_frutas)

*/

var lista_coisas = []
lista_coisas['Frutas'] = ['Banana', 'Maçã']
lista_coisas['Pessoas'] = ['Toalhinha', 'Zekinha']

lista_coisas['Frutas'].push('Morango')
lista_coisas['Pessoas'].push('Beterraba')

console.log(lista_coisas)

// Frutas -> Banana, maça e Morango
// Pessoas -> Toalhas, Zekas e Beterraba

lista_coisas['Frutas'].shift() // Frutas -> Maçã e Morango
lista_coisas['Pessoas'].shift() // Pessoas -> Zekas e Btinha
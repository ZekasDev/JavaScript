// var listaConvidados = ["Zekinha", "Beterraba", "Toalhinha", "Felício"];

var listaConvidados = []

listaConvidados['a'] = 'Zekinha'
listaConvidados[10] = 'Toalhinha'
listaConvidados['zebra'] = 'Beterraba'
listaConvidados[-1] = 'Felicio'

console.log(listaConvidados)

for(var x in listaConvidados) {
    console.log('Índice ' + x + ' valor ' + listaConvidados[x] )
}
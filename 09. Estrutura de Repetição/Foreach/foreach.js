var listaFuncionarios = ['Zekas', 'Celzinho', 'Toalhas', 'Pablo']

var f = function(valor, indice) {
    console.log(valor, indice)
}
listaFuncionarios.forEach(f)

//Foreach trabalha apenas com valores numericos

/*listaFuncionarios.forEach((valor, indice)=>{
    console.log(valor, indice)
})
*/

/*
console.log(listaFuncionarios)
document.write(listaFuncionarios[2])
listaFuncionarios.forEach(function(valor, indice, array) {
    //lógica executada para cada índice do array
    console.log('indice ' + indice + ' | valor: ' + valor)
    
    if(valor == 'Toalhas') {
        array[indice] = 'Felicio'
    }
})
console.log(listaFuncionarios)
document.write('<br/>' + listaFuncionarios[2])
*/
var lista_frutas = ['Banana', 'Maçã', 'Morango', 'Uva']

var auxiliar = lista_frutas.indexOf('Morango')

if(auxiliar === -1) {
    console.log('Elemento não existe')
} else {
    console.log('Elemento existe e está na posição: ' + auxiliar)
}



// indexOf() é case sensitive, e caso não encontre nada, retorna -1
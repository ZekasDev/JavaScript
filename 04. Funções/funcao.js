//void não fornece retorno para quem fez a chamada
//retorno fornece informação processada pela função

/*
var largura = prompt('Digite a largura do terreno em metros')
var comprimento = prompt('Digite o comprimento do terreno em metros')

var area = calcularAreaTerreno(largura, comprimento)

document.write('A área do terreno é de ' + area + ' metros quadrados') 

function calcularAreaTerreno(largura, comprimento) {

    //lógica 

    var area = largura * comprimento
    
    return area

}
*/

function soma(a, b) {
  // b = b === undefined ? 0 : b // substituria 'undefined' por 0 caso não declaremos um valor pra b
  return a + b;
}
console.log(soma(7, 7, 8, 15)); // JS desconsidera os parâmetros adicionais

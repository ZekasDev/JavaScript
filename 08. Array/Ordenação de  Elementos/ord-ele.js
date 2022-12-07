var lista_frutas = ["Banana", "Maçã", "Uva", "Morango", "Laranja", "Abacate"];

console.log(lista_frutas.sort());

var lista_numero = [5, 1, 10, 22, 41, 101, 8, 9, 520];
// Se todos os elementos forem strings representando numeros, o sort(nomeDaFuncao) vai funcionar

function ordenaNumeros(a, b) {
  return a - b;
}

console.log(lista_numero.sort(ordenaNumeros));

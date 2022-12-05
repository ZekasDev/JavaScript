// Se idade for maior ou igual a zero e menor que 15, exibir "Criança"
// Se idade for maior ou igual a quinze e menor que 30, exibir "Jovem"
// Se idade for maior ou igual a trinta e menor que 60, exibir "Adulto"
// Se idade for maior ou igual a 60, exibir "Idoso"

var idade = prompt('Digite a idade: ')
if (idade >= 0 && idade < 15) {
    console.log("Crianças")
    document.write('Criança')
} else if (idade >= 15 && idade < 30) {
    console.log("Jovem") 
    document.write('Jovem')
} else if (idade >= 30 && idade < 60) {
    console.log("Adulto")
    document.write('Adulto')
} else {
    console.log("Idoso")
    document.write('Idoso')
}
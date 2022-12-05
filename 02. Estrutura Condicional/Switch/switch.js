var parametro = prompt('Digite um numero: ')

switch (parseInt(parametro)) {

    case 1: 
        //se parametro === 1
        document.write('Parametro 01')
        break
    case 2:
        //se parametro === 2
        document.write('Parametro 02')
        break
    default: 
        document.write('Default')
        //se parametro não encontrado
}
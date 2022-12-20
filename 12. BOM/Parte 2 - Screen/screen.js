var largura = window.screen.availWidth
var altura = window.screen.availHeight 

//document.write('Largura do navegador é: ' + largura + '<br/>')
//document.write('Altura do navegador é: ' + altura + '<br/>')

if(largura < 500) {
    document.write('Lógica para Impressão do menu versão Mobile')
} else {
    document.write('Lógica para Impressão do menu versão Web')
}
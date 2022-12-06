//propriedade length: retorna a quantidade de caracteres 
document.write('Daniel Dourado'.length)
document.write('<hr />')
//propriedade charAt(): retorna o valor contido na posição
document.write('Daniel Dourado'.charAt(7))
document.write('<hr />')
//propriedade indexOf(): retorna a primeira ocorrencia do caractere
var nome = '    Zekinha Barreto e o Irmão    '
document.write(nome.indexOf('i'))
document.write('<hr />')
//propriedade variavel.replace('disso', 'para isso')
document.write(nome.replace('o Irmão', 'Toalhas God'))
document.write('<hr />')
//propriedade substr(pos. inicial, valor x): a partir da pos.inicial vamos recuperar x caracteres
document.write(nome.substring(8, 4)) 
document.write('<hr />')
//propriedade variavel.toLowerCase/toUpperCase: transforma tudo em minúsculo/maiúsculo
document.write(nome.toUpperCase())
document.write('<hr />')
//propriedade corta os espaços vazios no início e no fim da String
document.write('-' + nome.trim() + '-')
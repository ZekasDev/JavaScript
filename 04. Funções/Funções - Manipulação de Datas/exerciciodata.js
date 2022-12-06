var data = new Date();

// adicionar ou remover dias

/*
document.write(data.toString())
data.setDate(data.getDate() + 1) // add/remove um dia
document.write('<hr />')
document.write(data.toString()) // imprimindo um dia a mais

document.write('<hr />')

document.write(data.toString())
data.setMonth(data.getMonth() + 1) // add/remove um mês
document.write('<hr />')
document.write(data.toString()) // imprimindo um mês a mais

document.write('<hr />')

document.write(data.toString())
data.setFullYear(data.getFullYear() + 1) // add/remove um ano
document.write('<hr />')
document.write(data.toString()) // imprimindo um ano a mais
*/

// 28/09/1983

var data1 = new Date(1983, 08, 28);

// 05/12/2022

var data2 = new Date(2022, 11, 5);

document.write(data1.toString()); //transforma data1 em string
document.write("<hr />");
document.write("<br />");
document.write(data2.toString()); //transforma data2 em string
document.write("<hr />");
document.write("<br />");
document.write(data1.getTime()); //recupera MS de 01/01/1970 até data1
document.write("<hr />");
document.write(data2.getTime()); //recupera MS de 01/01/1970 até data2
document.write("<hr />");

//Encontrar qntd de MS existente entre Data1 e Data 2

var ms_entre_datas = Math.abs(data1.getTime() - data2.getTime()); // declarando uma variável que é a diferença de MS até 05/12/22 e até 28/09/83
document.write(ms_entre_datas);
document.write("<hr />");
var ms_por_dia = 1 * 24 * 60 * 60 * 1000; // calculo de quantos MS existem num dia
var vida_do_zekas = ms_entre_datas / ms_por_dia; // quociente entre MS de vida do zekas por MS de um dia
document.write(vida_do_zekas);
document.write("<hr />");

vida_do_zekas = vida_do_zekas / 365; // quociente de total de dias por um ano

document.write('A idade do Zekas é: ' + Math.round(vida_do_zekas) + ' anos de muita loucura'); // idade do zekas

//Math.abs = valor absoluto de uma diferença
//conversão data para algo calculável

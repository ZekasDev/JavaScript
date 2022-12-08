//Criando uma tabuada de 1 a 10 com Laços Encadeados

var x = 1;
var y = 1;

while (x <= 10) {
  while (y <= 10) {
    document.write(x + " x " + y + " = " + x * y + "<br/>");
    y++;
  }

  document.write("<hr />");

  y = 0;
  x++;

}

/*
for(var y = 1; y <= 10; y++) {
    for(var x = 1; x <= 10; x++) {
        document.write(y + ' x '+ x + ' = ' + (1 * x) + '<br/>' )
    }

    document.write('<hr/>')

}
*/

var x = 1;

document.write("Início <br />");

while (x <= 10) {
    
  document.write(x + "<br />");

  if (x === 7) {
    break;
  }

  x += 1;
}

document.write("Fim <br />");

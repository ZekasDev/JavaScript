var data = new Date();

document.write(data.getDate());
document.write("<hr />");
document.write(data.getMonth() + 1);
document.write("<hr />");
document.write(data.getFullYear());
document.write("<hr />");
document.write(data.getHours());
document.write("<hr />");
// 05/12/2022
document.write(
    data.getDate() + "/" + (data.getMonth() + 1) + "/" + data.getFullYear()
    );
    
// .get RECUPERA 
// .set SETAGEM

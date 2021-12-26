let mensaje = console.log("Bienvenido");
let nombreEmpresa = prompt("Ingese el nombre de la empresa");

var renta_anual = prompt("Ingrese la renta anual");
var renta_cincoMeses = prompt("Ingrese el promedio de renta de los últimos 5 meses");

let mensajeSalida = "Bienvenido" + " " + nombreEmpresa + "," + " " + " tu renta anual es de: USD." + renta_anual + "," + " " + "tu renta promedio en los últimos cinco es de: USD."  + renta_cincoMeses;
alert(mensajeSalida);

var sumaRenta = parseInt (renta_anual+renta_cincoMeses);

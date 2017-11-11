"use strict";
/*crear un metodo que reciba un boolean y dos nmeros si es true va multiplicar y si es false va a restar
crear un metodo que reciba una cadena si la cadena es mayor a 4 letras va decir cadena larga y si es menor va decir cadena corta
crear un metodo que imprima un array enumerando cada item (el array debe de ser solo de cadenas y no debe estar enumerado ejemplo ["pedro","julio","Tomas"] de 10 datos)
*/
var numa = 100;
var numb = 232;
var numc = 454;
function suma(num1, num2, num3) {
    var resultado = num1 + num2 + num3;
    var msg = 'Total =' + resultado;
    console.log(msg);
}
suma(numa, numb, numc);
var boleano;
var entrada;
var entrada02;
function operaciones(bolean, entra, entra2) {
    var resultado = 0;
    if (bolean) {
        resultado = entra * entra2;
    }
    else {
        resultado = entra - entra2;
    }
    console.log(resultado);
}
operaciones(true, 2, 2);
operaciones(true, 4, 2);
var cadena1;
var cadena;
function letras(caden, caden1) {
    var resultado;
    if (String) {
        resultado = caden1;
    }
    else {
        resultado = caden;
    }
    console.log(resultado);
}

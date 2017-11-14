/*crear un metodo que reciba un boolean y dos nmeros si es true va multiplicar y si es false va a restar
crear un metodo que reciba una cadena si la cadena es mayor a 4 letras va decir cadena larga y si es menor va decir cadena corta
crear un metodo que imprima un array enumerando cada item (el array debe de ser solo de cadenas y no debe estar enumerado ejemplo ["pedro","julio","Tomas"] de 10 datos)
*/


    let numa=100;
    let numb=232;
    let numc=454;
    
    function suma(num1:number,num2:number,num3:number){
        let resultado = num1+num2+num3;
        let msg='Total =' + resultado;
        console.log(msg);
    }

    suma(numa,numb,numc);
    


    let boleano:boolean;
    let entrada:number;
    let entrada02:number;

    function operaciones(bolean:boolean,entra:number,entra2:number) {
        let resultado:number=0;
        if (bolean) {
            resultado=entra*entra2;
        } else {
            resultado=entra-entra2;
        }
        console.log(resultado);
    }
    
    operaciones(true,2,2);
    operaciones(true,4,2);

    let cadena1:String;
    let cadena:String;

    function letras(cadena:String,cadena1:String){
        let resultado:String="";
        if (cadena.length>=4) {
            console.log("cadena larga");
        } else {
            console.log("Cadena corta");
        }

    }
    
    letras("k", "");
    
    let number0:string[];
    let number1:number[];

    function iten(number0:string[],number1:number[]){
        console.log(" Ejemplo: " +number0[0] + " " +number1[0]);
     
    }
    iten(["Pedro","Luis","Tomas"],[1,2,3]);
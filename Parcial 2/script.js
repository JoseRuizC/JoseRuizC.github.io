console.log("js cargado");


let edad; //declaracion
edad=18; //asignacion
let nombre="Juan"; //declaro y asigno
console.log("Mi nombre es " +nombre); 
nombre=nombre;
console.log(nombre);


var apellidoPaterno="De la cruz";
console.log("Mi apellido es "+ apellidoPaterno);

var preferencia="tacos";
if (true)
{
     var preferencia="pizza";
     console.log(preferencia);
}
console.log(preferencia);
//var se utiliza para variable globales
//let se utiliza para variable locales
//que su alcance es limitado solo a un bloque de codigo.

const sexo="F";
console.log(sexo);
//sexo="M" //variable de tipo constante nos permite que
//la asignacion de nuevo valores
//Uncaught TypeError: Assignment to constant variable. at script.js:28:5

let template=`Mi nombre es ${nombre} y mi apellido es ${apellidoPaterno} y mi edad es ${edad}`;
console.log(template);
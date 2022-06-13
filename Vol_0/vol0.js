"use strict"

//& Ejercicio 1
//& Escribir un programa que permiita leer la edad y el peso de una persona y posteriormente imprimirla

function personGenerator() {											
	return {															
	  edad: 0,
	  peso: 0,																

	  meteDatos: function (newEdad, newPeso) {							
		 this.edad = newEdad;											
		 this.peso = newPeso;	
	  },																
	};																	
  };
	
const persona = personGenerator();
persona.meteDatos(19,100);

console.log(`Ejercicio 1: Tiene ${persona.edad} años y pesa ${persona.peso} Kilos`);


//& Ejercicio 2
//& Dados 2 valores de entrada imprima siempre la division del mayor entre el menor.

function divideSort(num1, num2) {
	let divideError;
	let resultado;
	try{
		resultado =  num1 > num2 ? num1/num2 : num2/num1;
		
		if (!resultado){		
			//! gestion de errores
			divideError = new Error('NaN - Seguramente los dos numeros son 0');
			divideError.codigo = 99;
			throw divideError;
		} 
		if (resultado===Infinity){				
			//! gestion de errores
			divideError = new Error('Infinity - No se puede dividir entre 0');
			divideError.codigo = 98;
			throw divideError;
		}
		
	} catch (error){
		console.log('Se ha producido un error:',divideError );
		resultado = `Error numero ${divideError.codigo}`
	}
	return resultado;


};
console.log(`Ejercicio 2:`)
console.log(`NaN: ${divideSort(0,0)}`);
console.log(`Infinity: ${divideSort(2,0)}`);
console.log(`Dividir 2 y 4: ${divideSort(2,4)}`);

//& Ejercicio 3
//& Escribir un programa que lea tres numerosy indique cual es el mayot

function numeroMayor(a,b,c){
	let mayorError;
	try {
		if (typeof a !== "number" || typeof b !== "number" || typeof c !== "number"){
			//! gestion de errores
			mayorError = new Error(' Solo puedo comparar numeros');
			mayorError.codigo = 99;
			throw mayorError;
			return "Error";
		}
		if (a > b && a > c ){
			return a;
		} else if (b > a && b > c){
			return b;
		} else {
			return c;
		}
	} catch (error) {
		console.error("Se ha producido un error:",mayorError);
		return `Error numero ${mayorError.codigo}`;
	}
}

console.log("Ejercicio 3:")
console.log(numeroMayor("6", 10, 3));

//& Ejercicio 4
//& Escribir un programa que lea 3 numeros los cuales significan una fecha (dia/mes/año) y si es valida escribe el mes con letras


//todo NO TERMINADO

function compruebaMes(dia,mes,ano){
	let retorno;
	let fechaError;
	try {
		const fecha = new Date(`${mes}-${dia}-${ano}, 7:00:00`);
		if (isNaN(fecha)){
			fechaError = new Error('Fecha invalida');
			fechaError.codigo = 99;
			throw fechaError;

		} else {
			retorno = new Intl.DateTimeFormat('es-ES', { month: 'long'}).format(fecha);

		}
	} catch (error) {
		retorno =`Se ha producido un error (${error.message}) ${error.name} - ${error.codigo}`;
	}
	
	return retorno
}

console.log("Ejercicio 4:")
console.log(compruebaMes(30,1,1976));

//& Ejercicio 5
//& introduce la edad y dice si puedes votar o no

const puedoVotar = (edad) => edad >= 18 ? 'Si puedes Votar' : 'No puedes votar'
console.log("Ejercicio 5:")
console.log(puedoVotar(1));


//& Ejercicio 6
//& mira si es par o impar

//? Modo 1
/* function miraNumero (num){
	const numero;
	if (num % 2 === 0){
		return `${num} es par`;
	} else {
		return `${num} es impar`;
	}
} */

//? Modo 2 Acortado
const miraNumero = (num) => num===0 ? `${num} no es par ni impar` : num%2 === 0 ? `${num} es par` : `${num} es impar`;

console.log("Ejercicio 6");
console.log(miraNumero(0));
console.log(miraNumero(1));
console.log(miraNumero(8));


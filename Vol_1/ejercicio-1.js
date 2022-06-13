/* #################
 * ## Ejercicio 1 ##
 * #################
 *
 * Crea una variable que almacene tu nombre y otra variable que almacene
 * tu número favorito.
 *
 *  - Muestra ambos valores por consola.
 *
 *  - Cambia tu nº favorito por cualquier otro nº.
 *
 *  - Muestra por consola el resultado del cambio.
 *
 *  - Muestra por consola el tipo de las variables definidas.
 *
 */



"use strict"

//? Modo 1
const miPersona = {
	nombre:"",
	numFav:0,
	cambiaNombre: function(nom){
		this.nombre = nom;
	},

	cambiaNumero: function(num){
		this.numFav = +num;
	},

	diTipos: function(){
		
		return [typeof (this.nombre),typeof (this.numFav)];
		//todo Quiero retornar un objeto, el this no puede vivir en un objeto?
		// return {
		//	this.nombre:typeof (this.nombre);
		//	this.numFav:typeof (this.numFav);
		//} 
	}
}; 

//todo Intento de acortar
/* const miPersona = {
	nombre:"",
	numFav:0,
	cambiaNombre: (nom) => this.nombre = nom,

	cambiaNumero: (num) => this.numFav = +num,

	diTipos: () => [typeof (this.nombre),typeof (this.numFav)],
		
}; */


miPersona.nombre = "PEPE";
miPersona.numFav = 199;

console.log("1:",miPersona)
miPersona.cambiaNombre("Juan");
miPersona.cambiaNumero(69);
console.log('Tipos', miPersona.diTipos());
console.log("2:",miPersona)

"use strict";
//& Ejercicio 1 ##
//& * Dada la siguiente API, obtén un array con el nombre de todos los municipios de la
//& * provincia de Lugo.
//& * Además, el nombre de los municipios debe estar ordenado por orden alfabético inverso.
//& * - Resuélvelo con async / await.
//& * API: https://www.el-tiempo.net/api

/* const urlApi = "https://www.el-tiempo.net/api/json/v2/municipios";


let array;
let array2;

async function getCharacter(url) {

    let response = await fetch(url);
    let data = await response.json(response);

	array = Object.values(data).filter((item)=>{
		return item.NOMBRE_PROVINCIA === "Lugo";
	}).map((item)=>{
		return item.NOMBRE
	}).sort().reverse();
	
}

getCharacter(urlApi).then(()=>{
	
	console.log('Ejercicio 1:',array )
	array2 = [...array];
});

const retrasa = setInterval(() => {
	console.log('array2', array2)
	clearInterval(retrasa)
}, 5000); */

//& Ejercicio 2
//& Obtener un array con las series de las 5 primeras páginas API: https://www.episodate.com/api
/* 
let arrayTv;

const urlTv = "https://www.episodate.com/api/most-popular?page="

async function getSeries(urlApi,page){
	let response = await fetch(urlApi+page);
	let datos = await response.json();
	arrayTv = Object.values(datos.tv_shows).map((itemTv) =>{ 
		return itemTv.name;
	})
	
}

console.log("Ejercicio 2:")
for (let index = 0; index < 5; index++) {
	getSeries(urlTv,index).then(() => {
		console.log(`Pagina ${index+1}`);
		console.log(arrayTv);
		
	});
} */

//& Ejercicio 3
//& Obtener un array con los todos personajes. Debe existir la posibilidad de filtrar por "status" y por "species".
//& ¡No utilizar el método filter!
//& API: https://rickandmortyapi.com/


const urlRick = `https://rickandmortyapi.com/api/character/?page=`;
const urlRickPages = "https://rickandmortyapi.com/api/character/";

async function getRickPages(urlApi){
	try {
		let paginas;
		let response = await fetch(urlApi);
		let datos = await response.json();
		return paginas = datos.info.pages;
		
	} catch (error) {
		console.log(error)
	}
}

async function getRick(urlApi,page){
	let response = await fetch(urlApi+page);
	let datos = await response.json();
	return datos.results
	
	
};

console.log("Ejercicio 3:")


console.log(getRickPages(urlRickPages));


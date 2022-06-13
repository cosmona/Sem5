"use strict";

function comprueba(numCorrecto,numUser){ 
	return numCorrecto == numUser;
};

function concurso(intentosPermitidos){
	let numCorrecto = Math.floor(Math.random() * 100+ 1);
	let intentos = 0;
	let resultado = false;
	let numUser = 0;
	do {
		intentos++;
		console.log(`El numero correcto es ${numCorrecto}`);
		console.log(`Intento: ${intentos}`);
		numUser = +window.prompt( `Introduce un número del 0 al 100 - Intento ${intentos} de ${intentosPermitidos}`);
		resultado = comprueba(numCorrecto,numUser);
		if (resultado){
			alert(`Has ganado!!`);
			alert(`Payaso!!`);
			break;
		} else if (numUser < numCorrecto){
			alert(`Te has quedado corto.`);
		} else {
			alert(`Te has pasado.`);
		}

	} while (intentos < intentosPermitidos);

	if (intentos >= intentosPermitidos){ 
		alert(`${intentosPermitidos} intentos, has perdido, payaso!!`);
		alert(`El numero elegido era el ${numCorrecto} ,tontolaba`);
	};
};

concurso(10);

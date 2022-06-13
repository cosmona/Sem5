"use strict";


const puntuaciones = [                                                                  //* puntuaciones
  {
    equipo: "Toros Negros",
    puntos: [1, 3, 4, 2, 10, 8],
  },
  {
    equipo: "Amanecer Dorado",
    puntos: [8, 5, 2, 4, 7, 500, 3],
  },
  {
    equipo: "Águilas Plateadas",
    puntos: [5, 8, 0, 0, 0, 0],
  },
  {
    equipo: "Leones Carmesí",
    puntos: [5, 4, 3, 1, 2, 3, 4],
  },
  {
    equipo: "Rosas Azules",
    puntos: [2, 1, 3, 1, 4, 3, 4],
  },
  {
    equipo: "Mantis Verdes",
    puntos: [1, 4, 5, 1, 3],
  },
  {
    equipo: "Ciervos Celestes",
    puntos: [3, 5, 1, 1],
  },
  {
    equipo: "Pavos Reales Coral",
    puntos: [2, 3, 2, 1, 4, 3],
  },
  {
    equipo: "Orcas Moradas",
    puntos: [2, 3, 3, 4],
  },
];

/* const sumaPuntos = (puntos, numero) => {			                                        // callBack , el mismo que el de abajo pero sin reducir					
  return puntos + numero;											
}; */

const sumaPuntos = (puntos, numero) =>  puntos + numero;											          //* callBack					



//^ Modo 1

let element;
let retorno = [];
let max = 0;
let min = 100;
let maxNombre;
let minNombre;

for (element in puntuaciones){

  if (puntuaciones[element].puntos.reduce(sumaPuntos, 0 ) > max){                   //* comprueba si la suma de elementos (callback funcion) supera el maximo 
    max = puntuaciones[element].puntos.reduce(sumaPuntos, 0 );
    maxNombre = puntuaciones[element].equipo;
  }
  
  if (puntuaciones[element].puntos.reduce(sumaPuntos, 0 ) < min){                   //* comprueba si la suma de elementos (callback funcion) supera el minimo
    min = puntuaciones[element].puntos.reduce(sumaPuntos, 0 );
    minNombre = puntuaciones[element].equipo;
  }

}

console.log(maxNombre,max)
console.log(minNombre,min)

//^Modo 2: Metodos

function mapea(puntuaciones){
  puntuaciones.map((equipo) => equipo.suma = equipo.puntos.reduce(sumaPuntos,0));       //* recorre el array con .map y le aplica reduce con un callback a sumaPuntos creando un 
  return puntuaciones.sort((a,b)=> b.suma  - a.suma);                                   //* nuevo objeto suma, devuelve el arrayu ordenado .sort
};

let puntuaciones2 = mapea(puntuaciones);
console.log(`${puntuaciones2[0].equipo} - ${puntuaciones2[0].suma}`)
console.log(`${puntuaciones2[puntuaciones2.length-1].equipo} - ${puntuaciones2[puntuaciones2.length-1].suma}`)


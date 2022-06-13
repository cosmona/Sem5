"use strict";

const names = [
  "A-Jay",
  "Manuel",
  "Manuel",
  "Eddie",
  "A-Jay",
  "Su",
  "Reean",
  "Manuel",
  "A-Jay",
  "Zacharie",
  "Zacharie",
  "Tyra",
  "Rishi",
  "Arun",
  "Kenton",
];

//^ Modo 1 funcion que se ejecuta en el .filter pero no funcion pura?
function buscaDuplicados(item, index){
  return names.indexOf(item) === index;
}

let arraySinDuplicados = names.filter(buscaDuplicados);
console.log("Modo 1:", arraySinDuplicados);


//^ Modo 2 ** pasando todo el array a la funcion (pura) y una funcion de flecha en el .filter
function buscaDuplicados2(names){
  return names.filter((item, index) => names.indexOf(item) === index);
}

console.log("Modo 2:", buscaDuplicados2(names));


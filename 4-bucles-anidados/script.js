"use strict";

const catalogo = [
  "margarita",
  "cuatro quesos",
  "prosciutto",
  "carbonara",
  "barbacoa",
  "tropical",
];

function menu(catalogo){
  let retorno = [];
  for (let element in catalogo){
    for (let element2 = element; element2 < catalogo.length;element2++){
      if (element != element2){
        retorno.push(`${catalogo[element]} - ${catalogo[element2]}`)
      }
    }
  }
  return retorno;
}

console.log(menu(catalogo));
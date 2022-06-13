"use strict";

const people = {
  Maria: 20,
  Ana: 14,
  Luis: 16,
  Pepe: 35,
  Manuel: 50,
  Teresa: 12,
  Daniel: 27,
  Irene: 23,
  Alex: 10,
};

//^ modo 1  Con un for
console.log("Modo 1:-------------------")
function miraEdad(nom, edad, edadLegal){
  return edad-edadLegal;
}

const edadLegal = 18;
const keys = Object.keys(people);
for(let i = 0; i < keys.length; i++){
  console.log(miraEdad( keys[i], people[`${keys[i]}`], edadLegal ) >= 0 ? `${keys[i]} es mayor de edad` : `${keys[i]} no es mayor de edad`);
}



//^ modo 2 Con un .map y console log dentro de la funcion de flecha
console.log("Modo 2:-------------------")
Object.keys(people).map((element, edadLegal) => 
people[element] >= edadLegal ? console.log(`${element} es mayor de edad`) : console.log(`${element} no es mayor de edad`));




//^ modo 3 Con un .map y un .foreach 
console.log("Modo 3:-------------------")
let arrayVar = [Object.keys(people)
.map((element, edadLegal) => 
    people[element] >= edadLegal ? `${element} es mayor de edad` : `${element} no es mayor de edad`)
.forEach((p) => console.log(p))];


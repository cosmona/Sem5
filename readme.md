# Ejercicio 1

Partiendo de un objeto que incluye una serie de personaas con sus respectivas edades, saca por consola un mensaje por cada persona que diga "_Nombre_ es mayor de edad" o "_Nombre_ es menor de edad", según corresponda.
Cuando sepas hacer funciones, haz que sea una función que reciba el objeto como parámetro.

** Ejemplo input: **

```javascript
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
```

** Ejemplo output: **

```javascript
"Maria es mayor de edad";
"Ana es menor de edad";
"Luis es menor de edad";
"Pepe es mayor de edad";
"Manuel es mayor de edad";
"Teresa es menor de edad";
"Daniel es mayor de edad";
"Irene es mayor de edad";
"Alex es menor de edad";
```
# Ejercicio 2

Escribe un código que, partiendo de un array inicial, elimine las strings repetidas del mismo.
Cuando sepas hacer funciones, haz que sea una función que reciba el array como parámetro (y por tanto elimine los lementos repetidos de cualquier array).

** Ejemplo input: **

```javascript
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
```

** Ejemplo output: **

```javascript
const names = [
  "A-Jay",
  "Manuel",
  "Eddie",
  "Su",
  "Reean",
  "Zacharie",
  "Tyra",
  "Rishi",
  "Arun",
  "Kenton",
];
```
# Ejercicio 3

Edita el archivo script.js para crear una función que haga lo siguiente:

- Generar una contraseña (número entero aleatorio del 0 al 100)
- Pedir al usuario que introduzca un número dentro de ese rango\*.
- Si el número introducido es igual a la contraseña, aparecerá en pantalla un mensaje indicando que ha ganado; si no, el mensaje indicará si la contraseña en un número mayor o menor al introducido y dará una nueva oportunidad.
- El usuario tendrá 5 oportunidades de acertar, si no lo consigue, aparecerá un mensaje indicando que ha perdido.

* Para pedir datos al usuario utiliza la función _prompt_:

```javascript
const numUser = prompt("Introduce un número del 0 al 100");
```

¡OJO! Prompt **siempre** devuelve un string.


# Ejercicio 4

Una pizerría ofrece pizzas "mitad y mitad".
Cada mitad debe corresponderse a una pizza de su catálogo, pero éste cambia constantemente, por lo que el número de combinaciones posibles, también.

Escribe una función que reciba el catálogo de pizzas (un array de strings) y devuelva una lista de las combinaciones.

Seguramente en tu primera aproximación devuelva pizzas con la misma combinación pero al revés (ej: carbonara y barbacoa, barbacoa y carbonara) pero ¡son la misma pizza!

De la misma manera, si las dos mitades son iguales (ej: carbonara y carbonara) no sería una combinación, sino una pizza normal.

¿Serías capáz de solucionar eso, sin añadir ninguna línea de código? ¡Es más fácil de lo que puede parecer!

Ejemplo input:

```javascript
[
  "margarita",
  "cuatro quesos",
  "prosciutto",
  "carbonara",
  "barbacoa",
  "tropical",
];
```

Ejemplo output:

```javascript
[
  "margarita y cuatro quesos",
  "margarita y prosciutto",
  "margarita y carbonara",
  "margarita y barbacoa",
  "margarita y tropical",
  "cuatro quesos y prosciutto",
  "cuatro quesos y carbonara",
  "cuatro quesos y barbacoa",
  "cuatro quesos y tropical",
  "prosciutto y carbonara",
  "prosciutto y barbacoa",
  "prosciutto y tropical",
  "carbonara y barbacoa",
  "carbonara y tropical",
  "barbacoa y tropical",
];
```
# Ejercicio 5

Edita el archivo script.js para crear una función que reciba una array de objetos (equipos y puntos conseguidos) y muestre por consola el ** nombre ** del que más y del que menos puntos hayn conseguido, con sus respectivos ** totales **.

Encontrarás un array de ejemplo en el propio documento.

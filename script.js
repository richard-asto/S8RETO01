// // Retos semana 08

//==========================================================================

// // 1. Solicitar al usuario dos números y los sume,
// el resultado se deberá imprimir en pantalla.

// let num1 = prompt("Ingresa el primer número:");
// let num2 = prompt("Ingresa el segundo número:");
// let suma = num1 + num2;

// console.log("La suma es:", suma);

//==========================================================================

// // 2. Verificar si un número es par o impar.

// let numero = prompt("Ingresa un número:");
// if (numero % 2 === 0) {
//     console.log("El número " + numero + " es par");
// } else {
//     console.log("El número " + numero + " es impar");
// }

//==========================================================================

// // 3. Calcular el mayor de tres números.

// let a = prompt("Ingresa el primer número:");
// let b = prompt("Ingresa el segundo número:");
// let c = prompt("Ingresa el tercer número:");
// let mayor;

// if (a > b && a > c) {
//     mayor = a;
// } else if (b > a && b > c) {
//     mayor = b;
// } else {
//     mayor = c;
// }

// console.log("El número mayor es:", mayor);

// // Forma directa de hallar el valor mayor con la funcion Math.max
// //console.log("El número mayor es:", Math.max(a, b, c));


//==========================================================================

// // 4. Un estudiante realiza 4 exámenes, calcular el promedio de estos.
// const nombreAlumno = prompt("Ingrese su nombre; ");
// let nota1 = parseFloat(prompt("Nota del examen de matematica:"));

// let nota2 = parseFloat(prompt("Nota del examen de lenguaje:"));
// let nota3 = parseFloat(prompt("Nota del examen de  historia:"));
// let nota4 = parseFloat(prompt("Nota del examen de geografia:"));
// let promedio = (nota1 + nota2 + nota3 + nota4) / 4;

// console.log("El promedio de notas de " + nombreAlumno + " es: " + promedio);

//==========================================================================

// // 5. Calcular el área de un rectángulo.

// // Los valores pueden ser decimales
// let baseRectangulo = parseFloat(prompt("Ingresa la base del rectángulo:"));
// let alturaRectangulo = parseFloat(prompt("Ingresa la altura del rectángulo:"));
// let areaRectangulo = baseRectangulo * alturaRectangulo;

// // El resultado ajustado a 2 decimales con  toFixed(2)
// console.log("El área del rectángulo es: ", areaRectangulo.toFixed(2));

//==========================================================================

// //6. Calcular el área de un triángulo.

// // Los valores pueden ser decimales
// let baseTriangulo = parseFloat(prompt("Ingresa la base del triángulo:"));
// let alturaTriangulo = parseFloat(prompt("Ingresa la altura del triángulo:"));
// let areaTriangulo = (baseTriangulo * alturaTriangulo) / 2;

// // El resultado ajustado a 2 decimales con  toFixed(2)
// console.log("El área del triángulo es: ", areaTriangulo.toFixed(2));

//==========================================================================

// // 7. Calcular el área de una circunferencia. (π = 3.14)
// // Los valores pueden ser decimales
// let radio = parseFloat(prompt("Ingresa el radio de la circunferencia: "));
// // 2 formas de calcular la potencia
// let areaCirculo = 3.14 * Math.pow(radio, 2);
// // let areaCirculo = 3.14 * (radio ** 2);

// // El resultado ajustado a 2 decimales con  toFixed(2)
// console.log("El área de la circunferencia es: ", areaCirculo.toFixed(2));

//==========================================================================

// // 8. Crea un programa que al ingresar un número diga si es positivo, negativo o cero.

// let num = parseFloat(prompt("Ingresa un número:"));
// if (num > 0) {
//     console.log("El número es positivo");
// } else if (num < 0) {
//     console.log("El número es negativo");
// } else {
//     console.log("El número es cero");
// }

//==========================================================================

// // 9. Solicitar al usuario que ingrese dos números y mostrar cuál de los dos es menor.
// // No considerar el caso en que ambos números son iguales.

// let num1 = parseFloat(prompt("Ingresa el primer número:"));
// let num2 = parseFloat(prompt("Ingresa el segundo número:"));
// if (num1 < num2) {
//     console.log("el numero", num1, "es menor que", num2);
// } else {
//     console.log("el numero", num2, "es menor que", num1);
// }

//==========================================================================

// // 10. Realice un algoritmo para determinar si una persona puede votar con base en
// // su edad en las próximas elecciones.

// let edad = parseInt(prompt("Ingresa tu edad:"));
// if (edad >= 18) {
//     console.log("Puedes votar en las próximas elecciones");
// } else {
//     console.log("No puedes votar, eres menor de edad");
// }

//==========================================================================

// // 11. Solicitar al usuario un número, y determinar si es divisible entre dos o no.
// // Mostrando al usuario un mensaje de “x número es divisible entre 2” o
// // “x número no es divisible entre 2”.

// let num = parseInt(prompt("Ingresa un número:"));
// if (num % 2 === 0) {
//     console.log(num, "es divisible entre 2");
// } else {
//     console.log(num, "no es divisible entre 2");
// }

//==========================================================================

// // 12. Verificar si un día es fin de semana o día laborable.
// // el valor ingresado es convertida a minuscula
// let dia = prompt("Ingresa un día de la semana:").toLowerCase();

// // se define los dias de fin de semana y se compara valores con acento o sin ella
// if (dia === "sábado" || dia === "sabado" || dia === "domingo") {
//     console.log(dia, "es fin de semana");
// } else {
//     console.log(dia, "es día laborable");
// }

//==========================================================================
// // 13. Verificar si un número es divisible por 3 y por 5.

// let nDiv = parseInt(prompt("Ingresa un número:"));

// if (nDiv % 3 === 0 && nDiv % 5 === 0) {
//     console.log("Es divisible por 3 y por 5");
// } else {
//     console.log("No es divisible por 3 y 5 al mismo tiempo");
// }

//==========================================================================
// // 14. Determinar si un número es múltiplo de 2, 3 o ambos.

// let num = parseInt(prompt("Ingresa un número:"));
// if (num % 2 === 0 && num % 3 === 0) {
//     console.log(num, "Es múltiplo de 2 y de 3");
// } else if (num % 2 === 0) {
//     console.log(num, "Es múltiplo de 2");
// } else if (num % 3 === 0) {
//     console.log(num, "Es múltiplo de 3");
// } else {
//     console.log(num, "No es múltiplo de 2 ni de 3");
// }

//==========================================================================
// // 15. Una empresa que contrata personal requiere determinar la edad de las personas
// // que solicitan trabajo, pero cuando se les realiza la entrevista sólo se les
// // pregunta el año en que nacieron.

// let dateOfBirth = parseInt(prompt("Ingresa tu año de nacimiento:"));
// let currentYear = new Date().getFullYear();
// let edadPersona = currentYear - dateOfBirth;

// console.log("Tu edad es:", edadPersona, "años");

//==========================================================================
// // 16. Se les dará un bono por antigüedad a los empleados de una tienda.
// // Si tienen un año, se les dará $100; si tienen 2 años, $200, y así
// // sucesivamente hasta los 5 años. Para los que tengan más de 5,
// // el bono será de $1000. Realice un algoritmo y represéntelo, que permita
// // determinar el bono que recibirá un trabajador.

// let yearsWorked = parseInt(prompt("Ingresa tus años de antigüedad en la empresa:"));
// let bono;
// //se entiende que el bono entre 1 y 5 años es $100 por año (yearsWorked)
// if (yearsWorked >= 1 && yearsWorked <= 5) {
//     bono = yearsWorked * 100;
// //Se entiende que el bono sera de $1000 para mayor a 5 años trabajados
// } else if (yearsWorked > 5) {
//     bono = 1000;
// } else {
//     bono = 0;
// }
// console.log("Tu bono es de: $" + bono);

//==========================================================================
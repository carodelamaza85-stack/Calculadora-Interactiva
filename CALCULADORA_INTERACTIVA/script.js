console.log("=".repeat(50));
console.log("¡Bienvenido a la Calculadora Interactiva!");
console.log("=".repeat(50));


function sumar(num1, num2) {
    return num1+num2;
}

function restar (num1, num2) {
    return num1-num2;
}

function multiplicar (num1, num2) {
    return num1*num2;
}

function dividir (num1, num2) {
    if (num2 === 0 ){
        return "Error: No se puede dividir por 0";
    }
    return num1/num2;
}

let historial = [];
let continuar = true;

while (continuar) {
    console.log("\nElige una operación: ");
    console.log("1. Suma");
    console.log("2. Resta");
    console.log("3. Multiplicación");
    console.log("4. División");
    console.log("5. Salir");

let opcion = prompt("Elige una opción (1-5)");

if (opcion === "5") {
    console.log("Gracias por usar la calculadora. ¡Hasta Luego!");
    continuar = false;
    break;
}

let num1 = Number(prompt("Ingresa el primer número: "));
let num2 = Number(prompt("Ingresa el segundo número: "));

if (isNaN(num1) || isNaN(num2)) {
    console.log ("Error: Debes ingresar números válidos");
    continue;
}


let resultado;
let operacion;

switch (opcion) {
    case "1": 
        resultado = sumar(num1, num2);
        operacion = "Suma";
        console.log(`El resultado de la ${operacion} es: ${resultado}`);

        break;
    case "2":
        resultado = restar(num1, num2);
        operacion = "Resta";
        console.log(`El resultado de la ${operacion} es: ${resultado}`);
        break;
    case "3":
        resultado = multiplicar(num1, num2);
        operacion = "Multiplicación";
        console.log(`El resultado de la ${operacion} es: ${resultado}`);
        break;
    case "4":
        resultado = dividir(num1, num2);
        operacion = "División";
        console.log(`El resultado de la ${operacion} es: ${resultado}`);
        break;
    default:
        console.log("Operación no válida");
        continue;
    }

historial.push({
    operacion: operacion,
    num1:num1,
    num2: num2,
    resultado: resultado
});
}
console.log("\n===Historial de Operaciones===");
if (historial.length === 0) {
    console.log("No se han realizado operaciones.");
}
for (let i = 0; i < historial.length; i++) {
    console.log(`${historial[i].operacion}: ${historial[i].num1} y ${historial[i].num2} = ${historial[i].resultado}`);
}

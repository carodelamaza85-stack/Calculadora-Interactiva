# Calculadora Interactiva - Proyecto Módulo 3

## Descripción
Aplicación de consola en JavaScript que permite realizar operaciones matemáticas básicas de forma interactiva. El usuario puede realizar múltiples cálculos y al finalizar, ver un historial de todas las operaciones realizadas.

## Funcionalidades
- Suma de dos números
- Resta de dos números
- Multiplicación de dos números
- División de dos números con validación contra división por cero
- Validación de entrada de datos numéricos
- Menú interactivo mediante prompts
- Capacidad de realizar múltiples operaciones consecutivas
- Historial de operaciones realizadas

## Cómo usar

1. Abre el archivo `index.html` en tu navegador web
2. Abre la consola del navegador (presiona F12 o clic derecho > Inspeccionar > Consola)
3. La calculadora se iniciará automáticamente
4. Sigue las instrucciones:
   - Elige una operación del menú (1-5)
   - Ingresa el primer número
   - Ingresa el segundo número
   - El resultado se mostrará en la consola
   - Puedes realizar más operaciones o salir (opción 5)
5. Al salir, se mostrará el historial completo de operaciones

## Estructura del código

### Funciones implementadas:
- `sumar(num1, num2)` - Realiza la suma de dos números
- `restar(num1, num2)` - Realiza la resta de dos números
- `multiplicar(num1, num2)` - Realiza la multiplicación de dos números
- `dividir(num1, num2)` - Realiza la división con validación de división por cero

### Estructuras utilizadas:
- **Bucle `while`** - Para permitir realizar múltiples operaciones
- **Condicional `switch`** - Para manejar las diferentes opciones del menú
- **Condicionales `if`** - Para validaciones de entrada y división por cero
- **Bucle `for`** - Para mostrar el historial de operaciones
- **Arreglo** - Para almacenar el historial de operaciones
- **Objetos** - Para estructurar cada operación en el historial

### Variables principales:
- `historial` - Arreglo que almacena todas las operaciones realizadas
- `continuar` - Variable booleana que controla el bucle principal
- `opcion` - Almacena la opción seleccionada por el usuario
- `num1` y `num2` - Números ingresados por el usuario
- `resultado` - Resultado de la operación
- `operacion` - Tipo de operación realizada

## Validaciones implementadas

1. **Validación de números**: Verifica que los valores ingresados sean números válidos usando `isNaN()`
2. **División por cero**: Previene la división entre cero mostrando un mensaje de error
3. **Opción inválida**: Maneja casos donde el usuario ingresa una opción no válida en el menú

## Requisitos cumplidos del proyecto

### Requisitos generales:
✅ Ejecutarse en la consola del navegador
✅ Permitir al usuario ingresar datos mediante prompt
✅ Realizar al menos tres operaciones diferentes usando botones (menú de opciones)
✅ Utilizar condicionales y estructuras de repetición

### Requisitos técnicos:
✅ **Funciones y modularización** - Código separado en funciones reutilizables
✅ **Uso de estructuras de control** - Implementación de if, switch, while, for
✅ **Uso de arreglos y objetos** - Historial almacenado en arreglo con objetos
✅ **Validaciones** - Control de errores para entrada inválida y división por cero

### Aspectos estructurales:
✅ Código limpio y organizado
✅ Uso de buenas prácticas de JavaScript
✅ Nombres de variables descriptivos

### Aspectos funcionales:
✅ La aplicación funciona sin errores
✅ Todas las funcionalidades están implementadas
✅ Documentación incluida (este README)

## Tecnologías utilizadas
- HTML5
- JavaScript (ES6+)

## Autor
Proyecto desarrollado para el Módulo 3: Fundamentos de programación en Javascript
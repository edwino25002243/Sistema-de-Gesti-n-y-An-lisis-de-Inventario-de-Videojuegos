// ==========================================
// PROYECTO: Sistema de Gestión y Análisis de Inventario de Videojuegos
// ==========================================
// ==========================================
// 1. CREAR MATRICES - INVENTARIO INICIAL
// ==========================================

// 1.a.i. Matriz con 5 nombres de videojuegos (Array de Strings)
// Usamos corchetes [] que es la forma más común (Notación Literal).
const juegosDisponibles = [
    "The Legend of Zelda: Breath of the Wild",
    "God of War 3",
    "Super Mario Odyssey",
    "FC 26",
    "Fortnite"
];

// 1.a.ii. Matriz con precios correspondientes (Array de Numbers)
const precios = [60, 70, 50, 70, 30];

// 1.a.iii. Matriz con valores mezclados (String, Number, Boolean, Null)
// Esto demuestra que JS permite guardar distintos tipos de datos en una misma lista.
const mezcla = ["Nintendo Switch", 2024, true, null];

// 1.a.iv. Matriz creada con new Array()
// new Array(3) crea un arreglo con 3 espacios vacíos (undefined).
const especiales = new Array(3); 
// Asignamos valores manualmente a las dos primeras posiciones.
especiales[0] = "Edición Coleccionista";
especiales[1] = "Edición Standard";
// Nota: La posición 2 (índice 2) se queda vacía.


// IMPRESIONES EN CONSOLA


console.log("--- Inciso 1: Matrices Iniciales ---");

// 1.b.i. Imprimir la cantidad total de videojuegos
// Usamos la propiedad .length
console.log("Cantidad de videojuegos:", juegosDisponibles.length);

// 1.b.ii. Imprimir el tercer videojuego
// Recordar: Los índices empiezan en 0. (0, 1, 2...)
console.log("El tercer videojuego es:", juegosDisponibles[2]);

// Visualización extra para verificar la matriz creada con new Array
console.log("Matriz 'especiales':", especiales);


// 2. ACCESO Y MODIFICACIÓN - AJUSTE DEL INVENTARIO


console.log("\n--- Inciso 2: Ajuste del Inventario ---");

// 2.a.i. Cambiar el segundo videojuego
// El segundo elemento está en el índice 1 (recuerda: 0, 1, 2...).
// Reemplazamos "God of War 3" (que pusimos antes) por "Call of Duty: Black OPS".
juegosDisponibles[1] = "Call of Duty: Black OPS";

// 2.a.ii. Cambiar el precio del último elemento
// Se utiliza precios.length -1 para que, si la matriz cambia, siempre cambie el precio del último elemento.
let ultimoIndice = precios.length - 1;
precios[ultimoIndice] = 85; // Cambiamos el precio de 30 a 85

// 2.b. Imprimir ambas listas actualizadas
console.log("Lista de juegos actualizada:", juegosDisponibles);
console.log("Lista de precios actualizada:", precios);


// 3. MÉTODOS DE AGREGACIÓN - ACTUALIZACIÓN DEL CATÁLOGO

console.log("\n--- Inciso 3: Agregando y Eliminando ---");

// 3.a.i. Agregar al FINAL usando .push()
// Ingresa un juego nuevo
juegosDisponibles.push("Resident Evil 4");

// 3.a.ii. Agregar al INICIO usando .unshift()
// Queremos destacar un juego poniéndolo primero en la lista.
juegosDisponibles.unshift("Silent Hill 2");

// 3.a.iii. Eliminar el ÚLTIMO usando .pop()
// El último juego se agotó o lo sacamos del catálogo.
// .pop() no lleva argumentos, simplemente saca el último.
// Guardamos el dato eliminado en una variable por si necesitamos mostrar qué borramos.
let eliminadoUltimo = juegosDisponibles.pop();

// 3.a.iv. Eliminar el PRIMERO usando .shift()
// Sacamos el primer juego de la lista.
let eliminadoPrimero = juegosDisponibles.shift();

// 3.b. Imprimir el catálogo final de esta etapa
console.log("Catálogo actualizado:", juegosDisponibles);


// 4. SLICE() Y SPLICE() - OPERACIONES DE MANTENIMIENTO

console.log("\n--- Inciso 4: Slice y Splice ---");

// 4.a.i. Usar slice() para obtener un subcatálogo
// slice(inicio, fin) -> El fin NO se incluye.
// Queremos los primeros 3 (índices 0, 1 y 2), así que cortamos hasta el 3.
const topTresJuegos = juegosDisponibles.slice(0, 3);

console.log("Subcatálogo (Top 3):", topTresJuegos);

// 4.a.ii. Usar splice() para eliminar e insertar
// Sintaxis: array.splice(indiceInicio, cantidadBorrar, nuevo1, nuevo2...)
// Vamos al índice 2, borramos 1 elemento, y metemos dos nuevos ahí.
juegosDisponibles.splice(2, 1, "Cyberpunk 2077", "Final Fantasy XVI");

console.log("Inventario modificado tras splice:", juegosDisponibles);

// 5. RECORRIDO DE ARRAYS - REPORTES

console.log("\n--- Inciso 5: Reporte de Precios ---");

// 5.a.i. Ciclo FOR
console.log("--> Usando for clásico:");
for (let i = 0; i < precios.length; i++) {
    // Accedemos al valor usando el índice i
    console.log(`Precio ${i}: $${precios[i]}`);
}

// 5.a.ii. Ciclo FOR...OF
console.log("--> Usando for...of:");
for (let precio of precios) {
    // Aquí no nos preocupamos por índices, 'precio' es el valor directo.
    console.log(`Precio: $${precio}`);
}

// 5.a.iii. Método .forEach()
console.log("--> Usando .forEach:");
// forEach recibe una función que se ejecuta por cada elemento.
// El primer parámetro es el valor, el segundo es el índice.
precios.forEach((precio, indice) => {
    console.log(`Item #${indice} tiene un precio de: $${precio}`);
});


// 6. BÚSQUEDA Y FILTRADO - GESTIÓN DE DISPONIBILIDAD

console.log("\n--- Inciso 6: Búsqueda y Filtrado ---");

// 6.a. Crear la matriz
const juegos = [
    { nombre: "Zelda", precio: 60, genero: "Aventura", stock: 10 },
    { nombre: "Mario Kart", precio: 50, genero: "Carreras", stock: 3 },
    { nombre: "Dark Souls", precio: 40, genero: "RPG", stock: 0 },
    { nombre: "FIFA", precio: 70, genero: "Deportes", stock: 12 },
    { nombre: "Halo", precio: 55, genero: "Shooter", stock: 5 }
];

// --- Preparación para 6.b.i ---
// Como indexOf e includes funcionan mejor con listas simples (strings/numeros),
// creamos un array solo con los nombres para probarlos.
// .map() transforma el array de objetos en un array de strings (nombres).
const listaNombres = juegos.map(juego => juego.nombre);
console.log("Lista de nombres extraída:", listaNombres);

// 6.b.i. indexOf y includes
// .includes(): Devuelve true o false. Ideal para condicionales (if).
const existeFIFA = listaNombres.includes("FIFA");
console.log("¿Existe FIFA?:", existeFIFA);

// .indexOf(): Devuelve la posición numérica (o -1 si no existe).
const indiceMario = listaNombres.indexOf("Mario Kart");
console.log("Índice de Mario Kart:", indiceMario);


// 6.b.ii. .find() para obtener el primer juego agotado
// .find() busca dentro de objetos y devuelve EL PRIMER objeto que cumpla la condición.
// Condición: stock estrictamente igual a 0.
const juegoAgotado = juegos.find(juego => juego.stock === 0);
console.log("Primer juego agotado:", juegoAgotado);


// 6.b.iii. .findIndex() para obtener posición del juego > 60
// .findIndex() es como .find(), pero devuelve el ÍNDICE (número), no el objeto.
const indiceCaro = juegos.findIndex(juego => juego.precio > 60);
console.log("Índice del juego mayor a 60:", indiceCaro); 
// Debería ser el índice de FIFA.


// 6.b.iv. .filter() para juegos con stock > 5
// .filter() devuelve UN NUEVO ARRAY con TODOS los que cumplan.
// A diferencia de find (que da 1), filter puede dar 0, 1, o 100 resultados.
const juegosConStock = juegos.filter(juego => juego.stock > 5);
console.log("Juegos con stock suficiente:", juegosConStock);



// 7. TRANSFORMACIÓN - MAP Y REDUCE


// Tasa de cambio definida en el ejercicio
const TASA_CAMBIO = 0.13;

// 7.a.i. Map: Convertir precios a dólares
// .map() recorre TODO el array y devuelve uno NUEVO del mismo tamaño,
// pero con los elementos transformados.
const preciosEnDolares = juegos.map(juego => {
    // Multiplicamos precio por tasa y usamos .toFixed(2) para que parezca moneda (2 decimales)
    return (juego.precio * TASA_CAMBIO).toFixed(2);
});

console.log("Precios en Dólares:", preciosEnDolares);


// 7.a.ii. Map: Nombres en Mayúsculas
// Queremos una lista simple solo con los nombres gritando (MAYÚSCULAS).
const nombresMayusculas = juegos.map(juego => juego.nombre.toUpperCase());

console.log("Nombres en Mayúsculas:", nombresMayusculas);


// 7.a.iii. Reduce: Calcular el total del inventario en dólares
// .reduce() toma una lista de valores y los "colapsa" en un solo valor final.
// Sintaxis: .reduce((acumulador, elementoActual) => { ... }, valorInicial)
const totalInventarioUSD = juegos.reduce((acumulador, juego) => {
    // Convertimos el precio del juego actual a dólares
    const precioDolar = juego.precio * TASA_CAMBIO;
    // Lo sumamos a lo que llevamos acumulado
    return acumulador + precioDolar;
}, 0);

console.log(`Valor total del inventario: $${totalInventarioUSD.toFixed(2)} USD`);


// 8. ORDENAMIENTO - MODIFICACIÓN DIRECTA (SIN COPIAS)


// 8.a.i. Ordenar nombres alfabéticamente (Afecta a listaNombres)
listaNombres.sort();
console.log("Nombres A-Z (Original modificado):", listaNombres);


// 8.a.ii. Ordenar precios de menor a mayor (Afecta a precios)
precios.sort((a, b) => a - b);
console.log("Precios Ascendentes (Original modificado):", precios);


// 8.a.iii.1 Ordenar Objetos por PRECIO (Afecta a juegos)
// El array 'juegos' ahora queda ordenado por precio.
juegos.sort((a, b) => a.precio - b.precio);
console.log("Inventario ordenado por Precio:", juegos);


// 8.a.iii.2 Ordenar Objetos por GÉNERO (Afecta a juegos)
juegos.sort((a, b) => a.genero.localeCompare(b.genero));
console.log("Inventario re-ordenado por Género:", juegos);


// 8.a.iv. Ordenar por MÚLTIPLES criterios
// Reordenamos 'juegos' una vez más. Esta será la versión final que quede en memoria.
juegos.sort((a, b) => {
    // 1. Criterio Principal: Género
    let comparacionGenero = a.genero.localeCompare(b.genero);

    // 2. Criterio de Desempate: Precio
    if (comparacionGenero !== 0) {
        return comparacionGenero;
    }
    return a.precio - b.precio;
});

console.log("Inventario Final (Multicriterio):", juegos);


// 9. ARRAYS MULTIDIMENSIONALES - ESTRUCTURA POR PLATAFORMA

// 9.a. Crear la matriz 'plataformas' 
// Es un Array donde cada elemento es OTRO Array.
const plataformas = [
    ["PC", "Steam", "Epic Games", "Ubisoft"],      // Índice 0
    ["Nintendo", "Switch"],                        // Índice 1
    ["Xbox", "Series X", "Game Pass"],             // Índice 2
    ["PlayStation", "PS4", "PS5"]                  // Índice 3
];

console.log("Matriz Original:", plataformas);

// 9.b.i. Mostrar cada plataforma con doble for...of
// El primer bucle entra a las filas (grupos).
// El segundo bucle entra a los elementos dentro de esa fila.
console.log("--> Recorrido con doble bucle:");

for (let grupo of plataformas) {
    console.log(`Grupo: ${grupo[0]}`); // Imprimimos el nombre principal (ej. PC, Nintendo)
    
    for (let sistema of grupo) {
        console.log(`   - ${sistema}`);
    }
}


// 9.b.ii. Acceder específicamente a "Game Pass"
// Necesitamos coordenadas [Fila][Columna]
// Fila 2 (Xbox...), Columna 2 (Game Pass)
const servicioXbox = plataformas[2][2]; 
console.log(`${servicioXbox}`);


// 9.b.iii. Convertir la matriz en un solo array plano usando .flat()
// .flat() saca los elementos de los sub-arrays y los pone todos al mismo nivel.
const plataformasPlanas = plataformas.flat();

console.log(plataformasPlanas);

// 10. EJERCICIO FINAL - ANÁLISIS COMPLETO DE VENTAS

// 10.a. Datos proporcionados
const ventas = [
    { titulo: "Zelda", unidades: 120, precio: 60 },
    { titulo: "Mario Kart", unidades: 200, precio: 50 },
    { titulo: "Halo", unidades: 80, precio: 55 },
    { titulo: "FIFA", unidades: 150, precio: 70 }
];

// 10.b.i. Total de ingresos por videojuego

// 10.b.ii. Top 3 juegos más vendidos usando sort()
// IMPORTANTE: Usamos [...ventas] para crear una copia y NO desordenar el array original,
// ya que el reporte final lo pide en el orden original.
const top3Vendidos = [...ventas]
    .sort((a, b) => b.unidades - a.unidades) // Orden descendente (Mayor a menor)
    .slice(0, 3); // Tomamos solo los primeros 3 (índices 0, 1 y 2)

// 10.b.iii. Total global de ingresos con reduce()
// Multiplicamos unidades * precio de cada uno y sumamos al acumulador.
const totalGlobal = ventas.reduce((acumulador, juego) => {
    return acumulador + (juego.unidades * juego.precio);
}, 0);

// 10.b.iv. Lista única de títulos usando new Set()
// Set es una estructura que NO permite duplicados.
// 1. .map() crea un array solo de nombres: ["Zelda", "Mario...", "Halo", "FIFA"]
// 2. new Set() elimina duplicados (si los hubiera).
// 3. [...] convierte el Set de vuelta a un Array normal.
const listaTitulosUnicos = [...new Set(ventas.map(juego => juego.titulo))];


// 10.b.v. Generar el reporte en la terminal
console.log("Reporte de Ventas:");

// Recorremos el array original para mostrar el detalle uno por uno
ventas.forEach(juego => {
    const ingresoJuego = juego.unidades * juego.precio;
    console.log(`${juego.titulo} -> Q${ingresoJuego}`);
});

console.log(`Total global: Q${totalGlobal}`);

// Para mostrar el Top 3 solo por nombre, usamos map y join para que se vea limpio
const nombresTop3 = top3Vendidos.map(juego => juego.titulo).join(", ");
console.log(`Top 3: ${nombresTop3}`);


let matriz = [
    [0, 2, 3],
    [4, 5, 6]
];

// Utilizo el método `map` para crear una nueva matriz con el mismo número de filas y columnas que la matriz original.
// Para cada valor en la matriz, verifico si está en la fila y columna especificadas. Si es así, lo cambio al nuevo valor.
let nuevaMatriz= matriz.map((fila, indiceFila) => {

    return fila.map((valor, j) => {

        if(indiceFila === 0 && j === 0) {
            return 1; // Si la posición actual es la fila 0, columna 0, devuelvo el nuevo valor (1)
        } else {
            return valor; // Si no, devuelvo el valor original
        }
    });
});

// Defino una función `cambiarValorMatriz` que acepta la matriz, una fila, una columna y un nuevo valor como parámetros.
// La función cambia el valor de la matriz en la posición especificada por los parámetros.
const cambiarValorMatriz = (matriz, fila, columna, nuevoValor) => {
    matriz[fila][columna] = nuevoValor;
};

// Muestro la matriz original y la nueva matriz 
// La matriz original no ha cambiado, ya que no la he modificado con la función cambiarValorMatriz.
console.log('Matriz original:', matriz);
console.log('Nueva matriz:', nuevaMatriz);

// Llamo a la función cambiarValorMatriz para cambiar el valor en la fila 1, columna 1 a 9.
cambiarValorMatriz(matriz, 1, 1, 9);

// Muestro la matriz modificada
console.log('Matriz modificada:', matriz);

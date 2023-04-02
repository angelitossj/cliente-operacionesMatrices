import React, { useEffect, useState } from 'react';
import { Table, Container } from 'react-bootstrap'

const Suma = () => {
    // defino los estados iniciales para las matrices y los resultados
    const [matriz1, setMatriz1] = useState([]);
    const [matriz2, setMatriz2] = useState([]);
    const [resultadoSuma, setResultadoSuma] = useState([]);
    const [resultadoResta, setResultadoResta] = useState([]);
    const [resultadoMultiplicacion, setMultiplicacion] = useState([]);
  
    // Función que permite crear una matriz a partir de la entrada del usuario
    const crearMatriz = (boton) => {
      const filas = parseInt(prompt('Ingrese la cantidad de filas'));
      const columnas = parseInt(prompt('Ingrese la cantidad de columnas'));
      const nuevaMatriz = [];
  
      for (let i = 0; i < filas; i++) {
        nuevaMatriz[i] = [];
        for (let j = 0; j < columnas; j++) {
          nuevaMatriz[i][j] = parseInt(
            prompt(`Ingrese el valor en la posición ${i}, ${j}: `)
          );
        }
      }
  
      // Dependiendo del botón presionado, se actualiza la matriz correspondiente
      if (boton === 1) {
        setMatriz1(nuevaMatriz);
      } else {
        setMatriz2(nuevaMatriz);
      }
    };
  
    // Función que se encarga de enviar la petición al servidor para realizar la suma de las matrices
    const mandarPeticion = async () => {
      const data = { matriz1, matriz2 };
      
      // Verifica que ambas matrices tengan las mismas dimensiones
      if(matriz1.length !== matriz2.length) {
          alert("las matrices no tienen la misma dimension");
      }
      else{
          const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data),
          };
          const response = await fetch('http://localhost:3000/sumar', requestOptions);
          const resultadito = await response.json();
          setResultadoSuma(resultadito);
          console.log(resultadito);
      }
    };
  const mandarPeticionResta = async () => {
    const data = { matriz1, matriz2 };
    if(matriz1.length !== matriz2.length) {

      alert("no se puede realizar la resta, las dimensiones no son iguales")
    }
    else{

      const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      };
      const response = await fetch('http://localhost:3000/restar', requestOptions);
      const resultadoResta = await response.json();
      setResultadoResta(resultadoResta);
      console.log(resultadoResta)
    }
   
  };

  const mandarMultiplicacion = async () => {
    const data = { matriz1, matriz2 };
    let columna1=matriz1[0].length
    let filas2= matriz2.length

    if(columna1 !== filas2) {
      alert ("no se puede realizar la multiplicaciones, hay un error en las dimensiones")
    }
    else{
      const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      };
      const response = await fetch('http://localhost:3000/multiplicar', requestOptions);
      const resultadoMultiplicacion = await response.json();
      setMultiplicacion(resultadoMultiplicacion);
      console.log(resultadoMultiplicacion)


    }


  };
        useEffect(()=>{
mandarPeticion,
mandarPeticionResta,
mandarMultiplicacion
        },[])
  return (
    <>
      <div>
        <button onClick={() => crearMatriz(1)}>Crear matriz 1</button>
        <button onClick={() => crearMatriz(2)}>Crear matriz 2</button>
        <button onClick={() => mandarPeticion()}>sumar Matrices</button>
        <button onClick={() => mandarPeticionResta()}>restar Matrices</button>
        <button onClick={() => mandarMultiplicacion()}>Multiplicar Matrices</button>

      </div>
      <div>
        <h2>Matriz 1</h2>
        <Table striped bordered hover variant="dark" >
          <tbody>
            {matriz1.map((fila, i) => (
              <tr key={i}>
                {fila.map((valor, j) => (
                  <td key={j}>{valor}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
      <div>
        <h2>Matriz 2</h2>
        <Table striped bordered hover variant="dark">
          <tbody>
            {matriz2.map((fila, i) => (
              <tr key={i}>
                {fila.map((valor, j) => (
                  <td key={j}>{valor}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </Table>
        <h2>resultado Suma</h2>
        <Table striped bordered hover variant="dark" >
          <tbody>
            {resultadoSuma.map((fila, i) => (
              <tr key={i}>
                {fila.map((valor, j) => (
                  <td key={j}>{valor}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </Table>
        <h2>Resultado Resta</h2>
        <Table striped bordered hover variant="dark" >
          <tbody>
            {resultadoResta.map((fila, i) => (
              <tr key={i}>
                {fila.map((valor, j) => (
                  <td key={j}>{valor}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </Table>
        <h2>Resultado Multiplicacion</h2>
        <Table striped bordered hover variant="dark" >
          <tbody>
            {resultadoMultiplicacion.map((fila, i) => (
              <tr key={i}>
                {fila.map((valor, j) => (
                  <td key={j}>{valor}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
      
    </>
  );
};

export default Suma;

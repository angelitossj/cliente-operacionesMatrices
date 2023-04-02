import { useState } from 'react'
import { Table, Container } from 'react-bootstrap'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Suma from './operaciones/suma'
import UserComponent from './operaciones/Render'
function App() {
  const [resultado, setResultado] = useState(null)

  const sumarMatriz= async()=>{
    const matriz1=[[1,2,3],[1,2,3]]
    const matriz2=[[2,3,4],[2,3,4]]

    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: JSON.stringify({ matriz1, matriz2 }),
      redirect: 'follow'
    };

    const peticion = await fetch('http://localhost:3000/sumar', requestOptions)
    const respuesta = await peticion.json()
    setResultado(respuesta)
  }

  return (
    <div className="App">
     
      <button onClick={sumarMatriz}></button>
    {/* <UserComponent/> */}
    <Suma/>

      {resultado && (
        <Container>
          <Table striped bordered hover variant="dark">
            <thead>
              <tr>
                {resultado[0].map((item, index) => (
                  <th key={index}>{index}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {resultado.map((row, index) => (
                <tr key={index}>
                  {row.map((item, index) => (
                    <td key={index}>{item}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </Table>
        </Container>
      )}
    </div>
  )
}

export default App

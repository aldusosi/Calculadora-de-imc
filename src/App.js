import logo from './logo.svg';
import {useState} from 'react';
import './App.css';

function App() {
  const [peso, setPeso] = useState(0);
  const [altura, setAltura] = useState(0);
  const [imc, setimc] = useState("");

  function handlePeso(event){
    if(!event.target.value || !(Number(event.target.value)) ) return;

    const novoPeso = event.target.value;

    console.log(novoPeso);

    setPeso(novoPeso)
  }

  function handleAltura(event){
    if(!event.target.value || !(Number(event.target.value) )) return;

    const novaAltura =( event.target.value);

    console.log(novaAltura);

    setAltura(novaAltura);
  }

  function handle_imc(event){
    const novoImc = peso/altura**2;
    setimc((novoImc).toFixed(2));
  }

  return (
    <div className="container">
      <div className="card">
        <div className="card-topo">
          <h1 className="">Calculadora de IMC</h1>
        </div>
      

        <input type="text" placeholder="Peso..." onBlur={(event) => handlePeso(event)}/>

        <input type="text" placeholder="Altura..." onBlur={(event) => handleAltura(event)}/>

        <p>A altura deverá ser passada com " . " e não " , ".</p>
        
        <button onClick={(event) => handle_imc(event)}>Verificar</button>

        <h2 className="caixa-Imc">{Number(peso) && Number(altura) ? imc : ""} </h2>

      </div>

      <div className="card">
        <table>
          <tr>
            <th>IMC</th>
            <th>CLASSIFICAÇÂO</th>
          </tr>

          <tr>
            <td>Menor que 18.5</td>
            <td>Peso baixo</td>
          </tr>

          <tr>
            <td>18.5 até 24.9</td>
            <td>Peso normal</td>
          </tr>

          <tr>
            <td>25.0 até 29.9</td>
            <td>Sobre peso</td>
          </tr>

          <tr>
            <td>30,0 até 34.9</td>
            <td>Obesidade (Grau 1)</td>
          </tr>

          <tr>
            <td>35.0 até 39.9</td>
            <td>Obesidade severa (Grau 2)</td>
          </tr>

          <tr>
            <td>maior que 40.0</td>
            <td>Obesidade mórbida (Grau 3)</td>
          </tr>
        </table>
      </div>
    </div>
    
  );
}

export default App;

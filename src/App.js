import './App.css';
import batmanlogo from './imagenes/batman.png';
import Boton from './componentes/boton.js';
import Pantalla from './componentes/pantalla';
import Reset from './componentes/reset.js';
import {useState} from 'react';
import {evaluate} from 'mathjs';


function App() {

  const[ input, setInput] = useState('');

  const addInput = value => {
    setInput(input + value);
  }

  const resultado = () => {
    if (input){
      setInput(evaluate(input));
    }else{
      alert('VALORES INVALIDOS');
    }
  }


  return (
    <div className='App'>

      <div className='contenedor-logo'>
        <img src={batmanlogo} className='logo' alt='logo de batman' />
      </div>

      <div className='contenedor-titulo'>
      <h1>Bati-Calculadora</h1>
      </div>

      <div className='contenedor-calculadora'>

        <Pantalla input={input}/>

        <div className='fila'>
          <Boton handleClick={addInput}>7</Boton>
          <Boton handleClick={addInput}>8</Boton>
          <Boton handleClick={addInput}>9</Boton>
          <Boton handleClick={addInput}>+</Boton>
        </div>

        <div className='fila'>
          <Boton handleClick={addInput}>4</Boton>
          <Boton handleClick={addInput}>5</Boton>
          <Boton handleClick={addInput}>6</Boton>
          <Boton handleClick={addInput}>-</Boton>
        </div>

        <div className='fila'>
          <Boton handleClick={addInput}>1</Boton>
          <Boton handleClick={addInput}>2</Boton>
          <Boton handleClick={addInput}>3</Boton>
          <Boton handleClick={addInput}>*</Boton>
        </div>

        <div className='fila'>
          <Boton handleClick={resultado}>=</Boton>
          <Boton handleClick={addInput}>0</Boton>
          <Boton handleClick={addInput}>.</Boton>
          <Boton handleClick={addInput}>/</Boton>
        </div>

        <Reset handleClick={() => setInput('')}></Reset>

      </div>  
    </div>
  );
}

export default App;

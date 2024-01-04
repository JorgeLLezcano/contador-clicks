
import './App.css';
import logotipoContador from './imagenes/click-speed-test.webp'
import Boton from './componentes/Boton';
import Contador from './componentes/Contador';
import { useState } from 'react';


function App() {

  const [numClick, setNumClick] =useState(0)

  const manejaClick=()=>{
     setNumClick( numClick+1)
  }
  const reiniciarContador=()=>{
    setNumClick(0)
  }
  return (
    <div className="App">
      <div className='logo-de-contenedor'>
        <img className='lcontador-logo'
        src={logotipoContador}
        alt='logo' />
      </div>
      <div className='contenedor-principal'>
        <Contador numClick={numClick} />
        <Boton
        texto='Click'
        esBotonClick={true}
        manejaClick={manejaClick}
        ></Boton>
        <Boton
         texto='Reiniciar'
         esBotonClick={false}
         manejaClick={reiniciarContador}
         ></Boton>
      </div>
    </div>
  );
}

export default App;

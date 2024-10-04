import {Header} from './components/Header.js';
import { Cuerpo } from './components/Cuerpo.js';
import {Body} from './components/Body.js';
import './App.css';
import { useState } from 'react';
import {Logo} from './components/Logo.js';
function App() {
  const[mostrarDatosPersonales, setmostrarDatosPersonales]= useState(true);
  const handleClick = ( )=>{
    setmostrarDatosPersonales(!mostrarDatosPersonales)
  };

  return (
  <div className='cv'>
    <Header mail="santiagorecio23@gmail.com" edad="31" dni="37.018.577" fecha="31/03/1993" telefono="1155018894" ubicacion="Buenos Aires, Argentina" foto="./fotocv.jpg" linkedin='www.linkedin.com/in/santiagorecio'></Header>
    <Cuerpo  nombre="Santiago Jose Recio"/>
    
  </div>
    
  );
}

export default App;

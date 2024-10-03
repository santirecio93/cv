import { useState } from 'react';
import {Logo} from './Logo';
import {DatosPersonales} from './DatosPersonales';
import {PersonalData} from './PersonalData';
import '../App.css';
export const Header = (props) => {
    const {foto, l1, l2, l3, l4, mail, telefono, dni , linkedin, ubicacion, edad, fecha} = props;
   

    return <div className='Header'>
        <Logo foto={foto}/>
         < DatosPersonales className='DatosPersonales'mail={mail} telefono={telefono} dni={dni} linkedin={linkedin} ubicacion={ubicacion} edad={edad} fecha={fecha}></DatosPersonales>
        
        
    </div>
}
import {ObjetivoLaboral} from './ObjetivoLaboral.js'
import {ExperienciaLaboral} from './ExperienciaLaboral.js'
import {Educacion} from './Educacion.js'
import '../App.css';
export const Cuerpo = (props) => {
    const {nombre} = props
    return <div className='cuerpo'>
            <h1 className='nombre'>{nombre}</h1>
            <hr className='linea'/>
            <h1>OBJETIVO LABORAL</h1>
            <ObjetivoLaboral/>
            <hr className='linea'/>
            <h1>EXPERIENCIA LABORAL</h1>
            <ExperienciaLaboral empresa="HSBC s.a" puesto="Analista jr  - Prevención Lavado de Dinero" inicio="Marzo de 2012" fin="Diciembre de 2013"/>
            <ExperienciaLaboral empresa="DEUSTCHE s.a" puesto="Analista Jr - Custody Finanzas" inicio="Marzo de 2014" fin="Febrero de 2016"/>
            <ExperienciaLaboral empresa="Instituto de Cultura Argentina" puesto="Analista Contable y Administrativo" inicio="Marzo de 2016" fin="Febrero de 2019"/>
            <ExperienciaLaboral empresa="Colegio Nuestra Señora de la Misericordia" puesto="Preceptor" inicio="Marzo de 2019" fin="Diciembre de 2023"/>
            <ExperienciaLaboral empresa="Particular" puesto="Docente de Matematica" inicio="Febrero 2024" fin="Actualmente"/>
            <hr className='linea'/>
            <h1>FORMACIÓN</h1>
            <Educacion estudio="Diplomatura en Python" institucion= "U.T.N" situacion= "Finalizado"/>
            <Educacion estudio="Desarrollador WEB en HTML y CSS" institucion= "CODER HOUSE" situacion= "Finalizado"/>
            <Educacion estudio="Curso en JAVASCRIPT y REACT " institucion= "CODER HOUSE" situacion= "Finalizado"/>
            <Educacion estudio="Licenciatura en Ciencia de Datos" institucion=" Universidad de Buenos Aires" situacion=" 3° Año"/>
            <Educacion estudio="Licenciatura en Matematica Aplicada" institucion=" Universidad de Buenos Aires" situacion=" 2° Año"/>
            <Educacion estudio= "Contabilidad" institucion= "Universidad de Buenos Aires" situacion= " Cursado hasta 4° Año"/>
            
        </div>
}


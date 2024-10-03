import {ObjetivoLaboral} from './ObjetivoLaboral.js'
import {ExperienciaLaboral} from './ExperienciaLaboral.js'
import {Educacion} from './Educacion.js'
import '../App.css';
export const Body = (props) => {
    const {nombre} = props
    return <div className='cuerpo'>
            <h1 className='nombre'>{nombre}</h1>
            <hr className='linea'/>
            <h1>JOB OBJECTIVE </h1>
            <ObjetivoLaboral/>
            <hr className='linea'/>
            <h1>WORK EXPERIENCE</h1>
            <ExperienciaLaboral empresa="HSBC s.a" puesto="Analyst jr  - Compliance" inicio="March de 2012" fin="December de 2013"/>
            <ExperienciaLaboral empresa="DEUSTCHE s.a" puesto="Analyst Jr - Custody Finanzas" inicio="March de 2014" fin="Febrary de 2016"/>
            <ExperienciaLaboral empresa="Instituto de Cultura Argentina" puesto="Accounting Analyst" inicio="March de 2016" fin="Febrary de 2019"/>
            <ExperienciaLaboral empresa="Colegio Nuestra Señora de la Misericordia" puesto="Preceptor" inicio="March de 2019" fin="December de 2023"/>
            <ExperienciaLaboral empresa="Freelance" puesto="Teacher - Mathematics" inicio="Febrary 2024" fin="Actualmente"/>
            <hr className='linea'/>
            <h1>EDUCATION</h1>
            <Educacion estudio="Course -  Python" institucion= "U.T.N" situacion= "Finalized"/>
            <Educacion estudio=" Course - WEB developer - HTML y CSS" institucion= "CODER HOUSE" situacion= "Finalized"/>
            <Educacion estudio="Course - JAVASCRIPT y REACT " institucion= "CODER HOUSE" situacion= "Finalized"/>
            <Educacion estudio="Degree - Ciencia de Datos" institucion=" University of Buenos Aires" situacion=" 3 año"/>
            <Educacion estudio="Degree - Matematica Aplicada" institucion=" University of Buenos Aires" situacion=" 2 año"/>
            <Educacion estudio= "Public Accountant" institucion= "University of Buenos Aires" situacion= "4 año - Abandonado"/>
            
        </div>
}
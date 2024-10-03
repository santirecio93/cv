import '../App.css';
export const Educacion = (props) =>{
    const {estudio, institucion, situacion}= props

    return <div className='experienciaLaboral'>
        <hr style={{backgroundColor:'gray', width:'40px', height:'2px'}}/>
            <h2 className='puestoLaboral'> { estudio}</h2>
            <div className='subDatosLaborales'>
            <h3> { institucion}  | </h3> 
            <h3> { situacion }</h3>
            </div>
            
        </div>
}
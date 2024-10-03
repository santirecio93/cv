import '../App.css';
export const  ExperienciaLaboral = (props) =>{
    const { empresa, puesto, inicio, fin , descripcion} = props    

    return <div className='experienciaLaboral'>
        <hr style={{backgroundColor:'gray', width:'40px', height:'2px'}}/>
            <h2 className='puestoLaboral'>{puesto}</h2> 
            <div className='subDatosLaborales'>
            <h3>{empresa} |</h3>   <h3>{inicio} -</h3> <h3>{fin}</h3>
            </div>
            <div>
                <h3>{descripcion}</h3>
            </div>
            
        </div>
}
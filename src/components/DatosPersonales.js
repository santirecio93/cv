import '../App.css';
export const DatosPersonales = (props) =>{
    const {edad, fecha, dni, telefono, mail, linkedin, ubicacion} = props
    return <div className="DatosPersonales">
        <div className='datos'>
            <div style={{display:"grid", placeItems:"center"}}>
            <img src="/datos.png" alt=""/>
            </div>
        <div>
        <h4 className="dato edad">Edad: {edad}</h4>
        <h4 className="dato fechaDeNac">Fecha de Nac : {fecha}</h4>
        <h4 className="dato dni">Id: {dni}  </h4>
        </div>
        </div>
        <a className="dato telefono" href="https://wa.me/5491155018894" target="_blank"> <img src='/llamada.png'></img>+54 {telefono}</a>
        <h4 className="dato ubicacion" ><img src="ubicacion.png" alt=""/>{ubicacion}</h4>
        <a className='dato mail' href='mailto:santiagorecio23@gmail.com' target="_blank" ><img src="/mail.png"/>{mail}</a> 
        <h4>
        <a className='dato linkedin' href='https://www.linkedin.com/in/santiago-recio-59716392' target="_blank" ><img src="linkedin.png"/>{linkedin}</a>
        </h4>
        
    </div>
}
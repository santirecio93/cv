export const Logo = (props) => {
    const {foto} = props
    
    return <div className='Logo'> 
        <img className='foto' src={foto} alt=""></img>
        
        </div>
}
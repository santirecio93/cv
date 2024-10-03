import { Boton } from './Boton';
export const NavBar = (props) => {
    const {l1,l2,l3,l4} = props;
    return <div style={{padding:'20px',display:'flex', justifyContent:'center', alignItems:'center'}}>
    <Boton texto= {l1}/>
    <Boton texto= {l2}/>
    <Boton texto= {l3}/>
    <Boton texto= {l4}/>
    </div>
}
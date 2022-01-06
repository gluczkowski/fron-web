import './style.css';
import 'primereact/resources/themes/nova/theme.css'
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css'
import { Link } from "react-router-dom";

function Menu(){
    return(
        <>
        <div className="menu">
            <div className="logo">
            <Link to="/"><img src={require('./logo-menu.png')} /></Link>
            </div>
            <div className="menu">
                <div className="item-menu">
                    <Link  to="colaboradores" id="botao-nav1" className="btn btn-success">Colaboradores                                      
                    </Link> 
                    <Link to="adicionar-colaborador" id="botao-nav2" className="btn btn-success"> Adicionar Colaborador
                    </Link>                                               
                </div>                
            </div>
        </div>
        </>
    )
}

export default Menu;
import { Colaborador } from "../../views/colaboradores/type";
import './style.css'


type Props = {
    colaborador:Colaborador;
}

function Card ({colaborador}: Props){
    
        return(
            <div className="card md-3">                               
                <div className="card-body">
                    <h5 className="nome-colaborador">{colaborador.nome}</h5>                     
                        <button id="botao-Editar" className="btn btn-success">Editar</button>    
                        <button id="botao-Desativar" className="btn btn-warning">Desativar</button> 
                </div>
            </div>
        )
    }
export default Card;
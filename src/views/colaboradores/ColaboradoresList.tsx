import Card from "../../components/card/card";
import { Colaborador } from "./type";

type Props = {
    colaborador:Colaborador[];
}

function ColaboradorList({colaborador}: Props){
    return(
        <div className="colaboradores-container">
            <div className="colaborador-list-items">
                {colaborador.map(colaboradores => (
                    <Card  key={colaboradores.id} colaborador={colaboradores}/>
                ))}
            </div>
                           
        </div>
    )
}
export default ColaboradorList;
import React, { useEffect, useState } from "react";
import { fetchColaboradores } from "../../api";
import Card from "../../components/card/card";
import {Colaborador} from "./type"
import ColaboradorList from "./ColaboradoresList";
import { useParams } from "react-router-dom";

type Props = {
    colaborador: Colaborador;
}


const  Colaboradores = () => {     
    
    const [colaborador , setColaborador] = useState<Colaborador[]>([]);

    useEffect(() => {
        fetchColaboradores()
            .then(response => setColaborador(response.data))
            .catch(error => console.log(error))
    },[])

    return(        
        <div>
            <h1> Colaboradores</h1>
            <ColaboradorList colaborador={colaborador}/>
        </div>
    )
}

export default Colaboradores;
import React from "react";
import Card from "../../components/card/card";

import { useState } from "react";
import './style.css';
import FormGroup from "../../components/form-group/formGroup";
import { useParams } from "react-router-dom";
import { isNamedTupleMember } from "typescript";


const AdicionarColaborador = () => {
    
    const {} = useParams();

    return (
        <div>
            <FormGroup/>
        </div>        
    )
}

export default AdicionarColaborador;
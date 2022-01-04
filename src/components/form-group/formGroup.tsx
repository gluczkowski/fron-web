import { useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import './style.css'

const defaultColaborador = {
    nome: '',
    cpf:'',
    nascimento:'',
    endereco:'',
    telefone:'',
    email:''
}


const FormGroup = () => {

    const [colaborador, setColaborador] = useState(defaultColaborador);
    const history = useHistory();
    
    function onHandleSubmit(){
        axios.post('http://localhost:8080/api/colaborador', colaborador)
        .then((response) => {
            history.push('colaboradores')
        });
    }

    return( 
        <div className='container'>
            <form typeof='POST'>
                <div className='container-content'>
                    <div className="fields col-md-8">
                        <label htmlFor='nome'>Nome:</label>
                        <input id='nome' name='nome' type="text" 
                        onChange={(e) => 
                        setColaborador({ ...colaborador, nome: e.target.value})
                        }/>
                    </div>
                    <div className="fields col-md-8">
                        <label htmlFor='cpf'>CPF:</label>
                        <input id='cpf' name='cpf' type="text"
                        onChange={(e) => 
                            setColaborador({ ...colaborador, cpf: e.target.value})
                            }/>
                    </div>
                    <div className="fields col-md-8">
                        <label htmlFor='nascimento'>Nascimento:</label>
                        <input id='nascimento' name='nascimento' type="text"
                        onChange={(e) => 
                            setColaborador({ ...colaborador, nascimento: e.target.value})
                            }/>
                    </div>
                    <div className="fields col-md-8">
                        <label htmlFor='endereco'>Endereço:</label>
                        <input id='endereco' name='endereco' type="text"
                        onChange={(e) => 
                            setColaborador({ ...colaborador, endereco: e.target.value})
                            }/>
                    </div>
                    <div className="fields col-md-8">
                        <label htmlFor='telefone'>Telefone:</label>
                        <input id='telefone' name='telefone' type="text"
                        onChange={(e) => 
                            setColaborador({ ...colaborador, telefone: e.target.value})
                            }/>
                    </div>
                    <div className="fields col-md-8">
                        <label htmlFor='email'>Email:</label>
                        <input id='email' name='email' type="text"
                        onChange={(e) => 
                            setColaborador({ ...colaborador, email: e.target.value})
                            }/>
                    </div>
                    <div className='botao'>
                        <button onClick={onHandleSubmit} id='botao-enviar' type='submit' className='btn btn-success'>Enviar</button>
                        <button id='botao-cancelar' className='btn btn-warning'>Cancelar</button>
                    </div>
                </div>
            </form>        
        </div>      
    )
}

export default FormGroup;
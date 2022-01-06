import axios from 'axios';
import { useState } from 'react';
import { useHistory } from 'react-router';
import './styles.css'

const defaultUsuario = {    
    email: '',
    senha:''
}

function Login () {

    const [usuario, setUsuario] = useState(defaultUsuario);
    const history = useHistory();

    function onHandleSubmit() {
        axios.post('http://localhost:8080/api/usuarios/autenticar', usuario)
        .then((response) => {
            history.push('colaboradores')
        });
    }
   

    return (         
        <div className='div-geral'>
            <div className='form-group ' id='formulario-login'>
            <h3 id="h3-login">Informe seu login e senha!</h3>
                <div className='row' id='form-content'>
                    <label htmlFor='login' ></label>
                    <input name='login' 
                        id='login' 
                        type="text" 
                        placeholder='Login'
                        onChange={(e) =>
                            setUsuario({...usuario, email : e.target.value})
                        }
                        >
                    </input>                
                </div>
                <div className='row' id='form-content'>
                    <label htmlFor='senha'></label>
                    <input name='senha' 
                        id='senha' 
                        type="password"
                        placeholder='Senha'
                        onChange={(e) =>
                            setUsuario({...usuario,senha : e.target.value})
                        }
                        >                            
                    </input>
                </div>           
                <button id='botao-login' 
                    className='btn btn-success col-md-r' 
                    type="submit"
                    onClick={onHandleSubmit}>
                        Entrar
                </button>
            </div>
        </div>         
    )
}

export default Login;
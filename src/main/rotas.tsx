import react from "react";
import Menu from "../components/menu/menu"
import Home from "../views/home/home"
import Colaboradores from "../views/colaboradores/colaboradores"
import AdicionarColaborador from "../views/colaboradores/adicionar-colaborador"

import { Route,  Switch , BrowserRouter} from "react-router-dom";
import Login from "../components/login";

function Rotas() {
    return(
        <BrowserRouter> 
        <Menu/>
            <Switch>
                <Route path="/colaboradores"><Colaboradores/> </Route>                
                <Route path="/adicionar-colaborador"><AdicionarColaborador/></Route>                
                <Route path="/"><Home/></Route>
                <Route path="/login"><Login/></Route>
            </Switch>            
        </BrowserRouter>
    )
}

export default Rotas;
import { BrowserRouter,Route, Routes } from "react-router-dom";
import Login from "../pages/login/Login";
import CadastroTipoEvento from "../pages/cadastroTipoEvento/CadastroTipoEvento";
import CadastroEvento from "../pages/cadastroEvento/CadastroEvento";
import CadastroTipoUsuario from "../pages/cadastroTipoUsuario/CadastroTipoUsuario";
import EventoAluno from "../pages/eventosAluno/EventoAluno";

const Rotas =() => {
    return(
        <BrowserRouter>
        <Routes>
            {/* http://localhost:3000/ => Login */}
            <Route path="/" element={<Login/>} exact/>

            {/* http://localhost:3000/TipoEvento => Cadastro Tipo Eventos */}
            <Route path="/TipoEvento" element={<CadastroTipoEvento/>}/>

            {/* http://localhost:3000/Evento => Cadastro Eventos */}
            <Route path="/Evento" element={<CadastroEvento/>}/>
        
            {/* http://localhost:3000/TipoUsuario => Cadastro do Usuario */}
            <Route path="/TipoUsuario" element={<CadastroTipoUsuario/>}/>

            {/* http://localhost:3000/Eventos => Eventos */}
             <Route path="/Eventos" element={<EventoAluno/>}/>

        </Routes>
        </BrowserRouter>
    )
}

export default Rotas;
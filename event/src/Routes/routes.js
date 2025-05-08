import { BrowserRouter,Route, Routes } from "react-router-dom";
import Login from "../pages/login/Login";
import CadastroTipoEvento from "../pages/cadastroTipoEvento/CadastroTipoEvento";
import CadastroEvento from "../pages/cadastroEvento/CadastroEvento";
import CadastroTipoUsuario from "../pages/cadastroTipoUsuario/CadastroTipoUsuario";

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

        </Routes>
        </BrowserRouter>
    )
}

export default Rotas;
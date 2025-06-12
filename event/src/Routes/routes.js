import { BrowserRouter,Route, Routes, Navigate, Router } from "react-router-dom";
import Login from "../pages/login/Login";
import CadastroTipoEvento from "../pages/cadastroTipoEvento/CadastroTipoEvento";
import CadastroEvento from "../pages/cadastroEvento/CadastroEvento";
import CadastroTipoUsuario from "../pages/cadastroTipoUsuario/CadastroTipoUsuario";
import EventoAluno from "../pages/eventosAluno/EventoAluno";
import { useAuth } from "../contexts/AuthContext";

const Privado = (props) => {
    const { usuario } = useAuth();
    //toke, idUsuario, tipoUsuario

    //Se nao estiver autenticado, manda para login
    if (!usuario) {
        return <Navigate to="/"/>;
    }
    //se o tipo do usuario nao for o permitido, bloqueia
    if (usuario.tipoUsuario !== props.tipoPermitido) {
        return <Navigate to="/"/>;
    }

    return <props.Item/>;
};


const Rotas =() => {
    return(
        <BrowserRouter>
        <Routes>
            {/* http://localhost:3000/ => Login */}
            <Route path="/" element={<Login/>} exact/>

            {/* http://localhost:3000/TipoEvento => Cadastro Tipo Eventos */}
            <Route path="/TipoEvento" element={<CadastroTipoEvento/>}/>

            {/* http://localhost:3000/Evento => Cadastro ventos */}
            <Route path="/Evento" element={<CadastroEvento/>}/>

            {/* http://localhost:3000/TipoUsuario => Cadastro do Usuario */}
            <Route path="/TipoUsuario" element={<CadastroTipoUsuario/>}/>

            {/* http://localhost:3000/Eventos => Eventos */}
            <Route path="/Eventos" element={<EventoAluno/>}/>

            <Route path="/" element={<Login/>} exact />
                <Route element={<Privado tipoPermitido="Adm" Item={CadastroEvento} />} path="/Evento"  />
                <Route element={<Privado tipoPermitido="Adm" Item={CadastroTipoEvento}/>} path="/TipoEvento"  />
                <Route element={<Privado tipoPermitido="Adm" item={CadastroTipoUsuario}/>} path="/TipoUsuario"  />
                <Route element={<Privado tipoPermitido="aluno" item={EventoAluno}/>} path="/Eventos"  />

        </Routes>
        </BrowserRouter>
    )
}

export default Rotas;
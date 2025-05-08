import Cadastro from "../../components/cadastro/Cadastro";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import Lista from "../../components/lista/Lista";

const CadastroTipoEvento = (props) => {
    return(
        <>
        <Header/>
        <main>
            <Cadastro 
            titulo="Cadastro Tipo de Eventos"
            placeholder = "Eventos"
            />
            <Lista
            titulo="Lista Tipo de Eventos"
            visil="none"
            visibi="none"
            />
        </main>
        <Footer/>
        </>
    )
}

export default CadastroTipoEvento;
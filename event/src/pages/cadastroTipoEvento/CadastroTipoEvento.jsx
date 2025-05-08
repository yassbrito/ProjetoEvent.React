import Cadastro from "../../components/cadastro/Cadastro";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import Lista from "../../components/lista/Lista";
import Banner from "../../assets/img/TipoEvento.png";

const CadastroTipoEvento = (props) => {
    return(
        <>
        <Header/>
        <main>
            <Cadastro 
            tituloh1="Cadastro Tipo de Eventos"
            Banner = {Banner}
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
import Cadastro from "../../components/cadastro/Cadastro";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import Lista from "../../components/lista/Lista";
import Banner from "../../assets/img/BannerUsuario.png"

const CadastroTipoUsuario = () => {
    return (
        <>
            <Header/>
                <Cadastro
                tituloh1 = "Cadastro Tipo de Usuário"
                Banner = {Banner}
                nomes = "Título"
                visibilidade ="none"
                
                />
                <Lista 
                   tituloLista ="Lista Tipo de Evento"
                   titulo = "titulo"
                   visi ="none"
                   visibi="none"
                   visil="none"

                   />
            <Footer/>
        </>
    )
}

export default CadastroTipoUsuario;
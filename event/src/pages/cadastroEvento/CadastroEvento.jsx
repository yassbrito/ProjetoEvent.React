import Cadastro from "../../components/cadastro/Cadastro";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import Lista from "../../components/lista/Lista";
import Banner from "../../assets/img/BannerEvento.png";

const CadastroEvento = (props)=> {
    return(
        <>
        <Header/>
        <Cadastro
                tituloCadastro = "Cadastro de Evento"
                Banner = {Banner}
                nomes = "Nome"
                tituloh1= "Cadastro de Evento"
                
                />

                <Lista 
                    tituloLista ="Lista de Evento"
                    titulo = "Nome"
                
                />
        <Footer/>
        </>
    )
}

export default CadastroEvento;
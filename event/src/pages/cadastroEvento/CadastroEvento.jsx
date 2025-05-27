import { useState } from "react";

import api from "../../Services/services";

import Swal from "sweetalert2";

import Cadastro from "../../components/cadastro/Cadastro";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import Lista from "../../components/lista/Lista";
import Banner from "../../assets/img/BannerEvento.png";

const CadastroEvento = (props) => {

    const [listaTipoEvento, setlistaTipoEvento] = useState([]);
    const [tipoEvento, setTipoEvento] = useState("");

    const [instituicoes, setInstituicoes] = useState("");
    const [data, setData] = useState("");

    const [evento, setEvento] = useState("");

    function alertar(icone, mensagem) {
        const Toast = Swal.mixin({
            toast: true,
            position: "top-end",
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
            didOpen: (toast) => {
                toast.onmouseenter = Swal.stopTimer;
                toast.onmouseleave = Swal.resumeTimer;
            }
        });
        Toast.fire({
            icon: icone,
            title: mensagem
        });
    }

    async function listarTipoEvento() {
        try {
            const resposta = await api.get("TiposEventos");

            setlistaTipoEvento(resposta.data)
        } catch (error) {
            console.log(error);
        }
    }

    function cadastrarEvento() {
        alert("conectando")
    }

    useState(() => {
        listarTipoEvento();
    }, []);

    return (
        <>
            <Header
                user="Administrador"
                botao_logar="none"
            />
            <Cadastro
                tituloCadastro="Cadastro de Evento"
                Banner={Banner}
                nomes="Nome"
                tituloh1="Cadastro de Evento"

                valorInputDescriacao={data}
                setValorInputDescricao={setData}

                valorSelectTpEvento={tipoEvento}
                setValorSelectTpEvento={setTipoEvento}

                valorSelectInstituicao={instituicoes}
                setValorSelectInstituicao={setInstituicoes}

                lista={listaTipoEvento}

                setValorInput={setEvento}
                setValorInputData={setEvento}

            />

            <Lista
                tituloLista="Lista de Evento"
                titulo="Nome"

            />
            <Footer />
        </>
    )
}

export default CadastroEvento;
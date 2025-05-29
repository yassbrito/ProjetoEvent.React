import { useEffect, useState } from "react";

import api from "../../Services/services";

import Swal from "sweetalert2";

import Cadastro from "../../components/cadastro/Cadastro";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import Lista from "../../components/lista/Lista";
import Banner from "../../assets/img/TipoEvento.png";

const CadastroTipoEvento = (props) => {

    const [TipoEvento, setTipoEvento] = useState("");
    const [listaTipoEvento, setListaTipoEvento] = useState([]);

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

    async function cadastrarTipoEvento(e) {
        e.preventDefault();

        if (TipoEvento.trim() != "") {

            try {
                await api.post("TiposEventos", { tituloTipoEvento: TipoEvento });

                // alert("success", "Sucesso! Cadastro realizado com sucesso!");

                setTipoEvento("");
                listarTipoEvento();
                alertar("success", "cadastro realizado com sucesso!")

            } catch (error) {
                console.log(error);
            }
        } else {
            alert("error", "Erro! Preencha os campos")
        }
    }

    async function listarTipoEvento() {
        try {
            const resposta = await api.get("tiposEventos");
            setListaTipoEvento(resposta.data);
        } catch (error) {
            console.log(error);
        }
    }


    async function deletarTipoEvento(tipoEventoId) {
        try {

            Swal.fire({
                title: "Voce tem certeza?",
                text: "Você não conseguira reverter!",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Sim, deletar!"
            }).then(async (result) => {
                if (result.isConfirmed) {
                    await api.delete(`tiposEventos/${tipoEventoId.idTipoEvento}`);
                    Swal.fire({
                        title: "Deletado!",
                        text: "Seu item foi deletado!",
                        icon: "success"
                    });
                }
            });
            listaTipoEvento();
        } catch (error) {
            console.log(error);
        }
    }

    async function editarTipoEvento(tipoEvento) {
        // console.log(tipoEventoId);
        const { value: novoTipoEvento } = await Swal.fire({
            title: "Modifique seu Tipo Evento",
            input: "text",
            inputLabel: "Novo Tipo Evento",
            inputValue: tipoEvento.tituloTipoEvento,
            showCancelButton: true,
            inputValidator: (value) => {
                if (!value) {
                    return "O campo precisa estar preenchido!";
                }
            }
        });
        if (novoTipoEvento) {
            try {
                api.put(`tiposEventos/${tipoEvento.idTipoEvento}`, { tituloTipoEvento: novoTipoEvento });
                Swal.fire(`O tipo evento modificado ${novoTipoEvento}`);
            } catch (error) {
                console.log(error);
            }
        }
    }


    useEffect(() => {
        listarTipoEvento();
    }, [listaTipoEvento]);

    return (
        <>
            <Header />
            
                <Cadastro
                    tituloh1="Cadastro Tipo de Eventos"
                    Banner={Banner}
                    placeholder="Eventos"
                    visibilidade="none"
                    funcCadastro={cadastrarTipoEvento}
                

                    valorInput={TipoEvento}
                    setValorInput={setTipoEvento}
                    // visibilidadecad="none"

                />
                <Lista
                    titulo="Lista Tipo de Eventos"
                    visil="none"
                    visibi="none"

                    lista={listaTipoEvento}
                    tipoLista="tiposEventos"
                    Titulolista="Lista de Tipo Eventos"

                    funcExcluir={deletarTipoEvento}
                    funcEditar={editarTipoEvento}
                />
    
            <Footer />
        </>
    )
}

export default CadastroTipoEvento;
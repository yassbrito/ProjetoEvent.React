import { useEffect, useState } from "react";

import api from "../../Services/services";

import Swal from "sweetalert2";

import Cadastro from "../../components/cadastro/Cadastro";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import Lista from "../../components/lista/Lista";
import Banner from "../../assets/img/BannerUsuario.png"

const CadastroTipoUsuario = (props) => {

    const [TipoUsuario, setTipoUsuario] = useState("");
    const [listaTipoUsuario, setListaTipoUsuario] = useState([]);

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

    async function cadastrarTipoUsuario(e) {
        e.preventDefault();

        if (TipoUsuario.trim() != "") {

            try {
                const cadastro = await api.post("TiposUsuarios", { tituloTipoUsuario: TipoUsuario });
                setTipoUsuario("");
                listarTipoUsuario();

                alertar("success", "cadastro realizado com sucesso!")

            } catch (error) {
                console.log(error);
            }
        } else {
            alert("error", "Erro! Preencha os campos")
        }
    }

    async function listarTipoUsuario() {
        try {
            const resposta = await api.get("TiposUsuarios");
            setListaTipoUsuario(resposta.data);
        } catch (error) {
            console.log(error);
        }
    }

    async function deletarTipoUsuario(tipoUsuarioId) {
        try {
            Swal.fire({
                title: "Voce tem certeza?",
                text: "Voce nao consiguira reverter!",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Sim, deletar!"
            }).then(async (result) => {
                if (result.isConfirmed) {
                    await api.delete(`TiposUsuarios/${tipoUsuarioId.idTipoUsuario}`);
                    Swal.fire({
                        title: "Deletado!",
                        text: "Seu item foi deletado!",
                        icon: "success"
                    });
                }
            });
            listaTipoUsuario();
        } catch (error) {
            console.log(error);
        }
    }

    async function editarTipoUsuario(tipoUsuario){

        const { value: novoTipoUsuario } = await Swal.fire({
                    title: "Modifique seu Tipo Usuario",
                    input: "text",
                    inputLabel: "Novo Tipo Usuario",
                    inputValue: TipoUsuario.tituloTipoUsuario,
                    showCancelButton: true,
                    inputValidator: (value) => {
                        if (!value) {
                            return "O campo precisa estar preenchido!";
                        }
                    }
                });
                if (novoTipoUsuario) {
                    try {
                        api.put(`tiposUsuarios/${tipoUsuario.idTipoUsuario}`, {tituloTipoUsuario: novoTipoUsuario});
                        Swal.fire(`O tipo Usuario modificado ${novoTipoUsuario}`);
                    } catch (error) {
                        console.log(error);
                    }
                }
    }



    useEffect(() => {
        listarTipoUsuario();

    }, [listaTipoUsuario])





    return (
        <>
            <Header />
            <Cadastro
                tituloh1="Cadastro Tipo de Usuário"
                Banner={Banner}
                nomes="Título"
                visibilidade="none"
                funcCadastro={cadastrarTipoUsuario}

                valorInput={TipoUsuario}
                setValorInput={setTipoUsuario}

            />
            <Lista
                tituloLista="Lista Tipo de Usuário"
                titulo="Titulo"
                visi="none"
                visibi="none"
                visil="none"

                tipoLista="TiposUsuarios"
                lista={listaTipoUsuario}

                funcExcluir={deletarTipoUsuario}
                funcEditar={editarTipoUsuario}

            />
            <Footer />
        </>
    )
}

export default CadastroTipoUsuario;
import Cadastro from "../../components/cadastro/Cadastro";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import Lista from "../../components/lista/Lista";
import banner_cadastroEvento from "../../assets/img/BannerEvento.png"
import { useEffect, useState } from "react";

import api from "../../Services/services";
import Swal from 'sweetalert2';

const CadastroDeEventos = () => {

    const [evento, setEvento] = useState("");
    const [tipoEvento, setTipoEvento] = useState("");
    const [dataEvento, setDataEvento] = useState("");
    const [descricao, setDescricao] = useState("");
    const [instituicao, setInstituicao] = useState("3FA85F64-5717-4562-B3FC-2C963F66AFA6");
    const [listaTipoEvento, setListaTipoEvento] = useState([])
    const [listaEvento, setListaEvento] = useState([])



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
            const resposta = await api.get("tiposEventos");
            setListaTipoEvento(resposta.data);
        } catch (error) {
            console.log(error);

        }

    }


    async function listarEvento() {
        try {
            const resposta = await api.get("eventos")
            setListaEvento(resposta.data)
        } catch (error) {
            console.log(error);

        }
    }



    async function cadastrarEvento(evt) {
        evt.preventDefault();
        if (evento.trim() != "") {
            try {
                await api.post("eventos", { nomeEvento: evento, idTipoEvento: tipoEvento, dataEvento: dataEvento, descricao: descricao, idInstituicao: instituicao });
                alertar("success", "Deu certo");
                setEvento("");
                setDataEvento("");
                setDescricao("");
                setTipoEvento("");

            } catch (error) {
                alertar("error", "Entre em contato com o suporte")
            }
        } else {
            alertar("error", "Preencha o campo vazio")

        }
    }

    async function deletarEvento(id) {
        Swal.fire({
            title: 'Tem certeza?',
            text: "Essa ação não poderá ser desfeita!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: "#B51d44",
            cancelButtonColor: "#000000",
            confirmButtonText: 'Sim, apagar',
            cancelButtonText: 'Cancelar'
        }).then(async (result) => {
            if (result.isConfirmed) {
                await api.delete(`eventos/${id.idEvento}`);
                alertar("success", "Tipo de evento excluído!");
            }
        }).catch(error => {
            console.log(error);
            alertar("error", "Erro ao excluir")
        })
    }


    async function editarEvento(evento) {
        try {
            const tiposOptions = listaTipoEvento
                .map(tipo => `<option value="${tipo.idTipoEvento}" ${tipo.idTipoEvento === evento.idTipoEvento ? 'selected' : ''}>${tipo.tituloTipoEvento}</option>`)
                .join('');

            const { value } = await Swal.fire({
                title: "Editar Tipo de Evento",
                html: `
        <input id="campo1" class="swal2-input" placeholder="Título" value="${evento.nomeEvento || ''}">
        <input id="campo2" class="swal2-input" type="date" value="${evento.dataEvento?.substring(0, 10) || ''}">
        <select id="campo3" class="swal2-select">${tiposOptions}</select>
        <input id="campo4" class="swal2-input" placeholder="Categoria" value="${evento.descricao || ''}">
      `,
                showCancelButton: true,
                confirmButtonText: "Salvar",
                cancelButtonText: "Cancelar",
                focusConfirm: false,
                preConfirm: () => {
                    const campo1 = document.getElementById("campo1").value;
                    const campo2 = document.getElementById("campo2").value;
                    const campo3 = document.getElementById("campo3").value;
                    const campo4 = document.getElementById("campo4").value;
                    const campo5 = document.getElementById("campo5").value;

                    if (!campo1 || !campo2 || !campo3 || !campo4 || !campo5) {
                        Swal.showValidationMessage("Preencha todos os campos.");
                        return false;
                    }

                    return { campo1, campo2, campo3, campo4, campo5 };
                }
            });

            if (!value) {
                console.log("Edição cancelada pelo usuário.");
                return;
            }

            console.log("Dados para atualizar:", value);

            await api.put(`eventos/${evento.idEvento}`, {
                nomeEvento: value.campo1,
                dataEvento: value.campo2,
                idTipoEvento: value.campo3,
                instituicao: value.campo4,
                descricao: value.campo5,
            });

            console.log("Evento atualizado com sucesso!");
            Swal.fire("Atualizado!", "Dados salvos com sucesso.", "success");
            listarEvento();

        } catch (error) {
            console.log("Erro ao atualizar evento:", error);
            Swal.fire("Erro!", "Não foi possível atualizar.", "error");
        }
    }



    useEffect(() => {
        listarTipoEvento();
        listarEvento();
    }, [listaEvento]);



    return (
        <>
            <Header />

            <Cadastro
                tituloh1 ="Cadastro Evento"
                img_banner={banner_cadastroEvento}
                nomes="Nome"
                funcCadastro={cadastrarEvento}
                valorInput={evento}
                setValorInput={setEvento}

                valorSelect={tipoEvento}
                setValorSelect={setTipoEvento}

                valorSelect2={instituicao}
                setValorSelect2={setInstituicao}

                valorDate={dataEvento}
                setValorDate={setDataEvento}

                valorText={descricao}
                setValorText={setDescricao}

                lista={listaTipoEvento}
            />

            <Lista
                Titulolista="Eventos"
                titulo="Nome"
                tipoLista="Eventos"
                lista={listaEvento}
                // dataEvento={dataEvento}
                funcExcluir={deletarEvento}
                funcEditar={editarEvento}
            />

            <Footer />

        </>
    )
}

export default CadastroDeEventos;
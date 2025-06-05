import { useEffect, useState } from "react";

import api from "../../Services/services";

import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import comentario from "../../assets/img/comentario.png";
import descricao from "../../assets/img/informacoes (1) 1.png";

import { format } from "date-fns";

import "./EventoAluno.css";

import Modal from "../../components/modal/Modal";
import Swal from "sweetalert2";
const EventoAluno = () => {

    const [listaEventos, setListaEventos] = useState([]);
    const [tipoModal, setTipoModal] = useState("");
    const [dadosModal, setDadosModal] = useState([]);
    const [modalAberto, setModalAberto] = useState(false);

    const [filtroData, setFiltroData] = useState(["todos"]);

    const [usuarioId, setUsuarioId] = useState("6ABE69EC-87D9-4963-8633-D50EB6E99905")

    async function listarEventos() {
        try {
            const resposta = await api.get("Eventos");
            const todosOsEventos = resposta.data;

            const respostaPresenca = await api.get("PresencasEventos/listarMinhas/" + usuarioId)
            const minhasPresencas = respostaPresenca.data;

            const eventosComPresencas = todosOsEventos.map((atualEvento) => {
                const presenca = minhasPresencas.find(p => p.idEvento === atualEvento.idEvento);

                return {
                    ...atualEvento,

                    possuiPresenca: presenca?.situacao === true,
                    idPresenca: presenca?.idPresencaEvento || null
                }
            })

            setListaEventos(eventosComPresencas);
            console.log(resposta.data);
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        listarEventos();
    }, [])


    function abrirModal(tipo, dados) {
        setModalAberto(true)
        setTipoModal(tipo)
        setDadosModal(dados)
    }

    function fecharModal() {
        setModalAberto(false);
        setDadosModal({});
        setTipoModal("");
    }

    async function manipularPresenca(idEvento, presenca, idPresenca) {
        try {
            if (presenca && idPresenca != "") {
                await api.put(`PresencasEventos/${idPresenca}`, {situacao: false});
                Swal.fire('Removido!', 'Sua presenca foi removida', 'success');

            } else if (idPresenca != "") {
                await api.put(`PresencasEventos/${idPresenca}`, {situacao: true});
                Swal.fire('Confirmado!', 'Sua presenca foi confirmada', 'success');

            } else {
                await api.post("PresencasEventos", {situacao: true, idUsuario: usuarioId, idEvento: idEvento});
                Swal.fire('Confirmado!', 'Sua presenca foi confirmado!', 'success');
            }

            listarEventos();
        } catch (error) {
            console.log(error);

        }
    }

    function filtrarEventos() {
        const hoje = new Date();

        return listaEventos.filter(evento => {
            const dataEvento = new Date(evento.dataEvento);

            if(filtroData.includes("todos")) return true;
            if(filtroData.includes("futuros") && dataEvento > hoje) return true;
            if(filtroData.includes("passados") && dataEvento < hoje) return true;

            return false;
        }

        );
    }

    return (
        <>
            <Header/>

            <main className="main_lista_eventos layout-grid">
                <div className="titulo">
                    <h1>Eventos</h1>
                    <hr />
                </div>
                <select onChange={(e) => setFiltroData([e.target.value])}>
                    <option value="todos" selected>Todos os Eventos</option>
                    <option value="futuros" >Somentes futuros</option>
                    <option value="passados" >Somente passados</option>
                    

                </select>
                <table className="tabela_lista_eventos">
                    <thead>
                        <tr className="th_lista_eventos">
                            <th>Titulo</th>
                            <th>Data do Evento</th>
                            <th>Tipo Evento</th>
                            <th>Descriçao</th>
                            <th>Comentarios</th>
                            <th>Participar</th>
                        </tr>
                    </thead>
                    <tbody>
                        {listaEventos.length > 0 ? (
                            filtrarEventos() && filtrarEventos().map((item) => (

                                <tr>
                                    <td>{item.nomeEvento}</td>
                                    <td>{format(item.dataEvento, "dd/MM/yy")}</td>
                                    <td>{item.tiposEvento.tituloTipoEvento}</td>
                                    <td>
                                        <button className="icon" onClick={() => abrirModal("descricaoEvento", { descricao: item.descricao })}>
                                            <img src={descricao} alt="" />
                                        </button>
                                    </td>
                                    <td>
                                        <button className="icon" onClick={() => abrirModal("comentarios", { idEvento: item.idEvento })}>
                                            <img src={comentario} alt="" />
                                        </button>
                                    </td>
                                    <td>
                                        <label className="switch">
                                            <input type="checkbox"
                                                checked={item.possuiPresenca}
                                                onChange={() => manipularPresenca(item.idEvento, item.possuiPresenca, item.idPresenca)
                                                } />
                                            <span className="slider"></span>
                                        </label>
                                    </td>
                                </tr>
                            ))
                        ) :
                            (
                                <p>Nenhum Evento encontrado</p>
                            )
                        }

                    </tbody>
                </table>
            </main>

                <Footer/>

            {modalAberto && (

                <Modal
                    titulo={tipoModal == "descricaoEvento" ? "Descriçao do evento" : "Comentario"}
                    tipoModel={tipoModal}

                    idEvento={dadosModal.idEvento}

                    descricao={dadosModal.descricao}

                    fecharModal={fecharModal}
                />
            )}
        </>
    )
}

export default EventoAluno
import { useEffect, useState } from "react";

import api from "../../Services/services";

import comentario from "../../assets/img/comentario.png";
import descricao from "../../assets/img/informacoes (1) 1.png";

import { format } from "date-fns";

import "./EventoAluno.css";

import Modal from "../../components/modal/Modal";

const EventoAluno = () => {

    const [listaEventos, setListaEventos] = useState([]);

    async function listarEventos() {
        try {
            const resposta = await api.get("Eventos");
            setListaEventos(resposta.data);
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        listarEventos();
    }, [])

    return (
        <>
        <Modal>

        <main className="main_lista_eventos layout-grid">
            <div className="titulo">
                <h1>Eventos</h1>
                <hr />
            </div>
            <select name="" id="">
                <option value="" selected>Todos os Eventos</option>
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
                        listaEventos.map((item) => (

                            <tr>
                                <td>{item.nomeEvento}</td>
                                <td>{format(item.dataEvento,`dd/MM/yy`)}</td>
                                <td>{item.tipoEvento.tituloTipoEvento}</td>
                                <td>
                                    <button className="icon">sagui
                                        <img src={descricao} alt="" />
                                    </button>
                                </td>
                                <td>
                                    <button className="icon">
                                        <img src={comentario} alt="" />
                                    </button>
                                </td>
                                <td>
                                    <label className="switch">
                                        <input type="checkbox" />
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
        </Modal>
        </>
    )
}

export default EventoAluno
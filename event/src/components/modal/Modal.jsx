import { useEffect, useState } from "react";

import ImgDeletar from "../../assets/img/lixeira.png";

import api from "../../Services/services";

import "./Modal.css";

const Modal = (props) => {

    const [comentarios, setComentarios] = useState([]);

    const [novoComentario, setNovoComentario] = useState("");

    const [usuarioId, setUsuarioId] = useState("C274D90B-0952-43C5-959C-4B948BA77741");

    async function listarComentarios() {
        try {
            const resposta = await api.get(`ComentariosEventos/ListarSomenteExibe?id=${props.idEvento}`);

            setComentarios(resposta.data);

            console.log(resposta.data);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        listarComentarios();
    })

    async function cadastrarComentario() {
        try {
            await api.post("ComentariosEventos", {
                idUsuario: usuarioId,
                idEvento: props.idEvento,
                Descricao: comentarios
            })
        } catch (error) {
            console.log(error);

        }
    }

    async function deletarComentario(idComentario) {
        try {
            await api.delete(`ComentariosEventos/${idComentario}`);
        } catch (error) {
            console.log(error);

        }
    }


    return (
        <>
            <div className="model-overlay" onClick={props.fecharModel}></div>
            <div className="model">
                <h1>{props.titulo}</h1>
                <div className="model_conteudo">
                    {props.tipoModel === "descricaoEvento" ? (
                        <p>{props.descricao}</p>
                    ) : (
                        <>
                            {comentarios.map((item) => (
                                <div key={item.idComentarioEvento}>
                                    <strong>{item.usuario.nomeUsuario}</strong>
                                    <img src={ImgDeletar} alt="Deletar"
                                        onClick={() => deletarComentario(item.idComentarioEvento)} />
                                    <p>{item.descricao}</p>
                                    <hr />

                                </div>
                            ))}
                            <div>
                                <input type="text" placeholder="Escreva seu comentario..."
                                    value={novoComentario}
                                    onChange={(e) => setNovoComentario(e.target.value)} />
                                <button onClick={() => cadastrarComentario(novoComentario)}>
                                    cadastrar
                                </button>
                            </div>
                        </>
                    )}
                </div>

            </div>
        </>
    )
}

export default Modal;
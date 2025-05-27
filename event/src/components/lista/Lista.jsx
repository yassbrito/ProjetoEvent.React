import "./Lista.css";
import Editar from "../../assets/img/Editar.png";
import Excluir from "../../assets/img/Deletar.png";

const Lista = (props) => {
    return (
        <section className="listagem">
            <div className="titulo_organizado">
                <h1>Lista Tipo de Eventos</h1>
                <hr className="linha_titulo" />
            </div>

            <div className="tabela">
                <table>
                    <thead>
                        <tr className="table_cabecalho">

                            <th style={{ display: props.visibilidade }}>Titulo</th>
                            <th style={{ display: props.visil }} id="tipoEvento">tipoEvento</th>
                            <th>Editar</th>
                            <th>Deletar</th>
                        </tr>
                    </thead>

                    <tbody>
                        {props.lista && props.lista.length > 0 ? (
                            props.lista.map((item) => (
                                <tr className="item_lista"
                                    key={props.tipoLista == "tiposEventos" ? item.IdTipoEvento : item.IdTipoUsuario}

                                >
                                    <td data-cell="Nome" style={{ display: props.visibi }}></td>
                                    <td data-cell="Tipo Evento" >{props.tipoLista == "tiposEventos" ? item.tituloTipoEvento : item.tituloTipoUsuario}   </td>
                                    <td data-cell="Editar">
                                        <button onClick={() => {props.funcEditar(item)}} className="botao_Editar">
                                        <img src={Editar} alt="Caneta"/>
                                        </button>
                                    </td>
                                    <td data-cell="Deletar">
                                        <button onClick={() => {props.funcExcluir(item)}} className="botao_Excluir">
                                        <img src={Excluir} alt="Lixeira" />
                                        </button>
                                    </td>
                                </tr>

                            ))

                        ) : (
                            <tr>
                                <td colSpan="4">Nenhum gênero foi encontrado.</td>
                            </tr>
                        )}


                    </tbody>

                </table>
            </div>
        </section>
    )
}

export default Lista;
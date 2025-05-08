import "./Lista.css";
import Editar from "../../assets/img/Editar.png";
import Excluir from "../../assets/img/Deletar.png";

const Lista = (props) => {
    return(
        <section className="listagem">
            <div className="titulo_organizado">
            <h1>Lista Tipo de Eventos</h1>
            <hr className="linha_titulo"/>
            </div>

            <div className="tabela">
                <table>
                    <thead>
                        <tr className="table_cabecalho">

                            <th style={{display:props.visibilidade}}>Titulo</th>
                            <th style={{display:props.visil}} id="tipoEvento">tipoEevento</th>
                            <th>Editar</th>
                            <th>Deletar</th>
                        </tr>
                    </thead>

                    <tbody>
                        <tr className="item_lista">
                            <td data-cell="Nome" style={{display:props.visibi}} >Tipo Evento</td>
                            <td data-cell="Tipo Evento" > Tipo Evento</td>
                            <td data-cell="Editar">
                                <img src={Editar} alt="Editar"/>
                                </td>

                            <td data-cell="Deletar">
                                <img src={Excluir} alt="Lixeira"/>
                                </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </section>
    )
}

export default Lista;
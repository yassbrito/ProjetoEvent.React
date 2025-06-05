
import "./Cadastro.css";
import img_banner from "../../assets/img/BannerEvento.png";
import Botao from "../botao/Botao";

const Cadastro = (props) => {
    return (
        <main className="main_cadastro">
            <div className="titulo">
                <h1>{props.tituloh1}</h1>
                <hr />
            </div>

            <section className="section_cadastro">
                <div className="banner_cadastro">
                    <img src={props.img_banner} alt="Fundo banner do cadastro eventos" />
                </div>

                <form action="" className="layout_grid form_cadastro"
                    onSubmit={props.funcCadastro}
                >
                    <div className="campo_cad_titulo">
                        <label htmlFor="Nome"></label>
                        <input type="text"
                            nome="nome"
                            placeholder="Titulo"
                            value={props.valorInput}
                            onChange={(e) => props.setValorInput(e.target.value)}
                        />
                    </div>

                    <div className="campos_cadastro" style={{ display: props.visibilidadecad }}>

                        <div>

                            {/* data evento */}
                            <div className="campo_cad_titulo">
                                <input type="date"
                                    style={{ display: props.data }}
                                    value={props.valorDate}
                                    onChange={(e) => props.setValorDate(e.target.value)}
                                />
                            </div>

                            {/* tipo evento */}
                            <div className="campo_cad_titulo option">
                                <label htmlFor="Nome"></label>
                                <select name="Tipo Evento" id="" className="select_cad"
                                    value={props.valorSelect}
                                    onChange={(e) => props.setValorSelect(e.target.value)}
                                >
                                    <option value="" disabled selected>Tipo Evento</option>
                                    {props.lista && props.lista.length > 0 && props.lista.map((itemTipoEvento) => (
                                        (
                                            <option value={itemTipoEvento.idTipoEvento}>{itemTipoEvento.tituloTipoEvento}</option>
                                        ))
                                    )}
                                </select>
                            </div>`

                            <select nome="Instituicao" id="">
                                <option value="" disabled selected>Instituicao</option>
                                <option value="E47E2F25-8E58-4E48-983B-36281FA6BA37">Senai</option>
                            </select>


                                <div className="campo_cad_titulo" >
                                {/* <select name="" id=""
                                    style={{ display: props.Inst }}
                                    value={props.valorSelect2}
                                    onChange={(e) => props.setValorSelect2(e.target.value)}
                                >
                                    <option selected value="">Senai</option>
                                </select> */}
                                <textarea name="" id="" placeholder="Descrição" className="descricao"
                                    style={{ display: props.desc }}
                                    value={props.valorText}
                                    onChange={(e) => props.setValorText(e.target.value)}
                                ></textarea>
                            </div>
                        </div>
                    </div>      
                        <Botao nomeDoBotao="Cadastrar" />
                </form>
            </section>
        </main>





    )
}

export default Cadastro;
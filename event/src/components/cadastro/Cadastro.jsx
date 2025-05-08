
import "./Cadastro.css";
import Banner from "../../assets/img/TipoEvento.png";
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
                    <img src={props.Banner} alt="Fundo banner do cadastro eventos" />
                </div>

                <form action="" className="layout_grid form_cadastro">

                    <div className="campos_cadastro">
                        <div className="campo_cad_titulo">
                            <label htmlFor="Nome"></label>
                            <input type="text" nome="nome" placeholder="titulo" />
                        </div>
                        <div className="campo_cad_titulo" style={{display: props.visibilidade}}>
                            <label htmlFor="Nome"></label>
                        </div>

                        <Botao nomeDoBotao="Cadastrar" />
                    </div>
                </form>
            </section>
        </main>
    )
}

export default Cadastro;
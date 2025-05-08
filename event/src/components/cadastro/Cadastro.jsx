
import "./Cadastro.css";
import Logo_banner from "../../assets/img/undraw_add_tasks_re_s5yj (1) 1.png";
import Botao from "../botao/Botao";

const Cadastro = (props) => {
    return (
        <main className="main_cadastro">
            <div className="titulo">
                <h1>Cadastro tipos de eventos</h1>
                <hr />
            </div>

            <section className="section_cadastro">
                <div className="banner_cadastro">
                    <img src={Logo_banner} alt="Fundo banner do cadastro eventos" />
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
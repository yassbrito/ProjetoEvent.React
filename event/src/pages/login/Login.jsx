import Logo from "../../assets/img/logo1.svg";
import "./Login.css";
import Botao from "../../components/botao/Botao";
const Login = () => {
    return(
        <main className="main_login">
            <div className="Banner"></div>
            <section className="section_login">
                <img src={Logo} alt="Logo do Event+" />
                <form action="" className="form_login">
                <h1>Login</h1>
            <div className="campos_login">
                <div className="campo_input">
                    <label htmlFor="username">username:</label>
                    <input type="username" name="username" placeholder="Username"/>
                </div>
                <div className="campo_input">
                    <label htmlFor="password">password:</label>
                    <input type="password" name="senha" placeholder="Password"/>
                    
                </div>
              </div>
              <p>Esqueceu a senha?</p>
              <Botao nomeDoBotao="Login"/>
                </form>
            </section>
        </main>
    )
}

export default Login;
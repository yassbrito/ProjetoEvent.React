import Logo from "../../assets/img/Banner.svg";
import "./Login.css";
import Botao from "../../components/botao/Botao";
import api from "../../Services/services";
import { useState } from "react";

import { userDecodeToken } from "../../auth/Auth";
import secureLocalStorage from "react-secure-storage";

import { useNavigate } from "react-router-dom";

const Login = () => {

    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");

    const navigate = useNavigate();

    async function realizarAutenticacao(e){
        e.preventDefault();


        const usuario = {
            email: email,
            senha: senha
        }
        if(senha.trim() != "" || email.trim() !=""){

            try {
                const resposta = await api.post("Login", usuario);

                const token = resposta.data.token;
                console.log(token);

                if (token) {
                    const tokenDecodificado = userDecodeToken(token);

                    // console.log("Token decodificado");
                    // console.log(tokenDecodificado.tipoUsuario);
                    
                    secureLocalStorage.setItem("tokenLogin", JSON.stringify(tokenDecodificado));

                    if (tokenDecodificado.tipoUsuario === "aluno") {
                        navigate("/Eventos")
                    }else{
                        navigate("/Evento")
                    }
                }
                
    
            } catch (error) {
                console.log(error);
                alert("Email ou senha invalido! Para duvidas, entre em contato com o suporte.");
            }
        }else{
            alert("PREENCHA OS CAMPOS VAZIOS PARA REALIAZAR O LOGIN!")
        }

    }

    return(
        <main className="main_login">
            <div className="Banner"></div>
            <section className="section_login">
                <img src={Logo} alt="Logo do Event+" />
                <form action="" className="form_login" onSubmit={realizarAutenticacao}>
                <h1>Login</h1>
            <div className="campos_login">
                <div className="campo_input">
                    {/* <label htmlFor="username">username:</label> */}
                    {/* <input type="username" name="username" placeholder="Username"/> */}
                </div>
                <div className="campo_input">
                    <label htmlFor="password">password:</label>
                    <input type="email" name="email" 
                    placeholder="E-mail" 
                    value={email} 
                    onChange={(e)=>setEmail(e.target.value)}
                    />
                </div>
                <div className="campo_input">
                    <label htmlFor="password">password:</label>
                    <input type="password" name="Senha" 
                    placeholder="Senha" 
                    value={senha} 
                    onChange={(e)=>setSenha(e.target.value)}
                    />
                    
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
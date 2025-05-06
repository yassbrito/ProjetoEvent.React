import "./Header.css";
import Logo from "../../assets/img/logo1.svg";
import Adm from "../../assets/img/Vector.png";

const Header = () => {
    return(
        <header>
            <div className="layout_grid cabecalho">
                
                <img src={Logo} alt="Logo do Event" />
               

                <nav className="nav_header">
                    <a href="" className="link_header">Home</a>
                    <a href="" className="link_header">Evento</a>
                    <a href="" className="link_header">Usuarios</a>
                    <a href="" className="link_header">Contatos</a>
                    
                </nav>
                <div className="organizando_image">
                    <a href="" className="link_header">Administrador <img src={Adm} alt="simbolo adm" /></a>
                    
                    </div>
            </div>
        </header>
    )
}

export default Header;
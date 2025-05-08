import './App.css';
import Header from './components/header/Header.jsx';
import Login from "./pages/login/Login.jsx";
import Footer from "./components/footer/Footer.jsx";
import Cadastro from "./components/cadastro/Cadastro.jsx";
import Lista from "./components/lista/Lista.jsx";


function App() {
  return (
    <>
    {/* <Login/> */}
    <Header/>
    <Cadastro
    titulo="Cadastro Tipo de Eventos"
    placeholder = "Eventos"/>
    <Lista
    titulo="Lista Tipo de Eventos"
    visil="none"
    visibi="none"/>
    <Footer/>
    </>
  );
}

export default App;

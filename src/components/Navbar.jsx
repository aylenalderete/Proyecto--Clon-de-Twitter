import "./Navbar.css"
import Searchbar from "./Searchbar"
import logoCeleste from "../assets/logo-twitter-celeste.png";
import 'boxicons'

function Navbar() {
    return (
        <div className= "Navbar-container">
            <div className= "Navbar-izq">
                <div className= "container-logo-navbar">
                    <img className= "twitter-logo-navbar" src= {logoCeleste}></img>
                </div>
                <div>
                    <div className= "iconos-container">
                        <div className= "container-de-cadauno">
                            <i className='bx bxs-home-circle iconosnavbar' style={{fontSize: "26px", }}></i>
                            <p className= "p-iconos-navbar">Inicio</p>
                        </div>
                        <div className= "container-de-cadauno">
                            <i className='bx bx-hash iconosnavbar' style={{fontSize: "26px"}}></i>
                            <p className= "p-iconos-navbar">Explorar</p>
                        </div>
                        <div className= "container-de-cadauno">
                            <i className='bx bx-bell iconosnavbar' style={{fontSize: "27px"}}></i>
                            <p className= "p-iconos-navbar">Notificaciones</p>
                        </div>
                        <div className= "container-de-cadauno">
                            <i className="bi bi-envelope iconosnavbar" style={{fontSize: "24px"}}></i>
                            <p className= "p-iconos-navbar">Mensajes</p>
                        </div>
                        <div className= "container-de-cadauno">
                            <i className='bx bx-bookmark bx-sm iconosnavbar'></i>
                            <p className= "p-iconos-navbar">Guardados</p>
                        </div>
                        <div className= "container-de-cadauno">
                            <i className="bi bi-filter-square iconosnavbar" style={{fontSize: "22px"}}></i>
                            <p className= "p-iconos-navbar">Listas</p>
                        </div>
                        <div className= "container-de-cadauno">
                            <i className="bi bi-person iconosnavbar" style={{fontSize: "27px"}}></i>
                            <p className= "p-iconos-navbar">Perfil</p>
                        </div>
                        <div className= "container-de-cadauno">
                            <i className="bi bi-three-dots iconosnavbar" style={{fontSize: "24px"}}></i>
                            <p className= "p-iconos-navbar">Más opciones</p>
                        </div>
                    </div>
                    <div>
                        <button className= "boton-twittear">Twittear</button>
                    </div>
                </div>
                <div>
                    <p>Cuenta</p>
                </div>
            </div>
            {/* <div className= "Navbar-medio">
                Componente
            </div> */}
            <div className= "Navbar-der">
                <div className= "container-buscador">
                    <Searchbar />
                </div>
                <div className= "trends-container">algo</div>
                <div></div>
            </div>
        </div>
    )
}

export default Navbar

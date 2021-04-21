import "./Login.css";
import logoCeleste from "../assets/logo-twitter-celeste.png";
import logoBlanco from "../assets/logo-twitter-blanco.png";
import fondoLogin from "../assets/fondo-login.png";
import { Link } from "react-router-dom";

function Login() {
  return (
    <div>
      <div className="container-login">
        <div className="foto-login-container">
          <img className="foto-fondo-login" src={fondoLogin}></img>
          <img className="logo-fondo-login" src={logoBlanco}></img>
        </div>
        <div className="login-container">
          <img className="twitter-logo-login" src={logoCeleste}></img>
          <div className="titulo-login-container">
            <p className="titulo-login">Lo que está pasando ahora</p>
          </div>
          <div className="titulo2-login-container">
            <p className="titulo2-login">Únete a Twitter hoy mismo.</p>
          </div>
          <div className="botones-login-container">
            <Link>
              <button className="boton-login-registrate">Regístrate</button>
            </Link>
            <Link to="/iniciarsesion">
              <button className="boton-login-iniciar-sesion">
                Iniciar sesión
              </button>
            </Link>
          </div>
        </div>
      </div>
      <div className="navbar-abajo">
          <a className= "navbar-abajo-a" href='#'> Acerca de</a>
          <a className= "navbar-abajo-a" href='#'> Centro de ayuda</a>
          <a className= "navbar-abajo-a" href='#'> Condiciones de Servicio</a>
          <a className= "navbar-abajo-a" href='#'> Política de Privacidad</a>
          <a className= "navbar-abajo-a" href='#'> Política de cookies</a>
          <a className= "navbar-abajo-a" href='#'> Información de anuncios</a>
          <a className= "navbar-abajo-a" href='#'> Blog</a>
          <a className= "navbar-abajo-a" href='#'> Estado</a>
          <a className= "navbar-abajo-a" href='#'> Empleos</a>
          <a className= "navbar-abajo-a" href='#'> Recursos para marcas</a>
          <a className= "navbar-abajo-a" href='#'> Publicidad</a>
          <a className= "navbar-abajo-a" href='#'> Marketing</a>
          <a className= "navbar-abajo-a" href='#'> Twitter para empresas</a>
          <a className= "navbar-abajo-a" href='#'> Desarrolladores</a>
          <a className= "navbar-abajo-a" href='#'> Guía</a>
          <a className= "navbar-abajo-a" href='#'> Configuración</a>
          <a className= "navbar-abajo-a" href='#'> © 2021 Twitter, Inc.</a>
      </div>
    </div>
  );
}

export default Login;

import logoCeleste from "../assets/logo-twitter-celeste.png";
import "../components/IniciarSesion.css";

function IniciarSesion() {
  return (
    <div className="iniciarsesion-container">
      <div className="logo-iniciarsesion-container">
        <img className="twitter-logo-login" src={logoCeleste}></img>
      </div>
      <div className="iniciarsesion-titulo-container">
        <h3 className="iniciarsesion-titulo">Iniciar sesión en Twitter</h3>
      </div>
      <form className= "form-iniciarsesion">
        <input className= "input-iniciarsesion" placeholder="Teléfono, correo o usuario"></input>
        <input className= "input-iniciarsesion" placeholder="Contraseña"></input>
        <button className="boton-login-registrate">Iniciar Sesión</button>
      </form>
      <div>
        <p className="olvidarcontraseña">
          ¿Olvidaste tu contraseña? · Regístrate en Twitter
        </p>
      </div>
    </div>
  );
}

export default IniciarSesion;

import StarIcon from "../assets/staricon.png"
import "./Home.css"
import 'boxicons'

function Home() {
    return (
        <div>
            <div className= "tweet-container">
                <div className= "inicio-tweet-container">
                    <p className= "inicio-tweet-p">Inicio</p>
                    <img className= "starIcon" src= {StarIcon}/>
                </div>
                <div>
                    <div>
                        <div className= "foto-de-perfil-tweet">foto</div>
                    </div>
                    <div className= "input-tweet-container">
                        <input className="input-tweet" placeholder= "¿Qué está pasando?"></input>
                        <div className= "texto-iconoplaneta-container">
                            <i className='bx bx-world iconoplaneta'></i>
                            <p className= "texto-iconoplaneta">Cualquier persona puede responder</p>                            
                        </div>
                    </div>
                    <div className= "boton-twittear-iconos-container">
                        <div>
                            <i className='bx bx-image-alt icono-tweet'></i>
                            <i className='bx bxs-file-gif icono-tweet' ></i>
                            <i className='bx bx-poll icono-tweet' ></i>
                            <i className="bi bi-emoji-smile icono-tweet"></i>
                            <i className="bi bi-calendar4-week icono-tweet"></i>
                        </div>
                        <div>
                            <button className= "boton-twittear">Twittear</button>
                        </div>                        
                    </div>
                </div>
            </div>
            <div>
                Tweets de seguidores
            </div>
        </div>
    )
}

export default Home

import "./Searchbar.css"
import { useState } from "react"

function Searchbar() {

    const [buscar, setBuscar] = useState("");

    function handleChange(e) {
      setBuscar(e.target.value);
    }
  
    const handleKeyDown = ({ keyCode }) => {
        if (keyCode !== 13) return null;
        else {
            
        }
    };

    return (
        <div>
            <form className= "form-buscador" onSubmit={(e) => e.preventDefault()}>
                <input 
                className= "input-buscador"
                placeholder="Buscar en Twitter"
                value={buscar}
                onChange={handleChange}
                onKeyDown={handleKeyDown}>
                </input>
            </form>
        </div>
    )
}

export default Searchbar

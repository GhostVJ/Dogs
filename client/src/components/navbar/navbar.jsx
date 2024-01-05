import { Link } from "react-router-dom";
import './navbar.css';

function Navbar({handleChange, handleSubmit}) {
  return (
    <div className="NavBar">
       <table><tr><td><form onChange={handleChange}>
          <input type="search" className='searchtext' placeholder='Buscar'/>
          <button type="submit" onClick={handleSubmit} className="search-button">
        <span className="search-icon"></span>
        Buscar
      </button>
        </form>
        </td><td>
        <form>
        <Link to="/form"><button className="search-button">Agregar Raza</button></Link>
        </form>
        </td>
        </tr></table>
    </div>
  );
}

export default Navbar;
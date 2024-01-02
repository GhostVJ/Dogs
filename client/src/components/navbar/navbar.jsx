import './navbar.css';

function Navbar() {
  return (
    <div className="NavBar">
        <form>
          <input type="text" className='searchtext' placeholder='Buscar' />
          <button>Buscar</button>
        </form>
    </div>
  );
}

export default Navbar;
import {Link} from "react-router-dom"

export default function Navbar() {
  return (
    <header>
        <nav>
            <input type="checkbox" id="check"/>
            {/* <label for="check" class="checkbtn"> */}
              {/* <i class="fas fa-bars"></i> */}
            {/* </label> */}
            <Link to="/">
            <label className="logo">Rolling Calzados</label>
            </Link>
            <ul>
              <li><Link className="active" to="/">Home</Link></li>
              <li><a href="#">Destacado</a></li>
              <li><a href="#">Contacto</a></li>
              <li><a href="#">Favoritos</a></li>
              <li><Link to="/Cart">Carrito</Link></li>
              <li><a href="#">Ayuda</a></li>
            </ul>
          </nav>
    </header>
  )
}

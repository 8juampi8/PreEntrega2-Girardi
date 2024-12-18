import "./navbar.css"
import CartWidget from "./cartwidget/CartWidget"
import { Link } from "react-router-dom"

const Navbar = () => {

  return (
    <nav className="navbar">
      <div className="brand">
        <Link to="/">
          <img src="../../../tbrc.png" alt="logo" />
        </Link>
      </div>

      <ul className="products-container">
        <Link to="/type/Lata" className="category-active">Latas</Link>
        <Link to="/type/Chopera20l" className="category-active">Choperas 20l</Link>
        <Link to="/type/Chopera50l" className="category-active">Choperas 50l</Link>
      </ul>

      <CartWidget />
    </nav>
  )
}

export default Navbar

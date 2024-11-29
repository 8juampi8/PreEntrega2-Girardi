import "./navbar.css"
import CartWidget from "./cartwidget/CartWidget"

const Navbar = () => {

  const products = ["Latas", "Choperas 20l", "Choperas 50l"]

  return (
    <nav className="navbar">
      <div className="brand">
        <img src="" alt="logo" />
      </div>

      <ul className="products-container">
        {
        products.map((product,nombre)=>{
          return <li key={nombre}>{product}</li>
        })
        }
      </ul>

      <CartWidget />
    </nav>
  )
}

export default Navbar

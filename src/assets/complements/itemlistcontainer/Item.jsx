import { Link } from "react-router-dom"

const Item = ({product}) => {

  return (

    <div className="item">
      
      <img src={product.image} width={200} />
      <h2>{product.type} de {product.name}</h2>
      <p>{product.price}</p>
      <Link to={"/detail/"+ product.id} className="more-button">Ver más</Link>

    </div>

  )

}

export default Item

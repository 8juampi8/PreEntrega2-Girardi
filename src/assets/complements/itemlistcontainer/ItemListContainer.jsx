import { useState, useEffect } from "react"
import { getProducts } from "../../data.js"
import ItemList from "./ItemList.jsx"
import { useParams } from "react-router-dom"
import "./itemlistcontainer.css"

const ItemListContainer = ({ welcome }) => {
  const [products, setProducts] = useState([])

  const { idType } = useParams()

  useEffect(() => {
    getProducts()
      .then((data) => {
        if(idType){
          const filterProducts = data.filter( (product) => product.type === idType )
          setProducts(filterProducts)
        }else{
          setProducts(data)
        }
      })
      .catch((error) => {
        console.error(error)
      })
      .finally(() => {
        console.log("termino la promesa")
      })
  }, [idType])

  return (
    <div className="itemlistcontainer">
      <h1>{welcome}</h1>
      <ItemList products={products} />
    </div>
  )
}

export default ItemListContainer
import { useEffect, useState } from "react"
import {getProducts} from "../../data"
import ItemDetail from "./ItemDetail"
import { useParams } from "react-router-dom"


const ItemDetailContainer = () => {

  const [product, setProduct] = useState({})

  const idProduct = useParams()

  useEffect(()=>{
    getProducts()
    .then((data)=>{
      const findProduct = data.find((dataProduct)=> dataProduct.id === idProduct)
      setProduct(findProduct)
    })
    .catch((error)=>console.error(error))
    .finally(()=>console.log("Terminó la promesa"))
  }, [idProduct])

  return (
    <div>
        <ItemDetail product={product} />
    </div>
  )
}

export default ItemDetailContainer

import { RiShoppingCartLine } from "react-icons/ri"

const CartWidget = () => {
  return (
    <div className="cartwidget">
      <RiShoppingCartLine size={25} color="white"/>
      <p>0</p>
    </div>
  )
}

export default CartWidget

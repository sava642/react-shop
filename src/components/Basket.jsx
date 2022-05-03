import { useContext } from "react";
import { ShopContext } from '../context'

function Basket() {
	const { order, handleBasketShow = Function.prototype } = useContext(ShopContext);

	const quantity = order.length;
	return (
		<div className='cart  teal darken-4 white-text' onClick={handleBasketShow}>
			<i className="material-icons">shopping_cart</i>
			{quantity ? <span className='cart-quantity'>{quantity}</span> : null}
		</div>
	)
}
export { Basket }

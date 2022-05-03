import { BasketItem } from './BasketItem'
import { ShopContext } from "../context";
import { useContext } from 'react';


function BasketList() {
	const { order = [],
		handleBasketShow = Function.prototype,
	} = useContext(ShopContext);

	const totalPrice = order.reduce((sum, el) => {
		return sum + el.price * el.quantity
	}, 0)

	return (
		<ul className="collection basket-list">
			<li className="collection-item active">Корзина</li>

			{order.length ? order.map(item => (
				<BasketItem key={item.id} {...item} />
			)) : <li className="collection-item">Ваша корзина пуста</li>}

			<li className="collection-item active">Общая стоимость: {totalPrice} грн.</li>
			<i className="material-icons closed-basket" onClick={handleBasketShow}>close</i>
		</ul>

	)
}
export { BasketList }
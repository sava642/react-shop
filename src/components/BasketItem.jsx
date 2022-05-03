import { useContext } from 'react';
import { ShopContext } from '../context';

function BasketItem(props) {
	const {
		id,
		name,
		price,
		quantity,
	} = props;

	const { removeFromBasket, addQuantity, decQuantity } = useContext(ShopContext);

	return (
		<li className="collection-item">
			{name} x {quantity} = {price * quantity} грн.
			<span
				className="secondary-content delete-item"
			>

				<i className="material-icons blue-grey darken-4" style={{
					position: 'relative', right: "8px"
				}}
					onClick={() => decQuantity({
						id,
						quantity,
					})}>remove</i>
				<i className="material-icons blue-grey darken-4" style={{
					position: 'relative', right: "3px"
				}}
					onClick={() => addQuantity({
						id,
						quantity,
					})}
				>add</i>

				<i className="material-icons" onClick={() => removeFromBasket(id)}>close</i></span>
		</li>

	)
}
export { BasketItem };
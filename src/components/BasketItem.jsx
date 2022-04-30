function BasketItem(props) {
	const {
		id,
		name,
		price,
		quantity,
		deleteBasketElement = Function.prototype,
		addQuantity = Function.prototype,
		decQuantity = Function.prototype,
	} = props;
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

				<i className="material-icons" onClick={() => deleteBasketElement(id)}>close</i></span>
		</li>

	)
}
export { BasketItem };
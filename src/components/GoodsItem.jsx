function GoodsItem(props) {
	const {
		id,
		name,
		description,
		price,
		full_background,
		addToBasket = Function.prototype,
	} = props;
	return (

		<div className="card" id={id}>
			<div className="card-image">
				<img src={full_background} alt={name} />

				<a href='#!' className="btn-floating halfway-fab waves-effect waves-light red"><i className="material-icons">add</i></a>
			</div>
			<div className="card-content">
				<span className="card-title">{name}</span>
				<p style={{ marginBottom: '10px' }}>
					{description}
				</p>
			</div>
			<div className="card-action">
				<button onClick={() => addToBasket({
					id,
					name,
					price,
				})} className="btn">Купить</button>
				<span className="right" style={{ fontSize: '1.2rem' }}>{price} грн.</span>
			</div>

		</div>

	)


}
export { GoodsItem }
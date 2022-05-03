import { useEffect, useContext } from "react";
import { ShopContext } from '../context'

function Alert() {
	const {
		alertName: name,
		closeAlert = Function.prototype,
	} = useContext(ShopContext);

	useEffect(() => {
		const Timer = setTimeout(closeAlert, 3000);
		return () => {
			clearTimeout(Timer)
		}
		//eslint-disable-next-line
	}, [name])

	return (<div id="toast-container">
		<div className="toast toast-alert">
			{name} добавлен в корзину
		</div>
	</div>

	)
}
export { Alert }
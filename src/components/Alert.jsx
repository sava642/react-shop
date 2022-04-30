import { useEffect } from "react";

function Alert(props) {
	const {
		name,
		closeAlert = Function.prototype,
	} = props;

	useEffect(() => {
		const Timer = setTimeout(closeAlert, 30000);
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
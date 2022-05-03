export function reducer(state, { type, payload }) {
	switch (type) {
		case 'SET_GOODS':
			return {
				...state,
				goods: payload || [],
				loading: false,
			};
		case 'TOGGLE_SHOW': {
			return {
				...state,
				isBasketShow: !state.isBasketShow,
			}
		}
		case 'ADD_TO_BASKET': {
			const itemIndex = state.order.findIndex(el => el.id === payload.id)

			let newOrder = null;
			if (itemIndex < 0) {
				const newItem = {
					...payload,
					quantity: 1,
				}
				newOrder = [...state.order, newItem];
			} else {
				newOrder = state.order.map((orderItem, index) => {
					if (index === itemIndex) {
						return {
							...orderItem,
							quantity: orderItem.quantity + 1,
						};
					} else {
						return orderItem;
					}
				});
			}
			return {
				...state,
				order: newOrder,
				alertName: payload.name,
			}
		}
		case 'REMOVE_FROM_BASKET':
			return {
				...state,
				order: state.order.filter((el) => el.id !== payload.id)
			}
		case 'CLOSE_ALERT':
			return {
				...state,
				alertName: ''
			}
		case 'ADD_QUANTITY':
			return {
				...state,
				order: state.order.map((el) => {
					if (el.id === payload.id) {
						return {
							...el,
							quantity: el.quantity + 1
						}
					} else {
						return el;
					}
				}),
			}
		case 'DEC_QUANTITY':
			return {
				...state,
				order: state.order.map((el) => {
					if (el.id === payload.id) {
						return {
							...el,
							quantity: el.quantity ? el.quantity - 1 : 0
						}
					} else {
						return el;
					}
				})
			}

		default:
			return state;
	}
}
import { createContext, useReducer } from "react";
import { reducer } from './reducer';

export const ShopContext = createContext();

const initialState = {
	goods: [],
	loading: true,
	order: [],
	isBasketShow: false,
	alertName: '',
};


export const ContextProvider = ({ children }) => {
	const [value, dispatch] = useReducer(reducer, initialState);

	value.addToBasket = (item) => {
		dispatch({ type: 'ADD_TO_BASKET', payload: item })
	}

	value.handleBasketShow = () => {
		dispatch({ type: 'TOGGLE_SHOW' })
	}

	value.addQuantity = (item) => {
		dispatch({ type: 'ADD_QUANTITY', payload: item })
	}

	value.decQuantity = (item) => {
		dispatch({ type: 'DEC_QUANTITY', payload: item })
	}


	value.removeFromBasket = (itemId) => {
		dispatch({ type: 'REMOVE_FROM_BASKET', payload: { id: itemId } })
	}

	value.closeAlert = () => {
		dispatch({ type: 'CLOSE_ALERT' })
	}

	value.setGoods = (data) => {
		dispatch({ type: 'SET_GOODS', payload: data })
	}

	return (
		<ShopContext.Provider value={value}>
			{children}
		</ShopContext.Provider>
	)
}
import { useEffect, useContext } from 'react';
import { API_KEY, API_URL } from '../config';

import { ShopContext } from '../context'

import { Preloader } from './Preloader';
import { GoodsList } from './GoodsList';
import { Basket } from './Basket'
import { BasketList } from './BasketList';
import { Alert } from './Alert'

function Shop() {
	const { loading, order, isBasketShow, alertName, setGoods } = useContext(ShopContext)

	useEffect(function getGoods() {
		fetch(API_URL, {
			headers: {
				'Authorization': API_KEY,
			},
		})
			.then(response => response.json())
			.then((data) => {
				data.featured && setGoods(data.featured);
			});
		//eslint-disable-next-line
	}, []);

	return (
		<main className="container content">
			<Basket quantity={order.length} />
			{loading ? <Preloader /> : <GoodsList />}
			{isBasketShow && <BasketList />}
			{alertName && <Alert />}
		</main>
	);

};

export { Shop }
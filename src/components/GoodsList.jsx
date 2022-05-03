import { useContext } from 'react';
import { ShopContext } from '../context';
import { GoodsItem } from './GoodsItem'

function GoodsList() {
	const { goods = [] } = useContext(ShopContext);

	if (goods.lenght) {
		return <h3>Ничего не найдено</h3>
	} else {
		return <div className="goods">
			{
				goods.map((item) => (
					<GoodsItem key={item.id} {...item} />
				))
			}

		</div>
	}



}
export { GoodsList }
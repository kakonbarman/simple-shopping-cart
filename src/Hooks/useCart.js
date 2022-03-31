import { useEffect, useState } from "react";
import { getStoredCart } from "../utilities/myFakeDB";

const useCart = (products) => {
	const [cart, setCart] = useState([]);

	useEffect(() => {
		const storedCart = getStoredCart();
		// console.log(storedCart);
		const savedCart = [];

		for (const id in storedCart) {
			// console.log(id);
			const addedProduct = products.find((product) => product.id === id);
			if (addedProduct) {
				const quantity = storedCart[id];
				addedProduct.quantity = quantity;
				savedCart.push(addedProduct);
			}
		}
		setCart(savedCart);
	}, [products]);

	return [cart, setCart];
};

export default useCart;
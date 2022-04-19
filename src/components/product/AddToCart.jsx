import React from "react";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

import "./AddToCart.scss";

import { useCartDispatch, useCartState } from "../../cart-context";

function AddToCart({ product }) {
	const { products } = useCartState();
	const dispatch = useCartDispatch();

	const cartEntry = products[product.id];
	if (cartEntry) {
		return (
			<div className="add-to-cart">
				<button
					className="add-to-cart__action add-to-cart__action--minus"
					onClick={() => dispatch({ type: "decrement", payload: product })}>
					<RemoveIcon className="add-to-cart__icon" size={1.2} />
				</button>
				<div className="add-to-cart__quantity">{cartEntry.quantity}</div>
				<button
					className="add-to-cart__action add-to-cart__action--plus"
					onClick={() => dispatch({ type: "increment", payload: product })}>
					<AddIcon className="add-to-cart__icon" size={1.2} />
				</button>
			</div>
		);
	} else {
		return (
			<button
				className="add-to-cart-button"
				onClick={() => dispatch({ type: "increment", payload: product })}>
				Add to cart
			</button>
		);
	}
}

export default AddToCart;

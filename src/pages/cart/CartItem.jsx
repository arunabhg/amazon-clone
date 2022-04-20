import React from "react";
import CloseIcon from "@mui/icons-material/Close";

import "./CartItem.scss";

import CurrencyFormat from "../../components/general/CurrencyFormat";
import { calculatePriceDetails } from "../../utils/products";
import AddToCart from "../../components/product/AddToCart";

function CartItem({ product }) {
	const { finalPrice } = calculatePriceDetails(product.price);

	return (
		<div className="cart-item">
			<div className="cart-item__image">
				<img alt={product.title} src={product.images[0]} />
			</div>
			<div className="cart-item__details">
				<div className="cart-item__title">{product.title}</div>
				<div className="cart-item__brand">by {product.brand}</div>
			</div>
			<div className="cart-item__purchase">
				<div className="cart-item__price">
					<CurrencyFormat
						className="cart-item__currency"
						currencyCode={product.price.currency}
						value={finalPrice}
					/>
				</div>
				<div className="cart-item__multiply">
					<CloseIcon size={1.2} />
				</div>
				<div className="cart-item__quantity">
					<AddToCart product={product} />
				</div>
				<div className="cart-item__assign">=</div>
				<div className="cart-item__amount">
					<CurrencyFormat
						className="cart-item__currency bold"
						currencyCode={product.price.currency}
						value={finalPrice * product.quantity}
					/>
				</div>
			</div>
		</div>
	);
}

export default CartItem;

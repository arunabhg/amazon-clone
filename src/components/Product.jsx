import React from "react";
import "./Product.css";

function Product() {
	return (
		<div>
			<div className="product">
				<div className="product_info">
					<p>Title</p>
					<p className="product_price">
						<small>$</small>
						<strong>30</strong>
					</p>
					<div className="product_rating">⭐⭐</div>
				</div>
				<img
					src="https://m.media-amazon.com/images/I/91l-8Ukz2cL._AC_UL320_.jpg"
					alt="product-image"
				/>
				<button>Add to Cart</button>
			</div>
		</div>
	);
}

export default Product;

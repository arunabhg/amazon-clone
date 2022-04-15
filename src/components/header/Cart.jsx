import React from "react";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { Link } from "react-router-dom";
import "./Cart.scss";

function Cart() {
	//? const { totalQuantity } = useCartState();

	return (
		<>
			<Link to="/cart" className="h-cart">
				<ShoppingCartOutlinedIcon />
				{/* <div className="h-cart__count">{totalQuantity}</div> */}
			</Link>
		</>
	);
}

export default Cart;

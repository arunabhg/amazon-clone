import React from "react";
import "./Header.css";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import LocalMallIcon from "@mui/icons-material/LocalMall";
import SearchIcon from "@mui/icons-material/Search";

function Header() {
	return (
		<div className="header">
			<div className="header_logo">
				<LocalMallIcon className="header_logoImage" fontSize="large" />
				<h2 className="header_logoTitle">eShop</h2>
			</div>

			<div className="header_search">
				<input
					type="text"
					className="header_searchInput"
					placeholder="Search"
				/>
				<SearchIcon className="header_searchIcon" />
			</div>

			<div className="header_nav">
				<div className="nav_item">
					<span className="nav_itemLineOne">Hello Guest</span>
					<span className="nav_itemLineTwo">Sign In</span>
				</div>
				<div className="nav_item">
					<span className="nav_itemLineOne">Your</span>
					<span className="nav_itemLineTwo">Shop</span>
				</div>
				<div className="nav_itemBasket">
					<ShoppingCartIcon />
					<span className="nav_itemLineTwo nav_basketCount">0</span>
				</div>
			</div>
		</div>
	);
}

export default Header;

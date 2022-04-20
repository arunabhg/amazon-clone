import React from "react";
import Banner from "./Banner";
import Products from "./Products";

import "./index.scss";

function index() {
	return (
		<div className="home">
			<Banner />
			<div className="home_section">
				<Products />
			</div>
		</div>
	);
}

export default index;

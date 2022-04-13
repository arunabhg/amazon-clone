import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
	return (
		<div>
			<div className="home">
				<div className="home_container">
					<img
						src="https://www.xcart.com/wp-content/uploads/2019/01/ecommerce-768x278.jpg"
						alt=""
						className="home_image"
					/>
					<div className="home_row">
						<Product />
						<Product />
					</div>
					<div className="home_row">
						<Product />
						<Product />
						<Product />
					</div>
					<div className="home_row">
						<Product />
					</div>
				</div>
			</div>
		</div>
	);
}

export default Home;

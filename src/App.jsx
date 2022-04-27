import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/header";
import Home from "./pages/home";
import ProductPage from "./pages/product";
import LoginPage from "./pages/login";
import CartPage from "./pages/cart";
import "./App.scss";

function App() {
	return (
		<BrowserRouter>
			<Header />
			<div className="page-container">
				<Routes>
					<Route exact path="/" element={<Home />} />
					<Route path="product" element={<ProductPage />}>
						<Route path=":productId" element={<ProductPage />} />
					</Route>
					<Route path="login" element={<LoginPage />} />
					<Route path="cart" element={<CartPage />} />
				</Routes>
			</div>
		</BrowserRouter>
	);
}

export default App;

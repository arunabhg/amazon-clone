import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/header";
import Home from "./pages/home";
import Product from "./pages/product";
import LoginPage from "./pages/login";
import CartPage from "./pages/cart";
import "./App.scss";

function App() {
	return (
		<BrowserRouter>
			<Header />
			<div className="page-container">
				<Routes>
					<Route path="/" element={<Home />} />
				</Routes>
				<Routes>
					<Route path="/product/:productId" element={<Product />} />
				</Routes>
				<Routes>
					<Route path="/login" element={<LoginPage />} />
				</Routes>
				<Routes>
					<Route path="/cart" element={<CartPage />} />
				</Routes>
			</div>
		</BrowserRouter>
	);
}

export default App;


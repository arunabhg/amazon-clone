import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/header";
import "./App.scss";

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Header />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;


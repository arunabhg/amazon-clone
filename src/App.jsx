import { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import Header from "./components/header";
import "./App.css";
import Home from "./components/Home";

function App() {
	const [count, setCount] = useState(0);

	return (
		<div className="App">
			<Header />
			{/* <Home /> */}
		</div>
	);
}

export default App;


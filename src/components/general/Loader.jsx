import React from "react";

function Loader({ size }) {
	return (
		<div className="loader">
			<div className="loader_icon" style={{ width: size, height: size }} />
		</div>
	);
}

export default Loader;

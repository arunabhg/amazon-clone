import React, { useState, useEffect } from "react";

import "./imageSlider.scss";

function ImageSlider({ product }) {
	const [images, setImages] = useState([]);
	const [image, setImage] = useState("");

	useEffect(
		function () {
			setImages(product.images);
			if (product.images) {
				setImage(product.images[0]);
			} else {
				setImage("");
			}
		},
		[product]
	);

	const imageClick = (src) => {
		setImage(src);
	};
	return (
		<div className="slider">
			<div className="slider_left">
				<ul className="slider_listing">
					{images &&
						images.map((image, i) => (
							<li
								className="slider__list"
								key={i}
								onClick={() => {
									imageClick(image);
								}}>
								<img alt={product.title} src={image} />
							</li>
						))}
				</ul>
			</div>
			<div className="slider__right">
				<div className="slider__display">
					<img alt={product.title} src={image} />
				</div>
			</div>
		</div>
	);
}

export default ImageSlider;

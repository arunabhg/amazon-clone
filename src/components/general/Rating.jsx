import React from "react";
import StarIcon from "@mui/icons-material/Star";
import StarOutlineIcon from "@mui/icons-material/StarOutline";
import classNames from "classnames";

import "./Rating.scss";

function Rating({ rating, maxRating }) {
	return (
		<div className="rating">
			{new Array(maxRating).fill(0).map((_, index) => {
				const isActive = rating >= index + 1;
				return (
					<StarIcon
						key={index}
						className={classNames("rating__star", {
							"rating__star--active": isActive
						})}
						fontSize="large"
						path={isActive ? StarIcon : StarOutlineIcon}
					/>
				);
			})}
		</div>
	);
}

export default Rating;

import React from "react";
import RoomOutlinedIcon from "@mui/icons-material/RoomOutlined";
import "./DeliveryLocation.scss";

function DeliveryLocation() {
	return (
		<div className="delivery-location">
			<RoomOutlinedIcon className="delivery-location__pin" fontSize="medium" />
			<div className="delivery-location__details">
				<div className="delivery-location__hint">Hello</div>
				<div className="delivery-location__title">Select your address</div>
			</div>
		</div>
	);
}

export default DeliveryLocation;

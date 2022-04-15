import React from "react";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import "./Account.scss";

function Account() {
	return (
		<div className="account">
			<div className="account__hint">Hello, Sign in</div>
			<div className="account__title">
				My Account
				<ArrowDropDownIcon className="account__arrow" fontSize="medium" />
			</div>
		</div>
	);
}

export default Account;

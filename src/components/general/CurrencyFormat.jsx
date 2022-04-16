import React from "react";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import classNames from "classnames";

import "./CurrenyFormat.scss";

const currenyCodeIconMap = {
	INR: CurrencyRupeeIcon
};

const currencyCodeLocaleMap = {
	INR: "en-IN"
};

function CurrencyFormat({
	className,
	value,
	currencyCode,
	iconSize = 1,
	...remainingProps
}) {
	return (
		<div
			className={classNames("currency-format", { [className]: className })}
			{...remainingProps}>
			<CurrencyRupeeIcon fontSize="medium" />
			<span className="currency-format__value">
				{value.toLocaleString(currencyCodeLocaleMap[currencyCode])}
			</span>
		</div>
	);
}

export default CurrencyFormat;

// Calculate the base Price, final Price and whether there is a discount on a product
export function calculatePriceDetails(priceDetails) {
	const basePrice = parseInt(priceDetails.value, 10);
	const finalPrice = parseInt(
		(basePrice * (100 - priceDetails.discount)) / 100,
		10
	);
	return {
		basePrice,
		finalPrice,
		isDiscounted: finalPrice !== basePrice
	};
}

import { apiRequest } from "./utils";

function getProductsList() {
	return apiRequest("GET", "/");
}

function getProduct(id) {
	return apiRequest("GET", "/" + id);
}

// eslint-disable-next-line import/no-anonymous-default-export
export default {
	getList: getProductsList,
	getProduct: getProduct
};

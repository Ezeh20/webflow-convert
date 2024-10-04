import { data } from "./data.js";

export default defineEventHandler(async (event) => {
	const { id } = getQuery(event);
	const allProducts = [...data.tops, ...data.bottoms, ...data.accessories];
	const product = allProducts.find((product) => product.id === id);

	if (product) {
		return {
			data: product,
			status: 200,
		};
	} else {
		throw createError({
			statusCode: 404,
			statusMessage: "Category not found",
		});
	}
});

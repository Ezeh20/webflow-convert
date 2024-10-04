import { data } from "./data.js";

export default defineEventHandler(async (event) => {
	const { category } = getQuery(event);

	switch (category) {
		case "all":
			const allProducts = [...data.bottoms, ...data.tops, ...data.accessories];
			const shuffledProducts = allProducts.sort(() => Math.random() - 0.5);
			return {
				data: shuffledProducts,
				status: 200,
			};
		case "tops":
			return {
				data: data.tops,
				status: 200,
			};
		case "bottoms":
			return {
				data: data.bottoms,
				status: 200,
			};
		case "accessories":
			return {
				data: data.accessories,
				status: 200,
			};
		default:
			throw createError({
				statusCode: 404,
				statusMessage: "product not found",
			});
	}
});

import { data } from "./data.js";

export default defineEventHandler(async (event) => {
	const { category } = getQuery(event);

	switch (category) {
		case "all":
			return {
				data: [...data.bottoms, ...data.tops, ...data.accessories],
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
				statusMessage: "Category not found",
			});
	}
});

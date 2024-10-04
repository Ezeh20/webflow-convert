export default defineEventHandler(async (event) => {
    try {
        const { category } = getQuery(event);
        console.log("Category requested:", category);
        console.log("Available data:", data);

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
                    statusMessage: 'Category not found',
                });
        }
    } catch (error) {
        console.error("Error in API handler:", error);
        throw createError({
            statusCode: 500,
            statusMessage: 'Internal Server Error',
        });
    }
});

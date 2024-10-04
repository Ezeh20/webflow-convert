<script setup>
const route = useRoute()
const { id } = route.params

const { data } = await useAsyncData("product", () => $fetch(`/api/product?id=${id}`))
</script>


<template>
    <div class="product_section">
        <div data-wf-sku-bindings="%5B%7B%22from%22%3A%22f_main_image_4dr.url%22%2C%22to%22%3A%22style.background-image%22%7D%5D"
            :style="{ backgroundImage: `url(${data?.data?.image})` }" class="product_photo"></div>
        <div class="product_content">
            <h1 class="product_title">{{ data?.data?.name }}</h1>
            <div data-wf-sku-bindings="%5B%7B%22from%22%3A%22f_price_%22%2C%22to%22%3A%22innerHTML%22%7D%5D"
                class="product_price">${{ data?.data?.price }}</div>
            <p class="product_description">{{ data?.data.desc }}</p>
            <div>
                <form data-node-type="commerce-add-to-cart-form" data-commerce-sku-id="5c7b8e11d99ee5a1d188877c"
                    data-loading-text="Adding to cart..." data-commerce-product-id="5c7b8e11ee88078b2eb917df"
                    class="w-commerce-commerceaddtocartform">
                    <div data-wf-sku-bindings="%5B%7B%22from%22%3A%22f_sku_values_3dr%22%2C%22to%22%3A%22optionValues%22%7D%5D"
                        data-commerce-product-sku-values="%7B%22c4c8cdec066b822f9155bf3bc7ff7bdf%22%3A%22db3f173c7fc1227da6d1bb7b7dc74c00%22%7D"
                        data-node-type="commerce-add-to-cart-option-list"
                        data-commerce-product-id="5c7b8e11ee88078b2eb917df" data-preselect-default-variant="false"
                        role="group">
                        <div role="group"><label
                                data-wf-bindings="%5B%7B%22innerHTML%22%3A%7B%22type%22%3A%22PlainText%22%2C%22filter%22%3A%7B%22type%22%3A%22identity%22%2C%22params%22%3A%5B%5D%7D%2C%22dataPath%22%3A%22name%22%7D%7D%5D">Size</label><select
                                id="option-set-c4c8cdec066b822f9155bf3bc7ff7bdf"
                                data-node-type="commerce-add-to-cart-option-select"
                                data-commerce-option-set-id="c4c8cdec066b822f9155bf3bc7ff7bdf" class="w-select"
                                required="">
                                <option value="" selected="">Select Size</option>
                                <option v-for="size in data?.data?.sizes" :key="size" :value="size">{{ size }}</option>
                            </select></div>
                    </div><label for="quantity-54ad9a0e0a51a3aa72ae06e76b969221">Quantity</label><input type="number"
                        pattern="^[0-9]+$" inputmode="numeric" id="quantity-54ad9a0e0a51a3aa72ae06e76b969221"
                        name="commerce-add-to-cart-quantity-input" min="1"
                        class="w-commerce-commerceaddtocartquantityinput" value="1"><input type="submit"
                        data-node-type="commerce-add-to-cart-button" data-loading-text="Adding to cart..."
                        aria-busy="false" aria-haspopup="dialog" class="w-commerce-commerceaddtocartbutton button"
                        value="Add to Cart">
                </form>
                <div style="display:none" class="w-commerce-commerceaddtocartoutofstock" tabindex="0">
                    <div>This product is out of stock.</div>
                </div>
                <div aria-live="" data-node-type="commerce-add-to-cart-error" style="display:none"
                    class="w-commerce-commerceaddtocarterror">
                    <div data-node-type="commerce-add-to-cart-error"
                        data-w-add-to-cart-quantity-error="Product is not available in this quantity."
                        data-w-add-to-cart-general-error="Something went wrong when adding this item to the cart."
                        data-w-add-to-cart-mixed-cart-error="You can’t purchase another product with a subscription."
                        data-w-add-to-cart-buy-now-error="Something went wrong when trying to purchase this item."
                        data-w-add-to-cart-checkout-disabled-error="Checkout is disabled on this site."
                        data-w-add-to-cart-select-all-options-error="Please select an option in each set.">Product is
                        not available in this quantity.</div>
                </div>
            </div>
        </div>
    </div>
</template>


<!-- 

   <option value="db3f173c7fc1227da6d1bb7b7dc74c00">S</option>
                                <option value="85a221b8b1126a77203cbfc29acd38e7">M</option>
                                <option value="f7f0193d4d1a1e33fffca3564e288848">L</option>
                                <option value="2dda0d528d79198d5c59a1a8151bfc7b">XL</option>
-->
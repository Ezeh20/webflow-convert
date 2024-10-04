<script setup>
import ProductCard from '~/components/ProductCard.vue';
const { data} = await useAsyncData("bottoms", () => $fetch("/api/products?category=bottoms"))
</script>


<template>
    <main>
        <div class="hero_checkout">
            <h1 class="largeheading">Bottoms</h1>
        </div>
        <div class="w-dyn-list">
            <div v-if="data?.data?.length > 0" role="list" class="w-dyn-items w-row">
                <div v-for="item in data.data" :key="item?.id">
                    <ProductCard :item="item" />
                </div>
            </div>
            <div v-else>
                <div class="w-dyn-empty">
                    <div>No items found.</div>
                </div>
            </div>
        </div>
    </main>
</template>
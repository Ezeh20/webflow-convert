<script setup>
import ProductCard from '~/components/ProductCard.vue';


const { data, pending, error } = useLazyFetch("/api/products?category=all")
</script>

<template>
    <main>
        <p v-if="pending === 'loading'">Please wait..</p>
        <p class=" px-4 bg-black hidden" v-if="error"> {{ error.data.statusMessage }}</p>
        <section v-else>
            <div class="w-dyn-list">
                <div v-if="data?.data?.length > 0" role="list" class="w-dyn-items w-row">
                    <div v-for="item in data.data" :key="item?.id">
                        <ProductCard :item="item"/>
                    </div>
                </div>
                <div v-else class="w-dyn-empty">
                    <div>No items found.</div>
                </div>
            </div>
        </section>
    </main>
</template>